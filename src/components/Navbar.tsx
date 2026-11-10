import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MarcaLogo } from './MarcaLogo';
import { servicesData } from '../data/services';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/services');

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#11161C] border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Prominent Logo on the left with original aspect ratio preserved */}
          <div className="flex items-center py-2">
            <MarcaLogo variant="light" size="sm" />
          </div>

          {/* Navigation links on the right */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 text-xs uppercase tracking-widest transition-colors font-medium ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-marca-green'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 text-xs uppercase tracking-widest transition-colors font-medium ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-marca-green'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown (No category numbers) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  to="/services"
                  className={`px-3.5 py-2 text-xs uppercase tracking-widest transition-colors font-medium flex items-center gap-1.5 ${
                    isServicesActive
                      ? 'text-white font-semibold border-b-2 border-marca-green'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180 text-marca-gold' : 'text-gray-400'
                    }`}
                  />
                </Link>
              </div>

              {/* Minimal Classy Dropdown Flyout - Displaying Category Names Only */}
              {isServicesOpen && (
                <div className="absolute top-full right-0 w-64 pt-2 z-50">
                  <div className="bg-[#151B22] border border-white/15 rounded-lg shadow-2xl py-2 space-y-0.5">
                    <div className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-marca-gold border-b border-white/10 mb-1">
                      Service Categories
                    </div>
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className={`block px-4 py-2 text-xs transition-colors ${
                          location.pathname === `/services/${s.slug}`
                            ? 'bg-white/10 text-white font-semibold'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {s.title}
                      </Link>
                    ))}
                    <div className="pt-1 border-t border-white/10 mt-1">
                      <Link
                        to="/services"
                        className="block px-4 py-1.5 text-[11px] font-semibold text-marca-gold hover:text-white transition-colors"
                      >
                        All Services Overview &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3.5 py-2 text-xs uppercase tracking-widest transition-colors font-medium ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-marca-green'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 text-xs uppercase tracking-widest transition-colors font-medium ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-marca-green'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (No category numbers) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#11161C] border-b border-white/10 px-4 py-4 space-y-1 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 text-xs uppercase tracking-widest font-medium rounded ${
                isActive ? 'text-white bg-white/10 font-bold' : 'text-gray-300'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 text-xs uppercase tracking-widest font-medium rounded ${
                isActive ? 'text-white bg-white/10 font-bold' : 'text-gray-300'
              }`
            }
          >
            About
          </NavLink>

          {/* Mobile Services Accordion */}
          <div>
            <div className="flex items-center justify-between px-3 py-2 text-xs uppercase tracking-widest font-medium text-gray-300">
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="p-1 text-gray-400"
                aria-label="Expand services"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesOpen ? 'rotate-180 text-marca-gold' : ''
                  }`}
                />
              </button>
            </div>

            {isMobileServicesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 border-l border-white/10 ml-3">
                {servicesData.map((s) => (
                  <NavLink
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className={({ isActive }) =>
                      `block px-3 py-1.5 text-xs rounded transition-colors ${
                        isActive
                          ? 'text-white bg-white/10 font-semibold'
                          : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {s.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `block px-3 py-2 text-xs uppercase tracking-widest font-medium rounded ${
                isActive ? 'text-white bg-white/10 font-bold' : 'text-gray-300'
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2 text-xs uppercase tracking-widest font-medium rounded ${
                isActive ? 'text-white bg-white/10 font-bold' : 'text-gray-300'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};
