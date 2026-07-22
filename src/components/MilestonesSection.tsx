import React from 'react';
import { Flag, Calendar, Award, TrendingUp, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  const milestones = [
    {
      year: '1989',
      title: 'Foundation & Genesis',
      description: 'Established first manufacturing unit with rigid UPVC agricultural pressure pipe extrusion.',
      icon: Factory,
      highlight: 'First UPVC Extrusion Unit'
    },
    {
      year: '1998',
      title: 'BIS Certification & Quality Standard',
      description: 'Achieved IS 4985 BIS licensing & ISO 9001 quality system accreditation for pressure piping.',
      icon: Award,
      highlight: 'ISO 9001 & BIS IS 4985'
    },
    {
      year: '2006',
      title: 'Micro Irrigation Diversification',
      description: 'Launched high-precision inline drip lateral manufacturing & sprinkler irrigation systems.',
      icon: TrendingUp,
      highlight: 'Water-Saving Micro Irrigation'
    },
    {
      year: '2014',
      title: 'CPVC Hot & Cold Water Launch',
      description: 'Introduced lead-free CPVC plumbing systems for high-rise residential & commercial developments.',
      icon: ShieldCheck,
      highlight: 'Lead-Free CPVC Systems'
    },
    {
      year: '2020',
      title: 'Pan-India Footprint (23+ States)',
      description: 'Expanded dealer & distributor network across 23+ states with regional stocking hubs.',
      icon: Flag,
      highlight: '1,000,000+ Farmers Reached'
    },
    {
      year: '2026',
      title: 'Next-Gen Smart Extrusion & Solar Plants',
      description: 'Automated laser-perforated drip lines and solar-powered zero-carbon manufacturing plants.',
      icon: CheckCircle2,
      highlight: 'Zero Carbon & Laser Precision'
    }
  ];

  return (
    <section id="milestones" className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* <span className="bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
            Our Journey & Growth
          </span> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3]">
           Company Milestones
          </h2>
          <p className="text-sm font-bold text-[#5F6B7A]">
            Over 35 years of continuous innovation, expansion, and commitment to transforming India’s water management ecosystem.
          </p>
        </div>

        {/* Timeline Grid / Row */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#DCEAF5] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {milestones.map((m, i) => {
              const IconComp = m.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F5FAFF] rounded-2xl border border-[#DCEAF5] p-6 shadow-xs hover:shadow-xl hover:border-[#1575B3] transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#1575B3] bg-white px-3 py-1 rounded-xl border border-[#DCEAF5]">
                        {m.year}
                      </span>
                      {/* <div className="w-10 h-10 rounded-xl bg-[#1575B3] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div> */}
                    </div>

                    <h3 className="text-lg font-extrabold text-[#111111]">
                      {m.title}
                    </h3>

                    <p className="text-xs font-bold text-[#5F6B7A] leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DCEAF5] flex items-center justify-between text-[11px] font-extrabold text-[#1575B3]">
                    <span className="bg-white border border-[#DCEAF5] px-2.5 py-1 rounded-lg">
                      {m.highlight}
                    </span>
                    {/* <span className="text-[#5F6B7A]">Step 0{i + 1}</span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
