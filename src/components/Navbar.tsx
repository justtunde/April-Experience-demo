import React, { useState, useEffect } from 'react';
import { AprilLogo } from './AprilLogo';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: (propertyTitle?: string) => void;
  currency: 'NGN' | 'USD' | 'GBP';
  setCurrency: (c: 'NGN' | 'USD' | 'GBP') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, currency, setCurrency }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Residences', href: '#offerings' },
    { label: 'The Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
            aria-label="April Xperience Homepage"
          >
            <AprilLogo size="sm" variant="full" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#E5C158] transition-colors duration-200 py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Currency Selector + Book CTA) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Currency Selector */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs font-semibold">
              {(['NGN', 'USD', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                    currency === curr
                      ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-label={`Switch currency to ${curr}`}
                >
                  {curr === 'NGN' ? '₦ NGN' : curr === 'USD' ? '$ USD' : '£ GBP'}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
              title="Chat directly on WhatsApp"
              aria-label="Direct WhatsApp Concierge"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-full transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 whitespace-nowrap active:scale-[0.98]"
            >
              Book an Experience
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Currency toggle for mobile */}
            <button
              onClick={() => {
                const next: Record<'NGN' | 'USD' | 'GBP', 'NGN' | 'USD' | 'GBP'> = {
                  NGN: 'USD',
                  USD: 'GBP',
                  GBP: 'NGN',
                };
                setCurrency(next[currency]);
              }}
              className="px-2 py-1 bg-white/10 rounded-md text-[11px] font-semibold text-[#D4AF37] border border-white/10"
              aria-label="Cycle currency"
            >
              {currency === 'NGN' ? '₦ NGN' : currency === 'USD' ? '$ USD' : '£ GBP'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B0C]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 sm:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="pb-4 border-b border-white/10 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-[#C5A059]">Menu</span>
              <div className="flex gap-2">
                {(['NGN', 'USD', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-1 rounded text-xs ${
                      currency === curr ? 'bg-[#D4AF37] text-black font-bold' : 'text-neutral-400 bg-white/5'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <nav className="flex flex-col space-y-4 text-lg font-serif">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-200 hover:text-[#D4AF37] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] rounded-xl shadow-md"
            >
              Book an Experience
            </button>

            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-medium text-emerald-400 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 bg-emerald-950/20"
            >
              <MessageSquare className="w-4 h-4" />
              Chat Directly on WhatsApp
            </a>

            <div className="text-center pt-2">
              <a
                href={`tel:${CONTACT_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                className="text-xs text-neutral-400 inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
