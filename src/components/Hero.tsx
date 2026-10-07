import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import heroVillaImg from '../assets/images/hero_luxury_villa_lagos_1791382093541.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreResidences: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreResidences }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroVillaImg}
          alt="April Xperience Contemporary Luxury Villa in Lekki"
          className="w-full h-full object-cover object-center scale-105 animate-[subtleZoom_20s_ease-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Measured cinematic gradient overlay ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 to-[#0B0B0C]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B0B0C]/40 to-[#0B0B0C]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl pt-12 md:pt-20">
          {/* Natural human editorial kicker (anti-pill rule compliant: clean unboxed text) */}
          <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] text-[#E5C158] uppercase font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>April Realty Trust Presents</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>The April Xperience</span>
          </div>

          {/* Main Headline with text-wrap: balance */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            Experience the <span className="italic font-normal text-[#F9E79F]">thrills of life</span> in curated luxury.
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed mb-10 max-w-2xl text-balance">
            Lagos’s distinguished portfolio of pre-verified residential acquisitions, bespoke short-let suites, and discreet real estate wealth management in Lekki, Ikoyi, and Victoria Island.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-xs md:text-sm font-semibold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-full transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <span>Book an Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreResidences}
              className="px-8 py-4 text-xs md:text-sm font-semibold tracking-wider uppercase text-white hover:text-[#E5C158] bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#D4AF37]/50 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Residences</span>
            </button>
          </div>

          {/* Proof / Trust Markers adjacent to hero (clean typography, no pill enclosures) */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 gap-6 text-xs text-neutral-300">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">100% Verified Titles</p>
                <p className="text-neutral-400 text-[11px]">Governor’s Consent & C of O</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Prime Corridors</p>
                <p className="text-neutral-400 text-[11px]">Lekki 1, Ikoyi, V.I. & Ajah</p>
              </div>
            </div>

            <div className="hidden md:flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">24/7 Bespoke Living</p>
                <p className="text-neutral-400 text-[11px]">Clean Power, Pool & Concierge</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-400 text-[10px] tracking-widest uppercase">
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
