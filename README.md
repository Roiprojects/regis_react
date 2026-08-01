# Regis and Savoy — React + Vite

A React + Vite (SPA) port of the Regis and Savoy Corporate Services LLP website,
maintaining the same visual output as the original Next.js build.

## Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router v7** (client-side routing)
- **Framer Motion** (animations) + **Lenis** (smooth scroll)
- Google Fonts: Cormorant Garamond, Inter, Playfair Display, Jost

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Routes

`/` · `/about` · `/services` · `/capital` · `/contact` · `/why-regis-and-savoy`

## Notes

- This is a single-page app. When hosting on a static server, route all paths to
  `index.html` (a `vercel.json` rewrite is included for Vercel).
- The original Next.js project is maintained separately.
