import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Download, ShieldCheck, CheckCircle2, ChevronRight, 
  Send, Sparkles, AlertCircle, Layers,
  Table as TableIcon, Box, HelpCircle, Award, Wrench, Search, 
  ExternalLink, Check, Phone, Mail, Share2, Copy, Sliders,
  CheckSquare, RefreshCw, Info, Eye, ChevronDown,
  ChevronUp, Zap, Building2, HardHat, Droplets, ArrowRight, Factory
} from 'lucide-react';
import { productsData } from '../data/products';
import { ProductItem } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find product by ID or default to 'upvc-underground-drainage' if not specified or not found
  const product: ProductItem = 
    productsData.find((p) => p.id === id) || 
    productsData.find((p) => p.id === 'upvc-underground-drainage') || 
    productsData[0];

  const [activeTab, setActiveTab] = useState<'FEATURES' | 'SPECIFICATIONS' | 'APPLICATIONS' | 'CERTIFICATES' | 'FAQs'>('FEATURES');
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  
  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMobile, setInquiryMobile] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [projectRole, setProjectRole] = useState('Contractor / MEP Consultant');
  const [estimatedQuantity, setEstimatedQuantity] = useState('100m - 500m');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Filters & Interactivity
  const [dimensionSearch, setDimensionSearch] = useState('');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [fittingModal, setFittingModal] = useState<{ id?: string; name: string; sizes?: string; description?: string } | null>(null);
  
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);
  
  // Accordion FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIdx(0);
    setDimensionSearch('');
  }, [id]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryMobile.trim()) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryName('');
      setInquiryMobile('');
      setInquiryEmail('');
    }, 6000);
  };

  const handleCopySpec = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotification(text);
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  const filteredDimensions = (product.dimensionsTable || []).filter((row) => 
    row.size.toString().includes(dimensionSearch.trim()) ||
    `${row.minOuterDia}-${row.maxOuterDia}`.includes(dimensionSearch.trim())
  );

  const fittingsList =[
    {name:'Square Gully Trap with Jali',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Square-Gully-Trap-with-Jali-1-300x300.webp'},
    {name:'Selfit Single Y 45°',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Single-Y-45-300x300.webp'},
    {name:'Selfit Single Tee 87.5°',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Single-Tee-87.5-300x300.webp'},
    {name:'Selfit Reducing Y 45°',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Reducing-Y-45-300x300.webp'},
    {name:'Selfit Reducing Tee 87.5°',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Reducing-Tee-87.5-300x300.webp'},
    {name:'Selfit Eccentric Reducer',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Eccentric-Reducer-300x300.webp'},
    {name:'Selfit Double Y',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Double-Y-300x300.webp'},
    {name:'Selfit Cross Tee',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Cross-Tee-300x300.webp'},
    {name:'Selfit Coupler',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Coupler-300x300.webp'},
    {name:'Selfit Bend 87.5°',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Bend-87.5-300x300.webp'},
    {name:'Selfit Bend 45°',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Bend-45-300x300.webp'},
    {name:'Fabricated Coupler',image:'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Fabricated-Coupler-300x300.webp'}
  ];

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Gallery Angles/Views
  const productGallery = [
    { title: 'Main Product View', url: product.image, desc: 'High-density precision extrusion finish' },
    { title: 'Socket & Rubber Ring Joint', url: '/src/assets/images/fittings_valves_showcase_1784717758011.jpg', desc: 'Elastomeric sealing ring technology' },
    { title: 'Multilayer Structural Wall', url: '/src/assets/images/hero_pipes_render_1784717744659.jpg', desc: 'High ring stiffness SN2, SN4, SN8' },
    { title: 'Installation Site View', url: product.image, desc: 'Trench bed laydown & underground fitment' }
  ];

  return (
    <div className="min-h-screen bg-[#F5FAFF] text-[#111111] text-left pb-24 font-['Outfit',sans-serif]">
      
      {/* Top Floating Notification Toast */}
      {copiedNotification && (
        <div className="fixed top-20 right-6 z-50 bg-[#1575B3] text-white text-xs font-extrabold py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-2 border border-white/20 animate-in slide-in-from-top-4">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>Copied specification to clipboard: &quot;{copiedNotification}&quot;</span>
        </div>
      )}

      {/* Top Breadcrumbs Bar */}
      <div className="bg-[#FFFFFF] border-b border-[#DCEAF5] py-3.5 px-4 sm:px-8 sticky top-0 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs font-medium text-[#5F6B7A] overflow-x-auto whitespace-nowrap py-0.5">
            <Link to="/" className="hover:text-[#1575B3] transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1575B3]" />
            <Link to="/" className="hover:text-[#1575B3] transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#1575B3]" />
            <span className="text-[#1575B3]">
              {product.divisionName || 'Pipe Division'}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#1575B3]" />
            {product.subCategory && (
              <>
                <span className="text-[#1575B3]">
                  {product.subCategory}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-[#1575B3]" />
              </>
            )}
            <span className="text-[#111111] font-bold truncate max-w-[240px] sm:max-w-none">
              {product.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* <button
              onClick={() => handleCopySpec(`${product.name} - ${product.specs.diameterRange} (${product.specs.materialGrade})`)}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#5F6B7A] hover:text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-3 py-1.5 rounded-xl transition-all cursor-pointer"
              title="Copy Spec Summary"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Copy Spec</span>
            </button> */}

            {/* <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-3.5 py-1.5 rounded-xl hover:bg-[#1575B3] hover:text-white transition-all shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Catalog
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Corporate Header Banner */}
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F5FAFF] border-b border-[#DCEAF5] py-10 sm:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium bg-[#1575B3] text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-lg tracking-wider shadow-xs flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              { 'Underground Pipe and Fittings'}
            </span>
            <span className=" bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] sm:text-[11px] font-medium px-3 py-1 rounded-lg flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              BIS Certified • {product.manufacturingStandard || 'IS 13592:2013'}
            </span>
            {product.cadAvailable && (
              <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[10px] sm:text-[11px] font-medium px-3 py-1 rounded-lg flex items-center gap-1">
                <Box className="w-3.5 h-3.5 text-amber-600" />
                2D/3D CAD Files Available
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#1575B3] leading-tight tracking-tight">
              UPVC Underground Drainage Piping System (solid wall UDS)
            </h1>
            <p className="text-sm sm:text-base font-light text-[#5F6B7A] max-w-4xl leading-relaxed">
              {`${product.divisionName || 'Pipe Division'} | ${product.subCategory || 'Underground Pipe and Fittings'} | ${product.name}`}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#DCEAF5] shadow-2xs">
              <span className="text-[10px] font-bold text-[#5F6B7A] uppercase tracking-wider block">Diameter Range</span>
              <span className="text-xs sm:text-sm font-black text-[#111111]">{product.specs.diameterRange}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#DCEAF5] shadow-2xs">
              <span className="text-[10px] font-bold text-[#5F6B7A] uppercase tracking-wider block">Standard Length</span>
              <span className="text-xs sm:text-sm font-black text-[#111111]">{product.specs.standardLength}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#DCEAF5] shadow-2xs">
              <span className="text-[10px] font-bold text-[#5F6B7A] uppercase tracking-wider block">Joining Technology</span>
              <span className="text-xs sm:text-sm font-black text-[#1575B3] truncate block">{product.specs.joiningMethod}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-[#DCEAF5] shadow-2xs">
              <span className="text-[10px] font-bold text-[#5F6B7A] uppercase tracking-wider block">Material Grade</span>
              <span className="text-xs sm:text-sm font-black text-[#111111]">{product.specs.materialGrade}</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Product Hero Section (Visual Showcase + Interactive Tabbed Info) */}
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* Left Column: Multi-Angle Visual Showcase */}
    <div className="lg:col-span-5 bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 h-full relative overflow-hidden group">
      <div className="space-y-4">
        
        {/* Main Image Frame */}
        <div className="relative aspect-[4/3] w-full flex items-center justify-center bg-[#F5FAFF] rounded-2xl overflow-hidden border border-[#DCEAF5] group">
          {/* <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
            <span className="bg-[#1575B3] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
              KOTHARI INDUSTRIAL PIPING
            </span>
            <span className="bg-white/95 backdrop-blur-md text-[#1575B3] border border-[#DCEAF5] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs">
              100% Virgin Grade uPVC
            </span>
          </div> */}

          <img
            src={`https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp`}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
            <Eye className="w-3 h-3 text-sky-400" />
            <span>{productGallery[activeImageIdx]?.title}</span>
          </div> */}
        </div>

        {/* Image Thumbnail Selector */}
        {/* <div className="grid grid-cols-4 gap-2">
          {productGallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIdx(idx)}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-all p-0.5 cursor-pointer ${
                activeImageIdx === idx 
                  ? 'border-[#1575B3] ring-2 ring-[#1575B3]/20 scale-105' 
                  : 'border-[#DCEAF5] hover:border-[#1575B3]/50 opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
          ))}
        </div> */}

        {/* Certifications Bar Below Image */}
        <div className="pt-3 border-t border-[#DCEAF5] flex flex-wrap items-center justify-between text-xs font-medium text-[#5F6B7A] gap-2">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#1575B3]" />
            IS 15328 / IS 13592 Compliant
          </span>
          <span className="text-emerald-700 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Zero Leak Guarantee
          </span>
        </div>
      </div>

      {/* Main Primary Action Button */}
      <button
        onClick={() => setBrochureModalOpen(true)}
        className="w-full bg-[#1575B3] hover:bg-[#0E588A] text-white font-medium text-sm py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group cursor-pointer mt-auto"
      >
        <Download className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
        <span>Download Technical Catalog (.PDF)</span>
      </button>

    </div>

    {/* Right Column: Tabbed Information Center */}
   {/* Right Column: Tabbed Information Center */}
<div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 shadow-sm flex flex-col justify-start space-y-4 h-full">
  
  {/* Nav Tabs Bar */}
  <div className="flex flex-wrap gap-2 border-b border-[#DCEAF5] pb-2.5 overflow-x-auto">
    {[
      { key: 'FEATURES', label: 'Features', icon: Sparkles },
      { key: 'SPECIFICATIONS', label: 'Specifications', icon: Sliders },
      { key: 'APPLICATIONS', label: 'Applications', icon: Layers },
      { key: 'CERTIFICATES', label: 'Certificates', icon: Award },
      { key: 'FAQs', label: 'FAQs', icon: HelpCircle }
    ].map((tab) => {
      const IconComp = tab.icon;
      const isActive = activeTab === tab.key;
      return (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key as any)}
          className={`px-4 py-2.5 rounded-xl text-[10px] sm:text-[13px] font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
            isActive
              ? 'bg-[#1575B3] text-white shadow-xs'
              : 'bg-[#F5FAFF] text-[#5F6B7A] hover:bg-[#DCEAF5] hover:text-[#1575B3]'
          }`}
        >
          <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#1575B3]'}`} />
          <span>{tab.label}</span>
        </button>
      );
    })}
  </div>

  {/* Tab Panels - Removed fixed min-h-[280px] so it sits right under tabs */}
  <div className="w-full space-y-2.5">
    
    {/* FEATURES TAB */}
    {activeTab === 'FEATURES' && (
      <div className="space-y-4 animate-in fade-in duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
          <h3 className="text-base font-medium text-[#1575B3] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1575B3]" />
            Features
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: 'Leak proof', desc: 'Advanced rubber ring technology provides a secure and long-lasting fit.' },
            { title: 'Anti-rodent', desc: 'Special uPVC composition and smooth outer surface deter rodents from damaging the pipes' },
            { title: 'Light weight', desc: 'Makes handling, loading, and unloading simple.' },
            { title: 'Easy installation', desc: 'Designed for easy jointing and quick assembly, even in wet conditions' },
            { title: 'Good Impact resistance', desc: 'uPVC material resists damage from soil load and external pressure.' },
            { title: 'Resistance to abrasion', desc: 'Smooth internal bore minimizes friction' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#F5FAFF] p-4 rounded-2xl border border-[#DCEAF5] space-y-1.5 hover:border-[#1575B3]/40 transition-colors">
              <div className="flex items-center gap-2 font-medium text-xs sm:text-sm text-[#1575B3]">
                <div className="w-5 h-5 rounded-full bg-[#1575B3] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                  ✓
                </div>
                <span>{item.title}</span>
              </div>
              <p className="text-xs font-light text-[#5F6B7A] leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* SPECIFICATIONS TAB */}
    {activeTab === 'SPECIFICATIONS' && (
      <div className="space-y-4 animate-in fade-in duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
          <h3 className="text-base font-medium text-[#1575B3] flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#1575B3]" />
            Specifications
          </h3>
        </div>

        <div className="bg-[#F5FAFF] rounded-2xl border border-[#DCEAF5] p-5 space-y-4">
          <h4 className="text-xs font-medium text-[#1575B3]  tracking-wider">
            Available Sizes
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#DCEAF5] space-y-1">
              <span className="text-xs font-medium text-[#5F6B7A]  tracking-wide block">Pipes</span>
              <span className="text-base font-light text-[#111111]">63 to 400 mm</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#DCEAF5] space-y-1">
              <span className="text-xs font-medium text-[#5F6B7A]  tracking-wide block">Fittings</span>
              <span className="text-base font-light text-[#1575B3]">110 &amp; 160 mm</span>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* APPLICATIONS TAB */}
    {activeTab === 'APPLICATIONS' && (
      <div className="space-y-4 animate-in fade-in duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
          <h3 className="text-base font-medium text-[#1575B3] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#1575B3]" />
            Applications
          </h3>
        </div>

        <div className="bg-[#F5FAFF] rounded-2xl border border-[#DCEAF5] p-5">
          <p className="text-xs sm:text-sm font-light text-[#111111] leading-relaxed">
            KOTHARI KWIK Drain is an advanced drainage and sewerage solution for efficient wastewater disposal. The system are noticeably lighter and less expensive PVC pipes/ concrete pipes.These pipes are interchangeable with solid wall pipes and are compatible with regular PVC fittings.
          </p>
        </div>
      </div>
    )}

    {/* CERTIFICATES TAB */}
    {activeTab === 'CERTIFICATES' && (
      <div className="space-y-4 animate-in fade-in duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
          <h3 className="text-base font-medium text-[#1575B3] flex items-center gap-2">
            <Award className="w-4 h-4 text-[#1575B3]" />
            Verified Quality Certifications &amp; Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(product.specs?.certifications || ['IS 15328:2003', 'IS 13592:2013', 'EN 1404-1', 'ISO 9001:2015']).map((cert, idx) => (
            <div key={idx} className="bg-[#F5FAFF] p-4 rounded-2xl border border-[#DCEAF5] flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-[#111111]">{cert}</div>
                  <div className="text-[10px] text-[#5F6B7A]">Bureau of Indian Standards</div>
                </div>
              </div>
              <span className="text-[10px] font-black text-[#1575B3] bg-white border border-[#DCEAF5] px-2.5 py-1 rounded-md shrink-0">
                Verified
              </span>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* FAQs TAB */}
    {activeTab === 'FAQs' && (
      <div className="space-y-3 animate-in fade-in duration-200">
        <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
          <h3 className="text-base font-medium text-[#1575B3] flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#1575B3]" />
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-2.5">
          {(product.faqs || [
            { question: 'What is the service lifespan of Kothari pipes?', answer: 'Kothari virgin UPVC & CPVC pipes are engineered for a minimum 50+ year maintenance-free design life.' },
            { question: 'Are these pipes certified by BIS and ISO?', answer: 'Yes, all products comply with relevant BIS (IS 15328, IS 13592, IS 4985, IS 15778) and ISO 9001:2015 standards.' }
          ]).map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div key={idx} className="bg-[#F5FAFF] rounded-2xl border border-[#DCEAF5] overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full p-4 text-left font-medium text-xs sm:text-sm text-[#111111] hover:text-[#1575B3] flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#1575B3] font-bold">Q:</span>
                    {faq.question}
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-[#1575B3]" /> : <ChevronDown className="w-4 h-4 text-[#5F6B7A]" />}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 text-xs font-light text-[#5F6B7A] border-t border-[#DCEAF5]/60 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    )}

  </div>

</div>

  </div>
</div>

      {/* Composition Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-10">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#DCEAF5] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3] shrink-0">
              <Factory className="w-5 h-5 text-[#1575B3]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#1575B3] tracking-wide">
                Composition
              </h3>
              <p className="text-xs font-light text-[#5F6B7A]">
                Raw Material Composition &amp; Manufacturing Specifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#F5FAFF] rounded-2xl p-6 border border-[#DCEAF5]">
            <div className="md:col-span-8 space-y-2">
              {/* <span className="text-[10px] font-black text-[#1575B3] uppercase tracking-wider bg-white border border-[#DCEAF5] px-2.5 py-1 rounded-md inline-block">
                Material &amp; Technology
              </span> */}
              <p className="text-sm sm:text-base font-light text-[#111111] leading-relaxed">
                {product.composition || 'Manufactured from virgin unplasticized polyvinyl chloride (UPVC) on a Hi-Tech European Multilayer technology machine.'}
              </p>
            </div>

            <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-[#DCEAF5] space-y-1.5 shadow-2xs">
              <span className="text-[10px] font-light text-[#5F6B7A]  tracking-wider block">
                Manufacturing Standard
              </span>
              <span className="text-base sm:text-lg font-medium text-[#1575B3] block">
                {product.manufacturingStandard || 'IS 13592:2013'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Standards & Dimensions Specification Tables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-10 space-y-8">
        
        {/* STANDARDS TABLE */}
        {product.pipeStandardsTable && product.pipeStandardsTable.length > 0 && (
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DCEAF5] pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#1575B3]  tracking-wide">
                 
                  System Standards & End Connections
                </h3>
                <p className="text-xs font-light text-[#5F6B7A]">
                  Certified sizes and joining standards for pipes and fittings.
                </p>
              </div>
              <span className="text-xs font-medium text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-3 py-1 rounded-full">
                BIS IS:15328 Approved
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#DCEAF5]">
              <table className="w-full text-xs font-medium text-left border-collapse">
                <thead>
                  <tr className="bg-[#1575B3] text-white font-medium">
                    <th colSpan={3} className="font-medium py-3 px-4 border-r border-[#0E588A] text-center  tracking-wider">
                      Pipes Specifications
                    </th>
                    <th colSpan={3} className="font-medium py-3 px-4 text-center  tracking-wider">
                      Fittings Specifications
                    </th>
                  </tr>
                  <tr className="bg-[#F5FAFF] text-[#1575B3] font-medium border-b border-[#DCEAF5]">
                    <th className="py-2.5 px-4 border-r border-[#DCEAF5]">Size (mm)</th>
                    <th className="py-2.5 px-4 border-r border-[#DCEAF5]">Standard</th>
                    <th className="py-2.5 px-4 border-r border-[#DCEAF5]">End Connection</th>
                    <th className="py-2.5 px-4 border-r border-[#DCEAF5]">Size (mm)</th>
                    <th className="py-2.5 px-4 border-r border-[#DCEAF5]">Standard</th>
                    <th className="py-2.5 px-4">End Connection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCEAF5]">
                  {product.pipeStandardsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F5FAFF] transition-colors text-[#111111]">
                      <td className="py-3 px-4 border-r border-[#DCEAF5] font-medium text-[#1575B3]">{row.sizeRange}</td>
                      <td className="py-3 px-4 border-r border-[#DCEAF5] font-light">{row.standard}</td>
                      <td className="py-3 px-4 border-r border-[#DCEAF5] font-light">{row.endConnection}</td>
                      {idx === 0 ? (
                        <>
                          <td rowSpan={product.pipeStandardsTable?.length || 3} className="py-3 px-4 border-r border-[#DCEAF5] font-light text-[#1575B3] align-middle">
                            110 &amp; 160
                          </td>
                          <td rowSpan={product.pipeStandardsTable?.length || 3} className="py-3 px-4 border-r border-[#DCEAF5] font-light align-middle">
                            EN-1404-1
                          </td>
                          <td rowSpan={product.pipeStandardsTable?.length || 3} className="py-3 px-4 align-middle font-light">
                            Elastomeric Sealing Ring Joint &amp; Solvent Joint
                          </td>
                        </>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DIMENSIONS TABLE */}
        {product.dimensionsTable && product.dimensionsTable.length > 0 && (
          <div className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#1575B3]  tracking-wide">
                 Outside Diameters & Wall Thickness Dimensions
                </h3>
                <p className="text-xs font-light text-[#5F6B7A]">
                  Outer diameter tolerances and wall thickness across Ring Stiffness Classes (SN 2, SN 4, SN 8).
                </p>
              </div>

              {/* Filter Size */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-[#1575B3] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter size e.g. 110, 160, 200..."
                  value={dimensionSearch}
                  onChange={(e) => setDimensionSearch(e.target.value)}
                  className="w-full bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl pl-9 pr-4 py-2 text-xs font-light focus:outline-none focus:border-[#1575B3]"
                />
              </div>
            </div>

            {/* Table Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-[#5F6B7A] bg-[#F5FAFF] p-3 rounded-xl border border-[#DCEAF5]">
              <span className="text-[#111111] font-medium">Stiffness Legend:</span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                SN 2 (SDR 51 - Light Duty)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                SN 4 (SDR 41 - Standard Underground)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1575B3]"></span>
                SN 8 (SDR 34 - Heavy Traffic Duty)
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#DCEAF5]">
              <table className="w-full text-xs font-bold text-center border-collapse">
                <thead>
                  <tr className="bg-[#F5FAFF] text-[#1575B3] border-b border-[#DCEAF5] font-medium">
                    <th rowSpan={2} className="py-3 px-4 border-r border-[#DCEAF5] text-left font-medium">
                      Nominal Size (Outside Diameter)
                    </th>
                    <th colSpan={2} className="py-2 px-4 border-r border-[#DCEAF5] font-medium">
                      Mean Outside Diameter
                    </th>
                    <th colSpan={2} className="py-2 px-4 border-r border-[#DCEAF5] font-medium bg-sky-50 text-sky-900">
                      SN 2 (SDR 51)
                    </th>
                    <th colSpan={2} className="py-2 px-4 border-r border-[#DCEAF5] font-medium bg-blue-50 text-blue-900">
                      SN 4 (SDR 41)
                    </th>
                    <th colSpan={2} className="py-2 px-4 bg-[#1575B3]/10 text-[#1575B3] font-medium">
                      SN 8 (SDR 34)
                    </th>
                  </tr>
                  <tr className="bg-[#1575B3] text-white border-b border-[#DCEAF5] text-[11px]">
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Max (mm)</th>
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Max (mm)</th>
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Max (mm)</th>
                    <th className="py-1.5 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-1.5 px-3">Max (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCEAF5]">
                  {filteredDimensions.map((row) => (
                    <tr key={row.size} className="hover:bg-[#F5FAFF] transition-colors text-[#111111]">
                      <td className="py-3 px-4 border-r border-[#DCEAF5] text-left font-light text-[#1575B3]">
                        {row.size} mm
                      </td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light">{row.minOuterDia.toFixed(2)}</td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light">{row.maxOuterDia.toFixed(2)}</td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light text-[#5F6B7A] bg-sky-50/20">{row.sn2Min}</td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light text-[#5F6B7A] bg-sky-50/20">{row.sn2Max}</td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light text-[#5F6B7A] bg-blue-50/20">{row.sn4Min}</td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light text-[#5F6B7A] bg-blue-50/20">{row.sn4Max}</td>
                      <td className="py-3 px-3 border-r border-[#DCEAF5] font-light text-[#111111] bg-[#1575B3]/5">{row.sn8Min}</td>
                      <td className="py-3 px-3 text-[#111111] font-light bg-[#1575B3]/5">{row.sn8Max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* UDS Fittings Catalog Section */}
      {fittingsList.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 my-12 space-y-6">
          <div className="pb-4 border-b border-[#DCEAF5]">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#1575B3]  tracking-wide">
              Compatible System Fittings Catalog
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#5F6B7A] mt-1">
              Precision moulded heavy-duty fittings engineered for rubber ring and solvent weld underground jointing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {fittingsList.map((fit) => (
              <div
                key={fit.id || fit.name}
                onClick={() => setFittingModal(fit)}
                className="bg-[#FFFFFF] rounded-2xl border border-[#DCEAF5] p-3 text-center hover:border-[#1575B3] hover:shadow-md transition-all group cursor-pointer flex flex-col items-center justify-between space-y-3"
              >
                <div className="aspect-square w-full bg-[#F5FAFF] rounded-xl p-2 border border-[#DCEAF5] flex items-center justify-center overflow-hidden">
                  <img
                    src={fit.image || '/src/assets/images/uds_orange_fittings_1784799647727.jpg'}
                    alt={fit.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="text-xs font-medium text-[#111111] leading-tight group-hover:text-[#1575B3] transition-colors line-clamp-2 px-1">
                  {fit.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lead & Quote Request Section */}
      <div id="product-inquiry-form" className="max-w-7xl mx-auto px-4 sm:px-8 my-12">
        <div className="bg-gradient-to-r from-[#1575B3] to-[#0E588A] rounded-3xl p-6 sm:p-10 shadow-xl text-white space-y-6 relative overflow-hidden">
          
          <div className="space-y-2 relative z-10 max-w-3xl">
            {/* <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
              Technical Sales &amp; BOQ Desk
            </span> */}
            <h2 className="text-2xl sm:text-3xl font-medium text-white">
              Request Official Technical Quote or Project BOQ
            </h2>
            <p className="text-xs sm:text-sm font-light text-sky-100">
              Direct response within 4 hours from Kothari engineering representatives across India.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="bg-white text-[#111111] p-6 rounded-2xl flex items-center gap-4 animate-in fade-in shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <h4 className="font-black text-base text-[#1575B3]">BOQ Request Received!</h4>
                <p className="text-xs font-bold text-[#5F6B7A]">
                  Thank you, {inquiryName}. Our Kothari piping specialist will contact you directly on {inquiryMobile}.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-sky-100 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full bg-white text-[#111111] border border-white/30 rounded-xl px-4 py-2.5 text-xs font-light focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-sky-100 block mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={inquiryMobile}
                    onChange={(e) => setInquiryMobile(e.target.value)}
                    className="w-full bg-white text-[#111111] border border-white/30 rounded-xl px-4 py-2.5 text-xs font-light focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-sky-100 block mb-1">Project Role</label>
                  <select
                    value={projectRole}
                    onChange={(e) => setProjectRole(e.target.value)}
                    className="w-full bg-white text-[#111111] border border-white/30 rounded-xl px-4 py-2.5 text-xs font-light focus:outline-none"
                  >
                    <option>Contractor / MEP Consultant</option>
                    <option>Municipal Sewerage BOQ</option>
                    <option>Industrial Plant Buyer</option>
                    <option>Dealer / Distributor Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-sky-100 block mb-1">Est. Pipe Length</label>
                  <select
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(e.target.value)}
                    className="w-full bg-white text-[#111111] border border-white/30 rounded-xl px-4 py-2.5 text-xs font-light focus:outline-none"
                  >
                    <option>Under 100 meters</option>
                    <option>100m - 500m</option>
                    <option>500m - 2,000m</option>
                    <option>2,000m+ Bulk Supply</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/20">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white hover:bg-sky-50 text-[#1575B3] font-medium text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#1575B3]" />
                  <span>Submit Technical Request</span>
                </button>
                <div className="text-[11px] font-light text-sky-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>No spam guarantee • Kothari Engineering Direct Desk</span>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>

      {/* Related Products Cross-Sell */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 my-16 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#DCEAF5]">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium text-[#1575B3] ">
            Explore Complementary Kothari Systems
            </h2>
            <p className="text-xs font-light text-[#5F6B7A]">
              Certified plumbing, agricultural, and micro-irrigation systems.
            </p>
          </div>

          <Link
            to="/products"
            className="text-xs font-medium text-[#1575B3] hover:underline flex items-center gap-1"
          >
            <span>View Complete Portfolio</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              onClick={() => navigate(`/product/${rel.id}`)}
              className="bg-[#FFFFFF] rounded-2xl border border-[#DCEAF5] p-5 hover:border-[#1575B3] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] bg-[#F5FAFF] rounded-xl overflow-hidden border border-[#DCEAF5]">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* <span className="inline-block bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {rel.category}
                </span> */}

                <h3 className="text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors leading-snug">
                  {rel.name}
                </h3>

                <p className="text-xs font-light text-[#5F6B7A] line-clamp-2 leading-relaxed">
                  {rel.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCEAF5] flex items-center justify-between text-xs font-medium text-[#1575B3]">
                <span>View Full Specifications</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Quick Dealer Contact Bar */}
      {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-2">
        <a
          href="tel:1800123456"
          className="bg-[#1575B3] hover:bg-[#0E588A] text-white p-3 rounded-l-2xl shadow-lg transition-all flex items-center justify-center group"
          title="Call Kothari Desk"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        <button
          onClick={() => {
            const el = document.getElementById('product-inquiry-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-[#1575B3] hover:bg-[#0E588A] text-white font-extrabold text-xs py-4 px-2 rounded-l-2xl shadow-lg transition-all flex items-center [writing-mode:vertical-lr] tracking-wider uppercase cursor-pointer"
        >
          Dealer Inquiry
        </button>
      </div> */}

      {/* Brochure Modal */}
      {brochureModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setBrochureModalOpen(false)}
        >
          <div
            className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#1575B3]/10 text-[#1575B3] flex items-center justify-center font-black">
              <Download className="w-6 h-6 text-[#1575B3]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-[#111111]">
                Technical Catalog Download
              </h3>
              <p className="text-xs font-bold text-[#5F6B7A]">
                Official Kothari PDF specs sheet for {product.name}.
              </p>
            </div>

            <div className="bg-[#F5FAFF] p-3.5 rounded-2xl border border-[#DCEAF5] space-y-1 text-xs font-bold">
              <div className="font-black text-[#1575B3]">{product.brochureName || 'Kothari_Pipe_Technical_Catalogue.pdf'}</div>
              <div className="text-[#5F6B7A]">Format: PDF | File Size: 3.8 MB</div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  alert(`Downloading ${product.brochureName || 'Kothari_Catalogue.pdf'}...`);
                  setBrochureModalOpen(false);
                }}
                className="flex-1 bg-[#1575B3] hover:bg-[#0E588A] text-white font-black text-xs py-3 rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>

              <button
                onClick={() => setBrochureModalOpen(false)}
                className="bg-[#F5FAFF] hover:bg-[#DCEAF5] text-[#5F6B7A] font-extrabold text-xs py-3 px-4 rounded-xl transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fitting Details Modal */}
      {fittingModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setFittingModal(null)}
        >
          <div
            className="bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#DCEAF5]">
              <span className="text-xs font-black text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-0.5 rounded-md">
                Kothari Fitting Specification
              </span>
              <button
                onClick={() => setFittingModal(null)}
                className="text-xs font-bold text-[#5F6B7A] hover:text-[#111111]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-[#111111]">
                {fittingModal.name}
              </h3>
              {fittingModal.sizes && (
                <span className="inline-block bg-[#1575B3]/10 text-[#1575B3] text-xs font-extrabold px-2.5 py-0.5 rounded-md">
                  Sizes: {fittingModal.sizes}
                </span>
              )}
            </div>

            <p className="text-xs font-bold text-[#5F6B7A] leading-relaxed">
              {fittingModal.description || 'Precision moulded heavy duty fitting manufactured according to EN 1404-1 standards with elastomeric sealing ring joint options.'}
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setFittingModal(null);
                  const el = document.getElementById('product-inquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#1575B3] hover:bg-[#0E588A] text-white font-black text-xs py-3.5 rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Request Quote for this Fitting
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
