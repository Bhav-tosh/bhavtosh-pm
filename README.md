# Bhavtosh Upadhyay — Portfolio (Mini Militia Edition)

A doodle/sketch-styled portfolio inspired by Mini Militia's hand-drawn aesthetic.

## 🚀 Setup

1. **Clone or create folder**
   ```bash
   mkdir bhavtosh-portfolio && cd bhavtosh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run dev server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

4. **Build for production**
   ```bash
   npm run build
   ```
   Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## 🎨 Tech Stack

- **Vite** — fast dev server & bundler
- **React 18** — UI framework
- **Tailwind CSS** — utility-first styling
- **lucide-react** — icons
- **Google Fonts** — Permanent Marker, Patrick Hand, Caveat, Bangers

## 📝 Customize

- Edit content in `src/data.js`
- Tweak colors/styles in `src/index.css`
- Edit hero text in `src/components/Hero.jsx`
- Update social links in `src/components/Contact.jsx`
- Replace resume link with your Google Drive URL in `Hero.jsx`

## 📈 Google Analytics

Analytics is wired up with GA4 (`gtag.js`) and loads **only in production builds** when a Measurement ID is present.

1. Get a Measurement ID (`G-XXXXXXXXXX`) at [analytics.google.com](https://analytics.google.com) → Admin → Property → Web data stream.
2. Local: copy `.env.example` to `.env` and set `VITE_GA_ID=G-XXXXXXXXXX`.
3. Hosting (Vercel/Netlify): add an env var `VITE_GA_ID` with the same value, then redeploy.

Custom events tracked (besides the default `page_view`): `music_play` / `music_pause`, `theme_toggle`, `resume_click`, `social_click`, `contact_submit`. See them live in GA4 under **Reports → Realtime**.

## 🚢 Deploy

**Vercel:** Push to GitHub, import project, deploy.
**Netlify:** Drag the `dist/` folder after running `npm run build`.
**GitHub Pages:** Use `gh-pages` package or set up Actions.
