import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.number}?text=${encodeURIComponent(
    companyData.whatsapp.defaultMessage
  )}`;

  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-50 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Marca Construction on WhatsApp"
        className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-2xl hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold group-hover:max-w-xs transition-all duration-500 ease-in-out">
          Chat on WhatsApp
        </span>
      </a>
      {/* Subtle indicator beacon */}
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#128C7E]"></span>
      </span>
    </aside>
  );
};

