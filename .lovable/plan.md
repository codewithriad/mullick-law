
# Mullick Law Firm — Complete Website Redesign

## Design System
- **Colors**: Navy (#1A3A52) primary, Gold (#D4AF37) accent, Charcoal/Light Gray neutrals
- **Typography**: Serif headings (Crimson Text) for authority, Inter for body text
- **Style**: Minimalist, spacious layouts with generous whitespace, professional and trust-building

## Pages to Build (All at Once)

### 1. Homepage — Primary Conversion Page
- **Hero**: Full-width with dark overlay, H1 targeting "Bankruptcy & Litigation Attorney | Miami, FL", two CTAs (Schedule Consultation + Click-to-Call)
- **Trust Pillars**: 4-card grid (20+ Years Experience, Direct Attorney Access, Results-Driven, Personalized Service)
- **Practice Areas Preview**: 2-3 featured cards for Bankruptcy, Litigation with "Learn More" links
- **Testimonials**: 3-4 client testimonial cards with star ratings and quotes
- **Case Results**: 3-4 anonymized success summaries
- **Bottom CTA Banner**: Gold/Navy full-width "Ready to Discuss Your Legal Options?" section

### 2. Practice Areas Overview (/practice-areas)
- Grid of practice area cards with icons, descriptions, and detail links
- Desktop sidebar with quick nav and sticky consultation CTA

### 3. Practice Area Detail Pages (/practice-areas/bankruptcy, /practice-areas/litigation)
- Overview content with SEO-optimized copy
- "What We Handle" bulleted services
- Step-by-step process explanation
- Accordion FAQ section (5-8 questions per area)
- Related testimonial and CTA

### 4. About Page (/about)
- Firm overview and values (Dedication, Experience, Integrity)
- Attorney Sundeep K. Mullick profile: placeholder headshot, bio, credentials, philosophy
- Office location with embedded Google Map
- Contact details (phone, email, address)

### 5. Contact Page (/contact)
- Three contact method cards (Phone, Email, Office)
- **Contact Form**: Name, Phone, Email, Practice Area dropdown, Message, consent checkbox
  - Client-side validation with Zod, real-time error messages
  - Submission via **Web3Forms** (frontend-only, no backend needed)
  - Success confirmation toast/modal
- Google Maps embed
- Mini FAQ section (5-7 questions)

### 6. FAQ Page (/faq)
- Accordion layout organized by category (General, Bankruptcy, Litigation)
- Optional keyword search/filter
- Bottom CTA linking to Contact page

### 7. Privacy Policy & Terms of Service (/privacy, /terms)
- Standard legal content pages with proper formatting

## Global Components

### Header
- Fixed/sticky navigation with logo, menu items, "Free Consultation" CTA button
- Mobile hamburger menu with smooth toggle
- Active page indicator and breadcrumbs on inner pages

### Footer
- 4-column layout: Firm info + social links, Quick Links, Practice Areas, Contact + office hours
- Bar association disclaimer and copyright
- Responsive stacking on mobile

### Sticky CTA
- Floating "Schedule Consultation" button appears after scrolling past hero
- Positioned on right (desktop) or bottom (mobile)

## Interaction & UX
- Smooth scroll for anchor links
- Card hover effects (lift + gold border highlight)
- Click-to-call on all phone numbers (`tel:` links)
- Skeleton loaders on form submission
- Toast notifications for success/error states
- Keyboard-navigable with visible focus states

## SEO
- Dynamic page titles and meta descriptions per page
- JSON-LD structured data: LegalService, LocalBusiness, Attorney, FAQPage, BreadcrumbList
- Open Graph and Twitter Card meta tags
- Semantic HTML5 structure throughout

## Responsive Design
- Mobile-first approach with breakpoints at 320px, 768px, 1024px, 1440px
- Touch targets minimum 44x44px on mobile
- Container max-width 1200px on large screens

## Content & Assets
- Placeholder images for attorney headshot and hero background (to be replaced later)
- All copy written in professional, empathetic tone targeting Miami bankruptcy/litigation seekers
- Bar compliance disclaimers included where needed
