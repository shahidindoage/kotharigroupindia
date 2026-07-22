import { CaseStudy, MaterialComparison } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-airport',
    title: 'Subterranean Infrastructure & Cable Protection At Metropolitan International Airport',
    client: 'Metropolitan Aviation Authority & Civil Contractors',
    location: 'Singapore International Aviation Hub',
    category: 'Aviation & Critical Infrastructure',
    systemUsed: 'HydroTough HDPE 400mm & HydroGuard Rigid Conduit',
    totalPipingMeters: '48,500 Meters',
    completionYear: '2025',
    summary: 'Execution of high-stress underground power cable ducting and storm drainage networks across runway extensions utilizing trenchless HDD technology.',
    highlights: [
      '100% Zero Cable Shear Under Runway Wheel Loads',
      'Completed 3 Weeks Ahead Of Airport Commissioning Schedule',
      'Zero Leakage Hydrostatic Test Integrity At 16 Bar Pressure'
    ],
    image: '/src/assets/images/hero_pipes_render_1784717744659.jpg'
  },
  {
    id: 'cs-hospitality',
    title: 'Acoustic Drainage & Hot Water Plumbing For Skyline Twin Towers',
    client: 'Skyline Luxury Real Estate Developers',
    location: 'Dubai Marina District',
    category: 'Commercial High-Rise',
    systemUsed: 'HydroSilence SWR Soundproof & HydroPro CPVC Hot Water',
    totalPipingMeters: '62,000 Meters',
    completionYear: '2025',
    summary: 'Complete acoustic drainage and solar-assisted hot water distribution across a 64-storey residential and luxury hotel tower.',
    highlights: [
      'Acoustic Noise Kept Below 14 dB In Guest Suites',
      'Withstood 85°C Continuous Hot Water Recirculation',
      'Eliminated Over 4.2 Tons Of Metallic Piping Weight'
    ],
    image: '/src/assets/images/fittings_valves_showcase_1784717758011.jpg'
  },
  {
    id: 'cs-solar-park',
    title: 'Solar Field Substation Cable Conduit Protection Network',
    client: 'GreenEnergy Clean Power Infrastructure Corp',
    location: 'Atacama Solar Renewable Energy Park',
    category: 'Renewable Energy',
    systemUsed: 'HydroGuard Heavy Duty Flame Retardant Conduit',
    totalPipingMeters: '115,000 Meters',
    completionYear: '2024',
    summary: 'Protection of high-voltage DC interconnect wires from intense UV exposure, desert sandstorms, and extreme thermal cycling.',
    highlights: [
      'UV Resistance Rating Exceeding 10,000 Hours Weathering',
      'Zero Thermal Wall Deformity Between -5°C Night and +55°C Day',
      'Self-Extinguishing Flame Rating Tested Under UL 94 V-0'
    ],
    image: '/src/assets/images/hero_pipes_render_1784717744659.jpg'
  }
];

export const materialComparisons: MaterialComparison[] = [
  {
    feature: 'Maximum Operating Temperature',
    cpvc: '93°C (200°F) Continuous',
    upvc: '60°C (140°F) Continuous',
    hdpe: '60°C (140°F) Continuous',
    swr: '90°C Short-Term Discharge',
    conduit: '60°C Flame Retardant',
    metallic: '250°C (High Scale Risk)'
  },
  {
    feature: 'Corrosion & Chemical Inertness',
    cpvc: 'Impervious To Acid & Chlorinated Water',
    upvc: 'Complete Chemical Immunity',
    hdpe: 'Superior Acid & Slurry Resistance',
    swr: 'Resistant To Organic Effluent',
    conduit: 'Dielectric Insulation Immunity',
    metallic: 'Prone To Galvanic Corrosion'
  },
  {
    feature: 'Hydraulic Wall Friction (Hazenc-Williams C)',
    cpvc: 'C = 150 (Glass Smooth)',
    upvc: 'C = 150 (Zero Scaling)',
    hdpe: 'C = 155 (Minimal Drag)',
    swr: 'C = 150 (Self Cleaning)',
    conduit: 'C = 145 (Easy Cable Pull)',
    metallic: 'C = 100 to 120 (Roughs With Scale)'
  },
  {
    feature: 'Joint Integrity & Leakage Risk',
    cpvc: 'Solvent Weld Cold Fuse (100% Homogeneous)',
    upvc: 'Rubber Ring / Solvent Fusion',
    hdpe: 'Homogeneous Thermal Butt Fusion',
    swr: 'Dual Elastomeric Ring Fit',
    conduit: 'Precision Molded Push Fit',
    metallic: 'Threaded Flange Mechanical Joints'
  },
  {
    feature: 'Expected Infrastructure Lifespan',
    cpvc: '50+ Years Zero Maintenance',
    upvc: '50+ Years Zero Scaling',
    hdpe: '100 Years Subterranean',
    swr: '50+ Years Acoustic Stability',
    conduit: '50+ Years UV Resistant',
    metallic: '15 to 25 Years (Requires Lining)'
  },
  {
    feature: 'Installation Efficiency & Freight Weight',
    cpvc: '1/6th Weight Of Copper/Iron',
    upvc: 'Rapid Assembly No Heavy Machinery',
    hdpe: 'Flexible Continuous Coils',
    swr: 'Lightweight Rapid Socket Fit',
    conduit: 'Fast Cold Bending Capability',
    metallic: 'Heavy Freight Requires Arc Welding'
  }
];
