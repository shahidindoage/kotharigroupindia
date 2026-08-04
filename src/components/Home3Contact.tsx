import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2, Sprout } from 'lucide-react';

type Variant = 'blue' | 'green';

const theme = (variant: Variant) => {
  const blue = variant === 'blue';
  return {
    border: blue ? 'border-[#DCEAF5]' : 'border-[#BFE4CC]',
    bgSoft: blue ? 'bg-[#F5FAFF]' : 'bg-[#F2FBF4]',
    heading: blue ? 'text-[#003F82]' : 'text-[#0F6B2B]',
    accent: blue ? 'text-[#1575B3]' : 'text-[#1E8E3E]',
    field: blue
      ? 'bg-[#F5FAFF] border-[#DCEAF5] focus:ring-[#1575B3]/30'
      : 'bg-[#F2FBF4] border-[#BFE4CC] focus:ring-[#1E8E3E]/30',
    iconGrad: blue
      ? 'from-[#1575B3] to-[#003F82] shadow-[#1575B3]/20'
      : 'from-[#1E8E3E] to-[#0F6B2B] shadow-[#1E8E3E]/20',
    success: blue ? 'text-[#1575B3]' : 'text-[#1E8E3E]',
    btn: blue
      ? 'from-[#1575B3] to-[#003F82] hover:from-[#0E588A] hover:to-[#003F82] shadow-[#1575B3]/20'
      : 'from-[#1E8E3E] to-[#0F6B2B] hover:from-[#0F6B2B] hover:to-[#0B5623] shadow-[#1E8E3E]/20'
  };
};

const contactInfo = [
  {
    label: 'Call Us',
    value: '+91 1800 120 4343',
    sub: 'Mon–Sat, 9 AM – 6 PM',
    icon: PhoneCall
  },
  {
    label: 'Email Us',
    value: 'enquiry@kotharigroupindia.com',
    sub: 'We reply within 24 hours',
    icon: Mail
  },
  {
    label: 'Visit Us',
    value: '8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    sub: 'Pan-India dealer network',
    icon: MapPin
  }
];

interface Home3ContactProps {
  variant?: Variant;
}

export const Home3Contact: React.FC<Home3ContactProps> = ({ variant = 'green' }) => {
  const t = theme(variant);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: 'Maharashtra',
    interest: 'Drip Irrigation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fieldClass = `w-full px-3.5 py-2.5 border rounded-xl text-sm font-light text-[#111111] focus:outline-none focus:ring-2 focus:bg-white transition ${t.field}`;
  const labelClass = `text-xs font-medium ${t.accent}`;

  return (
    <section id="contact-us" className={`py-16 sm:py-20 bg-white border-t ${t.border} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span
            className={`inline-flex items-center gap-2 bg-[#FFFFFF] border text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider shadow-xs ${t.border} ${t.accent}`}
          >
            <Sprout className="w-3.5 h-3.5" />
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-medium ${t.heading}`}>
            Contact Us
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Have a query about drip systems, subsidy schemes or dealer network? Our agronomy team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* LEFT: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.label}
                  className={`group bg-[#FFFFFF] rounded-2xl border p-5 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-4 ${t.border}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl text-white flex items-center justify-center shadow-md shrink-0 bg-gradient-to-br ${t.iconGrad}`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-[#5F6B7A]">{item.label}</p>
                    <p className="text-sm font-semibold text-[#111111]">{item.value}</p>
                    <p className="text-[11px] font-light text-[#5F6B7A] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            <div className={`rounded-2xl p-6 text-white shadow-lg space-y-3 bg-gradient-to-br ${t.iconGrad}`}>
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold leading-snug">
                Free Farm Visit & Site Survey
              </h3>
              <p className="text-xs font-light text-white/80 leading-relaxed">
                Our engineers visit your farm, analyse soil and water, and design a custom irrigation layout — at no cost.
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className={`lg:col-span-3 bg-[#FFFFFF] rounded-3xl border shadow-xl p-6 sm:p-8 ${t.border} shadow-[#1E8E3E]/10`}>
            {submitted ? (
              <div className="h-full min-h-[24rem] flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 className={`w-14 h-14 ${t.success}`} />
                <h3 className={`text-2xl font-semibold ${t.heading}`}>
                  Thank You For Reaching Out!
                </h3>
                <p className="text-sm font-light text-[#5F6B7A] max-w-md">
                  Your inquiry has been received. A Kothari agronomy expert will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className={labelClass}>State / Region</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={fieldClass}
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

                <div className="space-y-1.5">
                  <label className={labelClass}>Product / Service Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className={fieldClass}
                  >
                    <option value="Drip Irrigation">Drip Irrigation</option>
                    <option value="Sprinkler Irrigation">Sprinkler Irrigation</option>
                    <option value="Filters">Filters</option>
                    <option value="Fertigation">Fertigation</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Dealership Partnership">Dealership Partnership</option>
                    <option value="Subsidy Guidance">Subsidy Guidance</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className={labelClass}>Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your crop, land area and water source..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={fieldClass}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all bg-gradient-to-r ${t.btn}`}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
