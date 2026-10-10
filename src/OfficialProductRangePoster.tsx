import React, { useState } from 'react';
import { ASSETS } from '../assets/images';
import { ArrowUpRight, Check, Ship, ShieldCheck, MapPin, Phone, Mail, Sparkles, Layers } from 'lucide-react';
import { SraboniLogo } from './SraboniLogo';
import { AdvanceIronLogo } from './AdvanceIronLogo';

interface OfficialProductRangePosterProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const OfficialProductRangePoster: React.FC<OfficialProductRangePosterProps> = ({
  onSelectProductForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'poster' | 'yard_gallery'>('poster');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const realYardPhotos = [
    {
      title: 'Shyampur Central Plate Depot',
      caption: 'Outdoor storage of 7ft × 20ft mild steel plates (4mm to 12mm) sourced directly from Chittagong shipyards.',
      image: ASSETS.shyampurPlates,
      tag: 'Raw Plate Stock',
    },
    {
      title: 'Circular Flanges & Cutting Plates',
      caption: 'Neat stacks of round circular discs, perforated blanks, and custom flange plates cut to client specifications.',
      image: ASSETS.circularDiscs,
      tag: 'Cutting Shop',
    },
    {
      title: 'Structural Bit Girders & I-Beams',
      caption: 'Heavy load structural beams, 5-inch standard bit girders, and custom fabricated heavy building girders.',
      image: ASSETS.structuralGirders,
      tag: 'Girders & Channels',
    },
    {
      title: '30mm Hydraulic Straightening Machine',
      caption: 'Specialized hydraulic press machine restoring bent, warped iron bars and heavy plates back to factory tolerance.',
      image: ASSETS.straighteningMachine,
      tag: '1200T Machine Shop',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Verified Yard Catalog &amp; Real Site Imagery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            Official Product Range &amp; Shyampur Facility
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Directly modeled on our official corporate catalog board and authentic stockyard operations at 52/2 NCG Road, Shyampur, Dhaka.
          </p>
        </div>

        {/* View Switcher: Official Poster Grid vs Real Yard Gallery */}
        <div className="inline-flex p-1 bg-slate-950 rounded-xl mb-8 border border-slate-800">
          <button
            onClick={() => setActiveTab('poster')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'poster'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Official 10-Item Product Range Board
          </button>
          <button
            onClick={() => setActiveTab('yard_gallery')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'yard_gallery'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Shyampur Yard &amp; Workshop Gallery
          </button>
        </div>

        {/* Tab 1: The Official Product Range Board */}
        {activeTab === 'poster' && (
          <div className="bg-slate-950 rounded-2xl border-2 border-slate-800 p-6 sm:p-8 space-y-8 shadow-2xl">
            {/* Poster Header Lockup with Real Logos */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Logo 1: 1S Enterprise */}
              <div className="flex items-center gap-4">
                <SraboniLogo className="w-16 h-16 shrink-0" />
                <div>
                  <h3 className="text-lg font-extrabold text-amber-400 tracking-tight">
                    M/S. SRABONI ENTERPRISE
                  </h3>
                  <p className="text-xs text-slate-300">
                    Buy &amp; Sell all Kinds of Reusable &amp; Customized Sizing Irons
                  </p>
                </div>
              </div>

              {/* Center Divider / Bengali Signboard Note */}
              <div className="hidden lg:block text-center px-4 py-2 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs text-slate-300">
                <div className="font-semibold text-white">মেসার্স শ্রাবণী এন্টারপ্রাইজ</div>
                <div className="text-[11px] text-slate-400">প্রোপ্রাইটার: প্রশান্ত সরকার · শ্যামপুর, ঢাকা</div>
              </div>

              {/* Right Logo 2: Advance Iron Engineering Works */}
              <div className="flex items-center gap-4">
                <AdvanceIronLogo className="w-16 h-16 shrink-0" />
                <div>
                  <h3 className="text-sm font-extrabold text-sky-400">
                    ADVANCED IRON ENGINEERING WORKS
                  </h3>
                  <div className="text-xs text-slate-300 font-semibold mt-0.5">
                    Proshanta Sarker <span className="text-slate-400 font-normal">· Proprietor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10-Product Range Grid */}
            <div>
              <div className="text-center py-2 bg-blue-950/80 rounded-lg border border-blue-900 mb-6">
                <span className="text-sm font-extrabold uppercase tracking-widest text-sky-300">
                  OUR PRODUCT RANGE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* 1. MS PLATE */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    MS PLATE
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={ASSETS.shyampurPlates}
                      alt="MS Plate 7x20 feet"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> 7 feet by 20 feet</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> 4mm to 12mm</div>
                    <button
                      onClick={() => onSelectProductForQuote('MS Plate (7ft x 20ft, 4-12mm)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Plate
                    </button>
                  </div>
                </div>

                {/* 2. BIT GIRDER */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    BIT GIRDER
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={ASSETS.structuralGirders}
                      alt="Bit Girder 5 inch standard"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> 5 inch (Standard)</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> 6mm to 10mm</div>
                    <button
                      onClick={() => onSelectProductForQuote('Bit Girder (5 inch Standard, 6-10mm)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Girder
                    </button>
                  </div>
                </div>

                {/* 3. MS ANGLE (5" X 3") */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    MS ANGLE (5" X 3")
                  </div>
                  {/* Clean Visual Diagram */}
                  <div className="p-3 bg-slate-950 aspect-[4/3] flex items-center justify-center">
                    <div className="relative w-28 h-24 border-l-8 border-b-8 border-amber-400">
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-amber-400">
                        5"
                      </span>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono font-bold text-amber-400">
                        3"
                      </span>
                    </div>
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> 5 inch × 3 inch</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> 3mm to 6mm</div>
                    <button
                      onClick={() => onSelectProductForQuote('MS Angle (5" x 3", 3-6mm)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Angle
                    </button>
                  </div>
                </div>

                {/* 4. MS ANGLE (7" X 3") */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    MS ANGLE (7" X 3")
                  </div>
                  {/* Clean Visual Diagram */}
                  <div className="p-3 bg-slate-950 aspect-[4/3] flex items-center justify-center">
                    <div className="relative w-24 h-28 border-l-8 border-b-8 border-sky-400">
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-sky-400">
                        7"
                      </span>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono font-bold text-sky-400">
                        3"
                      </span>
                    </div>
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> 7 inch × 3 inch</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> 3mm to 6mm</div>
                    <button
                      onClick={() => onSelectProductForQuote('MS Angle (7" x 3", 3-6mm)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Angle
                    </button>
                  </div>
                </div>

                {/* 5. U-CHANNEL */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    U-CHANNEL
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={ASSETS.steelProductsYard}
                      alt="U-Channel bundle"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> upto 20 feet</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> 4mm to 8mm</div>
                    <button
                      onClick={() => onSelectProductForQuote('U-Channel (Up to 20ft, 4-8mm)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Channel
                    </button>
                  </div>
                </div>

                {/* 6. CUTTING PLATE (Flanges & Custom) */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    CUTTING PLATE
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={ASSETS.circularDiscs}
                      alt="Custom Cutting Plate and Flange Discs"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> Customized</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> 4mm to 12mm</div>
                    <button
                      onClick={() => onSelectProductForQuote('Cutting Plate / Circular Flanges (4-12mm)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Discs/Cut
                    </button>
                  </div>
                </div>

                {/* 7. GIRDER (CUSTOMIZED SIZE) */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    GIRDER (CUSTOM)
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={ASSETS.structuralGirders}
                      alt="Customized heavy girder"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> Customized</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> As Required</div>
                    <button
                      onClick={() => onSelectProductForQuote('Girder (Customized Size & Thickness)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Girder
                    </button>
                  </div>
                </div>

                {/* 8. T GIRDER (CUSTOMIZED SIZE) */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    T GIRDER (CUSTOM)
                  </div>
                  <div className="p-3 bg-slate-950 aspect-[4/3] flex items-center justify-center">
                    <div className="relative w-24 h-24 flex flex-col items-center justify-start">
                      <div className="w-20 h-4 bg-amber-400 rounded-xs" />
                      <div className="w-4 h-16 bg-amber-400 rounded-xs" />
                    </div>
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> Customized</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> As Required</div>
                    <button
                      onClick={() => onSelectProductForQuote('T-Girder (Customized Marine/Civil)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire T-Girder
                    </button>
                  </div>
                </div>

                {/* 9. OTHER CUSTOMIZED PRODUCTS */}
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div className="p-2.5 bg-blue-900/90 text-white font-bold text-xs text-center uppercase tracking-wider">
                    CUSTOM TUBES/PIPES
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-2 gap-2 w-full p-2">
                      <div className="w-10 h-10 rounded-full border-4 border-slate-400 mx-auto" />
                      <div className="w-10 h-10 border-4 border-slate-400 mx-auto" />
                    </div>
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-slate-300"><strong className="text-white">Size:</strong> As per Requirement</div>
                    <div className="text-slate-300"><strong className="text-white">Thickness:</strong> As Required</div>
                    <button
                      onClick={() => onSelectProductForQuote('Custom Round Pipes & Hollow Sections')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                    >
                      Inquire Pipes
                    </button>
                  </div>
                </div>

                {/* 10. STRAIGHTENING MACHINE (30mm) */}
                <div className="bg-slate-900 rounded-xl border-2 border-sky-500/80 overflow-hidden flex flex-col justify-between hover:border-sky-400 transition-colors">
                  <div className="p-2.5 bg-sky-800 text-white font-bold text-xs text-center uppercase tracking-wider">
                    STRAIGHTENING MACHINE
                  </div>
                  <div className="p-3 bg-slate-950/40 aspect-[4/3] flex items-center justify-center overflow-hidden">
                    <img
                      src={ASSETS.straighteningMachine}
                      alt="Hydraulic Straightening Machine up to 30mm"
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-xs space-y-1 bg-slate-900 border-t border-slate-800">
                    <div className="text-sky-300 font-semibold text-[11px] leading-tight">
                      Bent iron bars up to 30 mm thick are straightened.
                    </div>
                    <button
                      onClick={() => onSelectProductForQuote('Straightening Machine Service (Up to 30mm thickness)')}
                      className="w-full mt-2 py-1.5 px-2 text-[11px] font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors"
                    >
                      Inquire Service
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Contact Footer Bar */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>52/2, N.C.G Road, Shyampur, Dhaka-1204</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono tabular-nums">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+88-01680-138031, 01915-234015</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">proshantasarker015@gmail.com</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Shyampur Real Yard Gallery */}
        {activeTab === 'yard_gallery' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {realYardPhotos.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-semibold text-amber-400 border border-slate-800">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.caption}
                    </p>
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span>Location: 52/2 NCG Road, Shyampur</span>
                      <button
                        onClick={() => onSelectProductForQuote(`Inquiry from Real Yard Gallery: ${item.title}`)}
                        className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                      >
                        <span>Check Stock</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Yard Signboard Banner */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  On-Site Trade Signboard · Shyampur Branch
                </span>
                <div className="text-lg font-bold text-white mt-1">
                  মেসার্স শ্রাবণী এন্টারপ্রাইজ (M/S Sraboni Enterprise)
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  এখানে পুরাতন লোহা, প্লেট, রুলিং ও যাবতীয় সাইজিং মালামাল ক্রয় ও বিক্রয় করা হয়। ৫২/২ নবীনচন্দ্র গোস্বামী রোড, শ্যামপুর, ঢাকা-১২০৪।
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://wa.me/8801680138031"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Yard Office</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
