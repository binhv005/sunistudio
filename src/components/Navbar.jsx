import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { tourData } from '../data/tourData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Giới thiệu", href: "#highlights" },
    { label: "Catalog", href: "#pricing" },
    { label: "Khung hình", href: "#activities" },
    { label: "Hình ảnh", href: "#gallery" },
    { label: "Liên hệ", href: "#location" },
    { label: "FAQ", href: "#faq" }
  ];

  // Trong suốt khi ở đầu trang để không che ảnh hero
  const transparent = !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-screen max-w-full z-50 transition-all duration-300 border-b ${
        transparent
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-cream-200/80'
      } ${isScrolled ? 'py-2' : 'py-2.5 sm:py-3'}`}
      style={{ left: 0, right: 0 }}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between flex-nowrap gap-3 w-full">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center group shrink-0" aria-label="SUNI Studio Ninh Bình">
            <img
              src={tourData.logo}
              alt="Logo SUNI Studio Ninh Bình"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${

                isScrolled ? 'h-16 sm:h-20' : 'h-[5.5rem] sm:h-24 md:h-28'
              }`}
            />
          </a>

          {/* Desktop Nav Links (Single line, no wrap) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 shrink-0 flex-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs xl:text-sm font-semibold transition-colors duration-200 py-1 relative group whitespace-nowrap ${
                  transparent ? 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] hover:text-amber-300' : 'text-ink-900 hover:text-amber-600'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#booking"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold px-5 py-2.5 rounded-full text-xs xl:text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Liên hệ Suni</span>
            </a>
          </div>

          {/* Mobile Right Controls: Liên hệ + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="#booking"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Liên hệ</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg transition-colors focus:outline-none shrink-0 ${
                transparent ? 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]' : 'text-ink-950 hover:bg-ink-50'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-cream-300 px-4 pt-3 pb-6 transition-all animate-fadeIn shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink-900 hover:text-amber-600 text-sm font-semibold py-2 px-3 rounded-lg hover:bg-cream-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-cream-200">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 rounded-xl text-center text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition-colors"
              >
                LIÊN HỆ SUNI
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
