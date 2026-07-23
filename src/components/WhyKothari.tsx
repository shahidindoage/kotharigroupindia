import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Lightbulb, 
  TrendingUp, 
  MapPin, 
  Headphones
} from 'lucide-react';

export const WhyKothari: React.FC = () => {
  const points = [
    {
      title: 'Trusted Legacy',
      description: 'With over 35 years of experience, Kothari is a trusted name in India’s water management industry.',
      icon: Award
    },
    {
      title: 'Proven Quality',
      description: 'We deliver durable, high-quality products designed to perform reliably in India\'s diverse rural and urban needs',
      icon: ShieldCheck
    },
    {
      title: 'Innovation at the Core',
      description: 'We lead through innovation with cutting-edge, affordable, and sustainable water management technologies.',
      icon: Lightbulb
    },
    {
      title: 'Empowering Growth',
      description: 'We help farmers and builders conserve water, enhance productivity, and contribute directly to India\'s growth and a prosperous future.',
      icon: TrendingUp
    },
    {
      title: 'Extensive Reach',
      description: 'Our extensive dealer and distributor network, spanning 23+ states, ensures wide accessibility and quick delivery of our products.',
      icon: MapPin
    },
    {
      title: 'Customer-First Service',
      description: 'Quick delivery, responsive after-sales support, and a customer-first approach ensure strong, long-lasting relationships unmatched by competitors.',
      icon: Headphones
    }
  ];

  return (
    <section id="why-kothari" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {/* <span className="bg-[#FFFFFF] border border-[#DCEAF5] text-[#1575B3] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-2xs">
            Why Choose Kothari Group?
          </span> */}
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">
          What makes
us unique?
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Discover why millions of farmers, engineers, real estate developers, and infrastructure leads rely on Kothari Group for water piping & micro irrigation excellence.
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, index) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DCEAF5] shadow-xs hover:border-[#1575B3] hover:shadow-lg transition-all text-left flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ffff] text-[#1575B3] border border-[#DCEAF5] flex items-center justify-center group-hover:bg-[#1575B3] group-hover:text-white transition-colors shadow-2xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-medium text-[#1575B3]">
                    {pt.title}
                  </h3>

                  <p className="text-xs font-light text-[#111111] leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                {/* <div className="pt-3 border-t border-[#DCEAF5] flex items-center justify-between text-[11px] font-bold text-[#5F6B7A]">
                  <span>Kothari Advantage</span>
                  <span className="text-[#1575B3]">0{index + 1}</span>
                </div> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
