# QuailNest Farm — Website

One-page marketing website for QuailNest Farm, a premium quail farming operation based in Padeniya, Wariyapola, Sri Lanka.

## Sections

- **Hero** — Full-screen landing with call-to-action buttons
- **Stats Strip** — Key numbers at a glance
- **About** — Farm story and location
- **Quail Products** — Chicks and egg layers
- **Services** — Consultancy, Vaccination, Poultry Cage, Equipment
- **Exotic Animals** — Exotic birds and small animals
- **Gallery** — Photo showcase
- **Clients** — Testimonials and regions served
- **Contact** — Phone, location, Facebook, WhatsApp button
- **Footer**

## Tech Stack

- Plain HTML5 with [Tailwind CSS](https://tailwindcss.com/) (CDN)
- No build step required — zero dependencies
- Hosted on [Vercel](https://vercel.com/) as a static site

## Deploying to Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Push this folder (`quailnest-web/`) to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) → **Add New Project**.
3. Import your GitHub repository.
4. Set the **Root Directory** to `quailnest-web` (if the repo contains other folders).
5. Leave all build settings blank — Vercel will detect it as a static site.
6. Click **Deploy**.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
cd quailnest-web
vercel
```

Follow the prompts. Your site will be live in seconds.

## Customising

| What to change | Where |
|---|---|
| Phone number | Search `077 XXX XXXX` and replace |
| WhatsApp number | Update the `wa.me/` link in the Contact section |
| Facebook URL | Update the Facebook `href` in the Contact section |
| Location | Search `Padeniya, Wariyapola` |
| Stats (100+, 5+, 200+) | Stats Strip section |
| Testimonials | Clients section |
| Images | Replace Unsplash URLs with your own photos |
