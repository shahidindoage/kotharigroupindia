import React from 'react';
import { Sprout, Landmark, Home, Building, Factory, Droplets, ArrowRight } from 'lucide-react';

const sectors = [
  {
    title: 'Agriculture',
    description: 'Agri UPVC pressure pipes, HDPE coils and micro-irrigation systems for farms and borewells.',
    icon: Sprout
  },
  {
    title: 'Infrastructure',
    description: 'Durable piping and cable conduits for roads, airports, substations and large-scale projects.',
    icon: Landmark
  },
  {
    title: 'Residential',
    description: 'CPVC and UPVC plumbing that delivers safe, leak-free water supply for homes.',
    icon: Home
  },
  {
    title: 'Commercial',
    description: 'Reliable hot & cold water and drainage systems for offices, hotels and retail spaces.',
    icon: Building
  },
  {
    title: 'Industrial',
    description: 'Chemical-resistant piping solutions for process lines, plants and factories.',
    icon: Factory
  },
  {
    title: 'Municipal',
    description: 'SWR and water supply networks engineered for towns, cities and public utilities.',
    icon: Droplets
  }
];

export const SectorSolutions: React.FC = () => {
  const scrollToProducts = () => {
    const el = document.getElementById('our-categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="sectors"
      className="bg-[#1575B3] text-white  scroll-mt-20 overflow-hidden text-left"
    >
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-1">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider">
            <Building className="w-3.5 h-3.5" />
            Our Reach
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white">
            Solutions For Every Sector
          </h2>
          <p className="text-sm font-light text-white/80">
            From farm to factory to high-rise, engineered piping and irrigation systems for every application.
          </p>
        </div>
      </div> */}

      <div className="marquee-mask">
        <div className="marquee-pause flex overflow-hidden py-8">
          <div className="marquee-track flex shrink-0 items-center w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {sectors.map((sector) => {
                  const IconComp = sector.icon;
                  return (
                    <button
                      key={sector.title}
                      onClick={scrollToProducts}
                      className="group flex items-center gap-4 shrink-0 px-8 sm:px-10 cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-lg bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1575B3] transition-colors shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                          {sector.title}
                        </p>
                        <p className="text-white/70 text-[11px] leading-tight mt-0.5 max-w-[16rem]">
                          {sector.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
                      {/* <span className="ml-8 sm:ml-12 w-1.5 h-1.5 rounded-lg bg-white/40 select-none" /> */}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
