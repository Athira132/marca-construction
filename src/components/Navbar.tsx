import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import { MarcaLogo } from './MarcaLogo';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-marca-dark/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
          : isHome
          ? 'bg-gradient-to-b from-marca-dark/80 via-marca-dark/40 to-transparent py-5'
          : 'bg-marca-dark py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <MarcaLogo variant="light" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-marca-green'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-marca-green'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`
              }
            >
              About
            </NavLink>

            {/* Services with Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/services"
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative flex items-center gap-1.5 ${
                    isServicesActive
                      ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-marca-green'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180 text-marca-green' : 'text-gray-400'
                    }`}
                  />
                </Link>
              </div>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-marca-slate/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl p-2.5 space-y-1">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-marca-gold border-b border-white/10">
                      Our 6 Service Divisions
                    </div>
                    {servicesData.map((s, idx) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group ${
                          location.pathname === `/services/${s.slug}`
                            ? 'bg-marca-green/20 text-white font-bold'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[10px] text-marca-gold font-mono">{idx + 1}.</span>
                          <span>{s.title}</span>
                        </span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-marca-green transition-opacity" />
                      </Link>
                    ))}

                    <div className="pt-1.5 mt-1 border-t border-white/10">
                      <Link
                        to="/services"
                        className="block px-3 py-1.5 text-center text-[11px] font-bold text-marca-gold hover:text-white transition-colors"
                      >
                        View All Services Overview &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-marca-green'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-marca-green'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-primary py-2.5 px-4 text-xs tracking-wider uppercase font-semibold flex items-center gap-2 group"
            >
              <span>Consult an Architect</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded text-xs font-semibold bg-marca-green text-white"
            >
              Enquire
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-marca-green"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-marca-dark/98 backdrop-blur-xl border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-5 pt-3 pb-6 space-y-1.5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-marca-green/20 text-white font-semibold border-l-4 border-marca-green'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-marca-green/20 text-white font-semibold border-l-4 border-marca-green'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              About
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="rounded-lg bg-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 text-base font-medium text-gray-200">
                <Link to="/services" className="hover:text-white flex-1">
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="p-1.5 text-gray-400 hover:text-white"
                  aria-label="Expand services"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180 text-marca-green' : ''
                    }`}
                  />
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-black/20 border-t border-white/5">
                  {servicesData.map((s, idx) => (
                    <NavLink
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-xs transition-colors ${
                          isActive
                            ? 'bg-marca-green/30 text-white font-bold'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      <span className="text-marca-gold font-mono mr-1.5">{idx + 1}.</span>
                      {s.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-marca-green/20 text-white font-semibold border-l-4 border-marca-green'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-marca-green/20 text-white font-semibold border-l-4 border-marca-green'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>

            <div className="pt-4 border-t border-white/10 mt-3 space-y-2.5">
              <a
                href={`tel:${companyData.phone.raw}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white bg-white/5"
              >
                <Phone className="w-4 h-4 text-marca-gold" />
                <span>Call Us: {companyData.phone.display}</span>
              </a>

              <a
                href={`https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
                  companyData.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold bg-[#25D366] text-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
