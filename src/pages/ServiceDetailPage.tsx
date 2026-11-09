import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData, ServiceCategory } from '../data/services';
import { companyData } from '../data/company';

interface ServiceDetailPageProps {
  categorySlug?: string;
}

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

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    `Hello Marca Construction, I would like to enquire about your ${service.title} services in Kerala.`
  )}`;

  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title={`${service.title} | Marca Construction`}
        description={service.intro}
      />

      {/* 1. Full-Width Photographic Hero Banner (Edge-to-Edge) */}
      <section className="relative min-h-[52vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden bg-marca-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
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

          <div className="mt-7 flex items-center justify-center gap-3">
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

      {/* 2. Organized Technical Service Groups (Compact & Clean Hierarchy) */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 pb-4 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-marca-gold-dark font-bold block">
                Technical Scope & Materials
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#11161C] tracking-tight">
                Service Scope & Specifications
              </h2>
            </div>
            <span className="text-xs text-gray-500">
              {service.groups.length} technical {service.groups.length === 1 ? 'group' : 'groups'}
            </span>
          </div>

          {/* Compact text lists with clean spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.groups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200/80 shadow-sm space-y-3.5"
              >
                <h3 className="text-sm font-bold text-[#11161C] pb-2 border-b border-gray-100 uppercase tracking-wide">
                  {group.name}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-gray-700 leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-marca-green flex-shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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

          {/* Minimal Quick Links to Other 5 Services */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-4">
              Other Service Categories
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
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
