# Delta Pump — دلتا بامب

Bilingual (Arabic RTL / English LTR) company website for **Delta Pump / دلتا بامب**
(General Contracting & Well Drilling).

A **pure static website** — plain HTML, CSS, and vanilla JavaScript. No build step,
no framework, no Node.js or Next.js required.

## Structure

```
.
├── index.html            # Home                 ->  /
├── about.html            # About Us             ->  /about
├── services.html         # Services list        ->  /services
├── service.html          # Service detail       ->  /service?service=<slug>
├── projects.html         # Projects             ->  /projects
├── gallery.html          # Gallery              ->  /gallery
├── store.html            # Store overview       ->  /store
├── store-solar.html      # Solar categories     ->  /store-solar
├── store-pumps.html      # Pumps categories     ->  /store-pumps
├── store-ironpipes.html  # Iron & well pipes    ->  /store-ironpipes
├── store-listing.html    # Category listing     ->  /store-listing?category=<id>
├── product.html          # Product detail       ->  /product?id=<id>
├── cart.html             # Shopping cart        ->  /cart
├── contact.html          # Contact + map        ->  /contact
├── vercel.json           # Clean-URL rewrites + legacy .html redirects
├── css/                  # Stylesheets (one global + per-page)
├── js/
│   ├── script.js         # Header, language toggle, cart, hero/testimonial sliders, counters
│   ├── store-catalog.js  # Store listing + product detail rendering
│   ├── service-detail.js # Service detail rendering
│   ├── cart.js           # Cart page logic
│   ├── about.js, contact.js
│   └── data/
│       ├── catalog-products.js  # Store sections, categories & products (window.CATALOG_*)
│       └── services-data.js     # Service detail content (SERVICES_DATA)
├── assets/images/        # Images
└── docs/                 # Design references
```

## Clean URLs

Pages are served without the `.html` extension: `/about`, `/gallery`, `/contact`,
and so on. This is handled entirely by `vercel.json` — there is **no JavaScript
URL rewriting**:

- `rewrites` map `/page` to `/page.html` internally. The browser keeps the clean
  URL and no redirect is issued, so `https://domain.com/about` loads directly.
- `redirects` send any legacy `/page.html` to `/page` (308), and `/index.html`
  to `/`, so old bookmarks and search results resolve to one canonical URL.
- A catch-all rewrite (`/:page([A-Za-z0-9_-]+)`) covers any page added later — drop
  a new `.html` file at the root and its clean URL works with no config change.

All internal links (nav, footer, buttons, cards, breadcrumbs, and the routes built
in `js/data/*.js`) use the extensionless form. The `.html` files themselves are
kept on disk — they are what the rewrites serve.

## Running locally

No build or install needed. Serve the folder over HTTP with `serve`, which applies
the same clean-URL behaviour as Vercel:

```bash
npx serve .
```

Then open the printed URL. Note that links are root-relative (`/about`), so the site
must be served over HTTP from the project root — `file://` and plain servers without
extensionless-URL support (e.g. Python's `http.server`) will not resolve them.

## Bilingual system

The language toggle in the header switches between Arabic (default, RTL) and English
(LTR). Translatable elements carry `data-ar` / `data-en` attributes; `js/script.js`
swaps `textContent` on toggle and persists the choice in `localStorage`
(`deltapump_lang`). The cart is stored under `deltapump_cart`.

## Note on images

`assets/images/logo.png` and some product images are raster files whose pixels may
still show the previous brand. Re-export them with the Delta Pump logo to fully
rebrand — they can't be changed in code.
