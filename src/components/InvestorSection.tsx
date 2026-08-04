import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, ArrowRight, LineChart } from 'lucide-react';

type Variant = 'blue' | 'green';

const theme = (variant: Variant) => {
  const blue = variant === 'blue';
  return {
    border: blue ? 'border-[#DCEAF5]' : 'border-[#BFE4CC]',
    bgSoft: blue ? 'bg-[#F5FAFF]' : 'bg-[#F2FBF4]',
    bgSofter: blue ? 'bg-[#DCEAF5]' : 'bg-[#EAF8EF]',
    heading: blue ? 'text-[#003F82]' : 'text-[#0F6B2B]',
    headingHex: blue ? '#003F82' : '#0F6B2B',
    accent: blue ? 'text-[#1575B3]' : 'text-[#1E8E3E]',
    chipUp: blue ? 'text-[#1575B3] bg-[#DCEAF5]' : 'text-[#1E8E3E] bg-[#EAF8EF]',
    barGradId: blue ? 'url(#barGradBlue)' : 'url(#barGrad)',
    barGradLatestId: blue ? 'url(#barGradLatestBlue)' : 'url(#barGradLatest)',
    donutBg: blue ? '#F5FAFF' : '#F2FBF4',
    shadow: blue ? 'shadow-[#1575B3]/10' : 'shadow-[#1E8E3E]/10',
    btn: blue
      ? 'from-[#1575B3] to-[#003F82] hover:from-[#0E588A] hover:to-[#003F82] shadow-[#1575B3]/20'
      : 'from-[#1E8E3E] to-[#0F6B2B] hover:from-[#0F6B2B] hover:to-[#0B5623] shadow-[#1E8E3E]/20'
  };
};

const kpis = [
  { label: 'Annual Revenue', value: '₹2,400 Cr', delta: '+14% YoY', up: true },
  { label: 'Net Profit', value: '₹312 Cr', delta: '+18% YoY', up: true },
  { label: 'EBITDA Margin', value: '24%', delta: '+2 pts', up: true },
  { label: 'Return on Equity', value: '18.5%', delta: '+1.1 pts', up: true }
];

const revenue = [
  { year: 'FY20', value: 1180 },
  { year: 'FY21', value: 1340 },
  { year: 'FY22', value: 1500 },
  { year: 'FY23', value: 1750 },
  { year: 'FY24', value: 2100 },
  { year: 'FY25', value: 2400 }
];

const segments = [
  { label: 'Agriculture', value: 40, color: '#1E8E3E' },
  { label: 'Plumbing', value: 35, color: '#1575B3' },
  { label: 'Infrastructure', value: 15, color: '#003F82' },
  { label: 'Industrial', value: 10, color: '#7CC4EE' }
];

const MAX_REVENUE = 2400;
const CHART_H = 200;

interface InvestorSectionProps {
  variant?: Variant;
}

