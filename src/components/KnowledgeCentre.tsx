import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  Wrench,
  Sprout,
  Droplets,
  Layers
} from 'lucide-react';

export const KnowledgeCentre: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Plumbing Pipes And Fittings' | 'Agri Pipes And Fittings' | 'Micro Irrigation System'>('Plumbing Pipes And Fittings');

  const knowledgeData = {
    'Plumbing Pipes And Fittings': {
      title: 'Plumbing Pipes & Fittings Engineering Standards',
      subtitle: 'Technical manuals, installation best practices, and hydraulic pressure loss calculations for CPVC and UPVC plumbing.',
      description: 'CPVC and UPVC plumbing systems demand rigorous thermal derating, solvent welding precision, and pressure class selection. Learn how Kothari CPVC hot and cold piping prevents scale build-up and maintains drinking water purity.',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
      keySpecs: [
        'ASTM F441 / ASTM D2846 Class 23447 Chlorinated Compound',
        'Operates up to 93°C continuous hot water without thermal distortion',
        'Solvent Cement Bonding Time: 15-30 seconds quick set',
        'SWR Drainage Noise Class: Dampens acoustic fluid turbulence below 15 dB'
      ],
      guides: [
        { name: 'Kothari CPVC & UPVC Plumbing Technical Manual (.PDF)', size: '4.2 MB' },
        { name: 'SWR Soundproof Drainage Installation Diagram (.DWG)', size: '8.1 MB' },
        { name: 'CPVC Solvent Cement Curing Time & Jointing Guide', size: '2.5 MB' }
      ]
    },
    'Agri Pipes And Fittings': {
      title: 'Agri Pipes & Fittings Field Installation Guide',
      subtitle: 'Guidelines for underground UPVC agricultural mains, HDPE coil laying, and deep borewell column pipe torque limits.',
      description: 'Indian farm conditions require heavy surge pressure handling and soil settlement flexibility. Kothari Agri UPVC pressure pipes and square-threaded submersible column pipes are engineered for seamless pump-to-field delivery.',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
      keySpecs: [
        'IS 4985 UPVC Pressure Ratings: Class 1 (2.5 Bar) to Class 5 (12.5 Bar)',
        'HDPE PE-100 Coil Pipes: 100m to 500m jointless lengths',
        'Submersible Column Pipe Square Threads: High torque grip with synthetic rubber seals',
        'Friction Head Loss Savings: Glass-smooth interior reduces pump electricity costs'
      ],
      guides: [
        { name: 'Agricultural Pressure Pipe Hydraulic Sizing Chart (.PDF)', size: '3.8 MB' },
        { name: 'Submersible Column Pipe Installation & Torque Limits', size: '1.9 MB' },
        { name: 'HDPE Butt Fusion & Compression Fitting Manual', size: '5.4 MB' }
      ]
    },
    'Micro Irrigation System': {
      title: 'Micro Irrigation System Design & Fertigation Guide',
      subtitle: 'Comprehensive design principles for drip irrigation laterals, sprinkler throw radii, and filter station flushing.',
      description: 'Micro irrigation transforms crop productivity while conserving water. Kothari Labyrinth Drip Emitters and Sprinklers optimize discharge uniformity and allow precise liquid fertilizer dosing across all soil types.',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
      keySpecs: [
        'Inline Drip Emitters: 3D turbulent labyrinth resists clogging from silt/algae',
        'Pressure Compensating (PC) Emitters: Uniform 2 LPH & 4 LPH discharge from 0.5 to 3.0 Bar',
        'Sprinkler Coverage: Dual nozzle brass impact heads with 12m to 18m spray radius',
        'Hydro-Cyclone Sand Separators: Removes heavy sand particles before secondary disc filters'
      ],
      guides: [
        { name: 'Crop-Wise Drip Spacing & Fertigation Schedule (.PDF)', size: '6.1 MB' },
        { name: 'Hydro-Cyclone & Disc Filter Cleaning Procedures', size: '2.1 MB' },
        { name: 'PMKSY Micro Irrigation Subsidy Scheme Documentation', size: '3.5 MB' }
      ]
    }
  };

  const currentContent = knowledgeData[activeTab];

  return (
    <section id="knowledge-centre" className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DCEAF5]">
          <div className="space-y-2 max-w-2xl">
            {/* <span className="bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Technical Resources & Specs
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3]">
              Knowledge Centre
            </h2>
            <p className="text-sm font-bold text-[#5F6B7A]">
              Access engineering documentation, installation guidelines, dimension matrices, and field manuals for Kothari systems.
            </p>
          </div>

          {/* Knowledge Centre Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F5FAFF] p-1.5 rounded-2xl border border-[#DCEAF5] shrink-0">
            <button
              onClick={() => setActiveTab('Plumbing Pipes And Fittings')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
                activeTab === 'Plumbing Pipes And Fittings'
                  ? 'bg-[#1575B3] text-white shadow-sm'
                  : 'text-[#5F6B7A] hover:text-[#1575B3]'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Plumbing Pipes And Fittings</span>
            </button>

            <button
              onClick={() => setActiveTab('Agri Pipes And Fittings')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
                activeTab === 'Agri Pipes And Fittings'
                  ? 'bg-[#1575B3] text-white shadow-sm'
                  : 'text-[#5F6B7A] hover:text-[#1575B3]'
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>Agri Pipes And Fittings</span>
            </button>

            <button
              onClick={() => setActiveTab('Micro Irrigation System')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
                activeTab === 'Micro Irrigation System'
                  ? 'bg-[#1575B3] text-white shadow-sm'
                  : 'text-[#5F6B7A] hover:text-[#1575B3]'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Micro Irrigation System</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#F5FAFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          
          {/* Left Text & Manual Downloads */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1575B3] bg-white border border-[#DCEAF5] px-2.5 py-0.5 rounded-full">
                {activeTab}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1575B3]">
                {currentContent.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#5F6B7A]">
                {currentContent.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#111111] leading-relaxed">
              {currentContent.description}
            </p>

            {/* Technical Highlights Checklist */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold  tracking-wider text-[#1575B3]">
                Technical Parameters
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold">
                {currentContent.keySpecs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#DCEAF5]">
                    <CheckCircle2 className="w-4 h-4 text-[#1575B3] shrink-0 mt-0.5" />
                    <span className="text-[#111111]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Guides */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-extrabold  tracking-wider text-[#1575B3]">
                Download Technical Bulletins & CAD Data
              </h4>
              <div className="space-y-2">
                {currentContent.guides.map((g, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#DCEAF5] text-xs font-bold text-[#111111]">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#1575B3]" />
                      <span>{g.name}</span>
                    </div>
                    <button className="flex items-center gap-1 text-[#1575B3] bg-[#F5FAFF] px-3 py-1.5 rounded-lg border border-[#DCEAF5] hover:bg-[#DCEAF5] transition">
                      <Download className="w-3.5 h-3.5" />
                      <span>{g.size}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Image Preview */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#DCEAF5] bg-white p-3 shadow-md">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1575B3]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#DCEAF5] text-xs font-bold text-[#1575B3]">
                  Kothari Certified Engineering Documentation
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
