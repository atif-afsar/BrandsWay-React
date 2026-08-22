# The BrandsWay — Premium Portfolio Implementation

You are working on the existing **The BrandsWay** website:

https://thebrandsway.com/

The goal is to redesign the portfolio/work experience into a **modern, extremely premium, minimal and editorial portfolio system**.

Do not create a generic agency portfolio.

The final result should feel like a **high-end creative studio / digital agency portfolio** with excellent typography, whitespace, visual hierarchy and subtle interactions.

---

# 1. CORE REQUIREMENT

Replace the existing **Our Work** experience with a new:

# Portfolio

The Portfolio should contain ONLY these 3 categories:

1. **Web Projects**
2. **Graphics**
3. **Instagram Reels**

Do NOT create additional categories.

Do NOT add unnecessary sections such as:

* SEO Projects
* Branding Projects
* Marketing Projects
* Case Studies
* Testimonials
* Statistics
* Awards
* Clients section

The three categories should be the core of the portfolio.

---

# 2. NAVBAR

Update the existing navigation.

Current:

Home
About Us
Our Work
Insights
Courses We Offered
Contact Us
Book a Discovery Call

Change to:

Home
About Us
Portfolio
Insights
Courses We Offered
Contact Us
Book a Discovery Call

`Portfolio` must route to:

`/portfolio`

Remove all visible references to:

`Our Work`

If an `/our-work` route exists, redirect it to `/portfolio`.

---

# 3. REMOVE OLD HOMEPAGE WORK SECTION

Remove the current homepage:

**Our Best Work**

section.

Do NOT simply hide it using CSS.

Remove the component from the homepage rendering.

Remove unused imports and old work data if they are no longer required.

The homepage should not contain the old portfolio/project grid.

---

# 4. HOMEPAGE PORTFOLIO PREVIEW

Replace the old "Our Best Work" section with a very minimal preview.

Section eyebrow:

`SELECTED WORK`

Headline:

**A few things we've built.**

Supporting text:

`Digital experiences, visual stories and content crafted for ambitious brands.`

Show only 3 selected pieces:

* 1 website
* 1 graphic
* 1 Instagram reel

Do not show all projects on the homepage.

At the bottom:

**Explore Portfolio ↗**

Link:

`/portfolio`

The homepage preview should be visually minimal.

---

# 5. PORTFOLIO PAGE HERO

Create:

`/portfolio`

Hero should be extremely minimal.

Small eyebrow:

`THE BRANDSWAY / SELECTED WORK`

Large heading:

# We make brands

# **impossible to ignore.**

Make the second line The BrandsWay red.

Supporting copy:

`Websites, visual stories and content designed to make brands matter.`

Do not add:

* Statistics
* Fake numbers
* Testimonials
* Avatars
* Multiple CTA buttons
* Decorative 3D objects

Use generous whitespace.

---

# 6. CATEGORY NAVIGATION

Immediately below the hero, create a minimalist category navigation.

Only these:

`ALL`

`WEB PROJECTS`

`GRAPHICS`

`INSTAGRAM REELS`

The active category should have a subtle The BrandsWay red indicator.

Do NOT use large pill buttons.

Do NOT create chunky cards.

Use typography-based navigation.

On mobile:

Make the categories horizontally scrollable.

Do not cause horizontal page overflow.

Filtering should happen client-side without a page reload.

Use a subtle transition when changing categories.

---

# 7. CATEGORY 01 — WEB PROJECTS

This is the primary portfolio category.

Use the following REAL projects.

Do not invent projects.

Do not replace these with fake placeholders.

---

## WEB PROJECT 01 — VELISQA

URL:

https://www.velisqa.com/

Type:

E-commerce

Display:

`01 / WEB PROJECT`

Title:

**Velisqa**

Category label:

`E-COMMERCE`

Description:

`A premium e-commerce experience designed for a modern jewellery brand.`

Services:

`UI / UX`
`E-COMMERCE`
`WEB DEVELOPMENT`

CTA:

`VISIT WEBSITE ↗`

CTA URL:

https://www.velisqa.com/

Make this the **featured web project**.

Use a very large visual presentation.

---

## WEB PROJECT 02 — YASIR ALI CLASSES

URL:

https://www.yasiraliclasses.in/

Type:

Educational Website

Display:

`02 / WEB PROJECT`

Title:

**Yasir Ali Classes**

Category:

`EDUCATION`

Description:

