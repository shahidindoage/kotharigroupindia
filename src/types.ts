export type PipeCategory = 
  | 'Plumbing Pipes & fittings'
  | 'Agri Pipes & fittings'
  | 'Micro Irrigation System'
  | 'All Products'
  | 'CPVC Hot & Cold Systems'
  | 'UPVC Pressure Pipes'
  | 'HDPE Heavy Infrastructure'
  | 'SWR Drainage & Soil'
  | 'Electrical Conduit & Cable Protection'
  | 'Valves & Control Systems'
  | 'Precision Fittings & Joints';

export interface ProductSpec {
  diameterRange: string;
  pressureRating: string;
  temperatureRange: string;
  standardLength: string;
  joiningMethod: string;
  materialGrade: string;
  certifications: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: PipeCategory;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  specs: ProductSpec;
  applications: string[];
  image: string;
  cadAvailable: boolean;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  systemUsed: string;
  totalPipingMeters: string;
  completionYear: string;
  summary: string;
  highlights: string[];
  image: string;
}

export interface MaterialComparison {
  feature: string;
  cpvc: string;
  upvc: string;
  hdpe: string;
  swr: string;
  conduit: string;
  metallic: string;
}

export interface CalculationInput {
  material: 'CPVC' | 'UPVC' | 'HDPE' | 'SWR' | 'Conduit';
  diameterMm: number;
  flowVelocityMs: number;
  lengthMeters: number;
  waterTempCelsius: number;
}

export interface CalculationOutput {
  flowRateLpm: number;
  pressureDropBar: number;
  headLossMeters: number;
  recommendedGrade: string;
  reynoldsNumber: number;
  flowType: string;
}

export interface BlueprintNode {
  id: string;
  label: string;
  itemType: string;
  quantity: number;
  unitPriceEstimate: number;
  specNote: string;
}

export interface QuoteRequestState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedQuantityMeters: string;
  requiredMaterial: string;
  specialRequirements: string;
}
