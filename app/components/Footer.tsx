"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fbfbfd] pt-16 pb-8 md:pt-24 md:pb-12 border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-24 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center mb-6 md:mb-8 group">
              <div className="relative h-8 w-24">
                <Image src="/images/oxide-logo-pure.png" alt="OXIDE Logo" fill className="object-contain group-hover:opacity-80 transition-opacity" />
              </div>
            </Link>
            <p className="text-base font-medium text-zinc-500 leading-relaxed mb-6 max-w-xs">
              Membangun fondasi digital dan bisnis kelas dunia. Kami adalah gerbang menuju eksekusi tanpa kompromi.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold text-black mb-2 tracking-tight">Eksplorasi</span>
              <Link href="/services" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Semua Layanan</Link>
              <Link href="/portfolio" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Portofolio</Link>
              <Link href="/about" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Tentang Kami</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold text-black mb-2 tracking-tight">Hubungi Kami</span>
              <a href="https://wa.me/message/D456YXRE63TPJ1" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">WhatsApp</a>
              <a href="https://instagram.com/oxide.studio" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Instagram</a>
              <a href="mailto:contact@oxidestudio.com" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Email</a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <span className="text-sm font-bold text-black mb-2 tracking-tight">Legal</span>
              <Link href="/privacy" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Privasi</Link>
              <Link href="/terms" className="text-sm font-medium text-zinc-500 hover:text-black transition-colors">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-200 text-sm font-medium text-zinc-400">
          <p>
            &copy; {currentYear} OXIDE STUDIO. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
