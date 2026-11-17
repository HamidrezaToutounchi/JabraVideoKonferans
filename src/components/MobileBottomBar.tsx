"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, FileText, X, ArrowRight, ShieldCheck } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.494 5.462 5.601-1.469c1.911 1.24 4.187 1.974 6.609 1.974 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  );
}

export default function MobileBottomBar({
  phone = "0850 850 08 55",
  telNumber = "08508500855",
  whatsappText = "Merhaba, Jabra Video Konferans sistemleri ve Speak2 çözümleri hakkında bilgi ve teklif almak istiyorum.",
  formUrl = "/teklif-al",
}: {
  phone?: string;
  telNumber?: string;
  whatsappText?: string;
  formUrl?: string;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const whatsappUrl = `https://wa.me/90${telNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      {/* Fixed Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2 safe-area-bottom">
        {/* Call Button */}
        <a
          href={`tel:${telNumber}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm active:scale-[0.98] transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFD100]" />
          <span>Ara</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm active:scale-[0.98] transition-transform"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* İletişim / Teklif Butonu */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#FFD100] text-slate-950 font-black text-xs shadow-sm border border-amber-300/80 active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>İletişim</span>
        </button>
      </div>

      {/* Slide-Up Contact Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          {/* Backdrop click to close */}
          <div className="flex-1" onClick={() => setDrawerOpen(false)} />

          <div className="bg-white rounded-t-3xl border-t border-slate-200 p-5 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900">Toplantı Odası Danışma Masası</h3>
                  <p className="text-[11px] text-slate-500">Doğrudan Video Konferans Uzmanına Ulaşın</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Actions List */}
            <div className="space-y-2.5">
              {/* Action 1: Telefonla Ara */}
              <a
                href={`tel:${telNumber}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#FFD100] flex items-center justify-center shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Telefonla Doğrudan Ara</div>
                    <div className="text-[11px] font-semibold text-amber-700">{phone}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Action 2: WhatsApp'tan İletişime Geç */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-200 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950">WhatsApp&apos;tan İletişime Geç</div>
                    <div className="text-[11px] text-emerald-700">Anında Mesajlaşma &amp; Keşif Talebi</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Action 3: Fiyat Teklifi & Demo Talep Formu */}
              <Link
                href={formUrl}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50/70 hover:bg-amber-50 border border-amber-200 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD100] text-slate-950 flex items-center justify-center shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Oda Keşif &amp; Teklif Talebi</div>
                    <div className="text-[11px] text-amber-800">2 İş Saati İçinde Mimarınıza Uygun Teklif</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>

            <p className="text-[11px] text-center text-slate-400 pt-1">
              Hafta içi 09:00 - 18:00 arası canlı kurumsal destek verilmektedir.
            </p>
          </div>
        </div>
      )}
    </>
  );
}