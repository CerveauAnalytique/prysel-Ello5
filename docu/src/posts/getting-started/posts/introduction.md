---
title: "Introduction"
summary: "Welcome to ElloFive documentation — Elite Coding System with Ello5 AI mode, FRC7, and Elloten."
eleventyNavigation:
  key: Introduction
  parent: Getting Started
  order: 1
---

Welcome to the official documentation site for **[ElloFive](https://github.com/EricksonAtHome/ElloFive)**.

**Elloten** is the chat UX on `ello5.com`. **Ello5** is the AI model. The local CLI stays `ellofive`.

## About ElloFive

Private local software-engineering AI on [Ollama](https://ollama.com), with [FRC7](https://github.com/EricksonAtHome/FRC7) FRCL, DeepFakes deep learning, and an on-disk knowledge base.

| Name | Default base | Role |
| --- | --- | --- |
| `ellofive` | **qwen2.5:7b** | Elite Coding System (Pro) |
| `ellofive-fast` | llama3.2:3b | Low latency |
| `models5` | alias → Pro | FRC7 default |

## About this site

This documentation site is the [Spruce CSS Eleventy Documentation Template](https://github.com/conedevelopment/sprucecss-eleventy-documentation-template), installed under `/docu` in this repository.

- Edit Markdown under `docu/src/`
- Push to `main` → GitHub Actions rebuilds and publishes to **GitHub Pages**
- Product source of truth: [EricksonAtHome/ElloFive](https://github.com/EricksonAtHome/ElloFive)

## Domains (`ello5.com`)

| Host | Role |
| --- | --- |
| `ai.ello5.com` | Elloten chat UI/UX |
| `api.ello5.com` | REST API (`/v1/chat`, `/run/:model`) |
| `ft.svr.ello5.com` | Runtime front-tier (model serve) |
| `ello5.com` | Redirect → `ai.ello5.com` |
