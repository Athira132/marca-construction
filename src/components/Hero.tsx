import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { companyData } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-marca-dark flex items-center overflow-hidden pt-24 pb-16 lg:py-0">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-marca-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-marca-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Architectural Content (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Indicator Tag / Architectural Accent */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-marca-gold"></span>
              <div className="badge-editorial-dark">
                <Sparkles className="w-3.5 h-3.5 text-marca-gold" />
                <span>Kerala Architecture & Construction</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                <span className="block font-light text-gray-200">Building Spaces.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-marca-gold-light to-marca-green">
                  Creating Futures.
                </span>
              </h1>
            </div>

            {/* Short Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-xl">
              From bespoke tropical residences to functional commercial hubs, Marca Construction crafts premium, climate-responsive structures across Kerala with uncompromising engineering and modern elegance.
            </p>

            {/* Two Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/gallery"
                className="btn-primary text-base px-7 py-4 shadow-marca-green flex items-center justify-center gap-3 group"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="btn-secondary text-base px-7 py-4 border-white/20 hover:border-marca-gold/60 text-white flex items-center justify-center gap-2 group"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Architectural Trust Points */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-marca-gold">
                  <Compass className="w-4 h-4 text-marca-green" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Climate-Ready</span>
                </div>
                <p className="text-xs text-gray-400">Tailored for Kerala monsoons & thermal comfort</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-marca-gold">
                  <ShieldCheck className="w-4 h-4 text-marca-green" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Turnkey Delivery</span>
                </div>
                <p className="text-xs text-gray-400">From structural foundation to interior handover</p>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-marca-gold">
                  <span className="w-2 h-2 rounded-full bg-marca-green"></span>
                  <span className="text-xs uppercase tracking-wider font-semibold">Quality Materials</span>
                </div>
                <p className="text-xs text-gray-400">Rigorous procurement & certified craftsmanship</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Architectural Photograph Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-marca-green/30 via-marca-gold/30 to-transparent rounded-2xl blur-lg opacity-70"></div>

              {/* Main Architectural Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-marca-slate group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern Kerala Contemporary Residence by Marca Construction"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Image Vignette & Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-marca-dark via-transparent to-black/20 pointer-events-none"></div>

                {/* Architectural Caption Pill */}
                <div className="absolute bottom-5 left-5 right-5 bg-marca-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-marca-gold font-semibold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-marca-green" />
                      <span>Kerala Contemporary Residence</span>
                    </div>
                    <p className="text-sm font-medium text-gray-200 mt-0.5">
                      Tropical Cantilever Villa Concept
                    </p>
                  </div>
                  <Link
                    to="/gallery"
                    className="p-2.5 rounded-lg bg-marca-green/20 text-marca-green hover:bg-marca-green hover:text-white transition-colors"
                    aria-label="View in gallery"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-marca-dark/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-marca-gold/40 shadow-xl items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-marca-green animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide text-white">
                  {companyData.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
