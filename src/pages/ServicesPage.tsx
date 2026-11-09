import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title="Services | Marca Construction"
        description="Comprehensive architectural, structural, and engineering services delivered across Kerala by Marca Construction."
      />

      {/* Full-Width Photographic Hero Banner (Edge-to-Edge) */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-marca-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161C]/95 via-[#11161C]/60 to-[#11161C]/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-marca-gold mb-3 inline-block">
            Our Divisions
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-xl mx-auto leading-relaxed">
            Six dedicated trade divisions delivering high-standard execution across Kerala.
          </p>
        </div>
      </section>

      {/* Six Minimal Service Cards */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, idx) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200/80 hover:border-marca-green hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 text-[11px] font-mono font-bold text-white/90">
                    0{idx + 1}.
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#11161C] group-hover:text-marca-green-700 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {service.intro}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#11161C] group-hover:text-marca-green-700">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
