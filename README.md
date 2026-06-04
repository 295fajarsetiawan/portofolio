# Fajar Portfolio

Portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## Run Locally

Requirements:

- Node.js 22 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to the `main` branch, or run the `Deploy to GitHub Pages` workflow manually from the `Actions` tab.

The Vite base path is configured automatically for GitHub Pages project sites.
