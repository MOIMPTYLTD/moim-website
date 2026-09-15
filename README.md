# MOIM Website — Final production candidate

Static, framework-free company website for MOIM PTY LTD, designed for company-owned GitHub hosting and `moim.com.au`.

## Site structure
- `index.html` — homepage
- `product.html` — product overview
- `business.html` — business and community-organisation offering
- `company.html` — company and launch story
- `support.html` — bilingual support hub and FAQ
- `privacy.html` — bilingual Privacy Policy
- `terms.html` — bilingual Terms of Service
- `community-guidelines.html` — bilingual Community Guidelines
- `delete-account.html` — public account-deletion resource
- `404.html` — fallback page
- `styles.css` — responsive design system
- `app.js` — shared header/footer, language switch, mobile menu, support/TOC interactions
- `moim-mark.png` — MOIM app mark used in the site identity
- `robots.txt`, `sitemap.xml` — search/discovery metadata

## Final polish included
- Stable global navigation on every page
- MOIM wordmark + app mark lockup
- Korean/English language switch with saved preference
- Korean word-breaking and typography tuned to avoid awkward single-word wraps
- Desktop sections sized as complete visual chapters when anchor navigation is used
- Fully responsive mobile navigation, typography, layout, cards, legal pages and hero treatment
- Mobile hero simplified to one strong product mockup instead of overlapping two phones
- Language-aware FAQ navigation and repaired Korean FAQ behaviour
- Language-aware legal document table of contents
- Footer company identity: MOIM PTY LTD, ABN, company email, site, copyright and MOIM™
- Consistent focus states and reduced-motion support

## Local preview
Open `index.html` directly, or run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Recommended deployment
- Repository owner: `MOIM-PTY-LTD` GitHub organisation
- Hosting: GitHub Pages
- Domain/DNS: keep `moim.com.au` under MOIM PTY LTD control at the registrar

## Legal / implementation alignment
The public legal documents are written as operating policies rather than placeholders. Before public launch, the production app and store declarations must match them in practice, particularly:
- Australian account eligibility / age handling
- account deletion and de-identification behaviour
- stated deletion and backup timeframes
- safety/moderation retention
- App Store Privacy and Google Play Data Safety answers
- any future analytics, advertising, payment or new third-party SDKs

The website wording is not a substitute for advice from an Australian lawyer. If MOIM's age model, monetisation, moderation, data retention or product scope changes, review the legal pages before launch.