`A focused digital experience for an education and coaching brand.`

Services:

`WEB DESIGN`
`DEVELOPMENT`
`EDUCATION`

CTA:

`VISIT WEBSITE ↗`

URL:

https://www.yasiraliclasses.in/

---

## WEB PROJECT 03 — ISLAMIC MISSION SCHOOL

URL:

https://www.islamicmissionschool.org/

Type:

School Website

Display:

`03 / WEB PROJECT`

Title:

**Islamic Mission School**

Category:

`SCHOOL WEBSITE`

Description:

`A modern digital presence created for a school community.`

Services:

`WEB DESIGN`
`DEVELOPMENT`
`EDUCATION`

CTA:

`VISIT WEBSITE ↗`

URL:

https://www.islamicmissionschool.org/

---

## WEB PROJECT 04 — MEHDI HASAN TAILORS

URL:

https://mehdihasantailors.com/

Type:

Clothing E-commerce

Display:

`04 / WEB PROJECT`

Title:

**Mehdi Hasan Tailors**

Category:

`FASHION / E-COMMERCE`

Description:

`A digital storefront for a clothing and tailoring brand.`

Services:

`E-COMMERCE`
`WEB DESIGN`
`DEVELOPMENT`

CTA:

`VISIT WEBSITE ↗`

URL:

https://mehdihasantailors.com/

---

## WEB PROJECT 05 — EXPERTS TAX CONSULTANTS

URL:

https://expertstaxconsultants.com/

Type:

UAE Business Website

Display:

`05 / WEB PROJECT`

Title:

**Experts Tax Consultants**

Category:

`BUSINESS / UAE`

Description:

`A professional digital presence for a UAE-based tax consultancy.`

Services:

`WEB DESIGN`
`DEVELOPMENT`
`BUSINESS WEBSITE`

CTA:

`VISIT WEBSITE ↗`

URL:

https://expertstaxconsultants.com/

---

# 8. WEB PROJECT LAYOUT

Do NOT display the five websites as a standard 3-column card grid.

Use an **editorial layout**.

The recommended structure:

### Project 01 — Velisqa

Full-width featured project.

Large website visual.

Project information underneath.

---

### Project 02 — Yasir Ali Classes

Asymmetric two-column layout.

Large visual on the right.

Information on the left.

---

### Project 03 — Islamic Mission School

Reverse the composition.

Large visual on the left.

Information on the right.

---

### Project 04 — Mehdi Hasan Tailors

Large visual.

Minimal information.

---

### Project 05 — Experts Tax Consultants

Wide final web project.

Minimal information.

This variation creates a premium art-directed rhythm.

---

# 9. WEB PROJECT VISUALS

For each website project:

Use a real visual representation of the actual website.

Prefer:

* High-quality website screenshot
* Browser-style presentation
* Full-page preview
* Carefully cropped hero section
* Desktop + mobile preview where useful

Do NOT use the same laptop mockup for every project.

Do NOT use generic stock images.

Do NOT create fake screenshots.

If screenshots need to be generated, use the actual website as the visual reference.

The portfolio must accurately represent the real projects.

---

# 10. WEB PROJECT HOVER

Desktop:

When hovering over a website project:

* Image scales approximately `1.02`
* Slight visual transition
* `VISIT WEBSITE ↗` becomes prominent
* Arrow moves subtly
* Project information moves only a few pixels

Animation duration:

`400–600ms`

Use smooth easing.

Do NOT create flashy animations.

Mobile:

Do not depend on hover.

Keep CTA visible.

---

# 11. CATEGORY 02 — GRAPHICS

Create a completely different visual rhythm for Graphics.

This section should feel like a **creative gallery**.

Heading:

**Graphics**

Small description:

`Visual systems, campaign creatives and digital artwork created for brands.`

Do NOT create normal cards.

Use a clean editorial gallery.

Possible layout:

```text
┌──────────────────────┐
│                      │
│     GRAPHIC 01       │
│                      │
└──────────────────────┘

             ┌───────────────────┐
             │                   │
             │     GRAPHIC 02    │
             │                   │
             └───────────────────┘

┌─────────────────────────────┐
│                             │
│         GRAPHIC 03          │
│                             │
└─────────────────────────────┘
```

Use an asymmetric masonry/editorial composition.

Graphics should be large.

Let the artwork itself dominate.

---

# 12. GRAPHICS DATA SYSTEM

Create centralized data.

Example:

