# Covey Coco

A cinematic editorial personal-brand site for Covey Coco, built with accessible HTML, CSS and JavaScript. No build or package installation required.

## Preview
Serve `dist/` with any static server, e.g. `python -m http.server 4287 --directory dist`.

## Publish
GitHub Pages workflow deploys `dist/` on pushes to main. Repository Settings > Pages must use GitHub Actions.

## Content
The requested cream, chocolate, wine, butter yellow and beige palette is defined in `dist/style.css`. Text and social destinations are in `dist/index.html`; the filterable edit is in `dist/app.js`.

Images are Covey’s public LTK portrait and preview frames from her public LTK videos, retrieved October 14, 2026. Sources: https://www.shopltk.com/explore/thatgirlcovey ; https://liketk.it/5sSBM ; https://liketk.it/5vE4z ; https://liketk.it/4PeIP ; https://liketk.it/4Pzqj . Captions are summarized and linked to the original posts. Copy developed from the supplied brand brief is draft brand copy for owner review. No invented blog posts, endorsements, follower statistics, or product prices.

Motherhood and food filters contain sourced social stories. Collaboration inquiries currently go to Instagram; replace with a confirmed business email or connected contact service when available. No form claims to send messages and no mailing-list data is collected. Google Fonts loads the editorial and body typefaces, with local system fallbacks. Story imagery is local and needs no social-platform API at runtime.

## Features
Responsive mobile navigation; category filters with live status; scroll reveals; reading progress; image hover motion; reduced-motion support; skip link; keyboard focus indicators; semantic sections; lazy-loaded editorial images.

Hero portrait: Covey’s public TikTok profile, https://www.tiktok.com/@thatgirlcovey (retrieved October 14, 2026). CSS asymmetric silhouette with offset outline and layered typography. Wine and butter yellow lead the palette; chocolate is a supporting accent.

## Vercel
Import this repository with Root Directory set to the repository root (leave blank). The tracked vercel.json selects Other, skips the build, and serves dist/. Deploy the latest main commit; no install or build command is required.


## Social editorial update
The introduction now uses her Instagram family photograph. All seven Everyday Edit stories use public TikTok or Instagram thumbnails and link directly to those posts. The category copy is an editorial summary, not a quote. Original post URLs:
- https://www.tiktok.com/@thatgirlcovey/video/7583762618184256799
- https://www.instagram.com/thatgirlcovey_/reel/DYsWFtRPUZH/
- https://www.instagram.com/thatgirlcovey_/reel/DR2gII-D-Yi/
- https://www.tiktok.com/@thatgirlcovey/video/7661285382033591582
- https://www.tiktok.com/@thatgirlcovey/video/7678467069955902751
- https://www.tiktok.com/@thatgirlcovey/video/7647123586813070623
- https://www.tiktok.com/@thatgirlcovey/video/7405973552622488863
Introduction photo: https://www.instagram.com/thatgirlcovey_/p/DcZdrSSj3mp/

The film section uses TikTok's official embedded player (https://developers.tiktok.com/docs/en/embed-player), loaded on visitor click. Three stories have inline playback with source links. Playback depends on TikTok availability. Films pause when scrolled off screen. Images are stored locally; signed CDN URLs are not runtime dependencies.


Introduction image replaced with Covey’s solo black-and-white Instagram portrait: https://www.instagram.com/thatgirlcovey_/reel/DceZcuuvFjW/ . Story images use a uniform 9:16 frame with full-image fit; no special oversized first/last cards. Footer includes accessible inline SVG icons for Instagram, TikTok, YouTube, LTK and Amazon.

## Storytelling and brand portfolio
Bolder Bodoni Moda display type is inspired by the supplied media-kit references. Chapter labels, a three-pillar introduction, and brand collaborations establish a personal narrative. The 13 past collaborations are supplied by the owner; no campaign metrics or outcomes are invented. Taptap was confirmed to mean Taptap Send. Email links open mailto:coveycoco@gmail.com. Logos are kept as local files, sourced from official brand sites except ISEE Hair, sourced from its SHEIN storefront.
