import React, { useState, useRef } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Copy, Check, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/companyData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpec?: string;
}

interface AttachedImage {
  id: string;
  name: string;
  size: string;
  previewUrl: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose, initialSpec = '' }) => {
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [materialType, setMaterialType] = useState('MS Plate');
  const [tonnageOrQty, setTonnageOrQty] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Shyampur, Dhaka');
  const [specNotes, setSpecNotes] = useState(initialSpec);
  const [attachedImages, setAttachedImages] = useState<AttachedImage[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewUrl = event.target?.result as string;
        const newImg: AttachedImage = {
          id: Math.random().toString(36).substring(7),
          name: file.name,
          size: `${(file.size / 1024).toFixed(1)} KB`,
          previewUrl,
        };
        setAttachedImages((prev) => [...prev, newImg]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id: string) => {
    setAttachedImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone) return;

    const ref = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteRef(ref);
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const imagesCount = attachedImages.length > 0 ? ` (${attachedImages.length} image(s)/drawing(s) ready to send)` : '';
    return encodeURIComponent(
      `*New Steel Quotation Request (${quoteRef || 'Inquiry'})*\n` +
      `*Client:* ${clientName}\n` +
      `*Company:* ${companyName || 'N/A'}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Item/Service:* ${materialType}\n` +
      `*Quantity/Tonnage:* ${tonnageOrQty || 'Custom'}\n` +
      `*Delivery Destination:* ${deliveryLocation}\n` +
      `*Specifications:* ${specNotes || 'Standard'}\n` +
      `*Attached Drawings/Photos:* ${attachedImages.length > 0 ? `${attachedImages.map(img => img.name).join(', ')}${imagesCount}` : 'None'}\n\n` +
      `Sent via Sraboni & Advance Iron Online Portal`
    );
  };

  const handleCopy = () => {
    const text = `Quotation Ref: ${quoteRef}\nClient: ${clientName} (${companyName})\nPhone: ${phone}\nItem: ${materialType}\nTonnage: ${tonnageOrQty}\nLocation: ${deliveryLocation}\nSpecs: ${specNotes}\nAttached Files: ${attachedImages.map(i => i.name).join(', ') || 'None'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setClientName('');
    setCompanyName('');
    setPhone('');
    setEmail('');
    setTonnageOrQty('');
    setSpecNotes('');
    setAttachedImages([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              Material &amp; Engineering Quotation
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Request Price &amp; Sizing Availability
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Engineer Kabir Ahmed"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Bengal Shipping / Dockyard"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+880 17XX-XXXXXX"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Required Product / Service
                </label>
                <select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                >
                  <option value="MS Plate (Shipyard Sourced)">MS Plate (Shipyard Sourced)</option>
                  <option value="MS Angle (Up to 20ft)">MS Angle (Up to 20ft)</option>
                  <option value="U-Channel (Structural)">U-Channel (Structural)</option>
                  <option value="Custom Cutting Plate">Custom Cutting Plate</option>
                  <option value="Bit Girder / T-Girder">Bit Girder / T-Girder</option>
                  <option value="1200T Hydraulic Plate Bending">1200T Hydraulic Plate Bending</option>
                  <option value="1200T Hydraulic Reverse Straightening">1200T Hydraulic Reverse Straightening</option>
                  <option value="Shipbuilding Marine Steel Supply">Shipbuilding Marine Steel Supply</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Required Quantity / Tonnage
                </label>
                <input
                  type="text"
                  value={tonnageOrQty}
                  onChange={(e) => setTonnageOrQty(e.target.value)}
                  placeholder="e.g. 15 Metric Tons / 20 Sheets"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Destination / Yard Location
              </label>
              <input
                type="text"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                placeholder="e.g. Shyampur Dhaka / Keranigonj Dockyard / Chittagong"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specifications, Thickness &amp; Notes
              </label>
              <textarea
                rows={3}
                value={specNotes}
                onChange={(e) => setSpecNotes(e.target.value)}
                placeholder="Specify dimensions (e.g., 7ft x 20ft, 10mm thickness, edge beveling required)..."
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
              />
            </div>

            {/* Attach Images / Drawings / Blueprints Section */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Attach Images, Drawings or Blueprints (Optional)
              </label>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,.pdf"
                multiple
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer border-2 border-dashed border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100/60 p-4 rounded-xl text-center transition-colors"
              >
                <div className="flex flex-col items-center gap-1.5 text-xs text-slate-600">
                  <Upload className="w-5 h-5 text-slate-400" />
                  <span className="font-semibold text-slate-800">
                    Click to browse or drop blueprint / sample images
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Supports JPG, PNG, PDF drawings, photos of bent steel, or vessel plans
                  </span>
                </div>
              </div>

              {/* Uploaded Thumbnails Preview */}
              {attachedImages.length > 0 && (
                <div className="mt-3 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">
                    Attached Files ({attachedImages.length}):
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {attachedImages.map((img) => (
                      <div
                        key={img.id}
                        className="p-2 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <img
                            src={img.previewUrl}
                            alt={img.name}
                            className="w-8 h-8 rounded object-cover border border-slate-300 shrink-0"
                          />
                          <div className="truncate">
                            <div className="font-medium text-slate-800 truncate text-[11px]">
                              {img.name}
                            </div>
                            <div className="text-[10px] text-slate-400">{img.size}</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(img.id)}
                          className="p-1 text-slate-400 hover:text-red-500 shrink-0"
                          title="Remove image"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Request Recorded Successfully
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Quotation Reference: <span className="font-mono text-amber-700">{quoteRef}</span>
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-2">
                Thank you, {clientName}. Proshanta Sarker and our engineering managers (Biplob Sarker / Bikas Kumar) have received your requirements.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 font-mono text-slate-700">
              <div><strong className="font-sans">Material:</strong> {materialType}</div>
              <div><strong className="font-sans">Quantity:</strong> {tonnageOrQty || 'Custom'}</div>
              <div><strong className="font-sans">Delivery:</strong> {deliveryLocation}</div>
              {specNotes && <div><strong className="font-sans">Specs:</strong> {specNotes}</div>}
              {attachedImages.length > 0 && (
                <div>
                  <strong className="font-sans">Attached Files:</strong> {attachedImages.length} drawing(s) ({attachedImages.map(i => i.name).join(', ')})
                </div>
              )}
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={`https://wa.me/8801680138031?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Forward to WhatsApp for Immediate Rates</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopy}
                  className="py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="py-2.5 px-3 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
