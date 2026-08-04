import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { HighlightedPoints } from './components/HighlightedPoints';
import { WhyKothari } from './components/WhyKothari';
import { MilestonesSection } from './components/MilestonesSection';
import { ManufacturingPlantsSection } from './components/ManufacturingPlantsSection';
import { KnowledgeCentre } from './components/KnowledgeCentre';
import { NewsAndArticles } from './components/NewsAndArticles';
import { Testimonials } from './components/Testimonials';
import { LatestBlogPosts } from './components/LatestBlogPosts';
import { PipeFlowCalculator } from './components/PipeFlowCalculator';
import { MaterialComparisonTable } from './components/MaterialComparisonTable';
import { QualityAndManufacturing } from './components/QualityAndManufacturing';
import { CertificationsAndTrust } from './components/CertificationsAndTrust';
import { QuoteBuilderModal } from './components/QuoteBuilderModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ContactModal } from './components/ContactModal';
import { CareerModal } from './components/CareerModal';
import { Footer } from './components/Footer';
import { Home2 } from './components/Home2';
import { Home3 } from './components/Home3';
import { HomeCategories } from './components/HomeCategories';
import { SectorSolutions } from './components/SectorSolutions';
import { productsData } from './data/products';
import { ProductItem } from './types';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ProductDetailPage } from './pages/ProductDetailPage';

interface AppShellProps {
  loading: boolean;
  activeSection: string;
  handleScrollToSection: (sectionId: string) => void;
  contactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
  careerModalOpen: boolean;
  setCareerModalOpen: (open: boolean) => void;
  quoteModalOpen: boolean;
  setQuoteModalOpen: (open: boolean) => void;
  selectedProductModal: ProductItem | null;
  setSelectedProductModal: (product: ProductItem | null) => void;
  specList: string[];
  handleToggleSpecItem: (productId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function AppShell({
  loading,
  activeSection,
  handleScrollToSection,
  contactModalOpen,
  setContactModalOpen,
  careerModalOpen,
  setCareerModalOpen,
  quoteModalOpen,
  setQuoteModalOpen,
  selectedProductModal,
  setSelectedProductModal,
  specList,
  handleToggleSpecItem,
  searchQuery,
  setSearchQuery
}: AppShellProps) {
  const location = useLocation();
  const isStandalone = location.pathname === '/home2' || location.pathname === '/home3';

  return (
    <div className="min-h-screen bg-[#F5FAFF] text-[#111111] font-['Outfit',sans-serif] flex flex-col antialiased">
      
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#003F82]">
          <div className="flex flex-col items-center gap-6" style={{ animation: 'logoReveal 1s ease-out forwards' }}>
            <img
              src="https://kotharigroupindia.com/img/kothari-logo.png"
              alt="Kothari Group"
              className="h-20 w-auto object-contain brightness-0 invert"
            />
            <div className="w-48 h-1 rounded-lg bg-white/10 overflow-hidden relative">
              <div
                className="h-full rounded-lg bg-white/60"
                style={{ animation: 'loadBar 2.8s ease-in-out forwards' }}
              />
              <div
                className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{ animation: 'shimmer 1.8s 0.5s ease-in-out infinite' }}
              />
            </div>
            <span
              className="text-white/50 text-xs font-medium tracking-[0.25em] uppercase"
              style={{ animation: 'fadeSlideUp 0.8s 0.3s both' }}
            >
              Loading
            </span>
          </div>
        </div>
      )}

      {/* Header Navigation (hidden on Home2/Home3 which have their own header) */}
      {!isStandalone && (
        <Header
          onSelectTab={handleScrollToSection}
          activeSection={activeSection}
          onOpenContactModal={() => setContactModalOpen(true)}
          onOpenCareerModal={() => setCareerModalOpen(true)}
        />
      )}

      {/* Main Page Layout */}
      <main className="flex-1">
          <Routes>
            {/* Home Page Route */}
            <Route
              path="/"
              element={
                <>
                   
        {/* 1. Hero Section */}
        <Hero
          onExploreProducts={() => handleScrollToSection('categories')}
          onOpenCalculator={() => handleScrollToSection('calculator')}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />
        {/* 1. Hero1 Section */}
        {/* <Hero1
          onExploreProducts={() => handleScrollToSection('categories')}
          onOpenCalculator={() => handleScrollToSection('calculator')}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        /> */}

        {/* 2. Our Product Categories Section */}
        <HomeCategories />

        {/* 3. Category Section (Products, Segments, Projects) */}
        {/* <CategorySection
          products={productsData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectProduct={(product) => setSelectedProductModal(product)}
          specList={specList}
          onToggleSpecItem={handleToggleSpecItem}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        /> */}

        {/* 3. Highlighted Points Section */}
        <HighlightedPoints />

        {/* 3. Solutions For Every Sector Section */}
        {/* <SectorSolutions /> */}

        {/* 4. WHY KOTHARI? Section */}
        <WhyKothari />

        {/* 5. Company Milestones Section */}
        <MilestonesSection />

        {/* 6. Manufacturing Plants (Image Gallery) Section */}
        <ManufacturingPlantsSection />

        {/* 7. KNOWLEDGE CENTRE Section */}
        <KnowledgeCentre />

        {/* 6. News & Articles Section */}
        <NewsAndArticles />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. Latest Blog Posts Section */}
        <LatestBlogPosts />
                </>
              }
            />

            {/* Catalog Page Route */}
            {/* <Route path="/products" element={<CatalogPage />} /> */}

            {/* Dynamic & Direct Product Detail Page Routes */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/product" element={<ProductDetailPage />} />

            {/* Home2 Page Route */}
            <Route path="/home2" element={<Home2 />} />

            {/* Home3 Page Route */}
            <Route path="/home3" element={<Home3 />} />
          </Routes>
        </main>

      {/* Footer (hidden on Home2/Home3 which have their own footer) */}
      {!isStandalone && (
        <Footer
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
          onSelectSection={handleScrollToSection}
          onOpenContactModal={() => setContactModalOpen(true)}
          onOpenCareerModal={() => setCareerModalOpen(true)}
        />
      )}

      {/* Quote Builder Modal */}
      <QuoteBuilderModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialSpecCount={specList.length}
      />

      {/* Product Specification Detail Modal */}
      <ProductDetailModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        inSpecList={selectedProductModal ? specList.includes(selectedProductModal.id) : false}
        onToggleSpecItem={handleToggleSpecItem}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* Career Modal */}
      <CareerModal
        isOpen={careerModalOpen}
        onClose={() => setCareerModalOpen(false)}
      />

    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [careerModalOpen, setCareerModalOpen] = useState<boolean>(false);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [specList, setSpecList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timeout);
  }, []);

  const handleToggleSpecItem = (productId: string) => {
    setSpecList((prev) => 
      prev.includes(productId) 
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <AppShell
        loading={loading}
        activeSection={activeSection}
        handleScrollToSection={handleScrollToSection}
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
        careerModalOpen={careerModalOpen}
        setCareerModalOpen={setCareerModalOpen}
        quoteModalOpen={quoteModalOpen}
        setQuoteModalOpen={setQuoteModalOpen}
        selectedProductModal={selectedProductModal}
        setSelectedProductModal={setSelectedProductModal}
        specList={specList}
        handleToggleSpecItem={handleToggleSpecItem}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </BrowserRouter>
  );
}
