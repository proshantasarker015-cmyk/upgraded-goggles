import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                07. Location &amp; Direct Communication
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                Visit Our Shyampur Facility or Connect Directly
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Our twin yards and workshop are located in the heart of Dhaka’s prime steel and engineering hub in Shyampur, with direct transport access to Keranigonj dockyards and the Dhaka-Chittagong highway.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4 text-xs">
              {/* Address */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Central Workshop &amp; Stockyard</div>
                  <div className="text-slate-600 mt-0.5">{COMPANY_INFO.currentAddress}</div>
                  <div className="text-slate-500 text-[11px] mt-1">
                    Combined 2,830 sq.ft facility with 1200T Hydraulic Press &amp; inventory storage
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Direct Phone &amp; WhatsApp Hotlines</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-700 font-mono tabular-nums">
                    {COMPANY_INFO.phones.map((p, i) => (
                      <a
                        key={i}
                        href={`https://wa.me/${p.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-emerald-600 transition-colors flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{p}</span>
                      </a>
                    ))}
                  </div>
                  <div className="text-slate-500 text-[11px]">Proprietor Proshanta Sarker available for direct technical inquiries</div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Official Corporate Inquiries</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-700 font-mono">
                    {COMPANY_INFO.emails.map((m, i) => (
                      <a
                        key={i}
                        href={`mailto:${m}`}
                        className="hover:text-sky-600 transition-colors"
                      >
                        {m}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Operational Hours</div>
                  <div className="text-slate-600 mt-0.5">Saturday – Thursday: 8:00 AM – 9:00 PM</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Night security guards (Kobirul Islam &amp; Harun Mia) on 24-hour facility duty
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiries & Route Guide */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-5">
                <h3 className="text-base font-bold text-slate-900">
                  Send Direct Dispatch Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Send your requirements directly to Proshanta Sarker for fast price verification.
                </p>
              </div>

              {!sent ? (
                <form onSubmit={handleQuickSend} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name or company"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Requirement Details
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Inquiring about 10mm MS plates and 1200T bending service for cargo boat hull..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Workshop</span>
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Click below to open in WhatsApp to chat with Proshanta Sarker immediately:
                  </p>
                  <a
                    href={`https://wa.me/8801680138031?text=${encodeURIComponent(`Hello Proshanta Sarker,\nMy Name: ${name}\nPhone: ${phone}\nRequirement: ${message || 'Inquiring about mild steel products'}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              )}
            </div>

            {/* Shyampur Strategic Location Highlight */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Strategic Logistics Advantage</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Prime Shyampur River &amp; Highway Connectivity
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct water transit via Buriganga river allows bulk flat-bottom barges to deliver heavy plates from Chittagong directly into Shyampur ghats with minimal road handling friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
