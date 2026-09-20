"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { webPortfolio, brandingPortfolio } from "../data/portfolio";

export default function PortfolioPage() {
  return (
    <div className="bg-[#fbfbfd] min-h-screen text-zinc-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold tracking-tighter leading-[1.05] mb-8 text-[#1d1d1f]">
            Karya Kami.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto tracking-tight">
            Membantu merek dan institusi memimpin di era digital melalui desain premium dan eksekusi tanpa kompromi.
          </p>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-[13px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">Portofolio Website</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
              Website & Aplikasi.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {webPortfolio.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col group border border-zinc-100 transition-transform hover:-translate-y-2 duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-zinc-100 w-full overflow-hidden border-b border-zinc-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                  >
                    <span className="bg-white text-[#1d1d1f] px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Kunjungi Website <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </span>
                  </a>
                </div>

                {/* Content */}
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] mb-2">
                      {clientNameFormat(item.clientName, item.title)}
                    </h3>
                  </div>
                  
                  {/* Testimonial Snippet */}
                  <div className="mt-8 pt-6 border-t border-zinc-100 relative">
                    <span className="material-symbols-outlined text-zinc-200 text-3xl absolute top-6 right-0">format_quote</span>
                    <p className="text-zinc-600 font-medium italic pr-10">
                      &quot;{item.testimonial.quote}&quot;
                    </p>
                    <p className="text-sm font-bold text-[#1d1d1f] mt-4">
                      — {item.testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding & Visual Identity Section */}
      <section className="py-24 pb-40 bg-zinc-50 border-t border-zinc-200/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-24 max-w-3xl">
            <span className="text-[13px] font-bold tracking-[0.2em] text-purple-600 uppercase mb-4 block">Portofolio Branding</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6">
              Identitas Visual & Desain.
            </h2>
          </div>

          {/* Grouped Grid for Branding */}
          <div className="space-y-24">
            {brandingPortfolio.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="flex items-center gap-6 mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] whitespace-nowrap">
                    {group.clientName}
                  </h3>
                  <div className="h-px bg-zinc-200 w-full mt-2"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.images.map((imgSrc, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 group relative aspect-square flex items-center justify-center p-6 hover:shadow-md transition-shadow"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`${group.clientName} Branding Asset ${idx + 1}`} 
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
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

// Helper to format title nicely
function clientNameFormat(client: string, title: string) {
  return (
    <>
      <span className="text-[#1d1d1f]">{client}</span>
      <span className="text-zinc-400 font-normal"> — {title}</span>
    </>
  );
}
