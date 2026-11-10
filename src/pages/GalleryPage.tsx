import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SEO } from '../components/SEO';

interface GalleryPhoto {
  id: string;
  image: string;
  fallback?: string;
  position?: string;
}

/**
 * Curated Gallery of Marca Construction Projects
 * 
 * Order:
 * 1. 24 Unique User-Provided Project Photos (first, in exact specified order, repeated link omitted)
 * 2. 6 Existing Architectural Gallery Photos
 * 
 * Style:
 * - Photos only (zero titles, descriptions, captions, category labels, numbering, overlays, hover text, badges, icons, decorative frames).
 * - Identical square 1:1 containers.
 * - Mobile: Exactly 2 equal-width images per row with balanced small gaps and no horizontal scrolling.
 * - Desktop: Clean balanced multi-column grid with equal square images.
 */
const galleryPhotos: GalleryPhoto[] = [
  // 1. https://ibb.co/hFjWYs0G
  {
    id: 'user-photo-01',
    image: 'https://i.ibb.co/r2S6dk9B/Whats-App-Image-2026-11-10-at-4-25-52-PM-2.jpg',
    fallback: '/images/gallery/user-gallery-01.jpg',
    position: 'center 30%',
  },
  // 2. https://ibb.co/LDZrYTBd
  {
    id: 'user-photo-02',
    image: 'https://i.ibb.co/20kSWzR3/Whats-App-Image-2026-11-10-at-4-25-52-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-02.jpg',
    position: 'center 35%',
  },
  // 3. https://ibb.co/MxQQw6tg
  {
    id: 'user-photo-03',
    image: 'https://i.ibb.co/YFwwnZ1N/Whats-App-Image-2026-11-10-at-4-25-52-PM.jpg',
    fallback: '/images/gallery/user-gallery-03.jpg',
    position: 'center 40%',
  },
  // 4. https://ibb.co/1fr4Tz57
  {
    id: 'user-photo-04',
    image: 'https://i.ibb.co/wNS24cXB/Whats-App-Image-2026-11-10-at-4-25-51-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-04.jpg',
    position: 'center 45%',
  },
  // 5. https://ibb.co/v6sRbwDg
  {
    id: 'user-photo-05',
    image: 'https://i.ibb.co/5gYwdM2t/Whats-App-Image-2026-11-10-at-4-25-51-PM.jpg',
    fallback: '/images/gallery/user-gallery-05.jpg',
    position: 'center 50%',
  },
  // 6. https://ibb.co/hxMfzM68
  {
    id: 'user-photo-06',
    image: 'https://i.ibb.co/j95RX5N4/Whats-App-Image-2026-11-10-at-4-25-50-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-06.jpg',
    position: 'center 45%',
  },
  // 7. https://ibb.co/xS1khScR
  {
    id: 'user-photo-07',
    image: 'https://i.ibb.co/GvW67v1b/Whats-App-Image-2026-11-10-at-4-25-49-PM-3.jpg',
    fallback: '/images/gallery/user-gallery-07.jpg',
    position: 'center 35%',
  },
  // 8. https://ibb.co/gbKstkY9 (First occurrence)
  {
    id: 'user-photo-08',
    image: 'https://i.ibb.co/4wrB4hkt/Whats-App-Image-2026-11-10-at-4-25-49-PM-2.jpg',
    fallback: '/images/gallery/user-gallery-08.jpg',
    position: 'center 45%',
  },
  // 9. https://ibb.co/CsnmWG3C
  {
    id: 'user-photo-09',
    image: 'https://i.ibb.co/qFR7xQ3q/Whats-App-Image-2026-11-10-at-4-25-49-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-09.jpg',
    position: 'center 45%',
  },
  // 10. https://ibb.co/kgcsHgDX
  {
    id: 'user-photo-10',
    image: 'https://i.ibb.co/hR8J7RdV/Whats-App-Image-2026-11-10-at-4-25-48-PM.jpg',
    fallback: '/images/gallery/user-gallery-10.jpg',
    position: 'center 45%',
  },
  // Repeated link gbKstkY9 is omitted here to display only once
  // 11. https://ibb.co/RTxhzpmH
  {
    id: 'user-photo-11',
    image: 'https://i.ibb.co/9HFws9LY/Whats-App-Image-2026-11-10-at-4-16-56-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-11.jpg',
    position: 'center 40%',
  },
  // 12. https://ibb.co/35px5SyJ
  {
    id: 'user-photo-12',
    image: 'https://i.ibb.co/Y4c54f7r/Whats-App-Image-2026-11-10-at-4-16-56-PM.jpg',
    fallback: '/images/gallery/user-gallery-12.jpg',
    position: 'center 60%',
  },
  // 13. https://ibb.co/GQRVwKqH
  {
    id: 'user-photo-13',
    image: 'https://i.ibb.co/nMjD2HFP/Whats-App-Image-2026-11-10-at-4-16-55-PM-2.jpg',
    fallback: '/images/gallery/user-gallery-13.jpg',
    position: 'center 38%',
  },
  // 14. https://ibb.co/pv6PmJxN
  {
    id: 'user-photo-14',
    image: 'https://i.ibb.co/nsq0Wzb4/Whats-App-Image-2026-11-10-at-4-16-55-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-14.jpg',
    position: 'center 40%',
  },
  // 15. https://ibb.co/k6cTzrVj
  {
    id: 'user-photo-15',
    image: 'https://i.ibb.co/YTjSJK4m/Whats-App-Image-2026-11-10-at-4-16-55-PM.jpg',
    fallback: '/images/gallery/user-gallery-15.jpg',
    position: 'center 40%',
  },
  // 16. https://ibb.co/gZh2BcZq
  {
    id: 'user-photo-16',
    image: 'https://i.ibb.co/60LMfq09/Whats-App-Image-2026-11-10-at-4-16-54-PM-2.jpg',
    fallback: '/images/gallery/user-gallery-16.jpg',
    position: 'center 38%',
  },
  // 17. https://ibb.co/mVbfcCyL
  {
    id: 'user-photo-17',
    image: 'https://i.ibb.co/RkYRDp6x/Whats-App-Image-2026-11-10-at-4-16-54-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-17.jpg',
    position: 'center 32%',
  },
  // 18. https://ibb.co/nMngzJf6
  {
    id: 'user-photo-18',
    image: 'https://i.ibb.co/Xx32SRpj/Whats-App-Image-2026-11-10-at-4-16-54-PM.jpg',
    fallback: '/images/gallery/user-gallery-18.jpg',
    position: 'center 40%',
  },
  // 19. https://ibb.co/tPwBBzZ9
  {
    id: 'user-photo-19',
    image: 'https://i.ibb.co/qFLBBC0v/Whats-App-Image-2026-11-10-at-4-16-53-PM-2.jpg',
    fallback: '/images/gallery/user-gallery-19.jpg',
    position: 'center 25%',
  },
  // 20. https://ibb.co/ynLsD2h6
  {
    id: 'user-photo-20',
    image: 'https://i.ibb.co/0jPJk5BC/Whats-App-Image-2026-11-10-at-4-16-53-PM.jpg',
    fallback: '/images/gallery/user-gallery-20.jpg',
    position: 'center 55%',
  },
  // 21. https://ibb.co/HDrgm0q3
  {
    id: 'user-photo-21',
    image: 'https://i.ibb.co/d0QKnSDx/Whats-App-Image-2026-11-10-at-4-16-52-PM-2.jpg',
    fallback: '/images/gallery/user-gallery-21.jpg',
    position: 'center 40%',
  },
  // 22. https://ibb.co/3b1kD4N
  {
    id: 'user-photo-22',
    image: 'https://i.ibb.co/RK27xY0/Whats-App-Image-2026-11-10-at-4-16-52-PM-1.jpg',
    fallback: '/images/gallery/user-gallery-22.jpg',
    position: 'center 30%',
  },
  // 23. https://ibb.co/Xf808vJm
  {
    id: 'user-photo-23',
    image: 'https://i.ibb.co/PsQXQfCB/Whats-App-Image-2026-11-10-at-4-16-52-PM.jpg',
    fallback: '/images/gallery/user-gallery-23.jpg',
    position: 'center 45%',
  },
  // 24. https://ibb.co/hJ2Zwv39
  {
    id: 'user-photo-24',
    image: 'https://i.ibb.co/JwrygPDt/Whats-App-Image-2026-11-10-at-4-16-51-PM.jpg',
    fallback: '/images/gallery/user-gallery-24.jpg',
    position: 'center 50%',
  },
  // 25. Existing Generated Gallery Photo 1
  {
    id: 'existing-photo-01',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    position: 'center',
  },
  // 26. Existing Generated Gallery Photo 2
  {
    id: 'existing-photo-02',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    position: 'center',
  },
  // 27. Existing Generated Gallery Photo 3
  {
    id: 'existing-photo-03',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    position: 'center',
  },
  // 28. Existing Generated Gallery Photo 4
  {
    id: 'existing-photo-04',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    position: 'center',
  },
  // 29. Existing Generated Gallery Photo 5
  {
    id: 'existing-photo-05',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    position: 'center',
  },
  // 30. Existing Generated Gallery Photo 6
  {
    id: 'existing-photo-06',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    position: 'center',
  },
];

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[#F8F9F5] min-h-screen overflow-x-hidden">
      <SEO
        title="Gallery | Marca Construction"
        description="Visual portfolio of project execution, architecture, interiors, and installations by Marca Construction in Kerala."
      />

      {/* Full-Width Hero Banner */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center overflow-hidden bg-marca-dark">
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
            Project Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 font-normal max-w-md mx-auto leading-relaxed">
            A visual record of craftsmanship, structural joinery, and site executions.
          </p>
        </div>
      </section>

      {/* Pure Photographic Grid (No titles, captions, labels, numbering, overlays, or badges) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-3.5 lg:gap-4">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedImage(photo.image)}
                className="aspect-square relative w-full overflow-hidden bg-gray-200 cursor-pointer"
              >
                <img
                  src={photo.image}
                  alt="Marca Construction Project Work"
                  loading="lazy"
                  onError={(e) => {
                    if (photo.fallback && e.currentTarget.src !== photo.fallback) {
                      e.currentTarget.src = photo.fallback;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ objectPosition: photo.position || 'center' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pure Image Modal (Photos only, no titles, captions, categories, numbers, or text) */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 cursor-pointer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={selectedImage}
            alt="Marca Construction Project Work Full View"
            className="max-h-[90vh] max-w-[95vw] object-contain select-none cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
