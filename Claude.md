# CLAUDE.md — Trend Code

## Project Overview

Trend Code is a premium digital solutions agency website.
Static site: vanilla HTML5 + CSS3 + vanilla JS. No frameworks, no build tools.
Owner: Artur Wagner
Live: https://trendcode.ie
Repo: https://github.com/arturwgnr/trendcode
Status: Active development

---

## File Structure

```
/
├── index.html              # Main page (1107 lines)
├── projects.html           # All Projects page (to be created)
├── css/
│   ├── base.css            # Reset, CSS variables, typography, utilities
│   ├── layout.css          # Section layouts, grids, spacing, responsive
│   └── components.css      # UI components (buttons, cards, forms, etc.)
└── images/
    ├── trendcode-logo-png.png
    ├── trendcode-logo-white.png
    ├── flowee-ss.jpeg
    ├── sos-ss.png
    ├── mmanu-ss.png
    └── trendcode-wallpeaper.jpeg
```

---

## MANDATORY: Before Making Any Change

Before touching any file, you MUST:

1. Read `index.html` in full
2. Read all three CSS files: `base.css`, `layout.css`, `components.css`
3. Understand the section you are modifying and how it connects to adjacent sections
4. Identify which CSS classes are involved — never guess

Do not write a single line of code before completing this step.
If you skip this, you will break the design system.

---

## Design System

### Color Palette (defined in base.css)

```css
--color-primary: rgb(91, 107, 87) /* Main sage green */
  --color-primary-lt: #6b7d67 /* Lighter green */ --color-bg: #f5f2ee
  /* Off-white background */ --color-text: #1a1a1a /* Near black */
  --color-white: #ffffff --color-muted: #7a7a7a /* Secondary text */
  --color-border: #e0dbd5 --color-surface: #edeae5 /* Subtle surface */;
```

### Typography

```css
--font-heading:
  "Syne", sans-serif /* Bold, geometric — headings only */ --font-body: "Inter",
  sans-serif /* Clean — body text, UI labels */;
```

- h1: `clamp(2.6rem, 6vw, 5rem)` weight 700
- h2: `clamp(2rem, 4vw, 3rem)` weight 700
- h3: `clamp(1.25rem, 2.5vw, 1.6rem)` weight 600

### Spacing & Shape

```css
--radius-sm: 6px --radius-md: 12px --radius-lg: 20px --max-width: 1200px
  --section-pad: 96px 24px --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.07)
  --shadow-hover: 0 8px 40px rgba(0, 0, 0, 0.12) --transition: 0.3s ease;
```

### Aesthetic Direction

The site is **premium, minimal, editorial**. Think high-end agency.

- Dark sage green as the brand anchor
- Off-white background with subtle warm undertones
- Syne for headings = modern, geometric confidence
- Inter for body = clean, trustworthy
- Generous whitespace, restrained use of color
- No gradients except inside project card placeholders
- Shadows are subtle — never heavy drop shadows
- Animations: smooth, purposeful, never flashy

**Do not introduce new colors, fonts, or visual styles that break this direction.**
When in doubt, look at what already exists and stay consistent.

---

## CSS Architecture Rules

- `base.css` — Variables, reset, typography, utility classes only
- `layout.css` — Section layouts, grids, positioning, responsive breakpoints
- `components.css` — Reusable UI components: buttons, cards, forms, badges
- No inline styles unless absolutely necessary
- Never hardcode a color that already exists as a CSS variable
- All new component CSS goes in `components.css`
- All new layout/section CSS goes in `layout.css`
- JS lives in the single `<script>` block at the bottom of `index.html`

---

## Responsive Breakpoints

```css
@media (max-width: 1024px) {
  /* Tablet landscape */
}
@media (max-width: 768px) {
  /* Tablet portrait / mobile */
}
@media (max-width: 480px) {
  /* Small mobile */
}
```

Test every change at all three breakpoints.

---

## Site Sections (index.html)

| #   | Section      | ID              | Notes                                            |
| --- | ------------ | --------------- | ------------------------------------------------ |
| 1   | Navbar       | `#navbar`       | Fixed, blur backdrop, scrolled state adds border |
| 2   | Hero         | `#home`         | Two-column: copy left, card stack visual right   |
| 3   | Services     | `#services`     | 4-column card grid                               |
| 4   | Our Work     | `#work`         | 3-column project cards (selected only)           |
| 5   | About        | `#about`        | Two-column, green background                     |
| 6   | Testimonials | `#testimonials` | 3-column, surface background                     |
| 7   | Contact      | `#contact`      | Two-column: info left, form right                |
| 8   | Footer       | —               | 4-column, dark background                        |

