import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Sprout, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'why-kothari', label: 'About Kothari Group' },
  { id: 'impact', label: 'Sustainability' }
];

const divisions = [
  {
    id: 'solutions',
    name: 'Agriculture Division',
    desc: 'Drip, sprinklers & micro irrigation.',
    icon: Sprout,
    accent: 'text-[#1E8E3E] bg-[#EAF8EF]',
    url:'/home3'
  },
  {
    id: 'solutions',
    name: 'Pipe Division',
    desc: 'Agri, plumbing & drainage pipes.',
    icon: Factory,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url:'/'
  }
];

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Home2Header: React.FC = () => {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);

  useEffect(() => {
    const ids = ['why-kothari', 'impact', 'solutions'];
    const onScroll = () => {
      const pos = window.scrollY + 160;
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
    setDivOpen(false);
    scrollToId(id);
  };

  const handleGetInTouch = () => {
    setMobileOpen(false);
    setDivOpen(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center gap-4">
        {/* Brand Logo */}
        <Link to='/home2' onClick={() => handleNav('home')} className="flex items-center shrink-0" aria-label="Kothari Group Home">
          <img
            src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
            alt="Kothari Group Logo"
            referrerPolicy="no-referrer"
            className="h-16 sm:h-18 object-contain max-w-[150px] sm:max-w-[180px]"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </Link>

        {/* Right Side: Nav + Actions (aligned to far right) */}
        <div className="ml-auto flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`px-3.5 py-2 rounded-lg text-[18px] font-light transition-all duration-200 ${
                active === item.id
                  ? 'text-[#1575B3]'
                  : 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Our Divisions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDivOpen(true)}
            onMouseLeave={() => setDivOpen(false)}
          >
            <button
              onClick={() => setDivOpen(!divOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[18px] font-light transition-all duration-200 ${
                active === 'solutions'
                  ? 'text-[#1575B3]'
                  : 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
              }`}
            >
              Our Divisions
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${divOpen ? 'rotate-180' : ''}`} />
            </button>

            {divOpen && (
              <div className="absolute right-0 top-full pt-2 w-72">
                <div className="bg-white rounded-lg border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                  {divisions.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <Link to={d.url}
                        key={i}
                        onClick={() => handleNav(d.id)}
                        className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5FAFF] transition-colors text-left"
                      >
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${d.accent}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-[#111111]">{d.name}</span>
                          <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Get in Touch Button */}
        <button
          onClick={handleGetInTouch}
          className="hidden lg:inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md shadow-[#1575B3]/15 hover:shadow-lg transition-all"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setDivOpen(false);
          }}
          className="lg:hidden p-2.5 text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] rounded-lg hover:bg-[#DCEAF5]/50 transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCEAF5] px-4 py-4 space-y-2 shadow-xl">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] border border-transparent hover:border-[#DCEAF5] transition"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Divisions Submenu */}
          <button
            onClick={() => setDivOpen(!divOpen)}
            className="w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
          >
            <span>Our Divisions</span>
            <ChevronDown className={`w-4 h-4 text-[#5F6B7A] transition-transform ${divOpen ? 'rotate-180' : ''}`} />
          </button>
          {divOpen && (
            <div className="pl-4 space-y-1">
              {divisions.map((d, i) => {
                const Icon = d.icon;
                return (
                  <button
                    key={i}
                    onClick={() => handleNav(d.id)}
                    className="w-full flex items-center gap-3 px-3.5 py-3 rounded-lg bg-[#F5FAFF] hover:bg-[#DCEAF5]/40 transition text-left"
                  >
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${d.accent}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-[#111111]">{d.name}</span>
                      <span className="block text-[11px] font-light text-[#5F6B7A]">{d.desc}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <button
            onClick={handleGetInTouch}
            className="w-full flex items-center justify-center gap-2 bg-[#1575B3] text-white py-3 rounded-lg font-medium text-sm mt-3 shadow-sm"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
