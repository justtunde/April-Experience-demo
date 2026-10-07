import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-3">
            05. Client Perspectives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trusted by diaspora homeowners & corporate leaders.
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base leading-relaxed">
            Real feedback from property owners and executive guests across the UK, North America, and Nigeria who entrusted their investments to April Realty Trust.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#121214] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors" />
                <p className="font-serif text-sm sm:text-base text-neutral-200 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-1">
                <p className="font-semibold text-white text-sm">{t.author}</p>
                <p className="text-xs text-[#C5A059]">{t.role}</p>
                <p className="text-[11px] text-neutral-500 pt-1">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
