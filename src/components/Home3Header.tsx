import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface MenuItem {
  id?: string;
  label: string;
  children?: { id: string; label: string }[];
}

const menu: MenuItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'why', label: 'About Us' },
  {
    id: 'products',
    label: 'Solutions',
    children: [
      { id: 'products', label: 'Drip Irrigation' },
      { id: 'products', label: 'Sprinkler Irrigation' },
      { id: 'products', label: 'Filters' },
      { id: 'products', label: 'Fertigation' },
      { id: 'products', label: 'Accessories' }
    ]
  },
  {
    id: 'crops',
    label: 'Crops',
    children: [
      { id: 'crops', label: 'Sugarcane' },
      { id: 'crops', label: 'Banana' },
      { id: 'crops', label: 'Pomegranate' },
      { id: 'crops', label: 'Grapes' },
      { id: 'crops', label: 'Vegetables' },
      { id: 'crops', label: 'Others' }
    ]
  },
  {
    id: 'blog',
    label: 'Resources',
    children: [
      { id: 'blog', label: 'Blog' },
      { id: 'news', label: 'Videos' },
      { id: 'news', label: 'Case Studies' },
      { id: 'callouts', label: 'Subsidy Info' },
      { id: 'home2-footer', label: 'Downloads' }
    ]
  },
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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

  const handleNav = (id?: string) => {
    if (!id) return;
    setMobileOpen(false);
    setOpenMenu(null);
    scrollToId(id);
  };

  const isActiveItem = (item: MenuItem) => (item.id ? active === item.id : false);

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
          <nav className="hidden xl:flex items-center gap-0.5">
            {menu.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[16px] font-light transition-all duration-200 ${
                      isActiveItem(item)
                        ? 'text-[#1E8E3E]'
                        : 'text-[#5F6B7A] hover:text-[#1E8E3E] hover:bg-[#EAF8EF]/60'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openMenu === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openMenu === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-60">
                      <div className="bg-white rounded-2xl border border-[#BFE4CC] shadow-xl p-2 space-y-0.5">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNav(child.id)}
                            className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#EAF8EF] hover:text-[#0F6B2B] transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-[16px] font-light transition-all duration-200 ${
                    isActiveItem(item)
                      ? 'text-[#1E8E3E]'
                      : 'text-[#5F6B7A] hover:text-[#1E8E3E] hover:bg-[#EAF8EF]/60'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
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
        <div className="xl:hidden bg-white border-t border-[#BFE4CC] px-4 py-4 space-y-1 shadow-xl">
          {menu.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#EAF8EF] hover:text-[#0F6B2B] transition"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5F6B7A] transition-transform duration-300 ${openMenu === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {openMenu === item.label && (
                  <div className="pl-4 space-y-0.5 mt-0.5">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNav(child.id)}
                        className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#EAF8EF] hover:text-[#0F6B2B] border border-transparent hover:border-[#BFE4CC] transition"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#EAF8EF] hover:text-[#0F6B2B] border border-transparent hover:border-[#BFE4CC] transition"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
};
