import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData, ServiceCategory } from '../data/services';
import { companyData } from '../data/company';

interface ServiceDetailPageProps {
  categorySlug?: string;
}

// Tailored SEO metadata per service category
const serviceSeoMetadata: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  'interior-works': {
    title: 'Interior Works in Calicut & Kerala | MARCA CONSTRUCTION',
    description:
      'Architectural interior works in Calicut and Kerala: premium marine plywood joinery, surface finishes, gypsum false ceilings, countertops, and hardware fittings.',
    keywords:
      'interior works in Calicut, interior works in Kerala, interior contractors Calicut, marine plywood joinery, gypsum false ceiling Kerala, kitchen countertops Calicut, architectural interiors Kerala',
  },
  'roof-works': {
    title: 'Roof Works & Gypsum False Ceilings in Kerala | MARCA CONSTRUCTION',
    description:
      'Professional roof works and gypsum ceiling installation in Kerala: false ceiling designs, gypsum partitions, metal framing, and waterproof ceiling finishing.',
    keywords:
      'roof works in Kerala, gypsum ceiling works Calicut, false ceiling contractors Kerala, ceiling framing Kozhikode, gypsum partitions Kerala, roofing waterproofing Calicut',
  },
  'carpenter-works': {
    title: 'Carpenter Works & Custom Woodwork in Kerala | MARCA CONSTRUCTION',
    description:
      'Master carpentry services in Kerala: custom wardrobes, designer timber doors, modular kitchen cabinets, wooden wall panelling, and bespoke woodwork.',
    keywords:
      'carpenter works in Kerala, carpentry contractors Calicut, custom kitchen cabinets Kerala, wooden wardrobes Kozhikode, timber doors Kerala, custom wooden furniture Calicut',
  },
  'plumbing-works': {
    title: 'Plumbing Works & Sanitary Installations in Kerala | MARCA CONSTRUCTION',
    description:
      'Complete plumbing solutions in Kerala: CPVC/UPVC water supply piping, underground sewer lines, modern sanitary fittings, and drainage infrastructure.',
    keywords:
      'plumbing works Kerala, plumbing contractors Calicut, sanitary fittings Kozhikode, underground drainage Kerala, water supply piping, commercial plumbing Kerala',
  },
  'painting-works': {
    title: 'Painting Works & Surface Coating in Kerala | MARCA CONSTRUCTION',
    description:
      'Professional painting contractors in Kerala: weather-shield exterior painting, luxury interior emulsions, PU wood finishes, and waterproofing coatings.',
    keywords:
      'painting works Kerala, painting contractors Calicut, exterior weather shield painting Kerala, interior painting Kozhikode, PU wood polishing, damp proofing Kerala',
  },
  'solar-systems': {
    title: 'Solar Systems Installation in Kerala | MARCA CONSTRUCTION',
    description:
      'Clean energy solutions across Kerala: on-grid rooftop solar, off-grid battery systems, hybrid solar plants, solar water heaters, and agricultural pumps.',
    keywords:
      'solar systems Kerala, solar panel installation Calicut, rooftop solar Kerala, on-grid solar Kozhikode, hybrid solar systems Kerala, solar water heaters Kerala',
  },
  'custom-furniture-epoxy-works': {
    title: 'Custom Furniture & Epoxy Works in Kerala | MARCA CONSTRUCTION',
    description:
      'Handcrafted custom furniture and artistic epoxy river tables in Kerala: live-edge dining tables, epoxy coffee tables, designer consoles, and executive desks.',
    keywords:
      'custom furniture Kerala, epoxy river tables Calicut, resin tables Kerala, handcrafted wooden furniture Kozhikode, bespoke dining tables, epoxy clocks',
  },
  'electrical-works': {
    title: 'Electrical Works & Power Infrastructure in Kerala | MARCA CONSTRUCTION',
    description:
      'Licensed electrical contractors in Kerala: concealed conduit wiring, safety distribution boards, smart lighting installations, and industrial power setups.',
    keywords:
      'electrical works Kerala, electrical contractors Calicut, residential wiring Kozhikode, industrial electrical works Kerala, electrical distribution boards, PWD electrical contractors',
  },
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ categorySlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = categorySlug || slug;

  const service: ServiceCategory | undefined = servicesData.find(
    (s) => s.slug === activeSlug
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  const seoMeta = serviceSeoMetadata[service.slug] || {
    title: `${service.title} in Kerala | MARCA CONSTRUCTION`,
    description: `${service.intro} Contact Marca Construction in Calicut, Kerala.`,
    keywords: `${service.title.toLowerCase()}, construction company in Kerala, construction works Calicut, Marca Construction`,
  };

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    `Hello Marca Construction, I would like to enquire about your ${service.title} services in Kerala.`
  )}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.marcaconstruction.com/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.intro,
    provider: {
      '@id': 'https://www.marcaconstruction.com/#organization',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Calicut',
      },
      {
        '@type': 'City',
        name: 'Kozhikode',
      },
      {
        '@type': 'Place',
        name: 'Pantheerankavu',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Kerala',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Subdivisions`,
      itemListElement: service.groups.map((group) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: group.name,
          description: group.description,
        },
      })),
    },
  };

  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title={seoMeta.title}
        description={seoMeta.description}
        canonicalUrl={`https://www.marcaconstruction.com/services/${service.slug}`}
        keywords={seoMeta.keywords}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: service.title, item: `/services/${service.slug}` },
        ]}
        schema={serviceSchema}
      />

      {/* 1. Full-Width Photographic Hero Banner (Edge-to-Edge) */}
      <section className="relative min-h-[52vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden bg-marca-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
          role="img"
          aria-label={`${service.title} execution by Marca Construction in Kerala`}
        >
          {/* Subtle architectural overlay for optimal text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161C]/95 via-[#11161C]/60 to-[#11161C]/45"></div>
        </div>

        {/* Text Overlay directly over the photograph */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-marca-gold mb-3 inline-block">
            Marca Construction Division
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {service.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-2xl mx-auto leading-relaxed">
            {service.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Enquire via WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Subcategories Architectural Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-marca-gold-dark font-bold block">
                Technical Divisions &amp; Materials
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#11161C] tracking-tight">
                Subcategories &amp; Material Specifications
              </h2>
            </div>
            <span className="text-xs text-gray-500">
              {service.groups.length} {service.groups.length === 1 ? 'division' : 'divisions'}
            </span>
          </div>

          {/* Subcategory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.groups.map((group, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white rounded-lg border border-gray-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Object-focused photograph with subtle hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={group.image}
                    alt={`${group.name} - ${service.title} | Marca Construction Kerala`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity"></div>
                </div>

                {/* Subcategory Details */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#11161C] tracking-tight group-hover:text-marca-gold-dark transition-colors">
                      {group.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                      {group.description}
                    </p>
                  </div>

                  {/* Specifications & Materials List */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2.5">
                      Specifications &amp; Materials
                    </span>
                    <ul className="space-y-1.5">
                      {group.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-xs text-gray-700 leading-snug flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-marca-green flex-shrink-0 mt-1.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Enquire Now Card */}
          <div className="mt-14 p-8 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-[#11161C]">
                Ready to discuss your {service.title.toLowerCase()} requirements?
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Reach out to our engineering team in Calicut for prompt consultation and site estimation.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Enquire Now</span>
              </a>
              <Link
                to="/contact"
                className="px-5 py-3 bg-[#11161C] hover:bg-[#25303D] text-white rounded text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Minimal Quick Links to Other Services */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-4">
              Other Service Categories
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="p-3 bg-white rounded border border-gray-200 hover:border-marca-green text-xs font-semibold text-gray-800 hover:text-marca-green-700 transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">{other.title}</span>
                  <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-marca-green-700 group-hover:translate-x-0.5 transition-transform flex-shrink-0 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
