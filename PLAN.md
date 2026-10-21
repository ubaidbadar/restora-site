# restora.live: the marketing site

The public face of Restora: what it is, who it is for, what it costs, and the way in. Next.js 16.4 (App Router),
React 19.3, Tailwind v4. Every page is static, prerendered at build time. It shares Restora's brand and design
tokens with the web app, so a visitor clicking "Start free" lands somewhere that looks like the same product.

Read `AGENTS.md` first (Next 16 has breaking changes: read `node_modules/next/dist/docs/` before writing code).

---

## 1. Who it is for, and what a visit should end in

**Visitors**
- **Owners** of Pakistani restaurants: karahi and BBQ places, cafés, fast food, dhabas with a counter, cloud kitchens,
  small chains (2 to 10 branches). Mostly on a phone, often on a slow connection, deciding over WhatsApp.
- **Managers** sent by the owner to "check this app". They look for: does it print, does it work offline, can waiters use it.
- **Staff who were invited** and searched "Restora": they need the sign-in link and the app download, nothing else.

**What a visit should end in** (in this order of value)
1. **Start free**: account created at `app.restora.live/signup`.
2. **WhatsApp us**: a chat opens with the Restora number, with a prefilled message ("Hi, I run ___ in ___").
3. **Book a demo**: a short form (name, restaurant, city, phone) that lands in our inbox and on WhatsApp.
4. **Get the app**: App Store / Google Play (when the apps are listed).

Every page has one main action. Sign in is always one tap away (top right), never competing with Start free.

---

## 2. Domains

| Address | What runs there |
| --- | --- |
| `restora.live` | This site. `www.restora.live` redirects here. |
| `app.restora.live` | The web app (`web/`): sign in, POS, settings. |
| `api.restora.live` | The backend (`backend/`). |
| `restora.live/t/<code>` | Guests scanning a table QR. **Decide**: keep the guest menu on `app.` (today), or redirect from the short address here. Printed QR codes must never change, so pick before printing any for real restaurants. |

This site also hosts what the phones need:
- `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json`, so invitation and password-reset links
  open in the Restora app when it is installed (universal links / app links).
