"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/videoconf_products.json";
import { Video, Mic, Layers } from "lucide-react";

export default function ProductsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = productsData.filter((p) => {
    if (filter === "video") return p.category === "panacast";
    if (filter === "audio") return p.category === "speakerphone";
    return true;
  });

  return (
    <div className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Jabra Video Konferans & Ses Çözümleri</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Toplantı Odası <span className="text-amber-600">Ürün Kataloğu</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            PanaCast 180° akıllı video sistemleri ve Speak2 stüdyo konferans hoparlörleri kurumsal listesi.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                filter === "all"
                  ? "bg-[#FFD100] text-slate-950 shadow-md shadow-amber-400/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              Tüm Ürünler ({productsData.length})
            </button>
            <button
              onClick={() => setFilter("video")}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 ${
                filter === "video"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video Sistemleri (PanaCast)</span>
            </button>
            <button
              onClick={() => setFilter("audio")}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 ${
                filter === "audio"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Hoparlörler (Speak2)</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
