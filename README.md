# Portfolio

Minimal, modern portfolio built with React, Vite, TailwindCSS, and Framer Motion.

## Stack

- React + Vite
- TailwindCSS
- Framer Motion
- Glassmorphism dark UI

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── profile.png
│       └── projects/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Deploy

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

### Netlify

1. Import from GitHub in Netlify.
2. Use:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy site.
