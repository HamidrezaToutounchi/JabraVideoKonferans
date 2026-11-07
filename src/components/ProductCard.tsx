import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Video, Mic, Sparkles } from "lucide-react";

export interface VideoConfProduct {
  id: string;
  slug: string;
  model: string;
  title: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  specs: Record<string, string>;
  features?: string[];
  imageUrl: string;
  roomSize?: string;
  badge?: string;
}

export default function ProductCard({ product }: { product: VideoConfProduct }) {
  const isVideo = product.category === "panacast";

  return (
    <div className="group bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-amber-400 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            {isVideo ? <Video className="w-3 h-3 text-blue-600" /> : <Mic className="w-3 h-3 text-emerald-600" />}
            <span>{product.subcategory}</span>
          </div>
          {product.badge && (
            <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FFD100] text-slate-950 shadow-sm border border-amber-300">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Image Stage */}
        <div className="relative h-48 w-full flex items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-2xl mb-5 border border-slate-100 group-hover:border-slate-200 transition-colors">
          <img
            src={product.imageUrl}
            alt={product.model}
            className="max-h-36 max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-tight mb-2">
          {product.model}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Room Size Pill */}
        {product.roomSize && (
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 mb-5">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Kapasite: <strong className="text-slate-900">{product.roomSize}</strong></span>
          </div>
        )}

        {/* Key Specs Preview */}
        <div className="space-y-2 py-3 border-t border-slate-100 text-xs">
          {Object.entries(product.specs).slice(0, 2).map(([key, value], i) => (
            <div key={i} className="flex justify-between items-start gap-2">
              <span className="text-slate-400 font-medium">{key}:</span>
              <span className="text-slate-800 text-right font-semibold max-w-[60%]">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-5 border-t border-slate-100 mt-2 flex items-center gap-3">
        <Link
          href={`/urunler/${product.id}`}
          className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 rounded-xl transition-colors"
        >
          Detay
        </Link>
        <Link
          href={`/teklif-al?product=${product.id}&title=${encodeURIComponent(product.model)}`}
          className="flex-1 text-center bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-xs py-3 rounded-xl transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-1"
        >
          <span>Teklif Al</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
