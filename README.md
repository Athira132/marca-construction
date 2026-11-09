# MARCA CONSTRUCTION — Official Website

A minimal, premium, and refined architectural website built for **MARCA CONSTRUCTION**, based in Moorkkanadu, Pantheerankavu, Calicut, Kerala.

> **Tagline:** *"Building Spaces. Creating Futures."*  
> **Contact:** Shimjith K.K. | Mobile: 9847943104 | Office: 9946943104 | Email: marcaconstruction01@gmail.com | GST: 32LGSPK8306C1Z8

---

## 🎨 Design System & Refined Visual Presentation

- **Architectural Aesthetic:** Minimal, calm, and classy — designed like a high-end architectural studio rather than a crowded template.
- **Solid Navigation:** Opaque `#11161C` navigation bar with compact height, brand logo on the left, navigation on the right, and a clean dropdown for all 6 service categories.
- **Edge-to-Edge Full-Coverage Hero Banners:** Every main page features a full-width photographic hero image with an elegant typography overlay and subtle contrast filter.
- **Persistent Sticky Contact:** Dual floating actions for WhatsApp (`wa.me/919847943104`) and Direct Call (`tel:+919847943104`).
- **Muted Natural Palette:** Charcoal (`#11161C`), muted leaf green (`#6FA82A`), warm brass/gold (`#C4A661`), and ivory/chalk surfaces (`#F8F9F5`).

---

## 📄 Website Structure

1. **Home (`/`)**:
   - Full-cover hero banner: *"Building Spaces. Creating Futures."* with short description *"Thoughtful solutions for homes and businesses."* and buttons *"Explore Services"* and *"Contact Us"*.
   - Compact architectural introduction.
   - Six minimal service division cards.
   - Small gallery preview.
   - Clean, minimal footer.

2. **About (`/about`)**:
   - Full-cover architectural hero banner.
   - Concise practice introduction and verified company profile (Location, Contact Person, GST, phone numbers).

3. **Services (`/services`) & 6 Dedicated Trade Pages**:
   - Navigation dropdown and individual dedicated pages:
     1. **Interior Works** (`/services/interior-works`): Carcass & structural boards (BWP, BWR, WPC, MDF/HDF, Particle Board), surface finishing (Laminates, Acrylic, PU Polish, Veneer, Louvers), false ceilings, countertops, hardware, glass & metal works.
     2. **Plumbing Works** (`/services/plumbing-works`): Residential & commercial plumbing, PWD & departmental works, UPVC/CPVC/PPR water supply, PVC/SWR drainage, HDPE underground piping, installation & fittings.
     3. **Painting Works** (`/services/painting-works`): Interior painting (putty, primers, economy to luxury emulsions), exterior painting (cleaning, crack filling, damp-proofing), wood & metal finishing (epoxy primer, enamel, PU/melamine polish).
     4. **Solar Systems** (`/services/solar-systems`): On-grid, off-grid with battery, hybrid systems, solar water heaters, solar street lights, agricultural solar pumps.
     5. **Custom Furniture & Epoxy Works** (`/services/custom-furniture-epoxy-works`): Handcrafted epoxy dining tables, coffee tables, desks, benches, and clocks.
     6. **Electrical Works** (`/services/electrical-works`): Residential & commercial wiring, industrial factory three-phase distribution, APFC panel installation, MCC/PCC panels, LT/HT underground cabling, chemical/plate earthing, diesel generator backup & AMF panels, PWD/KSEB departmental projects.

4. **Gallery (`/gallery`)**:
   - Photography-focused architectural showcase.
   - Category filtering (All, Modern Villas, Contemporary Tropical, Commercial & Retail, Renovations, Interiors).
   - Full-screen responsive Lightbox modal with previous/next controls, keyboard arrows (`Left`, `Right`, `Esc`), and architectural specifications.
   - Transparent notice identifying current entries as design showcase concepts ready to be swapped with on-site construction photos.

5. **Contact (`/contact`)**:
   - Validated consultation form (Name, Phone with format validation, Email, Project Category, Kerala Plot Location, Message).
   - Instant WhatsApp consultation button with pre-filled enquiry message.
   - Direct links to official YouTube and Facebook pages.
   - Editable placeholder address, phone number, email, and business hours.
   - Embedded Google Maps section.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with custom Marca brand extensions
- **Routing:** React Router v6 (`react-router-dom`)
- **Icons:** Lucide React
- **Hosting / Deploy:** Configured for Vercel with `vercel.json` rewrites for single-page routing

---

## 📂 Project Architecture & How to Update Content

All business content, services, projects, and contact data are cleanly separated into dedicated editable files so that you or your client can update text and images **without touching any JSX or CSS code**:

```
src/
├── data/
│   ├── company.ts     <-- EDIT: Phone number, email, office address, WhatsApp, social links
│   ├── services.ts    <-- EDIT: Service categories, descriptions, images, bullet deliverables
│   └── projects.ts    <-- EDIT: Project titles, categories, images, and specifications
├── components/
│   ├── MarcaLogo.tsx  <-- Official vector SVG & image logo component
│   ├── Navbar.tsx     <-- Navigation header with mobile menu
│   ├── Footer.tsx     <-- Architectural footer
│   ├── Hero.tsx       <-- Split-screen homepage hero
│   ├── Lightbox.tsx   <-- Full-screen project lightbox modal
│   ├── ProjectCard.tsx<-- Architectural project card
│   ├── ServiceCard.tsx<-- Service item card
│   ├── SEO.tsx        <-- Dynamic page title and meta description updater
│   └── WhatsAppFloat.tsx <-- Floating WhatsApp button
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── ServicesPage.tsx
│   ├── GalleryPage.tsx
│   └── ContactPage.tsx
├── public/
│   ├── marca-logo.jpeg            <-- Original logo
│   └── marca-logo-transparent.png <-- Isolated logo
├── vercel.json        <-- Vercel routing rewrite rules
└── package.json
```

---

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite local development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Vercel Deployment Instructions

The repository includes `vercel.json` with rewrite rules:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures all routes (`/`, `/about`, `/services`, `/gallery`, `/contact`) work cleanly upon direct browser refresh or sharing direct URLs.

### Deploying to Vercel:
1. Push your repository to GitHub (see steps below).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`marca-construction`).
4. Framework Preset will automatically detect **Vite**.
5. Build command: `npm run build` (or `tsc && vite build`).
6. Output directory: `dist`.
7. Click **Deploy**.

---

## 🐙 GitHub Setup Instructions

To push this project to your GitHub account:

1. **Initialize Git & Commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete 5-page Marca Construction website"
   ```

2. **Create a New Repository on GitHub:**
   - Go to [github.com/new](https://github.com/new).
   - Name it `marca-construction`.
   - Keep it Public or Private as preferred.
   - Do not check "Add README" or ".gitignore" (these are already configured).

3. **Link and Push:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/marca-construction.git
   git push -u origin main
   ```

