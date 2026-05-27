# Charvi Batra — Legal Portfolio

A warm, classic portfolio website for a legal professional.  
Inspired by brown/bronze/cream editorial template design.  
Built with **Next.js 14**, **Tailwind CSS**, and designed for **Vercel** deployment.

---

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
portfolio/
├── data.js                  ← ✏️ ALL content lives here
├── public/
│   ├── profile.png          ← Your profile photo
│   └── docs/                ← Put downloadable PDFs here
├── app/
│   ├── layout.js            ← Root layout (nav + footer)
│   ├── page.js              ← Home page (all sections)
│   ├── globals.css
│   ├── articles/
│   │   ├── page.js          ← Articles listing
│   │   └── [id]/page.js     ← Individual article
│   ├── documents/page.js    ← Documents download page
│   └── contact/page.js      ← Contact form page
├── components/
│   ├── Navbar.js
│   └── Footer.js
└── tailwind.config.js
```

## How to Edit Content

Everything is in `data.js` — update profile, education, experience, publications, testimonials, etc.

## Adding Images to the Gallery

Replace the placeholder colored divs in the image banner grid (home page hero) with real `<Image>` components pointing to files in `/public/images/`.

## Deploy to Vercel

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Click Deploy — done!

## Design

- **Aesthetic:** Warm classic — brown, bronze, cream
- **Fonts:** Playfair Display, Dancing Script, Lora, Nunito Sans
- **Colors:** Cream (#FDF8F3), Brown-700 (#6B4226), Bronze (#B87333)
