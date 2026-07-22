import React, { useState } from 'react';
import { materialComparisons } from '../data/caseStudies';
import { 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Award,
  ArrowRight
} from 'lucide-react';

interface MaterialComparisonTableProps {
  onOpenQuoteModal: () => void;
}

export const MaterialComparisonTable: React.FC<MaterialComparisonTableProps> = ({
  onOpenQuoteModal
}) => {
  const [highlightMaterial, setHighlightMaterial] = useState<string>('cpvc');

  return (
    <section id="comparison" className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5FAFF] border border-[#DCEAF5] px-3.5 py-1 rounded-full text-xs font-bold text-[#1575B3]">
            <Award className="w-3.5 h-3.5" />
            <span>Material Performance Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Engineering Benchmark & Material Matrix
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            Side-By-Side Comparison Of HydroFlow High-Grade Polymers Against Traditional Metallic Piping Systems Across Hydraulic Efficiency, Lifespan & Chemical Resilience.
          </p>
        </div>

        {/* Material Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'cpvc', label: 'HydroPro CPVC' },
            { id: 'upvc', label: 'HydroShield UPVC' },
            { id: 'hdpe', label: 'HydroTough HDPE' },
            { id: 'swr', label: 'HydroSilence SWR' },
            { id: 'conduit', label: 'HydroGuard Conduit' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setHighlightMaterial(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                highlightMaterial === item.id
                  ? 'bg-[#1575B3] text-white shadow-md shadow-[#1575B3]/20'
                  : 'bg-[#F5FAFF] text-[#5F6B7A] border border-[#DCEAF5] hover:border-[#1575B3]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Comparison Table Container */}
        <div className="bg-[#F5FAFF] rounded-3xl border border-[#DCEAF5] p-4 sm:p-6 shadow-xs overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-[#DCEAF5] text-[#1575B3]">
                <th className="p-3.5 font-extrabold text-sm w-1/4">
                  Engineering Criterion
                </th>
                <th className={`p-3.5 font-extrabold rounded-t-xl transition-colors ${
                  highlightMaterial === 'cpvc' ? 'bg-[#1575B3] text-white' : 'bg-white text-[#1575B3]'
                }`}>
                  HydroPro CPVC
                </th>
                <th className={`p-3.5 font-extrabold rounded-t-xl transition-colors ${
                  highlightMaterial === 'upvc' ? 'bg-[#1575B3] text-white' : 'bg-white text-[#1575B3]'
                }`}>
                  HydroShield UPVC
                </th>
                <th className={`p-3.5 font-extrabold rounded-t-xl transition-colors ${
                  highlightMaterial === 'hdpe' ? 'bg-[#1575B3] text-white' : 'bg-white text-[#1575B3]'
                }`}>
                  HydroTough HDPE
                </th>
                <th className="p-3.5 font-extrabold text-[#5F6B7A] bg-red-50 text-red-900 rounded-t-xl">
                  Legacy Metallic (Steel/Copper)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCEAF5]">
              {materialComparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/80 transition-colors">
                  <td className="p-3.5 font-extrabold text-[#111111] bg-white/40">
                    {row.feature}
                  </td>
                  <td className={`p-3.5 font-medium ${
                    highlightMaterial === 'cpvc' ? 'bg-[#1575B3]/10 font-bold text-[#1575B3]' : 'text-[#111111]'
                  }`}>
                    {row.cpvc}
                  </td>
                  <td className={`p-3.5 font-medium ${
                    highlightMaterial === 'upvc' ? 'bg-[#1575B3]/10 font-bold text-[#1575B3]' : 'text-[#111111]'
                  }`}>
                    {row.upvc}
                  </td>
                  <td className={`p-3.5 font-medium ${
                    highlightMaterial === 'hdpe' ? 'bg-[#1575B3]/10 font-bold text-[#1575B3]' : 'text-[#111111]'
                  }`}>
                    {row.hdpe}
                  </td>
                  <td className="p-3.5 font-medium text-red-700 bg-red-50/50">
                    {row.metallic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Advantage Banner */}
        <div className="bg-[#1575B3] text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
              Polymer Advantage
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
              Eliminate Scaling, Heavy Freight & Corrosion Failures
            </h3>
            <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed">
              Switching to HydroFlow engineered polymeric systems reduces total lifecycle plumbing maintenance costs by over 68% compared to galvanized iron or copper.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 bg-white hover:bg-[#F5FAFF] text-[#1575B3] px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
          >
            <span>Request Comparative Cost Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
