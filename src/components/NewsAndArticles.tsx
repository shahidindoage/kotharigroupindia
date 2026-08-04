import React from 'react';
import { Newspaper, Calendar, ArrowRight, Tag } from 'lucide-react';

type Variant = 'blue' | 'green';

export const NewsAndArticles: React.FC<{ variant?: Variant }> = ({ variant = 'blue' }) => {
  const t = variant === 'green'
    ? {
       


          section: 'bg-[#F5FAFF] border-[#DCEAF5]',
      heading: 'text-[#1E8E3E]',
        chip: 'bg-[#F5FAFF] border-[#DCEAF5] text-[#1575B3]',
        imgWrap: 'bg-[#F5FAFF] border-[#DCEAF5]',
        link: 'text-[#1575B3]',
        card: 'border-[#DCEAF5]',
        divider: 'border-[#DCEAF5]'
      }
    : {
        section: 'bg-[#F5FAFF] border-[#DCEAF5]',
        heading: 'text-[#1575B3]',
        chip: 'bg-[#F5FAFF] border-[#DCEAF5] text-[#1575B3]',
        imgWrap: 'bg-[#F5FAFF] border-[#DCEAF5]',
        link: 'text-[#1575B3]',
        card: 'border-[#DCEAF5]',
        divider: 'border-[#DCEAF5]'
      };

  const newsList = [
    {
      title: 'Kothari Group Expands Micro Irrigation Manufacturing Plant',
      date: 'July 18, 2026',
      category: 'Corporate Growth',
      snippet: 'Inauguration of a new high-speed LLDPE drip tube extrusion line with state-of-the-art laser perforation technology to meet growing demand across 23+ Indian states.',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg'
    },
    {
      title: 'Recognition at National Water Conservation Excellence Summit',
      date: 'June 02, 2026',
      category: 'Awards & Recognition',
      snippet: 'Kothari Group awarded for pioneering low-pressure micro sprinkler systems that reduce agricultural water consumption by 50% while improving crop productivity.',
      image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
    },
    {
      title: 'Kothari Unveils Lead-Free CPVC Hot Water Piping Standard',
      date: 'May 14, 2026',
      category: 'Product Innovation',
      snippet: 'New NSF 61 certified lead-free CPVC formulation launched for high-rise residential projects and cleanroom pharmaceutical facilities across India.',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    }
  ];

  return (
    <section id="news" className={`py-16 border-b text-left ${t.section}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b ${t.divider}`}>
          <div className="space-y-2">
          
            <h2 className={`text-3xl sm:text-4xl font-medium ${t.heading}`}>
              News & Articles
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Stay informed with latest Kothari Group press releases, factory expansions, and industry recognitions.
            </p>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsList.map((item, idx) => (
            <div
              key={idx}
              className={`bg-[#FFFFFF] rounded-lg border p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group ${t.card}`}
            >
              <div className="space-y-3">
                <div className={`aspect-[16/10] rounded-lg overflow-hidden border ${t.imgWrap}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-medium text-[#5F6B7A]">
                  <span className={`px-2.5 py-0.5 rounded-lg border ${t.chip}`}>
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className={`text-base font-medium line-clamp-2 ${t.heading}`}>
                  {item.title}
                </h3>

                <p className="text-xs font-light text-[#5F6B7A] leading-relaxed line-clamp-3">
                  {item.snippet}
                </p>
              </div>

              <div className={`pt-4 mt-4 border-t ${t.divider}`}>
                <button className={`text-xs font-medium hover:underline flex items-center gap-1 ${t.link}`}>
                  <span>Read Full Article</span>
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
