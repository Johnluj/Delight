# Delight Tech — Static site (local scaffold)

This repository contains a small static scaffold for a corporate-style site named "Delight Tech". It's inspired by common digital-agency layouts and includes a hero, services, selected work, about, and contact sections.

Files included
- `index.html` — main single-page site
- `styles.css` — responsive theme and layout
- `script.js` — small behaviors (smooth scroll, mobile nav, contact mailto fallback)

Run locally

```powershell
cd 'c:\Users\USER\Desktop\firstProject'
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

Customization

- Replace placeholder images (they use via.placeholder.com) with real screenshots.
- Update project/case-study text and change the case study links.
- The contact form currently opens the default mail client and sends to `info@delighttech.com` as a fallback; wire to a real form endpoint for production.

Next steps

- Add real content, logos, and social links.
- Add meta tags and OpenGraph images for SEO and sharing.
- Optionally add a small serverless function to receive contact form submissions.
