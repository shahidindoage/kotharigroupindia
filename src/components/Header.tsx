import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  FileText, 
  Sparkles,
  Download,
  Briefcase,
  Mail,
  BookOpen,
  Info,
  Package
} from 'lucide-react';

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
    { id: 'hero', label: 'Home' },
    { id: 'why-kothari', label: 'About' },
    { id: 'categories', label: 'Products' },
    { id: 'knowledge-centre', label: 'Resources' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'contact' && onOpenContactModal) {
      onOpenContactModal();
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
      {/* Top Engineering & Hotline Bar */}
      <div className="bg-[#1575B3] text-white text-xs font-medium py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              ISO 9001 & BIS Certified Excellence
            </span>
            <span className="hidden md:inline-block text-white/90">
              India's Premier Manufacturer Of Plumbing, Agri Pipes & Micro Irrigation Systems
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a href="tel:18001234567" className="flex items-center gap-1.5 hover:text-white/90 transition">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Toll Free: 1800-233-1234</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <button 
              onClick={() => handleNavClick('knowledge-centre')}
              className="hidden sm:flex items-center gap-1 hover:underline text-white/90"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Technical Product Catalogs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="h-18 flex items-center justify-center">
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
         
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-lg font-bold transition-all duration-200 ${
                  isActive 
                    ? 'text-[#1575B3] ' 
                    : 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <div className="relative hidden md:block">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#5F6B7A] absolute left-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Pipes, Drip, Fittings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-semibold text-[#111111] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30 focus:bg-white w-44 xl:w-52 transition-all"
              />
            </div>
          </div>

          {/* Request Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-[#1575B3]/15 hover:shadow-lg transition-all transform active:scale-98"
          >
            <FileText className="w-4 h-4" />
            <span>Get Quotation</span>
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
          <div className="mb-2">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#5F6B7A] absolute left-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Kothari Products & Systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
              />
            </div>
          </div>

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

          <div className="pt-3 border-t border-[#DCEAF5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#1575B3] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Custom Quotation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

