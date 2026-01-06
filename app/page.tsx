"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/90 backdrop-blur-xl transition-all duration-500">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="relative size-10 rounded-sm shadow-glow overflow-hidden">
              <Image src="/images/uploaded_image_1.png" alt="Oxide Studio Logo" fill className="object-cover" />
            </div>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase font-sans text-slate-900">Oxide Studio</h2>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <Link className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-dark transition-colors duration-300" href="/karya">Karya</Link>
            <Link className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-dark transition-colors duration-300" href="/tentang">Tentang</Link>
            <Link className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-dark transition-colors duration-300" href="/layanan">Layanan</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center justify-center border border-slate-300 hover:border-oxide-dark text-slate-900 hover:text-oxide-dark px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300">
              Hubungi Kami
            </a>
            <button
              className="md:hidden p-2 text-2xl text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 shadow-lg flex flex-col gap-4 z-40">
            <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-dark transition-colors" href="/karya">Karya</Link>
            <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-dark transition-colors" href="/tentang">Tentang</Link>
            <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-dark transition-colors" href="/layanan">Layanan</Link>
            <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-oxide-dark border-t border-slate-100 pt-4 mt-2">
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] h-[70vh] w-[70vh] bg-gradient-to-br from-blue-400/30 to-indigo-400/30 blur-[120px] rounded-full opacity-60"></div>
          <div className="absolute left-[-10%] bottom-[-10%] h-[60vh] w-[60vh] bg-gradient-to-tr from-indigo-300/40 to-blue-300/40 blur-[100px] rounded-full opacity-40"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(29,78,216,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(29,78,216,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-slate-400"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Sinergi Digital
                </span>
              </div>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium leading-[1] text-slate-900">
                Logika <span className="font-light italic text-slate-400 text-5xl md:text-6xl lg:text-7xl">&amp;</span> <br />
                <span className="text-gradient-grey italic text-slate-700">Estetika.</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl font-light text-slate-600 max-w-lg leading-relaxed border-l border-slate-300 pl-8">
              <span className="font-semibold text-slate-900">OXIDE Studio</span> menghadirkan keseimbangan sempurna antara teknologi yang kokoh dan desain murni. Afif membangun struktur, Putri meniupkan nyawa ke dalamnya.
            </p>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <Link href="/karya" className="group relative px-8 py-4 bg-oxide-dark text-white overflow-hidden transition-all hover:shadow-lg shadow-glow">
                <div className="absolute inset-0 w-0 bg-blue-900 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                  Lihat Karya Pilihan
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-8 justify-center lg:justify-end items-center relative perspective-1000">
            <div tabIndex={0} className="group relative w-full sm:w-72 aspect-[4/5] overflow-hidden bg-white shadow-premium transition-all duration-700 hover:-translate-y-2 border border-slate-200 hover:border-slate-400 focus:border-slate-400 focus:outline-none">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 group-focus:scale-110 grayscale" style={{ backgroundImage: "url('/images/AFIF RAHMAN baru.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 group-focus:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white z-20">
                <div className="translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-blue-300">Direktur Teknologi</p>
                  <h3 className="font-serif text-3xl italic mb-1">Afif Rahman</h3>
                  <div className="h-px w-12 bg-white/30 mt-4 group-hover:w-full group-hover:bg-white group-focus:w-full group-focus:bg-white transition-all duration-700"></div>
                  <p className="mt-4 text-xs font-light text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                    Arsitek sistem yang menerjemahkan kompleksitas menjadi kode yang efisien dan skalabel.
                  </p>
                </div>
              </div>
            </div>
            <div tabIndex={0} className="group relative w-full sm:w-72 aspect-[4/5] overflow-hidden bg-white shadow-premium transition-all duration-700 hover:-translate-y-2 sm:mt-24 border border-slate-200 hover:border-slate-400 focus:border-slate-400 focus:outline-none">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 group-focus:scale-110 grayscale" style={{ backgroundImage: "url('/images/PUTRI.jpg')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 group-focus:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white z-20">
                <div className="translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-blue-300">Direktur Kreatif</p>
                  <h3 className="font-serif text-3xl italic mb-1">Putri Maharani</h3>
                  <div className="h-px w-12 bg-white/30 mt-4 group-hover:w-full group-hover:bg-white group-focus:w-full group-focus:bg-white transition-all duration-700"></div>
                  <p className="mt-4 text-xs font-light text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                    Penata visual yang mengubah konsep abstrak menjadi pengalaman pengguna yang imersif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-end">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Kompetensi Utama</h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                Kami memberikan rangkaian layanan digital yang komprehensif. Dari baris kode pertama hingga piksel terakhir, presisi adalah standar kami.
              </p>
            </div>
            <div className="lg:col-span-7 flex pb-2 border-b border-slate-300">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-auto">Keahlian Kami</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 border border-slate-200 hover:border-slate-400 transition-all duration-500 hover:shadow-lg">
              <div className="size-12 mb-8 flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm group-hover:bg-oxide-dark group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors text-xl">code</span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">Arsitektur Web</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                Mengembangkan aplikasi web yang skalabel dan berkinerja tinggi menggunakan kerangka kerja modern serta logika backend yang kuat.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-oxide-dark rounded-full transition-colors"></span> React / Next.js
                  </li>
                  <li className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-oxide-dark rounded-full transition-colors"></span> Python / Node
                  </li>
                </ul>
              </div>
            </div>
            <div className="group bg-white p-8 border border-slate-200 hover:border-slate-400 transition-all duration-500 hover:shadow-lg">
              <div className="size-12 mb-8 flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm group-hover:bg-oxide-dark group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors text-xl">palette</span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">Sistem Visual</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                Menciptakan identitas merek yang kohesif dan antarmuka pengguna yang mengomunikasikan nilai melalui presisi estetika.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-oxide-dark rounded-full transition-colors"></span> Desain UI/UX
                  </li>
                  <li className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-oxide-dark rounded-full transition-colors"></span> Strategi Branding
                  </li>
                </ul>
              </div>
            </div>
            <div className="group bg-white p-8 border border-slate-200 hover:border-slate-400 transition-all duration-500 hover:shadow-lg">
              <div className="size-12 mb-8 flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm group-hover:bg-oxide-dark group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors text-xl">auto_graph</span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">Strategi Produk</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                Menyelaraskan tujuan bisnis dengan kebutuhan pengguna untuk membangun produk digital yang tidak hanya fungsional, tetapi esensial.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-oxide-dark rounded-full transition-colors"></span> Analisis Pasar
                  </li>
                  <li className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-800 transition-colors">
                    <span className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-oxide-dark rounded-full transition-colors"></span> Roadmap Skala
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Kemitraan</span>
            <h2 className="font-serif text-4xl mt-4 text-slate-900">Kekuatan Saling Melengkapi</h2>
          </div>
          <div className="space-y-0">
            <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-t border-slate-200 hover:bg-slate-50 transition-colors cursor-default px-4 -mx-4 rounded-sm">
              <div className="flex items-baseline gap-8 md:w-1/3">
                <span className="text-xs font-mono text-slate-400 group-hover:text-black transition-colors">01</span>
                <h3 className="text-3xl font-serif text-slate-900 group-hover:translate-x-4 transition-transform duration-500">Afif Rahman</h3>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Fullstack Developer</p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/3 text-right hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-4 group-hover:translate-x-0">
                <span className="text-lg font-serif italic text-slate-600 hidden md:block">"Arsitektur adalah musik yang membeku."</span>
              </div>
            </div>
            <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-t border-b border-slate-200 hover:bg-slate-50 transition-colors cursor-default px-4 -mx-4 rounded-sm">
              <div className="flex items-baseline gap-8 md:w-1/3">
                <span className="text-xs font-mono text-slate-400 group-hover:text-black transition-colors">02</span>
                <h3 className="text-3xl font-serif text-slate-900 group-hover:translate-x-4 transition-transform duration-500">Putri Maharani Siregar</h3>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Designer UI/UX</p>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/3 text-right hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-4 group-hover:translate-x-0">
                <span className="text-lg font-serif italic text-slate-600 hidden md:block">"Kesederhanaan adalah puncak kecanggihan."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-oxide-dark text-white pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative size-8 rounded-sm overflow-hidden">
                  <Image src="/images/uploaded_image_1.png" alt="Oxide Studio Logo" fill className="object-cover" />
                </div>
                <span className="text-sm font-semibold tracking-[0.2em] uppercase">Oxide Studio</span>
              </div>
              <p className="text-blue-100 font-light max-w-sm leading-relaxed text-sm">
                Partner kreatif untuk visi digital Anda. Kami memadukan teknologi robust dan desain estetik untuk dampak maksimal.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">Menu</h4>
              <ul className="space-y-4">
                <li><Link className="text-sm text-white hover:text-blue-200 transition-colors" href="/karya">Karya Pilihan</Link></li>
                <li><Link className="text-sm text-white hover:text-blue-200 transition-colors" href="/tentang">Tentang Kami</Link></li>
                <li><Link className="text-sm text-white hover:text-blue-200 transition-colors" href="/layanan">Layanan</Link></li>
                <li><a className="text-sm text-white hover:text-blue-200 transition-colors" href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">Sosial</h4>
              <ul className="space-y-4">
                <li><a className="text-sm text-white hover:text-blue-200 transition-colors" href="https://www.instagram.com/oxidestudio.id?igsh=cDB6MTF6YzBpNmph" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="text-sm text-white hover:text-blue-200 transition-colors" href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-blue-200 uppercase tracking-widest">© 2025 Oxide Studio. Pangkalpinang, Indonesia.</p>
            <div className="flex gap-6">
              <a className="text-[10px] text-blue-200 hover:text-white uppercase tracking-widest transition-colors" href="#">Privacy Policy</a>
              <a className="text-[10px] text-blue-200 hover:text-white uppercase tracking-widest transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
