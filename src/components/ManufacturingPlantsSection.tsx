import React, { useState } from 'react';
import { Maximize2, X, Factory, MapPin, Building2, Layers } from 'lucide-react';

export const ManufacturingPlantsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; location: string } | null>(null);

  const plantImages = [
    {
      src: '/plant_aerial_view_1784717955067.jpg',
      fallbackSrc: '/plant_aerial_view_1784719755067.jpg',
      title: 'State-of-the-Art Plant Complex',
      location: 'Main Manufacturing Division, Maharashtra',
      capacity: '85,000 MT Annual Capacity',
      description: 'Solar-powered smart manufacturing park housing high-speed twin-screw extrusion lines for UPVC and CPVC pipes.'
    },
    {
      src: 'plant_extrusion_line_1784717917817.jpg',
      fallbackSrc: 'plant_extrusion_line_1784719717817.jpg',
      title: 'Automated Pipe Extrusion Lines',
      location: 'Advanced Polymer Extrusion Bay',
      capacity: 'Continuous 24x7 Operations',
      description: 'Laser-guided wall thickness control ensuring uniform hydrostatic burst resistance across all pressure classes.'
    },
    {
      src: 'plant_quality_lab_1784717942717.jpg',
      fallbackSrc: 'plant_quality_lab_1784719742717.jpg',
      title: 'BIS & ISO Certified Quality Testing Lab',
      location: 'NABL Accredited Quality Division',
      capacity: '100% Hydrostatic Inspection',
      description: 'Internal pressure testing, drop impact rigs, thermal stability baths, and raw material purity spectrometers.'
    },
    {
      src: 'plant_warehouse_storage_1784717930647.jpg',
      fallbackSrc: 'plant_warehouse_storage_1784719730647.jpg',
      title: 'Central Logistics Yard & Warehouse',
      location: 'Pan-India Distribution Hub',
      capacity: 'Rapid Dispatch to 23+ States',
      description: 'Weather-protected inventory storage ensuring pristine surface finish and safe transport of agricultural & plumbing lines.'
    }
  ];

  return (
    <section id="manufacturing-plants" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
          <div className="space-y-2">
            {/* <span className="bg-[#FFFFFF] border border-[#DCEAF5] text-[#1575B3] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
              Infrastructure & Production
            </span> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3]">
             Manufacturing Plants
            </h2>
            <p className="text-sm font-bold text-[#5F6B7A]">
              Visual tour of Kothari Group’s advanced pipe extrusion facilities, quality testing laboratories, and centralized distribution hubs.
            </p>
          </div>
        </div>

        {/* Image Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plantImages.map((img, idx) => (
            <div
              key={idx}
              className="group bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#1575B3] transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedImage({ src: img.fallbackSrc, title: img.title, location: img.location })}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#DCEAF5]">
                <img
                  src={img.fallbackSrc}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFFFFF]/90 backdrop-blur-md text-[#1575B3] text-xs font-extrabold px-3 py-1 rounded-full border border-[#DCEAF5] flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    {img.location}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1575B3] backdrop-blur-md transition shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="text-lg sm:text-xl font-extrabold drop-shadow-sm">
                    {img.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                    {/* <span className="bg-[#1575B3] text-white px-2 py-0.5 rounded text-[10px]">
                      {img.capacity}
                    </span> */}
                    {/* <span className="line-clamp-1">{img.description}</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Image Expansion */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#DCEAF5] shadow-2xl space-y-4 p-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur-md transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black rounded-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-2 space-y-1">
              <span className="text-xs font-extrabold text-[#1575B3] uppercase tracking-wider">
                📍 {selectedImage.location}
              </span>
              <h3 className="text-xl font-extrabold text-[#111111]">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
