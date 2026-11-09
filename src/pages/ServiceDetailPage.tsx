import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
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
    <div className="bg-marca-light min-h-screen pt-24 pb-20">
      <SEO
        title={`${service.title} | Marca Construction Kerala`}
        description={service.intro}
      />

      {/* Breadcrumb Header */}
      <section className="bg-marca-dark text-white pt-10 pb-16 lg:pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb links */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-marca-gold" />
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="badge-editorial-dark inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-marca-gold" />
              <span>Specialised Construction Division</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-marca-gold-light font-medium italic">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed pt-1">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* ONE Strong, High-Quality Relevant Photograph */}
        <div className="rounded-2xl overflow-hidden shadow-marca-lg border border-white/20 bg-marca-slate max-h-[480px]">
          <img
            src={service.heroImage}
            alt={`${service.title} by Marca Construction`}
            className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Cleanly Organised Service Groups */}
        <div className="mt-14 lg:mt-16 space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-marca-textDark tracking-tight">
              Scope of Work & Specifications
            </h2>
            <p className="text-xs text-marca-textMuted mt-1">
              Curated materials, execution standards, and trade capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.groups.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-marca flex flex-col justify-between space-y-4 hover:border-marca-green/40 transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-marca-textDark pb-2 border-b border-gray-100 flex items-center justify-between">
                    <span>{group.name}</span>
                    <span className="w-2 h-2 rounded-full bg-marca-green"></span>
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-marca-green flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Enquire / Contact Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-marca-dark text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs uppercase tracking-widest text-marca-gold font-bold">
              Consultation & Estimation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Require {service.title} for Your Project in Kerala?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Get in touch with our team for site inspection, material advice, and transparent pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>

            <Link
              to="/contact"
              className="btn-primary text-xs py-3.5 px-6 uppercase tracking-wider font-semibold w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Explore Other Service Categories */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-widest text-marca-textMuted font-bold">
              Other Service Categories
            </span>
            <Link
              to="/services"
              className="text-xs font-bold text-marca-green hover:underline flex items-center gap-1"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                to={`/services/${other.slug}`}
                className="p-3.5 rounded-xl bg-white border border-gray-100 hover:border-marca-green/50 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <span className="text-xs font-bold text-marca-textDark group-hover:text-marca-green transition-colors line-clamp-1">
                  {other.title}
                </span>
                <span className="text-[11px] text-gray-400 mt-2 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <span>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
