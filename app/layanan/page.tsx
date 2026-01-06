"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Layanan() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/90 backdrop-blur-xl transition-all duration-500">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="relative size-10 rounded-sm shadow-glow overflow-hidden">
                                <Image src="/images/uploaded_image_1.png" alt="Oxide Studio Logo" fill className="object-cover" />
                            </div>
                            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase font-sans text-slate-900">Oxide Studio</h2>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-12">
                        <Link className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-royal transition-colors duration-300" href="/karya">Karya</Link>
                        <Link className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-royal transition-colors duration-300" href="/tentang">Tentang</Link>
                        <Link className="text-xs font-medium uppercase tracking-widest text-oxide-royal font-bold border-b-2 border-oxide-royal pb-1" href="/layanan">Layanan</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center justify-center border border-slate-300 hover:border-oxide-royal text-slate-900 hover:text-oxide-royal px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300">
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
                        <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-royal transition-colors" href="/karya">Karya</Link>
                        <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-royal transition-colors" href="/tentang">Tentang</Link>
                        <Link className="text-sm font-medium uppercase tracking-widest text-oxide-royal font-bold" href="/layanan">Layanan</Link>
                        <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-oxide-royal border-t border-slate-100 pt-4 mt-2">
                            Hubungi Kami
                        </a>
                    </div>
                )}
            </nav>



            <section className="pt-32 pb-20 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <span className="inline-block py-1 px-3 border border-oxide-royal/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-oxide-royal bg-white">
                            Layanan Kami
                        </span>
                    </div>

                    <div className="group py-12 border-b border-slate-200">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-8">
                            <span className="text-sm font-mono text-oxide-royal font-bold">01</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-slate-900">Pembuatan Website (Basic)</h3>
                        </div>
                        <div className="grid lg:grid-cols-12 gap-10">
                            <div className="lg:col-span-8">
                                <p className="text-slate-600 leading-relaxed font-light mb-10 text-base md:text-lg">
                                    Fondasi Digital yang kuat untuk bisnis modern. Afif memimpin arsitektur sistem yang stabil, aman, dan berkinerja tinggi. Kami menggunakan teknologi terkini untuk memastikan aplikasi Anda siap menghadapi pertumbuhan masa depan.
                                </p>
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">layers</span> Fitur Unggulan
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Web Application (React/Next.js)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Design UI/UX Basic</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>API Integration &amp; Robust Backend System</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Social Media Integration (IG, WA, TikTok)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>E-Commerce Link Integration<br />(Shopee & Tokopedia)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>FREE Domain (1 Tahun)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700 col-span-1 md:col-span-2">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Konsultasi Eksklusif dengan Fullstack Developer</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col justify-end">
                                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl shadow-slate-200/50 h-full flex flex-col justify-between relative overflow-hidden group-hover:border-oxide-royal/30 transition-colors duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                                    <div>
                                        <span className="inline-block py-1 px-3 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                                            Basic Package
                                        </span>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-sm font-medium text-slate-500">Rp</span>
                                            <span className="text-4xl font-serif font-bold text-slate-900">2.500.000</span>
                                        </div>
                                        <p className="text-xs text-slate-500 italic mb-8">Solusi tepat untuk memulai.</p>
                                    </div>
                                    <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="w-full py-4 flex items-center justify-center gap-3 border border-slate-200 hover:border-oxide-royal hover:bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg group/btn">
                                        Pilih Paket
                                        <span className="material-symbols-outlined text-sm text-oxide-royal group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group py-12 border-b border-slate-200">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-8">
                            <span className="text-sm font-mono text-oxide-royal font-bold">02</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-slate-900">Website + Desain UI/UX Advance (Premium)</h3>
                        </div>
                        <div className="grid lg:grid-cols-12 gap-10">
                            <div className="lg:col-span-8">
                                <p className="text-slate-600 leading-relaxed font-light mb-10 text-base md:text-lg">
                                    Transformasi pengalaman digital melalui sentuhan desain eksklusif dari Putri (UI/UX Designer). Layanan premium ini menggabungkan kekuatan teknis dengan estetika tinggi dan interaksi yang intuitif. Kami menciptakan aplikasi yang tidak hanya berfungsi sempurna secara kode, tapi juga memanjakan mata dan memberikan kenyamanan maksimal bagi pengguna Anda.
                                </p>
                                <div className="bg-oxide-royal/5 rounded-2xl p-6 border border-oxide-royal/10">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-oxide-royal mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">diamond</span> Fitur Premium
                                    </h4>
                                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Web Application (React/Next.js)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Design UI/UX Advance</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>API Integration &amp; Backend</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Bonus Chatbot AI</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Social Media Integration<br />(IG, WA, TikTok)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>E-Commerce Link Integration<br />(Shopee & Tokopedia)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Free Domain (1 Tahun)</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Free Maintenance 4 Bulan Sekali</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Bebas Update Fitur</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Analisis Visitor Website</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-slate-700 col-span-1 md:col-span-2">
                                            <span className="material-symbols-outlined text-oxide-royal text-[20px] shrink-0">check_circle</span>
                                            <span>Konsultasi Langsung dengan Tim</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col justify-end">
                                <div className="bg-oxide-royal text-white border border-oxide-royal rounded-2xl p-8 shadow-xl shadow-oxide-royal/30 h-full flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="inline-block py-1 px-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                Most Popular
                                            </span>
                                            <span className="material-symbols-outlined text-yellow-300">star</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-sm font-medium text-blue-200">Rp</span>
                                            <span className="text-4xl font-serif font-bold text-white">4.500.000</span>
                                        </div>
                                        <p className="text-xs text-blue-100 italic mb-8">Investasi terbaik untuk jangka panjang.</p>
                                    </div>
                                    <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="relative z-10 w-full py-4 flex items-center justify-center gap-3 bg-white text-oxide-royal hover:bg-blue-50 transition-all duration-300 rounded-lg shadow-lg text-xs font-bold uppercase tracking-widest group/btn">
                                        Pilih Premium
                                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-slate-50 border border-slate-100 rounded-xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-oxide-royal/10 rounded-full blur-3xl pointer-events-none"></div>
                        <h3 className="relative z-10 font-serif text-3xl md:text-4xl text-slate-900 mb-6">Mau lihat produk-produk digital kami?</h3>
                        <Link href="/karya" className="relative z-10 inline-flex items-center gap-2 px-8 py-3 bg-white text-oxide-royal border border-slate-200 hover:border-oxide-royal text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-lg transition-all duration-300">
                            Lihat Katalog
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white border border-slate-200 p-10 md:p-16 shadow-premium relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-oxide-royal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Siap untuk memulai?</h2>
                            <p className="text-slate-600 mb-10 max-w-lg mx-auto font-light">
                                Ceritakan ide Anda kepada kami. Baik itu sebuah konsep kasar atau spesifikasi detail, kami siap mendengarkan.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-oxide-royal text-white hover:bg-oxide-dark transition-all duration-300 shadow-lg hover:shadow-glow text-xs font-bold uppercase tracking-widest text-center">
                                    Konsultasi Sekarang
                                </a>
                                <a className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-oxide-royal transition-colors border-b border-transparent hover:border-oxide-royal" href="mailto:project@oxidestudio.com">
                                    project@oxidestudio.com
                                </a>
                            </div>
                            <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
                                <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500">
                                    <span className="material-symbols-outlined text-sm">schedule</span> Balasan &lt; 24 Jam
                                </span>
                                <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500">
                                    <span className="material-symbols-outlined text-sm">videocam</span> Via Zoom / GMeet
                                </span>
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
