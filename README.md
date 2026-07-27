# Delta Pump — دلتا بامب

Bilingual (Arabic RTL / English LTR) company website for **Delta Pump / دلتا بامب**
(General Contracting & Well Drilling).

A **pure static website** — plain HTML, CSS, and vanilla JavaScript. No build step,
no framework, no Node.js or Next.js required.

## Structure

```
.
├── index.html            # Home
├── about.html            # About Us
├── services.html         # Services list
├── service.html          # Service detail  (service.html?service=<slug>)
├── projects.html         # Projects
├── store.html            # Store sections overview
├── store-solar.html      # Solar section categories
├── store-pumps.html      # Pumps section categories
├── store-ironpipes.html  # Iron & well pipes categories
├── store-listing.html    # Category product listing (store-listing.html?category=<id>)
├── product.html          # Product detail  (product.html?id=<id>)
├── cart.html             # Shopping cart
├── contact.html          # Contact + map
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

## Running locally

No build or install needed. Just serve the folder over HTTP (opening files directly
with `file://` also works for most pages). For example, with any static server:

```bash
npx serve .
```

Then open the printed URL. Any static file server (Live Server, Python's
`http.server`, Nginx, GitHub Pages, Netlify, etc.) works.

## Bilingual system

The language toggle in the header switches between Arabic (default, RTL) and English
(LTR). Translatable elements carry `data-ar` / `data-en` attributes; `js/script.js`
swaps `textContent` on toggle and persists the choice in `localStorage`
(`deltapump_lang`). The cart is stored under `deltapump_cart`.

## Note on images

`assets/images/logo.png` and some product images are raster files whose pixels may
still show the previous brand. Re-export them with the Delta Pump logo to fully
rebrand — they can't be changed in code.
