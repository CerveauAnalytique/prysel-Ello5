---
title: "Frequently Asked Questions"
summary: "Common questions about ElloFive and this documentation site."
displaySummary: true
layout: "layouts/faq.html"
faqs:
-
    title: "ElloFive"
    items:
    -
        title: "What is the difference between ElloFive, Ello5, and Elloten?"
        description: "ElloFive is the local elite coding system and CLI (ellofive). Ello5 is the AI model / mode. Elloten is the chat UX hosted on ello5.com (and locally via ellofive api)."
    -
        title: "Where is the source code?"
        description: "https://github.com/EricksonAtHome/ElloFive — models, FRC7 integration, API/UI, deploy configs, and product docs."
    -
        title: "How do I chat locally?"
        description: "Run ellofive setup (or bash scripts/install.sh), then ellofive chat or ellofive api and open http://127.0.0.1:3000."
-
    title: "Documentation site"
    items:
    -
        title: "How are docs published?"
        description: "The Spruce CSS Eleventy site under /docu is built by GitHub Actions and deployed to GitHub Pages whenever you push updates."
    -
        title: "How do I add a new doc page?"
        description: "Create Markdown under docu/src/posts/<category>/posts/, follow the existing folder + posts.json layout pattern, then push. CI republishes automatically."
    -
        title: "Can I preview before publishing?"
        description: "Yes — cd docu && npm install && npm start."
---
