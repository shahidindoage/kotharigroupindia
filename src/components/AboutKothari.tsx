import React from 'react';
import { Sprout, ArrowRight } from 'lucide-react';

type Variant = 'blue' | 'green';

const theme = (variant: Variant) => {
  const blue = variant === 'blue';
  return {
    bgGrad: blue
      ? 'bg-gradient-to-br from-[#F5FAFF] via-[#FFFFFF] to-[#E8F2FA]'
      : 'bg-gradient-to-br from-[#F5FBF7] via-[#FFFFFF] to-[#EEF9F2]',
    border: blue ? 'border-[#DCEAF5]' : 'border-[#BFE4CC]',
    heading: blue ? 'text-[#003F82]' : 'text-[#0F6B2B]',
    textPrimary: blue ? 'text-[#1575B3]' : 'text-[#1E8E3E]',
    stroke: blue ? '#1575B3' : '#1E8E3E',
    shadowImg: blue ? 'shadow-[#1575B3]/15' : 'shadow-[#0F6B2B]/15',
    overlay: blue ? 'from-[#003F82]/85' : 'from-[#0F6B2B]/85',
    btn: blue
      ? 'bg-gradient-to-r from-[#1575B3] to-[#003F82] shadow-[#1575B3]/25'
      : 'bg-gradient-to-r from-[#1E8E3E] to-[#0F6B2B] shadow-[#1E8E3E]/25'
  };
};

const FIELD_IMAGE = 'field3.jpeg';
const PRODUCT_IMAGE = 'field2.jpg';

interface AboutKothariProps {
  variant?: Variant;
}

export const AboutKothari: React.FC<AboutKothariProps> = ({ variant = 'green' }) => {
  const t = theme(variant);

  return (
    <section
      id="about-us"
      className={`relative overflow-hidden py-20 sm:py-24 border-b ${t.bgGrad} ${t.border} scroll-mt-20`}
    >
      {/* Ghost text */}
      <span className="pointer-events-none select-none absolute -top-2 left-1/2 -translate-x-1/2 text-[clamp(4rem,10vw,9rem)] font-extrabold tracking-tight text-[#EAF8EF] whitespace-nowrap z-0">
        ABOUT
      </span>

      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#1E8E3E]/10 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full bg-[#1575B3]/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#7CC4EE]/10 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===================== LEFT: TEXT ===================== */}
          <div className="space-y-7">
            <span
              className={`inline-flex items-center gap-2 bg-[#FFFFFF]/80 backdrop-blur border text-[11px] font-semibold px-4 py-2 rounded-full tracking-wider shadow-xs ${t.border} ${t.textPrimary}`}
            >
              <Sprout className="w-3.5 h-3.5" />
              Kothari Group · About Us
            </span>

            <h2 className={`text-3xl sm:text-5xl font-semibold ${t.heading} leading-[1.12]`}>
              We are dedicated to{' '}
              <span className="relative inline-block">
                nurturing lands
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C40 3 80 3 120 6C150 8 180 6 198 4"
                    stroke={t.stroke}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              and building dreams.
            </h2>

            <p className="text-base font-light text-[#5F6B7A] leading-relaxed">
              with innovative irrigation solutions for agriculture and plumbing solutions for farms and buildings.
            </p>

            <div className="space-y-3.5 text-sm font-light text-[#5F6B7A] leading-relaxed">
              <p>
                Our nation's growth is powered by agriculture and construction. Hence, we're here to revolutionize both these sectors with a wide array of innovative irrigation and piping solutions.
              </p>
              <p>
                For over four decades, Kothari Group, an ISO-9001:2015 company, has been on a mission to support India's agricultural revolution. Our journey started by empowering millions of farmers throughout India with innovative water management solutions for farms.
              </p>
              <p>
                Since then, we have extended our expertise to provide innovative building pipe solutions in India, flying high and expanding our horizons. Today, we take pride in bringing ease and joy to the lives of millions of people around the world.
              </p>
            </div>

            <a
              href="https://kotharigroupindia.com/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:gap-3 transition-all duration-300 w-fit bg-gradient-to-r ${t.btn}`}
            >
              More Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ===================== RIGHT: COLLAGE ===================== */}
          <div className="relative pb-16 pt-8">
            {/* Main image */}
            <div
              className={`rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-1 ${t.shadowImg}`}
            >
              <div className="relative aspect-[4/4.4]">
                <img
                  src={FIELD_IMAGE}
                  alt="Kothari Group irrigation fields"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${t.overlay}`}
                />
              </div>
            </div>

            {/* Second image overlap */}
            <div className="absolute -bottom-0 -left-3 sm:-left-8 w-40 sm:w-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-[-7deg]">
              <img
                src={PRODUCT_IMAGE}
                alt="Kothari pipes"
                referrerPolicy="no-referrer"
                className="w-full h-32 sm:h-36 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
