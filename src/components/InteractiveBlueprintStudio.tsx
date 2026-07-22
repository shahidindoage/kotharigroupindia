import React, { useState } from 'react';
import { BlueprintNode } from '../types';
import { 
  FileCode2, 
  Layers, 
  Plus, 
  Trash2, 
  FileText, 
  CheckCircle2, 
  Maximize2, 
  Info,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface InteractiveBlueprintStudioProps {
  onOpenQuoteModal: () => void;
}

export const InteractiveBlueprintStudio: React.FC<InteractiveBlueprintStudioProps> = ({
  onOpenQuoteModal
}) => {
  const [activeScenario, setActiveScenario] = useState<string>('highrise');

  const scenarios = [
    {
      id: 'highrise',
      title: 'High-Rise Residential Plumbing & Acoustic SWR',
      description: 'Acoustic-insulated triple layer soil waste drainage combined with high-temp CPVC hot water riser loops.',
      defaultNodes: [
        { id: 'node-1', label: 'HydroPro CPVC Main Vertical Riser 50mm', itemType: 'CPVC Pipe Bar 5.0m', quantity: 12, unitPriceEstimate: 24, specNote: 'SDR 11 Rated For 93°C Hot Water' },
        { id: 'node-2', label: 'HydroSilence SWR Soundproof Soil Stack 110mm', itemType: 'SWR Triple-Layer Pipe', quantity: 8, unitPriceEstimate: 38, specNote: '14 dB Acoustic Noise Attenuation' },
        { id: 'node-3', label: 'Heavy Duty 90° Sweep Elbows With Ring Fit', itemType: 'SWR Ring Joint Fitting', quantity: 16, unitPriceEstimate: 7, specNote: 'Rubber Ring Expansion Compensator' },
        { id: 'node-4', label: 'HydroControl CPVC Ball Valves 50mm', itemType: 'Brass Insert Valve', quantity: 4, unitPriceEstimate: 18, specNote: '100% Static Leakage Tested At 25 Bar' }
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial Chemical Conveyance & Pressure Main',
      description: 'Heavy Schedule 80 UPVC pressure mains with chemical-inert solvent joint fittings for acid transfer.',
      defaultNodes: [
        { id: 'node-1', label: 'HydroShield UPVC Heavy Pressure Pipe 110mm', itemType: 'UPVC Class 5 PN16', quantity: 20, unitPriceEstimate: 42, specNote: 'Hazenc-Williams C = 150 Smooth Wall' },
        { id: 'node-2', label: 'HydroFit Precision Molded Equal Tees 110mm', itemType: 'Schedule 80 Molded Tee', quantity: 6, unitPriceEstimate: 12, specNote: 'Deep Socket Entry Solvent Weld' },
        { id: 'node-3', label: 'HydroControl Flanged Isolation Valves', itemType: 'Industrial Butterfly Valve', quantity: 2, unitPriceEstimate: 85, specNote: 'PTFE Teflon Seat Seal' }
      ]
    },
    {
      id: 'ducting',
      title: 'Subterranean Cable Protection & Fiber Conduit',
      description: 'High-impact flame retardant rigid conduit network for underground telecom & power lines.',
      defaultNodes: [
        { id: 'node-1', label: 'HydroGuard Rigid Cable Conduit 32mm', itemType: 'Flame Retardant Bar 3.0m', quantity: 50, unitPriceEstimate: 8, specNote: '750N Heavy Impact Class' },
        { id: 'node-2', label: 'Modular Junction Inspection Boxes', itemType: 'IP67 Waterproof Junction Box', quantity: 10, unitPriceEstimate: 15, specNote: 'Self-Extinguishing Polymeric Core' },
        { id: 'node-3', label: 'Flexi-Bend Cold Bending Couplers', itemType: 'Precision Conduit Coupler', quantity: 30, unitPriceEstimate: 3, specNote: 'Friction-Free Internal Wire Pull' }
      ]
    }
  ];

  const currentScenario = scenarios.find((s) => s.id === activeScenario) || scenarios[0];
  const [nodes, setNodes] = useState<BlueprintNode[]>(currentScenario.defaultNodes);

  const handleScenarioChange = (scenarioId: string) => {
    setActiveScenario(scenarioId);
    const selected = scenarios.find((s) => s.id === scenarioId);
    if (selected) {
      setNodes(selected.defaultNodes);
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          const newQty = Math.max(1, n.quantity + delta);
          return { ...n, quantity: newQty };
        }
        return n;
      })
    );
  };

  const removeNode = (id: string) => {
    setNodes((prev) => prev.filter((n) => n.id !== id));
  };

  const totalEstimate = nodes.reduce((sum, item) => sum + item.quantity * item.unitPriceEstimate, 0);

  return (
    <section id="blueprint" className="py-16 bg-[#F5FAFF] border-b border-[#DCEAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] px-3.5 py-1 rounded-full text-xs font-bold text-[#1575B3]">
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Interactive Application Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1575B3] tracking-tight">
            Pipeline Schematic & Bill Of Materials Builder
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#5F6B7A] leading-relaxed">
            Select Architectural Use Cases, Custom Construct Piping Nodes, Inspect Joint Engineering Specifications & Generate Instant Project Cost Summaries.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenarios.map((sc) => {
            const active = activeScenario === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => handleScenarioChange(sc.id)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  active
                    ? 'bg-[#FFFFFF] border-[#1575B3] shadow-md shadow-[#1575B3]/10 ring-2 ring-[#1575B3]/20'
                    : 'bg-[#FFFFFF]/60 border-[#DCEAF5] hover:border-[#1575B3] hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                    active ? 'bg-[#1575B3] text-white' : 'bg-[#F5FAFF] text-[#1575B3] border border-[#DCEAF5]'
                  }`}>
                    Scenario
                  </span>
                  {active && <CheckCircle2 className="w-4 h-4 text-[#1575B3]" />}
                </div>
                <h3 className="text-base font-extrabold text-[#1575B3] mt-3">
                  {sc.title}
                </h3>
                <p className="text-xs font-medium text-[#5F6B7A] mt-1 line-clamp-2">
                  {sc.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Studio Canvas & Bill Of Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint Visual Canvas (Interactive Schematic) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#DCEAF5] pb-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#1575B3]">
                <Layers className="w-4 h-4" />
                <span>Architectural CAD Blueprint Canvas</span>
              </div>
              <span className="text-[11px] font-bold text-[#5F6B7A] bg-[#F5FAFF] border border-[#DCEAF5] px-2.5 py-1 rounded-lg">
                Scale 1:50 | HydroFlow Systems
              </span>
            </div>

            {/* Simulated Blueprint Graphic Diagram */}
            <div className="relative bg-[#0E283D] rounded-2xl p-6 sm:p-8 overflow-hidden min-h-[320px] flex flex-col justify-between blueprint-grid text-white">
              
              {/* Graphic Blueprint Header */}
              <div className="flex justify-between items-start text-xs font-mono text-cyan-300/80">
                <div>
                  <p className="font-bold">DRAWING NO: HF-CAD-2026-X9</p>
                  <p className="text-[10px] text-white/60">SYSTEM: {currentScenario.title}</p>
                </div>
                <span className="border border-cyan-400/40 px-2 py-0.5 rounded text-[10px]">
                  APPROVED ISO 9001
                </span>
              </div>

              {/* Piping Schematic Graphic Lines */}
              <div className="my-8 relative h-36 flex items-center justify-center">
                <svg className="w-full h-full text-cyan-400/70" viewBox="0 0 600 200" fill="none">
                  {/* Main Water Riser Pipe */}
                  <path d="M 50,100 L 250,100 L 250,40 L 450,40 L 450,160 L 550,160" stroke="#1575B3" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 50,100 L 250,100 L 250,40 L 450,40 L 450,160 L 550,160" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4" className="animate-pulse" />
                  
                  {/* Pipe Fittings Joints */}
                  <circle cx="250" cy="100" r="12" fill="#0E283D" stroke="#38BDF8" strokeWidth="3" />
                  <circle cx="250" cy="40" r="12" fill="#0E283D" stroke="#38BDF8" strokeWidth="3" />
                  <circle cx="450" cy="40" r="12" fill="#0E283D" stroke="#38BDF8" strokeWidth="3" />
                  <circle cx="450" cy="160" r="12" fill="#0E283D" stroke="#38BDF8" strokeWidth="3" />

                  {/* Flow Direction Indicator Arrows */}
                  <polygon points="150,95 165,100 150,105" fill="#38BDF8" />
                  <polygon points="350,35 365,40 350,45" fill="#38BDF8" />
                  <polygon points="500,155 515,160 500,165" fill="#38BDF8" />
                </svg>

                {/* Interactive Node Tooltip Badges */}
                <div className="absolute top-2 left-10 bg-cyan-950/90 border border-cyan-400/50 p-2 rounded-lg text-[10px] font-mono text-cyan-200 shadow-md">
                  Main HydroPro CPVC Riser
                </div>

                <div className="absolute bottom-2 right-12 bg-cyan-950/90 border border-cyan-400/50 p-2 rounded-lg text-[10px] font-mono text-cyan-200 shadow-md">
                  Rubber Ring Fit Socket
                </div>
              </div>

              {/* Canvas Legend */}
              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-cyan-200/80 border-t border-cyan-800/50 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                  Pressurized Water Line
                </span>
                <span>Max Design Pressure: 25.0 Bar</span>
              </div>
            </div>

            <p className="text-xs font-medium text-[#5F6B7A] flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#1575B3]" />
              <span>Schematics comply with international plumbing codes (IPC & UPC standards).</span>
            </p>
          </div>

          {/* Right Column: Itemized Bill Of Materials (BOM) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-3xl border border-[#DCEAF5] p-6 shadow-xs space-y-6">
            
            <div className="border-b border-[#DCEAF5] pb-3 flex justify-between items-center">
              <div>
                <h3 className="text-base font-extrabold text-[#1575B3]">
                  Itemized Bill Of Materials
                </h3>
                <p className="text-xs font-medium text-[#5F6B7A]">
                  Calculated Component Estimates
                </p>
              </div>
              <span className="text-xs font-bold bg-[#F5FAFF] border border-[#DCEAF5] text-[#1575B3] px-2.5 py-1 rounded-lg">
                {nodes.length} Components
              </span>
            </div>

            {/* List of Bill of Materials Items */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="bg-[#F5FAFF] p-3.5 rounded-xl border border-[#DCEAF5] space-y-2 text-xs"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-extrabold text-[#111111]">
                        {node.label}
                      </h4>
                      <p className="text-[11px] font-medium text-[#5F6B7A]">
                        {node.specNote}
                      </p>
                    </div>
                    <button
                      onClick={() => removeNode(node.id)}
                      className="text-[#5F6B7A] hover:text-red-600 p-1 transition"
                      title="Remove Component"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#DCEAF5]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#5F6B7A]">Qty:</span>
                      <div className="flex items-center border border-[#DCEAF5] rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(node.id, -1)}
                          className="px-2 py-0.5 hover:bg-[#F5FAFF] font-bold text-[#1575B3]"
                        >
                          -
                        </button>
                        <span className="px-2 font-extrabold text-[#111111]">
                          {node.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(node.id, 1)}
                          className="px-2 py-0.5 hover:bg-[#F5FAFF] font-bold text-[#1575B3]"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-[#5F6B7A] block">
                        Subtotal
                      </span>
                      <span className="font-extrabold text-[#1575B3]">
                        ${node.quantity * node.unitPriceEstimate} USD
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Summary Footer */}
            <div className="bg-[#1575B3] text-white p-4 rounded-2xl space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white/80">
                  Estimated Material Total:
                </span>
                <span className="text-2xl font-extrabold">
                  ${totalEstimate.toLocaleString()} USD
                </span>
              </div>
              <p className="text-[10px] text-white/70">
                Includes factory direct contractor pricing discount. Taxes & freight estimated at checkout.
              </p>

              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-white hover:bg-[#F5FAFF] text-[#1575B3] py-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition"
              >
                <span>Export Schematic To Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
