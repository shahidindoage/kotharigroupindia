import React, { useState } from 'react';
import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Sprout,
  Factory,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const aboutLinks = [
  { label: 'Our Legacy', target: 'why-kothari' },
  { label: 'Leadership', target: 'why-kothari' },
  { label: 'Careers', target: 'home2-footer' },
  { label: 'Sustainability', target: 'impact' },
  { label: 'News & Media', target: 'news' }
];

const divisionLinks = [
  { label: 'Agriculture Division', sub: 'Micro Irrigation', target: 'solutions', icon: Sprout, accent: 'text-[#1E8E3E] bg-[#EAF8EF]',url:'/home3' },
  { label: 'Pipe Division', sub: 'Agri Pipes, Plumbing Pipes & Fittings', target: 'solutions', icon: Factory, accent: 'text-[#1575B3] bg-[#F5FAFF]' ,url:'/'}
];

const supportLinks = [
  { label: 'Downloads', target: 'home2-footer' },
  { label: 'Dealer Locator', target: 'home2-footer' },
  { label: 'FAQs', target: 'home2-footer' },
  { label: 'Contact Us', target: 'home2-footer' }
];

const socials = [
  { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]',url:'https://www.facebook.com/share/1A8KDDBqTx/?mibextid=wwXIfr' },
  { label: 'LinkedIn', icon: Linkedin, hover: 'hover:bg-[#0A66C2]',url:'https://www.linkedin.com/company/kotharigroupindia/' },
  { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]',url:'https://www.youtube.com/@kotharipipesplumbing' },
  { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]',url:'https://www.instagram.com/kotharigroup_?igsh=MzJ0Ympyb3VoYmk1&utm_source=qr' }
];

export const Home2Footer: React.FC<{ variant?: 'blue' | 'green' }> = ({ variant = 'blue' }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const green = variant === 'green';

  const newsCard = green
    ? 'bg-[#F2FBF4] border-[#BFE4CC]'
    : 'bg-[#F5FAFF] border-[#DCEAF5]';
  const newsHeading = green ? 'text-[#0F6B2B]' : 'text-[#1575B3]';
  const newsInput = green
    ? 'border-[#BFE4CC] focus:ring-[#1E8E3E]/30'
    : 'border-[#DCEAF5] focus:ring-[#1575B3]/30';
  const newsBtn = green
    ? 'bg-[#1E8E3E] hover:bg-[#0F6B2B]'
    : 'bg-[#1575B3] hover:bg-[#0E588A]';

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
    <footer id="home2-footer" className="bg-[#FFFFFF] border-t border-[#DCEAF5] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Newsletter */}
        <div className={`rounded-lg border p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs ${newsCard}`}>
          <div className="space-y-1.5 max-w-xl">
            <h3 className={`text-xl sm:text-2xl font-medium ${newsHeading}`}>
              Subscribe To Kothari Group Updates
            </h3>
            <p className="text-xs font-light text-[#5F6B7A]">
              Get insights on micro irrigation, agri pipes and plumbing innovations, straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto items-center gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className={`px-4 py-3 bg-[#FFFFFF] border rounded-lg text-xs font-light text-[#111111] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 w-full lg:w-64 ${newsInput}`}
            />
            <button
              type="submit"
              className={`text-white px-5 py-3 rounded-lg font-medium text-xs shadow-sm transition shrink-0 ${newsBtn}`}
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Main Sitemap Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="h-18 flex items-center">
              <img
                src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
                alt="Kothari Group Logo"
                referrerPolicy="no-referrer"
                className="h-18 w-auto object-contain max-w-[160px]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <p className="text-xs font-light text-[#5F6B7A] leading-relaxed max-w-sm">
              Kothari Group is a leading piping solutions provider with a strong focus on quality, innovation and sustainability.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-lg bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] flex items-center justify-center transition-all hover:text-white hover:shadow-md ${s.hover}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About Us Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">About Us</h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollToId(link.target)} className="hover:text-[#1575B3] transition">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Divisions */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">Our Divisions</h4>
            <ul className="space-y-3 font-light text-[#5F6B7A]">
              {divisionLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.url}
                      onClick={() => scrollToId(link.target)}
                      className="flex items-start gap-2 text-left hover:text-[#1575B3] transition group"
                    >
                      <span className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${link.accent}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span>
                        <span className="block font-medium text-[#111111] group-hover:text-[#1575B3] transition">{link.label}</span>
                        <span className="block text-[11px] font-light text-[#5F6B7A]">{link.sub}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">Support</h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollToId(link.target)} className="hover:text-[#1575B3] transition">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">Corporate Office</h4>
            <ul className="space-y-3 font-light text-[#5F6B7A]">
              <li className="flex items-start gap-2.5">
              
                <span className="leading-relaxed">
                  8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
               
                <a href="tel:+9120" className="hover:text-[#1575B3] transition">
                  +91 1800 120 4343
                </a>
              </li>
              <li className="flex items-start gap-2.5">
              
                <a href="mailto:info@kotharigroup.com" className="hover:text-[#1575B3] transition break-all">
                  enquiry@kotharigroupindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DCEAF5] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-[#5F6B7A]">
          <p>© 2025 Kothari Group. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <button onClick={() => scrollToId('home2-footer')} className="hover:text-[#1575B3] transition">
              Privacy Policy
            </button>
            <button onClick={() => scrollToId('home2-footer')} className="hover:text-[#1575B3] transition">
              Terms & Conditions
            </button>
            <button onClick={() => scrollToId('home2-footer')} className="hover:text-[#1575B3] transition">
              Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
