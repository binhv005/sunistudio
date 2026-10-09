import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LightboxModal from './components/LightboxModal';
import { tourData } from './data/tourData';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Always scroll to top when page reloads / mounts
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#2b2522] text-ink-950 font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Giới thiệu / Khoảnh khắc của Suni */}
        <Highlights />

        {/* 4. Catalog dịch vụ */}
        <Pricing />

        {/* 5. Mosaic khung hình */}
        <Activities
          onSelectImage={(img) => {
            const idx = tourData.gallery.images.findIndex((item) => item.src === img);
            handleOpenLightbox(idx >= 0 ? idx : 0);
          }}
        />

        {/* 6. Thư viện ảnh */}
        <Gallery
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. Liên hệ & Cơ sở */}
        <LocationSection />

        {/* 8. Form nhận tư vấn */}
        <LeadForm />

        {/* 9. Câu hỏi thường gặp (FAQ) */}
        <FAQ />

        {/* 10. Final CTA Banner */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Sticky Action CTA */}
      <FloatingCTA />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

    </div>
  );
}
