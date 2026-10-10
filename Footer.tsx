import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowUp } from 'lucide-react';
import { SraboniLogo } from './SraboniLogo';
import { AdvanceIronLogo } from './AdvanceIronLogo';

interface FooterProps {
  onOpenProfileDoc: () => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProfileDoc, onOpenRFQ }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SraboniLogo className="w-12 h-12 shrink-0" />
              <AdvanceIronLogo className="w-12 h-12 shrink-0" />
            </div>
            <div className="text-lg font-bold text-white tracking-tight">
              M/S Sraboni Enterprise &amp; Advance Iron Engineering Works
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Prime structural mild steel sourcing, Chittagong shipyard plate inventory, 1200-Ton hydraulic plate pressing, and marine cargo vessel fabrication.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <div>Proprietor: <strong className="text-slate-200">Proshanta Sarker</strong></div>
              <div>Address: 52/2 NCG Road, Shyampur, Dhaka -1204</div>
              <div className="font-mono text-slate-400">Trade License: {COMPANY_INFO.tradeLicense}</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#enterprises" className="hover:text-white transition-colors">Enterprises Overview</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Mild Steel Catalog &amp; Sizing</a>
              </li>
              <li>
                <a href="#machinery" className="hover:text-white transition-colors">1200T Hydraulic Pressing</a>
              </li>
              <li>
                <a href="#shipbuilding" className="hover:text-white transition-colors">Future Business Expansion Targets</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Steel Weight Estimator</a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-white transition-colors">Institutional Credentials</a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Compliance */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Corporate Compliance
            </div>
            <div className="text-xs text-slate-400 space-y-2">
              <p>Registered under Dhaka South City Corporation, Bangladesh.</p>
              <p className="font-mono tabular-nums">TIN: {COMPANY_INFO.tin} · BIN: {COMPANY_INFO.bin}</p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onOpenProfileDoc}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-slate-800 rounded-md hover:bg-slate-900 transition-colors"
                >
                  View Official Dossier
                </button>
                <button
                  onClick={onOpenRFQ}
                  className="px-3 py-1.5 text-xs font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} M/S Sraboni Enterprise &amp; Advance Iron Engineering Works. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
