/**
 * MARCA CONSTRUCTION - Architectural Projects Portfolio
 * 
 * EDIT THIS FILE to add, modify, or replace project entries with actual Marca Construction site photographs.
 * 
 * Note: These entries serve as an editable architectural design showcase
 * demonstrating Marca's design language, spatial planning, and construction capabilities in Kerala.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Modern Villas' | 'Contemporary Tropical' | 'Commercial & Retail' | 'Renovations' | 'Interiors';
  location: string;
  builtUpArea: string;
  completionStage: string;
  description: string;
  features: string[];
  image: string;
  galleryImages: string[];
  featured: boolean;
}

export const projectCategories = [
  'All',
  'Modern Villas',
  'Contemporary Tropical',
  'Commercial & Retail',
  'Renovations',
  'Interiors',
] as const;

export type ProjectCategory = typeof projectCategories[number];

export const projectsData: ProjectItem[] = [
  {
    id: 'the-monsoon-villa',
    title: 'The Palm Horizon Residence',
    category: 'Modern Villas',
    location: 'Ernakulam / Kochi, Kerala',
    builtUpArea: '3,850 sq. ft.',
    completionStage: 'Design Concept & Architectural Showcase',
    description: 'A striking modern residential villa blending sleek geometric cantilevers with lush tropical landscape, ambient warm lighting, and seamless indoor-outdoor living.',
    features: ['Double-height living space', 'Cantilevered balcony', 'Lush tropical landscaping', 'Tempered glass balustrades'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    ],
    featured: true,
  },
  {
    id: 'kerala-courtyard-home',
    title: 'The Verdant Courtyard House',
    category: 'Contemporary Tropical',
    location: 'Thrissur, Kerala',
    builtUpArea: '3,200 sq. ft.',
    completionStage: 'Design Concept & Architectural Showcase',
    description: 'An architectural reinterpretation of Kerala traditional courtyard living, featuring natural ventilation louvers, exposed laterite highlights, and rain-sheltered verandas.',
    features: ['Central climate courtyard', 'Laterite stone accents', 'Teak timber ceiling soffits', 'Cross-ventilation layout'],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    ],
    featured: true,
  },
  {
    id: 'boutique-commercial-hub',
    title: 'Metroline Commercial Suite',
    category: 'Commercial & Retail',
    location: 'Kozhikode (Calicut), Kerala',
    builtUpArea: '2,600 sq. ft.',
    completionStage: 'Commercial Model Showcase',
    description: 'Contemporary multi-tenant boutique commercial building engineered for maximum visibility, high energy efficiency, and low acoustic interference.',
    features: ['Low-E glass curtain wall', 'Optimized floor efficiency', 'Accessible ramp entry', 'Dedicated client parking'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    ],
    featured: true,
  },
  {
    id: 'ancestral-modern-renovation',
    title: 'Heritage Revamp & Extension',
    category: 'Renovations',
    location: 'Kottayam, Kerala',
    builtUpArea: '2,900 sq. ft.',
    completionStage: 'Remodelling Showcase',
    description: 'Structural transformation of a 30-year-old traditional residence into an airy, light-filled modern home with upgraded foundation support and contemporary open plan.',
    features: ['Structural column addition', 'Skylight integration', 'Monsoon re-roofing', 'Modern wet-and-dry kitchen'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    ],
    featured: true,
  },
  {
    id: 'teakwood-living-interior',
    title: 'Artisan Living & Interior Lounge',
    category: 'Interiors',
    location: 'Trivandrum, Kerala',
    builtUpArea: '1,450 sq. ft.',
    completionStage: 'Interior Execution Model',
    description: 'Custom interior fit-out showcasing custom wood joinery, architectural cove lighting, marble slab backdrops, and minimalistic spatial serenity.',
    features: ['Custom teak joinery', 'Warm 3000K mood lighting', 'Acoustic wall paneling', 'Concealed storage units'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    ],
    featured: false,
  },
  {
    id: 'tranquil-canopy-villa',
    title: 'The Canopy Tropical Villa',
    category: 'Modern Villas',
    location: 'Alappuzha, Kerala',
    builtUpArea: '4,100 sq. ft.',
    completionStage: 'Design Concept & Architectural Showcase',
    description: 'A serene waterfront residential residence featuring sweeping cantilever roof overhangs to shield from Kerala monsoon downpours while framing water views.',
    features: ['Deep overhang eaves', 'Infinity reflection pool', 'Solar terrace integration', 'Natural stone paving'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    ],
    featured: false,
  },
];

