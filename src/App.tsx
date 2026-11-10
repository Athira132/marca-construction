import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyContactActions } from './components/StickyContactActions';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F8F9F5] text-[#11161C] antialiased">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow pt-18 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Services Index */}
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Dedicated Service Pages */}
            <Route
              path="/services/interior-works"
              element={<ServiceDetailPage categorySlug="interior-works" />}
            />
            <Route
              path="/services/roof-works"
              element={<ServiceDetailPage categorySlug="roof-works" />}
            />
            <Route
              path="/services/carpenter-works"
              element={<ServiceDetailPage categorySlug="carpenter-works" />}
            />
            <Route
              path="/services/plumbing-works"
              element={<ServiceDetailPage categorySlug="plumbing-works" />}
            />
            <Route
              path="/services/painting-works"
              element={<ServiceDetailPage categorySlug="painting-works" />}
            />
            <Route
              path="/services/solar-systems"
              element={<ServiceDetailPage categorySlug="solar-systems" />}
            />
            <Route
              path="/services/custom-furniture-epoxy-works"
              element={<ServiceDetailPage categorySlug="custom-furniture-epoxy-works" />}
            />
            <Route
              path="/services/electrical-works"
              element={<ServiceDetailPage categorySlug="electrical-works" />}
            />

            {/* Dynamic slug route fallback for services */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <StickyContactActions />
      </div>
    </Router>
  );
};

export default App;
