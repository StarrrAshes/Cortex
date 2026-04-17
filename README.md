# HIVE — Upcycled Hexagonal Hanging Planters

A single-page, GitHub Pages-ready website for HIVE — a student-led upcycling
business that converts discarded PET water bottles into 3D-printed modular
hanging planters with gravity-fed wooden water reservoirs.

> **Built from waste. Engineered for growth.**

## What's inside

- **`index.html`** — Full multi-section site (hero slideshow, problem stats,
  material science, product render, original sketches, supply chain, unit
  economics, impact model)
- **`styles.css`** — Editorial botanical aesthetic: Fraunces display +
  Manrope body + JetBrains Mono for data readouts. Responsive, standalone.
- **`script.js`** — Hero auto-rotating slideshow, scroll-reveal animations,
  counter animations, smooth anchor scrolling, subtle parallax.
- **`assets/sketches/`** — Original TinkerCad sketches (top isometric + front
  elevation) embedded in the design documentation section.

## Running locally

```bash
# from repo root
python3 -m http.server 8000
# then visit http://localhost:8000
```

Or just open `index.html` directly — no build step, no dependencies.

## Deploying to GitHub Pages

1. Push to GitHub
2. Repo → Settings → Pages → Source: `main` branch, root directory
3. Your site will be live at `https://<username>.github.io/<repo>/`

## Product concept

- **Material:** Recycled PETG (rPETG) extruded from post-consumer PET
  water bottles via pultrusion
- **Structure:** 5-cell hexagonal cluster, 3D-printed as a single piece
- **Hydration:** Wooden (FSC-certified pine) reservoir with silicone gasket
  mounts on top, feeds a stainless metal straw, gravity-drips into the top
  cell and cascades through drainage channels to every plant
- **Base:** 304 stainless steel waterproof cover — no leakage
- **Hook:** Integrated loop on top of feed straw — any standard 3/8" hook

## Unit economics (flagship Cluster)

| Line item | Cost |
|---|---|
| Raw PET (12 bottles @ $0.18/lb) | $0.85 |
| Filament production | $1.40 |
| 3D print (6 hrs) | $2.10 |
| Wood reservoir | $2.75 |
| Stainless base | $1.65 |
| Metal hardware | $0.95 |
| Gaskets | $0.70 |
| Labor (22 min) | $6.60 |
| Packaging | $1.20 |
| Shipping | $3.40 |
| **Total COGS** | **$21.60** |
| **Retail** | **$34.00** |
| **Gross margin** | **36.5%** |

## Sources

All statistics cited inline. Key references:
- UNEP Global Plastics Outlook (2024)
- University of Michigan CSS Plastic Waste Factsheet (2025)
- Our World in Data — Plastic Pollution
- The Roundup — Plastic Waste Statistics 2026

---

© 2026 · A student upcycle initiative · Long Island, NY
