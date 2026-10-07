import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import conciergeImg from '../assets/images/experience_concierge_lifestyle_1791382157214.jpg';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden border-t border-white/10">
      {/* Background with measured contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={conciergeImg}
          alt="April Xperience twilight lounge terrace in Lagos"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C]/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5C158] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Curated Living · Prime Lagos</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight text-balance">
          Ready to experience <span className="italic text-[#F9E79F]">April Xperience</span>?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Whether you are securing a verified family estate in Lekki, seeking double-digit diaspora rental yield, or reserving an executive holiday suite, we invite you to experience the difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-full transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <span>Book an Experience</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#25D366]/60 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Speak on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
