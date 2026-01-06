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
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Corporate Architecture" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWD2mi3g-0HA3Xubcn2VtdemuX7F5mpPgG7jaeIe6sgnuTnPFtt-e5yf7NbdxkhGE8NHaZ48UZa5W9Wu4nfm_kK6rArE1w1MccYzhBpe6tpScl1KwCL2buVlvya2rChA0I2O0jCi8XjuBGvpguuhb3Cx6ObtgyHv5THl0fZUi2WX-_rg1FctyfaOix5GcUDFOdx7QT_3NdzCaQX9tcT2zLIBC1iBPyxXNM-MTbIOFKuP5zEfoKKUi3PY7mmYPfH9qN2_Wi-lOxFD0" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Website Profesional</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Arkana Finance</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Platform manajemen aset korporat dengan visualisasi data real-time dan keamanan tingkat bank.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Portrait" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp-yNb6N8lAO4HNhL7hFjTIgOMrE8bWN0nTeqvzqYH9EgXaNmOZxCrQZntGbCgIbWK8gIfhQMJRDXM8gAeHUp0BurQ6iSz0AKZHyEA5JDgECZ5KZNDrjCtSgxdn1RkMAKThRy_5US3vofYG1v8HTvPQNRCYvLdaoJzzj7GWdgFYfnf6NcHe8moXl5eFcXV_JQq5j8PIkSfwPdXmVZIZy0K0GfeCzI3x_nu0fLqM_hDTKOhNE6KDvdIC91pt1P5wBMaOFwH3CYJwS4" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Website Biografi</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Dr. Suryo Wibowo</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Personal branding digital untuk pakar neurologi terkemuka dengan pendekatan editorial yang elegan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Retro Gaming" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASOZpeVBX6yaW5pTWw_qJMyIjBzlzmrWqHDO1RnSfXutb47JoMI4QlZ2qjJ6YAdI2t__1Kun1VQ4IH4t3RKk7JxI1vJNArpDFhMV75H0WGYuKnuZp4_-gC-ry50RCAUEo5BAKycM7loktJXNKR6j2BPFKCDyX0udu4T0kU_7CTnOWNin9_fs5aAFmdMiydYs7L6dJ8M-IP67KjJPTLwe0GelfIvpy9SZzGC8CGD7U1AFtGIen-RUb7aEO5GbiaNJqWhxAMDg61oU8" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Website Fun</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Pixel Arcade</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Portal komunitas retro gaming dengan interaksi 8-bit yang imersif dan penuh warna.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] md:col-span-2 md:aspect-[21/9] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="AI Interface" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9KQaUxhKISxHLURRuPp2dwbcga-PyN-PEHbVZ_oU6aVJMs0x6ih6MYPzIIDF9v3eTxWZmgP8t9zeMTsjEkbQuI3UsEZE6s5VYUywycxq3wRcvl4ptLPEWtg8wr-ap6x4uTVLcqzhLwxeWbdUcjNHWl1AP_aRwM8K1Am2HhXDoiOugOJkGtaz8s-515RMPpAfPdniM2MGqtKrWdhx8oLrIEYMbysVtr-S1gSS4n1mbMyWPP0A9AdLYCY9c9ybX5ZqT4g7iUjNIW0" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-12">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Chatbot AI</span>
                                    <h3 className="font-serif text-4xl text-white italic mb-2">Sentra Pelayanan Cerdas</h3>
                                    <p className="text-sm text-blue-100 font-light leading-relaxed max-w-lg">
                                        Asisten virtual berbasis NLP untuk layanan publik pemerintah daerah. Mengurangi waktu tunggu antrean hingga 70% dengan antarmuka percakapan yang natural.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Dashboard UI" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7P1cPX0oR0uurJ62aSEHtZmqDcZ2bxB488_tmAiJqwr-yUfC77tYwdsBmqoIwnDZ4Qbft-n5wSs6sEvHb-FBG8XILv0kcUJvipRPQkTln6rHTkGzinvhrPFL1WRE9hGZX_HHXRrlRXKmuRrMU1J7WUbYulhbHuRm_-ge_YhjbuRhfXxwIxilliyx7oOltEE0bKbOg3sObXdQ1JRifDqshWRCv8o4XNKDLdZaohYMCt2A5kBMGJsJNoy8Uo-JXr1dD2-oa1kYJuuQ" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Produk Digital</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Oxide UI Kit</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Sistem desain komprehensif untuk pengembang React, mempercepat alur kerja prototyping.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Modern Office" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0kMjUWjhg0MGACwfZoROo_6zuG-Q9SiutkFGRorCn5j0XC64b6dvZk9ihMUpoj3iSQWf9mXJQVhUGcOzXX3znHTkMWNYqFB4dszTNm5Ya3bKh9A3rR4pulpsnSCEhyobOGlIunQJ_KJqLqhOmqNjbjM9rOju6R1RU1PVe8Q7tnfrP2Z1Vow6mjXOuc_9irAilxLx3V4kYRIncZkBhHqegK3KdISfeN39RDplXp7inazTSnhAnVYaz-IFXNBxljl5l_XUacMvfC9U" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Website Profesional</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Urban Living</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Situs properti mewah dengan tur virtual 360 derajat dan integrasi booking viewing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Concert" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD5UFNMlOuIt_gJp29wV0xlGeVr1ejK3aixRiSU28TfURvokIXok4JWwaudxp6S7BpugU_1RvedIiS77hsrrAnyVk4cxhZ_zsJpr_qjQEzfCQjcoF8SrXxrmwspKU49DCB8o__KhSqy5OLr9yavk0uQ-1zDXXEOKCABSmx9zDeJF4uvigMLWlwC9Ugi7UUako80LDgtg-xVbrq_mwsTP755dlaU9QUhl8sGbQzwO9_QJtkYotUOodJ7PhIBp4-jiZIdqKp8qviFOI" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Website Fun</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">SoundFest JKT</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Landing page festival musik interaktif dengan animasi scroll-driven yang dinamis.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                            <img alt="Artist" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJmJI-VyI9zUNaCg0p8Z8kgdjxXy1CegD-84goPIyB_abh5xWZBL25OWdVKl0eGnZKUDxcP5jTPL2eQWRspp7IujgdekDklIp4G2zF9kHCbQA7y4TglxyAoG0CaTGd6yN7vjCi3eKThMD3dbg2EFksngwgIlBTHKXi-8mJ6DrqVkXOXyDDejDGeA9vYQywjW1GGTrS4cpBC9rHlvrxfucyLE9cdrKGHallg_yE7JOLFEZ9c5BHOY0ln8y0WNvJUruVOTz5op0CMWk" />
                            <div className="absolute inset-0 bg-oxide-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white rounded-sm backdrop-blur-md">Website Biografi</span>
                                    <h3 className="font-serif text-3xl text-white italic mb-2">Mahendra Art</h3>
                                    <p className="text-xs text-blue-100 font-light leading-relaxed max-w-xs">
                                        Galeri daring untuk seniman kontemporer, fokus pada detail tekstur karya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-center">
                        <button className="group relative px-8 py-4 bg-transparent border border-slate-300 text-slate-900 overflow-hidden transition-all hover:border-oxide-deep">
                            <div className="absolute inset-0 w-0 bg-oxide-deep transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                                Muat Lebih Banyak
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </span>
                        </button>
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
