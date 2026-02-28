# Specification

## Summary
**Goal:** Build a visually elegant home glass products showcase website called "GlassHome Studio" with a product catalog backed by a Motoko canister.

**Planned changes:**
- Apply a site-wide theme using white, soft gray, and gold/champagne accents with clean sans-serif typography and an airy, spacious layout
- Implement a navigation bar with the "GlassHome Studio" brand name, links to Home and Catalog, and a footer with tagline and copyright
- Build a homepage with a full-width hero banner, a featured products section (mirrors, windows, slider doors, glass ornaments), and a brand introduction section
- Build a product catalog page with category filter tabs (Mirrors, Windows, Slider Doors, Glass Doors, Glass Ornaments/Decor, Partition Walls) and a responsive product grid showing image, name, category, and short description per card
- Build a product detail page showing a large image, full description, specifications, and a "Request a Quote" call-to-action button
- Store all product data in the Motoko backend with fields: id, name, category, shortDescription, fullDescription, specs, and imagePath; expose `getAllProducts()`, `getProductById(id)`, and `getProductsByCategory(category)` query functions with at least 10 sample products across all categories
- Serve hero and product images as static assets from `frontend/public/assets/generated`

**User-visible outcome:** Visitors can browse an elegant glass products showcase site, filter products by category, view detailed product information, and initiate a quote request — all served from a Motoko backend with no external dependencies.
