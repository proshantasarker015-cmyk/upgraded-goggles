import React, { useState } from 'react';
import { Hammer, RotateCcw, Wrench, Flame, Gauge, Shield, ArrowRight } from 'lucide-react';
import { ASSETS } from '../assets/images';
import { COMPANY_INFO } from '../data/companyData';

interface MachinerySectionProps {
  onOpenRFQ: () => void;
}

export const MachinerySection: React.FC<MachinerySectionProps> = ({ onOpenRFQ }) => {
  const [activeMode, setActiveMode] = useState<'bend' | 'straighten'>('bend');

  return (
    <section id="machinery" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            03. Heavy Mechanical Capacity
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            1200-Ton Hydraulic Press & Precision Metalforming
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Advance Iron Engineering Works is powered by a high-capacity 1200-ton hydraulic press system designed to process structural steel up to 30mm thickness. From straight plates to cylindrical vessel arcs, or restoring warped steel back to true tolerance.
          </p>
        </div>

        {/* Featured Showcase: 1200T Machine & Dual Operating Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: Generated Machine Asset */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-full min-h-[380px] group shadow-xl">
              <img
                src={ASSETS.hydraulicPress}
                alt="Heavy industrial 1200 ton hydraulic press bending thick steel"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                  <span>Advance Iron Engineering Works</span>
                  <span>·</span>
                  <span>Shyampur Workshop Unit</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  1200-Ton Hydraulic Press (Up to 30mm Steel Plate)
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Bespoke hydraulic engineering facility built at BDT 27,00,000 capital cost for extreme load plate forming and straightening.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dual Process Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-950/60 p-7 rounded-2xl border border-slate-800">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Dual Forming Functions
              </span>
              <h3 className="text-lg font-bold text-white mb-4">
                Hydraulic Processing Modes
              </h3>

              {/* Mode Toggle Controls */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-lg mb-5 border border-slate-800">
                <button
                  onClick={() => setActiveMode('bend')}
                  className={`py-2 px-3 text-xs font-semibold rounded-md transition-colors text-center ${
                    activeMode === 'bend'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Straight → Arc / Cylinder
                </button>
                <button
                  onClick={() => setActiveMode('straighten')}
                  className={`py-2 px-3 text-xs font-semibold rounded-md transition-colors text-center ${
                    activeMode === 'straighten'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Bent / Warped → Straight
                </button>
              </div>

              {/* Mode Explanation */}
              {activeMode === 'bend' ? (
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-semibold text-white text-sm mb-1 flex items-center gap-1.5">
                      <Gauge className="w-4 h-4 text-amber-400" />
                      Plate Bending & Cylinder Rounding
                    </div>
                    <p className="text-slate-300">
                      Cold mechanical deformation of flat mild steel plates into cylindrical vessel shells, hull curvature ribs, structural pipeline collars, and architectural arches up to 30mm thickness.
                    </p>
                  </div>
                  <ul className="space-y-1.5 pl-2 text-slate-400">
                    <li>• Curvature radius calibrated to customer engineering drawings.</li>
                    <li>• Minimizes weld seams by forming large 7ft wide plate sections.</li>
                    <li>• Preserves structural tensile strength without micro-fractures.</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-semibold text-white text-sm mb-1 flex items-center gap-1.5">
                      <RotateCcw className="w-4 h-4 text-sky-400" />
                      Mechanical Reverse-Straightening
                    </div>
                    <p className="text-slate-300">
                      High-pressure straightening of bent, twisted, or distorted heavy steel members recovered from ship deconstruction or industrial dismantling, returning them to factory-flat geometry.
                    </p>
                  </div>
                  <ul className="space-y-1.5 pl-2 text-slate-400">
                    <li>• Straightens deformed plates up to 30mm thickness.</li>
                    <li>• True-axis alignment for I-beams, girders, and heavy angles.</li>
                    <li>• Delivers cost savings of 40–60% compared to new mill imports.</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onOpenRFQ}
                className="w-full py-3 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire Hydraulic Pressing Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Complete Workshop Inventory & Tooling Grid */}
        <div className="border-t border-slate-800 pt-10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
            Fabrication Machinery & Tooling Equipment
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl font-bold text-amber-400 font-mono tabular-nums">01 Unit</div>
              <div className="text-sm font-semibold text-white mt-1">1200T Hydraulic Press</div>
              <p className="text-xs text-slate-400 mt-2">
                Heavy duty mechanical press handles up to 30mm plate forming, reverse-straightening, and bending.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl font-bold text-sky-400 font-mono tabular-nums">07 Units</div>
              <div className="text-sm font-semibold text-white mt-1">Industrial Grinders</div>
              <p className="text-xs text-slate-400 mt-2">
                High-speed surface grinders operated by specialized grinding men for weld seam beveling and edge polishing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums">06 Sets</div>
              <div className="text-sm font-semibold text-white mt-1">Thermal Cutting Sets</div>
              <p className="text-xs text-slate-400 mt-2">
                Heavy industrial oxy-gas cutting torches calibrated for clean dimensional tolerances from 4mm to 12mm+ steel.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-2xl font-bold text-indigo-400 font-mono tabular-nums">08 Cylinders</div>
              <div className="text-sm font-semibold text-white mt-1">Oxygen & Gas Station</div>
              <p className="text-xs text-slate-400 mt-2">
                4 high-pressure Oxygen and 4 Industrial Gas cylinders ensuring uninterrupted continuous cutting operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
