import React, { useEffect, useRef, useState } from 'react';
import { Home2Header } from './Home2Header';
import { Home2Footer } from './Home2Footer';
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Lightbulb,
  MapPin,
  Headphones,
  Users,
  Sprout,
  Handshake,
  Droplets,
  Factory,
  Wrench,
  Newspaper,
  Calendar,
  ChevronRight,
  Quote,
  Eye,
  ShowerHead,
  Filter,
  BadgeCheck,
  Gauge,
  Waves,
  Layers,
  ArrowLeft
} from 'lucide-react';

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const SectionLabel: React.FC<{ children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }> = ({ children, icon }) => {
  const Icon = icon;
  return (
    <span className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] text-[#1575B3] text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider shadow-xs">
      {Icon ? (
        <Icon className="w-3.5 h-3.5" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#1575B3]" />
      )}
      {children}
    </span>
  );
};

const CountUp: React.FC<{ value: number; suffix: string; className?: string }> = ({ value, suffix, className = '' }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

interface HighlightsPanelProps {
  points: Array<{ label: string; image: string; icon: React.ComponentType<{ className?: string }> }>;
  tone: { highlights: string; liBox: string };
}

const HighlightsPanel: React.FC<HighlightsPanelProps> = ({ points, tone }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-full [perspective:1200px]"
      onMouseLeave={() => {
        setFlipped(false);
        setActiveIdx(0);
      }}
    >
      <div
        className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-out ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT: Key Highlights List */}
        <div className="h-full [backface-visibility:hidden] p-8 sm:p-10">
          <div className="space-y-6">
            <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider ${tone.highlights}`}>
              <span className="w-2 h-2 rounded-full bg-current" />
              Key Highlights
            </span>

            <ul className="space-y-4">
              {points.map((pt, i) => {
                const PointIcon = pt.icon;
                return (
                  <li
                    key={pt.label}
                    onMouseEnter={() => {
                      setActiveIdx(i);
                      setFlipped(true);
                    }}
                    onClick={() => {
                      setActiveIdx(i);
                      setFlipped(true);
                    }}
                    className="group/li relative flex items-start gap-3 rounded-xl px-2 py-1 -mx-2 cursor-pointer transition-colors hover:bg-white/80"
                  >
                    <div className={`mt-0.5 w-8 h-8 rounded-xl bg-white border border-[#DCEAF5] flex items-center justify-center shrink-0 transition-colors ${tone.liBox}`}>
                      <PointIcon className="w-4 h-4" />
                    </div>
                    <p className="flex-1 text-sm font-medium text-[#111111] leading-snug pt-1.5">{pt.label}</p>
                    <Eye className="w-4 h-4 text-[#5F6B7A] self-center opacity-0 -translate-x-1 group-hover/li:opacity-100 group-hover/li:translate-x-0 transition-all" />
                  </li>
                );
              })}
            </ul>

           
          </div>
        </div>

        {/* BACK: Product Image */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="relative w-full h-full">
            <img
              src={points[activeIdx].image}
              alt={points[activeIdx].label}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003F82]/85 via-[#003F82]/25 to-transparent" />
            <button
              onClick={() => setFlipped(false)}
              aria-label="Back to highlights"
              className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-[#DCEAF5] text-[#1575B3] flex items-center justify-center hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1575B3] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#DCEAF5]">
              Kothari Products
            </span>
            <div className="absolute bottom-0 inset-x-0 p-6 space-y-1">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-white/85">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CC4EE]" />
                Key Highlight
              </span>
              <p className="text-lg font-medium text-white leading-snug">{points[activeIdx].label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home2: React.FC = () => {
  const divisions = [
    {
      tag: 'Agriculture Division',
      title: 'Micro Irrigation Solutions',
      description: 'Smart irrigation solutions for every crop and every farmer.',
      points: [
        { label: 'Drip Irrigation Systems', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp', icon: Droplets },
        { label: 'Sprinkler Networks', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp', icon: ShowerHead },
        { label: 'Filters & Fertigation', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp', icon: Filter },
        { label: 'PMKSY Subsidy Approved', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp', icon: BadgeCheck }
      ],
      button: 'Explore Agriculture Division',
      icon: Sprout,
      glyph: [Droplets, Wrench],
      green: true
    },
    {
      tag: 'Pipe Division',
      title: 'Agri Pipes | Plumbing Pipes & Fittings',
      description: 'High quality piping solutions for agriculture, plumbing, infrastructure and industries.',
      points: [
        { label: 'Agri Pressure Pipes', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp', icon: Gauge },
        { label: 'CPVC & UPVC Plumbing', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp', icon: Wrench },
        { label: 'SWR Drainage & Fittings', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp', icon: Waves },
        { label: 'BIS & ISO Certified', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp', icon: ShieldCheck }
      ],
      button: 'Explore Pipe Division',
      icon: Factory,
      glyph: [Wrench, Droplets]
    }
  ];

  const whyPoints = [
    {
      number: '01',
      title: 'Trusted Since 1988',
      description: 'Three decades of manufacturing leadership and dependable service across India.',
      icon: Award
    },
    {
      number: '02',
      title: 'High Quality Products',
      description: 'BIS & ISO certified piping engineered for durability and performance.',
      icon: ShieldCheck
    },
    {
      number: '03',
      title: 'Innovative Solutions',
      description: 'Smart, water-saving irrigation technology built for modern agriculture.',
      icon: Lightbulb
    },
    {
      number: '04',
      title: 'Pan India Presence',
      description: 'A robust dealer network spanning 23+ states with rapid delivery.',
      icon: MapPin
    },
    {
      number: '05',
      title: 'Customer First',
      description: 'Responsive support, quick delivery and relationships built on trust.',
      icon: Headphones
    }
  ];

  const impacts = [
    { value: 10, suffix: ' Lakh+', label: 'Farmers Empowered', description: 'Growing stronger harvests with smarter water use.', icon: Users },
    { value: 5, suffix: ' Lakh+', label: 'Hectares Under Irrigation', description: 'Land made productive with efficient drip & sprinkler systems.', icon: Sprout },
    { value: 5000, suffix: '+', label: 'Happy Channel Partners', description: 'A trusted network of dealers and distributors pan India.', icon: Handshake },
    { value: 23, suffix: '+ States', label: 'Pan India Presence', description: 'From farms to infrastructure, we are everywhere you build.', icon: MapPin }
  ];

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg',
      label: 'Micro Irrigation',
      caption: 'Engineered For Every Drop.'
    },
    {
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      label: 'Agri Pipes',
      caption: 'Pressure Pipe Solutions For Every Farm.'
    },
    {
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
      label: 'Plumbing Systems',
      caption: 'Reliable Plumbing Built To Last.'
    }
  ];

  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setHeroSlide((s) => (s + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  const news = [
    
    {
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'Jun 2026',
      category: 'Plumbing Systems',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    },
    {
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'Jul 2026',
      category: 'Micro Irrigation',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg'
    },
    {
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      category: 'Agri & Borewell',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
    }
  ];

  return (
    <div className="text-left">
      <Home2Header />

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003F82] via-[#0B4E8C] to-[#1575B3] text-white">
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-40" />

        {/* Background Image (syncs with hero slide) */}
        {heroSlides.map((slide, i) => (
          <img
            key={`hero-bg-${i}`}
            src={slide.image}
            alt=""
            referrerPolicy="no-referrer"
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === heroSlide ? 'opacity-10' : 'opacity-0'
            }`}
          />
        ))}

        {/* Decorative Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2E9FE3]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#003F82]/60 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-24 sm:pt-28 sm:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT: Text Content */}
          <div className="text-center lg:text-left space-y-7">
            {/* Eyebrow Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
              style={{ animation: 'fadeSlideUp 0.8s 0.1s both' }}
            >
              <ShieldCheck className="w-4 h-4 text-[#7CC4EE]" />
              India's Premier Piping & Irrigation Manufacturer
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight"
              style={{ animation: 'fadeSlideUp 0.8s 0.2s both' }}
            >
              Strong Pipes.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7CC4EE] via-[#A9DAF5] to-[#FFFFFF] mt-1">
                Stronger Tomorrow.
              </span>
            </h1>

            <p
              className="max-w-xl text-sm sm:text-lg font-light text-white/85 leading-relaxed mx-auto lg:mx-0"
              style={{ animation: 'fadeSlideUp 0.8s 0.3s both' }}
            >
              Kothari Group delivers innovative piping solutions that empower agriculture, infrastructure and communities.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              style={{ animation: 'fadeSlideUp 0.8s 0.4s both' }}
            >
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 bg-white text-[#003F82] hover:bg-[#7CC4EE] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-black/20 hover:-translate-y-0.5 group"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 backdrop-blur-md px-7 py-3.5 rounded-xl font-medium text-sm transition-all"
              >
                Our Impact
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Strip */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5 pt-7 border-t border-white/15 max-w-xl mx-auto lg:mx-0"
              style={{ animation: 'fadeSlideUp 0.8s 0.5s both' }}
            >
              {[
                { value: '1988', label: 'Trusted Since' },
                { value: 'ISO 9001', label: 'Certified' },
                { value: 'BIS', label: 'Licensed' },
                { value: '23+', label: 'States Served' }
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5 lg:items-start items-center">
                  <span className="text-lg sm:text-xl font-bold text-white">{item.value}</span>
                  <span className="text-[11px] font-light text-white/70 tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual Composition */}
          <div
            className="relative flex justify-center"
            style={{ animation: 'fadeSlideUp 0.9s 0.35s both' }}
          >
            {/* Rotating Dashed Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[19rem] h-[19rem] sm:w-[26rem] sm:h-[26rem] rounded-full border-2 border-dashed border-white/15 animate-[spinSlow_45s_linear_infinite] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem] sm:w-[21rem] sm:h-[21rem] rounded-full border border-white/10 pointer-events-none" />

            {/* Main Product Image Carousel */}
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl shadow-black/40 rotate-2 transition-transform duration-700">
              {heroSlides.map((slide, i) => (
                <img
                  key={`bg-${i}`}
                  src={slide.image}
                  alt={slide.label}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === heroSlide ? 'opacity-80 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003F82]/75 via-[#0B4E8C]/30 to-[#003F82]/10 pointer-events-none" />

              {/* Slide Chip */}
              <span key={`chip-${heroSlide}`} className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1575B3] text-[10px] font-semibold px-3 py-1.5 rounded-full border border-[#DCEAF5]" style={{ animation: 'fadeSlideUp 0.6s ease-out both' }}>
                <Sprout className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />
                {heroSlides[heroSlide].label}
              </span>

              {/* Slide Caption */}
              <p
                key={`caption-${heroSlide}`}
                className="absolute bottom-10 left-5 right-5 text-lg font-semibold text-white leading-snug"
                style={{ animation: 'fadeSlideUp 0.6s 0.1s ease-out both' }}
              >
                {heroSlides[heroSlide].caption}
              </p>
            </div>

            {/* Floating Stat Card: Top Right */}
            <div
              className="absolute -top-5 right-0 sm:-right-6 bg-white text-[#003F82] rounded-2xl shadow-2xl shadow-black/30 p-3.5 flex items-center gap-3"
              style={{ animation: 'floaty 5s ease-in-out infinite' }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#1575B3] text-white flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">50%+</p>
                <p className="text-[10px] font-medium text-[#5F6B7A] mt-1">Water Saved</p>
              </div>
            </div>

            {/* Floating Stat Card: Bottom Left */}
            <div
              className="absolute -bottom-5 left-0 sm:-left-6 bg-white text-[#003F82] rounded-2xl shadow-2xl shadow-black/30 p-3.5 flex items-center gap-3"
              style={{ animation: 'floaty2 5.5s ease-in-out infinite' }}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">10 Lakh+</p>
                <p className="text-[10px] font-medium text-[#5F6B7A] mt-1">Farmers Empowered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave / Curve */}
        <div className="relative h-10 bg-[#F5FAFF] rounded-t-[3rem]" />
      </section>

      {/* ============================================================
          CHOOSE YOUR SOLUTION
      ============================================================ */}
      <section id="solutions" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <SectionLabel icon={Layers}>Kothari Divisions</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">Choose Your Solution</h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Select the division that best matches your needs.
            </p>
          </Reveal>

          <div className="space-y-8">
            {divisions.map((div, idx) => {
              const IconComp = div.icon;
              const GlyphA = div.glyph[0];
              const isReversed = idx % 2 === 1;
              const green = !!div.green;

              const tone = green
                ? {
                    hoverBorder: 'hover:border-[#1E8E3E]/40',
                    watermark: 'text-[#1E8E3E]/5 group-hover:text-[#1E8E3E]/10',
                    iconTile: 'bg-gradient-to-br from-[#1E8E3E] to-[#0F6B2B]',
                    iconShadow: 'shadow-[#1E8E3E]/25 group-hover:shadow-[#1E8E3E]/40',
                    badge: 'bg-[#34C759]',
                    tag: 'bg-[#EAF8EF] text-[#1E8E3E] border-[#BFE4CC]',
                    heading: 'text-[#1E8E3E]',
                    button: 'bg-[#1E8E3E] hover:bg-[#0F6B2B] shadow-[#1E8E3E]/20',
                    panel: 'bg-[#F2FBF4]',
                    highlights: 'text-[#1E8E3E]',
                    liBox: 'text-[#1E8E3E] group-hover/li:bg-[#1E8E3E]'
                  }
                : {
                    hoverBorder: 'hover:border-[#1575B3]/40',
                    watermark: 'text-[#1575B3]/5 group-hover:text-[#1575B3]/10',
                    iconTile: 'bg-gradient-to-br from-[#1575B3] to-[#0E588A]',
                    iconShadow: 'shadow-[#1575B3]/25 group-hover:shadow-[#1575B3]/40',
                    badge: 'bg-[#2E9FE3]',
                    tag: 'bg-[#F5FAFF] text-[#1575B3] border-[#DCEAF5]',
                    heading: 'text-[#1575B3]',
                    button: 'bg-[#1575B3] hover:bg-[#0E588A] shadow-[#1575B3]/20',
                    panel: 'bg-[#F5FAFF]',
                    highlights: 'text-[#1575B3]',
                    liBox: 'text-[#1575B3] group-hover/li:bg-[#1575B3]'
                  };

              return (
                <Reveal key={idx} delay={idx * 100}>
                  <article className={`group relative bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] shadow-xs hover:shadow-2xl ${tone.hoverBorder} transition-all duration-300 overflow-hidden`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Content Side: Icon + Heading + Description + Button */}
                      <div className={`relative p-8 sm:p-10 space-y-6 overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                        <div className="relative space-y-6">
                          {/* Icon + Tag */}
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="relative shrink-0">
                              <div className={`w-16 h-16 rounded-2xl ${tone.iconTile} text-white flex items-center justify-center  ${tone.iconShadow} group-hover:scale-105 transition-all duration-300`}>
                                <IconComp className="w-8 h-8" />
                              </div>
                              
                            </div>

                         
                          </div>

                          {/* Heading + Description */}
                          <div className="space-y-3">
                            <h3 className={`text-2xl sm:text-3xl font-semibold ${tone.heading} leading-snug`}>{div.title}</h3>
                            <p className="text-sm font-light text-[#5F6B7A] leading-relaxed max-w-xl">{div.description}</p>
                          </div>

                          {/* Button */}
                          <button className={`group/btn inline-flex items-center gap-2.5 text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-md ${tone.button}`}>
                            <span>{div.button}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>

                      {/* Points Side: Flips to Reveal Product Image on Highlight Hover */}
                      <div className={`border-t border-[#DCEAF5] h-full ${tone.panel} ${isReversed ? 'lg:order-1 lg:border-t-0 lg:border-r' : 'lg:border-l'}`}>
                        <HighlightsPanel points={div.points} tone={tone} />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY KOTHARI GROUP?
      ============================================================ */}
      <section id="why-kothari" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#DCEAF5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <SectionLabel icon={Award}>Why Kothari Group?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">
              Built On Trust. Driven By Quality.
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              The values that have made Kothari Group a name farmers and builders trust for over three decades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            {/* Left Feature Panel */}
            <Reveal className="lg:col-span-2">
              <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#003F82] via-[#0B4E8C] to-[#1575B3] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[24rem]">
                <div className="absolute inset-0 blueprint-grid opacity-40" />
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-[#003F82]/60 blur-3xl pointer-events-none" />

                <div className="relative space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                      Three Decades Of Trust, Rooted In Every Pipe.
                    </h3>
                    <p className="text-sm font-light text-white/80 leading-relaxed">
                      From a single extrusion unit to a pan-India partner in water, we keep delivering strength for farms, homes and industries.
                    </p>
                  </div>
                </div>

                <div className="relative grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <p className="text-2xl sm:text-3xl font-bold">35+</p>
                    <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">Years of Excellence</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <p className="text-2xl sm:text-3xl font-bold">23+</p>
                    <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">States Served</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Pillars List */}
            <div className="lg:col-span-3 space-y-4">
              {whyPoints.map((pt, idx) => {
                const IconComp = pt.icon;
                return (
                  <Reveal key={idx} delay={idx * 70}>
                    <div className="group flex items-start gap-5 p-5 sm:p-6 rounded-2xl border border-[#DCEAF5] bg-[#F5FAFF] hover:bg-white hover:border-[#1575B3] hover:shadow-lg transition-all duration-300">
                      <div className="relative shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#DCEAF5] text-[#1575B3] flex items-center justify-center group-hover:bg-[#1575B3] group-hover:text-white group-hover:scale-105 transition-all shadow-xs">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#2E9FE3] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                          {idx + 1}
                        </span>
                      </div>

                      <div className="flex-1 space-y-1.5 pt-1">
                        <h4 className="text-base font-medium text-[#111111] leading-snug">{pt.title}</h4>
                        <p className="text-xs font-light text-[#5F6B7A] leading-relaxed">{pt.description}</p>
                      </div>

                      <ArrowRight className="w-5 h-5 text-[#1575B3] shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR IMPACT
      ============================================================ */}
      <section id="impact" className="relative overflow-hidden bg-[#1575B3] text-white py-16 sm:py-20 scroll-mt-20">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-[#003F82]/50 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider">
              <Droplets className="w-3.5 h-3.5" />
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-white">
              Numbers That Tell Our Story
            </h2>
            <p className="text-sm font-light text-white/80">
              Every pipe laid and every drop saved adds to the growth of Indian agriculture and infrastructure.
            </p>
          </Reveal>

          {/* Glass Stat Panel */}
          <Reveal>
            <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl shadow-[#003F82]/30 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {impacts.map((imp, idx) => {
                  const IconComp = imp.icon;
                  return (
                    <Reveal key={idx} delay={idx * 90} className="h-full">
                      <div className="relative h-full flex flex-col items-center text-center p-7 sm:p-9 border-b border-white/15 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 hover:bg-white/10 transition-colors duration-300">
                        {/* Decorative Glow */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#7CC4EE]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Icon */}
                        <div className="relative">
                          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-black/10">
                            <IconComp className="w-6 h-6" />
                          </div>
                         
                        </div>

                        {/* Count-Up Number */}
                        <CountUp
                          value={imp.value}
                          suffix={imp.suffix}
                          className="mt-5 text-4xl sm:text-[2.75rem] font-bold tracking-tight bg-gradient-to-r from-[#7CC4EE] to-white bg-clip-text text-transparent"
                        />

                        {/* Label + Description */}
                        <h3 className="mt-3 text-sm font-medium text-white">{imp.label}</h3>
                        <p className="mt-1.5 text-[11px] font-light text-white/70 leading-relaxed max-w-[14rem]">
                          {imp.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          NEWS & UPDATES
      ============================================================ */}
      <section id="news" className="py-16 sm:py-20 bg-[#F5FAFF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
            <div className="space-y-3">
              <SectionLabel icon={Newspaper}>Stay Updated</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">News & Updates</h2>
              <p className="text-sm font-light text-[#5F6B7A]">
                The latest from Kothari Group — launches, expansions and industry recognition.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <article className="group bg-[#FFFFFF] rounded-2xl border border-[#DCEAF5] p-5 shadow-xs hover:shadow-xl hover:border-[#1575B3]/30 transition-all flex flex-col justify-between h-full">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#DCEAF5] bg-gradient-to-br from-[#E8F3FB] via-[#F5FAFF] to-[#DCEAF5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-1.5 text-[#1575B3]/50">
                        <Newspaper className="w-8 h-8" />
                        <span className="text-[10px] font-semibold tracking-wider">Image</span>
                      </div>
                    </div>
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1575B3] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#DCEAF5]">
                      {item.category}
                    </span>
                  </div>

                  <div className="pt-4 space-y-2.5 flex-1">
                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#5F6B7A]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <h3 className="text-base font-medium text-[#1575B3] leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-[#5F6B7A] leading-relaxed line-clamp-3">
                      {item.snippet}
                    </p>
                  </div>

                  <a
                    href="#news"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 mt-4 pt-4 border-t border-[#DCEAF5] text-xs font-medium text-[#1575B3] hover:text-[#0E588A] hover:gap-2.5 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex justify-center">
            <button className="inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-7 py-3.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-[#1575B3]/20 hover:-translate-y-0.5 group">
              View All Updates
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA STRIP
      ============================================================ */}

      <Home2Footer />
    </div>
  );
};
