import React, { useState } from 'react';
import { ProductItem } from '../types';
import { 
  Package, 
  Layers, 
  Building2, 
  Check, 
  Plus, 
  ExternalLink, 
  Download, 
  Droplets, 
  Sprout, 
  Wrench,
  Search,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2
} from 'lucide-react';

interface CategorySectionProps {
  products: ProductItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  specList: string[];
  onToggleSpecItem: (id: string) => void;
  onOpenQuoteModal: () => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  products,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  specList,
  onToggleSpecItem,
  onOpenQuoteModal
}) => {
  const [activeMainCategory, setActiveMainCategory] = useState<'Products' | 'Segments' | 'Projects'>('Segments');
  const [selectedSegment, setSelectedSegment] = useState<'Plumbing Pipes & fittings' | 'Agri Pipes & fittings' | 'Micro Irrigation System'>('Plumbing Pipes & fittings');

  const segmentsList = [
    {
      id: 'Plumbing Pipes & fittings' as const,
      title: 'Plumbing Pipes & fittings',
      icon: Wrench,
      description: 'CPVC Hot & Cold Water Pipes, UPVC Plumbing, SWR Drainage & Brass Insert Fittings for modern buildings.',
      highlights: ['Operates safely up to 93°C', '100% Lead-Free Potable Grade', 'Zero Scale Build-Up', '50+ Years Service Life'],
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
    },
    {
      id: 'Agri Pipes & fittings' as const,
      title: 'Agri Pipes & fittings',
      icon: Sprout,
      description: 'Rigid UPVC Agriculture Pressure Pipes, HDPE Coils, Borewell Column Pipes & Casing Systems.',
      highlights: ['IS 4985 & IS 4984 Certified', 'High Surge Pressure Resistance', 'Saves Pump Power & Electricity', 'Corrosion & Chemical Inert'],
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    },
    {
      id: 'Micro Irrigation System' as const,
      title: 'Micro Irrigation System',
      icon: Droplets,
      description: 'Advanced Inline/Online Drip Lines, Sprinkler Networks, Hydro-Cyclone Filters & Fertigation Systems.',
      highlights: ['Saves up to 60% Water', 'Enhances Crop Yield by 40%', '3D Turbulent Clogging-Proof Emitters', 'PMKSY Govt. Subsidy Approved'],
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
    }
  ];

  const projectsList = [
    {
      title: 'State Agri Drip Irrigation Infrastructure',
      location: 'Maharashtra & Gujarat Agriculture Schemes',
      segment: 'Micro Irrigation System',
      impact: '150,000+ Hectares Irrigated with 50% Water Savings',
      description: 'Deployment of Kothari Inline Drip Lines and Hydro-Cyclone Filtration Stations across sugarcane and cotton belt farmlands.',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
    },
    {
      title: 'Luxury High-Rise Residential Plumbing Network',
      location: 'Mumbai & Pune Metros',
      segment: 'Plumbing Pipes & fittings',
      impact: '5,000+ Premium Apartments Installed',
      description: 'Complete CPVC Hot & Cold Water lines and HydroSilence SWR noise-insulated soil and waste drainage risers.',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
    },
    {
      title: 'Lift Irrigation & Deep Borewell Column Network',
      location: 'Madhya Pradesh & Rajasthan Rural Water Mission',
      segment: 'Agri Pipes & fittings',
      impact: '2,500+ Deep Underground Borewell Extraction Lines',
      description: 'Square-threaded Kothari UPVC Column Pipes and heavy-duty pressure mains providing continuous drinking water to rural habitations.',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeMainCategory === 'Segments') {
      return matchesSearch && p.category === selectedSegment;
    }
    return matchesSearch;
  });

  return (
    <section id="categories" className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DCEAF5]">
          <div className="space-y-2 max-w-2xl">
            {/* <span className="bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
              Kothari Product & Segment Portfolio
            </span> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1575B3]">
              Applications
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Explore Kothari's world-class engineered products, core operational segments, and landmark infrastructure projects across India.
            </p>
          </div>

          {/* Main Category Selector Tabs (Products, Segments, Projects) */}
          <div className="flex items-center gap-1.5 bg-[#F5FAFF] p-1.5 rounded-lg border border-[#DCEAF5] shrink-0">
            <button
              onClick={() => setActiveMainCategory('Products')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 transition ${
                activeMainCategory === 'Products'
                  ? 'bg-[#1575B3] text-white shadow-sm'
                  : 'text-[#5F6B7A] hover:text-[#1575B3]'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products</span>
            </button>

            <button
              onClick={() => setActiveMainCategory('Segments')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 transition ${
                activeMainCategory === 'Segments'
                  ? 'bg-[#1575B3] text-white shadow-sm'
                  : 'text-[#5F6B7A] hover:text-[#1575B3]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Segments</span>
            </button>

            <button
              onClick={() => setActiveMainCategory('Projects')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 transition ${
                activeMainCategory === 'Projects'
                  ? 'bg-[#1575B3] text-white shadow-sm'
                  : 'text-[#5F6B7A] hover:text-[#1575B3]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Projects</span>
            </button>
          </div>
        </div>

        {/* --- VIEW 1: SEGMENTS CATEGORY SECTION --- */}
        {activeMainCategory === 'Segments' && (
          <div className="space-y-10">
            {/* Sub Segment Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {segmentsList.map((seg) => {
                const isSelected = selectedSegment === seg.id;
                const IconComp = seg.icon;
                return (
                  <button
                    key={seg.id}
                    onClick={() => setSelectedSegment(seg.id)}
                    className={`p-5 rounded-lg border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'bg-[#F5FAFF] border-[#1575B3] shadow-md ring-2 ring-[#1575B3]/20'
                        : 'bg-[#FFFFFF] border-[#DCEAF5] hover:border-[#1575B3]/50 hover:bg-[#F5FAFF]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg ${isSelected ? 'bg-[#1575B3] text-white' : 'bg-[#F5FAFF] text-[#1575B3]'}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        {/* <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1575B3] block">
                          Core Segment
                        </span> */}
                        <h3 className="text-base font-medium text-[#111111]">
                          {seg.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs font-light text-[#5F6B7A] leading-relaxed mb-4">
                      {seg.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#DCEAF5]">
                      {seg.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-[#111111]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1575B3] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Products List under Active Segment */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
                <h3 className="text-lg font-medium text-[#1575B3]">
                  Featured Systems in <span className="text-[#111111]">{selectedSegment}</span>
                </h3>
                <span className="text-xs font-light text-[#5F6B7A]">
                  Showing {filteredProducts.length} Product Lines
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const inSpec = specList.includes(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-[#FFFFFF] rounded-lg border border-[#DCEAF5] p-5 hover:shadow-xl transition-all flex flex-col justify-between group text-left"
                    >
                      <div className="space-y-3">
                        <div className="relative aspect-[16/10] bg-[#F5FAFF] rounded-lg overflow-hidden border border-[#DCEAF5]">
                          <img
                            src={product.image}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#1575B3] text-[10px] font-medium px-2 py-0.5 rounded border border-[#DCEAF5]">
                            {product.category}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-medium text-[#1575B3] line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="text-xs font-light text-[#5F6B7A] mt-1 line-clamp-2 leading-relaxed">
                            {product.shortDescription}
                          </p>
                        </div>

                        {/* <div className="bg-[#F5FAFF] p-3 rounded-lg border border-[#DCEAF5] space-y-1 text-xs font-bold text-[#111111]">
                          <div className="flex justify-between">
                            <span className="text-[#5F6B7A]">Pressure Rating:</span>
                            <span>{product.specs.pressureRating}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#5F6B7A]">Standard Size:</span>
                            <span>{product.specs.diameterRange}</span>
                          </div>
                        </div> */}
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#DCEAF5] flex items-center gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="flex-1 bg-[#F5FAFF] hover:bg-[#DCEAF5] text-[#1575B3] px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-center gap-1"
                        >
                          <span>Full Specifications</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onToggleSpecItem(product.id)}
                          className={`p-2 rounded-lg border transition ${
                            inSpec
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-[#1575B3] border-[#DCEAF5] hover:bg-[#F5FAFF]'
                          }`}
                          title={inSpec ? 'In Spec List' : 'Add to Spec List'}
                        >
                          {inSpec ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 2: ALL PRODUCTS MATRIX --- */}
        {activeMainCategory === 'Products' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const inSpec = specList.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-[#FFFFFF] rounded-lg border border-[#DCEAF5] p-5 hover:shadow-xl transition-all flex flex-col justify-between group text-left"
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-[16/10] bg-[#F5FAFF] rounded-lg overflow-hidden border border-[#DCEAF5]">
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#1575B3] text-[10px] font-medium px-2 py-0.5 rounded border border-[#DCEAF5]">
                          {product.category}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-medium text-[#1575B3] line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs font-light text-[#5F6B7A] mt-1 line-clamp-2 leading-relaxed">
                          {product.shortDescription}
                        </p>
                      </div>

                      {/* <div className="bg-[#F5FAFF] p-3 rounded-lg border border-[#DCEAF5] space-y-1 text-xs font-bold text-[#111111]">
                        <div className="flex justify-between">
                          <span className="text-[#5F6B7A]">Standard Size:</span>
                          <span>{product.specs.diameterRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5F6B7A]">Joining Method:</span>
                          <span>{product.specs.joiningMethod}</span>
                        </div>
                      </div> */}
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#DCEAF5] flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 bg-[#1575B3] hover:bg-[#0E588A] text-white px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-center gap-1"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onToggleSpecItem(product.id)}
                        className={`p-2 rounded-lg border transition ${
                          inSpec
                            ? 'bg-emerald-600 text-white border-emerald-600'
                            : 'bg-white text-[#1575B3] border-[#DCEAF5] hover:bg-[#F5FAFF]'
                        }`}
                      >
                        {inSpec ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --- VIEW 3: PROJECTS SHOWCASE --- */}
        {activeMainCategory === 'Projects' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsList.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#F5FAFF] rounded-lg border border-[#DCEAF5] p-6 hover:shadow-xl transition-all space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] rounded-lg overflow-hidden border border-[#DCEAF5] bg-white">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-[10px] font-medium text-[#1575B3] bg-white border border-[#DCEAF5] px-2.5 py-0.5 rounded-lg inline-block">
                    {proj.segment}
                  </span>

                  <h4 className="text-lg font-medium text-[#1575B3]">
                    {proj.title}
                  </h4>

                  {/* <p className="text-xs font-bold text-[#111111]">
                    📍 {proj.location}
                  </p> */}

                  <p className="text-xs font-light text-[#5F6B7A] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* <div className="bg-white p-3 rounded-lg border border-[#DCEAF5] text-xs font-extrabold text-[#1575B3]">
                    Impact: {proj.impact}
                  </div> */}
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-[#1575B3] hover:bg-[#0E588A] text-white py-2.5 rounded-lg font-medium text-xs transition"
                >
                  Request Similar Project Quote
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
