# The BrandsWay — Premium Portfolio Redesign

## Objective

Redesign the portfolio experience of The BrandsWay to make the website feel more premium, editorial, modern, and agency-focused.

The primary changes are:

1. Remove the existing **Our Work** section from the navigation.
2. Replace **Our Work** with a dedicated **Portfolio** page.
3. Remove the current **Our Best Work** section from the homepage.
4. Introduce a more premium visual section on the homepage that creates curiosity and drives users to the Portfolio.
5. Build a categorized portfolio showcasing websites, graphics, branding, social media, marketing, and other selected work.
6. Keep the existing The BrandsWay visual identity while improving hierarchy, whitespace, typography, motion, and presentation.

---

# 1. Navigation Changes

### Current

- Home
- About Us
- Our Work
- Insights
- Courses We Offered
- Contact Us
- Book a Discovery Call

### New

- Home
- About Us
- Portfolio
- Insights
- Courses We Offered
- Contact Us
- Book a Discovery Call

### Requirements

- Rename the `Our Work` navigation item to `Portfolio`.
- Route it to `/portfolio`.
- Remove any old `/our-work` navigation references.
- Update active-navigation styling so Portfolio is highlighted when the user is on `/portfolio`.
- Keep the CTA button unchanged unless a small visual refinement is required.

---

# 2. Remove Homepage "Our Best Work"

Remove the existing homepage section that directly displays the current best-work/project cards.

Do not simply hide the section with CSS. Remove the component from the homepage composition.

Also remove:

- Old project-grid imports that are no longer required.
- Old section-specific data if it is not reused.
- Duplicate project cards.
- Any old "View Our Work" CTA pointing to the removed section.

---

# 3. New Homepage Premium Section

Replace the old work showcase with a premium editorial-style section.

## Section Name

Use:

**Selected Work**

Supporting copy:

**A glimpse into what we build, design, and grow.**

Alternative small label:

`SELECTED WORK / 2024 — 2026`

## Visual Direction

The section should feel like a premium creative agency rather than a normal portfolio grid.

Use:

- Large typography
- Generous whitespace
- Editorial composition
- Asymmetric project layout
- Large visual previews
- Subtle borders
- Soft background treatment
- Minimal labels
- Smooth hover motion
- Strong image cropping
- Premium micro-interactions

Avoid:

- Generic card grids
- Excessive shadows
- Too many rounded cards
- Excessive gradients
- Overloaded text
- Fake project metrics
- Stock-looking portfolio presentation

## Suggested Layout

Display 3–4 selected projects only.

Example:

### Project 01
Large featured website preview

`WEB DESIGN / DEVELOPMENT`

Project title

Short one-line description.

### Project 02
Graphic/branding project

`BRANDING / GRAPHICS`

Project title

Short description.

### Project 03
Website or e-commerce project

`WEB / E-COMMERCE`

Project title

Short description.

### Project 04
Marketing/social creative

`MARKETING / SOCIAL MEDIA`

Project title

Short description.

At the bottom:

**Explore the full portfolio →**

This button routes to `/portfolio`.

---

# 4. Portfolio Page

Create a dedicated page:

`/portfolio`

Page title:

**Work that speaks for itself.**

Supporting text:

**From digital experiences to visual identities and growth campaigns, explore selected work created by The BrandsWay.**

Keep the copy confident but avoid unsupported claims.

---

# 5. Portfolio Category System

The Portfolio page must support filtering.

## Categories

Use these filters:

- All
- Websites
- E-Commerce
- Branding
- Graphics
- Social Media
- Marketing
- SEO
- Other

The category filter should update the visible projects without a full page reload.

Use smooth layout transitions when filtering.

---

# 6. Portfolio Data Structure

Do not hard-code every project directly inside the UI component.

Create a centralized portfolio data file.

Example structure:

```js
{
  id: "project-slug",
  title: "Project Name",
  category: "Websites",
  categories: ["Websites", "Development"],
  year: "2026",
  client: "Client Name",
  description: "Short project description.",
  coverImage: "/portfolio/project-cover.webp",
  gallery: [
    "/portfolio/project-01.webp",
    "/portfolio/project-02.webp"
  ],
  technologies: ["React", "Tailwind CSS", "Node.js"],
  liveUrl: "https://example.com",
  featured: true
}
```

