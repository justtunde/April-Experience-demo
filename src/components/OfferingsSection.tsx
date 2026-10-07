import React, { useState } from 'react';
import { PROPERTIES, PropertyItem } from '../data/content';
import { Bed, Bath, Maximize2, ShieldCheck, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface OfferingsSectionProps {
  onSelectProperty: (property: PropertyItem) => void;
  onOpenBooking: (propertyTitle?: string) => void;
  currency: 'NGN' | 'USD' | 'GBP';
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({
  onSelectProperty,
  onOpenBooking,
  currency,
}) => {
  const [filter, setFilter] = useState<'all' | 'acquisition' | 'shortlet' | 'investment'>('all');

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const formatPrice = (p: PropertyItem) => {
    let amount = p.priceNGN;
    let symbol = '₦';

    if (currency === 'USD') {
      amount = p.priceUSD;
      symbol = '$';
    } else if (currency === 'GBP') {
      amount = p.priceGBP;
      symbol = '£';
    }

    const formatted = new Intl.NumberFormat('en-US').format(amount);
    const suffix = p.priceDisplayType === 'per_night' ? ' / night' : '';
    return `${symbol}${formatted}${suffix}`;
  };

  return (
    <section id="offerings" className="py-24 md:py-32 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-3">
              02. Curated Portfolios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured residences & bespoke stays.
            </h2>
            <p className="mt-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              Every property is inspected, title-audited, and curated for high-yield returns or peerless living standards in prime Lagos corridors.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setFilter('acquisition')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                filter === 'acquisition'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              For Acquisition
            </button>
            <button
              onClick={() => setFilter('shortlet')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                filter === 'shortlet'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Curated Short-Lets
            </button>
            <button
              onClick={() => setFilter('investment')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                filter === 'investment'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Wealth Advisory
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="group bg-[#121214] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Slot with Zero Broken Image Resilience */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30" />

                {/* Clean Unboxed Metadata & Category Pill-free text */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    {prop.categoryLabel}
                  </span>
                  {prop.titleDeed && (
                    <span className="text-[10px] font-medium text-[#F3E5AB] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#D4AF37]/30 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                      {prop.titleDeed}
                    </span>
                  )}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => onSelectProperty(prop)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black backdrop-blur-md border border-white/10 transition-all duration-200"
                  title="View full specs"
                  aria-label={`View details for ${prop.title}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Property Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-[#C5A059] font-medium tracking-wide mb-1 flex items-center gap-1">
                    <span>{prop.location}</span>
                    {prop.projectedROI && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-semibold">{prop.projectedROI}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F9E79F] transition-colors leading-snug">
                    {prop.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {prop.tagline}
                  </p>
                </div>

                {/* Specifications Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <strong className="text-white font-semibold tabular-nums">{prop.beds}</strong> Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <strong className="text-white font-semibold tabular-nums">{prop.baths}</strong> Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <strong className="text-white font-semibold tabular-nums">{prop.areaSqM}</strong> m²
                    </span>
                  </div>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      {prop.priceDisplayType === 'per_night' ? 'Nightly Rate' : 'Asking Price'}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#F9E79F] tabular-nums">
                      {formatPrice(prop)}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(prop.title)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>{prop.category === 'shortlet' ? 'Reserve' : 'Inquire'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bespoke Inquiry Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#17171A] via-[#1F1E1B] to-[#17171A] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Seeking an off-market acquisition or custom short-let mandate?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              April Realty Trust handles confidential acquisitions in Banana Island, Ikoyi, and Lekki Phase 1 not published on public listings.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Off-Market Luxury Mandate')}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl whitespace-nowrap transition-colors shrink-0 shadow-lg"
          >
            Request Private Mandate
          </button>
        </div>
      </div>
    </section>
  );
};
