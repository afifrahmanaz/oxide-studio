"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Tentang() {
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
                        <Link className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-oxide-dark transition-colors duration-300" href="/karya">Karya</Link>
                        <Link className="text-xs font-bold uppercase tracking-widest text-oxide-dark border-b-2 border-oxide-dark pb-1" href="/tentang">Tentang</Link>
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
                        <Link className="text-sm font-bold uppercase tracking-widest text-oxide-dark" href="/tentang">Tentang</Link>
                        <Link className="text-sm font-medium uppercase tracking-widest text-slate-600 hover:text-oxide-dark transition-colors" href="/layanan">Layanan</Link>
                        <a href="https://wa.me/message/D456YXRE63TPJ1" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-oxide-dark border-t border-slate-100 pt-4 mt-2">
                            Hubungi Kami
                        </a>
                    </div>
                )}
            </nav>

            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute right-[-10%] top-[-10%] h-[70vh] w-[70vh] bg-gradient-to-br from-blue-400/30 to-indigo-400/30 blur-[120px] rounded-full opacity-60"></div>
                    <div className="absolute left-[-10%] bottom-[-10%] h-[60vh] w-[60vh] bg-gradient-to-tr from-indigo-300/40 to-blue-300/40 blur-[100px] rounded-full opacity-40"></div>
                    <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px]"></div>
                </div>
                <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                    <div className="flex flex-col gap-10 items-center">
                        <div className="space-y-6 flex flex-col items-center">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-oxide-dark"></span>
                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-oxide-dark">
                                    Profil Agensi
                                </span>
                                <span className="h-px w-8 bg-oxide-dark"></span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] text-slate-900">
                                Tentang <br />
                                <span className="italic text-oxide-dark">OXIDE.</span>
                            </h1>
                        </div>
                        <div className="space-y-6 max-w-3xl mx-auto">
                            <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed">
                                Kami adalah industri digital yang bergerak di bidang pengembangan aplikasi (Fullstack Development) dan desain UI/UX yang memukau. Pengalaman tahun pertama kami bermula saat mengalihkan sistem usaha komersial menjadi perangkat lunak (software) yang mudah digunakan dengan tampilan seni visual yang indah, unik, dan alami.
                            </p>
                            <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed">
                                Kreativitas digital kami difokuskan pada platform seperti website, dengan tujuan utama meningkatkan produktivitas pengguna yang selaras dengan tiga nilai inti kami, yaitu: Dekat, Tumbuh, dan Kreatif.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-oxide-dark mb-6 block">Pandangan Kami</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-10 leading-tight">
                        Filosofi &amp; <span className="italic text-oxide-dark">Visi Kami</span>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-slate-600 leading-loose italic">
                        &quot;Lahir dari sebuah visi bahwa desain yang luar biasa tercipta dari ketulusan dan empati terhadap pengguna. Kami percaya bahwa teknologi bukan sekadar kode, melainkan wujud kepedulian untuk mempermudah hidup manusia. Oleh karena itu, kami berkomitmen mendukung kemajuan di berbagai sektor, mulai dari UMKM, organisasi, hingga bidang politik dan sektor strategis lainnya.&quot;
                    </p>
                    <div className="mt-10 flex justify-center">
                        <div className="h-16 w-px bg-slate-300"></div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl text-slate-900">Mengapa Memilih Kami?</h2>
                        <p className="text-slate-500 max-w-md mx-auto">Pendekatan butik dengan standar korporat global.</p>
                        <div className="h-px w-24 bg-slate-200 mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group relative p-10 bg-white border border-slate-100 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-50"></div>
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 -translate-y-4">
                                <svg className="text-oxide-dark" fill="none" height="120" stroke="currentColor" viewBox="0 0 100 100" width="120">
                                    <circle cx="50" cy="50" r="45" strokeDasharray="4 4" strokeWidth="0.5"></circle>
                                    <circle cx="50" cy="50" r="35" strokeWidth="0.5"></circle>
                                    <circle cx="50" cy="50" r="25" strokeDasharray="2 2" strokeWidth="0.5"></circle>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <div className="size-16 mb-8 flex items-center justify-center bg-white text-oxide-dark shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-500 rounded-2xl group-hover:bg-oxide-dark group-hover:text-white">
                                    <span className="material-symbols-outlined text-3xl">chat</span>
                                </div>
                                <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:text-oxide-dark transition-colors">Direct Communication</h3>
                                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                                    Tanpa perantara. Anda berkomunikasi langsung dengan para ahli yang mengerjakan proyek Anda, memastikan tidak ada distorsi dalam penyampaian visi.
                                </p>
                            </div>
                        </div>
                        <div className="group relative p-10 bg-white border border-slate-100 rounded-3xl shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-bl from-slate-50 to-transparent opacity-50"></div>
                            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-oxide-dark/5 rounded-full blur-3xl group-hover:bg-oxide-dark/10 transition-colors duration-500"></div>
                            <div className="relative z-10">
                                <div className="size-16 mb-8 flex items-center justify-center bg-white text-oxide-dark shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-500 rounded-2xl group-hover:bg-oxide-dark group-hover:text-white">
                                    <span className="material-symbols-outlined text-3xl">layers</span>
                                </div>
                                <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:text-oxide-dark transition-colors">Modern Technology Stack</h3>
                                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                                    Kami memanfaatkan kerangka kerja terkini dan arsitektur modern untuk menjamin performa tinggi, keamanan, dan kemudahan pemeliharaan jangka panjang.
                                </p>
                            </div>
                        </div>
                        <div className="group relative p-10 bg-white border border-slate-100 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-lg rounded-br-lg shadow-soft hover:shadow-float transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-12">
                                <svg className="text-oxide-dark" fill="none" height="100" viewBox="0 0 100 100" width="100">
                                    <rect height="80" stroke="currentColor" strokeWidth="0.5" width="80" x="10" y="10"></rect>
                                    <rect height="60" stroke="currentColor" strokeWidth="0.5" width="60" x="20" y="20"></rect>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <div className="size-16 mb-8 flex items-center justify-center bg-white text-oxide-dark shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-500 rounded-2xl group-hover:bg-oxide-dark group-hover:text-white">
                                    <span className="material-symbols-outlined text-3xl">all_inclusive</span>
                                </div>
                                <h3 className="font-serif text-2xl text-slate-900 mb-4 group-hover:text-oxide-dark transition-colors">End-to-End Solution</h3>
                                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                                    Layanan menyeluruh dari konsep awal, desain, pengembangan, hingga peluncuran. Kami mengawal setiap langkah perjalanan digital produk Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-30"></div>
                <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="mb-24 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Fondasi Kami</span>
                        <h2 className="font-serif text-4xl md:text-6xl mt-4 text-slate-900">Nilai Inti <span className="font-light text-slate-400 text-3xl align-middle mx-2">(Core Values)</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
                        <div className="group relative bg-[#FDFBF7] p-8 pb-12 rounded-[2.5rem] rounded-tr-[1rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-float border border-transparent hover:border-slate-200/50 overflow-hidden h-full flex flex-col justify-between">
                            <div className="absolute top-4 right-4 animate-float-slow opacity-60">
                                <svg fill="none" height="40" stroke="#CBD5E1" strokeWidth="2" viewBox="0 0 50 50" width="40">
                                    <path d="M10 25C10 16.7157 16.7157 10 25 10C33.2843 10 40 16.7157 40 25" strokeLinecap="round"></path>
                                    <circle cx="25" cy="25" fill="#CBD5E1" r="4" stroke="none"></circle>
                                </svg>
                            </div>
                            <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-yellow-100/50 rounded-full blur-xl mix-blend-multiply"></div>
                            <div className="absolute top-1/2 right-[-20px] w-24 h-24 bg-orange-100/40 rounded-full blur-xl mix-blend-multiply"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="size-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 text-slate-800 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl">handshake</span>
                                    </div>
                                    <span className="font-serif text-5xl font-bold text-slate-200 select-none">01</span>
                                </div>
                                <h3 className="font-serif text-3xl text-slate-900 mb-2 relative inline-block">
                                    Dekat
                                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-yellow-200/60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    </svg>
                                </h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">(Rasa Aman)</span>
                                </div>
                                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                    Kami memposisikan diri sebagai mitra terdekat Anda. Transparansi dan integritas adalah kunci untuk menciptakan rasa aman dalam setiap kolaborasi, memastikan Anda selalu merasa didengar.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-1 justify-end">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                                <div className="w-10 h-1.5 rounded-full bg-slate-300"></div>
                            </div>
                        </div>
                        <div className="group relative bg-[#F8FAFC] p-8 pb-12 rounded-[3rem] lg:mt-16 transition-all duration-500 hover:-translate-y-3 hover:shadow-float border border-transparent hover:border-slate-200/50 overflow-hidden h-full flex flex-col justify-between">
                            <div className="absolute inset-0 bg-dot-pattern opacity-50"></div>
                            <div className="absolute top-[-30px] right-[-30px] w-40 h-40 bg-green-50 rounded-full blur-2xl mix-blend-multiply opacity-80"></div>
                            <div className="absolute bottom-10 left-[-10px] animate-float-medium">
                                <svg fill="none" height="60" viewBox="0 0 100 100" width="60">
                                    <path d="M50 80 Q 20 50 50 20 Q 80 50 50 80" fill="none" stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth="1.5"></path>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-slate-800 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl">spa</span>
                                    </div>
                                    <span className="font-serif text-5xl font-bold text-slate-200 select-none">02</span>
                                </div>
                                <h3 className="font-serif text-3xl text-slate-900 mb-2 relative inline-block">
                                    Tumbuh
                                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-green-200/60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    </svg>
                                </h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">(Natural)</span>
                                </div>
                                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                    Solusi digital yang baik harus mampu beradaptasi. Kami merancang sistem yang tumbuh secara natural seiring perkembangan bisnis Anda, fleksibel terhadap perubahan namun tetap kokoh pada akarnya.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center justify-center">
                                <svg height="10" viewBox="0 0 40 10" width="40">
                                    <circle cx="5" cy="5" fill="#cbd5e1" r="2"></circle>
                                    <circle cx="20" cy="5" fill="#cbd5e1" r="2"></circle>
                                    <circle cx="35" cy="5" fill="#cbd5e1" r="2"></circle>
                                </svg>
                            </div>
                        </div>
                        <div className="group relative bg-[#FAFAF9] p-8 pb-12 rounded-[2.5rem] rounded-tl-[1rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-float border border-transparent hover:border-slate-200/50 overflow-hidden h-full flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-200/50 to-purple-200/50"></div>
                            <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 bg-purple-50 rounded-full blur-2xl mix-blend-multiply opacity-70"></div>
                            <div className="absolute top-10 right-4 animate-spin-slow origin-center">
                                <svg fill="none" height="50" viewBox="0 0 50 50" width="50">
                                    <path d="M25 0 L28 22 L50 25 L28 28 L25 50 L22 28 L0 25 L22 22 Z" fill="#E2E8F0" opacity="0.5"></path>
                                </svg>
                            </div>
                            <div className="absolute top-20 left-4 text-slate-200 text-4xl font-serif italic opacity-20 transform -rotate-12">!</div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="size-14 bg-white rounded-t-2xl rounded-b-lg flex items-center justify-center shadow-sm border border-slate-100 text-slate-800 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-2xl">lightbulb</span>
                                    </div>
                                    <span className="font-serif text-5xl font-bold text-slate-200 select-none">03</span>
                                </div>
                                <h3 className="font-serif text-3xl text-slate-900 mb-2 relative inline-block">
                                    Kreatif
                                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-purple-200/60" preserveAspectRatio="none" viewBox="0 0 100 10">
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                    </svg>
                                </h3>
                                <div className="mt-4 mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">(Inspiratif)</span>
                                </div>
                                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                    Kami tidak pernah puas dengan yang &quot;biasa&quot;. Kreativitas adalah bahan bakar kami untuk menghadirkan solusi inspiratif yang tidak hanya menyelesaikan masalah, tetapi juga memukau pengguna.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-1 items-end h-4">
                                <div className="w-1 h-2 bg-slate-300 rounded-t-sm"></div>
                                <div className="w-1 h-3 bg-slate-300 rounded-t-sm"></div>
                                <div className="w-1 h-4 bg-slate-300 rounded-t-sm"></div>
                                <div className="w-1 h-2 bg-slate-300 rounded-t-sm"></div>
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
