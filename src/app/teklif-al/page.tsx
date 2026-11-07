"use client";

import React from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft, CheckCircle2, PhoneCall, Mail } from "lucide-react";

export default function TeklifAlPage() {
  return (
    <div className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black text-amber-600 uppercase tracking-wider block">
              Kurumsal Keşif ve Fiyat Teklifi
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Toplantı Odası <span className="text-amber-600">Teklif Masası</span>
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jabra Video Konferans ve Speak2 toplantı ses paketleri için resmi distribütör fiyat teklifinizi ve ücretsiz oda keşif randevunuzu talep edin.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Microsoft Teams ve Zoom sertifikalı oda paketleri</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Oda akustiği, kablolama ve montaj danışmanlığı</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Kurumsal demo cihazı kurulum desteği</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 mt-6">
              <span className="text-xs font-black text-slate-900 block">Doğrudan İletişim:</span>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span className="font-semibold">0850 300 JABRA (5227)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-amber-600" />
                <span className="font-semibold">proje@jabravideokonferans.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm
              defaultProduct="PanaCast 50 VBS & Speak2 75 Toplantı Odası Çözümü"
              badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
