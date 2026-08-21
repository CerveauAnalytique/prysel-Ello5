# ElloFive documentation (`/docu`)

Static docs site based on the
[Spruce CSS Eleventy Documentation Template](https://github.com/conedevelopment/sprucecss-eleventy-documentation-template).

Product repository: [EricksonAtHome/ElloFive](https://github.com/EricksonAtHome/ElloFive).

## Local development

```bash
cd docu
npm install
npm start
```

Production build:

```bash
npm run prod
```

## GitHub Pages (automatic updates)

Pushing changes under `docu/` to `main` runs
[`.github/workflows/deploy-docu-pages.yml`](../.github/workflows/deploy-docu-pages.yml),
which builds and deploys to GitHub Pages.

One-time setup in the GitHub repo:

1. **Settings → Pages → Source:** GitHub Actions
2. Optional: repository variable `PATH_PREFIX` (e.g. `/ElloFive/` or `/prysel-Ello5/`)

Published URL (project Pages):

`https://<owner>.github.io/<repo>/`

When this workflow runs on [EricksonAtHome/ElloFive](https://github.com/EricksonAtHome/ElloFive)
with `PATH_PREFIX=/ElloFive/`, pages are served at
`https://ericksonathome.github.io/ElloFive/`.

## Content

- Site config: `src/_data/site.json`
- Nav: `src/_data/navigation.json`
- Docs posts: `src/posts/**`
- Front page: `src/index.md`
