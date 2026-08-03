import React, { useEffect, useRef, useState } from 'react';
import { Home3Header } from './Home3Header';
import { Home2Footer } from './Home2Footer';
import { Home3Hero } from './Home3Hero';
import { HighlightedPoints } from './HighlightedPoints';
import { NewsAndArticles } from './NewsAndArticles';
import { Testimonials } from './Testimonials';
import { LatestBlogPosts } from './LatestBlogPosts';
import {
  ArrowRight,
  Sprout,
  Droplets,
  TrendingUp,
  Zap,
  HandCoins,
  Headphones,
  MapPin,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';const useReveal = () => {
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

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const categories = [
  { num: '01', title: 'Drip Irrigation', description: 'Efficient drip systems that deliver water directly to the root zone.', image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg' },
  { num: '02', title: 'Sprinkler Irrigation', description: 'Uniform water distribution for wide-area coverage.', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp' },
  { num: '03', title: 'Filters', description: 'Remove impurities and protect your drippers and emitters.', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp' },
  { num: '04', title: 'Fertigation', description: 'Precise nutrient application through the irrigation system.', image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg' },
  { num: '05', title: 'Crop Solutions', description: 'Tailored irrigation designs for specific crops.', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp' },
  { num: '06', title: 'Accessories', description: 'Fittings, valves and components for a complete system.', image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg' }
];

const FIELD_IMAGE = 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg';

const crops = [
  { num: '01', name: 'Sugarcane', description: 'Water-efficient ratoon management for higher sugar recovery.', image: 'https://images.pexels.com/photos/37753396/pexels-photo-37753396.jpeg' },
  { num: '02', name: 'Banana', description: 'Uniform soil moisture for strong, healthy bunches.', image: 'https://images.pexels.com/photos/37182860/pexels-photo-37182860.jpeg' },
  { num: '03', name: 'Pomegranate', description: 'Drip schedules that prevent fruit cracking.', image: 'https://images.pexels.com/photos/4021844/pexels-photo-4021844.jpeg' },
  { num: '04', name: 'Grapes', description: 'Precise fertigation for premium vineyard quality.', image: 'https://images.pexels.com/photos/4332365/pexels-photo-4332365.jpeg' },
  { num: '05', name: 'Vegetables', description: 'Steady irrigation for faster, cleaner harvests.', image: 'https://images.pexels.com/photos/4021844/pexels-photo-4021844.jpeg' }
];

const benefits = [
  {
    value: 'Lower Power',
    label: 'Energy Saving',
    description: 'Efficient pumps and low-pressure systems cut energy costs.',
    icon: Zap
  },
  {
    value: 'PMKSY',
    label: 'Government Subsidy Support',
    description: 'We guide you through subsidy applications and documentation.',
    icon: HandCoins
  },
  {
    value: 'ISI Mark',
    label: 'Certified Quality',
    description: 'ISI-marked, BIS-approved products built to last for years.',
    icon: ShieldCheck
  },
  {
    value: '24x7',
    label: 'Expert Support',
    description: 'Agronomists and engineers support you at every stage.',
    icon: Headphones
  }
];

const callouts = [
  {
    title: 'Dealer Locator',
    description: 'Find nearest dealer in your area.',
    icon: MapPin
  },
  {
    title: 'Government Subsidy',
    description: 'Check eligibility and available schemes.',
    icon: ShieldCheck
  },
  {
    title: 'Enquire Now',
    description: 'Fill the form and our team will contact you.',
    icon: PhoneCall
  }
];

export const Home3: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="text-left">
      <Home3Header />

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <Home3Hero />

      {/* ============================================================
          PRODUCT CATEGORIES
      ============================================================ */}
      <section id="products" className="py-16 sm:py-20 bg-[#F5FAFF] border-b border-[#DCEAF5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <SectionLabel icon={Sprout}>Product Categories</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0F6B2B]">
              Complete Micro Irrigation Range
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Everything you need to irrigate smarter, from source to root zone.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* LEFT: Category Tabs */}
            <Reveal className="space-y-3">
              {categories.map((cat, idx) => {
                const active = idx === activeCategory;
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActiveCategory(idx)}
                    onMouseEnter={() => setActiveCategory(idx)}
                    className={`w-full text-left rounded-2xl border transition-all duration-300 p-4 ${
                      active
                        ? 'bg-[#FFFFFF] border-[#1575B3]/30 shadow-lg shadow-[#1575B3]/10'
                        : 'bg-transparent border-transparent hover:bg-white/70 hover:border-[#DCEAF5]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                          active
                            ? 'bg-gradient-to-br from-[#1575B3] to-[#0E588A] text-white shadow-md shadow-[#1575B3]/25'
                            : 'bg-[#F5FAFF] border border-[#DCEAF5] text-[#5F6B7A]'
                        }`}
                      >
                        {cat.num}
                      </span>
                      <h3
                        className={`text-base sm:text-lg transition-colors ${
                          active ? 'text-[#1575B3] font-semibold' : 'text-[#111111] font-medium'
                        }`}
                      >
                        {cat.title}
                      </h3>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        active ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs font-light text-[#5F6B7A] leading-relaxed pl-14">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </Reveal>

            {/* RIGHT: Image Preview */}
            <Reveal delay={100}>
              <div className="relative h-80 lg:h-full min-h-[24rem] rounded-3xl overflow-hidden border border-[#DCEAF5] shadow-xl shadow-[#1575B3]/10">
                <img
                  key={activeCategory}
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  style={{ animation: 'fadeSlideUp 0.5s ease-out both' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003F82]/80 via-[#003F82]/15 to-transparent" />

                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1575B3] text-[10px] font-semibold px-3 py-1.5 rounded-full border border-[#DCEAF5]">
                  {categories[activeCategory].num} · {categories[activeCategory].title}
                </span>

                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                  <h3
                    key={`t-${activeCategory}`}
                    className="text-xl sm:text-2xl font-semibold text-white leading-snug"
                    style={{ animation: 'fadeSlideUp 0.5s 0.05s ease-out both' }}
                  >
                    {categories[activeCategory].title}
                  </h3>
                  <p
                    key={`d-${activeCategory}`}
                    className="mt-1.5 text-xs font-light text-white/80 max-w-md"
                    style={{ animation: 'fadeSlideUp 0.5s 0.1s ease-out both' }}
                  >
                    {categories[activeCategory].description}
                  </p>
                  <button
                    onClick={() => scrollToId('crops')}
                    className="mt-4 inline-flex items-center gap-2 bg-white text-[#1575B3] hover:bg-[#7CC4EE] px-5 py-2.5 rounded-xl font-semibold text-xs transition-all group/link"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          HIGHLIGHTED POINTS & KEY METRICS
      ============================================================ */}
      <HighlightedPoints variant="green" />

      {/* ============================================================
          CROP BASED SOLUTIONS
      ============================================================ */}
      <section id="crops" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#DCEAF5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
            <div className="space-y-3">
              <SectionLabel>Crop Based Solutions</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-medium text-[#0F6B2B]">
                Find the right solution for your crop.
              </h2>
              <p className="text-sm font-light text-[#5F6B7A]">
                Crop-specific irrigation designs for higher yields and healthier plants.
              </p>
            </div>

            <button
              onClick={() => scrollToId('crops')}
              className="inline-flex items-center gap-2 bg-transparent border border-[#1E8E3E] text-[#1E8E3E] hover:bg-[#1E8E3E] hover:text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all group shrink-0"
            >
              View All Crops
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>

          <div className="space-y-4">
            {crops.map((crop) => (
              <div key={crop.name} className="relative">
                <button
                  onClick={() => scrollToId('why')}
                  className="group relative z-10 group-hover:z-30 w-full flex items-center justify-between gap-6 rounded-2xl border border-[#DCEAF5] bg-[#FFFFFF] px-5 sm:px-8 py-5 sm:py-6 hover:bg-gradient-to-r hover:from-[#1E8E3E] hover:to-[#0F6B2B] hover:border-transparent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Hover Image Card */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-36 sm:w-40 aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-black/30 -translate-x-1/2 -translate-y-1/2 scale-50 rotate-3 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-sm font-bold text-[#1E8E3E] group-hover:text-[#A9DDB8] transition-colors">
                      {crop.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] group-hover:text-white transition-colors">
                      {crop.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="hidden md:block text-xs font-light text-[#5F6B7A] group-hover:text-white/80 transition-colors max-w-xs text-right">
                      {crop.description}
                    </p>
                    <ArrowRight className="w-5 h-5 text-[#1E8E3E] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY FARMERS CHOOSE US
      ============================================================ */}
      <section id="why" className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-[#F2FBF4] via-[#FFFFFF] to-[#EAF8EF] border-b border-[#BFE4CC] scroll-mt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <Reveal className="text-center max-w-2xl mx-auto space-y-4">
            <SectionLabel icon={TrendingUp}>Why Farmers Choose Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0F6B2B]">
              Irrigation That Pays For Itself.
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Practical, measurable benefits farmers feel season after season.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            <Reveal className="lg:col-span-2 h-full">
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F6B2B] via-[#1E8E3E] to-[#1575B3] text-white p-8 sm:p-10 flex flex-col justify-between">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#0B3D2E]/70 blur-3xl pointer-events-none" />

                <div className="relative space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sprout className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                      Less Water.<br />More Crop. Every Season.
                    </h3>
                    <p className="text-sm font-light text-white/80 leading-relaxed">
                      Precision delivery keeps soil moisture ideal, so plants thrive and bills shrink — season after season, for over 10 lakh farmers.
                    </p>
                  </div>
                </div>

                <div className="relative grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <Droplets className="w-5 h-5 text-white/80" />
                    <p className="text-2xl sm:text-3xl font-bold mt-2">60%</p>
                    <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">Water Saved</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <TrendingUp className="w-5 h-5 text-white/80" />
                    <p className="text-2xl sm:text-3xl font-bold mt-2">30%</p>
                    <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">Higher Yield</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-3 grid grid-cols-2 gap-4">
              {benefits.map((ben, idx) => {
                const IconComp = ben.icon;
                return (
                  <Reveal key={ben.label} delay={idx * 70} className="h-full">
                    <div className="group bg-[#FFFFFF] rounded-2xl border border-[#BFE4CC] p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-11 h-11 rounded-xl bg-[#F2FBF4] border border-[#BFE4CC] text-[#1E8E3E] flex items-center justify-center group-hover:bg-[#1E8E3E] group-hover:text-white transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold text-[#1E8E3E] bg-[#F2FBF4] border border-[#BFE4CC] rounded-full px-2.5 py-1 leading-none">
                          {ben.value}
                        </span>
                      </div>
                      <h3 className="mt-4 text-sm font-medium text-[#111111] leading-snug">{ben.label}</h3>
                      <p className="mt-1.5 text-xs font-light text-[#5F6B7A] leading-relaxed">{ben.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GET STARTED — MARQUEE
      ============================================================ */}
      <section id="callouts" className="  bg-[#F5FAFF] scroll-mt-20 overflow-hidden">
        

        <Reveal>
          <div className="marquee-mask bg-gradient-to-r from-[#0F6B2B] to-[#1575B3] border-y border-[#DCEAF5]">
            <div className="marquee-pause flex overflow-hidden py-6">
              <div className="marquee-track flex shrink-0 items-center w-max">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex shrink-0 items-center">
                    {callouts.map((call) => {
                      const IconComp = call.icon;
                      return (
                        <button
                          key={call.title}
                          onClick={() => scrollToId('home2-footer')}
                          className="group flex items-center gap-4 shrink-0 px-8 sm:px-10 cursor-pointer"
                        >
                          <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1575B3] transition-colors shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                              {call.title}
                            </p>
                            <p className="text-white/70 text-[11px] leading-tight mt-0.5">
                              {call.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
                          {/* <span className="ml-8 sm:ml-12 w-1.5 h-1.5 rounded-full bg-white/40 select-none" /> */}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============================================================
          NEWS & ARTICLES
      ============================================================ */}
      <NewsAndArticles variant="green" />

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <Testimonials variant="green" />

      {/* ============================================================
          LATEST BLOG POSTS
      ============================================================ */}
      <LatestBlogPosts variant="green" />

      <Home2Footer />
    </div>
  );
};
