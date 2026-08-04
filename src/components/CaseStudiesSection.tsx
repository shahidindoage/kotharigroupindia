import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { 
  Globe, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Download,
  Building2
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenQuoteModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Aviation & Critical Infrastructure', 'Commercial High-Rise', 'Renewable Energy'];

  const filteredProjects = selectedCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((cs) => cs.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5FAFF] border border-[#DCEAF5] px-3.5 py-1 rounded-lg text-xs font-bold text-[#1575B3]">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Infrastructure Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Trusted In World-Class Infrastructure Projects
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            From International Aviation Hubs To Solar Renewable Mega-Parks & 60+ Storey Luxury Towers, HydroFlow Systems Convey Critical Fluids Safely.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1575B3] text-white shadow-md shadow-[#1575B3]/20'
                  : 'bg-[#F5FAFF] text-[#5F6B7A] border border-[#DCEAF5] hover:border-[#1575B3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F5FAFF] rounded-lg border border-[#DCEAF5] overflow-hidden shadow-xs hover:border-[#1575B3]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#DCEAF5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[#1575B3] text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#5F6B7A] font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1575B3]" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1575B3]" />
                      {project.completionYear}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#1575B3] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-[#5F6B7A] line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="bg-white p-3 rounded-lg border border-[#DCEAF5] space-y-1.5 text-xs">
                    <span className="font-bold text-[#111111] block">
                      Key Engineering Outcomes:
                    </span>
                    {project.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] font-medium text-[#5F6B7A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1575B3] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-[#DCEAF5]/50 flex items-center justify-between text-xs pt-3">
                <div>
                  <span className="text-[10px] font-semibold text-[#5F6B7A] block">Total Piping Deployed</span>
                  <span className="font-extrabold text-[#1575B3]">{project.totalPipingMeters}</span>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="bg-[#1575B3] hover:bg-[#0E588A] text-white px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition"
                >
                  <span>Request Project Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
