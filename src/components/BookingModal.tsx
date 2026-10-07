import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Calendar, User, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceType: initialTopic ? 'property_viewing' : 'shortlet',
    propertyReference: initialTopic || '',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `AXP-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello April Xperience, my name is ${formData.name || 'a prospective client'}. I would like to book/inquire regarding "${
        formData.propertyReference || formData.experienceType
      }". Preferred date: ${formData.preferredDate || 'flexible'}. Please connect me with an executive concierge.`
    );
    window.open(`https://wa.me/2348124009021?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full bg-[#121214] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold block mb-1">
                The April Concierge
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Book an Experience
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Schedule a confidential property viewing or reserve your private luxury stay in Lagos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Experience Type */}
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                  Experience Required
                </label>
                <select
                  value={formData.experienceType}
                  onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="shortlet" className="bg-[#121214]">Curated Short-Let Stay</option>
                  <option value="property_viewing" className="bg-[#121214]">Private Property Viewing</option>
                  <option value="advisory" className="bg-[#121214]">Real Estate Wealth Advisory (Lekki / Ikoyi)</option>
                  <option value="off_market" className="bg-[#121214]">Confidential Off-Market Mandate</option>
                </select>
              </div>

              {/* Property Reference (if preselected) */}
              {formData.propertyReference && (
                <div>
                  <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                    Selected Property / Inquiry
                  </label>
                  <input
                    type="text"
                    value={formData.propertyReference}
                    onChange={(e) => setFormData({ ...formData, propertyReference: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              )}

              {/* Name */}
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Raymond Adeleke"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 ... or +44 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                  Preferred Date / Arrival
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs text-neutral-300 font-medium block mb-1.5">
                  Specific Requests (Airport pickup, chef, diaspora video call)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us any details or preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-colors shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
                >
                  <span>Submit Reservation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 text-xs font-semibold text-[#25D366] border border-[#25D366]/30 bg-[#25D366]/10 rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Dispatch to WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                Reference: {referenceId}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Request Confirmed
              </h3>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Our dedicated April concierge officer has received your dossier and will reach out to you via WhatsApp / telephone within 30 minutes.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`https://wa.me/2348124009021?text=${encodeURIComponent(
                  `Hello April Xperience, I just submitted request #${referenceId} for ${formData.name}. Following up here.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-900/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp Now</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
