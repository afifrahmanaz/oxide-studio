"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    category: "",
    portfolioUrl: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo OXIDE! Saya tertarik menjadi partner.
    
Nama: ${formData.name}
Usaha: ${formData.businessName}
Kategori: ${formData.category}
Portfolio: ${formData.portfolioUrl}
No. WA: ${formData.whatsapp}`;

    window.open(`https://wa.me/message/D456YXRE63TPJ1?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Info */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">
                Jaringan Kemitraan
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-slate-900 mb-6 leading-tight">
                Kembangkan Bisnis <br />
                <span className="italic text-blue-600">Bersama OXIDE.</span>
              </h1>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
                Bergabunglah dengan jaringan mitra profesional kami. Dapatkan alokasi proyek berkualitas tanpa perlu memusingkan pencarian klien, pemasaran, atau proses administrasi. Fokus pada spesialisasi Anda, biarkan manajemen OXIDE menangani sisanya.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "campaign",
                    title: "Tanpa Biaya Pemasaran",
                    desc: "OXIDE sepenuhnya mengelola pencarian klien dan promosi layanan ke seluruh jaringan.",
                  },
                  {
                    icon: "handshake",
                    title: "Alokasi Proyek Berkualitas",
                    desc: "Dapatkan penugasan proyek yang sesuai dengan spesialisasi dan standar tarif Anda.",
                  },
                  {
                    icon: "account_balance_wallet",
                    title: "Sistem Pembayaran Terjamin",
                    desc: "Keamanan transaksi terjamin melalui sistem OXIDE, bebas dari risiko tagihan macet.",
                  },
                  {
                    icon: "support_agent",
                    title: "Fokus Pada Eksekusi",
                    desc: "Seluruh komunikasi awal, negosiasi, dan administrasi ditangani oleh manajemen OXIDE.",
                  }
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-sm">
                    <div className="size-12 shrink-0 flex items-center justify-center bg-white border border-slate-200 rounded-sm text-blue-600">
                      <span className="material-symbols-outlined text-[24px]">{benefit.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-slate-900 border border-slate-800 rounded-sm p-8 md:p-10 shadow-2xl">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-white mb-2">Formulir Pendaftaran Mitra</h2>
                  <p className="text-sm text-slate-400 font-light">
                    Lengkapi data berikut. Tim kurasi kami akan melakukan peninjauan dan menghubungi Anda.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Nama Lengkap
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-sm text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Contoh: Budi Santoso"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Nama Perusahaan / Brand
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-sm text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Contoh: Budi Studio"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Kategori Layanan
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-sm text-sm focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-slate-800"
                    >
                      <option value="">Pilih Kategori Spesialisasi</option>
                      <option value="Website & Aplikasi">Website & Aplikasi</option>
                      <option value="Desain & Branding">Desain & Branding</option>
                      <option value="Marketing & Social Media">Pemasaran Digital & Media Sosial</option>
                      <option value="Foto, Video & Konten">Fotografi & Videografi</option>
                      <option value="Printing & Merchandise">Percetakan & Merchandise</option>
                      <option value="Toko, Booth & Signage">Interior Toko, Booth & Signage</option>
                      <option value="Kasir, IT & Peralatan">Infrastruktur IT & Peralatan</option>
                      <option value="Legalitas & Administrasi">Legalitas & Administrasi</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Tautan Portofolio / Website
                    </label>
                    <input
                      required
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-sm text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="https://..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      No. WhatsApp Aktif
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-sm text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Contoh: 081234567890"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors mt-6"
                  >
                    Kirim via WhatsApp
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-4 leading-relaxed">
                    Formulir ini akan mengarahkan Anda ke WhatsApp resmi OXIDE dengan data yang telah terstruktur.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
