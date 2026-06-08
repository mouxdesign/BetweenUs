# Contributing to Between Us

## For non-technical contributors

The easiest way to submit a story is through the apply forms:

- **Bitcoin stories**: https://tally.so/r/EkJRB4
- **AI stories**: *(form URL coming soon)*

You do not need to know how to code. Fill out the form and an editor will be in touch.

---

## For technical contributors

### Setup

```bash
# Fork the repo on GitHub, then:
git clone https://github.com/YOUR_USERNAME/BetweenUs.git
cd BetweenUs
npm install
```

### Font files

This repo does not include font files. You need to purchase and install them locally before the site will render with the correct typefaces. See the [README](./README.md) for full font setup instructions including purchase links.

Without the font files the site still builds and runs — it falls back to system fonts.

### Environment variables

Copy the example and fill in your ImageKit endpoint:

```bash
cp .env.local.example .env.local
```

### Running the dev server

```bash
npm run dev
```

### Writing and submitting a post

1. Create a new `.mdx` file in `content/posts/` — use a slug-style filename: `my-story-title.mdx`
2. Add the required frontmatter:

```yaml
---
title: "Story title"
date: "YYYY-MM-DD"
author: "Your Name"
excerpt: "Short summary (1-2 sentences)."
coverImage: "imagekit/path/to/image.jpg"
tags: ["tag-one", "tag-two"]
geography: ["Country"]
useCase: ["Bitcoin"]   # "Bitcoin" or "AI"
---
```

3. Write the article body in MDX below the frontmatter
4. Run `npm run build` locally to confirm no errors
5. Open a pull request against `main`

### PR process

- One story per PR
- Include a short description of what the piece is about in the PR body
- The editors review all submissions — expect a response within two weeks
- Do not bump or ping PRs; we read everything
