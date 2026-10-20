# Design review — 20 October 2026

## Baseline
The supplied slop-detect scan reported 33/100 (D+, Heavy): Inter +8, purple CTA +8, gradient headline +6, repeated gradients +4, dark/gray treatment +4, large-number stats +3. This is a visual-pattern heuristic, not proof of authorship or an overall quality score.

Manual critique of the original render: the first screen led with generic developer decoration (sample code, glows and metrics), while actual projects required navigating away. Repeated purple treatments and Inter created the template resemblance. The existing theme toggle means the report's permanent-dark wording was too broad; the actual issue was the forced initial dark preference.

## Changes
- Replaced the visual system with warm neutral/olive surfaces, rust accents, Bricolage Grotesque headings and Manrope body text.
- Replaced the code-window/metrics hero with a concise introduction and selected work on the homepage.
- Replaced the initial typographic covers with six real project screenshots after local project access was supplied. Four web pages were freshly captured from existing local outputs; the two mobile captures come from existing application test evidence.
- Retained original project facts, links, experience, certificates, Turkish/English routes, and the Formspree endpoint.
- Restyled every detail page; simplified the about-page orbit into a development summary.
- Added system-aware initial theme selection, system change tracking until explicit choice, visible form labels and status messages, skip navigation, route focus, active-route semantics, and reduced-motion handling.

## Verification
- JavaScript syntax: `node --check script.js` and `node --check i18n.js` passed.
- `git diff --check` passed.
- Browser navigation: all six routes in both languages render with one h1 and no horizontal document overflow at the desktop test width (1096px available content viewport).
- Visual checks: desktop home/contact in light mode, dark homepage/about treatment, 390px Turkish home/contact, 320px English home, and 768px English skills.
- Found and corrected a 320px project-cover min-content overflow. Recheck: available viewport and scrollWidth both 310px; no horizontal overflow. 768px check: both 758px.
- Mobile menu opens, navigates and closes. Skip-link keyboard activation focuses main content without changing the current route. Dark selection persists across reload.
- Theme color-pair calculation: light body 6.62:1 on canvas, secondary text 5.15:1 on canvas / 4.71:1 on secondary surface; dark body 11.52:1 on canvas, secondary text 8.26:1 on canvas / 7.50:1 on secondary surface. These are token-pair checks, not a complete automated accessibility audit.

## Limits
Impeccable is not installed; its source guidance informed a manual critique and checks. No Impeccable CLI audit was run. Project descriptions were verified from the user-supplied local source, package manifests and application routes. Web screenshots show existing local builds; the mobile screenshots show existing test data. Screenshot provenance is recorded in image/projects/sources.json. The contact form was inspected but no live test message was submitted. No deployment or new public slop-detect scan was performed; the new score is unknown.

## Sources
- https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/replicate/DESIGN.md
- https://github.com/pbakaus/impeccable/blob/main/skill/reference/craft-floor.md
- https://slop-detect.com/score/batuhantnk.github.io

## Local project content refresh

At the user's request, reviewed falyeri-main, metin_asistanı/ilan-metni-asistani, NQC and qrCodeProject-main. Within web_mobil, reviewed only click count and promtweb; no other project inside that folder was inspected. The portfolio catalog now contains exactly GameSkinAI, Click & Count, Falyeri, Listing Assistant, Dynamic QR Platform and NQC Bilisim. Removed earlier unrelated catalog entries.

Every project has a Turkish/English description, three feature summaries, technology stack, verified repository URL from its Git remote, an actual screenshot and descriptive alt text. The screenshot opens at full size from its image link. The navigation label now says Projects/Projeler while preserving existing hash routes. Skills were updated to reflect Kotlin, Compose, Next.js, Expo, Supabase, Firebase and Gemini found in these projects.

Checks: JavaScript syntax and diff whitespace pass; both languages contain the same six project IDs and every screenshot exists (795,840 bytes total). Desktop gallery shows six projects without overflow. Mobile checks: Turkish gallery at 390px (380px document viewport) and English homepage at 320px (310px document viewport) have no horizontal overflow. Off-screen images use lazy loading. No authentication, paid AI generation, database changes, original-project edits, or deployment was needed.

## QR project header correction

At the user's explicit request, fixed the original QR frontend's Header.css and Header.js, then ran its production build. Navigation labels and action buttons no longer wrap; header groups have compact spacing and do not shrink action text. The navigation switches to a drawer at 1240px, with icon-only actions on small mobile screens. The menu now closes on navigation or Escape and its controls have accessible names/state.

Build completed with existing project lint/Browserslist warnings. On the rendered Turkish page at a 1265px viewport, all three action buttons are 42px high, header height is 84px, navigation/action groups do not overlap, and the page has no horizontal overflow. Refreshed image/projects/qr-platform.jpg from this rebuilt page and added an image version query so the portfolio does not keep displaying the cached older capture.
