# Batuhan Tonk — design system

## Intent
A personal portfolio that lets real work lead. A short introduction opens onto selected projects; detailed experience remains one click away. The composition draws on the typography and content hierarchy in awesome-design-md's Replicate analysis, adapted to this portfolio. Impeccable's source guidance informed the critique and manual finishing checks; its CLI/skill is not installed.

## Color roles
| Role | Light | Dark |
|---|---|---|
| Canvas | #f6f4ee | #191c19 |
| Secondary surface | #eceae2 | #20251f |
| Primary text | #242b25 | #f1f0e8 |
| Body text | #50594f | #d1d5c9 |
| Secondary text | #62695f | #adb7a5 |
| Accent / links | #a84023 | #eda080 |
| Divider | #d4d5c9 | #404a3c |

Start with the system color preference unless the visitor saved a choice. Follow system changes until an explicit selection is made. Screenshots retain the original project UI. Presentation surfaces use colors that suit each screenshot.

## Typography
Bricolage Grotesque for display headings and project names; Manrope for body and controls. Google Fonts supplies both, with sans-serif fallbacks. Display is 43–88px, section titles 39–66px, body 13–16px. Keep display tracking at or above -0.04em. Do not use gradient text. Turkish diacritics must remain intact. Wrap long English headings without clipping.

## Composition and spacing
1160px maximum content width; 40px side margins on desktop and 20px on mobile. Desktop introduction uses a 1.5:1 grid. Selected projects use two unequal columns, with the second offset vertically; at 540px and below they stack. Major regions are separated by 1px rules and 50–88px spacing. Inner routes share the same heading, divider and content rhythm.

## Components
- Navigation: opaque surface, simple wordmark, underlined active route, language controls, theme toggle. At 800px and below, use a disclosure menu that closes on route selection or Escape.
- Projects: screenshot link, plain title, concise description, technology metadata. Other homepage projects use compact thumbnail rows. The project page shows all six in a two-column gallery with features, stack and repository links. Screenshot links open the full original image. Preserve the entire image using object-fit: contain; never crop away application controls.
- Actions: dark solid primary buttons; inline text links with a small arrow. Avoid glow effects and decorative gradients.
- Forms: visible labels, native required/email validation, autocomplete, focus outline, disabled sending state, and a persistent live status region. Keep the configured form endpoint.
- Detail pages: flat lists for experience, skills and certificates; surfaces only where grouping helps, such as the contact form and about note.

## Accessibility and motion
Maintain 4.5:1 text contrast (3:1 for large text), one h1 per route, accessible control names, keyboard focus, skip link and focus transfer to main content after navigation. Content is visible by default. Use only a restrained introduction entrance and cover hover; honor prefers-reduced-motion. Do not hide mobile content through opacity-only menus.

## References
- https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/replicate/DESIGN.md
- https://github.com/pbakaus/impeccable
- https://github.com/pbakaus/impeccable/blob/main/skill/reference/craft-floor.md
