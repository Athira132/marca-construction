import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../data/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card-architectural overflow-hidden flex flex-col group h-full">
      {/* Service Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-marca-dark/70 via-transparent to-transparent"></div>
        
        {/* Category tag */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-marca-dark/85 backdrop-blur-md text-marca-gold border border-white/10">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          <h3 className="text-xl font-bold text-marca-textDark group-hover:text-marca-green-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs font-medium text-marca-gold-dark italic">
            {service.tagline}
          </p>
          <p className="text-sm text-marca-textMuted leading-relaxed">
            {service.description}
          </p>

          {/* Deliverables checklist */}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <span className="block text-xs uppercase tracking-wider font-semibold text-gray-500">
              Key Inclusions:
            </span>
            <ul className="space-y-1.5">
              {service.deliverables.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-marca-green flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400">
            Targeted for: <span className="text-gray-700 font-normal">{service.idealFor}</span>
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-marca-dark hover:text-marca-green group-hover:translate-x-1 transition-all"
          >
            <span>Enquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

