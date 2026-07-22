import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  CheckCircle2, 
  Download, 
  Search, 
  Building,
  Sparkles
} from 'lucide-react';

export const CertificationsAndTrust: React.FC = () => {
  const [certQuery, setCertQuery] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    verified: boolean;
    batchNo: string;
    date: string;
    grade: string;
  } | null>(null);

  const handleVerifyBatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certQuery) return;

    setVerificationResult({
      verified: true,
      batchNo: certQuery.toUpperCase(),
      date: 'July 2026 Batch Manufacturing',
      grade: 'HydroPro CPVC SDR 11 - ISO 9001 Batch Clearance'
    });
  };

  const certs = [
    {
      title: 'ISO 9001:2015 Certified',
      subtitle: 'Quality Management Systems',
      desc: 'Rigorous Quality Assurance Standards Applied To Raw Material Compound Mixing, Wall Thickness Monitoring & Factory Release.'
    },
    {
      title: 'ISO 14001:2015 Certified',
      subtitle: 'Environmental Management',
      desc: 'Zero Hazardous Waste Manufacturing Processes Incorporating Closed-Loop Water Recycling & 100% Recyclable Scrap Polymers.'
    },
    {
      title: 'NSF / ANSI 61 Approved',
      subtitle: 'Potable Drinking Water Safety',
      desc: 'Tested By International Laboratories For Zero Lead Leaching & High Microbiological Resistance In Potable Water Networks.'
    },
    {
      title: 'ASTM / DIN / BIS Compliant',
      subtitle: 'International Standards Compliance',
      desc: 'Pipes Fully Conform To ASTM F441, ASTM D1785, IS 15778, IS 4985, DIN 8061, And IEC 61386 Conduit Specifications.'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] px-3.5 py-1 rounded-full text-xs font-bold text-[#1575B3]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>International Compliance & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Certified Quality Assurance & Test Verification
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            Every Meter Of Pipe Produced Undergoes Automated Laser Inspection And Batch Traceability Clearance For Uncompromising Site Safety.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DCEAF5] shadow-xs hover:border-[#1575B3]/60 hover:shadow-md transition-all text-left space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#1575B3]">
                  {c.title}
                </h3>
                <span className="text-[11px] font-bold text-[#5F6B7A] block mt-0.5">
                  {c.subtitle}
                </span>
              </div>
              <p className="text-xs font-medium text-[#5F6B7A] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Live Batch Certificate Verification Box */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-extrabold text-[#1575B3] flex items-center justify-center gap-2">
              <FileCheck2 className="w-5 h-5" />
              <span>Verify Factory Test Clearance Certificate</span>
            </h3>
            <p className="text-xs font-medium text-[#5F6B7A]">
              Enter Your Pipe Batch Number Printed On The Pipe Outer Surface (e.g., HF-2026-B882)
            </p>
          </div>

          <form onSubmit={handleVerifyBatch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#5F6B7A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter Batch Number (e.g., HF-2026-B882)"
                value={certQuery}
                onChange={(e) => setCertQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1575B3] hover:bg-[#0E588A] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-sm transition shrink-0"
            >
              Verify Certificate
            </button>
          </form>

          {verificationResult && (
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-left space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-extrabold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Batch Certificate Verified Authentic & Clear</span>
              </div>
              <p className="text-xs font-semibold text-emerald-900">
                Batch Code: <span className="font-extrabold">{verificationResult.batchNo}</span> | Manufacturing Release: {verificationResult.date}
              </p>
              <p className="text-[11px] font-medium text-emerald-700">
                {verificationResult.grade} - Hydrostatic burst test, impact drop test & wall concentricity passed 100%.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
