# Between Us

**BetweenUsStories.com** — First-hand accounts of how Bitcoin and AI are changing lives around the world.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| Content | MDX files in `content/posts/` with `gray-matter` |
| Images | ImageKit |
| Hosting | Vercel |

---

## Running locally

```bash
git clone https://github.com/mouxdesign/BetweenUs.git
cd BetweenUs
npm install
cp .env.local.example .env.local   # then fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Font setup

This project uses two purchased commercial typefaces that are **never committed to the repo**.

### Räder — headings and display text
- Foundry: Pangram Pangram
- Purchase: https://pangrampangram.com/products/rader
- After purchase, place `.woff2` files in `public/fonts/rader/` using these exact filenames:
  - `Rader-Hairline.woff2`, `Rader-HairlineItalic.woff2`
  - `Rader-Thin.woff2`, `Rader-ThinItalic.woff2`
  - `Rader-Extralight.woff2`, `Rader-ExtralightItalic.woff2`
  - `Rader-Light.woff2`, `Rader-LightItalic.woff2`
  - `Rader-Regular.woff2`, `Rader-RegularItalic.woff2`
  - `Rader-Medium.woff2`, `Rader-MediumItalic.woff2`
  - `Rader-Semibold.woff2`, `Rader-SemiboldItalic.woff2`
  - `Rader-Bold.woff2`, `Rader-BoldItalic.woff2`

### Aktiv Grotesk — body copy
- Foundry: Dalton Maag
- Purchase: https://www.daltonmaag.com/font-library/aktiv-grotesk
- After purchase, place `.woff2` files in `public/fonts/aktiv-grotesk/` using these exact filenames:
  - `AktivGrotesk-Regular.woff2`, `AktivGrotesk-Italic.woff2`
  - `AktivGrotesk-Medium.woff2`, `AktivGrotesk-MediumItalic.woff2`
  - `AktivGrotesk-Bold.woff2`, `AktivGrotesk-BoldItalic.woff2`

The `public/fonts/` directory is listed in `.gitignore` and will never be committed.

---

## ImageKit setup

All post cover images are served from [ImageKit](https://imagekit.io).

1. Create a free account at https://imagekit.io
2. Go to **Dashboard → Developer options** to find your URL endpoint (looks like `https://ik.imagekit.io/your_id`)
3. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
   ```
4. Upload images via the ImageKit Media Library
5. Reference them in MDX frontmatter using the file path from the root of your ImageKit media library:
   ```yaml
   coverImage: "folder/image-name.jpg"
   ```

The `getImageKitUrl()` helper in `lib/imagekit.ts` handles automatic format conversion (`f-auto`) and quality optimisation.

---

## Logo setup

A placeholder SVG lives at `public/images/logo.svg`. To replace it:

1. Export your logo from Figma as an SVG
2. Replace `public/images/logo.svg` with the exported file
3. The NavBar component picks it up automatically — no code changes needed

---

## Writing a post

Create a new `.mdx` file in `content/posts/` with this frontmatter:

```yaml
---
title: "Your story title"
date: "YYYY-MM-DD"
author: "Author Name"
excerpt: "One or two sentence summary shown on cards and in metadata."
coverImage: "imagekit/path/to/image.jpg"
tags: ["tag-one", "tag-two"]
geography: ["Country", "Region"]
useCase: ["Bitcoin"]   # "Bitcoin" or "AI"
---
```

Then write your MDX content below the frontmatter block.

---

## Deploying to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New Project** and import this repository
3. Add the environment variable:
   - `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` — your ImageKit URL endpoint
4. Click **Deploy**

For the custom domain `BetweenUsStories.com`, go to **Project Settings → Domains** after the first deploy and follow the DNS instructions Vercel provides.
