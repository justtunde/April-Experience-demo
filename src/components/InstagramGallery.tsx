import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, CONTACT_INFO } from '../data/content';
import { Instagram, ExternalLink, X, MapPin, Maximize2 } from 'lucide-react';

export const InstagramGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-3">
              04. The Visual Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Curated moments from @aprilxperience.
            </h2>
            <p className="mt-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              Step inside our private portfolio across Lekki, Ikoyi, and Victoria Island. As showcased across our Instagram journal.
            </p>
          </div>

          {/* Prominent Instagram CTA Button */}
          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#E5C158] hover:to-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 whitespace-nowrap self-start md:self-auto active:scale-[0.98]"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
          </a>
        </div>

        {/* Asymmetric / Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Item 1: Large Featured Landscape (Span 7 cols) */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[0])}
            className="md:col-span-7 group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] bg-neutral-900"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] tracking-widest uppercase text-[#F9E79F] font-semibold block mb-1">
                {GALLERY_ITEMS[0].tag}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {GALLERY_ITEMS[0].location}
              </p>
            </div>
          </div>

          {/* Item 2: Vertical Portrait (Span 5 cols) */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[2])}
            className="md:col-span-5 group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[4/5] md:aspect-auto bg-neutral-900"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] tracking-widest uppercase text-[#F9E79F] font-semibold block mb-1">
                {GALLERY_ITEMS[2].tag}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {GALLERY_ITEMS[2].title}
              </h3>
              <p className="text-xs text-neutral-300 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {GALLERY_ITEMS[2].location}
              </p>
            </div>
          </div>

          {/* Item 3: Medium Landscape (Span 4 cols) */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[1])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[4/3] bg-neutral-900"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] tracking-widest uppercase text-[#F9E79F] font-semibold block mb-1">
                {GALLERY_ITEMS[1].tag}
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                {GALLERY_ITEMS[1].title}
              </h4>
              <p className="text-xs text-neutral-300 mt-0.5">{GALLERY_ITEMS[1].location}</p>
            </div>
          </div>

          {/* Item 4: Medium Landscape (Span 4 cols) */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[3])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[4/3] bg-neutral-900"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] tracking-widest uppercase text-[#F9E79F] font-semibold block mb-1">
                {GALLERY_ITEMS[3].tag}
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                {GALLERY_ITEMS[3].title}
              </h4>
              <p className="text-xs text-neutral-300 mt-0.5">{GALLERY_ITEMS[3].location}</p>
            </div>
          </div>

          {/* Item 5: Medium Landscape (Span 4 cols) */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[4])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[4/3] bg-neutral-900"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] tracking-widest uppercase text-[#F9E79F] font-semibold block mb-1">
                {GALLERY_ITEMS[4].tag}
              </span>
              <h4 className="font-serif text-base font-bold text-white">
                {GALLERY_ITEMS[4].title}
              </h4>
              <p className="text-xs text-neutral-300 mt-0.5">{GALLERY_ITEMS[4].location}</p>
            </div>
          </div>
        </div>

        {/* Instagram Account Footer Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#E5C158]">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-semibold">@aprilxperience</span>
              <span className="text-neutral-500 mx-2">·</span>
              <span>Official Instagram of April Realty Trust</span>
            </div>
          </div>

          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
          >
            <span>View all stories & recent property drops</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] bg-[#121214] border border-white/15 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] md:max-h-[85vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D4AF37] font-semibold tracking-wider uppercase">
                    {activeItem.tag}
                  </span>
                  <span className="text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {activeItem.location}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#C5A059] font-medium">
                  {activeItem.subtitle}
                </p>

                <p className="text-sm text-neutral-300 leading-relaxed pt-2">
                  {activeItem.description}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D4AF37]" />
                  <span>View post on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
