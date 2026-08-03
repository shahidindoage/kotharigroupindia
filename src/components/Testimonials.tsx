import React from 'react';
import { Quote, Star, MapPin, CheckCircle2 } from 'lucide-react';

type Variant = 'blue' | 'green';

export const Testimonials: React.FC<{ variant?: Variant }> = ({ variant = 'blue' }) => {
  const t = variant === 'green'
    ? {
        divider: 'border-[#BFE4CC]',
        heading: 'text-[#1E8E3E]',
        card: 'bg-[#F2FBF4] border-[#BFE4CC] hover:border-[#1E8E3E]',
        chip: 'text-[#1E8E3E] border-[#BFE4CC]',
        quote: 'text-[#1E8E3E]/30',
        avatar: 'bg-[#1E8E3E]',
        name: 'text-[#1E8E3E]',
        pin: 'text-[#1E8E3E]'
      }
    : {
        divider: 'border-[#DCEAF5]',
        heading: 'text-[#1575B3]',
        card: 'bg-[#F5FAFF] border-[#DCEAF5] hover:border-[#1575B3]',
        chip: 'text-[#1575B3] border-[#DCEAF5]',
        quote: 'text-[#1575B3]/30',
        avatar: 'bg-[#1575B3]',
        name: 'text-[#1575B3]',
        pin: 'text-[#1575B3]'
      };

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
    <section className={`py-16 bg-[#FFFFFF] border-b text-left ${t.divider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
         
          <h2 className={`text-3xl sm:text-4xl font-medium ${t.heading}`}>
            Testimonials
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Read how farmers, MEP engineers, and regional dealers describe their experience with Kothari products.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border shadow-xs flex flex-col justify-between space-y-4 transition-all ${t.card}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-medium bg-white border px-2 py-0.5 rounded ${t.chip}`}>
                    {rev.segment}
                  </span>
                </div>

                <Quote className={`w-8 h-8 ${t.quote}`} />

                <p className="text-xs sm:text-sm font-light text-[#111111] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center gap-3 ${t.divider}`}>
                <div className={`w-10 h-10 rounded-full text-white font-medium text-sm flex items-center justify-center shrink-0 ${t.avatar}`}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-medium ${t.name}`}>
                    {rev.name}
                  </h4>
                  <p className="text-[11px] font-medium text-[#5F6B7A]">
                    {rev.role}
                  </p>
                  <p className="text-[10px] font-medium text-[#111111] flex items-center gap-1 mt-0.5">
                    <MapPin className={`w-3 h-3 ${t.pin}`} />
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
