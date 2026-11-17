"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Home, Package } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.494 5.462 5.601-1.469c1.911 1.24 4.187 1.974 6.609 1.974 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  );
}

export default function BasariliPage() {
  const [leadInfo, setLeadInfo] = useState<{
    product?: string;
    name?: string;
    company?: string;
  } | null>(null);

  const phone = "0850 850 08 55";
  const telNumber = "08508500855";
  const whatsappUrl = `https://wa.me/90${telNumber}?text=${encodeURIComponent(
    "Merhaba, az önce web sitenizden Jabra Video Konferans teklif formu gönderdim. Bilgi almak istiyorum."
  )}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = sessionStorage.getItem("lastLeadSubmission");
        if (raw) {
          setLeadInfo(JSON.parse(raw));
        }
      } catch (_err) {
        // ignore
      }
    }
  }, []);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 text-slate-900 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-xl text-center space-y-6">
          {/* Animated Success Icon */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Oda Keşif &amp; Teklif Talebiniz Alındı</span>
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Talebiniz Başarıyla Alındı!
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              {leadInfo?.name ? (
                <>
                  Sayın <strong>{leadInfo.name}</strong>
                  {leadInfo.company ? ` (${leadInfo.company})` : ""}, ilgilendiğiniz{" "}
                  <strong>{leadInfo.product || "Jabra Video Konferans"}</strong> çözümü için talebiniz kayıt altına alındı.
                </>
              ) : (
                "Video konferans ve toplantı odası uzmanımız en geç 2 iş saati içinde odanızın mimarisine uygun resmi teklif ve test cihazı planlamasıyla dönüş yapacaktır."
              )}
            </p>
          </div>

          {/* SLA Card */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-between text-slate-500 text-[11px]">
              <span>Ortalama Yanıt Süresi</span>
              <strong className="text-slate-900 font-bold">&lt; 2 İş Saati</strong>
            </div>
            <div className="flex items-center justify-between text-slate-500 text-[11px]">
              <span>Toplantı Odası Masası</span>
              <strong className="text-slate-900 font-bold">Jabra Türkiye Resmi Oda Çözüm Merkezi</strong>
            </div>
            <div className="flex items-center justify-between text-slate-500 text-[11px]">
              <span>Kurumsal Keşif Hattı</span>
              <strong className="text-amber-700 font-bold">{phone}</strong>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>WhatsApp&apos;tan Hızlı İletişime Geç</span>
            </a>

            <a
              href={`tel:${telNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#FFD100]" />
              <span>{phone} Ara</span>
            </a>
          </div>

          {/* Back & Catalog Links */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-amber-600 flex items-center gap-1.5 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <Link href="/urunler" className="hover:text-amber-600 flex items-center gap-1.5 transition-colors">
              <Package className="w-3.5 h-3.5" />
              <span>Tüm Oda Sistemleri</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}