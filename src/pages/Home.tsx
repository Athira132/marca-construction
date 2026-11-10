import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/services';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title="Home | Building Spaces. Creating Futures."
        description="Marca Construction — Thoughtful solutions for homes and businesses in Kerala."
      />

      {/* 1. Full-Coverage Edge-to-Edge Hero Banner */}
      <Hero />

      {/* 2. Compact Architectural Introduction */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-[11px] uppercase tracking-widest text-marca-gold-dark font-bold">
            Kerala Construction Practice
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#11161C] tracking-tight leading-snug">
            Thoughtful architectural execution for residences and commercial spaces.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Based in Calicut, Marca Construction brings structural discipline, climate-conscious engineering, and craftsmanship to residential villas, commercial facilities, and government infrastructure across Kerala.
          </p>
        </div>
      </section>

      {/* 3. Eight Minimal Service Cards (Category Names Only - No Numbers) */}
      <section className="py-20 lg:py-24 bg-[#F8F9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-gray-200 pb-5">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-marca-gold-dark font-bold block mb-1">
                Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11161C] tracking-tight">
                Our Services
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest font-semibold text-marca-green-700 hover:text-[#11161C] flex items-center gap-1.5 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-marca-green/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#11161C] group-hover:text-marca-green-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {service.intro}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#11161C] group-hover:text-marca-green-700">
                    <span>Explore Division</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Minimal Contact & Enquiry Section (Replacing Portfolio Preview) */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-[11px] uppercase tracking-widest text-marca-gold-dark font-bold block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11161C] tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
            Let's discuss your requirements.
          </p>
          <div className="pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#11161C] hover:bg-marca-green text-white rounded text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
