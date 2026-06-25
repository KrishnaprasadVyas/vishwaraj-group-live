# Vishwaraj Polychem Website - Production Release (v1.0.0)

This repository contains the source code for the official website of **Vishwaraj Polychem Private Limited** (under Vishwaraj Group), built with modern React patterns and the Next.js App Router.

---

## 1. Project Overview

### Tech Stack
* **Framework:** Next.js 16 (App Router + Turbopack)
* **Core Library:** React 19
* **Styling:** TailwindCSS 4 + Vanilla CSS transitions & custom GPU-accelerated keyframe animations
* **Animations:** Framer Motion (respects user motion preferences dynamically)
* **Icons:** Lucide React
* **Email Client:** Resend Email Delivery SDK

### Folder Structure
```text
vishwaraj-group/
├── app/                  # Next.js App Router pages, layouts, and API routes
│   ├── api/              # Serverless API endpoints (e.g., contact form handler)
│   ├── about/            # About Us page
│   ├── clients/          # Client Showcase page
│   ├── contact/          # Contact Page (Maps, Addresses, and Contact Form)
│   ├── industries/       # Target Industries details
│   ├── products/         # Products catalog & dynamic product detail routes ([slug])
│   ├── layout.tsx        # Global provider wrap and HTML document structure
│   └── page.tsx          # Homepage view (Cinematic Slider, Product Explorer)
├── components/           # Reusable React components
│   ├── email-link.tsx    # Custom interactive email link wrapper
│   ├── email-modal-provider.tsx # Focus-trapped Popover Modal Context
│   ├── floating-actions.tsx     # Floating WhatsApp & Contact buttons
│   ├── hero-slideshow.tsx       # Autoplay Cinematic Slideshow with Ken Burns transitions
│   └── site-header.tsx   # Sticky Header navigation with logo scroll scale triggers
├── public/               # Static assets (images, product pictures, logos, sitemap)
├── lib/                  # Site JSON files configuration and utility loaders
├── package.json          # Dependency list and CLI scripts configuration
└── tsconfig.json         # TypeScript compiler configurations
```

### Key Features
* **Premium Cinematic Slideshow:** Autoplay Ken Burns background zoom slider with consistent messaging overlay and hover-to-pause controls.
* **Email Interaction Popover Modal:** Glassmorphism overlay panel with action buttons for Gmail Compose, Outlook Web Compose, and animated copy-to-clipboard state feedback.
* **Interactive Contact Page:** Integrates correct 2D Google Map embeds, Plant MIDC addresses, and functional Resend-backed contact forms.
* **Floating Actions:** Pulse animations with hover raises for easy WhatsApp click-to-chat API redirects and page contact triggers.

---

## 2. Environment Variables

The project requires the following environment variables for server-side contact submissions. Do **not** prefix these with `NEXT_PUBLIC_` to keep them secure:

* `RESEND_API_KEY`: API authorization key obtained from your Resend Dashboard (`resend.com`).
* `RESEND_FROM_EMAIL`: The verified sending email address or domain setup (e.g., `noreply@vishwarajpolychem.com`).
* `CONTACT_EMAIL`: The default target inbox recipient for customer inquiries.

Create a `.env.local` file in your root folder for local testing:
```env
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=noreply@vishwarajpolychem.com
CONTACT_EMAIL=info@vishwarajgroup.com
```

---

## 3. Production Deployment Guide

### Deployment Steps (E.g. Vercel, Netlify, VPS)

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Build the Application:**
   Next.js will run TypeScript verification, ESLint, and bundle optimization.
   ```bash
   npm run build
   ```
3. **Start the Production Server:**
   ```bash
   npm run start
   ```

### Domain & SSL Setup
* **SSL Requirement:** HTTPS is mandatory for secure clipboard API operations and contact form validation endpoints.
* Ensure custom domain DNS registers `CNAME` records pointing to your server hosting providers, with `SSL` active.

---

## 4. Handover Notes & Maintenance

* **Email Delivery:** Submissions from the website's Contact page are relayed through **Resend** to `CONTACT_EMAIL`. Ensure the domain `@vishwarajpolychem.com` or `@vishwarajgroup.com` is verified in your Resend account settings.
* **Editing Content:** Corporate details, office addresses, and catalog mappings can be altered directly inside local JSON configuration structures:
  * `lib/content.ts` (Dynamic mappings)
  * JSON files in root (e.g., `products.json`, `industries.json`, `contact.json`)
* **Future Updates:** Run `npm run lint` and `npm run build` locally to verify changes before staging pushes.
