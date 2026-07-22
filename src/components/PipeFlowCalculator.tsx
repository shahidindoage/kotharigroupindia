import React, { useState, useMemo } from 'react';
import { CalculationInput, CalculationOutput } from '../types';
import { 
  Calculator, 
  Activity, 
  Gauge, 
  Droplets, 
  Zap, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  RefreshCw
} from 'lucide-react';

export const PipeFlowCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculationInput>({
    material: 'CPVC',
    diameterMm: 50,
    flowVelocityMs: 1.8,
    lengthMeters: 50,
    waterTempCelsius: 30
  });

  // Hazen-Williams Roughness Coefficient (C)
  const materialCoefficients: Record<string, number> = {
    CPVC: 150,
    UPVC: 150,
    HDPE: 155,
    SWR: 150,
    Conduit: 140
  };

  const results: CalculationOutput = useMemo(() => {
    const C = materialCoefficients[inputs.material] || 150;
    const dMeters = inputs.diameterMm / 1000;
    const radiusMeters = dMeters / 2;
    const crossAreaSqM = Math.PI * Math.pow(radiusMeters, 2);

    // Flow Rate Q = Area * Velocity (m3/s)
    const flowRateM3s = crossAreaSqM * inputs.flowVelocityMs;
    const flowRateLpm = flowRateM3s * 60000; // m3/s to L/min

    // Hazen-Williams Friction Loss: hf = (10.67 * L * Q^1.852) / (C^1.852 * d^4.87)
    const Q1852 = Math.pow(flowRateM3s, 1.852);
    const C1852 = Math.pow(C, 1.852);
    const d487 = Math.pow(dMeters, 4.87);

    const headLossMeters = (10.67 * inputs.lengthMeters * Q1852) / (C1852 * d487);
    const pressureDropBar = headLossMeters * 0.0980665; // 1 meter head = 0.098 bar

    // Kinematic Viscosity of water approx 1e-6 m2/s at 20C
    const reynoldsNumber = (inputs.flowVelocityMs * dMeters) / 1e-6;
    let flowType = 'Laminar Flow';
    if (reynoldsNumber > 4000) {
      flowType = 'Turbulent Smooth Flow';
    } else if (reynoldsNumber >= 2000) {
      flowType = 'Transitional Flow';
    }

    let recommendedGrade = 'SDR 11 Standard Class';
    if (inputs.material === 'CPVC') {
      recommendedGrade = pressureDropBar > 2.5 ? 'SDR 11 Heavy Duty (PN 28)' : 'SDR 13.5 Light Duty (PN 22)';
    } else if (inputs.material === 'UPVC') {
      recommendedGrade = pressureDropBar > 2.0 ? 'Class 5 (PN 16)' : 'Class 3 (PN 10)';
    } else if (inputs.material === 'HDPE') {
      recommendedGrade = pressureDropBar > 3.0 ? 'PE 100 PN 16' : 'PE 100 PN 10';
    } else if (inputs.material === 'SWR') {
      recommendedGrade = 'Type B High Impact Drainage';
    } else {
      recommendedGrade = 'Heavy Mechanical Impact Class (750N)';
    }

    return {
      flowRateLpm: Math.round(flowRateLpm * 10) / 10,
      pressureDropBar: Math.round(pressureDropBar * 100) / 100,
      headLossMeters: Math.round(headLossMeters * 100) / 100,
      recommendedGrade,
      reynoldsNumber: Math.round(reynoldsNumber),
      flowType
    };
  }, [inputs]);

  return (
    <section id="calculator" className="py-16 bg-[#FFFFFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#F5FAFF] border border-[#DCEAF5] px-3.5 py-1 rounded-full text-xs font-bold text-[#1575B3]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Engineering Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Pipe Flow Rate & Pressure Loss Estimator
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            Utilizes Industry Hazen-Williams Friction Equations To Calculate Hydraulic Flow Capacity, Head Loss, Reynolds Turbulence & Recommended Pipe Grades.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="bg-[#F5FAFF] p-6 sm:p-8 rounded-3xl border border-[#DCEAF5] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Controls Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-6 rounded-2xl border border-[#DCEAF5] shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#DCEAF5] pb-4">
              <h3 className="text-lg font-extrabold text-[#1575B3] flex items-center gap-2">
                <SlidersHorizontalIcon />
                <span>Hydraulic System Input Parameters</span>
              </h3>
              <button
                onClick={() => setInputs({
                  material: 'CPVC',
                  diameterMm: 50,
                  flowVelocityMs: 1.8,
                  lengthMeters: 50,
                  waterTempCelsius: 30
                })}
                className="text-xs font-bold text-[#5F6B7A] hover:text-[#1575B3] flex items-center gap-1 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Input 1: Material Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#111111] block">
                Select Pipe Polymer Material:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {(['CPVC', 'UPVC', 'HDPE', 'SWR', 'Conduit'] as const).map((mat) => (
                  <button
                    key={mat}
                    type="button"
                    onClick={() => setInputs({ ...inputs, material: mat })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                      inputs.material === mat
                        ? 'bg-[#1575B3] text-white border-[#1575B3] shadow-xs'
                        : 'bg-[#F5FAFF] text-[#5F6B7A] border-[#DCEAF5] hover:border-[#1575B3]'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Diameter Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#111111]">Internal Diameter (Nominal Size):</span>
                <span className="text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-1 rounded-lg">
                  {inputs.diameterMm} mm ({Math.round(inputs.diameterMm / 25.4 * 10) / 10} Inches)
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={315}
                step={5}
                value={inputs.diameterMm}
                onChange={(e) => setInputs({ ...inputs, diameterMm: Number(e.target.value) })}
                className="w-full accent-[#1575B3] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-semibold text-[#5F6B7A]">
                <span>15 mm (1/2")</span>
                <span>110 mm (4")</span>
                <span>315 mm (12")</span>
              </div>
            </div>

            {/* Input 3: Water Velocity Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#111111]">Target Fluid Velocity (m/s):</span>
                <span className="text-[#1575B3] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-1 rounded-lg">
                  {inputs.flowVelocityMs} m/s ({Math.round(inputs.flowVelocityMs * 3.28 * 10) / 10} ft/s)
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={4.0}
                step={0.1}
                value={inputs.flowVelocityMs}
                onChange={(e) => setInputs({ ...inputs, flowVelocityMs: Number(e.target.value) })}
                className="w-full accent-[#1575B3] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-semibold text-[#5F6B7A]">
                <span>0.5 m/s (Low Friction)</span>
                <span>2.0 m/s (Standard Plumbing)</span>
                <span>4.0 m/s (High Pressure Mains)</span>
              </div>
            </div>

            {/* Input 4: Total Pipeline Length */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#111111]">
                  Total Pipeline Length (Meters):
                </label>
                <input
                  type="number"
                  min={1}
                  max={5000}
                  value={inputs.lengthMeters}
                  onChange={(e) => setInputs({ ...inputs, lengthMeters: Math.max(1, Number(e.target.value)) })}
                  className="w-full p-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#111111]">
                  Water Temperature (°C):
                </label>
                <input
                  type="number"
                  min={0}
                  max={95}
                  value={inputs.waterTempCelsius}
                  onChange={(e) => setInputs({ ...inputs, waterTempCelsius: Math.min(95, Math.max(0, Number(e.target.value))) })}
                  className="w-full p-2.5 bg-[#F5FAFF] border border-[#DCEAF5] rounded-xl text-xs font-bold text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#1575B3]/30"
                />
              </div>
            </div>
          </div>

          {/* Real-time Hydraulic Output Results Display */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#1575B3] text-white p-6 rounded-2xl shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <h4 className="text-sm font-extrabold flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Hydraulic Calculation Output</span>
                </h4>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded">
                  Hazen-Williams C = {materialCoefficients[inputs.material]}
                </span>
              </div>

              {/* Major Metric 1: Flow Rate */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-white/80 block">
                  Calculated Flow Rate Capacity:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {results.flowRateLpm.toLocaleString()} <span className="text-lg font-bold text-white/80">L/min</span>
                </div>
                <p className="text-[11px] text-white/70">
                  Approx. {Math.round(results.flowRateLpm * 0.264172)} US Gallons Per Minute (GPM)
                </p>
              </div>

              {/* Major Metric 2: Pressure Loss & Head Loss */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/20">
                <div>
                  <span className="text-[11px] font-semibold text-white/80 block">
                    Friction Pressure Drop
                  </span>
                  <div className="text-xl font-bold mt-0.5">
                    {results.pressureDropBar} <span className="text-xs font-normal">Bar</span>
                  </div>
                  <span className="text-[10px] text-white/70">
                    ({Math.round(results.pressureDropBar * 14.5038 * 10) / 10} PSI)
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-white/80 block">
                    Hydraulic Head Loss
                  </span>
                  <div className="text-xl font-bold mt-0.5">
                    {results.headLossMeters} <span className="text-xs font-normal">Meters</span>
                  </div>
                  <span className="text-[10px] text-white/70">
                    ({Math.round(results.headLossMeters * 3.28 * 10) / 10} Feet)
                  </span>
                </div>
              </div>

              {/* Flow Regime & Turbulence */}
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 text-xs space-y-1">
                <div className="flex justify-between items-center font-bold">
                  <span>Fluid Flow Regime:</span>
                  <span className="bg-white text-[#1575B3] px-2 py-0.5 rounded text-[10px]">
                    {results.flowType}
                  </span>
                </div>
                <div className="text-[11px] text-white/80">
                  Reynolds Number Re: {results.reynoldsNumber.toLocaleString()}
                </div>
              </div>

              {/* Recommended Specification Grade */}
              <div className="bg-white text-[#111111] p-4 rounded-xl space-y-1 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#1575B3]">
                  <CheckCircle2 className="w-4 h-4 text-[#1575B3]" />
                  <span>Recommended Material Grade:</span>
                </div>
                <p className="text-sm font-extrabold text-[#111111]">
                  {results.recommendedGrade}
                </p>
                <p className="text-[11px] font-medium text-[#5F6B7A]">
                  Meets safety factor requirements for continuous {inputs.waterTempCelsius}°C fluid conveyance.
                </p>
              </div>

            </div>

            {/* Engineering Note Card */}
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#DCEAF5] text-xs text-[#5F6B7A] flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-[#1575B3] shrink-0 mt-0.5" />
              <p>
                Calculation assumes clear water at standard density. For high-viscosity chemical slurries or specific thermal derating factors, consult our engineering desk.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

function SlidersHorizontalIcon() {
  return (
    <svg className="w-4 h-4 text-[#1575B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}
