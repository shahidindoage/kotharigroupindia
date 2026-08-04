import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Scale, 
  Flame,
  Gauge
} from 'lucide-react';

export const QualityAndManufacturing: React.FC = () => {
  const [activeTest, setActiveTest] = useState<number>(0);

  const tests = [
    {
      title: 'Hydrostatic Burst Pressure Test',
      standard: 'ASTM D1599 / IS 4985',
      pressure: 'Tested Up To 60.0 Bar',
      description: 'Pipes are filled with water and subjected to escalating internal hydrostatic pressure until burst point, verifying high safety margin above nominal working pressure.',
      status: 'Passed 100% Batch Certification'
    },
    {
      title: 'Sub-Zero Cold Impact Resistance',
      standard: 'ISO 3127 Falling Tup Test',
      pressure: '0°C Temperature Conditioning',
      description: 'Heavy steel striker is dropped from 2.0 meters height onto conditioned pipe specimens to confirm wall ductility and zero shatter cracking.',
      status: 'Passed Zero Crack Initiation'
    },
    {
      title: 'Heat Reversion & Thermal Cycling',
      standard: 'ISO 2505 Oven Method',
      pressure: '150°C Thermal Exposure',
      description: 'Pipe samples are heated in forced-air ovens at 150°C to measure longitudinal dimensional stability and internal molecular orientation.',
      status: 'Dimensional Variance < 2.0%'
    },
    {
      title: 'Lead-Free Extraction & Leaching Test',
      standard: 'NSF / ANSI 61 Potable Safety',
      pressure: 'Zero Heavy Metal Detection',
      description: 'Water samples recirculated through pipes for 14 days are analyzed via Atomic Absorption Spectrophotometry to guarantee zero heavy metal migration.',
      status: 'Certified Safe For Potable Water'
    }
  ];

  const Pillars = [
    {
      icon: Cpu,
      title: 'Automated Ultrasonic Wall Gauging',
      sub: 'German-engineered continuous line sensors measure pipe wall concentricity at 360 degrees, ensuring zero thin spots along entire pipe length.'
    },
    {
      icon: Layers,
      title: 'Multi-Layer Co-Extrusion Line',
      sub: 'Advanced triple layer die heads allow mineral-filled soundproof core insertion in SWR pipes and UV-resistant outer skins on UPVC conduits.'
    },
    {
      icon: Flame,
      title: 'Self-Extinguishing Flame Additives',
      sub: 'Polymer compounds incorporate halogen-free flame retardants, ensuring electrical conduits self-extinguish within 5 seconds of flame removal.'
    },
    {
      icon: Scale,
      title: '100% Virgin Polymer Compounds',
      sub: 'Only top-grade virgin PVC, CPVC and PE 100 resins are processed, eliminating recycled plastic impurities that cause premature pipe wall failure.'
    }
  ];

  return (
    <section id="manufacturing" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] px-3.5 py-1 rounded-lg text-xs font-bold text-[#1575B3]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Precision Manufacturing Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Advanced Polymer Processing & Quality Assurance
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            State-Of-The-Art Automated Extrusion Lines Equipped With German Ultrasound Sensors & In-Line Laser Diameter Scanners Ensure Flawless Wall Symmetry.
          </p>
        </div>

        {/* Manufacturing Technology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-lg border border-[#DCEAF5] shadow-xs hover:border-[#1575B3]/60 hover:shadow-md transition-all text-left space-y-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1575B3]">
                  {p.title}
                </h3>
                <p className="text-xs font-medium text-[#5F6B7A] leading-relaxed">
                  {p.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Quality Testing Laboratory Simulation */}
        <div className="bg-[#FFFFFF] rounded-lg border border-[#DCEAF5] p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-[#DCEAF5] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-extrabold text-[#1575B3] flex items-center gap-2">
                <Gauge className="w-5 h-5" />
                <span>In-House Quality Testing Standards</span>
              </h3>
              <p className="text-xs font-medium text-[#5F6B7A]">
                Batch Verification Conducted Every 2 Hours On Extrusion Lines
              </p>
            </div>
            <span className="text-xs font-bold bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] px-3 py-1.5 rounded-lg self-start sm:self-auto">
              ISO 17025 Accredited Laboratory
            </span>
          </div>

          {/* Test Tabs & Visualizer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Test Selection Tabs */}
            <div className="lg:col-span-5 space-y-2">
              {tests.map((t, idx) => {
                const active = activeTest === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTest(idx)}
                    className={`w-full p-4 rounded-lg text-left border transition-all ${
                      active
                        ? 'bg-[#1575B3] text-white border-[#1575B3] shadow-md'
                        : 'bg-[#F5FAFF] text-[#111111] border-[#DCEAF5] hover:border-[#1575B3]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-extrabold">
                        {t.title}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        active ? 'bg-white/20 text-white' : 'bg-white text-[#1575B3] border border-[#DCEAF5]'
                      }`}>
                        {t.standard}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Test Visual Display Box */}
            <div className="lg:col-span-7 bg-[#F5FAFF] p-6 rounded-lg border border-[#DCEAF5] space-y-4 text-left">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1575B3] bg-white border border-[#DCEAF5] px-2 py-0.5 rounded">
                    Active Verification Test #{activeTest + 1}
                  </span>
                  <h4 className="text-xl font-extrabold text-[#1575B3] mt-2">
                    {tests[activeTest].title}
                  </h4>
                </div>
                <div className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Safe</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-lg border border-[#DCEAF5]">
                <div>
                  <span className="text-[#5F6B7A] font-bold block">Test Standard:</span>
                  <span className="font-extrabold text-[#111111]">{tests[activeTest].standard}</span>
                </div>
                <div>
                  <span className="text-[#5F6B7A] font-bold block">Testing Pressure / Parameter:</span>
                  <span className="font-extrabold text-[#1575B3]">{tests[activeTest].pressure}</span>
                </div>
              </div>

              <p className="text-xs font-medium text-[#5F6B7A] leading-relaxed">
                {tests[activeTest].description}
              </p>

              <div className="pt-2 border-t border-[#DCEAF5] flex items-center justify-between text-xs font-bold text-[#1575B3]">
                <span>Status Benchmark:</span>
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {tests[activeTest].status}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
