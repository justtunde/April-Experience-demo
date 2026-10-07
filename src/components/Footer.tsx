import React from 'react';
import { AprilLogo } from './AprilLogo';
import { CONTACT_INFO } from '../data/content';
import { Instagram, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070708] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <AprilLogo size="md" variant="full" />
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              April Xperience is the luxury living and bespoke short-let arm of{' '}
              <strong className="text-white">April Realty Trust</strong>. Dedicated to providing pre-verified architectural residences, high-yielding property advisory, and elite hospitality across Lagos, Nigeria.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp Concierge"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Portfolios
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#offerings" className="hover:text-white transition-colors">
                  Curated Acquisitions
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-white transition-colors">
                  The Short-Let Stays
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Visual Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Prime Corridors (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Prime Locations
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Lekki Peninsula Phase 1</li>
              <li>Ikoyi / Banana Island</li>
              <li>Victoria Island & Oniru</li>
              <li>Ajah / Chevron Corridor</li>
            </ul>
          </div>

          {/* Contact Summary (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Advisory Office
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} April Realty Trust. All rights reserved. The April Xperience.</p>
          <div className="flex items-center gap-4">
            <span>Verified Governor’s Consent / C of O Listings Only</span>
            <span aria-hidden="true">·</span>
            <span>Experience The Thrills Of Life</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
