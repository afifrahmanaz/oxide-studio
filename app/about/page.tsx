"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-[#fbfbfd] min-h-screen text-zinc-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50 to-transparent blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="inline-block mb-6">
            <span className="font-semibold text-sm tracking-widest text-zinc-400 uppercase">
              TENTANG KAMI
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1.1] mb-8 md:mb-12 text-[#1d1d1f] text-center text-balance max-w-5xl mx-auto">
            Merancang Masa Depan Mengeksekusi Visi
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#86868b] max-w-2xl mx-auto tracking-tight">
            OXIDE Studio lahir dari sebuah gagasan sederhana: transformasi digital dan pertumbuhan bisnis skala besar tidak seharusnya rumit. Kami adalah ekosistem eksekusi tunggal Anda.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6 text-[#1d1d1f]">
                Satu Pintu untuk Seluruh Solusi Bisnis Anda.
              </h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Di era di mana kecepatan adalah segalanya, perusahaan seringkali membuang banyak waktu untuk mencari puluhan vendor berbeda—satu untuk legalitas, satu untuk website, dan satu lagi untuk pemasaran.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                OXIDE Studio memecahkan masalah tersebut. Kami mengurasi spesialis terbaik di setiap bidang dan membungkusnya dalam satu layanan komprehensif. Mulai dari membangun identitas merek, infrastruktur teknologi, hingga strategi pemasaran, kami mengeksekusinya secara profesional dan terukur.
              </p>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden h-full min-h-[400px]">
              <Image 
                src="/images/office_background.png" 
                alt="Corporate Office" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 bg-[#fbfbfd]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-[#1d1d1f]">
              Sosok di Balik OXIDE.
            </h2>
            <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">
              Didirikan oleh praktisi yang memadukan keahlian teknologi dan strategi pemasaran digital secara holistik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Founder 1: Afif Rahman */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col">
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-6">
                  <div className="size-20 md:size-24 rounded-full bg-zinc-200 shrink-0 overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <Image src="/images/AFIF RAHMAN baru.jpg" alt="Afif Rahman" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                      Afif Rahman
                    </h3>
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">
                      Founder
                    </p>
                  </div>
                </div>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  Praktisi pemasaran digital dengan spesialisasi pada <em>Performance Marketing</em> dan optimisasi kampanye berbasis data. Berfokus pada strategi akuisisi pelanggan untuk mendorong tingkat konversi (ROI) dan pertumbuhan bisnis secara berkelanjutan.
                </p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-zinc-100">
                <p className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-6">Sertifikasi & Pencapaian</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Business Management Expert</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Marketing Institute Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Marketing Expert</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Marketing Institute Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">AI Professional</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Marketing Institute Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">AI Learning</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">ASEAN Foundation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Apple Search Ads</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Apple</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">TikTok Shop Ads</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">TikTok</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Content Marketing</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">HubSpot Academy</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Google Analytics</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2: Putri Maharani */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col">
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-6">
                  <div className="size-20 md:size-24 rounded-full bg-zinc-200 shrink-0 overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <Image src="/images/PUTRI.jpg" alt="Putri Maharani Siregar" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                      Putri Maharani Siregar, S.S.
                    </h3>
                    <p className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">
                      Co-Founder
                    </p>
                  </div>
                </div>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  Penggerak strategi pemasaran dan pengalaman pengguna. Memadukan keahlian komunikasi merek (<em>Copywriting</em>) dengan desain produk (<em>UI/UX</em>) dan <em>Product Management</em> untuk menciptakan solusi digital yang fungsional dan memikat audiens.
                </p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-zinc-100">
                <p className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-6">Sertifikasi & Latar Belakang</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">UI/UX Design & Product Management</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Harisenin</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">school</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Sastra Inggris</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Universitas Bangka Belitung</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">English Communication</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Keahlian</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-500 text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-800 font-bold text-sm leading-tight">Copywriting & Brand Communication</span>
                      <span className="text-zinc-500 font-medium text-xs mt-1">Keahlian</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
