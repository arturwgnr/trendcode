Overview
Trend Code is a premium digital solutions agency website. Static site built with vanilla HTML, CSS, and minimal JavaScript. No frameworks, no build tools — files are served directly.
Owner: Artur Wagner
Stack: HTML5 + CSS3 (vanilla) + vanilla JS
Status: Active development — being refined section by section

File Structure
/
├── index.html
├── css/
│ ├── base.css # Reset, CSS variables, typography, utilities
│ ├── layout.css # Section layouts, grids, spacing, responsive
│ └── components.css # UI components (buttons, cards, forms, etc.)
├── images/
│ ├── trendcode-logo-png.png
│ └── trendcode-wallpaper.jpg

Design System
Color Palette (defined in base.css)
css--color-primary: rgb(91, 107, 87) /_ Main green _/
--color-primary-lt: #6b7d67 /_ Lighter green _/
--color-bg: #f5f2ee /_ Off-white background _/
--color-text: #1a1a1a /_ Near black _/
--color-white: #ffffff
--color-muted: #7a7a7a /_ Secondary text _/
--color-border: #e0dbd5
--color-surface: #edeae5 /_ Subtle surface _/
Typography
css--font-heading: 'Syne', sans-serif /_ Bold, geometric — headings only _/
--font-body: 'Inter', sans-serif /_ Clean — body text, UI labels _/

h1: clamp(2.6rem, 6vw, 5rem) weight 700
h2: clamp(2rem, 4vw, 3rem) weight 700
h3: clamp(1.25rem, 2.5vw, 1.6rem) weight 600

Spacing & Shape
css--radius-sm: 6px
--radius-md: 12px
--radius-lg: 20px
--max-width: 1200px
--section-pad: 96px 24px
--shadow-card: 0 4px 24px rgba(0,0,0,0.07)
--shadow-hover: 0 8px 40px rgba(0,0,0,0.12)
--transition: 0.3s ease

Site Sections (in order)

Navbar — Fixed, blur backdrop, scrolled state adds border
Hero — Two-column grid: copy left, visual right
Services — 4-column card grid on white background
Our Work — 3-column project card grid
About / Why Us — Two-column, green background section
Testimonials — 3-column card grid on surface background
Contact — Two-column: info left, form right
Footer — 4-column grid, dark background

Hero Section — Current State
Layout

Desktop: grid-template-columns: 1fr 1fr, gap 80px
Mobile: single column, visual appears below the title/subtitle, above the CTA buttons and stats

Left side (.hero\_\_content)

Eyebrow: "Available for new projects" with animated pulse dot
H1: "We Build Digital Experiences That Convert" (<span> on "Experiences" for green color)
Subtitle paragraph
CTA buttons: "See Our Work" (primary) + "Start a Project" (ghost)
Stats: 100+ Projects / 98% Satisfaction / 5★ Rating

Right side (.hero\_\_visual)

.hero**image-wrap — contains the visual content
.hero**badge — floating card "Premium Quality / Pixel-perfect delivery", positioned bottom: -20px; left: -20px

hero\_\_image-wrap — Current Implementation
Contains a CSS browser mockup of "Lumière Boutique" (e-commerce project):

Browser frame with URL bar
Fake navbar with brand name
Dark green hero area with headline
3-column product grid with color placeholders
Stats bar with metrics
Tag line below: "E-commerce · Lumière Boutique · Delivered by Trend Code"

hero**image-wrap CSS
css.hero**image-wrap {
border-radius: var(--radius-lg);
overflow: hidden;
background: transparent;
display: block;
position: relative;
}
/_ Mobile: aspect-ratio 3/2 _/

CSS Architecture Rules

base.css — Variables, reset, typography, utility classes only. No section-specific styles.
layout.css — All section layouts, grids, positioning, responsive breakpoints.
components.css — Reusable UI components: buttons, cards, forms, badges, etc.
No inline styles unless absolutely necessary (rare exceptions exist in current code for one-off values).
All new component CSS goes in components.css.
All new layout/section CSS goes in layout.css.
JS lives in a single <script> block at the bottom of index.html.

Responsive Breakpoints
css@media (max-width: 1024px) { /_ Tablet landscape _/ }
@media (max-width: 768px) { /_ Tablet portrait / mobile _/ }
@media (max-width: 480px) { /_ Small mobile _/ }

JavaScript Patterns
Vanilla JS only, no libraries. Current scripts in index.html:

Navbar scroll class toggle
Mobile hamburger menu toggle
Close mobile nav on link click
IntersectionObserver for active nav link highlight

All new JS appended to the existing <script> block at the bottom of index.html.

Portfolio Projects (placeholder names — to be replaced with real work)
NameCategoryDescriptionLumière BoutiqueE-commerceFull-stack e-commerce, custom checkoutSolara HealthBrand IdentityComplete rebrand, logo, guidelines, webVertex CapitalWeb DesignPremium fintech marketing site

Known Placeholders (to update later)

Project card images (project-card\_\_image-placeholder) → replace with real screenshots
Testimonial avatars (👤) → replace with real photos
Social links (href="#") → replace with real LinkedIn/Instagram URLs
Email → hello@trendcode.agency (confirm when domain active)
Footer copyright → © 2026 Artur Wagner
Privacy Policy / Terms of Service pages → not yet created

Implementation Notes

Always read all 3 CSS files before making changes
Maintain CSS variable usage — never hardcode colors that exist as variables
Keep aria-hidden="true" on .hero**visual
Test changes at all 3 breakpoints (1024, 768, 480)
The .hero**badge sits outside .hero**image-wrap, inside .hero**visual — account for this in any visual changes
