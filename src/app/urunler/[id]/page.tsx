import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import productsData from "@/data/videoconf_products.json";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, ArrowLeft, Download, ExternalLink, Video, Mic, Users, Sparkles } from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((p) => ({
    id: p.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productsData.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const isVideo = product.category === "panacast";

  return (
    <div className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Ürün Kataloğuna Dön</span>
        </Link>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 flex items-center justify-center relative shadow-xl">
            {product.badge && (
              <span className="absolute top-6 left-6 text-xs font-black px-3 py-1 bg-[#FFD100] text-slate-950 rounded-full shadow-sm border border-amber-300">
                {product.badge}
              </span>
            )}
            <img
              src={product.imageUrl}
              alt={product.model}
              className="max-h-[380px] w-auto object-contain filter drop-shadow-xl"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-black text-amber-600 uppercase tracking-wider">
                  {product.subcategory}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] text-slate-500 font-bold">
                  {isVideo ? "180° Panoramik 4K Video" : "Super-Wideband Konferans Sesi"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {product.model}
              </h1>
              <p className="text-base text-slate-600 mt-4 leading-relaxed font-normal">
                {product.fullDescription || product.shortDescription}
              </p>
            </div>

            {product.roomSize && (
              <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 shadow-sm">
                <Users className="w-4 h-4 text-amber-600" />
                <span>Önerilen Toplantı Odası: <strong className="text-slate-900">{product.roomSize}</strong></span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#lead-form"
                className="flex-1 text-center bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-sm py-4 rounded-xl transition-all shadow-lg shadow-amber-400/25"
              >
                Kurumsal Fiyat Teklifi Al
              </a>
              <Link
                href="/karsilastir"
                className="flex-1 text-center bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm py-4 rounded-xl border border-slate-300 shadow-sm transition-colors"
              >
                Modellerle Karşılaştır
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs">
              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-600 font-bold underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Teknik Datasheet (PDF)</span>
                </a>
              )}
              {product.officialUrl && (
                <a
                  href={product.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-800"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Jabra Resmi Sayfası</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Features & Specs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Öne Çıkan Özellikler</span>
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              {product.features?.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              {isVideo ? <Video className="w-5 h-5 text-blue-600" /> : <Mic className="w-5 h-5 text-emerald-600" />}
              <span>Teknik Spesifikasyonlar</span>
            </h3>
            <div className="divide-y divide-slate-100 text-sm">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div key={idx} className="py-3 flex justify-between gap-4">
                  <span className="font-bold text-slate-500">{key}</span>
                  <span className="text-right text-slate-900 font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standard Lead Form */}
        <div id="lead-form" className="max-w-4xl mx-auto pt-6">
          <LeadForm
            defaultProduct={product.model}
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </div>
    </div>
  );
}
