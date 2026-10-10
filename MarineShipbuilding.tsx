import React from 'react';
import { Ship, Wrench, Wheat, ArrowRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../assets/images';
import { CLIENT_LIST, SHIPYARDS_AND_SUPPLIERS } from '../data/companyData';

interface MarineShipbuildingProps {
  onOpenRFQ: () => void;
}

export const MarineShipbuilding: React.FC<MarineShipbuildingProps> = ({ onOpenRFQ }) => {
  const shippingClients = CLIENT_LIST.filter(c =>
    c.sector.toLowerCase().includes('shipping') ||
    c.sector.toLowerCase().includes('marine') ||
    c.sector.toLowerCase().includes('transport') ||
    c.sector.toLowerCase().includes('navigation')
  );
  const shipyards = SHIPYARDS_AND_SUPPLIERS.filter(s => s.type === 'Shipyard');

  return (
    <section id="shipbuilding" className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Focused on Future Business Expansion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              4.14 Strategic Vision &amp; Growth Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
              Future Business Expansion Targets
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              As part of our long-term growth strategy, Proshanta Sarker has outlined several new business ventures commencing progressively. These initiatives are designed to diversify operations, scale production capacity, and strengthen our position in Bangladesh’s marine and heavy manufacturing sectors.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={onOpenRFQ}
              className="px-5 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Inquire for Expansion &amp; Partnerships</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expansion Pillar 1 (Marquee Spotlight): Shipbuilding & Marine Fabrication with the Image */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden mb-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual carrier */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[320px]">
              <img
                src={ASSETS.shipyardMarine}
                alt="Commercial cargo vessels and future marine shipyard fabrication in Bangladesh"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold text-sky-400 border border-slate-800">
                Expansion Target #1 · Maritime Sector
              </div>
            </div>

            {/* Description & Detailed Breakdown */}
            <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  <Ship className="w-4 h-4" />
                  <span>Target 01: Commercial Vessel Construction &amp; Repair</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Shipbuilding &amp; Marine Fabrication
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Focusing on the planned construction and assembly of small to medium-sized commercial cargo carriers, utility boats, and work vessels. The venture will also capture opportunities in dockyard maintenance, vessel hull repair, and heavy steel marine structural works.
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct integration with our Chittagong shipyard plate sourcing network.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Drydock plate replacement, keel T-girders, and barge hull fabrication.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Serving established clients across Buriganga and Meghna river transport lanes.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Phase: Progressive Development</span>
                <span className="text-sky-400 font-semibold font-mono">Status: In Pipeline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expansion Pillars 2 & 3: Hydraulic Machinery & Agro-Food Processing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pillar 2: High-Capacity Hydraulic Machinery */}
          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <Wrench className="w-4 h-4" />
                <span>Target 02: Heavy Engineering</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                High-Capacity Hydraulic Machinery &amp; Heavy Engineering
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Installing additional high-tonnage hydraulic presses and automated metalforming equipment to scale heavy plate bending, straightening, forming, and large structural fabrication.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• Significantly increases single-cycle tonnage and bending thickness.</li>
                <li>• Enables participation in mega infrastructure, bridge spans, and heavy industrial sheds.</li>
                <li>• Leverages our experienced fabrication and hydraulic engineering workforce.</li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Capital Equipment Upgrade</span>
              <span className="text-amber-400 font-semibold font-mono">Planned Investment</span>
            </div>
          </div>

          {/* Pillar 3: Agro-Food Production & Processing */}
          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <Wheat className="w-4 h-4" />
                <span>Target 03: Multi-Sector Diversification</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Agro-Food Production &amp; Processing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Strategic diversification into agro-food processing, food storage facilities, and agricultural commodity supply chain infrastructure to establish multi-sector resilience.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>• Diversifies operational revenue streams beyond metal fabrication.</li>
                <li>• Addresses growing domestic demand in Bangladesh’s agricultural sector.</li>
                <li>• Backed by institutional bank partnerships and commercial financial capacity.</li>
              </ul>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Strategic Expansion</span>
              <span className="text-emerald-400 font-semibold font-mono">Target Venture</span>
            </div>
          </div>
        </div>

        {/* Institutional Foundation & Sourcing Alliances */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
          {/* Shipping Clients */}
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Existing Shipping Line Client Relationships
              </h4>
              <span className="text-[11px] text-slate-400">Foundation for marine expansion</span>
            </div>
            <div className="space-y-2">
              {shippingClients.map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-950/80 border border-slate-850"
                >
                  <span className="font-semibold text-slate-200">{client.name}</span>
                  <span className="text-slate-500">{client.address}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sourcing Shipyards in Chittagong */}
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Chittagong Shipyard Supply Network
              </h4>
              <span className="text-[11px] text-slate-400">Raw steel procurement</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {shipyards.map((yard, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/80 border border-slate-850 text-xs"
                >
                  <div className="font-semibold text-slate-200">{yard.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{yard.address}, Bangladesh</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
