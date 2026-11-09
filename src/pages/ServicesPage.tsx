import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-marca-light min-h-screen pt-24 pb-20">
      <SEO
        title="Services | Comprehensive Kerala Construction & Trade Divisions"
        description="Explore Marca Construction's 6 core service divisions: Interior Works, Plumbing, Painting, Solar Systems, Custom Furniture & Epoxy, and Electrical Works."
      />

      {/* Hero Banner */}
      <section className="bg-marca-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,166,97,0.12)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-editorial-dark inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-marca-gold" />
              <span>Dedicated Trade Divisions</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our Construction & Engineering Services
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Marca Construction delivers specialized, high-standard execution across six core construction divisions in Kerala. Explore each category below for detailed material specifications and project scope.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="badge-editorial">6 Core Categories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-textDark tracking-tight">
              Select a Service Division
            </h2>
            <p className="text-sm text-marca-textMuted">
              Click any category below to view detailed material grades, technical groups, and scope of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Minimal Banner */}
      <section className="py-14 bg-marca-slate text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-marca-gold">
                <ShieldCheck className="w-5 h-5 text-marca-green" />
                <span className="text-xs uppercase tracking-wider font-semibold">Strict Quality Assurance</span>
              </div>
              <h3 className="text-2xl font-bold">Standardized Materials & Certified Execution</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Whether executing residential interior joinery, heavy electrical substations, or rooftop solar arrays, all works follow certified Indian Standards (IS), PWD, and Kerala Electrical Inspectorate guidelines.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
                  companyData.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/contact"
                className="btn-primary w-full sm:w-auto text-xs py-3 px-5 uppercase tracking-wider"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
