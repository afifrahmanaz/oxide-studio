"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { budgetRanges, deadlineOptions } from "../data/services";

function RequestForm() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    requirement: prefilledService ? `Saya tertarik dengan layanan ${prefilledService.replace(/-/g, " ")}` : "",
    budget: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate simple ref number
    const refNum = "REQ-" + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    const text = `Halo OXIDE! Saya ingin meminta penawaran formal. [Ref: ${refNum}]
    
Nama: ${formData.name}
Perusahaan/Brand: ${formData.company || "-"}
No. WA: ${formData.whatsapp}

Deskripsi Kebutuhan:
${formData.requirement}

Estimasi Anggaran: ${formData.budget || "Belum ditentukan"}
Target Penyelesaian: ${formData.deadline || "Fleksibel"}`;

    window.open(`https://wa.me/message/D456YXRE63TPJ1?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Info */}
      <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center size-6 rounded-full bg-slate-100 text-slate-600 font-serif text-[10px]">1</span>
          Informasi Kontak
        </h3>
        <div className="space-y-5">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                Perusahaan / Brand
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                No. WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Requirement Info */}
      <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center size-6 rounded-full bg-slate-100 text-slate-600 font-serif text-[10px]">2</span>
          Detail Kebutuhan Proyek
        </h3>
        <div className="space-y-5">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
              Deskripsikan Kebutuhan Anda <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              placeholder="Contoh: Kami membutuhkan pembuatan website company profile untuk perusahaan kontraktor, yang terintegrasi dengan company profile PDF dan desain logo baru..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-y"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                Estimasi Anggaran
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              >
                <option value="">Pilih Rentang Anggaran</option>
                {budgetRanges.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                Target Penyelesaian
              </label>
              <select
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              >
                <option value="">Pilih Estimasi Waktu</option>
                {deadlineOptions.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
      >
        Kirim Permintaan Penawaran
        <span className="material-symbols-outlined text-sm">send</span>
      </button>
    </form>
  );
}

export default function RequestQuotePage() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">
              Inisiasi Proyek
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
              Permintaan Penawaran
            </h1>
            <p className="text-slate-500 font-light text-lg">
              Sampaikan detail kebutuhan operasional bisnis Anda. Tim konsultan kami akan segera menghubungi Anda dengan penawaran formal dan terstruktur.
            </p>
          </div>

          <Suspense fallback={<div className="p-8 text-center text-slate-400 font-light">Memuat formulir...</div>}>
            <RequestForm />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}
