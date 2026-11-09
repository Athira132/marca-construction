import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '../data/services';

interface ServiceCardProps {
  service: ServiceCategory;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card-architectural overflow-hidden flex flex-col group h-full bg-white transition-all duration-300 hover:-translate-y-1"
    >
      {/* Service Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-marca-dark/80 via-transparent to-transparent"></div>

        {/* Index indicator */}
        {index !== undefined && (
          <span className="absolute top-4 left-4 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-marca-dark/80 backdrop-blur-md text-marca-gold border border-white/10">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}

        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-xs font-semibold text-marca-green uppercase tracking-wider block">
            Marca Construction Trade
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-marca-textDark group-hover:text-marca-green-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-marca-textMuted leading-relaxed line-clamp-2">
            {service.tagline}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-marca-dark group-hover:text-marca-green">
          <span>View Specifications</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
