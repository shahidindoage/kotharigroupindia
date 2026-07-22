import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  // SEGMENT 1: PLUMBING PIPES & FITTINGS
  {
    id: 'prod-kothari-cpvc',
    name: 'Kothari CPVC Hot & Cold Water Plumbing System',
    category: 'Plumbing Pipes & fittings',
    shortDescription: 'High-temperature Chlorinated Polyvinyl Chloride pipes and fittings designed for hot and cold potable water up to 93°C.',
    fullDescription: 'Kothari CPVC Plumbing Systems are engineered using advanced molecular chlorination technology. Designed for long-lasting, leak-free hot and cold water transport in residential and commercial buildings across India. 100% lead-free, corrosion resistant, and compliant with IS 15778 and ASTM F441 standards.',
    keyFeatures: [
      'Operates safely up to 93°C (200°F)',
      '100% lead-free and potable water certified',
      'Smooth inner wall prevents scaling and biofilm',
      'High thermal efficiency prevents heat loss',
      'Simple one-step solvent cement installation'
    ],
    specs: {
      diameterRange: '15mm to 100mm (1/2" to 4")',
      pressureRating: 'SDR 11 (28.1 kg/cm²) & SDR 13.5 (21.8 kg/cm²)',
      temperatureRange: '0°C to +93°C',
      standardLength: '3.0 Meters / 5.0 Meters',
      joiningMethod: 'CPVC Solvent Cement Welding',
      materialGrade: 'ASTM F441 / ASTM D2846 Class 23447',
      certifications: ['IS 15778', 'ISO 9001:2015', 'BIS Certified', 'RoHS Lead-Free']
    },
    applications: ['Residential Apartments', 'Independent Villas', 'Hospitals & Hotels', 'Commercial Plumbing'],
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-upvc-plumb',
    name: 'Kothari UPVC Cold Water Plumbing Pipes & Fittings',
    category: 'Plumbing Pipes & fittings',
    shortDescription: 'Heavy-duty lead-free UPVC pipes for cold water plumbing lines in modern construction.',
    fullDescription: 'Kothari UPVC Cold Water Piping Systems offer an economical, durable, and highly reliable alternative to GI pipes. Manufactured according to ASTM D1785 Schedule 40 & 80 standards, these pipes ensure zero corrosion, low friction loss, and seamless solvent weld joints.',
    keyFeatures: [
      'Schedule 40 & Schedule 80 heavy duty wall thickness',
      'Lead-free food grade virgin UPVC compound',
      'UV protected for outdoor exposure',
      'Non-conductive and chemical resistant',
      '50+ years expected service lifetime'
    ],
    specs: {
      diameterRange: '15mm to 150mm (1/2" to 6")',
      pressureRating: 'Schedule 40 & Schedule 80 (Up to 28 Bar)',
      temperatureRange: '-10°C to +60°C',
      standardLength: '3.0m & 6.0m Plain / Socketed',
      joiningMethod: 'Heavy Duty UPVC Solvent Cement',
      materialGrade: 'ASTM D1785 / ASTM D2467',
      certifications: ['BIS Certified', 'ISO 9001:2015', 'NSF Grade Approved']
    },
    applications: ['Cold Potable Water Distribution', 'Commercial Towers', 'Industrial Utility Lines', 'Plumbing Risers'],
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-swr',
    name: 'Kothari SWR Soil, Waste & Rainwater Drainage System',
    category: 'Plumbing Pipes & fittings',
    shortDescription: 'High-impact UV-stabilized SWR pipes and fittings with rubber ring and solvent joint options.',
    fullDescription: 'Kothari SWR Systems are engineered for quick, hygienic, and leak-proof discharge of soil, waste, and rainwater in multi-story residential and commercial complexes. Designed in accordance with IS 13592 standards, available in Type A and Type B classes.',
    keyFeatures: [
      'High impact resistance under heavy flow conditions',
      'Rubber ring joint for rapid expansion absorption',
      'UV stabilized for long exposure on building facades',
      'Smooth hydraulic bore prevents blockage and sludge build-up',
      'Complete range of traps, elbows, and single/double tees'
    ],
    specs: {
      diameterRange: '75mm, 90mm, 110mm, 160mm',
      pressureRating: 'Gravity Drainage Non-Pressure',
      temperatureRange: 'Up to 90°C short-term discharge',
      standardLength: '2m, 3m, 6m Socketed',
      joiningMethod: 'Rubber Ring Push-Fit / Solvent Weld',
      materialGrade: 'IS 13592 Type A & Type B UPVC Compound',
      certifications: ['BIS IS 13592', 'ISO 9001:2015', 'ISO 14001']
    },
    applications: ['Soil & Waste Discharge', 'Rainwater Harvesting Lines', 'High-Rise Drainage Risers', 'Terrace Outlets'],
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    cadAvailable: true,
    featured: true
  },

  // SEGMENT 2: AGRI PIPES & FITTINGS
  {
    id: 'prod-kothari-agri-pvc',
    name: 'Kothari Rigid UPVC Agricultural Pressure Pipes',
    category: 'Agri Pipes & fittings',
    shortDescription: 'High pressure agricultural UPVC pipes engineered for farm irrigation networks and water supply.',
    fullDescription: 'Kothari Agricultural UPVC Pipes are specifically manufactured to meet the rigorous demands of Indian farming environments. Featuring high impact strength, low friction head loss, and weather resistance, ensuring uninterrupted water delivery from pumps to fields across 23+ states.',
    keyFeatures: [
      'Manufactured as per IS 4985 standard',
      'Available in Class 1 to Class 5 pressure ratings',
      'High resistance to farm chemicals and fertilizers',
      'Smooth inner wall optimizes pump efficiency and fuel savings',
      'Quick socket and spigot elastomeric ring joining option'
    ],
    specs: {
      diameterRange: '20mm to 315mm (3/4" to 12")',
      pressureRating: '2.5 kg/cm² to 12.5 kg/cm² (PN 2.5 to PN 12.5)',
      temperatureRange: '-10°C to +60°C',
      standardLength: '6.0 Meters Plain / Socketed / Elastomeric Ring',
      joiningMethod: 'Solvent Cement / Elastomeric Rubber Ring Joint',
      materialGrade: 'IS 4985 Virgin UPVC Compound',
      certifications: ['BIS IS 4985', 'ISO 9001:2015', 'Agri Tech Certified']
    },
    applications: ['Farm Water Distribution', 'Lift Irrigation Schemes', 'Submersible Pump Lines', 'Canal Water Conveyance'],
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-hdpe-agri',
    name: 'Kothari HDPE High-Density Agricultural Coil Pipes',
    category: 'Agri Pipes & fittings',
    shortDescription: 'Flexible, crush-resistant PE-80 and PE-100 HDPE pipes for rugged terrain agricultural irrigation.',
    fullDescription: 'Kothari HDPE Agricultural Pipes provide outstanding flexibility, high toughness, and continuous long coil lengths. Engineered to withstand ground movement, rocky soil conditions, and high hydraulic surges, offering zero leakage through thermal butt fusion or quick coupler joints.',
    keyFeatures: [
      'High resistance to ground stress and rocky soil',
      'Coil lengths up to 500 meters reduce joint counts',
      'Thermal butt fusion ensures 100% leak-proof joints',
      'UV stabilized resin prevents sun degradation',
      'Saves pump power through low friction factor'
    ],
    specs: {
      diameterRange: '20mm to 200mm in Coils & Straight Bars',
      pressureRating: 'PN 2.5, PN 4, PN 6, PN 10, PN 12.5',
      temperatureRange: '-40°C to +60°C',
      standardLength: 'Coils 100m to 500m / 6m-12m Straight Bars',
      joiningMethod: 'Butt Fusion / Quick Compression Fittings / Electrofusion',
      materialGrade: 'PE 80 & PE 100 Resin as per IS 4984',
      certifications: ['BIS IS 4984', 'ISO 4427', 'ISO 9001:2015']
    },
    applications: ['Hill Terrain Water Supply', 'Drip & Sprinkler Mainlines', 'Borewell Delivery Mains', 'Flood Irrigation Feeder Lines'],
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-column-pipe',
    name: 'Kothari Submersible Borewell Column Pipes',
    category: 'Agri Pipes & fittings',
    shortDescription: 'Square-threaded thick-wall column pipes with rubber seals for deep borewell submersible pumps.',
    fullDescription: 'Kothari Submersible Column Pipes are designed to hold heavy pump loads and column weight in deep underground borewells. Engineered with high-torque precision square threads and synthetic rubber seals to prevent back-leakage, wire drawing, and vibration unraveling.',
    keyFeatures: [
      'Precision square-threaded coupler joints with lock system',
      '100% corrosion proof replacement for metal GI column pipes',
      'Thickened pipe wall supports heavy pump torque and water column',
      'EPDM rubber ring prevents internal pressure drops',
      'Smooth interior wall increases water yield per hour'
    ],
    specs: {
      diameterRange: '25mm to 100mm (1" to 4")',
      pressureRating: 'Medium, Heavy & Super Heavy Class (Up to 35 kg/cm²)',
      temperatureRange: '0°C to +60°C',
      standardLength: '3.0 Meters per pipe length',
      joiningMethod: 'Precision Threaded Coupler with EPDM Seal Ring',
      materialGrade: 'High Tensile UPVC Compound',
      certifications: ['ISO 9001:2015', 'BIS Standards Approved', 'Lab Tested']
    },
    applications: ['Deep Borewell Submersible Pumps', 'Agricultural Well Extraction', 'Industrial Groundwater Pumping'],
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    cadAvailable: true,
    featured: true
  },

  // SEGMENT 3: MICRO IRRIGATION SYSTEM
  {
    id: 'prod-kothari-drip-inline',
    name: 'Kothari Premium Inline Drip Irrigation System',
    category: 'Micro Irrigation System',
    shortDescription: 'Precision labyrinth drip lines with pressure-compensating inline emitters for high uniform crop yield.',
    fullDescription: 'Kothari Inline Drip Systems feature seamlessly extruded polyethylene tubing integrated with state-of-the-art labyrinth emitters. Designed for close-spaced cash crops like sugarcane, cotton, banana, vegetables, and orchards. Saves up to 60% water while increasing yield by up to 45%.',
    keyFeatures: [
      'Advanced 3D turbulent labyrinth emitter resists clogging',
      'Pressure Compensating (PC) and Non-PC options',
      'Uniform discharge rate across long lateral lengths',
      'High UV resistance and chemical fertigation safety',
      'Eligible for government micro irrigation subsidy schemes'
    ],
    specs: {
      diameterRange: '12mm, 16mm, 20mm outer diameter',
      pressureRating: '1.0 kg/cm² to 3.0 kg/cm² operating range',
      temperatureRange: '0°C to +55°C',
      standardLength: 'Coils of 400m, 500m & 1000m',
      joiningMethod: 'Barbed Fittings / Joiners / Take-Off Connectors',
      materialGrade: 'Virgin Linear Low Density Polyethylene (LLDPE)',
      certifications: ['IS 13488', 'BIS Approved', 'PMKSY Scheme Approved']
    },
    applications: ['Sugarcane & Cotton Fields', 'Horticulture & Vineyards', 'Fruit Orchards', 'Greenhouses & Polyhouses'],
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-sprinkler',
    name: 'Kothari Agricultural Sprinkler Irrigation System',
    category: 'Micro Irrigation System',
    shortDescription: 'Quick-latch portable HDPE sprinkler pipes and brass nozzle spray heads for overhead crop coverage.',
    fullDescription: 'Kothari Sprinkler Irrigation Systems mimic natural rainfall for uniform water distribution across wheat, pulses, groundnut, and potato crops. Features lightweight quick-latch HDPE pipes, foot battens, and durable dual-nozzle brass or plastic rotary impact sprinklers.',
    keyFeatures: [
      'Quick-action latch coupling mechanism for easy field assembly',
      'Uniform droplet distribution protects delicate seedlings and soil structure',
      '360° rotary impact sprinklers with adjustable throw radius',
      'Corrosion free LLDPE/HDPE pipe construction',
      'Reduces labor cost and water wastage compared to flood irrigation'
    ],
    specs: {
      diameterRange: '63mm, 75mm, 90mm, 110mm outer diameter',
      pressureRating: '2.5 kg/cm² & 3.2 kg/cm² operating class',
      temperatureRange: '-10°C to +55°C',
      standardLength: '6.0 Meters per sprinkler pipe section',
      joiningMethod: 'Quick Latch Clamp Mechanism with C-Ring Seal',
      materialGrade: 'IS 14151 Part 1 & Part 2 HDPE Compound',
      certifications: ['IS 14151', 'BIS Certified', 'Government Subsidy Approved']
    },
    applications: ['Wheat & Cereal Farming', 'Groundnut & Pulses', 'Tea & Coffee Plantations', 'Dust Suppression'],
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp',
    cadAvailable: true,
    featured: true
  },
  {
    id: 'prod-kothari-micro-filter',
    name: 'Kothari Hydro-Cyclone & Screen Fertigation Filters',
    category: 'Micro Irrigation System',
    shortDescription: 'Heavy-duty filtration stations and Venturi fertilizer injectors for clogging-free drip networks.',
    fullDescription: 'Kothari Filtration Systems protect drip and micro sprinkler emitters from sand, silt, algae, and organic debris. Combining Hydro-Cyclone Sand Separators, Disc Filters, and Screen Filters with corrosion-proof polymer housings and easy flush drain valves.',
    keyFeatures: [
      'High filtration efficiency (120 Mesh / 130 Micron standard)',
      'Hydro-cyclone separator removes coarse sand particles without pressure drop',
      'Chemical and fertilizer resistant polymer body',
      'Quick clamp opening for hassle-free filter washing',
      'Includes Venturi injector for accurate fertigation and nutrient dosing'
    ],
    specs: {
      diameterRange: '2" (50mm), 2.5" (65mm), 3" (75mm), 4" (100mm)',
      pressureRating: 'Up to 6.0 kg/cm² static pressure',
      temperatureRange: '0°C to +60°C',
      standardLength: 'Flanged & Threaded Inlet/Outlet Options',
      joiningMethod: 'Quick Clamp / BSP Male Threads',
      materialGrade: 'Reinforced Polypropylene & Polycarbonate Housing',
      certifications: ['ISO 9001:2015', 'BIS Approved', 'Lab Tested']
    },
    applications: ['Drip Head Control Stations', 'Borewell Sand Separation', 'Liquid Fertilizer Injection', 'Canal Water Filtration'],
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    cadAvailable: true,
    featured: true
  }
];
