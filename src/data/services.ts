/**
 * MARCA CONSTRUCTION - Official Services Catalog
 * 
 * Source of truth for all 6 dedicated service categories.
 * Display category names and subcategories only (no numerical or alphabetical prefixes).
 * Each subcategory includes verified object-focused photography with zero human figures or watermarks.
 */

export interface ServiceSubGroup {
  name: string;
  description: string;
  image: string;
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
        description: 'Certified moisture-resistant structural cores and marine plywood engineered for enduring framework integrity.',
        image: '/images/subcategories/interior-carcass-boards.jpg',
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
        description: 'Refined tactile textures ranging from natural wood veneers and matte laminates to high-gloss acrylic panels.',
        image: '/images/subcategories/interior-surface-finishing.jpg',
        items: [
          'Laminates / Mica',
          'Acrylic Sheets',
          'PU Polish / Deco',
          'Wood Veneer',
          'Louvers / Charcoal / Fluted Panels',
        ],
      },
      {
        name: 'False Ceiling & Partitions',
        description: 'Seamless gypsum false ceilings, acoustic grid panels, and thermal partition systems with integrated lighting.',
        image: '/images/subcategories/interior-false-ceiling.jpg',
        items: [
          'Gypsum Board',
          'Grid Ceiling / Armstrong',
          'Fibre Cement Board',
          'POP (Plaster of Paris)',
        ],
      },
      {
        name: 'Kitchen & Vanity Countertops',
        description: 'Hard-wearing natural granite, engineered quartz, and non-porous solid surfaces cut to custom edge profiles.',
        image: '/images/subcategories/interior-countertops.jpg',
        items: [
          'Granite',
          'Quartz',
          'Nano White',
          'Solid Surface / Corian / Acrylic',
        ],
      },
      {
        name: 'Hardware & Accessories',
        description: 'Precision architectural hardware including soft-close hinges, heavy-duty drawer channels, and ergonomic lift-up systems.',
        image: '/images/subcategories/interior-hardware.jpg',
        items: [
          'Concealed Soft-Close Hinges',
          'Heavy-Duty Drawer Channels',
          'Hydraulic Lift-up Systems',
        ],
      },
      {
        name: 'Glass & Metal Works',
        description: 'Toughened architectural glazing, slim profile partitions, and sleek brass or metal inlay accents.',
        image: '/images/subcategories/interior-glass-metal.jpg',
        items: [
          'Toughened Safety Glass',
          'Metal Inlay Strips & Profiles',
        ],
      },
    ],
  },
  {
    id: 'plumbing-works',
    slug: 'plumbing-works',
    title: 'Plumbing Works',
    tagline: 'Reliable water supply, wastewater drainage & departmental plumbing',
    intro: 'Complete sanitary engineering, certified piping installations, and departmental plumbing for residential homes, commercial towers, and PWD infrastructure.',
    heroImage: '/images/plumbing-hero.jpg',
    groups: [
      {
        name: 'Water Supply Piping',
        description: 'Pressure-rated potable water conveyance utilizing chemical-resistant UPVC, CPVC, and fusion-welded PPR systems.',
        image: '/images/subcategories/plumbing-water-supply.jpg',
        items: [
          'UPVC piping systems',
          'CPVC high-temperature piping',
          'PPR hot & cold fusion piping',
        ],
      },
      {
        name: 'Drainage & Wastewater Systems',
        description: 'Acoustic and gravity-flow sanitary piping engineered for leak-proof discharge of soil, waste, and rainwater.',
        image: '/images/subcategories/plumbing-drainage.jpg',
        items: [
          'PVC / SWR soil & waste piping',
          'Rainwater harvesting drainage networks',
          'Multi-floor stack ventilation',
        ],
      },
      {
        name: 'Underground & Heavy Piping',
        description: 'High-density polyethylene underground mains and trenching engineered to withstand ground movement and high external loads.',
        image: '/images/subcategories/plumbing-underground.jpg',
        items: [
          'HDPE underground mains & distribution',
          'Engineered pipeline trenching',
          'Heavy-duty chamber & manhole connections',
        ],
      },
      {
        name: 'Installation & Sanitary Fittings',
        description: 'Precision fixture installation, concealed cisterns, diverters, and premium brassware fittings.',
        image: '/images/subcategories/plumbing-fittings.jpg',
        items: [
          'Precision sanitaryware fitting',
          'Concealed valves, diverters & mixers',
          'Pressure testing & commissioning',
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
        description: 'Smooth multi-coat wall preparation and wash-resistant premium emulsions with satin and luxury sheen finishes.',
        image: '/images/subcategories/painting-interior.jpg',
        items: [
          'Surface preparation & water primer',
          'Double-coat acrylic wall putty',
          'Interior primer application',
          'Tractor / Economy Emulsion',
          'Premium & Luxury Sheen Emulsions',
        ],
      },
      {
        name: 'Exterior Painting',
        description: 'Weather-resistant exterior coatings engineered to combat tropical rains, algae growth, and UV degradation.',
        image: '/images/subcategories/painting-exterior.jpg',
        items: [
          'Pressure cleaning & crack filling',
          'Damp-proof sealer membrane coat',
          'Exterior alkali-resistant primer',
          'High-durability exterior weather emulsion',
        ],
      },
      {
        name: 'Wood Finish & Polishing',
        description: 'Fine hand-sanded timber preparation with grain enhancement, polyurethane polish, and Italian PU coatings.',
        image: '/images/subcategories/painting-wood-finish.jpg',
        items: [
          'Timber grain filling & sanding',
          'Polyurethane (PU) & Melamine polish',
          'Natural wood stains & sealers',
          'Wood primer & gloss enamel finishes',
        ],
      },
      {
        name: 'Metal Surface Finishing',
        description: 'Anti-corrosion protective coatings for architectural steel, gates, handrails, and structural metalwork.',
        image: '/images/subcategories/painting-metal-finish.jpg',
        items: [
          'Rust-inhibiting epoxy primer',
          'High-gloss & satin synthetic enamels',
          'Architectural metal spray applications',
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
        name: 'On-Grid Solar Systems',
        description: 'High-efficiency grid-tied photovoltaic arrays with net metering to export surplus electricity to the utility grid.',
        image: '/images/subcategories/solar-on-grid.jpg',
        items: [
          'High-efficiency monocrystalline PV panels',
          'Grid-tied string & micro-inverters',
          'Bi-directional net metering integration',
        ],
      },
      {
        name: 'Off-Grid Solar Systems',
        description: 'Self-sustaining solar generation paired with dedicated lithium or tubular battery banks for complete power autonomy.',
        image: '/images/subcategories/solar-off-grid.jpg',
        items: [
          'Rooftop solar PV arrays',
          'Lithium-ion & tubular energy storage',
          'Off-grid charge controllers & inverters',
        ],
      },
      {
        name: 'Hybrid Solar Systems',
        description: 'Intelligent dual-mode systems combining grid export benefits with instant uninterrupted battery backup during outages.',
        image: '/images/subcategories/solar-hybrid.jpg',
        items: [
          'Intelligent hybrid inverters',
          'Automatic grid-to-battery transfer',
          'Smart energy consumption monitoring',
        ],
      },
      {
        name: 'Solar Water Heaters',
        description: 'Evacuated tube collector (ETC) and flat plate collector (FPC) thermal heating systems for uninterrupted hot water.',
        image: '/images/subcategories/solar-water-heaters.jpg',
        items: [
          'High-absorption evacuated vacuum tubes',
          'Insulated stainless steel storage tanks',
          'Pressurized & non-pressurized options',
        ],
      },
      {
        name: 'Solar Street Lighting',
        description: 'Stand-alone all-in-one solar LED pole lights designed for driveways, campuses, public roads, and housing communities.',
        image: '/images/subcategories/solar-street-lights.jpg',
        items: [
          'Integrated monocrystalline solar panels',
          'High-lumen energy-saving LED luminaires',
          'Dusk-to-dawn automated sensor controls',
        ],
      },
      {
        name: 'Solar Agricultural Pumps',
        description: 'Solar-powered submersible and surface pumping solutions engineered for farmland irrigation and rural estates.',
        image: '/images/subcategories/solar-agricultural-pumps.jpg',
        items: [
          'Submersible & monoblock DC/AC solar pumps',
          'Variable frequency pump controllers (VFD)',
          'Borewell & open-well water extraction',
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
        name: 'Epoxy Dining Tables',
        description: 'Statement river dining tables combining natural live-edge timber slabs with crystal-clear or tinted epoxy resin.',
        image: '/images/subcategories/furniture-epoxy-dining.jpg',
        items: [
          'Hand-selected live-edge hardwood slabs',
          'Ultra-clear bubble-free casting resin',
          'Custom steel & wooden base fabrication',
        ],
      },
      {
        name: 'Coffee Tables',
        description: 'Sculptural living room centerpieces balancing warm organic grain with modern metallic and resin highlights.',
        image: '/images/subcategories/furniture-coffee-tables.jpg',
        items: [
          'Solid teak, acacia & mahogany timbers',
          'Matte, satin, or mirror-gloss finishes',
          'Integrated storage drawers & shelves',
        ],
      },
      {
        name: 'Desks & Benches',
        description: 'Ergonomic study desks, executive office workstations, and solid timber dining benches engineered for durability.',
        image: '/images/subcategories/furniture-desks-benches.jpg',
        items: [
          'Executive study & workstation surfaces',
          'Heavy-duty powder-coated steel legs',
          'Cable management & customized dimensions',
        ],
      },
      {
        name: 'Epoxy Wall Clocks',
        description: 'Handcrafted architectural wall clocks merging cross-cut timber rounds, pigmented resin art, and silent mechanisms.',
        image: '/images/subcategories/furniture-epoxy-clocks.jpg',
        items: [
          'Cross-cut burl & timber rounds',
          'Artistic resin pigment infills',
          'High-torque silent quartz movements',
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
        name: 'Residential & Commercial Wiring',
        description: 'Concealed conduit wiring, certified modular switches, and protected distribution boards for residences and commercial spaces.',
        image: '/images/subcategories/electrical-residential.jpg',
        items: [
          'Complete concealed conduit wiring for homes & flats',
          'Modular switchboards & architectural lighting design',
          'Distribution boards with MCB and RCCB shock protection',
        ],
      },
      {
        name: 'Industrial & Factory Power Solutions',
        description: 'Heavy three-phase switchgear, automatic power factor correction (APFC), and motor control panels for manufacturing plants.',
        image: '/images/subcategories/electrical-industrial.jpg',
        items: [
          'Three-phase high-current power distribution',
          'APFC panel fabrication & installation',
          'MCC / PCC motor control centers',
          'Industrial machinery power connections',
        ],
      },
      {
        name: 'Cabling & Earthing Systems',
        description: 'Engineered underground LT/HT cabling, cable trays, low-resistance chemical earthing, and lightning arrestors.',
        image: '/images/subcategories/electrical-cabling-earthing.jpg',
        items: [
          'LT / HT underground trenching, pulling & jointing',
          'Perforated & ladder cable tray routing',
          'Chemical & copper plate/pipe earthing',
          'Advanced lightning surge protection',
        ],
      },
      {
        name: 'Generator & Standby Power',
        description: 'Heavy-duty diesel generator installations, acoustic enclosures, AMF changeover panels, and automatic synchronisation.',
        image: '/images/subcategories/electrical-generator-backup.jpg',
        items: [
          'Silent diesel generator supply & foundation',
          'Auto Mains Failure (AMF) changeover panels',
          'Commercial & healthcare backup synchronisation',
        ],
      },
      {
        name: 'Government & PWD Projects',
        description: 'Institutional electrical execution strictly conforming to Kerala Electrical Inspectorate, PWD, and KSEB regulations.',
        image: '/images/subcategories/electrical-government-pwd.jpg',
        items: [
          'Departmental tender works (PWD, KSEB & LSGD)',
          'Schools, healthcare facilities & municipal projects',
          'Electrical inspectorate approvals & schematic drawings',
          'Mandatory insulation & earth resistance testing',
        ],
      },
    ],
  },
];
