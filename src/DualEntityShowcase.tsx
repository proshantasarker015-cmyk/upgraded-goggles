import React, { useState } from 'react';
import { Layers, Wrench, Shield, CheckCircle, MapPin, Building2, HardHat, Cog } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SraboniLogo } from './SraboniLogo';
import { AdvanceIronLogo } from './AdvanceIronLogo';

export const DualEntityShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'sraboni' | 'advance'>('both');

  return (
    <section id="enterprises" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            01. Corporate Structure & Operations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Two Specialized Sister Organizations, One Complete Steel Solution
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Operating side-by-side in Shyampur, Dhaka, our dual-entity structure ensures seamless material supply from primary shipyards directly into precision fabrication and heavy hydraulic processing.
          </p>
        </div>

        {/* Tab Controls (Interactive Filter / View Switcher) */}
        <div className="inline-flex p-1 bg-slate-200/80 rounded-xl mb-8">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'both' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Combined Operations
          </button>
          <button
            onClick={() => setActiveTab('sraboni')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'sraboni' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            M/S Sraboni Enterprise
          </button>
          <button
            onClick={() => setActiveTab('advance')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'advance' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Advance Iron Engineering Works
          </button>
        </div>

        {/* Enterprise Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Entity 1: M/s Sraboni Enterprise */}
          {(activeTab === 'both' || activeTab === 'sraboni') && (
            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block">
                      Procurement & Trading
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      M/S Sraboni Enterprise
                    </h3>
                  </div>
                  <SraboniLogo className="w-16 h-16 shrink-0" />
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Specialized in sourcing high-grade reusable mild steel from Chittagong shipyards, mega government infrastructure projects, China joint-venture works, and major civil sites.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong className="font-semibold text-slate-900">Non-Scrap Standard:</strong> Every plate and beam is individually inspected for structural soundness and zero fatigue before resale.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong className="font-semibold text-slate-900">Shipyard Direct Sourcing:</strong> Regular supply lines with premier shipbreaking and repair docks in Chittagong.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong className="font-semibold text-slate-900">Bulk Stock Availability:</strong> 7ft x 20ft plates, 20ft U-channels, heavy angle profiles, and custom cutting plates.
                    </div>
                  </div>
                </div>

                {/* Facility & Capacity Specs */}
                <div className="mt-7 pt-5 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="text-slate-500 font-medium">Facility Area</div>
                    <div className="text-slate-900 font-bold text-sm mt-0.5 font-mono tabular-nums">
                      1,350 sq.ft (40' × 28')
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Equipped with 5 CCTV cameras & office</div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="text-slate-500 font-medium">Invested Capital</div>
                    <div className="text-slate-900 font-bold text-sm mt-0.5 font-mono tabular-nums">
                      BDT 86,00,000
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Advance BDT 16L + Cash BDT 70L</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>License: TRAD/DSCC/011055/2020</span>
                <span>TIN: 451345520330</span>
              </div>
            </div>
          )}

          {/* Entity 2: Advance Iron Engineering Works */}
          {(activeTab === 'both' || activeTab === 'advance') && (
            <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block">
                      Engineering, Fabrication & Press
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Advance Iron Engineering Works
                    </h3>
                  </div>
                  <AdvanceIronLogo className="w-16 h-16 shrink-0" />
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Specialized in erection, fabrication, prime quality customized sizing, and heavy hydraulic forming up to 30mm thickness for marine, civil, and industrial contractors.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong className="font-semibold text-slate-900">1200-Ton Hydraulic Press:</strong> Bending straight plates into cylinders or arches, and reverse-straightening curved steel up to 30mm thick.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong className="font-semibold text-slate-900">Industrial Machining Suite:</strong> 7 dedicated grinding stations, 6 precision oxygen-gas cutting sets, and dual gas cylinder banks.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-700">
                      <strong className="font-semibold text-slate-900">Custom Structural Girders:</strong> In-house fabrication of Bit Girders and T-Girders (6mm to 12mm) for heavy spans and ship holds.
                    </div>
                  </div>
                </div>

                {/* Facility & Capacity Specs */}
                <div className="mt-7 pt-5 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="text-slate-500 font-medium">Workshop Area</div>
                    <div className="text-slate-900 font-bold text-sm mt-0.5 font-mono tabular-nums">
                      1,480 sq.ft (45' × 26')
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Equipped with 4 CCTV, IT station & office</div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="text-slate-500 font-medium">Machine & Tools Value</div>
                    <div className="text-slate-900 font-bold text-sm mt-0.5 font-mono tabular-nums">
                      BDT 38,20,000
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">1200T Press BDT 27L + Tools BDT 4.2L</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Location: 52/2 NCG Road, Shyampur</span>
                <span>BIN: 008455589-0301</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
