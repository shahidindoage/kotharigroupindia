import React, { useState } from 'react';
import { ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Home3Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="home3-footer" className="bg-[#FFFFFF] border-t border-[#BFE4CC] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Top Newsletter & Technical Bulletin CTA Box */}
        <div className="bg-[#F2FBF4] rounded-lg border border-[#BFE4CC] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-medium text-[#0F6B2B]">
              Subscribe To Water Management & Drip Irrigation Updates
            </h3>
            <p className="text-xs font-light text-[#5F6B7A]">
              Receive quarterly technical bulletins on Micro Irrigation Drip Spacing, CPVC Plumbing Standards, and Agri Pipe Specifications across India.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto items-center gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-4 py-3 bg-[#FFFFFF] border border-[#BFE4CC] rounded-lg text-xs font-light text-[#111111] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 focus:ring-[#1E8E3E]/30 w-full lg:w-64"
            />
            <button
              type="submit"
              className="bg-[#1E8E3E] hover:bg-[#0F6B2B] text-white px-5 py-3 rounded-lg font-medium text-xs shadow-sm transition shrink-0"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Main Footer Sitemap Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-22 flex items-center justify-center">
                <img
                  src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
                  alt="Kothari Group Logo"
                  referrerPolicy="no-referrer"
                  className="h-22 w-auto object-contain max-w-[140px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p className="text-xs font-light text-[#5F6B7A] leading-relaxed max-w-sm">
              For over four decades, Kothari Group has empowered farmers and builders with water-wise micro irrigation systems, agri pipes and premium plumbing solutions across India.
            </p>

            <div className="space-y-2 text-xs font-light text-[#5F6B7A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1E8E3E]" />
                <span>Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1E8E3E]" />
                <span>Toll-Free Helpline: 1800 120 4343</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1E8E3E]" />
                <span>Email: enquiry@kotharigroupindia.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: Core Segments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#0F6B2B] text-sm">
              Core Segments
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li>
                <button onClick={() => scrollToId('products')} className="hover:text-[#1E8E3E] transition">
                  Drip Irrigation Systems
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('products')} className="hover:text-[#1E8E3E] transition">
                  Sprinkler Irrigation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('products')} className="hover:text-[#1E8E3E] transition">
                  Filters & Fertigation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('crops')} className="hover:text-[#1E8E3E] transition">
                  Crop Based Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('products')} className="hover:text-[#1E8E3E] transition">
                  Accessories & Fittings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#0F6B2B] text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li>
                <button onClick={() => scrollToId('home')} className="hover:text-[#1E8E3E] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('about-us')} className="hover:text-[#1E8E3E] transition">
                  About Kothari Group
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('news')} className="hover:text-[#1E8E3E] transition">
                  Resources & Knowledge Centre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('careers')} className="hover:text-[#1E8E3E] transition">
                  Career Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToId('contact-us')} className="hover:text-[#1E8E3E] transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#0F6B2B] text-sm">
              Certifications
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>ISO 9001 Quality System</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>BIS IS 15778 / IS 4985</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>IS 13488 Micro Irrigation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>PMKSY Govt. Subsidy Certified</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1E8E3E]" />
                <span>RoHS Lead-Free Formulation</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#BFE4CC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#5F6B7A]">
          <p>
            © 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.
          </p>

          <div className="flex items-center gap-6">
            <button onClick={() => scrollToId('sustainability')} className="hover:text-[#1E8E3E] transition">
              Quality Assurance Policy
            </button>
            <button onClick={() => scrollToId('contact-us')} className="text-[#1E8E3E] font-medium hover:underline">
              Get Quotation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
