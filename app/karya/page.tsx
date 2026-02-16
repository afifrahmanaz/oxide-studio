"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Karya() {
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
                        <Link className="text-xs font-bold uppercase tracking-widest text-oxide-deep border-b-2 border-oxide-deep pb-1" href="/karya">Karya</Link>
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
                        <Link className="text-sm font-medium uppercase tracking-widest text-oxide-deep font-bold" href="/karya">Karya</Link>
                        <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-dark transition-colors" href="/tentang">Tentang</Link>
                        <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-dark transition-colors" href="/layanan">Layanan</Link>
                        <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-oxide-deep border-t border-slate-100 pt-4 mt-2">
                            Hubungi Kami
                        </a>
                    </div>
                )}
            </nav>

            <section className="relative pt-40 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute right-[-10%] top-[-10%] h-[50vh] w-[50vh] bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-[100px] rounded-full opacity-60"></div>
                    <div className="absolute left-[-10%] bottom-[-10%] h-[40vh] w-[40vh] bg-gradient-to-tr from-indigo-300/30 to-blue-300/30 blur-[80px] rounded-full opacity-40"></div>
                </div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <div className="flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-oxide-deep"></span>
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-oxide-deep">
                                Portofolio Terpilih
                            </span>
                            <span className="h-px w-8 bg-oxide-deep"></span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1] text-slate-900">
                            Eksplorasi <span className="italic text-slate-400">Logika</span> &amp; <span className="italic text-slate-400">Rasa</span>
                        </h1>
                        <p className="text-slate-600 text-lg font-light leading-relaxed">
                            Kumpulan proyek yang mendefinisikan standar kualitas kami. Dari situs web korporat yang presisi hingga eksperimen digital yang menyenangkan.
                        </p>
                    </div>
                    <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8 border-b border-slate-200 pb-6">
                        <a className="text-xs font-bold uppercase tracking-widest text-oxide-deep border-b-2 border-oxide-deep pb-6 -mb-6.5" href="#">Semua</a>
                        <a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-deep transition-colors" href="#">Website Profesional</a>
                        <a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-deep transition-colors" href="#">Website Fun</a>
                        <a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-deep transition-colors" href="#">Chatbot AI</a>
                        <a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-deep transition-colors" href="#">Produk Digital</a>
                    </div>
                </div>
            </section>

            <section className="pb-32 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* OneHundred Honey */}
                        <a href="https://www.onehundredhoney.com" target="_blank" rel="noopener noreferrer" className="group relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image src="/website/ONEHUNDRED.png" alt="OneHundred Honey" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">E-Commerce</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">OneHundred Honey</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                                        Platform penjualan madu premium dengan desain modern dan elegan.
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* Salad Sayur Bell */}
                        <a href="https://salad-sayur-new.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image src="/website/SALAD SAYUR BELL.png" alt="Salad Sayur Bell" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">F&B Business</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Salad Sayur Bell</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                                        Website bisnis salad dan jus dengan desain fresh dan interaktif.
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* Taman Lansia */}
                        <a href="https://taman-ramah-lansia.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image src="/website/TAMAN LANSIA.png" alt="Taman Ramah Lansia" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Social Project</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Taman Ramah Lansia</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                                        Website program sosial dengan desain yang hangat dan accessible.
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* Anjayo Residence */}
                        <a href="https://anjayoresidence.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image src="/website/anjayo.jpg" alt="Anjayo Residence" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Real Estate</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Anjayo Residence</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                                        Website properti mewah untuk perumahan eksklusif dengan desain elegant.
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* Portfolio Putri */}
                        <a href="https://putrimaharani.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image src="/website/Portfolio.jpg" alt="Portfolio Putri Maharani" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Portfolio</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Putri Maharani</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                                        Portfolio personal UI/UX Designer dengan desain clean dan profesional.
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* SMP Negeri 2 Pangkalpinang */}
                        <a href="https://smpn2-pkp.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative aspect-video w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image src="/website/image.png" alt="SMP Negeri 2 Pangkalpinang" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">School Profile</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">SMP Negeri 2 Pangkalpinang</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed">
                                        Website resmi sekolah dengan fitur interaktif dan informasi lengkap untuk siswa dan orang tua.
                                    </p>
                                </div>
                            </div>
                        </a>

                        <div className="group relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 cursor-default shadow-sm transition-all duration-500 flex items-center justify-center">
                            <div className="text-center p-8">
                                <span className="material-symbols-outlined text-5xl text-slate-400 mb-4 block">schedule</span>
                                <h3 className="font-serif text-xl text-slate-600 italic mb-2">Coming Soon</h3>
                                <p className="text-xs text-slate-500 font-light">Project baru segera hadir</p>
                            </div>
                        </div>

                        <div className="group relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 cursor-default shadow-sm transition-all duration-500 flex items-center justify-center">
                            <div className="text-center p-8">
                                <span className="material-symbols-outlined text-5xl text-slate-400 mb-4 block">schedule</span>
                                <h3 className="font-serif text-xl text-slate-600 italic mb-2">Coming Soon</h3>
                                <p className="text-xs text-slate-500 font-light">Project baru segera hadir</p>
                            </div>
                        </div>

                        <div className="group relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 cursor-default shadow-sm transition-all duration-500 flex items-center justify-center">
                            <div className="text-center p-8">
                                <span className="material-symbols-outlined text-5xl text-slate-400 mb-4 block">schedule</span>
                                <h3 className="font-serif text-xl text-slate-600 italic mb-2">Coming Soon</h3>
                                <p className="text-xs text-slate-500 font-light">Project baru segera hadir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-5xl text-oxide-deep mb-6">handshake</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Punya Visi Serupa?</h2>
                    <p className="text-slate-500 font-light leading-relaxed text-lg max-w-2xl mb-10">
                        Setiap proyek di atas dimulai dengan percakapan sederhana. Mari diskusikan bagaimana kami bisa menerjemahkan ide Anda menjadi realitas digital.
                    </p>
                    <a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-oxide-deep border-b border-oxide-deep pb-1 hover:text-oxide-black hover:border-oxide-black transition-all" href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer">
                        Mulai Konsultasi Gratis
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
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
