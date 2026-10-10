import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/companyData';
import { ASSETS } from '../assets/images';

interface ProductsCatalogProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Inventory & Processing' },
    { id: 'plate', label: 'MS Plates & Cutting' },
    { id: 'angle', label: 'MS Angles (L-Profiles)' },
    { id: 'channel', label: 'U-Channels (C-Sections)' },
    { id: 'girder', label: 'Bit & T-Girders' },
    { id: 'hydraulic', label: 'Hydraulic Press Forming' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.thickness.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standardSize.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Inventory Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              02. Certified Steel Inventory & Processing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Structural Mild Steel Materials & Custom Sizing
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every steel plate, angle, and channel is sourced from verified marine shipyards and government works. We offer custom oxygen-gas thermal cutting to customer blueprints and 1200T hydraulic forming.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] group">
              <img
                src={ASSETS.steelProductsYard}
                alt="Organized inventory yard of mild steel plates, angles and girders"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <div className="font-semibold text-sm">Shyampur Central Stockyard</div>
                <div className="text-slate-300 mt-0.5">Heavy plate bundles, channels & angle stock ready for dispatch</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product, size (e.g., 12mm)..."
              className="w-full pl-9 pr-4 py-2 text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Header & Specs */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {prod.name}
                  </h3>
                </div>

                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 mb-4">
                  <span className="font-medium text-slate-700">Size: {prod.standardSize}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-slate-900 font-mono tabular-nums">
                    {prod.thickness}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {prod.description}
                </p>

                {/* Applications Pill-free list */}
                <div className="space-y-1.5 border-t border-slate-200/80 pt-4 mb-4">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Target Applications:
                  </div>
                  <div className="text-xs text-slate-700 space-y-1">
                    {prod.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/80">
                <button
                  onClick={() => onSelectProductForQuote(prod.name)}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-900 hover:text-white border border-slate-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Specific Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No products match the selected criteria. Try adjusting your search query or category filter.
          </div>
        )}
      </div>
    </section>
  );
};