Only include `client`, `year`, `liveUrl`, metrics, or technologies when the information is real and approved.

---

# 7. Portfolio Visual Layout

Use a premium editorial masonry/grid system.

Recommended structure:

## Desktop

- Featured project: large 2-column visual
- Secondary projects: 1-column or smaller editorial blocks
- Variable image heights
- Strong spacing between projects

Example visual rhythm:

```text
┌───────────────────────────────┐
│                               │
│       FEATURED PROJECT        │
│          LARGE IMAGE          │
│                               │
└───────────────────────────────┘

        Project title
        Category / Year

┌───────────────┐   ┌─────────────────────┐
│               │   │                     │
│   PROJECT     │   │     PROJECT         │
│   IMAGE       │   │     IMAGE           │
│               │   │                     │
└───────────────┘   └─────────────────────┘

        More selected work...
```

Do not make every card identical.

The portfolio should feel curated.

---

# 8. Project Hover Interaction

Desktop:

When the cursor enters a project:

- Image scales very slightly.
- Overlay appears softly.
- Project category becomes more visible.
- Arrow/CTA appears.
- Cursor interaction should feel smooth.

Suggested interaction:

`View Project ↗`

Mobile:

Since there is no hover state:

- Use tap interaction.
- Keep project information visible below the image.
- Do not rely on hover-only content.

Animation should remain subtle and fast.

Avoid excessive GSAP/Framer Motion movement.

---

# 9. Project Detail Experience

If the project collection is large enough, create individual project pages:

`/portfolio/project-slug`

Each project page can contain:

1. Project title
2. Category
3. Short project introduction
4. Hero image
5. Project gallery
6. Services provided
7. Technologies used, when relevant
8. Project outcome
9. Live website button, when available
10. Next project navigation

Example:

```text
PROJECT / WEBSITE

Project Name

A short explanation of the challenge,
approach, and final digital experience.

[Large project image]

SERVICES
Web Design
Development
SEO

[Project gallery]

VISIT WEBSITE ↗

NEXT PROJECT →
```

Do not create project detail pages if there is not enough genuine information for them.

---

# 10. Premium Homepage Replacement

The homepage should not become overloaded with portfolio content.

After removing the current "Our Best Work" section, introduce a more premium editorial block.

Recommended section:

## "Selected Work"

Small eyebrow:

`A FEW THINGS WE'VE BUILT`

Large headline:

**Ideas made visible.**

Supporting text:

**Websites, identities, campaigns, and digital experiences designed to move brands forward.**

Then show only 3–4 carefully selected projects.

CTA:

**Explore Portfolio ↗**

---

# 11. Design System

Maintain the existing The BrandsWay identity visible in the provided design.

## Typography

Use a strong modern sans-serif.

Hierarchy:

- Eyebrow: uppercase + letter spacing
- Section title: large and elegant
- Project title: medium/large
- Description: restrained and readable
- Metadata: small uppercase

Do not use too many font weights.

## Color

Keep the current visual language:

- Off-white / warm background
- Black typography
- The BrandsWay red as the primary accent
- Muted grey for secondary information

Avoid introducing a completely new color palette.

## Borders

Use thin, subtle borders for:

- Category filters
- Project metadata
- Section separators

---

# 12. Background Treatment

The current homepage has a textured/grid aesthetic.

Do not remove the brand character completely.

For the Portfolio page:

- Use a cleaner background.
- Keep a very subtle grid or texture.
- Reduce visual noise behind project images.
- Let portfolio imagery become the main visual focus.

The portfolio should feel more sophisticated than the homepage.

---

# 13. Responsive Design

## Desktop

Optimize for:

- 1440px
- 1280px
- 1024px

The portfolio should have strong editorial spacing on large screens.

## Tablet

- 2-column layout where appropriate.
- Reduce typography scale.
- Preserve image quality.

## Mobile

- 1-column layout.
- Large project imagery.
- Horizontal or wrapped category filters.
- No hover-dependent information.
- Comfortable touch targets.
- Avoid excessive animation.
- Ensure no horizontal overflow.

---

# 14. Animation Guidelines

Use subtle motion.

