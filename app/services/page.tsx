"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories } from "../data/services";

function ServicesContent() {
  const searchParams = useSearchParams();
  const initCat = searchParams.get("category");
  
  const [activeTab, setActiveTab] = useState(initCat || categories[0].slug);

  useEffect(() => {
    if (initCat) {
      setActiveTab(initCat);
    }
  }, [initCat]);

  return (
    <div className="bg-[#fbfbfd] min-h-screen text-zinc-900 font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-48 pb-20 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-[#1d1d1f]">
            Solusi Paket. <br />
            Tanpa Kompleksitas.
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium max-w-2xl mx-auto tracking-tight">
            Pilih paket yang paling sesuai dengan fase pertumbuhan perusahaan Anda. Harga transparan, eksekusi instan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(cat.slug)}
                className={`px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 ${
                  activeTab === cat.slug
                    ? "bg-[#1d1d1f] text-white shadow-lg scale-105"
                    : "bg-white text-zinc-500 hover:bg-zinc-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Pricing Cards Grid */}
          <div className="space-y-24">
            {categories
              .filter((cat) => cat.slug === activeTab)
              .map((category) => (
                <div key={category.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{category.name}</h2>
                    <p className="text-lg text-zinc-500 font-medium">{category.description}</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                    {category.packages.map((pkg) => (
                      <div
                        key={pkg.slug}
                        className={`relative flex flex-col bg-white rounded-[2.5rem] p-10 transition-all duration-500 flex-1 max-w-md w-full ${
                          pkg.isPopular 
                            ? "shadow-[0_30px_60px_rgba(0,0,0,0.08)] scale-100 md:scale-105 z-10 border-2 border-blue-600/10" 
                            : "shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-zinc-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                        }`}
                      >
                        {pkg.isPopular && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            Paling Diminati
                          </div>
                        )}

                        <div className="mb-8 text-center md:text-left">
                          <h3 className="text-2xl font-bold tracking-tight mb-2 text-[#1d1d1f]">{pkg.name}</h3>
                          <p className="text-[#86868b] font-medium mb-6 h-12 leading-tight">
                            {pkg.description}
                          </p>
                          <div className="text-3xl md:text-4xl font-bold tracking-tighter text-[#1d1d1f]">
                            {pkg.price}
                          </div>
                        </div>
                        
                        <a
                          href={`https://wa.me/message/D456YXRE63TPJ1?text=${encodeURIComponent(`Halo OXIDE, saya tertarik dengan Layanan ${category.name} (Paket ${pkg.name}).`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full text-center py-4 rounded-full font-bold text-lg mb-10 transition-all duration-300 ${
                            pkg.isPopular
                              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                              : "bg-zinc-100 text-[#1d1d1f] hover:bg-zinc-200"
                          }`}
                        >
                          Pilih Paket
                        </a>

                        <div className="mt-auto">
                          <p className="text-sm font-bold tracking-tight mb-4 uppercase text-zinc-400">Termasuk:</p>
                          <ul className="space-y-4">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[20px] text-blue-600 shrink-0">check_circle</span>
                                <span className="text-zinc-600 font-medium leading-tight">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-48 text-center text-xl font-bold tracking-tight text-zinc-400">Memuat...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
