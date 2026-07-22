import React, { useState } from 'react';
import { X, PhoneCall, Mail, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: 'Maharashtra',
    category: 'Plumbing Pipes & fittings',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#F5FAFF] border border-[#DCEAF5] text-[#5F6B7A] hover:text-[#1575B3] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <span className="text-[10px] font-extrabold uppercase text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-0.5 rounded-full">
            Kothari Group India
          </span>
          <h3 className="text-2xl font-extrabold text-[#1575B3]">
            Contact Our Technical & Sales Division
          </h3>
          <p className="text-xs font-bold text-[#5F6B7A]">
            Have a project inquiry, dealer network request, or technical specification question? Get in touch with our engineers.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#F5FAFF] border border-emerald-500/30 rounded-2xl p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-extrabold text-[#1575B3]">
              Thank You For Reaching Out!
            </h4>
            <p className="text-xs font-bold text-[#5F6B7A] max-w-md mx-auto">
              Your inquiry has been routed to our regional water management office. A Kothari representative will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#111111]">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Patil"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#111111]">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#111111]">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-extrabold text-[#111111]">State / Region *</label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Other">Other 23+ Indian States</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-[#111111]">Segment Of Interest</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
              >
                <option value="Plumbing Pipes & fittings">Plumbing Pipes & fittings</option>
                <option value="Agri Pipes & fittings">Agri Pipes & fittings</option>
                <option value="Micro Irrigation System">Micro Irrigation System</option>
                <option value="Dealership Partnership">Distributor & Dealership Network</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-extrabold text-[#111111]">Message / Requirements</label>
              <textarea
                rows={3}
                placeholder="Specify requirements, pipe sizes, or land acreage..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] font-bold text-[#5F6B7A] flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>Toll-Free: 1800-233-1234</span>
              </div>

              <button
                type="submit"
                className="bg-[#1575B3] hover:bg-[#0E588A] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
