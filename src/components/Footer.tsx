import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Download, 
  CheckCircle2,
  FileCode2,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
  onSelectSection: (id: string) => void;
  onOpenContactModal?: () => void;
  onOpenCareerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onSelectSection,
  onOpenContactModal,
  onOpenCareerModal
}) => {
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
    <footer className="bg-[#FFFFFF] border-t border-[#DCEAF5] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Top Newsletter & Technical Bulletin CTA Box */}
        <div className="bg-[#F5FAFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-xl">
            {/* <span className="bg-[#1575B3] text-white text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Kothari Technical Bulletin
            </span> */}
            <h3 className="text-xl sm:text-2xl font-medium text-[#1575B3]">
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
              className="px-4 py-3 bg-[#FFFFFF] border border-[#DCEAF5] rounded-xl text-xs font-light text-[#111111] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30 w-full lg:w-64"
            />
            <button
              type="submit"
              className="bg-[#1575B3] hover:bg-[#0E588A] text-white px-5 py-3 rounded-xl font-medium text-xs shadow-sm transition shrink-0"
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
              <div className="h-22 flex items-center justify-center ">
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
              India's trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.
            </p>

            <div className="space-y-2 text-xs font-light text-[#5F6B7A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1575B3]" />
                <span>Corporate HQ: Kothari House, Industrial Zone, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1575B3]" />
                <span>Toll-Free Helpline: 1800-233-1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1575B3]" />
                <span>Email: info@kotharigroupindia.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: Product Segments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Core Segments
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li>
                <button onClick={() => onSelectSection('categories')} className="hover:text-[#1575B3] transition">
                  Plumbing Pipes & fittings
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('categories')} className="hover:text-[#1575B3] transition">
                  Agri Pipes & fittings
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('categories')} className="hover:text-[#1575B3] transition">
                  Micro Irrigation System
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('categories')} className="hover:text-[#1575B3] transition">
                  CPVC Hot & Cold Water
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('categories')} className="hover:text-[#1575B3] transition">
                  Submersible Column Pipes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li>
                <button onClick={() => onSelectSection('hero')} className="hover:text-[#1575B3] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('why-kothari')} className="hover:text-[#1575B3] transition">
                  About Kothari Group
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('knowledge-centre')} className="hover:text-[#1575B3] transition">
                  Resources & Knowledge Centre
                </button>
              </li>
              <li>
                <button onClick={onOpenCareerModal} className="hover:text-[#1575B3] transition">
                  Career Opportunities
                </button>
              </li>
              <li>
                <button onClick={onOpenContactModal} className="hover:text-[#1575B3] transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quality & Compliance */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Certifications
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>ISO 9001 Quality System</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>BIS IS 15778 / IS 4985</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>IS 13488 Micro Irrigation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>PMKSY Govt. Subsidy Certified</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>RoHS Lead-Free Formulation</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DCEAF5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#5F6B7A]">
          <p>
            © 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.
          </p>

          <div className="flex items-center gap-6">
            <button onClick={() => onSelectSection('why-kothari')} className="hover:text-[#1575B3] transition">
              Quality Assurance Policy
            </button>
            <button onClick={onOpenQuoteModal} className="text-[#1575B3] font-medium hover:underline">
              Get Quotation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
