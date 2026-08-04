import React, { useState } from 'react';
import { X, Briefcase, CheckCircle2, Send, Upload } from 'lucide-react';

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ isOpen, onClose }) => {
  const [applied, setApplied] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Polymer R&D Engineer');

  if (!isOpen) return null;

  const openings = [
    { title: 'Polymer R&D Engineer', dept: 'Quality & Innovation', location: 'Plant HQ' },
    { title: 'Area Sales Manager (Agri Division)', dept: 'Sales & Distribution', location: 'Pan-India 23+ States' },
    { title: 'Micro Irrigation Field Agronomist', dept: 'Technical Support', location: 'Maharashtra & Gujarat' },
    { title: 'Extrusion Production Supervisor', dept: 'Manufacturing Operations', location: 'Industrial Plant' }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] rounded-lg border border-[#DCEAF5] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#F5FAFF] border border-[#DCEAF5] text-[#5F6B7A] hover:text-[#1575B3] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <span className="text-[10px] font-extrabold uppercase text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-0.5 rounded-lg">
            Kothari Careers
          </span>
          <h3 className="text-2xl font-extrabold text-[#1575B3]">
            Join Kothari Group India
          </h3>
          <p className="text-xs font-bold text-[#5F6B7A]">
            Build a rewarding career with India's premier water management & micro irrigation manufacturing organization.
          </p>
        </div>

        {applied ? (
          <div className="bg-[#F5FAFF] border border-emerald-500/30 rounded-lg p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-xl font-extrabold text-[#1575B3]">
              Application Received!
            </h4>
            <p className="text-xs font-bold text-[#5F6B7A] max-w-md mx-auto">
              Our Human Resources team will review your credentials for the position of <span className="text-[#1575B3]">{selectedRole}</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Open Positions List */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase text-[#1575B3]">
                Current Openings
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {openings.map((op, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedRole(op.title)}
                    className={`p-3 rounded-lg border text-left transition ${
                      selectedRole === op.title
                        ? 'bg-[#F5FAFF] border-[#1575B3] ring-1 ring-[#1575B3]'
                        : 'bg-white border-[#DCEAF5] hover:border-[#1575B3]/50'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-[#1575B3]">{op.title}</div>
                    <div className="text-[10px] font-bold text-[#5F6B7A] mt-0.5">{op.dept} • {op.location}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Application Form */}
            <form onSubmit={handleApply} className="space-y-3 bg-[#F5FAFF] p-4 rounded-lg border border-[#DCEAF5]">
              <h4 className="text-xs font-extrabold text-[#1575B3]">
                Apply For: <span className="text-[#111111]">{selectedRole}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  className="px-3.5 py-2 bg-white border border-[#DCEAF5] rounded-lg text-xs font-bold text-[#111111]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address *"
                  className="px-3.5 py-2 bg-white border border-[#DCEAF5] rounded-lg text-xs font-bold text-[#111111]"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white border border-[#DCEAF5] p-2.5 rounded-lg text-xs font-bold text-[#5F6B7A] flex items-center justify-between">
                  <span>Upload Resume (PDF / DOCX)</span>
                  <Upload className="w-4 h-4 text-[#1575B3]" />
                </div>

                <button
                  type="submit"
                  className="bg-[#1575B3] hover:bg-[#0E588A] text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-sm transition shrink-0"
                >
                  Submit Application
                </button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
