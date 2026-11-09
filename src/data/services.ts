/**
 * MARCA CONSTRUCTION - Official Services Catalog
 * 
 * Source of truth for all 6 dedicated service categories.
 * Display category names and subcategories only (no numerical or alphabetical prefixes).
 */

export interface ServiceSubGroup {
  name: string;
  items: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  heroImage: string;
  groups: ServiceSubGroup[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'interior-works',
    slug: 'interior-works',
    title: 'Interior Works',
    tagline: 'Precision structural joinery, surfaces & architectural interior execution',
    intro: 'Comprehensive interior solutions encompassing certified structural boards, premium surface finishing, false ceilings, countertops, hardware, and bespoke architectural detailing.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
    groups: [
      {
        name: 'Carcass & Structural Boards',
        items: [
          'BWP / Marine Plywood (IS 710)',
          'BWR / Commercial Grade Plywood (IS 303)',
          'WPC / PVC Form Board',
          'MDF / HDF',
          'Particle Board',
        ],
      },
      {
        name: 'Surface Finishing',
        items: [
          'Laminates / Mica',
          'Acrylic Sheets',
          'PU Polish / Doco',
          'Wood Veneer',
          'Louvers / Charcoal / Fluted Panels',
        ],
      },
      {
        name: 'False Ceiling & Partitions',
        items: [
          'Gypsum Board',
          'Grid Ceiling / Armstrong',
          'Fibre Cement Board',
          'POP',
        ],
      },
      {
        name: 'Kitchen & Vanity Countertops',
        items: [
          'Granite',
          'Quartz',
          'Nano White',
          'Solid Surface / Corian / Acrylic',
        ],
      },
      {
        name: 'Hardware & Accessories',
        items: [
          'Hinges',
          'Drawer Channels',
          'Lift-up Systems',
        ],
      },
      {
        name: 'Glass & Metal Works',
        items: [
          'Toughened Glass',
          'Metal Inlay Strips',
        ],
      },
    ],
  },
  {
    id: 'plumbing-works',
    slug: 'plumbing-works',
    title: 'Plumbing Works',
    tagline: 'Reliable water supply, wastewater drainage & departmental plumbing',
    intro: 'Complete sanitary engineering, underground trenching, and certified piping systems for residential houses, commercial buildings, and government PWD projects.',
    heroImage: '/images/plumbing-hero.jpg',
    groups: [
      {
        name: 'Project Sectors',
        items: [
          'Residential, flats, buildings and commercial plumbing',
          'Government / PWD and departmental works',
        ],
      },
      {
        name: 'Water Supply Piping',
        items: [
          'UPVC piping systems',
          'CPVC high-temperature piping',
          'PPR hot & cold water piping',
        ],
      },
      {
        name: 'Drainage & Wastewater Systems',
        items: [
          'PVC / SWR pipes for soil, waste and rainwater drainage',
        ],
      },
      {
        name: 'Underground & Heavy Piping',
        items: [
          'HDPE underground piping & trenching',
        ],
      },
      {
        name: 'Installation & Sanitary Fittings',
        items: [
          'Precision plumbing installation, sanitaryware & fixture fittings',
        ],
      },
    ],
  },
  {
    id: 'painting-works',
    slug: 'painting-works',
    title: 'Painting Works',
    tagline: 'Architectural interior, exterior damp-proofing & fine wood finishing',
    intro: 'End-to-end surface preparation, moisture protection, and high-performance paint and polish applications engineered for Kerala’s climate.',
    heroImage: '/images/painting-hero.jpg',
    groups: [
      {
        name: 'Interior Painting',
        items: [
          'Surface preparation',
          'Water primer',
          'Wall putty',
          'Interior primer',
          'Tractor / Economy Emulsion',
          'Premium Emulsion',
          'Royale / Luxury / Sheen Emulsion',
        ],
      },
      {
        name: 'Exterior Painting',
        items: [
          'Wall cleaning',
          'Crack filling',
          'Damp-proof / Sealer coat',
          'Exterior primer',
          'Exterior emulsion',
        ],
      },
      {
        name: 'Wood & Metal Finishing',
        items: [
          'Metal: Epoxy primer, enamel paint, gloss or satin finish',
          'Wood: Wood filler, sanding, sealer, PU / Melamine polish, wood primer and enamel painting',
        ],
      },
    ],
  },
  {
    id: 'solar-systems',
    slug: 'solar-systems',
    title: 'Solar Systems',
    tagline: 'Clean solar power generation, thermal heating & agricultural pumping',
    intro: 'Sustainable solar energy installations designed for energy independence, reduced utility costs, and reliable backup across Kerala.',
    heroImage: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2000&q=85',
    groups: [
      {
        name: 'Power Generation Systems',
        items: [
          'On-grid / Grid-tied systems',
          'Off-grid systems with battery storage',
          'Hybrid solar power systems',
        ],
      },
      {
        name: 'Solar Utilities & Infrastructure',
        items: [
          'Solar water heaters',
          'Solar street lights',
          'Solar water pumps for agriculture',
        ],
      },
    ],
  },
  {
    id: 'custom-furniture-epoxy-works',
    slug: 'custom-furniture-epoxy-works',
    title: 'Custom Furniture & Epoxy Works',
    tagline: 'Handcrafted live-edge timber, artistic epoxy resins & bespoke furniture',
    intro: 'Artisan woodworking and contemporary epoxy resin craft, delivering bespoke focal furniture pieces for contemporary homes and modern commercial spaces.',
    heroImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=2000&q=85',
    groups: [
      {
        name: 'Custom Furniture & Epoxy Works',
        items: [
          'Epoxy dining tables',
          'Coffee tables',
          'Desks and benches',
          'Clocks',
        ],
      },
    ],
  },
  {
    id: 'electrical-works',
    slug: 'electrical-works',
    title: 'Electrical Works',
    tagline: 'Residential, industrial power distribution, cabling & PWD departmental projects',
    intro: 'Licensed electrical engineering solutions compliant with Kerala Electrical Inspectorate standards, spanning residential wiring, industrial control panels, HT/LT cabling, and backup generators.',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=85',
    groups: [
      {
        name: 'Residential & Commercial',
        items: [
          'Complete wiring for houses, villas, flats and apartments',
          'Modular switchboards and lighting design',
          'Distribution boards with MCB and RCCB protection',
        ],
      },
      {
        name: 'Industrial & Factory Electrical Solutions',
        items: [
          'Three-phase power distribution',
          'APFC panel installation',
          'MCC / PCC motor control panels',
          'Electrical machinery connections',
        ],
      },
      {
        name: 'Cabling & Earthing',
        items: [
          'LT / HT underground cable laying, trenching and jointing',
          'Cable tray routing, glanding and termination',
          'Chemical / copper plate and pipe earthing',
          'Lightning protection',
        ],
      },
      {
        name: 'Generator & Power Backup',
        items: [
          'Diesel generator supply, foundation and installation',
          'AMF and changeover panels',
          'Power backup synchronisation for commercial requirements',
        ],
      },
      {
        name: 'Government & PWD Projects',
        items: [
          'Departmental tender works including PWD, KSEB and Local Self Government departments, schools and hospitals',
          'Execution following electrical inspectorate standards',
          'Sketch preparation and testing',
        ],
      },
    ],
  },
];
