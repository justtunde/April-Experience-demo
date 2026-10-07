import React from 'react';
import { Shield, Sparkles, Building2, Award } from 'lucide-react';
import exteriorImg from '../assets/images/gallery_architectural_exterior_1791382146005.jpg';
import poolImg from '../assets/images/service_private_pool_terrace_1791382117419.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0E0E10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-3">
            01. The April Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Where architectural discernment meets legal certainty.
          </h2>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition (Editorial Photo Stacking) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={exteriorImg}
                alt="Contemporary architectural facade curated by April Realty Trust"
                className="w-full aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-widest uppercase text-[#E5C158] font-semibold block mb-1">
                  Architectural Integrity
                </span>
                <p className="text-sm font-serif text-white">
                  Contemporary cubic elevations, custom timber louvers & floor-to-ceiling glass in Lekki.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#121214]">
              <img
                src={poolImg}
                alt="Private pool terrace"
                className="w-full h-32 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3">
                <p className="text-xs font-semibold text-white">The Sanctuary Standard</p>
                <p className="text-[11px] text-neutral-400">Private azure pools & acoustic privacy</p>
              </div>
            </div>
          </div>

          {/* Right Editorial Story & Distinction Pillars */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-5 text-neutral-300 text-base md:text-lg leading-relaxed">
              <p className="font-serif text-xl md:text-2xl text-white font-medium italic">
                “Real estate in Lagos shouldn’t be a gamble. It should be a sensory thrill anchored in absolute peace of mind.”
              </p>

              <p>
                Founded under the heritage of <strong className="text-white font-semibold">April Realty Trust</strong>,{' '}
                <strong className="text-[#E5C158] font-semibold">The April Xperience</strong> was born from a singular conviction: discerning homeowners, diaspora investors, and international guests deserve an uncompromising standard of elegance, transparency, and legal rigor.
              </p>

              <p className="text-sm md:text-base text-neutral-400">
                While much of the market operates on speculation, every residence under the April umbrella undergoes rigorous legal title verification—ensuring clean Governor’s Consent or Certificate of Occupancy (C of O)—paired with Italian-fitted finishes, smart automation, and private amenities.
              </p>
            </div>

            {/* Core Values / Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pre-Verified Legal Roots</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Zero community disputes, clean land registry searches, and authentic registered titles before any client inspection.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sensory Luxury</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Fitted designer kitchens, modern POP ceilings, private swimming pools, and seamless indoor-outdoor sanctuaries.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Prime Island Corridors</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Exclusively focused on high-demand, appreciating locales: Lekki Phase 1, Ikoyi, Victoria Island, and Ajah.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Diaspora Stewardship</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Transparent milestone reporting, escrow oversight, and turnkey management for buyers across the UK, US, and Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
