import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building2, 
  PhoneCall, 
  Mail, 
  FileText, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { QuoteRequestState } from '../types';

interface QuoteBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecCount?: number;
}

export const QuoteBuilderModal: React.FC<QuoteBuilderModalProps> = ({
  isOpen,
  onClose,
  initialSpecCount = 0
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteRequestState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    estimatedQuantityMeters: '1000 - 5000 Meters',
    requiredMaterial: 'HydroPro CPVC Systems',
    specialRequirements: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#F5FAFF] border border-[#DCEAF5] text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#DCEAF5]/50 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#1575B3]">
              Quotation Request Transmitted Successfully
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#5F6B7A] max-w-md mx-auto leading-relaxed">
              Thank You For Partnering With HydroFlow Piping Systems. Our Senior Infrastructure Engineer Will Review Your CAD Specifications And Send A Formal Itemized Quotation Within 2 Business Hours.
            </p>
            <div className="bg-[#F5FAFF] p-4 rounded-2xl border border-[#DCEAF5] text-xs space-y-1 text-left max-w-md mx-auto">
              <p className="font-extrabold text-[#111111]">Reference Request ID: #HF-RFQ-2026-9821</p>
              <p className="text-[#5F6B7A]">Engineering Desk Contact: +1 (800) 555-PIPE</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#1575B3] hover:bg-[#0E588A] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition"
            >
              Return To Homepage
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 bg-[#F5FAFF] border border-[#DCEAF5] px-3 py-0.5 rounded-full text-[11px] font-bold text-[#1575B3]">
                <FileText className="w-3.5 h-3.5" />
                <span>Formal Commercial Quotation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1575B3]">
                Request Project Pricing & Technical Proposals
              </h3>
              <p className="text-xs font-medium text-[#5F6B7A]">
                Direct Factory Pricing Available For Contractors, Architects, Distributors & Municipal Projects.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#111111]">
                    Full Contact Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Alex Robertson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#111111]">
                    Company / Contracting Firm:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Apex Infrastructure Corp"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#111111]">
                    Business Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., alex@apexinfra.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#111111]">
                    Direct Phone / WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#111111]">
                    Primary Project Sector:
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                  >
                    <option value="Commercial High-Rise">Commercial High-Rise & Luxury Towers</option>
                    <option value="Municipal Water Mains">Municipal Water Mains & Sewage</option>
                    <option value="Aviation Infrastructure">Aviation Infrastructure & Cable Ducting</option>
                    <option value="Solar Energy Park">Solar Energy Park Cable Protection</option>
                    <option value="Industrial Chemical Plant">Industrial Chemical Process Piping</option>
                    <option value="Residential Plumbing">Residential Housing Plumbing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#111111]">
                    Estimated Total Pipeline Length:
                  </label>
                  <select
                    value={formData.estimatedQuantityMeters}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantityMeters: e.target.value })}
                    className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                  >
                    <option value="Under 500 Meters">Under 500 Meters (Standard Order)</option>
                    <option value="500 - 2000 Meters">500 - 2000 Meters (Medium Contract)</option>
                    <option value="2000 - 10000 Meters">2000 - 10,000 Meters (Large Infrastructure)</option>
                    <option value="10000+ Meters">10,000+ Meters (Turnkey Mega Contract)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#111111]">
                  Primary Pipe System Material Required:
                </label>
                <select
                  value={formData.requiredMaterial}
                  onChange={(e) => setFormData({ ...formData, requiredMaterial: e.target.value })}
                  className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                >
                  <option value="HydroPro CPVC Systems">HydroPro CPVC Hot & Cold Systems (93°C Rated)</option>
                  <option value="HydroShield UPVC Pressure Pipes">HydroShield UPVC Pressure Pipes (PN 16 Class)</option>
                  <option value="HydroTough HDPE Infrastructure">HydroTough HDPE Infrastructure Pipes (PE 100 Grade)</option>
                  <option value="HydroSilence SWR Soundproof">HydroSilence SWR Soundproof Soil & Waste</option>
                  <option value="HydroGuard Electrical Conduit">HydroGuard Heavy Duty Rigid Electrical Conduit</option>
                  <option value="Full Turnkey Assortment">Full Turnkey Assortment (Pipes + Valves + Fittings)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#111111]">
                  Special Technical Specifications Or Branding Request:
                </label>
                <textarea
                  rows={3}
                  placeholder="Include required pipe colors, custom length preferences, or site delivery dates..."
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  className="w-full p-3 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1575B3] hover:bg-[#0E588A] text-white py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-lg shadow-[#1575B3]/20 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Quotation Request</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-[#5F6B7A] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>Your Information Is Secured Under Non-Disclosure Protocol</span>
              </div>

            </form>
          </>
        )}

      </div>
    </div>
  );
};
