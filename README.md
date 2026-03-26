# Nexus — Copyright Remover

Browser-based video copyright remover using FFmpeg WebAssembly.
No upload needed — everything runs in your browser.

## 🚀 Quick Start

```bash
npm install        # installs packages + copies FFmpeg engine automatically
npm run dev        # start dev server at http://localhost:5173
```

## 🌐 Deploy to Vercel

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: **Vite**
4. Deploy ✅

## 📦 Build

```bash
npm run build      # output in /dist
```

## ℹ️ Why is ffmpeg-core.wasm missing?

The WASM file is 31 MB which exceeds GitHub's 25 MB limit.
It is **automatically** copied from node_modules after `npm install`.

## 💬 Support

Telegram: [@CyperXPloit](https://t.me/CyperXPloit)
