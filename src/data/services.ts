/**
 * MARCA CONSTRUCTION - Services Catalog
 * 
 * EDIT THIS FILE to add, modify, or remove service offerings.
 * These are structured as clear, editable placeholder service categories
 * tailored for residential and small business construction in Kerala.
 */

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Turnkey & Design';
  description: string;
  detailedDescription: string;
  image: string;
  deliverables: string[];
  idealFor: string;
  featured: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'residential-villas',
    title: 'Custom Residential Villas & Homes',
    tagline: 'Modern tropical architecture tailored to Kerala living',
    category: 'Residential',
    description: 'Complete end-to-end design and construction of contemporary Kerala houses, luxury villas, and family homes with climate-responsive design.',
    detailedDescription: 'Our residential construction combines modern aesthetics with Kerala\'s unique tropical weather needs. We prioritize natural airflow, high thermal comfort, rain-protected overhangs, and elegant indoor-outdoor living spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Comprehensive architectural & structural planning',
      'Foundation & RCC framed structure execution',
      'Monsoon-resistant weatherproofing & waterproofing',
      'Premium electrical, plumbing & sanitary installations',
      'Flooring, painting, and external facade finishing',
    ],
    idealFor: 'Homeowners looking for modern, bespoke living spaces in Kerala',
    featured: true,
  },
  {
    id: 'commercial-spaces',
    title: 'Small Business & Commercial Construction',
    tagline: 'Functional, aesthetic spaces built for business growth',
    category: 'Commercial',
    description: 'Turnkey construction of boutique commercial properties, offices, retail outlets, clinics, and hospitality spaces across Kerala.',
    detailedDescription: 'We build commercial environments that reflect brand professionalism while maximizing usable floor space, customer flow, and durable low-maintenance operations.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Commercial zoning compliance & structural drafting',
      'High-traffic durable materials & facade branding',
      'Energy-efficient lighting & HVAC ducting integration',
      'Fast-track scheduling to minimize downtime',
      'Statutory panchayat/municipal clearance support',
    ],
    idealFor: 'Retailers, medical professionals, startups, and commercial landlords',
    featured: true,
  },
  {
    id: 'renovation-remodelling',
    title: 'Structural Renovation & Remodelling',
    tagline: 'Transforming existing buildings into contemporary spaces',
    category: 'Renovation',
    description: 'Upgrading older properties, ancestral homes, and commercial units with modern structural reinforcement and refreshed contemporary aesthetics.',
    detailedDescription: 'Breathe new life into aging Kerala properties. We evaluate foundational integrity, open up partitioned layouts for modern light and ventilation, and upgrade electrical and plumbing systems without sacrificing character.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Structural audit and load-bearing assessment',
      'Floor additions and room extensions',
      'Roof conversions and waterproofing replacement',
      'Modern open-plan kitchen and bathroom upgrades',
      'Exterior elevation modernizations and facade re-cladding',
    ],
    idealFor: 'Property owners wishing to modernize existing structures without full demolition',
    featured: true,
  },
  {
    id: 'interior-architecture',
    title: 'Turnkey Interior Architecture & Finishing',
    tagline: 'Refined craftsmanship, customized woodwork & spatial balance',
    category: 'Turnkey & Design',
    description: 'Custom interior execution including bespoke cabinetry, false ceilings, architectural lighting, and premium Kerala teak/hardwood finishing.',
    detailedDescription: 'A seamless transition from exterior structure to interior warmth. We craft thoughtful interiors with curated materials, ergonomic storage, and warm ambient illumination designed for everyday serenity.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Custom modular kitchens & pantry storage',
      'Wardrobes, TV consoles & architectural wood paneling',
      'Layered mood lighting & acoustic false ceilings',
      'Granite, marble, and vitrified tile installation',
      'Complete painting & wall texture treatments',
    ],
    idealFor: 'Homeowners and business owners desiring a polished, ready-to-move interior',
    featured: true,
  },
  {
    id: 'landscape-outdoor',
    title: 'Landscape & Outdoor Living Spaces',
    tagline: 'Connecting indoor comfort with lush Kerala nature',
    category: 'Turnkey & Design',
    description: 'Design and construction of tropical courtyards, veranda patios, driveways, boundary compound walls, and rainwater harvesting.',
    detailedDescription: 'Kerala living thrives on outdoor integration. We craft serene courtyard water bodies, interlock/cobblestone driveways, exterior boundary perimeter treatments, and sustainable rainwater recharge facilities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Internal nadumuttam (central courtyard) landscape design',
      'Compound walls, designer gates & security illumination',
      'Permeable driveway paving & stormwater drainage',
      'Lush tropical garden layout & outdoor seating decks',
      'Rainwater harvesting storage tank execution',
    ],
    idealFor: 'Clients wanting harmonic landscaping and durable outdoor perimeters',
    featured: false,
  },
  {
    id: 'planning-approvals',
    title: 'Architectural Planning & Engineering Approvals',
    tagline: 'From blueprint conception to local authority sanctioning',
    category: 'Turnkey & Design',
    description: 'Detailed 2D/3D architectural floor plans, 3D photorealistic renderings, structural engineering vetting, and municipal permit processing.',
    detailedDescription: 'Every great building begins with sound engineering. We assist clients with detailed floor plans, structural stability certificates, 3D exterior elevations, and documentation for Kerala municipal/panchayat approvals.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Architectural 2D floor plans and working section drawings',
      '3D photorealistic elevation renderings',
      'Structural analysis and reinforcement schedules',
      'Panchayat / Municipality building permit documentation',
      'Bill of Quantities (BOQ) & itemized cost estimation',
    ],
    idealFor: 'Clients at the preliminary phase planning their construction budget',
    featured: false,
  },
];

