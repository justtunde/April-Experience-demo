import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/content';
import { MessageSquare, Phone, Mail, MapPin, Instagram, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'acquisition_inquiry',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-3">
            06. Engage The Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Connect with our private advisory desk.
          </h2>
          <p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
            Whether acquiring a flagship residence in Lekki 1, arranging a luxury stay, or managing an off-plan portfolio, our officers are available 24/7.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Verified Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card (Highlighted for mobile usability) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121214] to-[#0A1A10] border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Instant WhatsApp Concierge</h4>
                  <p className="text-[11px] text-neutral-400">Direct response within 15 minutes</p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect directly with our senior luxury relationship manager for immediate listings, video walkthroughs, and reservations.
              </p>

              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25D366]/20 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
              </a>
            </div>

            {/* Other Verified Channels */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 space-y-5 text-xs">
              {/* Instagram */}
              <div className="flex items-start gap-3.5">
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-[11px] uppercase">Official Instagram</span>
                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#D4AF37] font-semibold text-sm transition-colors"
                  >
                    {CONTACT_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-white/5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-[11px] uppercase">Direct Inquiries</span>
                  <p className="text-white font-semibold text-sm">{CONTACT_INFO.phoneDisplay}</p>
                  <p className="text-neutral-400 text-[11px]">{CONTACT_INFO.phoneAlt}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-white/5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-[11px] uppercase">Electronic Mail</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-white hover:text-[#D4AF37] font-semibold text-sm transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Physical Office Location */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-white/5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-[11px] uppercase">Advisory Chambers</span>
                  <p className="text-neutral-200">{CONTACT_INFO.location}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-white/5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 block text-[11px] uppercase">Operations & Concierge</span>
                  <p className="text-neutral-300">{CONTACT_INFO.officeHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#121214] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    Send a Confidential Inquiry
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Our advisory team will review your requirements and respond within the hour.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-neutral-300 font-medium block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Femi Balogun"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-300 font-medium block mb-1">
                      Phone Number (WhatsApp Preferred)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 ... or +44 ..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-neutral-300 font-medium block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-neutral-300 font-medium block mb-1">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="acquisition_inquiry" className="bg-[#121214]">Luxury Residential Acquisition</option>
                      <option value="shortlet_booking" className="bg-[#121214]">April Short-Let Booking</option>
                      <option value="diaspora_advisory" className="bg-[#121214]">Diaspora Wealth & Off-Plan Advisory</option>
                      <option value="asset_management" className="bg-[#121214]">Property & Facility Management</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-neutral-300 font-medium block mb-1">
                    Your Requirements & Timelines
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide desired location (e.g. Lekki Phase 1, Ikoyi), number of bedrooms, budget range, or dates..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Confidential Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formState.name}. Your inquiry has been forwarded directly to the April Realty Trust client desk. You will receive an acknowledgment via WhatsApp / telephone shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
