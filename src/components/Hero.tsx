import React from "react";
import Link from "next/link";
import { ArrowRight, Sliders, Video, Mic } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-slate-200 text-slate-900">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-sky-200/30 blur-[90px] sm:blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[500px] h-[150px] sm:h-[250px] bg-indigo-200/20 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Certification badges header */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] sm:text-xs font-bold text-indigo-700 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            <span>Microsoft Teams Rooms Sertifikalı</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] sm:text-xs font-bold text-blue-700 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Zoom Rooms Sertifikalı</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug sm:leading-[1.15] text-slate-900 break-words">
            Toplantı Odalarınızı{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">
              Teams ve Zoom Sertifikalı
            </span>{" "}
            Jabra Video Konferans Sistemleriyle Dönüştürün
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            180° Panoramik 4K PanaCast video barları ile stüdyo kalitesindeki Speak2 tam çift yönlü hoparlörlerini birleştiren anahtar teslim toplantı odası çözümleri.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <a
            href="#room-configurator"
            className="w-full sm:w-auto bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 text-center"
          >
            <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Oda Boyutuna Göre Çözüm Bul</span>
          </a>
          <Link
            href="/teklif-al"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>Ücretsiz Keşif & Demo Talep Et</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </Link>
        </div>

        {/* Dual Showcase Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden group hover:border-blue-400 hover:shadow-xl transition-all shadow-xs sm:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                180° Video Bar Ailesi
              </span>
              <Video className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Jabra PanaCast 50 VBS</h3>
            <p className="text-xs text-slate-600 mb-6">
              Android tabanlı hepsi-bir-arada akıllı video bar ve 10.1 inç PoE masa paneli. Bilgisayarsız tek tıkla toplantı.
            </p>
            <div className="relative h-44 flex items-center justify-center my-2 bg-slate-50 rounded-2xl p-4">
              <img
                src="https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png"
                alt="PanaCast 50 VBS"
                className="max-h-36 object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <Link
              href="/urunler/jabra-panacast-50-vbs"
              className="mt-4 block text-center bg-slate-100 hover:bg-slate-200 text-xs font-bold py-3 rounded-xl text-slate-800 transition-colors"
            >
              Video Bar Sistemini İncele
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden group hover:border-amber-400 hover:shadow-xl transition-all shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Yeni Nesil Ses Standardı
              </span>
              <Mic className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Jabra Speak2 75</h3>
            <p className="text-xs text-slate-600 mb-6">
              65mm süper geniş bant hoparlör, 4 beamforming mikrofon ve 360° Mikrofon Kalite Göstergesi LED halkası.
            </p>
            <div className="relative h-44 flex items-center justify-center my-2 bg-slate-50 rounded-2xl p-4">
              <img
                src="https://assets2.jabra.com/d/c/a/4/dca4ff97bffb3ecd87295dfb61418ad532d4579a_00_Speak2_75_MS.png"
                alt="Speak2 75"
                className="max-h-36 object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <Link
              href="/urunler/jabra-speak2-75"
              className="mt-4 block text-center bg-slate-100 hover:bg-slate-200 text-xs font-bold py-3 rounded-xl text-slate-800 transition-colors"
            >
              Speak2 Hoparlörünü İncele
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
