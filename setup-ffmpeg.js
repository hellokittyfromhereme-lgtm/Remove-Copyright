/**
 * Copies ffmpeg-core ESM files from node_modules into public/ffmpeg/
 * Runs automatically after npm install (postinstall).
 * Manual: node setup-ffmpeg.js
 */
import { copyFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dest = join(__dirname, "public", "ffmpeg");
mkdirSync(dest, { recursive: true });

// Find @ffmpeg/core in node_modules (supports npm, pnpm, yarn)
function findEsmDir(base) {
  const direct = join(base, "node_modules", "@ffmpeg", "core", "dist", "esm");
  if (existsSync(join(direct, "ffmpeg-core.wasm"))) return direct;
  const pnpm = join(base, "node_modules", ".pnpm");
  if (existsSync(pnpm)) {
    const e = readdirSync(pnpm).find((d) => d.startsWith("@ffmpeg+core@"));
    if (e) {
      const p = join(pnpm, e, "node_modules", "@ffmpeg", "core", "dist", "esm");
      if (existsSync(join(p, "ffmpeg-core.wasm"))) return p;
    }
  }
  return null;
}

const esmDir = findEsmDir(__dirname);
if (!esmDir) {
  console.error("❌ @ffmpeg/core not found. Run: npm install");
  process.exit(1);
}

for (const f of ["ffmpeg-core.js", "ffmpeg-core.wasm"]) {
  const src = join(esmDir, f);
  if (existsSync(src)) { copyFileSync(src, join(dest, f)); console.log("✓", f); }
}
console.log("FFmpeg setup complete.");
