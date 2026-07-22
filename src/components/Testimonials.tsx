import React from 'react';
import { Quote, Star, MapPin, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Rajesh Patil',
      role: 'Progressive Farmer (15 Acres Sugarcane)',
      location: 'Kolhapur, Maharashtra',
      text: 'Kothari Inline Drip System transformed my farm. The 3D turbulent emitters never get clogged despite hard borewell water. My sugarcane yield increased by 38% while water consumption dropped by half.',
      segment: 'Micro Irrigation System',
      rating: 5
    },
    {
      name: 'Er. Suresh Sharma',
      role: 'Chief MEP Consultant',
      location: 'Ahmedabad, Gujarat',
      text: 'We specified Kothari CPVC and UPVC pipes for a 22-story residential tower. Zero leaks during 25-bar hydrostatic pressure testing, and the SWR acoustic pipes keep bathroom drainage completely silent.',
      segment: 'Plumbing Pipes & fittings',
      rating: 5
    },
    {
      name: 'Ramesh Chaudhary',
      role: 'Agri Retail Distributor (20+ Years)',
      location: 'Ludhiana, Punjab',
      text: 'Farmers in our region insist on Kothari Submersible Column Pipes and Agri UPVC Pressure Lines. Their square thread design and heavy wall thickness never fail deep borewells.',
      segment: 'Agri Pipes & fittings',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
         
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3]">
            Testimonials
          </h2>
          <p className="text-sm font-bold text-[#5F6B7A]">
            Read how farmers, MEP engineers, and regional dealers describe their experience with Kothari products.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#F5FAFF] p-6 rounded-2xl border border-[#DCEAF5] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1575B3] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold  text-[#1575B3] bg-white border border-[#DCEAF5] px-2 py-0.5 rounded">
                    {rev.segment}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#1575B3]/30" />

                <p className="text-xs sm:text-sm font-bold text-[#111111] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCEAF5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1575B3] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#1575B3]">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] font-bold text-[#5F6B7A]">
                    {rev.role}
                  </p>
                  <p className="text-[10px] font-bold text-[#111111] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#1575B3]" />
                    {rev.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
