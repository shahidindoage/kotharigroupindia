import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronRight,
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

  const navItems = [
    { id: 'home', label: 'Home', url: '/' },
    { id: 'categories', label: 'Products', url: '/' },
    { id: 'our-categories', label: 'Solutions', url: '/' },
    { id: 'sectors', label: 'Industries', url: '/' },
    { id: 'knowledge-centre', label: 'Resources', url: '/' },
    { id: 'dealer-locator', label: 'Dealer Locator', url: '/' },
    { id: 'contact', label: 'Contact Us', url: '/' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      onSelectTab('hero');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'contact' && onOpenContactModal) {
      onOpenContactModal();
      return;
    }
    if (id === 'dealer-locator') {
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
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                to={item.url}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-base font-light transition-all duration-200 ${
                    isActive 
                      ? 'text-[#1575B3] ' 
                      : 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Enquire Now Button */}
          <button
            onClick={onOpenQuoteModal}
            className="hidden lg:inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm shadow-md shadow-[#1575B3]/15 hover:shadow-lg transition-all transform active:scale-98"
          >
            <ArrowRight className="w-4 h-4" />
            <span>Enquire Now</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl hover:bg-[#DCEAF5]/50 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCEAF5] px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-bold text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] flex items-center justify-between border border-transparent hover:border-[#DCEAF5] transition"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#5F6B7A]" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

