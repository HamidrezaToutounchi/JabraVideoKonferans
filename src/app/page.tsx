import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import RoomConfigurator from "@/components/RoomConfigurator";
import Speak2AudioShowcase from "@/components/Speak2AudioShowcase";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
import productsData from "@/data/videoconf_products.json";
import { Video, Mic, ArrowRight } from "lucide-react";

export default function Home() {
  const videoProducts = productsData.filter((p) => p.category === "panacast");
  const audioProducts = productsData.filter((p) => p.category === "speakerphone");

  return (
    <div className="bg-white">
      {/* 1. Hero with Teams & Zoom focus */}
      <Hero />

      {/* 2. Interactive Meeting Room Configurator */}
      <RoomConfigurator />

      {/* 3. Speak2 Audio Tech Showcase */}
      <Speak2AudioShowcase />

      {/* 4. Video Conferencing Bars Showcase */}
      <section className="py-24 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3 shadow-sm">
                <Video className="w-3.5 h-3.5 text-blue-600" />
                <span>180° Panoramik-4K Kameralar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                PanaCast Video Bar ve <span className="text-blue-600">Oda Sistemleri</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-2xl">
                Odadaki herkesi tek karede birleştiren, bilgisayarsız tek tıkla toplantı başlatan akıllı video barlar.
              </p>
            </div>
            <Link
              href="/urunler?category=panacast"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
            >
              <span>Tüm Video Çözümlerini Gör</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoProducts.slice(0, 6).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Speakerphones Showcase */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 mb-3 shadow-sm">
                <Mic className="w-3.5 h-3.5 text-emerald-600" />
                <span>Profesyonel Konferans Hoparlörleri</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Jabra Speak2 ve <span className="text-emerald-600">Speak Serisi</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-2xl">
                Super-wideband stüdyo ses kalitesi, 4 beamforming mikrofon ve 360° Mikrofon Kalite Göstergesi.
              </p>
            </div>
            <Link
              href="/urunler?category=speakerphone"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:underline"
            >
              <span>Tüm Hoparlörleri Gör</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioProducts.slice(0, 6).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Standardized Lead Form */}
      <section className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultProduct="Jabra PanaCast 50 VBS & Speak2 75 Toplantı Odası Paketi"
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </section>
    </div>
  );
}