```js
{
  id: "graphic-01",
  type: "graphics",
  title: "Campaign Creative",
  description: "Digital campaign artwork.",
  image: "/portfolio/graphics/graphic-01.webp"
}
```

Do not invent client names or campaign results.

Use actual graphic assets when they are available in the project.

The system must allow additional graphics to be added later without changing the UI components.

---

# 13. CATEGORY 03 — INSTAGRAM REELS

Create a separate portfolio category:

# Instagram Reels

This should feel completely different from the website section.

Do NOT make it look like a normal video grid.

Use a premium vertical-video gallery.

Each reel should use a `9:16` aspect ratio.

Layout:

* 3-column desktop
* 2-column tablet
* 2-column or 1-column mobile depending on viewport

Each reel should have:

* Thumbnail
* Small category label
* Reel title if available
* Instagram icon
* `WATCH REEL ↗`

Use real reel thumbnails.

Do not use fake Instagram posts.

---

# 14. REEL INTERACTION

Desktop hover:

* Thumbnail scales slightly
* Dark overlay appears
* Instagram icon appears
* `WATCH REEL ↗` appears

On click:

Open the actual Instagram Reel URL.

Do not embed an unnecessarily heavy Instagram feed if it negatively affects performance.

Prefer lightweight thumbnails with outbound links unless an embedded reel is specifically required.

---

# 15. REELS DATA STRUCTURE

Create:

```js
{
  id: "reel-01",
  type: "reels",
  title: "Campaign Reel",
  thumbnail: "/portfolio/reels/reel-01.webp",
  instagramUrl: "https://www.instagram.com/..."
}
```

The architecture must support adding more reels later.

---

# 16. PORTFOLIO FILTER BEHAVIOR

When:

`ALL`

is selected:

Show:

1. Web Projects
2. Graphics
3. Instagram Reels

When:

`WEB PROJECTS`

is selected:

Show only the 5 real websites.

When:

`GRAPHICS`

is selected:

Show only graphic work.

When:

`INSTAGRAM REELS`

is selected:

Show only reel content.

Use smooth transitions.

Do not reload the page.

---

# 17. PROJECT DETAIL

For web projects, clicking the project should NOT necessarily create a complicated case-study page.

The primary CTA can simply:

`VISIT WEBSITE ↗`

and open the real website.

If a project detail page is implemented, keep it extremely minimal.

Example:

```text
VELISQA

E-COMMERCE

[ LARGE PROJECT VISUAL ]

A premium e-commerce experience
designed for a modern jewellery brand.

SERVICES
UI / UX
E-COMMERCE
DEVELOPMENT

VISIT WEBSITE ↗
```

Do not invent performance statistics.

---

# 18. FINAL CTA

After the portfolio content:

Small label:

`HAVE A PROJECT IN MIND?`

Large headline:

# Let's build something

# **worth remembering.**

Make the second line red.

Supporting text:

`Have a website, campaign or creative project in mind? Let's talk.`

Primary CTA:

**Book a Discovery Call ↗**

Keep the section extremely spacious.

No giant colored container.

No excessive decoration.

---

# 19. VISUAL DESIGN SYSTEM

Maintain the existing The BrandsWay identity.

### Background

Warm off-white / very subtle pink.

### Text

Near black.

### Accent

The BrandsWay red.

### Secondary

Muted grey.

Use thin borders where needed.

Avoid heavy shadows.

Avoid gradients.

Avoid excessive rounded corners.

---

# 20. TYPOGRAPHY

Use a premium modern sans-serif.

Hero typography:

Very large.

Regular/thin weight.

Project titles:

Medium weight.

Metadata:

Small uppercase.

Descriptions:

Small and restrained.

Do not make everything bold.

Typography should create most of the visual impact.

---

# 21. SPACING

Use generous whitespace.

The page should feel calm.

Recommended:

Desktop:

* Hero vertical spacing: 140–200px
* Between major projects: 160–240px
* Section spacing: 180–280px

Mobile:

* Hero: 90–130px
* Project spacing: 100–150px
* Section spacing: 120–180px

Do not compress everything just to fit more content.

---

# 22. RESPONSIVE DESIGN

Desktop:

* 1440px
* 1280px
* 1024px

Tablet:

* Carefully adapt asymmetric layouts.

Mobile:

* One project at a time for web projects.
* Full-width visuals.
* Large typography.
* Horizontal category navigation.
* Reels optimized for vertical viewing.
* Graphics remain editorial.
* No hover-only interactions.
* No horizontal overflow.

