# Walid Maarad — Portfolio

A responsive single-page portfolio built with React, TypeScript, and Vite. It is configured for both local development and GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Update the content

The personal details, career stages, projects, skills, education, principles, and community work live in `src/content.ts`. Longer narrative copy is in `src/App.tsx`.

## Publish on GitHub Pages

1. Push the repository to GitHub using `main` as the default branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` or run the workflow manually from the **Actions** tab.

The Vite base path is relative, so the same build works for `username.github.io` and `username.github.io/repository-name`.
