import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const StickyContactActions: React.FC = () => {
  return (
    <aside aria-label="Direct contact channels" className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
      {/* Direct Call Button */}
      <a
        href={`tel:${companyData.phone.primaryRaw}`}
        aria-label={`Call Marca Construction at ${companyData.phone.primary}`}
        className="flex items-center gap-2 bg-[#1C242E] text-white px-3.5 py-2.5 rounded-full shadow-lg border border-white/15 hover:bg-[#25303D] hover:border-marca-gold/40 transition-all duration-200 active:scale-95 text-xs font-medium tracking-wide"
      >
        <Phone className="w-4 h-4 text-marca-gold" />
        <span className="hidden sm:inline">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={companyData.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Marca Construction on WhatsApp"
        className="flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:bg-[#1EBE5D] transition-all duration-200 active:scale-95 text-xs font-semibold tracking-wide"
      >
        <MessageCircle className="w-4 h-4 fill-white stroke-none" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </aside>
  );
};

