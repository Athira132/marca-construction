import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HelpCircle,
  Sparkles,
  Layers,
  ShieldAlert,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/services';

export const ServicesPage: React.FC = () => {
  const faqs = [
    {
      q: 'Do you manage building permits and panchayat/municipality approvals in Kerala?',
      a: 'Yes, we assist in preparing architectural drawings, structural stability certificates, and coordinating statutory paperwork required for local self-government (Panchayat / Municipality / Corporation) approvals.',
    },
    {
      q: 'How do you safeguard houses against heavy Kerala monsoon rains?',
      a: 'We integrate multi-tier waterproofing, strategic roof overhangs, sloping parapet coping, damp-proof courses (DPC), and advanced exterior moisture-resistant elastomeric coatings tailored for high-humidity coastal and high-rainfall zones.',
    },
    {
      q: 'Do you offer turnkey construction or only labour contracts?',
      a: 'We specialize in turnkey construction, covering everything from architectural planning, foundation, structural framework, and premium electrical/plumbing to interior carpentry and finishing. This guarantees single-point accountability and high material standards.',
    },
    {
      q: 'Can you renovate older traditional Kerala homes without destroying their character?',
      a: 'Absolutely. Our structural renovation team specializes in modernizing ancestral properties—reinforcing foundation support, adding skylights and open-concept layouts, while respecting classic woodwork and charm.',
    },
  ];

  return (
    <div className="bg-marca-light min-h-screen pt-24 pb-20">
      <SEO
        title="Services | Comprehensive Kerala Construction & Architecture"
        description="Explore Marca Construction's range of residential villas, commercial buildings, structural renovations, and turnkey interiors in Kerala."
      />

      {/* Hero Banner */}
      <section className="bg-marca-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,166,97,0.12)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="badge-editorial-dark">Construction Capabilities</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              End-to-End Building & Architectural Solutions
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Designed for homeowners and small businesses across Kerala. All service categories below are cleanly structured and readily customizable as your verified service offerings evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="badge-editorial">Our Service Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-marca-textDark tracking-tight">
              Engineered for Quality & Longevity
            </h2>
            <p className="text-sm sm:text-base text-marca-textMuted">
              Explore our core construction and architectural services, crafted with attention to Kerala’s regional craftsmanship and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards & Kerala Specifics */}
      <section className="py-16 lg:py-24 bg-marca-slate text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-editorial-dark">Structural Assurance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Built to Withstand Kerala’s Weather Extremes
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Kerala’s geography is unique—high-velocity monsoons, high ground water tables, and scorching coastal humidity require rigorous engineering standards.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Foundation Soil Testing & Engineering</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Accurate bearing capacity calculation prevents settling and foundation cracks in clayey or coastal soils.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-marca-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Certified Primary Steel & High-Grade Cement</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Corrosion-resistant FE 500/550D TMT bars and 53-grade OPC/PPC cement ensuring decades of structural security.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Advanced Monsoon Weatherproofing</h4>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Polymer-modified slurry membranes on all slab roofs, sunken toilets, and exterior boundary parapets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision Construction by Marca Construction"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="badge-editorial">Clear Answers</span>
            <h2 className="text-3xl font-extrabold text-marca-textDark tracking-tight">
              Frequently Asked Questions About Kerala Construction
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-marca-light border border-gray-200 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-marca-green flex-shrink-0 mt-0.5" />
                  <h3 className="text-base font-bold text-marca-textDark">{faq.q}</h3>
                </div>
                <p className="text-sm text-marca-textMuted pl-8 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Consultation Box */}
          <div className="mt-12 p-8 rounded-2xl bg-marca-light border border-marca-green/30 text-center space-y-4">
            <h3 className="text-xl font-bold text-marca-textDark">
              Have a specific question regarding your project?
            </h3>
            <p className="text-sm text-marca-textMuted max-w-lg mx-auto">
              Our engineering team is happy to review your plot measurements or architectural requirements without obligation.
            </p>
            <div className="pt-2">
              <Link to="/contact" className="btn-primary">
                <span>Ask Us Directly</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
