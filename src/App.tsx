/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualEntityShowcase } from './components/DualEntityShowcase';
import { ProductsCatalog } from './components/ProductsCatalog';
import { OfficialProductRangePoster } from './components/OfficialProductRangePoster';
import { MachinerySection } from './components/MachinerySection';
import { MarineShipbuilding } from './components/MarineShipbuilding';
import { SteelCalculator } from './components/SteelCalculator';
import { TrustAndNetwork } from './components/TrustAndNetwork';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RFQModal } from './components/RFQModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedSpecForQuote, setSelectedSpecForQuote] = useState('');

  const handleOpenRFQWithSpec = (spec: string) => {
    setSelectedSpecForQuote(spec);
    setRfqModalOpen(true);
  };

  const handleOpenGeneralRFQ = () => {
    setSelectedSpecForQuote('');
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        onOpenRFQ={handleOpenGeneralRFQ}
        onOpenProfileDoc={() => setProfileModalOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenRFQ={handleOpenGeneralRFQ}
          onOpenProfileDoc={() => setProfileModalOpen(true)}
        />

        {/* 01. Corporate Structure: Dual Entity Breakdown */}
        <DualEntityShowcase />

        {/* 02. Steel Catalog & Precision Sizing */}
        <ProductsCatalog
          onSelectProductForQuote={(productName) =>
            handleOpenRFQWithSpec(`Inquiry for ${productName} (sizing & current pricing)`)
          }
        />

        {/* Authentic Product Range Poster & Shyampur Yard Gallery */}
        <OfficialProductRangePoster
          onSelectProductForQuote={(productName) =>
            handleOpenRFQWithSpec(`Inquiry for ${productName}`)
          }
        />

        {/* 03. 1200-Ton Hydraulic Press & Machining Suite */}
        <MachinerySection onOpenRFQ={handleOpenGeneralRFQ} />

        {/* 04. Shipbuilding & Marine Fabrication Expansion */}
        <MarineShipbuilding onOpenRFQ={handleOpenGeneralRFQ} />

        {/* 05. Interactive Steel Weight & Quotation Estimator */}
        <SteelCalculator onPassCalculatedSpecToRFQ={handleOpenRFQWithSpec} />

        {/* 06. Institutional Governance, Bank Relations & Team */}
        <TrustAndNetwork />

        {/* 07. Location & Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenProfileDoc={() => setProfileModalOpen(true)}
        onOpenRFQ={handleOpenGeneralRFQ}
      />

      {/* Floating Quick WhatsApp Button */}
      <aside aria-label="Quick Communication" className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/8801680138031?text=Hello%20Proshanta%20Sarker,%20I%20am%20inquiring%20about%20mild%20steel%20products%20from%20your%20website."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-xs font-semibold"
          title="Chat directly on WhatsApp with Proshanta Sarker"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Chat with Proshanta Sarker</span>
        </a>
      </aside>

      {/* Modals */}
      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialSpec={selectedSpecForQuote}
      />

      <CompanyProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </div>
  );
}
