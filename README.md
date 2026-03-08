# QMUL Women in STEM Hackathon Website

Static GitHub Pages website for the **International Women in STEM Hackathon 2026**.

Live site: [https://ivelina0.github.io/women-in-stem-hackathon/](https://ivelina0.github.io/women-in-stem-hackathon/)

---

## Purpose

This website supports participants before and during the hackathon by providing:

- event timeline and countdown to presentations
- project ideas grouped by cohort level
- practical tools/resources grouped by cohort level
- organiser and supporter information

The site is intentionally:

- beginner-friendly
- easy to edit
- playful and welcoming (not corporate)

---

## Design Direction

The visual style follows the repository guidance:

- playful
- cartoonish
- pastel
- scrapbook-like
- rounded cards and sticker-like UI

### Colour Palette

Main palette:

- `#FE9EC7` (pink)
- `#F9F6C4` (soft yellow)
- `#89D4FF` (light blue)
- `#44ACFF` (bright blue)

Secondary palette:

- `#EB4C4C`
- `#FF7070`
- `#FFA6A6`
- `#FFEDC7`

Additional supporting tones are defined in [style.css](style.css).

---

## Site Pages

- [index.html](index.html) — Homepage
	- countdown block
	- Day 1 / Day 2 timelines (desktop + mobile versions)
	- organisers section
	- “Made Possible By” supporters section

- [projects.html](projects.html) — Project ideas
	- cohort picker: **Kittens** / **Lionesses**
	- dynamic show/hide project cards

- [resources.html](resources.html) — Tools and learning resources
	- cohort picker: **Kittens** / **Lionesses**
	- dynamic show/hide resource cards

Shared assets/logic:

- [style.css](style.css) — shared visual styling + page-specific scoped sections
- [script.js](script.js) — shared JS logic for countdown + cohort pickers

---

## Content Sources & Reference Files

Core planning/reference content is in [docs/](docs/):

- [docs/timeline-summary.md](docs/timeline-summary.md)
	- source for event schedule and timeline content

- [docs/project-ideas-summary.md](docs/project-ideas-summary.md)
	- source for project cards and level-appropriate ideas

- [docs/Timeline and Requirements - Women in STEM Hackathon March 2026.pdf](docs/Timeline%20and%20Requirements%20-%20Women%20in%20STEM%20Hackathon%20March%202026.pdf)
	- PDF reference for timeline and requirements

- [docs/Project Suggestions - Hackathon March 2026.pdf](docs/Project%20Suggestions%20-%20Hackathon%20March%202026.pdf)
	- PDF reference for project suggestions

---

## Cohort Model Used in the Site

- **Kittens**: beginner/newer participants
	- Python basics, starter workflows, simple analysis/visualisation

- **Lionesses**: more experienced participants
	- stronger coding workflows, version control, project structure, advanced tooling

This structure is used consistently in both Projects and Resources pages.

---

## Technical Stack

- HTML
- CSS
- Vanilla JavaScript

No framework/build step required.

---

## Local Development

Because this is a static site, you can open files directly in a browser, or run a simple local server.

Recommended quick options:

- VS Code Live Server extension
- Python simple server from repo root (if needed)

Always check pages at both desktop and mobile widths before pushing.

---

## Repository Structure

```text
women_in_stem_hackathon.github.io/
├── AGENTS.md
├── index.html
├── projects.html
├── resources.html
├── style.css
├── script.js
├── org_pics/
└── docs/
		├── timeline-summary.md
		├── project-ideas-summary.md
		├── Timeline and Requirements - Women in STEM Hackathon March 2026.pdf
		└── Project Suggestions - Hackathon March 2026.pdf
```

---

## Accessibility & UX Notes

- navigation is consistent across pages
- cohort interactions rely on clear button states and progressive reveal
- timeline has desktop and mobile-specific layouts for readability
- cards use readable contrast while keeping pastel styling

---

## Editing Notes (For Future Contributors)

1. Keep style playful and beginner-friendly.
2. Reuse markdown/PDF source material in `docs/` where possible.
3. Avoid introducing framework complexity.
4. Keep class names clear and edits easy for beginners.
5. Test cohort buttons and timeline responsiveness after changes.

---

## Credits

- Queen Mary University of London, Mathematics Department
- Piscopia initiative support/references
- Hackathon organisers and mentors