- `/app` redirects to the right store by device (and to the app's page when the apps are not listed yet).

---

## 3. Pages

| Path | Page | Main action |
| --- | --- | --- |
| `/` | Home | Start free |
| `/features` | Everything Restora does, grouped (orders, tables, customers and khata, WhatsApp, menu, team, offline, reports) | Start free |
| `/features/[slug]` | One page per big feature: `pos`, `table-qr-menu`, `khata`, `whatsapp-marketing`, `offline`, `multi-branch` | Start free |
| `/pricing` | Plans, what each includes, FAQ about payment | Start free |
| `/for/[type]` | Who it is for: `cafe`, `fast-food`, `bbq-karahi`, `cloud-kitchen`, `chains` | Book a demo |
| `/restaurant-software/[city]` | City pages: Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar. Real local proof only (a restaurant there, a photo); no city page until we have one | WhatsApp |
| `/download` | The apps, with store badges and QR | Get the app |
| `/demo` | Book a demo form | Book a demo |
| `/contact` | WhatsApp, email, phone, office city | WhatsApp |
| `/about` | Why Restora exists, who builds it | Start free |
| `/blog`, `/blog/[slug]` | Guides owners search for: "how to run khata", "menu pricing with tax", "WhatsApp marketing for restaurants" (MDX files in the repo) | Start free |
| `/help` | Short answers and links into the app (later: a real help centre) | WhatsApp |
| `/changelog` | What is new, monthly | Start free |
| `/privacy`, `/terms`, `/refunds` | Legal | none |
| `not-found` | Friendly 404 with links to Home, Pricing, Sign in | Home |

Phase 1 ships: Home, Features, Pricing, Download, Demo, Contact, About, the three legal pages, 404.
Phase 2: feature pages, "for" pages, blog. Phase 3: city pages, Urdu.

---

## 4. Home, section by section

1. **Header**: logo, Features, Pricing, For restaurants (menu), Blog; Sign in; **Start free** button. On phones: logo,
   Start free, and a menu button opening a full-screen sheet.
2. **Hero**: one line that says the job, e.g. "Orders, tables and khata for your restaurant. Even when the internet
   isn't." Under it one sentence, **Start free** and **WhatsApp us**, and "No card needed · Works on phone, tablet
   and laptop". Beside it (below on phones): the real app, a phone showing the Orders board and a tablet showing New
   order, in device frames. Real screenshots, never mock-ups that the product cannot do.
3. **Proof strip**: logos or names of restaurants using it, with city. Only real ones; until then, leave it out.
4. **The day in a restaurant**: four short panels following one order: guest scans the table QR → waiter takes the
   order on the phone → kitchen slip prints → bill paid or added to khata. Each with a screenshot.
5. **Built for how Pakistan works**: offline first (orders keep going without internet, sync later), khata built in,
   WhatsApp receipts and win-back messages, JazzCash / Easypaisa / card / cash, tax per payment method, Urdu-ready.
6. **Feature grid**: 6 cards linking to the feature pages.
7. **One app for everyone**: owner (Today numbers, all branches), manager (staff, menu), waiter (tables, orders),
   cashier (payments). Roles and permissions explained in one line each.
8. **Pricing preview**: the plans in short, link to Pricing.
9. **Testimonials**: real quotes with name, restaurant and city, with permission. None until we have them.
10. **FAQ**: 6 to 8 questions (does it print, does it need internet, can I move my customer list, is my data safe,
    how do I pay, can I try it first). Marked up as FAQ structured data.
11. **Final call**: Start free and WhatsApp us, again.
12. **Footer**: product links, company, legal, app badges, WhatsApp, email, "Made in Pakistan".

Sticky on phones: a bottom bar with **Start free** and a WhatsApp icon, appearing after the hero scrolls away.

---

## 5. Words

- Plain English an owner would use: "orders", "khata", "bill", "kitchen slip", "branch". Not "solution", "leverage",
  "seamless", "revolutionise".
- Short sentences; every claim something the product does today. Numbers only when true and sourced.
- Rupees as "Rs 2,500", Pakistani phone numbers as "0300 1234567".
- **Urdu** (phase 3): `/ur/...` with right-to-left layout, Noto Nastaliq Urdu for headings, translated by a person,
  not a machine. `hreflang` links between the two.
- Roman Urdu search words owners type ("restaurant ka software", "khata app") appear in the blog and FAQ, naturally.

---

## 6. Look and feel

- **Same design tokens as the web app**: copy the color, radius and shadow tokens from `web/src/index.css` into
  `app/globals.css` (`@theme`), light and dark. Indigo primary `#4F46E5`, ink `#0F172A`, canvas `#F6F7F9`, the art
  colors (saffron, chili, leaf, rice, sand) for illustrations.
- **Font**: Plus Jakarta Sans (the wordmark's font) through `next/font/google`, replacing Geist.
- **Brand files** from `brand/exports/`: logo, symbol, icon; the OG image from `brand/src/og-image.svg`.
- **Illustrations**: the cloche drawing from the app's welcome screen, plus a small set in the same style (ticket,
  chai, WhatsApp chat, QR on a table). Flat, warm, local; no stock photos of people pretending to be customers.
- **Screenshots**: taken from the real app with demo data (a believable Lahore restaurant), in light mode, exported
  as AVIF/WebP at 2x, framed with a CSS device frame.
- **Motion**: little and purposeful. CSS scroll-driven animations for reveals, React `<ViewTransition>` between pages
  (see `node_modules/next/dist/docs/01-app/02-guides/view-transitions.md`); everything off with
  `prefers-reduced-motion`.
- **Dark mode**: follows the system; same tokens as the app.
- **Mobile first**: designed at 360px wide, then tablet and desktop. Tap targets 44px+.

---

## 7. How it is built

- **Next.js 16.4 App Router**, `cacheComponents` on; every marketing page is static and prerendered. No database.
- **Structure** (same conventions as the app: snake_case files, default exports, one component per file):
  ```
  app/
    (site)/layout.tsx         header + footer
    (site)/page.tsx           home
    (site)/features/…  pricing/  download/  demo/  contact/  about/  blog/  for/[type]/  (legal)/…
    opengraph-image.tsx       OG images made with next/og, per page where it helps
    sitemap.ts  robots.ts  manifest.ts  llms.txt/route.ts  .well-known/…/route.ts
  components/   ui/   content/ (MDX: blog, legal, changelog)   constants/   utils/
  ```
- **Content in the repo**: MDX for blog, legal and changelog; plans, features and FAQ as typed TS constants, so
  pricing on Home and Pricing can never disagree. A CMS only if non-developers start writing weekly.
- **Forms** (demo, contact): a Server Action validates with zod, checks a Cloudflare Turnstile token, then
  `POST api.restora.live/api/v1/leads` (new backend endpoint) and sends an email. Spam never reaches WhatsApp.
- **Links into the app**: `APP_URL` env (`https://app.restora.live`), with UTM tags on Start free so we know which
  page brought the sign-up.
- **Analytics**: privacy-friendly, cookieless (Vercel Web Analytics or Plausible), plus events for Start free,
  WhatsApp clicks, demo sent, store badge clicks. No cookie banner needed while nothing personal is stored.
- **Performance budget** (phones on 4G): LCP < 2.0s, INP < 150ms, CLS < 0.05, JS on Home < 100KB. Images through
  `next/image`, the hero screenshot prioritised, fonts self-hosted by `next/font`.
- **Accessibility**: WCAG 2.2 AA; the token contrast is already checked in the web app.
- **Quality checks**: `next build` clean, ESLint, Lighthouse CI on Home and Pricing, links checked, a Playwright smoke
  test (pages load, Start free goes to the app, forms validate).

---

## 8. Search and AI answers (2026)

- `metadata` and `generateMetadata` on every page: title, description, canonical, Open Graph, Twitter.
- `sitemap.ts`, `robots.ts`, `manifest.ts`; `hreflang` once Urdu exists.
- **Structured data (JSON-LD)**: `Organization`, `SoftwareApplication` (with offers from the plans), `FAQPage`,
  `BreadcrumbList`, `Article` on blog posts. See `02-guides/json-ld.md`.
- **For AI assistants** (ChatGPT, Gemini, Claude, Perplexity answer "best restaurant software in Pakistan"):
  `llms.txt` with what Restora is, plans and prices, and links; pages written as clear answers; the same facts
  (price, features, cities) on every page.
- Google Business Profile and WhatsApp Business catalog pointing to restora.live.

---

## 9. Hosting

- **Recommended: Vercel** (made for Next.js; static pages on its CDN, forms as functions, free to start). Keep the
  domain at Hostinger and point DNS: `restora.live` → Vercel (A / ALIAS), `www` CNAME → Vercel, `app` → where the
  web app is served, `api` → the backend server. Email (MX) stays as Hostinger sets it.
- Alternative: Hostinger Node.js hosting with `next start`, if everything must stay at one provider.
- HTTPS everywhere, HSTS, a Content Security Policy (`02-guides/content-security-policy.md`).

---

## 10. Legal and trust

- Privacy policy (what the app stores about restaurants and their customers, where, for how long; Pakistan's PECA
  and the coming data protection law), Terms, Refund policy (needed by payment gateways).
- A security page later: backups, who can see data, sign-in protection.
- Company details in the footer (registered name, city, contact).

---

## 11. Decisions

Made (2026-10-21):
- **Price**: Restora is **free** for now. Pricing says so plainly ("Free while we grow, no card"); paid plans come later
  and existing restaurants are told well before anything changes.
- **WhatsApp**: +92 347 6262068 (`https://wa.me/923476262068`).
- **Email**: admin@restora.live.

Still open:
1. **Paid plans** (later): plans, monthly price in Rs, what each includes.
2. *(none: free, no trial needed)*
3. **Office city** for the footer and Contact.
4. **Proof**: any restaurants using it (name, city, a quote, a photo, permission to show).
5. **Demo**: who answers demo requests, and in how long.
6. **Guest QR address**: keep on `app.restora.live/t/…` or move to `restora.live/t/…` (see §2).
7. **Apps**: when they go to the App Store and Google Play (until then, Download says "coming soon" and offers the web app).
8. **Company**: registered name for the footer and legal pages.

---

## 12. Order of work

1. **Base**: tokens and font, header/footer, layout, metadata defaults, sitemap/robots/manifest, 404, analytics.
2. **Home** with real screenshots, **Pricing**, **Features**, **Download**, **Contact**, **Demo** (+ backend
   `/leads`), **About**, legal pages. Deploy to Vercel on a preview address.
3. Point `restora.live` at it; verify in Google Search Console and Bing; submit the sitemap.
4. Feature pages, "for" pages, blog (3 posts to start), changelog.
5. `.well-known` files once the app identifiers are final; `/app` store redirect.
6. Urdu; city pages as real customers arrive.

Each step ends with: `next build` clean, Lighthouse ≥ 95 on phones, checked on a real Android phone over 4G.
