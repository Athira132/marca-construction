import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

// Minimal, curated collection of realistic architectural photography (easy to replace with real photos)
const galleryItems: GalleryItem[] = [
  {
    id: 'residence-01',
    title: 'Contemporary Tropical Residence',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'interior-01',
    title: 'Minimalist Interior & Joinery',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'residence-02',
    title: 'Kerala Villa at Dusk',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'interior-02',
    title: 'Living Room & Timber Accents',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'commercial-01',
    title: 'Commercial Suite & Facade',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'residence-03',
    title: 'Tropical Courtyard & Pool',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  },
];

export const GalleryPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const activeItem = activeImageIndex !== null ? galleryItems[activeImageIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? galleryItems.length - 1 : activeImageIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === galleryItems.length - 1 ? 0 : activeImageIndex + 1
      );
    }
  };

  return (
    <div className="bg-[#F8F9F5] min-h-screen">
      <SEO
        title="Our Work | Marca Construction"
        description="Visual portfolio of architectural, residential, interior, and commercial works by Marca Construction."
      />

      {/* Full-Width Hero Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden bg-marca-dark">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161C]/95 via-[#11161C]/60 to-[#11161C]/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <span className="text-[11px] font-bold uppercase tracking-widest text-marca-gold mb-3 inline-block">
            Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Our Work
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-md mx-auto leading-relaxed">
            A visual selection of residential, interior, and commercial spaces.
          </p>
        </div>
      </section>

      {/* Minimal Image Gallery (Few Photographs Only) */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 cursor-pointer border border-gray-200/80 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-marca-gold font-bold block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-gray-500">
            Note: Portfolio photography represents architectural aesthetics and is readily updatable with company site photos.
          </div>
        </div>
      </section>

      {/* Simple Image Lightbox */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-white/10 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] bg-[#11161C] rounded-lg overflow-hidden border border-white/10 flex flex-col"
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[70vh] w-auto object-contain bg-black"
            />
            <div className="p-4 text-white flex items-center justify-between text-xs">
              <div>
                <span className="text-marca-gold uppercase font-bold text-[10px] block">
                  {activeItem.category}
                </span>
                <p className="font-semibold text-sm">{activeItem.title}</p>
              </div>
              <span className="text-gray-400">
                {(activeImageIndex ?? 0) + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
