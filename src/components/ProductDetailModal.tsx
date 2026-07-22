import React, { useState } from 'react';
import { ProductItem } from '../types';
import { 
  X, 
  Download, 
  FileCode2, 
  ShieldCheck, 
  Thermometer, 
  Gauge, 
  Ruler, 
  Check, 
  CheckCircle2, 
  ExternalLink,
  Plus
} from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  inSpecList: boolean;
  onToggleSpecItem: (id: string) => void;
  onOpenQuoteModal: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  inSpecList,
  onToggleSpecItem,
  onOpenQuoteModal
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!product) return null;

  const handleCadDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#F5FAFF] border border-[#DCEAF5] text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#DCEAF5]/50 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-[#DCEAF5] pb-4 pr-8">
          <div className="w-16 h-16 rounded-2xl bg-[#F5FAFF] border border-[#DCEAF5] overflow-hidden shrink-0">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-0.5 rounded-full">
              {product.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1575B3] mt-1">
              {product.name}
            </h3>
            <p className="text-xs font-semibold text-[#5F6B7A]">
              Material Grade Standard: {product.specs.materialGrade}
            </p>
          </div>
        </div>

        {/* Product Full Description */}
        <p className="text-xs sm:text-sm font-medium text-[#111111] leading-relaxed">
          {product.fullDescription}
        </p>

        {/* Technical Specification Matrix Grid */}
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold text-[#1575B3] uppercase tracking-wider">
            Technical Engineering Specifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#F5FAFF] p-4 rounded-2xl border border-[#DCEAF5]">
            <div className="space-y-1">
              <span className="text-[#5F6B7A] font-bold block">Nominal Diameter Range:</span>
              <span className="font-extrabold text-[#111111]">{product.specs.diameterRange}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#5F6B7A] font-bold block">Working Pressure Rating:</span>
              <span className="font-extrabold text-[#1575B3]">{product.specs.pressureRating}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#5F6B7A] font-bold block">Thermal Service Limits:</span>
              <span className="font-extrabold text-[#111111]">{product.specs.temperatureRange}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#5F6B7A] font-bold block">Standard Length / Bar Size:</span>
              <span className="font-extrabold text-[#111111]">{product.specs.standardLength}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#5F6B7A] font-bold block">Joint Assembly Method:</span>
              <span className="font-extrabold text-[#111111]">{product.specs.joiningMethod}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#5F6B7A] font-bold block">Certified Quality Standards:</span>
              <span className="font-extrabold text-[#111111]">{product.specs.certifications.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Key Features Bullet Points */}
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold text-[#1575B3] uppercase tracking-wider">
            Key Architectural Advantages
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {product.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#DCEAF5]">
                <CheckCircle2 className="w-4 h-4 text-[#1575B3] shrink-0 mt-0.5" />
                <span className="font-semibold text-[#111111]">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CAD Download & Action Bar */}
        <div className="pt-3 border-t border-[#DCEAF5] flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Download CAD Button */}
          <button
            onClick={handleCadDownload}
            className="w-full sm:w-auto bg-[#F5FAFF] hover:bg-[#DCEAF5]/50 text-[#1575B3] border border-[#DCEAF5] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition"
          >
            <FileCode2 className="w-4 h-4" />
            <span>{downloadSuccess ? 'CAD Specification Downloaded' : 'Download BIM / CAD File (.STEP / .DWG)'}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onToggleSpecItem(product.id)}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                inSpecList
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1575B3] hover:bg-[#0E588A] text-white'
              }`}
            >
              {inSpecList ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Spec List</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add To Spec List</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-full sm:w-auto bg-[#1575B3] hover:bg-[#0E588A] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition"
            >
              <span>Get Quotation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
