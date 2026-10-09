import React from 'react';
import { Phone, MapPin, Camera } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Footer() {
  return (
    <footer className="relative bg-[#2b2522] text-cream-100 pt-10 sm:pt-14 lg:pt-16 pb-6">
      {/* Top Organic Curved Wave Transition from FinalCTA */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 text-[#2b2522]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 L1440,70 L1440,25 C1080,72 520,-5 0,40 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/15">

          {/* Col 1: Logo & Brand */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0} duration={600} className="space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center justify-center shrink-0">
                  <img
                    src={tourData.logo}
                    alt="Logo SUNI Studio Ninh Bình"
                    loading="lazy"
                    className="h-20 sm:h-24 w-auto object-contain"
                  />
                </div>
                <div>


                </div>
              </div>

              <p className="text-sm text-cream-100/90 font-normal max-w-sm leading-relaxed">
                Suni Studio đồng hành cùng gia đình lưu giữ những khoảnh khắc đáng nhớ của bé yêu và những giây phút sum vầy qua từng khung hình.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={tourData.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-ink-950/80 border border-white/20 hover:bg-amber-500 hover:text-white text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a
                  href={tourData.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-ink-950/80 border border-white/20 hover:bg-amber-500 hover:text-white text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Col 2: Quick Links (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <ScrollReveal direction="up" delay={100} duration={600} className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 drop-shadow-sm">
                Khám Phá
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#highlights" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Giới thiệu</a>
                </li>
                <li>
                  <a href="#pricing" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Catalog dịch vụ</a>
                </li>
                <li>
                  <a href="#activities" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Khung hình của Suni</a>
                </li>
                <li>
                  <a href="#gallery" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Thư viện ảnh</a>
                </li>
                <li>
                  <a href="#location" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Liên hệ & Địa chỉ</a>
                </li>
                <li>
                  <a href="#faq" className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">Câu hỏi thường gặp</a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={200} duration={600} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 drop-shadow-sm">
                Thông Tin Liên Hệ
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${tourData.hotline}`}
                  className="flex items-center gap-3 text-cream-100/90 hover:text-amber-300 font-medium transition-colors group"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Hotline: <strong className="text-white font-bold">{tourData.hotlineFormatted}</strong></span>
                </a>

                {tourData.branches.map((branch) => (
                  <div key={branch.name} className="flex items-start gap-3 text-cream-100/90">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-white font-bold block">{branch.name}</strong>
                      {branch.address}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Copyright & Slogan */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/70">
          <p>© {new Date().getFullYear()} SUNI Studio Ninh Bình. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-amber-300 font-medium text-center sm:text-right">
            <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{tourData.concept}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
