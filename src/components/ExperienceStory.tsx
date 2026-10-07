import React from 'react';
import { CheckCircle2, ShieldCheck, Waves, Wifi, Utensils, KeyRound, Globe, UserCheck } from 'lucide-react';
import kitchenImg from '../assets/images/service_luxury_fitted_kitchen_1791382135755.jpg';
import poolImg from '../assets/images/service_private_pool_terrace_1791382117419.jpg';

export const ExperienceStory: React.FC = () => {
  const touchpoints = [
    {
      icon: ShieldCheck,
      title: 'Pre-Verified Title Guarantee',
      desc: 'No land grabbers, no conflicting ownership claims. Every square meter is verified at the Lagos State Lands Bureau with genuine Governor’s Consent or C of O before you review it.',
    },
    {
      icon: Waves,
      title: 'Private Aquatic & Wellness Enclaves',
      desc: 'Our villas and executive suites feature private swimming pools, acoustic privacy walls, and open-sky sun decks designed for effortless relaxation away from Lagos bustle.',
    },
    {
      icon: Utensils,
      title: 'Designer Fitted Italian Kitchens',
      desc: 'Equipped with waterfall marble islands, integrated Miele & Bosch appliances, soft-close hardware, and bespoke ambient lighting for discerning culinary tastes.',
    },
    {
      icon: Wifi,
      title: 'Uninterrupted 24/7 Clean Power & Starlink',
      desc: 'Guaranteed uninterrupted power via redundant solar-hybrid inverter systems and whisper-quiet generator backups paired with ultra-high-speed fiber and Starlink connectivity.',
    },
    {
      icon: Globe,
      title: 'Seamless Diaspora Stewardship',
      desc: 'For buyers in the UK, North America, and Europe: receive live HD walkthroughs, independent surveyor documentation, and legal closing without leaving your home.',
    },
    {
      icon: KeyRound,
      title: 'Turnkey Concierge Hospitality',
      desc: 'Short-let guests enjoy hotel-grade daily housekeeping, airport VIP transfers, private security escorts on demand, and dedicated on-call private chefs.',
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0E0E10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-3">
            03. The Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Crafted for those who refuse the ordinary.
          </h2>
          <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
            The April Xperience is not just about owning or staying in four walls—it is the sensation of absolute security, sensory comfort, and effortless prestige in West Africa’s most vibrant metropolis.
          </p>
        </div>

        {/* Visual Storytelling Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Narrative Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold">
              The anatomy of an April residence
            </h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              Every detail in an April home is deliberate. From the acoustic ceiling dampening and shadow-line POP architectural reveals to the cool feel of Italian slab porcelain underfoot at twilight.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Smart Home Integration</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Automated climate, smart locks, multi-zone ambient lighting, and surveillance controllable from your smartphone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Precision POP & Shadow-Gap Ceilings</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Architectural lighting profiles with warm 2700K indirect illumination that transforms the evening atmosphere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Multi-Tier Security & Biometrics</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Gated estate access controls, biometric residential access, and optional armed protocol for high-profile travelers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Imagery Duo */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <img
                src={kitchenImg}
                alt="Designer fitted Italian kitchen with Calacatta marble"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#121214] border-t border-white/5">
                <p className="text-xs font-semibold text-white">Fitted Culinary Suites</p>
                <p className="text-[11px] text-neutral-400">Marble islands & built-ins</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group mt-8">
              <img
                src={poolImg}
                alt="Private turquoise swimming pool and sun terrace"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#121214] border-t border-white/5">
                <p className="text-xs font-semibold text-white">Private Lap Pools</p>
                <p className="text-[11px] text-neutral-400">Secluded terrace courtyards</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Grid Touchpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          {touchpoints.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="p-6 rounded-2xl bg-[#121214]/60 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">{t.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
