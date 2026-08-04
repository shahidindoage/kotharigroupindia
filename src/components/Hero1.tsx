import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Droplet, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Layers,
  ArrowUpRight,
  Info,
  MapPin,
  Award,
  Users
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenCalculator: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero1: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenCalculator,
  onOpenQuoteModal
}) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  const hotspots = [
    {
      id: 0,
      top: '32%',
      left: '28%',
      title: 'CPVC Hot & Cold Water Pipes',
      description: 'Manufactured for extreme durability with zero scaling, 100% lead-free, designed for 50+ years service.'
    },
    {
      id: 1,
      top: '55%',
      left: '62%',
      title: 'Micro Irrigation Drip Emitters',
      description: 'Clogging-resistant 3D turbulent labyrinth emitters for uniform water & fertigation delivery.'
    },
    {
      id: 2,
      top: '72%',
      left: '38%',
      title: 'Agri UPVC & HDPE Pressure Mains',
      description: 'High burst pressure rating with smooth hydraulic bore that reduces pump power costs by 20%.'
    }
  ];

  const valueProps = [
    {
      icon: Award,
      title: '35+ Years Legacy',
      sub: 'Trusted Name In Water Management'
    },
    {
      icon: MapPin,
      title: '23+ States Reach',
      sub: 'Extensive Dealer & Distributor Network'
    },
    {
      icon: Droplet,
      title: 'Micro Irrigation Pioneers',
      sub: 'Drip & Sprinkler Crop Yield Boosters'
    },
    {
      icon: ShieldCheck,
      title: 'ISO & BIS Certified',
      sub: 'Proven Durable Quality Standards'
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F5FAFF] to-[#F5FAFF] pt-8 pb-16 lg:py-20 border-b border-[#DCEAF5]">
      {/* Background Decorative Blueprint Grid & Smooth Curves */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      
      {/* Fluid Graphic Curves */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none overflow-hidden opacity-30">
        <svg viewBox="0 0 800 800" className="w-full h-full text-[#1575B3]" fill="none">
          <path d="M100,200 Q300,50 500,200 T900,200" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M50,400 Q350,250 600,450 T1000,300" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="500" cy="200" r="8" fill="currentColor" />
          <circle cx="600" cy="450" r="12" fill="currentColor" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] shadow-xs px-3.5 py-1.5 rounded-lg">
              <span className="w-2 h-2 rounded-lg bg-[#1575B3] animate-pulse" />
              <span className="text-xs font-bold text-[#1575B3] tracking-wide">
                Kothari Group India • 35+ Years Of Water Management Excellence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1575B3] leading-[1.12] tracking-tight">
              Empowering India's Water Management & Agriculture Growth
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg font-bold text-[#5F6B7A] max-w-2xl leading-relaxed">
              Leading manufacturer of high-quality Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems built for India's diverse urban and rural infrastructure.
            </p>

            {/* Hero CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="flex items-center gap-2.5 bg-[#1575B3] hover:bg-[#0E588A] text-white px-6 py-3.5 rounded-lg font-bold text-sm sm:text-base shadow-lg shadow-[#1575B3]/25 hover:shadow-xl transition-all transform active:scale-98"
              >
                <span>Explore Products & Segments</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#F5FAFF] text-[#1575B3] border border-[#DCEAF5] hover:border-[#1575B3] px-5 py-3.5 rounded-lg font-bold text-sm sm:text-base shadow-xs hover:shadow-md transition-all"
              >
                <FileText className="w-4 h-4 text-[#1575B3]" />
                <span>Request Project Quotation</span>
              </button>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-4 border-t border-[#DCEAF5]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-[#5F6B7A]">
              <span className="flex items-center gap-1.5 text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-[#1575B3]" />
                Over 1 Million+ Farmers Empowered
              </span>
              <span className="flex items-center gap-1.5 text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-[#1575B3]" />
                23+ States Dealer Distribution
              </span>
              <span className="flex items-center gap-1.5 text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-[#1575B3]" />
                100% Quality & BIS Certified
              </span>
            </div>

          </div>

          {/* Right Hero Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#FFFFFF] p-3 rounded-lg border border-[#DCEAF5] shadow-xl shadow-[#1575B3]/10 overflow-hidden group">
              
              {/* Product Hero Image */}
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#F5FAFF] to-[#DCEAF5]">
                <img
                  src="/src/assets/images/hero_pipes_render_1784717744659.jpg"
                  alt="Kothari Group Piping and Micro Irrigation Solutions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1575B3]/30 via-transparent to-transparent pointer-events-none" />

                {/* Hotspot Markers */}
                {hotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot.id)}
                    style={{ top: spot.top, left: spot.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                      activeHotspot === spot.id 
                        ? 'bg-[#1575B3] text-white ring-4 ring-white shadow-lg scale-110' 
                        : 'bg-white/90 text-[#1575B3] border border-[#1575B3]/40 hover:bg-[#1575B3] hover:text-white'
                    }`}
                    aria-label={spot.title}
                  >
                    <span className="text-xs font-bold">{spot.id + 1}</span>
                  </button>
                ))}

                {/* Hotspot Info Drawer Floating Box */}
                {activeHotspot !== null && (
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-lg border border-[#DCEAF5] shadow-lg text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1575B3]">
                        <Info className="w-3.5 h-3.5" />
                        <span>{hotspots[activeHotspot].title}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B7A] bg-[#F5FAFF] px-1.5 py-0.5 rounded border border-[#DCEAF5]">
                        Kothari Spec
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#111111] mt-1">
                      {hotspots[activeHotspot].description}
                    </p>
                  </div>
                )}
              </div>

              {/* Technical Spec Badge Strip */}
              <div className="mt-3 bg-[#F5FAFF] p-2.5 rounded-lg border border-[#DCEAF5] flex items-center justify-between text-xs font-bold text-[#5F6B7A]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-lg bg-emerald-500" />
                  <span>Kothari Product Innovations</span>
                </div>
                <span className="text-[#1575B3] font-bold">Select Hotspots 1 - 3</span>
              </div>
            </div>
          </div>

        </div>

        {/* Value Proposition Ticker Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FFFFFF] p-4 rounded-lg border border-[#DCEAF5] shadow-xs hover:border-[#1575B3]/50 hover:shadow-md transition-all text-left flex items-start gap-3.5 group"
              >
                <div className="p-2.5 rounded-lg bg-[#F5FAFF] text-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white transition-colors shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1575B3]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#5F6B7A] mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
