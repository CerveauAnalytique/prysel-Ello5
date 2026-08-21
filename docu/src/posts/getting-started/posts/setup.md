---
title: "Setup"
summary: "Install ElloFive locally, then run or publish this documentation site."
eleventyNavigation:
  key: Setup
  parent: Getting Started
  order: 4
---

## ElloFive product (CLI / API)

From [EricksonAtHome/ElloFive](https://github.com/EricksonAtHome/ElloFive):

```shell
bash scripts/install.sh
# or rebuild models only:
ellofive setup

ellofive chat
ellofive api   # Elloten UI + API → http://127.0.0.1:3000
```

## Documentation site (this `/docu` folder)

### Install the dependencies

```shell
cd docu
npm install
```

### Run development mode

Watches Markdown/Sass and serves the site locally:

```shell
npm start
```

### Production build

Compresses Sass and builds static HTML into `docu/dist`:

```shell
npm run prod
```

### GitHub Pages build

Used by CI. Sets the Eleventy path prefix for project Pages:

```shell
npm run build-ghpages
```

## Automatic updates

On every push to `main` that touches documentation (or via workflow dispatch), `.github/workflows/deploy-docu-pages.yml`:

1. Installs `docu` dependencies
2. Runs `npm run build-ghpages`
3. Deploys `docu/dist` to GitHub Pages

Enable Pages in the repository: **Settings → Pages → Source: GitHub Actions**.
