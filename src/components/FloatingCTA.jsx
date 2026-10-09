import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { tourData } from '../data/tourData';

export default function FloatingCTA() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right Actions */}
      <div className="hidden lg:flex fixed right-5 bottom-8 z-40 flex-col items-center gap-3">
        {/* Phone Button */}
        <a
          href={`tel:${tourData.hotline}`}
          className="w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Gọi điện thoại"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="absolute right-14 bg-ink-900 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Gọi {tourData.hotlineFormatted}
          </span>
        </a>

        {/* Facebook Button */}
        <a
          href={tourData.facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-ink-900 hover:bg-ink-800 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Nhắn tin Facebook Suni Studio"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-14 bg-ink-900 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Nhắn tin qua Facebook
          </span>
        </a>

        {/* Floating Liên hệ Button */}
        <a
          href="#booking"
          className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Nhận tư vấn"
        >
          <Calendar className="w-5 h-5" />
          <span className="absolute right-14 bg-ink-900 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Nhận tư vấn
          </span>
        </a>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-ink-800/80 hover:bg-ink-700 text-white flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
