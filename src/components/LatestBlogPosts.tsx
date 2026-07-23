import React from 'react';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

export const LatestBlogPosts: React.FC = () => {
  const blogs = [
    {
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      author: 'Dr. A. K. Deshmukh',
      role: 'Agri Water Specialist',
      readTime: '5 min read',
      category: 'Micro Irrigation',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    },
    {
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      author: 'Er. Nitin Verma',
      role: 'Senior Plumbing Engineer',
      readTime: '6 min read',
      category: 'Plumbing Systems',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
    },
    {
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      author: 'Kothari Technical Team',
      role: 'Hydraulic Research Division',
      readTime: '4 min read',
      category: 'Agri & Borewell',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    }
  ];

  return (
    <section id="blog" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
          <div className="space-y-2">
           
            <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">
              Latest Blog Posts
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              In-depth engineering articles, farming guides, and water management tutorials curated by Kothari specialists.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] rounded-2xl border border-[#DCEAF5] p-5 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] bg-[#F5FAFF] rounded-xl overflow-hidden border border-[#DCEAF5]">
                  <img
                    src={b.image}
                    alt={b.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-medium text-[#5F6B7A]">
                  <span className="bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] px-2.5 py-0.5 rounded-full">
                    {b.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {b.readTime}
                  </span>
                </div>

                <h3 className="text-base font-medium text-[#1575B3] line-clamp-2">
                  {b.title}
                </h3>

                <p className="text-xs font-light text-[#5F6B7A] leading-relaxed line-clamp-3">
                  {b.snippet}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#DCEAF5] flex items-center justify-between text-xs font-medium text-[#5F6B7A]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#1575B3]" />
                  <span>{b.author}</span>
                </div>
                <button className="text-[#1575B3] hover:underline flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
