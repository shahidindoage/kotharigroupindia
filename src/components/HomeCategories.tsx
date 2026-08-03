import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';

const categories = [
  {
    num: '01',
    title: 'Agri Pipes',
    description: 'Rigid UPVC pressure pipes, HDPE coils and submersible column pipes built for borewells and farmland.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
  },
  {
    num: '02',
    title: 'Plumbing Pipes & Fittings',
    description: 'UPVC and CPVC plumbing systems with solvent-welded fittings for dependable water supply.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
  },
  {
    num: '03',
    title: 'SWR Pipes & Fittings',
    description: 'Soil, waste and rainwater drainage systems with acoustic, leak-proof performance.',
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
  },
  {
    num: '04',
    title: 'CPVC Pipes & Fittings',
    description: 'High-temperature CPVC hot & cold water systems for homes and commercial buildings.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
  },
  {
    num: '05',
    title: 'Accessories',
    description: 'Valves, couplers, elbows and every fitting needed to complete your piping system.',
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
  }
];

export const HomeCategories: React.FC = () => {
  const [active, setActive] = useState(0);

  const scrollToProducts = () => {
    const el = document.getElementById('categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="our-categories" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#DCEAF5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            Our Product Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">
            Complete Range of Piping Solutions
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Everything you need for agriculture, plumbing, drainage and industrial applications — from one trusted manufacturer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Category Tabs */}
          <div className="space-y-3">
            {categories.map((cat, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActive(idx)}
                  onMouseEnter={() => setActive(idx)}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 p-4 ${
                    isActive
                      ? 'bg-[#F5FAFF] border-[#1575B3]/30 shadow-lg shadow-[#1575B3]/10'
                      : 'bg-transparent border-transparent hover:bg-[#F5FAFF]/60 hover:border-[#DCEAF5]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-gradient-to-br from-[#1575B3] to-[#0E588A] text-white shadow-md shadow-[#1575B3]/25'
                          : 'bg-[#F5FAFF] border border-[#DCEAF5] text-[#5F6B7A]'
                      }`}
                    >
                      {cat.num}
                    </span>
                    <h3
                      className={`text-base sm:text-lg transition-colors ${
                        isActive ? 'text-[#1575B3] font-semibold' : 'text-[#111111] font-medium'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
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
          </div>

          {/* RIGHT: Image Preview */}
          <div className="relative h-80 lg:h-full min-h-[24rem] rounded-3xl overflow-hidden border border-[#DCEAF5] shadow-xl shadow-[#1575B3]/10">
            <img
              key={active}
              src={categories[active].image}
              alt={categories[active].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              style={{ animation: 'fadeSlideUp 0.5s ease-out both' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003F82]/80 via-[#003F82]/15 to-transparent" />

            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1575B3] text-[10px] font-semibold px-3 py-1.5 rounded-full border border-[#DCEAF5]">
              {categories[active].num} · {categories[active].title}
            </span>

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <h3
                key={`t-${active}`}
                className="text-xl sm:text-2xl font-semibold text-white leading-snug"
                style={{ animation: 'fadeSlideUp 0.5s 0.05s ease-out both' }}
              >
                {categories[active].title}
              </h3>
              <p
                key={`d-${active}`}
                className="mt-1.5 text-xs font-light text-white/80 max-w-md"
                style={{ animation: 'fadeSlideUp 0.5s 0.1s ease-out both' }}
              >
                {categories[active].description}
              </p>
              <button
                onClick={scrollToProducts}
                className="mt-4 inline-flex items-center gap-2 bg-white text-[#1575B3] hover:bg-[#7CC4EE] px-5 py-2.5 rounded-xl font-semibold text-xs transition-all group/link"
              >
                View Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
