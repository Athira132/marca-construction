import React from 'react';
import { Youtube, Facebook } from 'lucide-react';
import { MarcaLogo } from './MarcaLogo';
import { companyData } from '../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11161C] text-gray-300 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10 text-center md:text-left">
          {/* Logo & Company Name */}
          <div className="space-y-2">
            <MarcaLogo variant="light" size="md" />
            <p className="text-xs text-gray-400 max-w-sm mt-1">
              {companyData.subtitle}
            </p>
          </div>

          {/* Location, Phone & Email */}
          <div className="text-xs space-y-1.5 text-gray-400">
            <p className="text-gray-300 font-medium">{companyData.location}</p>
            <p>
              Mobile:{' '}
              <a
                href={`tel:${companyData.phone.primaryRaw}`}
                className="text-white hover:text-marca-green font-medium"
              >
                +91 {companyData.phone.primary}
              </a>{' '}
              | Office:{' '}
              <a
                href={`tel:${companyData.phone.officeRaw}`}
                className="text-white hover:text-marca-green font-medium"
              >
                +91 {companyData.phone.office}
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${companyData.email}`}
                className="text-white hover:text-marca-green font-medium"
              >
                {companyData.email}
              </a>{' '}
              | GST: <span className="font-mono text-gray-300">{companyData.gst}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={companyData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marca Construction Facebook"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={companyData.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marca Construction YouTube"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2 text-center sm:text-left">
          <p>© {currentYear} MARCA CONSTRUCTION. All rights reserved.</p>
          <p>Pantheerankavu, Calicut, Kerala</p>
        </div>
      </div>
    </footer>
  );
};
