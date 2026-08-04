import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  FileText,
  Sparkles,
  Briefcase,
  Mail,
  BookOpen,
  Info,
  Package,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onSelectTab: (sectionId: string) => void;
  activeSection: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenContactModal?: () => void;
  onOpenCareerModal?: () => void;
}

interface MenuItem {
  id?: string;
  label: string;
  children?: { id: string; label: string }[];
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onSelectTab,
  activeSection,
  searchQuery,
  setSearchQuery,
  onOpenContactModal,
  onOpenCareerModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'why-kothari', label: 'About Us' },
    {
      id: 'categories',
      label: 'Products',
      children: [
        { id: 'our-categories', label: 'Agri Pipes' },
        { id: 'our-categories', label: 'Plumbing Pipes & Fittings' },
        { id: 'our-categories', label: 'SWR Pipes & Fittings' },
        { id: 'our-categories', label: 'CPVC Pipes & Fittings' },
        { id: 'our-categories', label: 'Accessories' }
      ]
    },
    {
      id: 'sectors',
      label: 'Solutions',
      children: [
        { id: 'sectors', label: 'Agriculture' },
        { id: 'sectors', label: 'Infrastructure' },
        { id: 'sectors', label: 'Residential' },
        { id: 'sectors', label: 'Commercial' },
        { id: 'sectors', label: 'Industrial' },
        { id: 'sectors', label: 'Municipal' }
      ]
    },
    {
      id: 'projects',
      label: 'Industries',
      children: [
        { id: 'projects', label: 'Case Studies' },
        { id: 'manufacturing-plants', label: 'Project Gallery' },
        { id: 'certifications', label: 'Certifications' }
      ]
    },
    {
      id: 'knowledge-centre',
      label: 'Resources',
      children: [
        { id: 'knowledge-centre', label: 'Catalogues' },
        { id: 'knowledge-centre', label: 'Technical Data' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'downloads', label: 'Downloads' }
      ]
    },
    { id: 'dealer-locator', label: 'Dealer Locator' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id?: string) => {
    if (!id) return;
    setMobileMenuOpen(false);
    setOpenMenu(null);
    if (id === 'home') {
      onSelectTab('hero');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'contact' && onOpenContactModal) {
      onOpenContactModal();
      return;
    }
    if (id === 'dealer-locator' || id === 'downloads') {
      onSelectTab(id);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }
    if (id === 'career' && onOpenCareerModal) {
      onOpenCareerModal();
      return;
    }
    onSelectTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActiveItem = (item: MenuItem) => (item.id ? activeSection === item.id : false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DCEAF5] transition-all">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <Link to="/" className="h-18 flex items-center justify-center">
            <img 
              src="https://kotharigroupindia.com/img/Kothariblue_logo.png" 
              alt="Kothari Group Logo" 
              referrerPolicy="no-referrer"
              className="h-18 object-contain max-w-[160px]"
              onError={(e) => {
                // Fallback icon if image is blocked
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
         
          </Link>
        </div>

        {/* Right Side: Nav + Actions (aligned to far right) */}
        <div className="ml-auto flex items-center gap-3">
          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-base font-light transition-all duration-200 ${
                      isActiveItem(item)
                        ? 'text-[#1575B3]'
                        : 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${openMenu === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {openMenu === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-60">
                      <div className="bg-white rounded-2xl border border-[#DCEAF5] shadow-xl p-2 space-y-0.5">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.id)}
                            className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition-colors"
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
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-base font-light transition-all duration-200 ${
                    isActiveItem(item)
                      ? 'text-[#1575B3]'
                      : 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Enquire Now Button */}
          <button
            onClick={onOpenQuoteModal}
            className="hidden xl:inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm shadow-md shadow-[#1575B3]/15 hover:shadow-lg transition-all transform active:scale-98"
          >
            <ArrowRight className="w-4 h-4" />
            <span>Enquire Now</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] rounded-lg hover:bg-[#DCEAF5]/50 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#DCEAF5] px-4 py-4 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-bold text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
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
                        onClick={() => handleNavClick(child.id)}
                        className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] border border-transparent hover:border-[#DCEAF5] transition"
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
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] flex items-center justify-between border border-transparent hover:border-[#DCEAF5] transition"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#5F6B7A]" />
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
};

