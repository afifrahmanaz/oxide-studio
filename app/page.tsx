"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { categories } from "./data/services";

const testimonials = [
  { text: '"Hasil akhirnya sangat profesional dan rapi. Penjualan kami meroket setelah proses rebranding dengan OXIDE."', author: 'CEO One Hundred Honey' },
  { text: '"Timnya sangat responsif dan eksekusinya benar-benar memuaskan. Identitas visual kami jadi sangat kuat."', author: 'Founder Maimon' },
  { text: '"Desainnya sangat elegan dan modern. Proses kerjanya sangat terstruktur dan cepat tanpa mengurangi kualitas."', author: 'Direktur Taman Lansia' },
  { text: '"Infrastruktur web yang dibangun OXIDE sangat solid. Kinerja platform kami meningkat drastis dan stabil."', author: 'Founder RetailTech' },
  { text: '"Mereka tidak sekadar membuat desain, tapi benar-benar memikirkan konversi dan bisnisnya. Agensi yang luar biasa."', author: 'CMO Group ID' },
];

export default function Home() {
  return (
    <div className="bg-[#fbfbfd] min-h-screen text-zinc-900 font-sans selection:bg-blue-500/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-52 md:pb-32 text-center relative overflow-hidden">
        {/* Very subtle background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50 to-transparent blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="inline-block mb-4 md:mb-6">
            <span className="font-semibold text-xs md:text-sm tracking-widest text-zinc-400 uppercase">
              ONE STOP SOLUTION
            </span>
          </div>

          <h1 className="text-3xl md:text-7xl lg:text-[88px] font-bold tracking-tighter leading-[1.05] mb-5 md:mb-8 text-[#1d1d1f]">
            Transformasi Digital <br />
            Kembangkan Bisnis
          </h1>
          <p className="text-sm md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto tracking-tight mb-8 md:mb-12 px-4">
            OXIDE Studio hadir sebagai mitra strategis untuk mempercepat transformasi digital dan memaksimalkan skala bisnis perusahaan Anda secara komprehensif.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 px-4">
            <Link
              href="/services"
              className="bg-black text-white px-5 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.1)] w-full sm:w-auto"
            >
              Lihat Layanan
            </Link>
            <a
              href="https://wa.me/message/D456YXRE63TPJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black px-5 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg hover:bg-zinc-200/50 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Konsultasi Gratis <span className="material-symbols-outlined text-[16px] md:text-[20px]">chevron_right</span>
            </a>
          </div>
        </div>
      </section>



      {/* Infinite Testimonial Marquee */}
      <section className="py-12 md:py-24 bg-white overflow-hidden flex flex-col gap-4 md:gap-8">
        <div className="text-center px-6">
          <h2 className="text-2xl md:text-5xl font-bold tracking-tighter mb-2 md:mb-4 text-[#1d1d1f]">
            Apa Kata Mereka.
          </h2>
          <p className="text-sm md:text-lg text-zinc-500 font-medium max-w-xs md:max-w-sm mx-auto">
            Testimoni jujur dari para klien yang telah bertumbuh bersama kami.
          </p>
        </div>

        <div className="relative flex overflow-hidden group mt-10">
          <div 
            className="flex gap-6 md:gap-24 pr-6 md:pr-24 w-max group-hover:[animation-play-state:paused]"
            style={{ animation: 'customMarquee 90s linear infinite' }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <div key={idx} className="w-[240px] md:w-[400px] h-[300px] md:h-[450px] shrink-0 rounded-[1.5rem] md:rounded-[2.5rem] relative border border-zinc-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-zinc-50 flex flex-col p-6 md:p-10 transition-transform duration-300 hover:scale-[1.02] whitespace-normal">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                
                <span className="material-symbols-outlined text-6xl text-zinc-200 mb-6 absolute top-10 right-8">format_quote</span>
                
                <p className="text-lg md:text-xl font-medium text-zinc-700 leading-relaxed relative z-10 flex-1">
                  {item.text}
                </p>
                
                <div className="mt-auto pt-6 border-t border-zinc-200/60">
                  <p className="text-sm font-bold text-[#1d1d1f] uppercase tracking-widest">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate track for seamless infinite scroll */}
          <div 
            className="flex gap-6 md:gap-24 pr-6 md:pr-24 w-max group-hover:[animation-play-state:paused]"
            style={{ animation: 'customMarquee 90s linear infinite' }}
            aria-hidden="true"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <div key={`dup-${idx}`} className="w-[240px] md:w-[400px] h-[300px] md:h-[450px] shrink-0 rounded-[1.5rem] md:rounded-[2.5rem] relative border border-zinc-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-zinc-50 flex flex-col p-6 md:p-10 transition-transform duration-300 hover:scale-[1.02] whitespace-normal">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-yellow-400 text-xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                
                <span className="material-symbols-outlined text-4xl md:text-6xl text-zinc-200 mb-2 md:mb-6 absolute top-6 md:top-10 right-6 md:right-8">format_quote</span>
                
                <p className="text-sm md:text-xl font-medium text-zinc-700 leading-relaxed relative z-10 flex-1">
                  {item.text}
                </p>
                
                <div className="mt-auto pt-4 md:pt-6 border-t border-zinc-200/60">
                  <p className="text-xs md:text-sm font-bold text-[#1d1d1f] uppercase tracking-widest">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Box Services */}
      <section className="py-16 md:py-32 bg-[#fbfbfd]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-6xl font-bold tracking-tighter mb-3 md:mb-6">
              Keahlian Inti Kami.
            </h2>
            <p className="text-sm md:text-xl text-zinc-500 font-medium max-w-2xl mx-auto">
              Infrastruktur bisnis yang esensial, dikemas dalam layanan premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/services?category=${cat.slug}`}
                className={`group bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col ${
                  idx < 2 ? "md:col-span-1 lg:col-span-3" : "md:col-span-1 lg:col-span-2"
                }`}
              >
                <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-2 md:mb-4 text-[#1d1d1f] group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm md:text-lg text-[#86868b] font-medium mb-6 md:mb-12 max-w-md">
                  {cat.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-semibold text-xs md:text-sm text-[#1d1d1f]">Lihat detail paket</span>
                  <span className="size-8 md:size-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[16px] md:text-[20px] text-[#1d1d1f] group-hover:text-white transition-colors">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Simple Big CTA */}
      <section className="py-16 md:py-40 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-10">
            Mulai Proyek Anda Hari Ini.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 px-4">
            <a
              href="https://wa.me/message/D456YXRE63TPJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-base md:text-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/20 w-full sm:w-auto"
            >
              Hubungi Spesialis Kami
            </a>
          </div>
        </div>
      </section>

      {/* Official Registration Banner */}
      <section className="py-10 md:py-20 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-lg md:text-3xl font-bold tracking-tight mb-6 md:mb-12 text-[#1d1d1f]">
            Resmi Terdaftar Di
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 transition-opacity duration-500">
            {/* AHU */}
            <img src="/resmiterdaftar/Logo%20Ahu.jpg" alt="AHU" className="h-6 md:h-20 object-contain mix-blend-multiply" />
            
            {/* OSS */}
            <img src="/resmiterdaftar/oss-id.png" alt="OSS" className="h-6 md:h-20 object-contain mix-blend-multiply" />
            
            {/* DJP */}
            <img src="/resmiterdaftar/Direktoran%20Jenderal%20Pajak%20(DJP)%20Secondary%20Logo.png" alt="DJP" className="h-6 md:h-20 object-contain mix-blend-multiply" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
