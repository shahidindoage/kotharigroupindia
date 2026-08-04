import React from 'react';
import { Leaf, Droplets, Zap, Users, ArrowRight, ShieldCheck } from 'lucide-react';

type Variant = 'blue' | 'green';

const theme = (variant: Variant) => {
  const blue = variant === 'blue';
  return {
    bgGrad: blue
      ? 'bg-gradient-to-br from-[#F5FAFF] via-[#FFFFFF] to-[#E8F2FA]'
      : 'bg-gradient-to-br from-[#F2FBF4] via-[#FFFFFF] to-[#EAF8EF]',
    border: blue ? 'border-[#DCEAF5]' : 'border-[#BFE4CC]',
    bgSofter: blue ? 'bg-[#DCEAF5]' : 'bg-[#EAF8EF]',
    heading: blue ? 'text-[#003F82]' : 'text-[#0F6B2B]',
    accentHex: blue ? '#1575B3' : '#1E8E3E',
    accent: blue ? 'text-[#1575B3]' : 'text-[#1E8E3E]',
    btn: blue
      ? 'from-[#1575B3] to-[#003F82] shadow-[#1575B3]/20'
      : 'from-[#1E8E3E] to-[#0F6B2B] shadow-[#1E8E3E]/20',
    btnHover: blue ? 'hover:from-[#0E588A] hover:to-[#003F82]' : 'hover:from-[#0F6B2B] hover:to-[#0B5623]',
    iconGrad: blue
      ? 'from-[#1575B3] to-[#003F82]'
      : 'from-[#1E8E3E] to-[#0F6B2B]'
  };
};

const stats = [
  { value: '2,000+', unit: 'Cr litres', label: 'Water Saved Every Year' },
  { value: '1.2M', unit: 'tonnes', label: 'CO₂ Emissions Offset' },
  { value: '4', unit: 'plants', label: 'Solar-Powered Factories' },
  { value: '1M+', unit: 'farmers', label: 'Empowered Nationwide' }
];

const pillars = [
  {
    title: 'Water Conservation',
    description: 'Precision drip and sprinkler systems cut water usage by up to 60% per acre, protecting groundwater for generations.',
    icon: Droplets
  },
  {
    title: 'Energy Efficiency',
    description: 'Low-pressure systems and solar-powered manufacturing plants reduce the carbon footprint of every product we make.',
    icon: Zap
  },
  {
    title: 'Community & Soil Health',
    description: 'Fertigation enriches soil, while farmer training programmes spread sustainable practices across 23+ states.',
    icon: Users
  }
];

interface SustainabilitySectionProps {
  variant?: Variant;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ variant = 'green' }) => {
  const t = theme(variant);

  const scrollToContact = () => {
    const el = document.getElementById('contact-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="sustainability"
      className={`relative overflow-hidden py-16 sm:py-20 border-b ${t.bgGrad} ${t.border} scroll-mt-20`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span
            className={`inline-flex items-center gap-2 bg-[#FFFFFF] border text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider shadow-xs ${t.border} ${t.accent}`}
          >
            <Leaf className="w-3.5 h-3.5" />
            Sustainability
          </span>
          <h2 className={`text-3xl sm:text-4xl font-medium ${t.heading}`}>
            Growing Responsibly.
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Every drop saved and every watt conserved adds up. Here is how Kothari Group is protecting the planet while feeding its future.
          </p>
        </div>

        {/* Split: Statement + Stat Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#111111] leading-snug">
              Sustainability is not a report.<br />
              <span className={t.accent}>It is how we manufacture.</span>
            </h3>
            <p className="text-sm font-light text-[#5F6B7A] leading-relaxed">
              From water-wise micro irrigation systems to solar-powered production lines, sustainability is engineered into every stage — so farmers save more and the environment loses less.
            </p>

            <div className="space-y-3">
              {[
                'ISO 14001 certified environmental management',
                'Zero-liquid-discharge manufacturing processes',
                'Recyclable, lead-free material formulations'
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${t.bgSofter} ${t.accent}`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-sm font-medium text-[#111111]">{point}</p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all group bg-gradient-to-r ${t.btn} ${t.btnHover}`}
            >
              Learn About Our Initiatives
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stat Tiles */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`bg-[#FFFFFF] rounded-2xl border p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${t.border} ${
                  idx % 2 === 1 ? 'lg:translate-y-6' : ''
                }`}
              >
                <p className={`text-3xl sm:text-4xl font-semibold ${t.accent}`}>
                  {stat.value}
                </p>
                <p className={`text-[11px] font-medium uppercase tracking-wider mt-0.5 ${t.accent}`}>
                  {stat.unit}
                </p>
                <p className="mt-2 text-xs font-light text-[#5F6B7A] leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`group bg-[#FFFFFF] rounded-2xl border p-7 shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${t.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform bg-gradient-to-br ${t.iconGrad} shadow-[#1E8E3E]/20`}
                >
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-[#111111]">{pillar.title}</h3>
                <p className="mt-2 text-xs font-light text-[#5F6B7A] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
