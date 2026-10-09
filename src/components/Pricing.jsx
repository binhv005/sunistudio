import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

export default function Pricing() {
  const { catalog } = tourData;

  return (
    <section id="pricing" className="py-10 md:py-14 bg-[#f5f4f2] relative overflow-hidden">
      <Decor tone="gray" variant="a" flipX flipY />
      {/* Background accent */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-3">
            {catalog.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-800/80">
            {catalog.description}
          </p>
        </ScrollReveal>

        {/* Catalog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {catalog.items.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={100 + idx * 150}
              duration={650}
              className={`bg-white rounded-3xl p-0 flex flex-col relative group overflow-hidden transition-all duration-300 ${
                item.featured
                  ? 'border-2 border-amber-400 shadow-elevated'
                  : 'border border-ink-100 shadow-soft hover:shadow-card'
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full shadow-md flex items-center gap-1 z-20">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.badge}</span>
                </div>
              )}

              {/* Main photo */}
              <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                <img
                  src={item.main.src}
                  alt={item.main.alt}
                  loading="lazy"
                  style={{ objectPosition: item.main.pos }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2 mt-2 px-4 sm:px-5">
                {item.thumbs.map((thumb) => (
                  <div key={thumb.src} className="aspect-square rounded-xl overflow-hidden bg-ink-100">
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col flex-1 pt-4 px-4 sm:px-5 pb-4 sm:pb-5">
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-ink-950 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-800/85 leading-relaxed mb-5">
                  {item.desc}
                </p>

                <a
                  href="#gallery"
                  className={`mt-auto w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide text-center transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${
                    item.featured
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white'
                      : 'bg-ink-900 hover:bg-ink-800 text-white'
                  }`}
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
