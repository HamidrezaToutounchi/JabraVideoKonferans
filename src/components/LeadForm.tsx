"use client";

import React, { useState } from "react";
import { Package, User, Building2, Mail, Phone, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import KvkkModal from "./KvkkModal";

export default function LeadForm({
  defaultProduct = "Jabra PanaCast 50 Video Bar & Speak2 Paketi",
  badgeText = "Resmi Gold Partner Bilgi & Teklif Masası",
}: {
  defaultProduct?: string;
  badgeText?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [isKvkkModalOpen, setIsKvkkModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    product: defaultProduct,
    quantity: "1 - 5 Toplantı Odası",
    name: "",
    company: "",
    email: "",
    phone: "",
    kvkkAccepted: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkAccepted) {
      alert("Lütfen KVKK Aydınlatma Metni'ni onaylayınız.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Talebiniz Başarıyla Alındı!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Video konferans uzmanımız en geç <strong>2 iş saati</strong> içinde odanızın mimarisine uygun resmi teklif ve test cihazı planlamasıyla dönüş yapacaktır.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 bg-[#FFD100] text-slate-950 font-bold text-xs rounded-full hover:bg-[#E6BC00] transition-colors"
        >
          Yeni Form Gönder
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 lg:p-10 shadow-lg sm:shadow-xl text-slate-800">
        {/* Top Gold Partner Badge - Yellow Theme */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-900 mb-3 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{badgeText}</span>
        </div>

        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6 sm:mb-8">
          Ürün Bilgi, Fiyat Teklifi & Proje Başvuru Formu
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Product & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-8">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Bilgi Almak İstediğiniz Ürün veya Çözüm Paketi
              </label>
              <div className="relative">
                <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="Ürün veya oda çözümü yazın..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/30 transition-all"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Tahmini Oda / Adet
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/30 transition-all"
              >
                <option value="1 - 3 Toplantı Odası">1 - 3 Toplantı Odası</option>
                <option value="4 - 10 Toplantı Odası">4 - 10 Toplantı Odası</option>
                <option value="10+ Toplantı Odası">10+ Toplantı Odası</option>
                <option value="Büyük Konferans Salonu / Oditoryum">Büyük Salon / Oditoryum</option>
              </select>
            </div>
          </div>

          {/* Row 2: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Adınız Soyadınız *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ad Soyad"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Firma / Kurum Adı *
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Firma veya Kurum Ünvanı"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/30 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Kurumsal E-Posta Adresi *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@firma.com"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Telefon Numarası *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="05XX XXX XX XX"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/30 transition-all"
                />
              </div>
            </div>
          </div>

          {/* KVKK Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="kvkk-video"
              checked={formData.kvkkAccepted}
              onChange={(e) => setFormData({ ...formData, kvkkAccepted: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-amber-500 border-slate-300 focus:ring-amber-400 cursor-pointer accent-amber-500"
            />
            <label htmlFor="kvkk-video" className="text-xs text-slate-600 select-none">
              <button
                type="button"
                onClick={() => setIsKvkkModalOpen(true)}
                className="text-amber-700 hover:text-amber-800 font-bold underline cursor-pointer text-left"
              >
                KVKK Aydınlatma Metni
              </button>
              &apos;ni okudum ve anladım. *
            </label>
          </div>

          {/* Submit Button - Jabra Yellow Theme */}
          <button
            type="submit"
            className="w-full bg-[#FFD100] hover:bg-[#E6BC00] active:scale-[0.99] text-slate-950 font-black text-sm py-4 rounded-xl transition-all shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 border border-amber-300/60"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>Fiyat Teklifi ve Bilgi Talebini Gönder</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Verileriniz 256-bit SSL şifreleme ve KVKK güvencesiyle korunur.</span>
          </div>
        </form>
      </div>

      {/* KVKK Modal */}
      <KvkkModal
        isOpen={isKvkkModalOpen}
        onClose={() => setIsKvkkModalOpen(false)}
        onAccept={() => setFormData({ ...formData, kvkkAccepted: true })}
        domain="jabravideokonferans.com"
        phone="0850 850 08 55"
      />
    </>
  );
}