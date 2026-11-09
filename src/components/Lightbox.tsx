import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-marca-green"
        aria-label="Close project preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus:outline-none focus:ring-2 focus:ring-marca-green"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus:outline-none focus:ring-2 focus:ring-marca-green"
          aria-label="Next project"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Content Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] bg-marca-slate rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
      >
        {/* Left/Top: Large Image */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover max-h-[70vh]"
          />
          <div className="absolute top-4 left-4 bg-marca-dark/80 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-semibold text-marca-gold border border-marca-gold/30 flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-marca-green" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Right/Bottom: Metadata & Description */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] md:max-h-[70vh] bg-marca-slate text-white">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-marca-green">
                {project.completionStage}
              </span>
              <h2 id="lightbox-title" className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 py-2 border-y border-white/10">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-marca-gold" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-marca-green" />
                <span>{project.builtUpArea}</span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Features Tags */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Architectural Highlights:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
            <span>Portfolio Architecture</span>
            <span className="text-marca-gold">MARCA CONSTRUCTION</span>
          </div>
        </div>
      </div>
    </div>
  );
};

