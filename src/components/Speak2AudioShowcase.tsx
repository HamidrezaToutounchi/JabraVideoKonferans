"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mic, Volume2, Sparkles, SlidersHorizontal, Radio } from "lucide-react";

export default function Speak2AudioShowcase() {
  const [ledStatus, setLedStatus] = useState<"good" | "medium" | "poor">("good");

  const ringColors = {
    good: "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] bg-emerald-50/50",
    medium: "border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)] bg-amber-50/50",
    poor: "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] bg-red-50/50",
  };

  const statusTexts = {
    good: {
      color: "text-emerald-700",
      title: "Mükemmel Ses Alımı (Yeşil Halka)",
      desc: "4 adet beamforming mikrofon sesinizi 360° stüdyo netliğinde yakalıyor. Karşı taraf fısıltılarınızı bile net duyar.",
    },
    medium: {
      color: "text-amber-700",
      title: "Dengelenen Ses (Turuncu Halka)",
      desc: "Ses Seviyesi Normalleştirme (Voice Level Normalization) devrede. Uzaktan konuştuğunuzda sesinizi otomatik yükseltir.",
    },
    poor: {
      color: "text-red-700",
      title: "Kısık veya Engellenmiş Ses (Kırmızı Halka)",
      desc: "Cihazın önünde engel var veya mikrofon menzilinin dışındasınız. Halka sizi anında uyarır.",
    },
  };

  return (
    <section id="speak2-tech" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold text-amber-800 mb-3 shadow-sm">
            <Radio className="w-3.5 h-3.5 text-amber-600" />
            <span>Yeni Nesil Konferans Sesi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Jabra Speak2 Serisi: <span className="text-amber-600">Ses Mühendisliğinde Zirve</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Geleneksel hoparlörlerin iki kişinin aynı anda konuştuğunda sesi kesme problemine son. Gerçek Tam Çift Yönlü ses ve akıllı LED geri bildirim halkası.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Tam Çift Yönlü (Full-Duplex) Ses</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Her iki taraf da aynı anda konuşabilir. Karşılıklı diyaloglar doğal bir yüz yüze sohbet gibi akar; kelimeler yutulmaz.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Ses Seviyesi Normalleştirme</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Masanın en ucunda fısıldayan kişi ile mikrofona yakın bağıran kişinin ses seviyesini yapay zeka ile aynı desibele eşitler.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Super-Wideband & 65mm Hoparlör</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standart telefon frekanslarının ötesine geçerek insan sesinin tüm bas ve tını zenginliğini iletir.
            </p>
          </div>
        </div>

        {/* Interactive 360° LED Ring Simulation */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left simulation controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black text-amber-900">
                Speak2 75 Patentli Yetenek
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                360° Mikrofon Kalite Göstergesi (LED Ring) Simülatörü
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sesinizin karşı tarafa nasıl ulaştığını tahmin etmek zorunda kalmayın. Speak2 75 üzerindeki patentli LED halkası canlı mikrofon berraklığınızı renklerle gösterir.
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Simülasyon Durumunu Seçin:
                </span>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setLedStatus("good")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      ledStatus === "good"
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Mükemmel Ses (Yeşil)
                  </button>
                  <button
                    onClick={() => setLedStatus("medium")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      ledStatus === "medium"
                        ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Dengelenen Ses (Turuncu)
                  </button>
                  <button
                    onClick={() => setLedStatus("poor")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      ledStatus === "poor"
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Yetersiz Seviye (Kırmızı)
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <h4 className={`text-sm font-black ${statusTexts[ledStatus].color}`}>
                  {statusTexts[ledStatus].title}
                </h4>
                <p className="text-xs text-slate-600">{statusTexts[ledStatus].desc}</p>
              </div>
            </div>

            {/* Right Visualizer */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6">
              <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full border-4 transition-all duration-700 ${ringColors[ledStatus]}`}
                />
                <div className="w-52 h-52 rounded-full bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center shadow-2xl z-10 text-white">
                  <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1">Jabra Speak2 75</div>
                  <Mic className={`w-8 h-8 my-2 transition-colors duration-500 ${statusTexts[ledStatus].color}`} />
                  <span className="text-[11px] font-bold text-white block">4x Beamforming</span>
                  <span className="text-[9px] text-slate-400">32 Saat Pil | IP64</span>
                </div>
              </div>
              <div className="mt-6 text-center text-xs text-slate-500 font-bold">
                Canlı Görsel LED Halkası Durumu: <span className="text-slate-900">{ledStatus.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