export const InvestorSection: React.FC<InvestorSectionProps> = ({ variant = 'green' }) => {
  const t = theme(variant);
  const CIRC = 2 * Math.PI * 70;
  let offsetAcc = 0;

  return (
    <section id="investors" className={`py-16 sm:py-20 bg-[#FFFFFF] border-b ${t.border} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b ${t.border}`}>
          <div className="space-y-3">
            <span
              className={`inline-flex items-center gap-2 border text-[11px] font-semibold px-3.5 py-1.5 rounded-full tracking-wider shadow-xs ${t.bgSoft} ${t.border} ${t.accent}`}
            >
              <LineChart className="w-3.5 h-3.5" />
              Investor Relations
            </span>
            <h2 className={`text-3xl sm:text-4xl font-medium ${t.heading}`}>
              Built For Sustainable Growth.
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Transparent financials and consistent value creation for our investors, year after year.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-md hover:shadow-lg transition-all group shrink-0 bg-gradient-to-r ${t.btn}`}
          >
            Talk To Investor Desk
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className={`rounded-2xl border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all ${t.bgSoft} ${t.border}`}
            >
              <p className={`text-[11px] font-medium ${t.accent}`}>{kpi.label}</p>
              <p className={`mt-1 text-xl sm:text-2xl font-semibold ${t.accent}`}>{kpi.value}</p>
              <span
                className={`mt-2 inline-flex items-center gap-1 text-[11px] font-semibold rounded-full px-2 py-0.5 ${
                  kpi.up ? t.chipUp : 'text-[#C0392B] bg-[#FDECEA]'
                }`}
              >
                {kpi.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {kpi.delta}
              </span>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Revenue Bar Chart */}
          <div className={`lg:col-span-3 bg-[#FFFFFF] rounded-3xl border shadow-xl p-6 sm:p-8 ${t.border} ${t.shadow}`}>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[#111111]">Revenue Growth</h3>
                <p className="text-xs font-light text-[#5F6B7A]">Consolidated revenue (₹ in Cr)</p>
              </div>
              <span className={`w-11 h-11 rounded-xl border flex items-center justify-center ${t.bgSoft} ${t.border} ${t.accent}`}>
                <BarChart3 className="w-5 h-5" />
              </span>
            </div>

            <div className="mt-6">
              <svg viewBox="0 0 600 260" className="w-full h-auto">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = 40 + (i * (CHART_H - 40)) / 4;
                  return (
                    <g key={i}>
                      <line x1="40" y1={y} x2="580" y2={y} stroke="#DCEAF5" strokeWidth="1" />
                      <text x="34" y={y + 4} textAnchor="end" fontSize="10" fill="#9AA7B5">
                        {Math.round((MAX_REVENUE * (5 - i)) / 5)}
                      </text>
                    </g>
                  );
                })}

                {/* Bars */}
                {revenue.map((d, i) => {
                  const barH = (d.value / MAX_REVENUE) * CHART_H;
                  const x = 55 + i * 90;
                  const y = 240 - barH;
                  return (
                    <g key={d.year}>
                      <rect
                        x={x}
                        y={y}
                        width="42"
                        height={barH}
                        rx="6"
                        fill={i === revenue.length - 1 ? t.barGradLatestId : t.barGradId}
                        style={{
                          transformOrigin: `${x + 21}px 240px`,
                          animation: `growUp 0.9s ${i * 0.12}s cubic-bezier(0.22, 1, 0.36, 1) both`
                        }}
                      />
                      <text x={x + 21} y={y - 8} textAnchor="middle" fontSize="11" fontWeight="600" fill={t.headingHex}>
                        {d.value}
                      </text>
                      <text x={x + 21} y="256" textAnchor="middle" fontSize="11" fill="#5F6B7A">
                        {d.year}
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E8E3E" />
                    <stop offset="100%" stopColor="#0F6B2B" />
                  </linearGradient>
                  <linearGradient id="barGradLatest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1575B3" />
                    <stop offset="100%" stopColor="#003F82" />
                  </linearGradient>
                  <linearGradient id="barGradBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7CC4EE" />
                    <stop offset="100%" stopColor="#1575B3" />
                  </linearGradient>
                  <linearGradient id="barGradLatestBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1575B3" />
                    <stop offset="100%" stopColor="#003F82" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Segment Donut Chart */}
          <div className={`lg:col-span-2 bg-[#FFFFFF] rounded-3xl border shadow-xl p-6 sm:p-8 flex flex-col ${t.border} ${t.shadow}`}>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[#111111]">Revenue Mix</h3>
                <p className="text-xs font-light text-[#5F6B7A]">Segment share of revenue</p>
              </div>
              <span className={`w-11 h-11 rounded-xl border flex items-center justify-center ${t.bgSoft} ${t.border} ${t.accent}`}>
                <PieChart className="w-5 h-5" />
              </span>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-6">
              <svg viewBox="0 0 200 200" className="w-48 h-48" style={{ animation: 'donutIn 0.8s ease-out both' }}>
                <circle cx="100" cy="100" r="70" fill="none" stroke={t.donutBg} strokeWidth="26" />
                {segments.map((seg) => {
                  const len = (seg.value / 100) * CIRC;
                  const el = (
                    <circle
                      key={seg.label}
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke={seg.color}
                      strokeWidth="26"
                      strokeDasharray={`${len} ${CIRC - len}`}
                      strokeDashoffset={-offsetAcc}
                      strokeLinecap="butt"
                      transform="rotate(-90 100 100)"
                    />
                  );
                  offsetAcc += len;
                  return el;
                })}
                <text x="100" y="95" textAnchor="middle" fontSize="20" fontWeight="700" fill={t.headingHex}>
                  ₹2,400 Cr
                </text>
                <text x="100" y="115" textAnchor="middle" fontSize="10" fill="#5F6B7A">
                  FY25 Revenue
                </text>
              </svg>
            </div>

            <div className="space-y-2.5">
              {segments.map((seg) => (
                <div key={seg.label} className="flex items-center gap-2.5 text-sm">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                  <span className="font-medium text-[#111111] flex-1">{seg.label}</span>
                  <span className={`font-semibold ${t.accent}`}>{seg.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
