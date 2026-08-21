---
title: "ElloFive documentation"
headline: "ElloFive / Ello5"
btns:
-
    caption: "Introduction"
    url: "/getting-started/introduction/"
    type: "regular"
-
    caption: "GitHub"
    url: "https://github.com/EricksonAtHome/ElloFive"
    type: "outline"
    external: true
summary: "Private local software-engineering AI on Ollama, with FRC7, DeepFakes deep learning, and an on-disk knowledge base. Docs rebuild automatically via GitHub Pages when you push updates."
displaySummary: true
layout: "layouts/front-page.html"
overview:
-
    title: "Getting Started"
    url: "/getting-started/"
    description: "Install ElloFive, set up models, and run chat, API, and Elloten UI."
-
    title: "Customization"
    url: "/customization/"
    description: "Theme and layout notes for this Spruce CSS Eleventy documentation site."
faqs:
-
    title: "What is ElloFive?"
    description: "ElloFive is an elite coding system that runs locally on Ollama. Elloten is the chat UX on ello5.com. Ello5 is the AI model. The local CLI stays ellofive."
-
    title: "How do docs stay up to date?"
    description: "Pushing changes under docu/ (or to main) triggers the Deploy Documentation GitHub Action, which builds this Eleventy site and publishes it to GitHub Pages."
-
    title: "Where is the source repo?"
    description: "Product source lives at https://github.com/EricksonAtHome/ElloFive. This documentation site uses the Spruce CSS Eleventy documentation template under /docu."
-
    title: "How do I run docs locally?"
    description: "From the repository root: cd docu && npm install && npm start. Production build: npm run prod. GitHub Pages uses npm run build-ghpages."
---
