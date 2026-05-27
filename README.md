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

## 🚢 Deploy

**Vercel:** Push to GitHub, import project, deploy.
**Netlify:** Drag the `dist/` folder after running `npm run build`.
**GitHub Pages:** Use `gh-pages` package or set up Actions.
