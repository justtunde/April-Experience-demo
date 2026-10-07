import React from 'react';
import { PropertyItem, CONTACT_INFO } from '../data/content';
import { X, Bed, Bath, Maximize2, ShieldCheck, Check, MessageSquare, ArrowRight, MapPin } from 'lucide-react';

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onBook: (title: string) => void;
  currency: 'NGN' | 'USD' | 'GBP';
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onBook,
  currency,
}) => {
  if (!property) return null;

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

  const whatsappInquiryUrl = `https://wa.me/2348124009021?text=${encodeURIComponent(
    `Hello April Xperience, I am inquiring about "${property.title}" located at ${property.location}. Please provide availability and full private dossier.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full bg-[#121214] border border-white/15 rounded-2xl overflow-hidden shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white/20 text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Hero Image Banner */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-black overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/40" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-xs text-[#F9E79F] font-semibold uppercase tracking-wider mb-2">
              <span>{property.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                {property.location}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {property.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  <strong className="text-white text-sm font-semibold">{property.beds}</strong>{' '}
                  Bedrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  <strong className="text-white text-sm font-semibold">{property.baths}</strong>{' '}
                  Bathrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  <strong className="text-white text-sm font-semibold">{property.areaSqM}</strong>{' '}
                  m² Built Area
                </span>
              </div>
            </div>

            {property.titleDeed && (
              <div className="flex items-center gap-1.5 text-[#F9E79F] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Title: {property.titleDeed}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Curated Overview
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Key Architectural & Lifestyle Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-neutral-200">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                {property.priceDisplayType === 'per_night' ? 'Nightly Rate' : 'Price / Valuation'}
              </span>
              <span className="font-serif text-2xl font-bold text-[#F9E79F] tabular-nums">
                {formatPrice(property)}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Dossier</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBook(property.title);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#D4AF37]/20"
              >
                <span>{property.category === 'shortlet' ? 'Reserve Stay' : 'Schedule Viewing'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