Recommended:

- Fade-up on section entrance
- Image scale: approximately `1.02–1.05`
- Smooth filter transitions
- Small arrow movement
- Staggered project entrance

Avoid:

- Large parallax effects
- Constant floating animations
- Excessive page transitions
- Long loading animations
- Animations that delay content visibility

Animation should support the premium feeling, not become the main attraction.

---

# 15. SEO Requirements

Create unique metadata for `/portfolio`.

Suggested:

**Title**

`Portfolio | The BrandsWay`

**Description**

`Explore selected websites, branding, graphics, marketing campaigns, and digital work by The BrandsWay.`

Also add:

- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata

Each project page, if created, should have unique metadata.

---

# 16. Accessibility

The portfolio must include:

- Meaningful image `alt` text
- Keyboard-accessible project links
- Visible focus states
- Accessible category buttons
- Proper heading hierarchy
- Sufficient text contrast
- No information available only through hover

Category filters should expose their active state to assistive technologies.

---

# 17. Performance

Portfolio images can become heavy, so optimize them.

Requirements:

- Prefer WebP/AVIF.
- Use responsive image sizes.
- Lazy-load images below the fold.
- Use appropriate image dimensions.
- Do not load every gallery image on the initial page.
- Load project detail galleries only when required.
- Avoid unnecessary animation libraries/components.

The first visible portfolio image should load with priority.

---

# 18. Content Rules

Only show real work.

Do not use:

- Fake clients
- Fake project numbers
- Fake revenue
- Fake conversion percentages
- Fake testimonials
- Fake awards

If a project is still confidential, use an approved generic title such as:

`Confidential E-Commerce Brand`

---

# 19. Component Structure

Recommended React structure:

```text
src/
├── pages/
│   └── Portfolio.jsx
│
├── components/
│   └── portfolio/
│       ├── PortfolioHero.jsx
│       ├── PortfolioFilters.jsx
│       ├── PortfolioGrid.jsx
│       ├── PortfolioCard.jsx
│       ├── FeaturedProject.jsx
│       ├── ProjectModal.jsx
│       └── PortfolioCTA.jsx
│
├── data/
│   └── portfolioData.js
│
└── assets/
    └── portfolio/
```

If project detail pages are implemented:

```text
src/
├── pages/
│   ├── Portfolio.jsx
│   └── ProjectDetails.jsx
```

---

# 20. Routing

Add:

```text
/portfolio
```

Optional:

```text
/portfolio/:slug
```

Update navbar and homepage CTA links accordingly.

Remove old:

```text
/our-work
```

if it exists.

If `/our-work` has already been indexed, consider redirecting it to `/portfolio` rather than leaving a broken route.

---

# 21. Implementation Checklist

- [ ] Remove `Our Work` from navbar.
- [ ] Add `Portfolio` to navbar.
- [ ] Add `/portfolio` route.
- [ ] Remove homepage `Our Best Work` section.
- [ ] Remove unused old work-section components/imports.
- [ ] Add premium `Selected Work` homepage section.
- [ ] Add `Explore Portfolio` CTA.
- [ ] Create centralized portfolio data.
- [ ] Add portfolio categories.
- [ ] Add filtering.
- [ ] Build editorial/masonry project layout.
- [ ] Add desktop hover interaction.
- [ ] Add mobile tap-friendly behavior.
- [ ] Add project detail pages only when useful.
- [ ] Optimize portfolio images.
- [ ] Add SEO metadata.
- [ ] Add accessible alt text and keyboard interaction.
- [ ] Test mobile/tablet/desktop.
- [ ] Test page loading performance.
- [ ] Test all portfolio links.
- [ ] Redirect `/our-work` to `/portfolio` if required.

---

# 22. Final Design Direction

The final experience should communicate:

**"We are a creative growth agency that knows how to present its work."**

The portfolio should feel:

- Premium
- Editorial
- Minimal
- Confident
- Visual
- Curated
- Modern
- Fast
- Conversion-focused

The goal is not to show the maximum number of projects.

The goal is to make the **best work look exceptionally valuable**.

The homepage creates curiosity.

The Portfolio page provides depth.

The individual project pages, when used, provide proof.

The final CTA converts that interest into a discovery call.
