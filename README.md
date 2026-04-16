# Portfolio

Minimal, modern one-page portfolio built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- One-page scroll experience with sections that reveal one by one
- Dark glassmorphism aesthetic
- Animated component reveals and hover effects
- Animated skill bars and project cards
- Contact form with visual feedback
- Clean anchor-based navigation

## Stack

- React + Vite
- TailwindCSS
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` and scroll through the sections.

## Navigation Guide

### Sections

1. **Hero** - Welcome and introduction with profile image
2. **About** - Personal bio, education, and career goals
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Featured projects with live demos and source links
5. **Experience** - Education, certifications, and learning path
6. **Services** - Services offered for freelance projects
7. **Contact** - Contact form and social media links

### Navigation

- Click the navbar links to jump to any section
- Scroll naturally to reveal the next section

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   ├── sections/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Customization

### Add Your Content

- Update skill names/levels in `src/data/skills.js`
- Modify projects in `src/data/projects.js`
- Edit experience/education in `src/data/experience.js`
- Customize contact links in `src/sections/Contact.jsx`

### Change Colors

- Modify color classes in section components
- Update TailwindCSS config in `tailwind.config.js`
- Adjust gradient colors in CSS

## Deploy

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

## Performance

- Bundle size: 328 KB (103 KB gzipped)
- Smooth scroll-reveal transitions powered by Framer Motion
- Optimized assets and lazy loading

## License

MIT - Feel free to use this portfolio as a template!
