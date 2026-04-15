# Portfolio

Interactive, multi-page portfolio built with React, Vite, TailwindCSS, and Framer Motion.

## Features

✨ **Interactive Multi-Page Experience** - Navigate through pages instead of scrolling

- Smooth page transitions with Framer Motion
- 7 unique pages: Home → About → Skills → Projects → Experience → Services → Contact

🎨 **Eye-Catching Design**

- Dark glassmorphism aesthetic
- Animated elements and hover effects
- Gradient progress bars for skills
- Interactive project cards with screenshots
- Animated page navigation indicators

⌨️ **Multiple Navigation Methods**

- Next/Back buttons in navbar
- Page indicator dots at bottom (clickable)
- Keyboard navigation using arrow keys (← →)
- Direct page selection from navbar links

🚀 **Rich Animations**

- Page transitions with stagger effects
- Animated component reveals
- Hover scales and glows
- Form submission feedback
- Rotating service icons

## Stack

- React + Vite
- TailwindCSS
- Framer Motion
- Context API for state management

## Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` and explore the pages!

## Navigation Guide

### Pages

1. **Home** - Welcome and introduction with profile image
2. **About** - Personal bio, education, and career goals
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Featured projects with live demos and source links
5. **Experience** - Education, certifications, and learning path
6. **Services** - Services offered for freelance projects
7. **Contact** - Contact form and social media links

### Navigation Methods

- **Navbar Buttons**: Click "Back" or "Next" to move between pages
- **Page Indicators**: Click dots at the bottom to jump to any page
- **Keyboard Shortcuts**: Use arrow keys (← →) to navigate
- **Navbar Links**: Click page names to jump directly

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
portfolio/
├── src/
│   ├── context/
│   │   └── PageContext.jsx          # Page state management
│   ├── pages/
│   │   ├── HeroPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ExperiencePage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── ContactPage.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   └── PageIndicator.jsx
│   ├── sections/                    # Legacy section components
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
- Customize contact links in `src/pages/ContactPage.jsx`

### Add More Pages

1. Create new page component in `src/pages/`
2. Import and add to pages array in `src/App.jsx`
3. Update PageContext with new page name

### Change Colors

- Modify color classes in page components
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

- Bundle size: 343 KB (106 KB gzipped)
- Fast page transitions powered by Framer Motion
- Optimized assets and lazy loading

## License

MIT - Feel free to use this portfolio as a template!
