if (process.env.VERCEL) {
  console.log("🚫 Vercel detected → skipping FFmpeg setup");
  process.exit(0);
}

// normal local setup only
import fs from "fs";

console.log("Setting up FFmpeg locally...");

// এখানে তোমার existing ffmpeg logic থাকবে
// কিন্তু Vercel এ এটা আর run হবে না