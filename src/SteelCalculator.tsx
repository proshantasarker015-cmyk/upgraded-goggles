import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Copy, RefreshCw, Send } from 'lucide-react';

interface SteelCalculatorProps {
  onPassCalculatedSpecToRFQ: (specSummary: string) => void;
}

export const SteelCalculator: React.FC<SteelCalculatorProps> = ({ onPassCalculatedSpecToRFQ }) => {
  const [productType, setProductType] = useState<'plate' | 'angle' | 'channel' | 'press'>('plate');
  const [unitSystem, setUnitSystem] = useState<'feet' | 'mm'>('feet');
  
  // Dimensions state
  const [lengthFeet, setLengthFeet] = useState<number>(20);
  const [widthFeet, setWidthFeet] = useState<number>(7);
  const [lengthMm, setLengthMm] = useState<number>(6096);
  const [widthMm, setWidthMm] = useState<number>(2134);
  const [thicknessMm, setThicknessMm] = useState<number>(8);
  const [quantity, setQuantity] = useState<number>(5);

  // Angle specific
  const [angleLeg1Mm, setAngleLeg1Mm] = useState<number>(100);
  const [angleLeg2Mm, setAngleLeg2Mm] = useState<number>(75);

  // Press service specific
  const [pressOperation, setPressOperation] = useState<'curve_bending' | 'reverse_straightening'>('curve_bending');

  // Density of Mild Steel = 7850 kg / m^3
  // 1 foot = 0.3048 m
  const calcWeight = (): { unitKg: number; totalKg: number; totalTons: number } => {
    let unitKg = 0;

    if (productType === 'plate') {
      const lengthM = unitSystem === 'feet' ? lengthFeet * 0.3048 : lengthMm / 1000;
      const widthM = unitSystem === 'feet' ? widthFeet * 0.3048 : widthMm / 1000;
      const areaM2 = lengthM * widthM;
      // Weight = Area (m2) * thickness (mm) * 7.85 kg/m2/mm
      unitKg = areaM2 * thicknessMm * 7.85;
    } else if (productType === 'angle') {
      const lengthM = unitSystem === 'feet' ? lengthFeet * 0.3048 : lengthMm / 1000;
      // Approximate L-angle weight per meter: (leg1 + leg2 - thickness) * thickness * 0.00785
      const weightPerMeter = (angleLeg1Mm + angleLeg2Mm - thicknessMm) * thicknessMm * 0.00785;
      unitKg = weightPerMeter * lengthM;
    } else if (productType === 'channel') {
      const lengthM = unitSystem === 'feet' ? lengthFeet * 0.3048 : lengthMm / 1000;
      // Standard structural channel approx 15-25 kg/m based on 4-8mm
      const weightPerMeter = (thicknessMm * 3.2);
      unitKg = weightPerMeter * lengthM;
    } else {
      // Hydraulic press plate processing
      const lengthM = unitSystem === 'feet' ? lengthFeet * 0.3048 : lengthMm / 1000;
      const widthM = unitSystem === 'feet' ? widthFeet * 0.3048 : widthMm / 1000;
      unitKg = lengthM * widthM * thicknessMm * 7.85;
    }

    const totalKg = unitKg * quantity;
    const totalTons = totalKg / 1000;

    return {
      unitKg: Math.round(unitKg * 10) / 10,
      totalKg: Math.round(totalKg * 10) / 10,
      totalTons: Math.round(totalTons * 100) / 100,
    };
  };

  const { unitKg, totalKg, totalTons } = calcWeight();
  const [copied, setCopied] = useState(false);

  const getSpecSummary = () => {
    if (productType === 'plate') {
      return `MS Plate: ${unitSystem === 'feet' ? `${widthFeet}ft x ${lengthFeet}ft` : `${widthMm}mm x ${lengthMm}mm`}, ${thicknessMm}mm thickness, Qty: ${quantity} pcs (Est. ${totalKg} kg / ${totalTons} MT)`;
    } else if (productType === 'angle') {
      return `MS Angle: ${angleLeg1Mm}x${angleLeg2Mm}mm, ${thicknessMm}mm thick, Length: ${unitSystem === 'feet' ? `${lengthFeet}ft` : `${lengthMm}mm`}, Qty: ${quantity} pcs (Est. ${totalKg} kg / ${totalTons} MT)`;
    } else if (productType === 'channel') {
      return `U-Channel: Length ${unitSystem === 'feet' ? `${lengthFeet}ft` : `${lengthMm}mm`}, ${thicknessMm}mm web, Qty: ${quantity} pcs (Est. ${totalKg} kg)`;
    } else {
      return `1200T Hydraulic ${pressOperation === 'curve_bending' ? 'Curve Bending' : 'Reverse Straightening'}: ${thicknessMm}mm plate, Qty: ${quantity} pcs (Est. ${totalTons} MT)`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getSpecSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendToRFQ = () => {
    onPassCalculatedSpecToRFQ(getSpecSummary());
  };

  return (
    <section id="calculator" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            05. Engineering Utility
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Interactive Mild Steel Weight & Sizing Estimator
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Calculate accurate theoretical tonnage for shipyard plates, structural angles, U-channels, and 1200T hydraulic forming requirements based on standard mild steel density (7,850 kg/m³).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {/* Product Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Select Material / Service Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'plate', label: 'MS Plate' },
                  { id: 'angle', label: 'MS Angle' },
                  { id: 'channel', label: 'U-Channel' },
                  { id: 'press', label: '1200T Pressing' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProductType(item.id as any)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors text-center ${
                      productType === item.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Units Toggle */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
              <span className="font-semibold text-slate-700">Measurement System:</span>
              <div className="inline-flex p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => setUnitSystem('feet')}
                  className={`px-3 py-1 font-semibold rounded-md transition-colors ${
                    unitSystem === 'feet' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Feet & Inches
                </button>
                <button
                  onClick={() => setUnitSystem('mm')}
                  className={`px-3 py-1 font-semibold rounded-md transition-colors ${
                    unitSystem === 'mm' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Millimeters (Metric)
                </button>
              </div>
            </div>

            {/* Dynamic Dimension Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productType === 'plate' || productType === 'press' ? (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Length {unitSystem === 'feet' ? '(Feet)' : '(mm)'}
                    </label>
                    {unitSystem === 'feet' ? (
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={lengthFeet}
                        onChange={(e) => setLengthFeet(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                      />
                    ) : (
                      <input
                        type="number"
                        min="300"
                        max="12000"
                        value={lengthMm}
                        onChange={(e) => setLengthMm(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                      />
                    )}
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Standard shipyard sheet: 20 feet</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Width {unitSystem === 'feet' ? '(Feet)' : '(mm)'}
                    </label>
                    {unitSystem === 'feet' ? (
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={widthFeet}
                        onChange={(e) => setWidthFeet(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                      />
                    ) : (
                      <input
                        type="number"
                        min="300"
                        max="3600"
                        value={widthMm}
                        onChange={(e) => setWidthMm(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                      />
                    )}
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Standard shipyard sheet: 7 feet</span>
                  </div>
                </>
              ) : productType === 'angle' ? (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Angle Leg Dimensions
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        placeholder="Leg 1 (mm)"
                        value={angleLeg1Mm}
                        onChange={(e) => setAngleLeg1Mm(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                      />
                      <input
                        type="number"
                        placeholder="Leg 2 (mm)"
                        value={angleLeg2Mm}
                        onChange={(e) => setAngleLeg2Mm(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">e.g., 5"x3" (125x75mm) or 7"x3" (175x75mm)</span>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Bar Length {unitSystem === 'feet' ? '(Feet)' : '(mm)'}
                    </label>
                    <input
                      type="number"
                      value={unitSystem === 'feet' ? lengthFeet : lengthMm}
                      onChange={(e) =>
                        unitSystem === 'feet'
                          ? setLengthFeet(Number(e.target.value))
                          : setLengthMm(Number(e.target.value))
                      }
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg"
                    />
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Stock length up to 20 feet</span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Channel Length {unitSystem === 'feet' ? '(Feet)' : '(mm)'}
                    </label>
                    <input
                      type="number"
                      value={unitSystem === 'feet' ? lengthFeet : lengthMm}
                      onChange={(e) =>
                        unitSystem === 'feet'
                          ? setLengthFeet(Number(e.target.value))
                          : setLengthMm(Number(e.target.value))
                      }
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Flange / Web Grade
                    </label>
                    <div className="px-3 py-2 text-xs bg-slate-100 rounded-lg text-slate-700">
                      Standard Heavy Shipyard U-Channel
                    </div>
                  </div>
                </>
              )}

              {/* Thickness Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Steel Thickness (mm)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="3"
                    max="30"
                    step="1"
                    value={thicknessMm}
                    onChange={(e) => setThicknessMm(Number(e.target.value))}
                    className="w-full accent-slate-900"
                  />
                  <span className="px-3 py-1 bg-slate-900 text-white rounded-md text-xs font-mono font-semibold tabular-nums shrink-0">
                    {thicknessMm} mm
                  </span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>3mm (Angle)</span>
                  <span>12mm (Heavy Plate)</span>
                  <span>30mm (1200T Max Press)</span>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Quantity (Pieces / Sheets)
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>
            </div>

            {/* If 1200T press is selected */}
            {productType === 'press' && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                <span className="font-semibold">Hydraulic Operation Selected: </span>
                Our 1200-Ton press supports up to 30mm steel bending, pipe/cylinder rounding, and reverse-straightening with hydraulic ram precision.
              </div>
            )}
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Estimated Material Output
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Tonnage & Specification Summary
              </h3>
            </div>

            {/* Key Calculated Weights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Single Unit Weight</div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums mt-1">
                  {unitKg} <span className="text-xs font-sans text-slate-400 font-normal">kg</span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Total Lot Weight</div>
                <div className="text-2xl font-bold text-amber-400 font-mono tabular-nums mt-1">
                  {totalTons} <span className="text-xs font-sans text-amber-300 font-normal">Tons</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono tabular-nums mt-0.5">
                  ({totalKg} kg)
                </div>
              </div>
            </div>

            {/* Formatted Spec Card */}
            <div className="p-3.5 bg-slate-950/90 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed break-words">
              {getSpecSummary()}
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleSendToRFQ}
                className="w-full py-3 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Formal Quotation with this Spec</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopy}
                  className="py-2.5 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Specs'}</span>
                </button>

                <a
                  href={`https://wa.me/8801680138031?text=${encodeURIComponent('Inquiry from Website Estimator:\n' + getSpecSummary())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/60 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
