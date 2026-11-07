"use client";

import React, { useState } from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center group">
            <JabraLogo />
            <div className="h-5 w-[1px] bg-slate-200 mx-3"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight">
                VideoKonferans
              </span>
              <span className="text-[10px] font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                Toplantı Odaları
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="/#room-configurator"
              className="text-[13px] font-semibold text-slate-600 hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              Oda Konfigüratörü
            </a>
            <Link
              href="/urunler?category=panacast"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              PanaCast Video Barlar
            </Link>
            <Link
              href="/urunler?category=speakerphone"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Speak2 Hoparlörler
            </Link>
            <a
              href="/#speak2-tech"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Ses Teknolojisi
            </a>
            <Link
              href="/karsilastir"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Karşılaştır
            </Link>
          </nav>

          {/* Right Action & Badges */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden xl:inline-flex items-center text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
              Teams & Zoom Sertifikalı
            </span>

            <Link
              href="/teklif-al"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFD100] hover:bg-[#FACC15] text-slate-950 font-bold text-xs tracking-wide shadow-xs border border-amber-400/40 transition-all hover:shadow-sm whitespace-nowrap"
            >
              <span>Keşif & Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <a
            href="/#room-configurator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Oda Konfigüratörü
          </a>
          <Link
            href="/urunler?category=panacast"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            PanaCast Video Barlar
          </Link>
          <Link
            href="/urunler?category=speakerphone"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Speak2 Hoparlörler
          </Link>
          <a
            href="/#speak2-tech"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Ses Teknolojisi
          </a>
          <Link
            href="/karsilastir"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Karşılaştır
          </Link>
          <div className="pt-2">
            <Link
              href="/teklif-al"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#FFD100] text-slate-950 font-bold text-xs shadow-xs"
            >
              <span>Keşif & Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
