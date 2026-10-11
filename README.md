# Saurabh Kale — Portfolio

A responsive, animated static portfolio built with React, TypeScript, Vite, Motion, and Lucide icons. Recreated from screenshots; no Lovable dependency.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `portfolio`) and push this project to its `main` branch.
2. In the repository, go to **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. The included `.github/workflows/deploy.yml` workflow builds and deploys automatically on pushes to `main`.
4. Your site will be at `https://YOUR_USERNAME.github.io/portfolio/` (or `https://YOUR_USERNAME.github.io/` if your repo is named `YOUR_USERNAME.github.io`).

The Vite `base: './'` setting supports either URL structure. The workflow installs dependencies and builds the static site.

## Customize

- Edit `src/data.ts` for biography, skills, experience, projects, and contact details.
- Replace `public/images/profile.jpg` with your actual photo (currently intentionally missing; initials fallback is shown).
- Add your actual resume as `public/resume.pdf` (currently a sample placeholder PDF; replace before publishing).
- The project art is CSS illustration, **not** the original screenshot images. Replace the CSS art with your own images if desired.
- Project GitHub links currently default to your GitHub profile. Set individual project repository links before publishing.
- Verify dates, job descriptions, phone, and links for accuracy before publishing.

## Notes

Static site: no backend or server required. Fonts are fetched from Google Fonts; system fonts are used if offline. The animations honor reduced-motion preferences.
