/**
 * MARCA CONSTRUCTION - Official Services Catalog
 * 
 * Source of truth for all 8 dedicated service categories.
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
  {
    id: 'roof-works',
    slug: 'roof-works',
    title: 'Roof Works',
    tagline: 'Architectural false ceilings, precision gypsum engineering & structural roofing solutions',
    intro: 'Specialized ceiling and roofing engineering encompassing gypsum board installations, custom architectural false ceilings, lightweight partitions, metal framework, and structural waterproofing.',
    heroImage: '/images/roof-hero.jpg',
    groups: [
      {
        name: 'Gypsum Ceiling Works',
        description: 'Engineered suspended gypsum ceiling installations providing seamless thermal insulation, acoustic control, and flush surface integration.',
        image: '/images/subcategories/roof-gypsum-ceiling-works.jpg',
        items: [
          'Direct-to-soffit & suspended gypsum ceiling systems',
          'High thermal and acoustic attenuation boards',
          'Tapered edge seamless jointing & skim coat finishes',
        ],
      },
      {
        name: 'Gypsum Board Ceiling Installation',
        description: 'Certified moisture and fire-resistant gypsum board assemblies mounted onto calibrated galvanised suspension grids.',
        image: '/images/subcategories/roof-gypsum-board-installation.jpg',
        items: [
          'Standard, moisture-resistant (MR) & fire-stop boards',
          'Precision laser-levelled suspension alignment',
          'Acoustic grid tile & Armstrong suspended ceiling systems',
        ],
      },
      {
        name: 'False Ceiling Designs',
        description: 'Bespoke designer false ceilings incorporating indirect ambient cove lighting, CNC fretwork patterns, and multi-tier geometric profiles.',
        image: '/images/subcategories/roof-false-ceiling-designs.jpg',
        items: [
          'Multi-level stepped & peripheral cove lighting recesses',
          'Backlit decorative CNC latticework & acoustic profiles',
          'Integrated downlight cutouts & linear diffuser channels',
        ],
      },
      {
        name: 'Gypsum Partitions',
        description: 'Lightweight, rapid-assembly gypsum dividing walls with sound deadening and fire safety ratings for homes and corporate spaces.',
        image: '/images/subcategories/roof-gypsum-partitions.jpg',
        items: [
          'Single & double-skin stud drywall dividing partitions',
          'Mineral wool cavity infill for acoustic separation',
          'Damp-proof perimeter base and door opening framing',
        ],
      },
      {
        name: 'Ceiling Framing and Framework',
        description: 'Heavy-gauge galvanized steel framework, perimeter channels, intermediate studs, and structural truss assemblies.',
        image: '/images/subcategories/roof-ceiling-framing.jpg',
        items: [
          'Galvanized iron (GI) perimeter wall angles & ceiling sections',
          'Heavy-duty adjustable suspension rods & soffit cleats',
          'Engineered timber roof trusses & steel structural framework',
        ],
      },
      {
        name: 'Ceiling Finishing and Related Gypsum Works',
        description: 'Artisanal Plaster of Paris (POP) moldings, decorative cornices, perimeter pelmets, and ultra-smooth skim coat finishing.',
        image: '/images/subcategories/roof-ceiling-finishing.jpg',
        items: [
          'Plaster of Paris (POP) decorative cornices & ornamental beadings',
          'Curtain pelmets and concealed blind track recesses',
          'Zero-defect surface preparation & primer application',
        ],
      },
      {
        name: 'Roofing Structure and Waterproofing',
        description: 'Comprehensive roof architecture, truss installation, clay tile laying, and multi-layer weatherproofing membranes.',
        image: '/images/subcategories/roof-structure-waterproofing.jpg',
        items: [
          'Pitched roof truss fabrication & ceramic/terracotta tile fixing',
          'Seamless elastomeric roof slab waterproofing membranes',
          'Rainwater gutter channels, flashing & downpipe installation',
        ],
      },
    ],
  },
  {
    id: 'carpenter-works',
    slug: 'carpenter-works',
    title: 'Carpenter Works',
    tagline: 'Master carpentry, bespoke solid timber joinery & architectural woodwork',
    intro: 'Craftsmanship-driven carpentry services delivering custom wooden furniture, built-in wardrobes, modular kitchen cabinetry, solid timber doors, architectural partitions, and artisan woodwork restoration.',
    heroImage: '/images/carpenter-hero.jpg',
    groups: [
      {
        name: 'Custom Wooden Furniture',
        description: 'Bespoke hardwood dining tables, study desks, credenzas, and statement furniture tailored to architectural floor plans.',
        image: '/images/subcategories/carpenter-custom-furniture.jpg',
        items: [
          'Solid Teak, Rosewood, Mahogany & Oak furniture creation',
          'Custom dining tables, coffee tables & executive desks',
          'Mortise-and-tenon structural craftsmanship',
        ],
      },
      {
        name: 'Wardrobes and Cupboards',
        description: 'Floor-to-ceiling built-in wardrobes, walk-in closets, and bedroom storage configured with optimized interior hardware.',
        image: '/images/subcategories/carpenter-wardrobes-cupboards.jpg',
        items: [
          'Built-in modular & solid timber wardrobe suites',
          'Sliding & hinged shutters with soft-close mechanisms',
          'Dedicated jewellery drawers, tie racks & internal LED strips',
        ],
      },
      {
        name: 'Kitchen Cabinets and Wooden Storage',
        description: 'Precision wooden cabinetry, overhead cabinets, pantry units, and pull-out storage built for everyday moisture and heat resilience.',
        image: '/images/subcategories/carpenter-kitchen-cabinets.jpg',
        items: [
          'Modular base & wall-hung timber kitchen cabinets',
          'Under-cabinet recessed profile lighting channels',
          'Moisture-treated timber carcass & drawer organizers',
        ],
      },
      {
        name: 'Wooden Doors and Door Frames',
        description: 'Solid wood entry doors, internal flush doors, decorative architraves, and precision-fitted hardwood door jambs.',
        image: '/images/subcategories/carpenter-doors-frames.jpg',
        items: [
          'Heavy solid teak main doors & designer carve-outs',
          'Calibrated hardwood door frames (Chowkhats) & architraves',
          'Mortise locks, concealed hinges & drop-seal installation',
        ],
      },
      {
        name: 'Wooden Partitions',
        description: 'Architectural timber slatted dividers, privacy screens, and room dividers that balance spatial separation with light flow.',
        image: '/images/subcategories/carpenter-wooden-partitions.jpg',
        items: [
          'Vertical timber slat screens & fluted room dividers',
          'Open-shelf partition cabinets with dual-sided display',
          'Concealed floor-to-ceiling mounting & acoustic integration',
        ],
      },
      {
        name: 'Shelves and Storage Units',
        description: 'Custom wall-mounted floating shelves, library bookcases, living room entertainment consoles, and bespoke display units.',
        image: '/images/subcategories/carpenter-shelves-storage.jpg',
        items: [
          'Heavy-duty floating solid wood wall shelves',
          'Full-wall library shelving & study room organizers',
          'Custom media consoles with concealed cable raceways',
        ],
      },
      {
        name: 'Wooden Paneling and Decorative Woodwork',
        description: 'Wall cladding, fluted acoustic paneling, ceiling rafters, wooden cornices, and handcrafted geometric wood features.',
        image: '/images/subcategories/carpenter-wooden-paneling.jpg',
        items: [
          'Fluted timber accent walls & veneer paneling',
          'Exposed decorative wooden ceiling beams & rafters',
          'Geometric wall paneling & architectural moldings',
        ],
      },
      {
        name: 'Repair and Finishing of Wooden Works',
        description: 'Restoration of aged woodwork, joint reinforcement, realignment of doors and cabinetry, and professional wood re-finishing.',
        image: '/images/subcategories/carpenter-repair-finishing.jpg',
        items: [
          'Structural joinery repairs, hinge realignment & leveling',
          'Surface sanding, stain correction & scratch rectification',
          'Natural oil, wax, lacquer & PU protective re-coating',
        ],
      },
    ],
  },
];