---

# 23. PERFORMANCE

Portfolio images can become heavy.

Implement:

* WebP/AVIF where possible
* Lazy loading below the fold
* Responsive image sizes
* Correct aspect ratios
* Priority loading for the first featured project
* Lightweight reel thumbnails
* No unnecessary embedded Instagram feeds

Do not load all high-resolution graphics and videos immediately.

---

# 24. ACCESSIBILITY

Implement:

* Proper image alt text
* Keyboard-accessible links
* Focus states
* Accessible category navigation
* Proper heading hierarchy
* Sufficient contrast
* No hover-only information

---

# 25. SEO

Portfolio page metadata:

Title:

`Portfolio | The BrandsWay`

Description:

`Explore websites, e-commerce experiences, graphics and Instagram creative work by The BrandsWay.`

Add:

* Canonical
* Open Graph
* Twitter metadata

---

# 26. COMPONENT ARCHITECTURE

Use a clean reusable architecture.

Suggested:

```text
src/
├── pages/
│   └── Portfolio.jsx
│
├── components/
│   └── portfolio/
│       ├── PortfolioHero.jsx
│       ├── PortfolioFilters.jsx
│       ├── PortfolioSection.jsx
│       ├── WebProject.jsx
│       ├── GraphicsGallery.jsx
│       ├── ReelGallery.jsx
│       ├── PortfolioCTA.jsx
│       └── PortfolioFooter.jsx
│
├── data/
│   ├── webProjects.js
│   ├── graphics.js
│   └── reels.js
│
└── assets/
    └── portfolio/
        ├── websites/
        ├── graphics/
        └── reels/
```

Keep components reusable.

Do not duplicate project markup.

---

# 27. DATA ARCHITECTURE

Create separate data arrays.

### webProjects

Contains the five real websites:

1. Velisqa
2. Yasir Ali Classes
3. Islamic Mission School
4. Mehdi Hasan Tailors
5. Experts Tax Consultants

### graphics

Contains actual graphic assets.

### reels

Contains actual reel thumbnails and Instagram URLs.

The UI should consume these arrays.

This makes future portfolio updates easy.

---

# 28. IMPORTANT — DO NOT FABRICATE CONTENT

Never invent:

* Client metrics
* Revenue
* Conversion rates
* Number of visitors
* Awards
* Testimonials
* Project results
* Client quotes
* Fake logos

If information isn't available, simply don't show it.

The real work is enough.

---

# 29. FINAL DESIGN PHILOSOPHY

The page should communicate:

**We don't need to tell you we're good. We can show you.**

The portfolio should feel:

**Minimal**
**Modern**
**Premium**
**Editorial**
**Creative**
**Confident**
**Clean**

The hierarchy should be:

### 1. Beautiful work

### 2. Typography

### 3. Whitespace

### 4. Minimal information

### 5. Subtle interaction

### 6. CTA

Do not add visual elements just to make the page look "fancy".

The goal is:

> **Make the work look expensive.**

---

# 30. FINAL IMPLEMENTATION CHECKLIST

* [ ] Remove `Our Work` from navbar
* [ ] Add `Portfolio`
* [ ] Create `/portfolio`
* [ ] Redirect `/our-work` to `/portfolio` if needed
* [ ] Remove old homepage `Our Best Work`
* [ ] Add minimal homepage Selected Work preview
* [ ] Create Portfolio Hero
* [ ] Create 3-category filter
* [ ] Add 5 real web projects
* [ ] Add Graphics gallery
* [ ] Add Instagram Reels gallery
* [ ] Implement filtering
* [ ] Implement responsive layouts
* [ ] Implement subtle hover interactions
* [ ] Add real website URLs
* [ ] Add real graphic assets
* [ ] Add real reel thumbnails/URLs
* [ ] Optimize images
* [ ] Add accessibility
* [ ] Add SEO metadata
* [ ] Test desktop
* [ ] Test tablet
* [ ] Test mobile
* [ ] Test every external project link
* [ ] Ensure no fake content remains

## MOST IMPORTANT

Do not redesign the entire The BrandsWay website.

**Only redesign the portfolio/work experience and the homepage section that currently shows Our Best Work.**

Preserve the existing brand identity, navbar, colors, typography direction and overall website personality.

Make the new Portfolio feel like the **most premium part of the entire website**.
