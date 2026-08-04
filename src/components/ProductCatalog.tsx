import React, { useState, useMemo } from 'react';
import { ProductItem, PipeCategory } from '../types';
import { 
  Search, 
  Filter, 
  Check, 
  Layers, 
  ShieldCheck, 
  Thermometer, 
  Gauge, 
  Ruler, 
  ExternalLink,
  Plus,
  CheckCircle,
  FileCode2,
  SlidersHorizontal
} from 'lucide-react';

interface ProductCatalogProps {
  products: ProductItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  specList: string[];
  onToggleSpecItem: (productId: string) => void;
  onOpenQuoteModal: () => void;
}

const categories: PipeCategory[] = [
  'All Products',
  'CPVC Hot & Cold Systems',
  'UPVC Pressure Pipes',
  'HDPE Heavy Infrastructure',
  'SWR Drainage & Soil',
  'Electrical Conduit & Cable Protection',
  'Valves & Control Systems',
  'Precision Fittings & Joints'
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  specList,
  onToggleSpecItem,
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PipeCategory>('All Products');
  const [pressureFilter, setPressureFilter] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'All Products' || p.category === selectedCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.materialGrade.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPressure = 
        pressureFilter === 'All' ||
        p.specs.pressureRating.toLowerCase().includes(pressureFilter.toLowerCase());

      return matchesCategory && matchesSearch && matchesPressure;
    });
  }, [products, selectedCategory, searchQuery, pressureFilter]);

  return (
    <section id="products" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] px-3.5 py-1 rounded-lg text-xs font-bold text-[#1575B3]">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Product Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Precision Piping & Fluid Conveyance Systems
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            Engineered To International ASTM, ISO, DIN & BIS Standards For High-Pressure Industrial, Architectural, Subterranean & Cable Protection Applications.
          </p>
        </div>

        {/* Filter Bar & Category Tabs */}
        <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#DCEAF5] shadow-xs space-y-4">
          
          {/* Top Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#DCEAF5] pb-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#5F6B7A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Pipe Grades, Fittings, Specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-lg text-xs font-semibold text-[#111111] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
              />
            </div>

            {/* Pressure Rating Filter Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs font-bold text-[#5F6B7A] flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>Filter Pressure Rating:</span>
              </span>
              <select
                value={pressureFilter}
                onChange={(e) => setPressureFilter(e.target.value)}
                className="bg-[#F5FAFF] border border-[#DCEAF5] rounded-lg px-3 py-2 text-xs font-semibold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
              >
                <option value="All">All Pressure Classes</option>
                <option value="SDR 11">SDR 11 Class</option>
                <option value="PN 16">PN 16 Heavy Pressure</option>
                <option value="PN 10">PN 10 Standard</option>
                <option value="Schedule 80">Schedule 80 Heavy Wall</option>
              </select>

              {/* Specification Cart Quick Summary */}
              {specList.length > 0 && (
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-[#1575B3] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-sm hover:bg-[#0E588A] transition"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{specList.length} Items In Spec List</span>
                </button>
              )}
            </div>

          </div>

          {/* Category Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#1575B3] text-white shadow-md shadow-[#1575B3]/20'
                      : 'bg-[#F5FAFF] text-[#5F6B7A] border border-[#DCEAF5] hover:border-[#1575B3] hover:text-[#1575B3]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#FFFFFF] p-12 rounded-lg border border-[#DCEAF5] text-center space-y-3">
            <Filter className="w-8 h-8 text-[#5F6B7A] mx-auto" />
            <h3 className="text-lg font-bold text-[#1575B3]">
              No Products Match Your Filter Criteria
            </h3>
            <p className="text-xs font-medium text-[#5F6B7A]">
              Try adjusting your search terms or select "All Products" to view our complete catalog.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
                setPressureFilter('All');
              }}
              className="mt-2 bg-[#1575B3] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#0E588A]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const inSpecList = specList.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-[#FFFFFF] rounded-lg border border-[#DCEAF5] shadow-xs hover:border-[#1575B3]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Header & Image */}
                  <div>
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-[#F5FAFF] to-[#DCEAF5] overflow-hidden border-b border-[#DCEAF5]">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-md text-[#1575B3] border border-[#DCEAF5] text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs">
                        {product.category}
                      </span>

                      {/* CAD Availability Badge */}
                      {product.cadAvailable && (
                        <span className="absolute top-3 right-3 bg-[#1575B3] text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-xs">
                          <FileCode2 className="w-3 h-3" />
                          <span>CAD / BIM Ready</span>
                        </span>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-4">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#1575B3] leading-snug group-hover:text-[#0E588A] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs font-medium text-[#5F6B7A] mt-1.5 line-clamp-2 leading-relaxed">
                          {product.shortDescription}
                        </p>
                      </div>

                      {/* Technical Spec Matrix Chips */}
                      <div className="grid grid-cols-2 gap-2 bg-[#F5FAFF] p-3 rounded-lg border border-[#DCEAF5] text-[11px]">
                        <div className="space-y-0.5">
                          <span className="text-[#5F6B7A] font-bold flex items-center gap-1">
                            <Gauge className="w-3 h-3 text-[#1575B3]" />
                            <span>Pressure Rating</span>
                          </span>
                          <span className="font-extrabold text-[#111111] block">
                            {product.specs.pressureRating}
                          </span>
                        </div>

                        <div className="space-y-0.5">
                          <span className="text-[#5F6B7A] font-bold flex items-center gap-1">
                            <Thermometer className="w-3 h-3 text-[#1575B3]" />
                            <span>Temp Range</span>
                          </span>
                          <span className="font-extrabold text-[#111111] block">
                            {product.specs.temperatureRange}
                          </span>
                        </div>

                        <div className="space-y-0.5">
                          <span className="text-[#5F6B7A] font-bold flex items-center gap-1">
                            <Ruler className="w-3 h-3 text-[#1575B3]" />
                            <span>Diameters</span>
                          </span>
                          <span className="font-extrabold text-[#111111] block truncate">
                            {product.specs.diameterRange}
                          </span>
                        </div>

                        <div className="space-y-0.5">
                          <span className="text-[#5F6B7A] font-bold flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-[#1575B3]" />
                            <span>Joint System</span>
                          </span>
                          <span className="font-extrabold text-[#111111] block truncate">
                            {product.specs.joiningMethod}
                          </span>
                        </div>
                      </div>

                      {/* Certifications Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.specs.certifications.slice(0, 3).map((cert, i) => (
                          <span 
                            key={i}
                            className="text-[10px] font-bold text-[#5F6B7A] bg-[#FFFFFF] border border-[#DCEAF5] px-2 py-0.5 rounded-md"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full bg-[#F5FAFF] hover:bg-[#DCEAF5]/50 text-[#1575B3] border border-[#DCEAF5] py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <span>View Datasheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onToggleSpecItem(product.id)}
                      className={`w-full py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                        inSpecList
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-xs'
                      }`}
                    >
                      {inSpecList ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Spec List</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add To Spec List</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
