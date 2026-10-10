import React, { useState } from 'react';
import { X, Printer, Download, CheckCircle, Building2, User, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, STAFF_MEMBERS, CLIENT_LIST, SHIPYARDS_AND_SUPPLIERS, EXPANSION_TARGETS } from '../data/companyData';
import { SraboniLogo } from './SraboniLogo';
import { AdvanceIronLogo } from './AdvanceIronLogo';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<'all' | 'overview' | 'products' | 'financials' | 'expansion'>('all');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 flex flex-col max-h-[90vh]">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 rounded-t-2xl shrink-0">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Official Corporate Dossier
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              M/S Sraboni Enterprise & Advance Iron Engineering Works
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Content (Scrollable & Print-optimized) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-slate-800 text-sm leading-relaxed print:p-0 print:overflow-visible">
          {/* Document Cover Header */}
          <div className="border-b-2 border-slate-900 pb-8 text-center space-y-3">
            {/* Dual Logos Lockup */}
            <div className="flex items-center justify-center gap-6 pb-2">
              <SraboniLogo className="w-16 h-16" />
              <div className="h-10 w-px bg-slate-300" />
              <AdvanceIronLogo className="w-16 h-16" />
            </div>

            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              COMPANY PROFILE &amp; BUSINESS DOSSIER
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              M/S SRABONI ENTERPRISE &amp; ADVANCE IRON ENGINEERING WORKS
            </h1>
            <p className="text-sm font-semibold text-amber-700">
              Mild Steel Procurement, Sizing, Erection, Fabrication &amp; 1200-Ton Hydraulic Pressing
            </p>
            <div className="pt-3 text-xs text-slate-500 flex flex-wrap justify-center gap-4">
              <span>Prepared by: <strong className="text-slate-800">Proshanta Sarker (Proprietor)</strong></span>
              <span>·</span>
              <span>Address: 52/2 NCG Road, Shyampur, Dhaka -1204</span>
              <span>·</span>
              <span>Trade License: TRAD/DSCC/011055/2020</span>
            </div>
          </div>

          {/* Section 4.1: About Us */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              4.1 About Us &amp; Core Operations
            </h2>
            <p>
              We are two organizations: the first one is <strong>M/s Sraboni Enterprise</strong> and the 2nd one is <strong>Advance Iron Engineering Works</strong>; both organizations work with Mild Steel.
            </p>
            <p>
              Where <strong>M/s Sraboni Enterprise</strong> collects reusable iron from different sources including Chittagong shipyard, government projects, China projects, and major construction sites. Maximum portion of materials are collected from the Chittagong shipyard. Though materials used are of good quality, they are <em>neither scrap nor substandard</em>. We are committed to our respective customers to provide high-grade material; that’s why our organization always searches for quality materials to fulfill our commitments.
            </p>
            <p>
              On the other hand, <strong>Advance Iron Engineering Works</strong> serves customers who require prime quality, customized size iron. We have hardworking and experienced workers who ensure product quality and accuracy of materials by using Hydraulic machines, grinding machines, and cutter machines.
            </p>
            <p>
              There is also a <strong>1200-Ton Hydraulic Machine</strong> in Advance Iron Engineering Works where we use the machine to bend and round from straight steel and also reverse-straighten from bent or curved materials up to 30mm thickness.
            </p>
          </div>

          {/* Section 4.2 - 4.5: Business Background & Operations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">4.2 Business Background</h3>
              <p className="text-xs text-slate-600">
                M/s Sraboni Enterprise mainly collects and sells reusable iron from shipyards and infrastructure projects. Advance Iron Engineering Works provides customized iron products and processing services.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">4.3 Nature of Business</h3>
              <p className="text-xs text-slate-600">
                Trading, cutting, grinding, bending, rounding, and straightening of iron and mild steel materials.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">4.4 Main Business Activities</h3>
              <p className="text-xs text-slate-600">
                Procurement and sale of steel, customized cutting and sizing, hydraulic bending, straightening, grinding, and customer-specific supply.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">4.5 Business Operations</h3>
              <p className="text-xs text-slate-600">
                Sourcing quality materials, processing them according to customer requirements, and supplying products through regular customer and supplier relationships from Shyampur, Dhaka.
              </p>
            </div>
          </div>

          {/* Section 4.6: Product Catalog */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              4.6 List of Products &amp; Processing Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3 border-r border-slate-200">Product Name</th>
                    <th className="p-3 border-r border-slate-200">Standard Size</th>
                    <th className="p-3 border-r border-slate-200">Product Thickness</th>
                    <th className="p-3">Core Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PRODUCTS.map((prod) => (
                    <tr key={prod.id}>
                      <td className="p-3 font-semibold text-slate-900 border-r border-slate-200">{prod.name}</td>
                      <td className="p-3 border-r border-slate-200 font-mono tabular-nums">{prod.standardSize}</td>
                      <td className="p-3 border-r border-slate-200 font-mono tabular-nums font-medium">{prod.thickness}</td>
                      <td className="p-3 text-slate-600">{prod.applications.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4.7 & 4.8: Banks & Staff */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">
                4.7 Relation with Banks
              </h2>
              <div className="text-xs space-y-2">
                <p><strong>Current Accounts:</strong> BRAC Bank, Janata Bank, UCB Bank</p>
                <p><strong>Savings Accounts:</strong> IFIC Bank, Bank Asia</p>
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3">
                4.8 Staff Details (13 Personnel)
              </h2>
              <div className="text-xs space-y-1 text-slate-700">
                <p>• <strong>Management:</strong> Biplob Sarker (Manager), Bikas Kumar (Manager)</p>
                <p>• <strong>Cutting Specialists:</strong> Sawon Hasan, Ronuzzaman</p>
                <p>• <strong>Grinding Specialists:</strong> Maruf Hasan Hira, Joynal Miah</p>
                <p>• <strong>Fabricators &amp; Labors:</strong> Sagor Hawlader, Sohel Rana, Anower Hossain, Samim Hasan, Alom</p>
                <p>• <strong>Security:</strong> Kobirul Islam, Harun Mia (Night Guards)</p>
              </div>
            </div>
          </div>

          {/* Section 4.12: Financial Capacity */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              4.12 Financial Capacity &amp; Asset Statement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-2">M/S Sraboni Enterprise</div>
                <div className="space-y-1.5 font-mono tabular-nums">
                  <div className="flex justify-between">
                    <span>Mortgage / Advance Amount:</span>
                    <span className="font-semibold text-slate-900">BDT 16,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cash Invested in Stock:</span>
                    <span className="font-semibold text-slate-900">BDT 70,00,000</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900">
                    <span>Enterprise Subtotal:</span>
                    <span>BDT 86,00,000</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900 text-sm mb-2">Advance Iron Engineering Works</div>
                <div className="space-y-1.5 font-mono tabular-nums">
                  <div className="flex justify-between">
                    <span>Mortgage / Advance Amount:</span>
                    <span className="font-semibold text-slate-900">BDT 7,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hydraulic Machine Cost:</span>
                    <span className="font-semibold text-slate-900">BDT 27,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tools &amp; Accessories:</span>
                    <span className="font-semibold text-slate-900">BDT 4,20,000</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900">
                    <span>Enterprise Subtotal:</span>
                    <span>BDT 38,20,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs font-semibold text-amber-900 flex justify-between">
              <span>Combined Total Group Operational Capital:</span>
              <span className="font-mono tabular-nums">BDT 1,24,20,000 (1.24+ Crore Taka)</span>
            </div>
          </div>

          {/* Section 4.14: Expansion Targets */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
              4.14 Business Expansion Targets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {EXPANSION_TARGETS.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <p className="text-slate-600">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4.15: Conclusion & Declaration */}
          <div className="border-t-2 border-slate-200 pt-6 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              4.15 Conclusion &amp; Proprietor Declaration
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              This Business Profile has been prepared to provide a comprehensive overview of ongoing business activities in Bangladesh. I remain actively involved in my businesses and have continuing professional responsibilities in Bangladesh. I confirm that the information presented in this profile is provided in good faith and is supported by relevant documents.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-slate-100">
              <div className="space-y-1 text-xs">
                <div className="font-bold text-slate-900 text-sm">Proshanta Sarker</div>
                <div className="text-slate-600">Proprietor &amp; Managing Director</div>
                <div className="text-slate-500">Contact: {COMPANY_INFO.phones[0]}</div>
                <div className="text-slate-500">Email: {COMPANY_INFO.emails[0]}</div>
              </div>

              <div className="text-right text-xs text-slate-400">
                <div>Registration Authority: Dhaka South City Corporation</div>
                <div className="font-mono">TIN: {COMPANY_INFO.tin} · BIN: {COMPANY_INFO.bin}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 rounded-b-2xl flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500">
            Official Profile Document · M/S Sraboni Enterprise &amp; Advance Iron
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
