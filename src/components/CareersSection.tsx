import React from 'react';
import { Briefcase, GraduationCap, Factory, HeartHandshake, MapPin, Clock, ArrowRight } from 'lucide-react';

type Variant = 'blue' | 'green';

const theme = (variant: Variant) => {
  const blue = variant === 'blue';
  return {
    border: blue ? 'border-[#DCEAF5]' : 'border-[#BFE4CC]',
    bgSoft: blue ? 'bg-[#F5FAFF]' : 'bg-[#F2FBF4]',
    bgSofter: blue ? 'bg-[#DCEAF5]' : 'bg-[#EAF8EF]',
    heading: blue ? 'text-[#003F82]' : 'text-[#0F6B2B]',
    accent: blue ? 'text-[#1575B3]' : 'text-[#1E8E3E]',
    iconHover: blue
      ? 'group-hover:from-[#1575B3] group-hover:to-[#003F82]'
      : 'group-hover:from-[#1E8E3E] group-hover:to-[#0F6B2B]',
    jobHover: blue ? 'group-hover:text-[#1575B3]' : 'group-hover:text-[#1E8E3E]',
    applyHover: blue
      ? 'hover:from-[#1575B3] hover:to-[#003F82]'
      : 'hover:from-[#1E8E3E] hover:to-[#0F6B2B]'
  };
};

const perks = [
  {
    title: 'Learning & Growth',
    description: 'Continuous upskilling programmes, certifications and clear career paths.',
    icon: GraduationCap
  },
  {
    title: 'Modern Manufacturing',
    description: 'Work with state-of-the-art automated production lines across 4 plants.',
    icon: Factory
  },
  {
    title: 'People First Culture',
    description: 'Safe workplaces, fair policies and recognition that celebrates effort.',
    icon: HeartHandshake
  },
  {
    title: 'Nationwide Impact',
    description: 'Build solutions that empower 1M+ farmers across 23+ Indian states.',
    icon: Briefcase
  }
];

const jobs = [
  {
    title: 'Field Sales Executive',
    department: 'Micro Irrigation Division',
    location: 'Pune, Maharashtra',
    type: 'Full-time'
  },
  {
    title: 'Agronomist / Crop Specialist',
    department: 'Research & Development',
    location: 'Kolhapur, Maharashtra',
    type: 'Full-time'
  },
  {
    title: 'Production Engineer',
    department: 'Manufacturing',
    location: 'Pune, Maharashtra',
    type: 'Full-time'
  },
  {
    title: 'Regional Dealer Manager',
    department: 'Sales & Distribution',
    location: 'Ahmedabad, Gujarat',
    type: 'Full-time'
  }
];

interface CareersSectionProps {
  variant?: Variant;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ variant = 'green' }) => {
  const t = theme(variant);

  const scrollToContact = () => {
    const el = document.getElementById('contact-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="careers" className={`py-16 sm:py-20 bg-[#FFFFFF] border-b ${t.border} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span
            className={`inline-flex items-center gap-2 border text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider shadow-xs ${t.bgSoft} ${t.border} ${t.accent}`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Careers
          </span>
          <h2 className={`text-3xl sm:text-4xl font-medium ${t.heading}`}>
            Grow With Kothari.
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Join a team that is shaping the future of Indian agriculture and water management.
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk) => {
            const IconComp = perk.icon;
            return (
              <div
                key={perk.title}
                className={`group rounded-2xl border p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${t.bgSoft} ${t.border}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-[#FFFFFF] border flex items-center justify-center transition-all group-hover:text-white group-hover:border-transparent bg-gradient-to-br group-hover:bg-gradient-to-br ${t.border} ${t.accent} ${t.iconHover}`}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-base font-medium text-[#111111]">{perk.title}</h3>
                <p className="mt-1.5 text-xs font-light text-[#5F6B7A] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Job Openings */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-[#111111]">Current Openings</h3>
              <p className="text-xs font-light text-[#5F6B7A]">
                4 active roles across sales, agronomy, engineering and distribution.
              </p>
            </div>
            <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${t.accent} ${t.bgSofter} ${t.border}`}>
              Updated Weekly
            </span>
          </div>

          {jobs.map((job) => (
            <div
              key={job.title}
              className={`group bg-[#FFFFFF] rounded-2xl border p-5 sm:p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row sm:items-center gap-4 justify-between ${t.border}`}
            >
              <div className="space-y-1.5">
                <h4 className={`text-lg font-semibold transition-colors ${t.heading} ${t.jobHover}`}>
                  {job.title}
                </h4>
                <p className="text-xs font-light text-[#5F6B7A]">{job.department}</p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-[#5F6B7A]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className={`w-3.5 h-3.5 ${t.accent}`} />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className={`w-3.5 h-3.5 ${t.accent}`} />
                    {job.type}
                  </span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className={`inline-flex items-center gap-2 border px-5 py-2.5 rounded-xl font-medium text-sm transition-all group/btn shrink-0 ${t.bgSoft} ${t.border} ${t.accent} hover:text-white hover:border-transparent bg-gradient-to-r ${t.applyHover}`}
              >
                Apply Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
