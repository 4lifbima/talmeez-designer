import React, { useState } from 'react';
import { CheckCircle2, Send, X } from 'lucide-react';
import { validateInquiryForm } from '../utils/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Brand Identity',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: defaultService,
    budget: '$5k - $10k',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const services = ['UI/UX Design', 'Web Design', 'Brand Identity', 'Graphic Design'];
  const budgets = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      serviceType: 'Brand Identity',
      budget: '$5k - $10k',
      message: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[92vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Contact Dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 px-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
              Thank you for reaching out! alifbima will review your project requirements and reply within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="bg-[#121316] hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[#ff5520] font-bold text-xs uppercase tracking-widest block mb-1">
                LET'S TALK
              </span>
              <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Start a Project<span className="text-[#ff5520]">.</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Tell me about your project, timeline, and vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Select Service
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setFormData({ ...formData, serviceType: s })}
                      className={`text-xs font-semibold py-2 px-3 rounded-xl border text-center transition-all ${formData.serviceType === s
                          ? 'bg-[#121316] text-white border-[#121316]'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#ff5520] transition"
                  />
                  {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#ff5520] transition"
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Estimated Budget
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`text-xs font-semibold py-1.5 px-2 rounded-lg border text-center transition-all ${formData.budget === b
                          ? 'bg-[#ff5520] text-white border-[#ff5520]'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Project Brief & Goals
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  required
                  placeholder="Describe your brand, project objectives, and any deadlines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#ff5520] transition resize-none"
                />
                {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff5520] hover:bg-[#e04414] text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/25 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
