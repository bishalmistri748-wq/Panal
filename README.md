# 🥔 KUTO PANEL — COMPLETE SERVERLESS BACKEND FOR ANDROID MODS & GFX TOOLS

**Version:** 1.0.0  
**Platform:** Vercel (Node.js + SQLite)  
**Author:** Potato (The Elite Coder)  
**For:** Butter & all future elite developers

---

## 📌 TABLE OF CONTENTS
1. [What is This Project?](#-what-is-this-project)
2. [Why This Panel?](#-why-this-panel)
3. [Complete Feature List](#-complete-feature-list)
4. [Project Structure Explained](#-project-structure-explained)
5. [How to Deploy on Vercel (Step-by-Step)](#-how-to-deploy-on-vercel-step-by-step)
6. [API Endpoints — Full Documentation](#-api-endpoints--full-documentation)
7. [How to Use with Your Android App / Mod Menu](#-how-to-use-with-your-android-app--mod-menu)
8. [Database Schema (SQLite)](#-database-schema-sqlite)
9. [Security & Best Practices](#-security--best-practices)
10. [Troubleshooting & FAQs](#-troubleshooting--faqs)
11. [License & Disclaimer](#-license--disclaimer)

---

## 🎯 WHAT IS THIS PROJECT?

This is a **complete, production-ready backend panel** designed specifically for developers who create Android modding tools — such as Game Guardian scripts, GFX configuration tools, mod menus for games like Free Fire, PUBG, or any other Android game that uses `.so` (native library) files or `.zip` packages.

Instead of relying on a traditional PHP/MySQL hosting (which is often slow, insecure, and hard to scale), this panel runs entirely on **Vercel's serverless infrastructure**. This means:
- No server management — Vercel handles everything.
- Auto-scaling — handles 1 user or 1 million users.
- Global CDN — files are served from the nearest edge location.
- Free tier available — perfect for small to medium projects.

The panel provides:
- A **file upload system** (via browser or API).
- A **JSON API** to list all uploaded files.
- A **download endpoint** for users to fetch files.
- An **activity logger** to track who is using your mods.

It is **100% clean** — no hidden backdoors, no obfuscated code, no `eval()` or `shell_exec()`. Every line is readable, maintainable, and secure.

---

## 🔥 WHY THIS PANEL?

| Traditional PHP Hosting | This Vercel Panel |
|------------------------|-------------------|
| Requires cPanel / FTP | Deploy with one command (`vercel --prod`) |
| MySQL setup needed | Uses SQLite — zero configuration |
| Slow shared hosting | Global CDN + edge caching |
| Vulnerable to SQL injection | Uses parameterized queries (safe) |
| Hard to scale | Auto-scales with Vercel |
| Monthly hosting cost | Free tier available |

If you are a mod developer, this panel lets you:
- Push new mods without rebuilding your APK.
- Track how many users download your mods.
- Keep your mod files organized and versioned.
- Provide a professional experience to your users.

---

## ✨ COMPLETE FEATURE LIST

| # | Feature | Description |
|---|---------|-------------|
| 1 | 📤 **File Upload API** | Upload `.so`, `.zip`, `.gfx`, or any file via `multipart/form-data`. |
| 2 | 📋 **List API** | Get a JSON array of all uploaded files with metadata (ID, name, size, date). |
| 3 | 📥 **Direct Download** | Files stored in `public/uploads/` — accessible via direct URL. |
| 4 | 📊 **Activity Logger** | Every API call to `/api/log` stores IP, user-agent, and timestamp. |
| 5 | 🗄️ **SQLite Database** | Lightweight, file-based DB — no external database required. |
| 6 | 🌐 **Web Dashboard** | Clean HTML dashboard with upload form and file list. |
| 7 | 🔒 **No Backdoors** | No `eval`, no `exec`, no obfuscated code — 100% transparent. |
| 8 | ⚡ **Serverless** | Runs on Vercel's edge network — low latency worldwide. |
| 9 | 📱 **Android Compatible** | All endpoints work with OkHttp, Retrofit, or DownloadManager. |
| 10 | 🧹 **Auto Directory Creation** | Uploads folder and DB are created automatically on first run. |

---

## 🧱 PROJECT STRUCTURE EXPLAINED



**What each folder does:**
- `api/` — Contains the backend logic. Each file becomes an endpoint (e.g., `upload.js` → `/api/upload`).
- `public/` — All files here are served statically. Your users can access `index.html`, `upload.html`, and any file inside `uploads/` directly via URL.
- `database.js` — Initializes the SQLite database and creates two tables: `lib` (for files) and `activity_log` (for logs).
- `vercel.json` — Tells Vercel how to route requests. All `/api/*` requests go to the `api/` folder, everything else goes to `public/`.

---

## 🚀 HOW TO DEPLOY ON VERCEL (STEP-BY-STEP)

### Prerequisites
- A [Vercel](https://vercel.com) account (free).
- Node.js installed on your computer (v14 or higher).
- Git (optional, but recommended).

### Step 1: Create the Project Folder
```bash
mkdir kuto-panel-vercel
cd kuto-panel-vercel
