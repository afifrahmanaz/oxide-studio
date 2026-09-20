"use client";

import { useState } from "react";

const quickOptions = [
  "Saya butuh website",
  "Saya butuh desain & branding",
  "Saya butuh marketing",
  "Saya mau buka toko / cafe",
  "Saya mau promosi",
  "Saya belum tahu, butuh konsultasi",
];

export default function AskOxide() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  const whatsappUrl = selected
    ? `https://wa.me/message/D456YXRE63TPJ1?text=${encodeURIComponent(
        `Halo OXIDE! ${selected}. Bisa bantu saya?`
      )}`
    : "https://wa.me/message/D456YXRE63TPJ1";

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[60] flex items-center gap-2 px-5 py-3.5 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-slate-800 text-white scale-90"
            : "bg-oxide-dark text-white hover:shadow-glow hover:scale-105"
        }`}
        aria-label="Konsultasi Gratis"
      >
        <span
          className="material-symbols-outlined text-xl transition-transform duration-300"
          style={{ fontVariationSettings: "'FILL' 1", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          {isOpen ? "close" : "chat"}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          {isOpen ? "Tutup" : "Konsultasi Gratis"}
        </span>
      </button>

      {/* Popup */}
      <div
        className={`fixed bottom-24 right-6 z-[55] w-[340px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Bantuan Langsung</span>
          </div>
          <h3 className="text-lg font-serif mt-2">Apa yang bisnis Anda butuhkan?</h3>
          <p className="text-slate-400 text-xs mt-1">Pilih salah satu atau langsung hubungi kami</p>
        </div>

        {/* Quick Options */}
        <div className="p-4 space-y-2 max-h-[280px] overflow-y-auto">
          {quickOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                selected === option
                  ? "bg-oxide-dark/5 border-oxide-dark text-oxide-dark"
                  : "bg-slate-50 border-transparent text-slate-700 hover:bg-slate-100 hover:border-slate-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="p-4 pt-2 border-t border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Lanjut ke WhatsApp
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[50] bg-black/20 backdrop-blur-[2px] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
