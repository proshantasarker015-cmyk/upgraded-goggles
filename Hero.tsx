import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Hammer, Layers, FileDown, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../assets/images';
import { COMPANY_INFO } from '../data/companyData';
import { SraboniLogo } from './SraboniLogo';
import { AdvanceIronLogo } from './AdvanceIronLogo';

interface HeroProps {
  onOpenRFQ: () => void;
  onOpenProfileDoc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ, onOpenProfileDoc }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Cinematic Visual with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroSteel}
          alt="Heavy industrial mild steel fabrication workshop"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Clean unboxed kicker metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span>Shyampur Industrial Zone, Dhaka</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Trade License TRAD/DSCC/011055/2020</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Dhaka South City Corporation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
              Engineered Mild Steel Supply, Custom Fabrication & 1200T Hydraulic Pressing
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Serving Bangladesh’s maritime, civil infrastructure, and heavy engineering industries. 
              We operate two specialized sister facilities: <strong className="text-white font-semibold">M/s Sraboni Enterprise</strong> for fresh shipyard-sourced reusable mild steel, and <strong className="text-white font-semibold">Advance Iron Engineering Works</strong> for precision fabrication, hydraulic plate bending, and rounding up to 30mm thickness.
            </p>

            {/* Entity Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm flex items-start gap-3.5">
                <SraboniLogo className="w-12 h-12 shrink-0 rounded-xl" />
                <div>
                  <div className="text-amber-400 font-semibold text-sm mb-1">M/S Sraboni Enterprise</div>
                  <p className="text-xs text-slate-300 leading-normal">
                    Chittagong shipyard sourced structural mild steel, MS plates (4–12mm), heavy U-channels, angles, and custom cut sections. Zero scrap, certified reusable quality.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm flex items-start gap-3.5">
                <AdvanceIronLogo className="w-12 h-12 shrink-0 rounded-xl" />
                <div>
                  <div className="text-sky-400 font-semibold text-sm mb-1">Advance Iron Engineering Works</div>
                  <p className="text-xs text-slate-300 leading-normal">
                    1200-Ton hydraulic press facility. Plate bending, cylinder rounding, straightening bent structural members up to 30mm, and custom girder fabrication.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRFQ}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-amber-400/20 whitespace-nowrap"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/8801680138031?text=Hello%20Proshanta%20Sarker,%20I%20would%20like%20to%20inquire%20about%20mild%20steel%20products%20and%20fabrication.`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp / Direct Call</span>
              </a>

              <button
                onClick={onOpenProfileDoc}
                className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                <span>View Full Profile</span>
              </button>
            </div>
          </div>

          {/* Right Spotlight: Proprietor & Credentials Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 space-y-5 shadow-2xl backdrop-blur-sm">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block">
                  Executive Leadership
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Proshanta Sarker</h3>
                <p className="text-xs text-slate-400">Proprietor & Managing Director</p>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Registered Corporate Status</span>
                    <p className="text-slate-400">Dhaka South City Corp (TRAD/DSCC/011055/2020)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Hammer className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Engineering Capability</span>
                    <p className="text-slate-400">1200-Ton press, 7 grinders, 6 cutting sets</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Shipyard Sourcing Network</span>
                    <p className="text-slate-400">Direct partners in Chittagong & Dhaka dockyards</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1 font-mono tabular-nums">
                <p>TIN: <span className="text-slate-200">{COMPANY_INFO.tin}</span></p>
                <p>BIN: <span className="text-slate-200">{COMPANY_INFO.bin}</span></p>
                <p>Hotline: <span className="text-slate-200">{COMPANY_INFO.phones[0]}</span></p>
              </div>

              <button
                onClick={onOpenProfileDoc}
                className="w-full py-2.5 text-xs font-semibold text-center text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
              >
                Inspect Official Company Dossier
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Key Metrics Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              1,200 <span className="text-amber-400 text-lg font-sans">Ton</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Hydraulic Press Capacity (up to 30mm)</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              2,830 <span className="text-sky-400 text-lg font-sans">sq.ft</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Combined Workshop & Inventory Depot</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              1.24+ <span className="text-emerald-400 text-lg font-sans">Cr BDT</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Total Operational Capital & Machinery</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              13 <span className="text-amber-400 text-lg font-sans">Specialists</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Engineers, Cutters, Grinders & Staff</div>
          </div>
        </div>
      </div>
    </section>
  );
};
