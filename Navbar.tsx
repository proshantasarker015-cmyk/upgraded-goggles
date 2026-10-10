import React, { useState } from 'react';
import { Menu, X, FileText, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SraboniLogo } from './SraboniLogo';
import { AdvanceIronLogo } from './AdvanceIronLogo';

interface NavbarProps {
  onOpenRFQ: () => void;
  onOpenProfileDoc: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ, onOpenProfileDoc }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark with official logos */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-slate-700 transition-colors"
          >
            <div className="flex items-center -space-x-1">
              <SraboniLogo className="w-8 h-8 rounded-lg shadow-xs" />
              <AdvanceIronLogo className="w-8 h-8 rounded-lg shadow-xs" />
            </div>
            <span>Sraboni &amp; Advance Iron</span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#enterprises" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Enterprises
            </a>
            <a href="#products" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Steel Catalog
            </a>
            <a href="#machinery" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              1200T Machinery
            </a>
            <a href="#shipbuilding" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Future Expansion
            </a>
            <a href="#calculator" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Weight Estimator
            </a>
            <a href="#credentials" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Credentials
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenProfileDoc}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
              title="View full official business profile prepared by Proshanta Sarker"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Company Profile</span>
            </button>
            <button
              onClick={onOpenRFQ}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Request Quotation
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="#enterprises"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Enterprises Overview
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Steel Products & Sizing
          </a>
          <a
            href="#machinery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            1200T Hydraulic Press
          </a>
          <a
            href="#shipbuilding"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Future Business Expansion
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Steel Weight Estimator
          </a>
          <a
            href="#credentials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
          >
            Credentials & Clients
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfileDoc();
              }}
              className="w-full text-center px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-300 rounded-lg bg-slate-50"
            >
              View Official Business Profile
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full text-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              Request Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