---

## JavaScript Patterns

Vanilla JS only. Current scripts in `<script>` block at bottom of `index.html`:

- Navbar scroll class toggle
- Mobile hamburger menu toggle
- Close mobile nav on link click
- IntersectionObserver for active nav link highlight

All new JS appended to the existing script block. No external libraries.

---

## Open Tasks (Pending Implementation)

### 1. View All Projects button -> projects.html

The `.btn.btn--ghost` "View All Projects" button in `#work` currently links to LinkedIn.
**Change:** Create `projects.html` — a dedicated page with:

- Same navbar and footer as `index.html`
- Same design system (import same CSS files)
- All portfolio projects displayed (not just the 3 selected)
- A CTA section at the bottom pushing toward contact ("Ready to start your project?")
- Link the button to `projects.html`

The page must feel like a natural extension of the main site — same premium aesthetic, same component classes where possible.

### 2. AI Chat Assistant (Gemini Free Tier)

Add a floating chat widget to `index.html` (and `projects.html`):

- Triggered by a floating button (bottom-right corner)
- Uses Gemini API (free tier — `gemini-2.0-flash` or `gemini-1.5-flash`)
- API key will be provided separately — use placeholder `GEMINI_API_KEY` until then
- The assistant's goal: answer basic questions about Trend Code services, then redirect to contact
- Persona: friendly, brief, premium-feeling — not robotic
- System prompt should include: what Trend Code does, services offered, pricing CTA (redirect to form), contact email `trendcode@hotmail.com`
- Widget must match the design system: sage green accent, `--font-body`, `--radius-md`, consistent shadows

**Note:** Since this is a static site with no backend, the Gemini API call will be made client-side. The API key will be exposed — this is a known and accepted tradeoff for now.

### 3. Testimonial Avatars

The three testimonial cards in `#testimonials` use emoji as placeholder avatars.
**Replace** with real profile photos when provided.
Images will be placed in `/images/` folder.
Target class: `.testimonial-card__avatar`
Use `<img>` tag with `alt` attribute matching the client name.

### 4. Contact Form — Wire Up Email

The form in `#contact` is currently visual-only (`<form novalidate>`).
**Wire it up** using [Formspree](https://formspree.io) (free tier):

- Fields: name, email, subject, message
- On submit: show a success message inline (do not redirect)
- On error: show an inline error message
- The form should send to: `trendcode@hotmail.com`
- Formspree endpoint placeholder: `YOUR_FORMSPREE_ID` — to be replaced when account is created

### 5. Instagram Link

Footer Instagram icon currently has `href="#"`.
**Update** to: `https://www.instagram.com/trendcode.dev?igsh=ZmI4Zzk5ZmRyem4%3D&utm_source=qr`
Target: `<a class="social-icon" aria-label="Instagram">` in the footer.

---

## Portfolio Projects (Actual)

| Name             | URL                                        | Category          | Screenshot       |
| ---------------- | ------------------------------------------ | ----------------- | ---------------- |
| Flowee           | https://flowee-finance-oficial.vercel.app/ | Web Application   | `flowee-ss.jpeg` |
| SOS Transpaletes | https://www.sostranspaletes.com.br/        | Brand Identity    | `sos-ss.png`     |
| Manu Makeup      | https://mmanumakeup-appointment.vercel.app | Portfolio Website | `mmanu-ss.png`   |

More projects to be added to `projects.html` when assets are provided.

---

## Known Placeholders (Still Pending)

- [ ] Testimonial avatars — replace with real photos
- [ ] LinkedIn social icon (`href="#"`) — add real URL
- [ ] Footer copyright — confirm final text
- [ ] Privacy Policy / Terms pages — not yet created
- [ ] Gemini API key — to be provided
- [ ] Formspree endpoint ID — to be provided after account creation

---

## Implementation Notes

- Always read all 3 CSS files before making changes
- Maintain CSS variable usage — never hardcode colors that exist as variables
- Keep `aria-hidden="true"` on `.hero__visual`
- The `.hero__badge` sits outside `.hero__image-wrap`, inside `.hero__visual`
- Test all changes at breakpoints: 1024px, 768px, 480px
- `projects.html` imports the same CSS files as `index.html`
- The AI chat widget JS goes in a `<script>` block at the bottom of each page it appears on
