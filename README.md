# Dach Courier Public Website

Customer-facing Vue 3 application for Dach Courier Services.

## Scope

This repository contains only the public website, quote and booking journeys, tracking, customer authentication, customer account pages, contact/support, and legal pages. It intentionally excludes all staff and admin dashboard functionality.

## Tech

Vue 3, Vite, TypeScript, Composition API, Vue Router, Pinia, Axios, Zod, VueUse, Lucide Vue Next, Tailwind CSS, Vitest, Vue Test Utils, Playwright, ESLint, and Prettier.

## Run

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run build
npm run seo:check
npm run typecheck
npm run lint
npm run test:run
npm run test:e2e
```

## API Strategy

The app uses service modules in `src/services/api`. When `VITE_USE_MOCK_API=true`, these modules delegate to realistic mock adapters in `src/services/mock`. A production backend can replace the mocks by implementing the same service contracts.

## SEO And Search

The public website has a central SEO layer in `src/seo`. Production builds generate:

- `dist/sitemap.xml`
- `dist/robots.txt`
- prerendered HTML files for public marketing routes
- route-specific titles, descriptions, canonical URLs and social metadata
- JSON-LD for Organization, WebSite, Service and BreadcrumbList where appropriate
- `_redirects` for old public URLs such as `/areas` and `/contact`

Run:

```bash
npm run build
npm run seo:check
```

Private customer routes are excluded from search. Login, registration, booking, inquiry, booking confirmations, account pages and shipment-reference pages use `noindex, nofollow` metadata and are excluded from the XML sitemap.

## Environment

Set production metadata values before deployment:

```bash
VITE_PUBLIC_SITE_URL=https://dachcourierservices.co.uk
VITE_SITE_NAME="Dach Courier Services"
VITE_DEFAULT_LOCALE=en_GB
VITE_SUPPORT_EMAIL=
VITE_SUPPORT_PHONE=
VITE_BUSINESS_ADDRESS=
VITE_GOOGLE_SITE_VERIFICATION=
VITE_BING_SITE_VERIFICATION=
VITE_ALLOW_GPTBOT=false
```

Do not add unverified address, registration, VAT, insurance, award, rating or review data to structured data.

## Google And Bing Setup

After deployment:

1. Verify the preferred HTTPS domain in Google Search Console and Bing Webmaster Tools.
2. Submit `https://dachcourierservices.co.uk/sitemap.xml`.
3. Inspect important URLs including `/`, `/services`, `/coverage`, `/business`, `/about` and key service pages.
4. Review indexing, structured-data and Core Web Vitals reports.
5. Confirm old URLs redirect with permanent 301 or 308 responses.

## ChatGPT Search Access

`robots.txt` explicitly allows `OAI-SearchBot` for public pages. This makes public pages eligible for ChatGPT Search discovery when the deployment is publicly accessible and infrastructure does not block the crawler. It does not guarantee ranking, citation or inclusion.

`GPTBot` is controlled separately with `VITE_ALLOW_GPTBOT`. The default is `false`, which allows ChatGPT Search crawling through `OAI-SearchBot` but disallows model-training crawling through `GPTBot`.

Deployment checklist:

- Public routes return HTTP 200 without login, CAPTCHA or JavaScript-only bot challenges.
- `robots.txt` allows `OAI-SearchBot`.
- `sitemap.xml` is publicly reachable.
- Canonical URLs use the preferred HTTPS hostname.
- No public route has accidental `noindex`.
- Account, booking-confirmation and shipment-reference pages remain private or noindexed.
- CDN, WAF and bot-protection logs do not show repeated 403 or 429 responses for legitimate crawler traffic.
- CSS, JavaScript, images and fonts needed to render public content are not blocked.

## Admin SEO Policy

Do not apply public SEO indexing to `dach-courier-admin`. The admin deployment should use:

```txt
User-agent: *
Disallow: /
```

It should also send or render:

```html
<meta name="robots" content="noindex, nofollow, noarchive" />
```

Add `X-Robots-Tag: noindex, nofollow, noarchive` in hosting/CDN configuration where supported. Do not include admin URLs in this sitemap and do not link to the admin app from public navigation or footer.
