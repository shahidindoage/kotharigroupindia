import React from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle2,
  Droplet
} from 'lucide-react';

export const HighlightedPoints: React.FC = () => {
  const stats = [
    {
      number: '35+',
      unit: 'Years',
      label: 'Trusted Industry Legacy',
      description: 'Over three decades of manufacturing leadership and innovation in water piping.',
      icon: Award
    },
    {
      number: '23+',
      unit: 'States',
      label: 'Pan-India Distribution',
      description: 'Robust dealer and distributor network across 23+ Indian states for rapid delivery.',
      icon: MapPin
    },
    {
      number: '1M+',
      unit: 'Farmers',
      label: 'Empowered Across India',
      description: 'Helping farmers increase crop yields through water-saving micro irrigation.',
      icon: Users
    },
    {
      number: '100%',
      unit: 'Certified',
      label: 'BIS & ISO Quality',
      description: 'Strict quality inspection protocols ensuring 50+ years durable service lifespan.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-12 bg-[#1575B3] text-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          {/* <span className="bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Kothari Impact & Scale
          </span> */}
          {/* <h2 className="text-2xl sm:text-3xl font-extrabold text-white capitalize">
            HIGHLIGHTED POINTS & KEY METRICS
          </h2> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => {
            const IconComp = st.icon;
            return (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {st.number} <span className="text-base font-bold text-white/80">{st.unit}</span>
                  </span>
                  {/* <div className="p-2.5 rounded-xl bg-white/15 text-white">
                    <IconComp className="w-5 h-5" />
                  </div> */}
                </div>

                <h3 className="text-sm font-medium text-white">
                  {st.label}
                </h3>

                <p className="text-xs font-light text-white/80 leading-relaxed">
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
