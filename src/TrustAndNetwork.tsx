import React, { useState } from 'react';
import { ShieldCheck, Landmark, Users, Building, FileCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, STAFF_MEMBERS, CLIENT_LIST, SHIPYARDS_AND_SUPPLIERS } from '../data/companyData';

export const TrustAndNetwork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'credentials' | 'team' | 'clients' | 'banking'>('credentials');

  return (
    <section id="credentials" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            06. Institutional Governance & Network
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Verified Credentials, Banking Trust & Industrial Partners
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Registered under Dhaka South City Corporation with complete Taxpayer Identification (TIN) and Business Identification (BIN) compliance, backed by premier national and international banks.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl mb-8 flex-wrap gap-1">
          <button
            onClick={() => setActiveTab('credentials')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'credentials'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Licenses & Registration
          </button>
          <button
            onClick={() => setActiveTab('banking')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'banking'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Banking Partners
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'clients'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Clients & Supply Chain
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'team'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Staff & Personnel (13)
          </button>
        </div>

        {/* Content Panel 1: Credentials */}
        {activeTab === 'credentials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Trade License</div>
              <div className="text-lg font-bold text-slate-900 font-mono mt-1">
                {COMPANY_INFO.tradeLicense}
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Officially registered under Dhaka City Corporation for trading, cutting, and structural mild steel fabrication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Taxpayer Identification (TIN)</div>
              <div className="text-lg font-bold text-slate-900 font-mono mt-1">
                {COMPANY_INFO.tin}
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Registered with National Board of Revenue (NBR), Bangladesh. Fully tax-compliant entity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Business Identification (BIN)</div>
              <div className="text-lg font-bold text-slate-900 font-mono mt-1">
                {COMPANY_INFO.bin}
              </div>
              <p className="text-xs text-slate-600 mt-2">
                VAT & Customs registered business identifier for domestic procurement and shipyard trade.
              </p>
            </div>
          </div>
        )}

        {/* Content Panel 2: Banking Partners */}
        {activeTab === 'banking' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="max-w-2xl mb-8">
              <h3 className="text-lg font-bold text-slate-900">Institutional Banking Relationships</h3>
              <p className="text-xs text-slate-600 mt-1">
                Maintaining active corporate current accounts and liquidity reserves across leading commercial banks in Bangladesh for high-value transactions and LC facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Landmark className="w-5 h-5 text-amber-700" />
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Corporate Current Accounts
                  </h4>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.banks.current.map((bank, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                      <span className="font-semibold text-slate-800">{bank}</span>
                      <span className="text-slate-500">Dhaka Corporate Branches</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Landmark className="w-5 h-5 text-sky-700" />
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Savings & Operational Reserve Accounts
                  </h4>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.banks.savings.map((bank, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                      <span className="font-semibold text-slate-800">{bank}</span>
                      <span className="text-slate-500">Active Liquid Reserves</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Panel 3: Clients & Supply Chain */}
        {activeTab === 'clients' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Clients */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Regular Client Portfolio
                </h3>
                <div className="divide-y divide-slate-200">
                  {CLIENT_LIST.map((client, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{client.name}</div>
                        <div className="text-slate-500">{client.address}</div>
                      </div>
                      <div className="text-right text-slate-600 font-medium">
                        {client.sector}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sourcing Shipyards & Suppliers */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Sourcing Partners & Shipyards
                </h3>
                <div className="divide-y divide-slate-200">
                  {SHIPYARDS_AND_SUPPLIERS.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-slate-800">{item.name}</div>
                        <div className="text-slate-500">{item.address}</div>
                      </div>
                      <div className="text-slate-600 font-medium">
                        {item.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Panel 4: Staff & Personnel */}
        {activeTab === 'team' && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Operational Staff & Workforce (13 Full-Time Members)
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Led by Proprietor Proshanta Sarker, supported by managers, certified cutting masters, grinders, and fabricators.
                </p>
              </div>
              <div className="text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                Total Staff: 13 Personnel
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                    <th className="py-2.5 px-3">SL</th>
                    <th className="py-2.5 px-3">Name</th>
                    <th className="py-2.5 px-3">Designation</th>
                    <th className="py-2.5 px-3">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {STAFF_MEMBERS.map((staff) => (
                    <tr key={staff.sl} className="hover:bg-white/60">
                      <td className="py-2.5 px-3 font-mono tabular-nums text-slate-500">{staff.sl}</td>
                      <td className="py-2.5 px-3 font-bold text-slate-900">{staff.name}</td>
                      <td className="py-2.5 px-3 text-slate-700 font-medium">{staff.designation}</td>
                      <td className="py-2.5 px-3 text-slate-500">{staff.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
