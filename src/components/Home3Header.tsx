import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'why', label: 'About Us' },
  { id: 'products', label: 'Solutions' },
  { id: 'crops', label: 'Crops' },
  { id: 'blog', label: 'Resources' },
  { id: 'callouts', label: 'Dealer Locator' },
  { id: 'home2-footer', label: 'Contact Us' }
];

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Home3Header: React.FC = () => {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = ['why', 'products', 'crops', 'blog', 'callouts'];
    const onScroll = () => {
      const pos = window.scrollY + 180;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= pos) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#BFE4CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center gap-4">
        {/* Brand Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center shrink-0" aria-label="Kothari Group Home">
          <img
            src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
            alt="Kothari Group Logo"
            referrerPolicy="no-referrer"
            className="h-16 sm:h-18 object-contain max-w-[150px] sm:max-w-[180px]"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </button>

        {/* Right Side: Nav + Actions (aligned to far right) */}
        <div className="ml-auto flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3.5 py-2 rounded-lg text-[16px] font-light transition-all duration-200 ${
                  active === item.id
                    ? 'text-[#1E8E3E]'
                    : 'text-[#5F6B7A] hover:text-[#1E8E3E] hover:bg-[#EAF8EF]/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Enquire Now Button */}
          <button
            onClick={() => handleNav('home2-footer')}
            className="hidden xl:inline-flex items-center gap-2 bg-[#1E8E3E] hover:bg-[#0F6B2B] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-md shadow-[#1E8E3E]/15 hover:shadow-lg transition-all"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2.5 text-[#0F6B2B] bg-[#EAF8EF] border border-[#BFE4CC] rounded-xl hover:bg-[#BFE4CC]/50 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-[#BFE4CC] px-4 py-4 space-y-2 shadow-xl">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#EAF8EF] hover:text-[#0F6B2B] border border-transparent hover:border-[#BFE4CC] transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
