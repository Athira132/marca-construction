import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden bg-marca-dark">
      {/* Full-coverage edge-to-edge architectural photograph */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Subtle architectural dark overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11161C]/90 via-[#11161C]/50 to-[#11161C]/40"></div>
      </div>

      {/* Elegant Text Overlay Centered Directly Over Photograph */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
          Building Spaces.
          <span className="block font-light text-gray-200 mt-1">
            Creating Futures.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-normal max-w-2xl mx-auto mb-9 leading-relaxed">
          Thoughtful solutions for homes and businesses.
        </p>

        {/* Two Clean Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="w-full sm:w-auto px-7 py-3.5 bg-marca-green hover:bg-marca-green-600 text-white rounded text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-lg text-center"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded text-xs uppercase tracking-widest font-semibold transition-all duration-200 backdrop-blur-sm text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
