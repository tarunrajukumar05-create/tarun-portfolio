# A Tarun Kumar Raju — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))

### Setup & Run

```bash
# 1. Extract the zip and navigate into the folder
cd tarun-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
npm run preview   # preview production build locally
```

The `dist/` folder contains the static files ready to deploy.

---

## 🌐 Free Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
- Push to GitHub → connect repo at netlify.com → auto-deploys

### GitHub Pages
```bash
npm run build
# Upload dist/ contents to gh-pages branch
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed navigation with mobile menu
│   ├── Hero.jsx         # Landing section with CTAs
│   ├── About.jsx        # About me + quote card + stats
│   ├── Skills.jsx       # Skills grid with progress bars
│   ├── Projects.jsx     # Project cards with GitHub links
│   ├── Experience.jsx   # Work timeline
│   ├── Contact.jsx      # Contact cards + CTA
│   └── Footer.jsx       # Footer with social links
├── App.jsx
├── main.jsx
└── index.css            # Tailwind + custom utilities
```

---

## 🎨 Design Highlights

- **Dark obsidian** background with gold accent palette
- **Playfair Display** (serif display) + **DM Sans** (body) + **JetBrains Mono** (mono)
- **Framer Motion** animations: fade-up on scroll, staggered reveals, progress bars
- **Glass morphism** cards with hover lift effects
- **Dot grid** background texture
- Fully **responsive** (mobile-first)
- Custom **gold scrollbar**

---

## ✏️ Customization

Update your GitHub/LinkedIn URLs in:
- `src/components/Projects.jsx` → `github` fields
- `src/components/Contact.jsx` → `href` fields
- `src/components/Footer.jsx` → social links
