# Extremely Detailed Website Design Specification
**Project Name:** L’Entre-Deux (GCIN2023 Final Project)
**Target Audience:** University students transitioning to the professional world.
**Core Aesthetic:** 20th Century European Elegance meets Modern Functionality. 
**Vibe:** Vintage Newspaper with a Modern Touch.

---

## 1. Global Design System (Instructions for AI Builder)

### 1.1. Color Palette
* **Background (Primary):** Aged Cream (`#FBF8F1`) - *To simulate old newspaper stock.*
* **Background (Secondary):** Sepia Tint (`#EBE3D5`) - *For alternating sections and cards.*
* **Text (Primary):** Charcoal/Soft Black (`#2B2B2B`) - *For high contrast readability without the harshness of pure black.*
* **Accent (Modern Touch):** Deep Teal (`#1A5F7A`) - *Used for primary buttons, active links, and hover states to introduce a 21st-century feel.*
* **Accent (Highlight):** Muted Gold (`#C89F53`) - *For subtle borders and small decorative elements.*

### 1.2. Typography
* **Logo / Masthead:** `Playfair Display` (Black/900 weight, uppercase, slight letter-spacing) or a legible Blackletter font to mimic a 20th-century newspaper masthead.
* **Headings (H1, H2, H3):** `Playfair Display` (Serif). Use italics sparingly for emphasis to evoke vintage editorial style.
* **Body Text & UI Elements:** `Inter` or `Lato` (Sans-serif). Clean, highly legible, modern contrast to the vintage headings. 

### 1.3. UI & Layout Components
* **Buttons:** Sharp corners (0px border-radius), Charcoal background, Cream text. Hover state: Shifts to Deep Teal background with a slight upward translation (`transform: translateY(-2px)`).
* **Borders:** Use thin (1px) Charcoal borders for containers, reminiscent of newspaper columns and grid layouts.
* **Shadows:** Minimal. Rely on borders for separation to maintain a flat, print-like aesthetic.

---

## 2. Site Architecture & Page-by-Page Structure

### Page 1: Home (The "Hero" Experience)
**Goal:** Establish brand legitimacy and introduce the "beginner-friendly" concept. (Academic Ref: Clarke, 2010 - Visual Symbols).

* **Navigation (Global):** * Top-aligned. Masthead style. 
    * Logo center. Links left (Shop Men, Shop Women), Links right (Inspiration, Comfort & Fit, About).
    * Bottom border: 2px solid Charcoal.
* **Hero Section:**
    * **Visual:** Auto-playing, muted background video. Starts with grainy B&W footage of 1940s European crowds in suits, fading seamlessly into modern university students walking on campus wearing L’Entre-Deux's "structured yet flowy" pieces in full color.
    * **Overlay:** Slight dark gradient for text readability.
    * **Headline (H1):** "Professionalism Simplified."
    * **Sub-headline:** "Beginner-friendly business wear for the modern graduate. Inspired by the 20th century, tailored for today."
    * **CTA Button:** "Explore the Collection" (Deep Teal).
* **Value Proposition Section (3-Column Grid):**
    * *Column 1:* "Beginner Friendly" (Icon: Hanger). Text: Pre-styled coordinates that remove the guesswork.
    * *Column 2:* "Historical Elegance" (Icon: Pocket Watch). Text: High-waisted, structured silhouettes from 20th-century Europe.
    * *Column 3:* "Modern Comfort" (Icon: Feather). Text: Flowy fabrics that move with you, combating formalwear anxiety.
* **Footer (Global):** * Vintage classified-ad layout. Multi-column links, newsletter signup input (styled like a telegram request).

### Page 2: The "Inspiration" Page (Lookbook & Mix-and-Match)
**Goal:** Help students navigate identity transfer from student to professional. (Academic Ref: Bovone, 2006).

* **Header:** "The Style Matrix: Find Your Professional Persona"
* **Interactive Mix & Match Module:**
    * *Layout:* Split screen. Left side shows an interactive mannequin/model. Right side shows a scrollable carousel of garments (Tops, Bottoms, Outerwear).
    * *Functionality (AI Prompt):* Build a drag-and-drop or click-to-equip UI where a user selects a single pair of "High-Waisted Trousers" and clicks through 5 different tops (from a basic tee to a structured blazer) to see how easily it transforms the look.
* **Curated Lookbook Grid:**
    * Masonry grid of lifestyle photos featuring models (university age) in various campus/office settings.
    * Hover effect on images reveals the exact items worn and a "Shop the Look" button.

### Page 3: Women’s Collection ("Woman's Variety")
**Goal:** Move beyond the modern "pencil skirt" and reintroduce 20th-century variety as a tool for workplace negotiation. (Academic Ref: Buckland, 2000).

* **Header:** "Beyond the Basics: Structure & Flow"
* **Intro Text:** "In the 20th century, fashion was a tool for women to negotiate their place in the marketplace. We bring back the wide-leg trousers, the structured tea dresses, and the elegant blouses, updated for the modern professional."
* **Product Grid:**
    * 4-column layout. 
    * Product cards feature thin borders (newspaper style). 
    * Images should alternate between flat lays and on-model shots.
    * *Filter Sidebar:* Filter by "Silhouette" (Flowy, Structured, High-Waist) rather than standard sizing/color alone.

### Page 4: Comfort & Fit (Educational Hub)
**Goal:** Explain why historical silhouettes (high waists) solve modern formalwear struggles. (Academic Ref: Miller & Woodward, 2012).

* **Header:** "The Science of the High Waist"
* **Section 1: Physical vs. Social Comfort (Two-column text & image):**
    * *Left:* Diagram showing a modern slim-fit suit (labeled "Constricting, Anxious") vs. a 20th-century high-waisted, slightly looser fit (labeled "Breathable, Empowering").
    * *Right:* Copy explaining how our cuts prioritize "Social Comfort" (feeling appropriate in the gaze of employers) without sacrificing "Physical Comfort."
* **Section 2: The Beginner's Guide to Fit:**
    * Accordion-style FAQ. 
    * "How should a high-waisted trouser sit?"
    * "Why are our blazers not too slim and not too baggy?"

### Page 5: About Us (The Philosophy)
**Goal:** Outline the problem consciousness (student imposter syndrome) as required by the GCIN2023 prompt.

* **Header:** "The Imposter Syndrome Antidote"
* **Body Content (Editorial Layout):**
    * Layout like an open magazine spread. Drop caps (large first letter) for the opening paragraph.
    * *Copy points to include:* The founder's story of struggling to dress for their first internship. The realization that modern formalwear is intimidating. The decision to look back to 20th-century Europe for inspiration. The mission to create *L’Entre-Deux* (The In-Between).
* **Embedded Video Essay Placeholder:**
    * A prominent 16:9 video player block in the center of the page with the caption: "Watch our brand manifesto and academic justification." (Reserved for the 7-10 minute project video).

---

## 3. Interaction & Animation Guidelines
* **Page Transitions:** Fast fade-in, mimicking turning a page.
* **Hover States:** Images should slightly desaturate (turn more black-and-white/sepia) on hover, revealing text overlays.
* **Scroll Effects:** Implement subtle parallax on background textures to give the "newspaper" background depth, but keep text layers completely static for readability.