import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Youtube,
  Facebook,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Compass,
  Calendar,
} from 'lucide-react';
import { MarcaLogo } from './MarcaLogo';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-marca-dark text-gray-300 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand & Introduction Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <MarcaLogo variant="light" size="lg" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {companyData.subtitle}
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2 text-marca-gold">
                <Compass className="w-4 h-4 text-marca-green" />
                <span className="font-medium">Climate-Responsive Kerala Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-marca-gold">
                <ShieldCheck className="w-4 h-4 text-marca-green" />
                <span className="font-medium">Quality-Assured Structural Engineering</span>
              </div>
            </div>

            {/* Social Links from User Prompts */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                Follow Marca Construction
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300"
                  aria-label="Marca Construction YouTube Channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href={companyData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
                  aria-label="Marca Construction Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
                    companyData.whatsapp.defaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
                  aria-label="Marca Construction WhatsApp Direct"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-bold border-l-2 border-marca-green pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-bold border-l-2 border-marca-gold pl-2.5">
              Construction Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-marca-green transition-transform group-hover:translate-x-1" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Office Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-bold border-l-2 border-marca-green pl-2.5">
              Get in Touch
            </h3>
            <div className="space-y-3.5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-marca-gold flex-shrink-0 mt-0.5" />
                <span>{companyData.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-marca-gold flex-shrink-0" />
                <a
                  href={`tel:${companyData.phone.raw}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-marca-gold flex-shrink-0" />
                <a
                  href={`mailto:${companyData.email.primary}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.email.primary}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-marca-green flex-shrink-0" />
                <span className="text-xs">{companyData.workingHours.weekdays}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-primary w-full text-xs py-2.5 flex items-center justify-center gap-2"
              >
                <span>Request Project Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} MARCA CONSTRUCTION. All rights reserved. Serving Kerala, India.</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Kerala Contemporary Residential & Commercial Builders</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

