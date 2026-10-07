/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OfferingsSection } from './components/OfferingsSection';
import { ExperienceStory } from './components/ExperienceStory';
import { InstagramGallery } from './components/InstagramGallery';
import { SocialProofSection } from './components/SocialProofSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { PropertyItem, CONTACT_INFO } from './data/content';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<'NGN' | 'USD' | 'GBP'>('NGN');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState<string>('');
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);

  const handleOpenBooking = (topic?: string) => {
    setBookingTopic(topic || '');
    setIsBookingOpen(true);
  };

  const handleExploreResidences = () => {
    const el = document.getElementById('offerings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#EDEAE2] flex flex-col selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreResidences={handleExploreResidences}
        />

        {/* 2. About / Introduction */}
        <AboutSection />

        {/* 3. Offerings / What We Offer */}
        <OfferingsSection
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onOpenBooking={(title) => handleOpenBooking(title)}
          currency={currency}
        />

        {/* 4. Experience / Why April Xperience */}
        <ExperienceStory />

        {/* 5. Instagram Gallery & Lightbox */}
        <InstagramGallery />

        {/* 6. Social Proof & Attributable Reviews */}
        <SocialProofSection />

        {/* 8. Final Call To Action */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Contact Desk & Inquiry Form */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button for Easy Access */}
      <aside aria-label="Direct Support">
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-black p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group active:scale-95"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageSquare className="w-5 h-5 fill-black text-black" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-1">
            WhatsApp Desk
          </span>
        </a>
      </aside>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTopic={bookingTopic}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBook={(title) => handleOpenBooking(title)}
        currency={currency}
      />
    </div>
  );
}
