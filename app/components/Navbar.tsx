"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Layanan" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/about", label: "Tentang Kami" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 md:px-0 transition-all duration-300 pointer-events-none">
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <div className="relative h-5 w-16 ml-2">
              <Image src="/images/oxide-logo-pure.png" alt="OXIDE" fill className="object-contain group-hover:opacity-80 transition-opacity" />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors duration-300 ${
                pathname === link.href || pathname?.startsWith(link.href + "/")
                  ? "text-black font-bold"
                  : "text-zinc-700 font-medium hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <a
            href="https://wa.me/message/D456YXRE63TPJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white bg-black px-6 py-2.5 rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full mt-2 left-0 w-full bg-white/95 backdrop-blur-2xl border border-zinc-200/50 rounded-[2rem] overflow-hidden transition-all duration-300 ease-in-out shadow-xl ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-bold tracking-tight transition-colors ${
                pathname === link.href
                  ? "text-black"
                  : "text-zinc-500 hover:text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-100">
            <a
              href="https://wa.me/message/D456YXRE63TPJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-black text-white font-bold rounded-xl text-lg shadow-md mt-2"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
