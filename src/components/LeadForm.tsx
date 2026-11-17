"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Package, User, Building2, Mail, Phone, Send, ShieldCheck, Sparkles, Loader2, AlertCircle } from "lucide-react";
import KvkkModal from "./KvkkModal";

export default function LeadForm({
  defaultProduct = "Jabra PanaCast 50 Video Bar & Speak2 Paketi",
  badgeText = "Resmi Gold Partner Bilgi & Teklif Masası",
}: {
  defaultProduct?: string;
  badgeText?: string;
}) {
  const router = useRouter();
  const [isKvkkModalOpen, setIsKvkkModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    requestType: "teklif",
    product: defaultProduct,
    quantity: "1 - 5 Toplantı Odası",
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    kvkkAccepted: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkAccepted) {
      alert("Lütfen KVKK Aydınlatma Metni'ni onaylayınız.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          requestType: formData.requestType,
          fullName: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          selectedProduct: formData.product.trim(),
          quantity: formData.quantity,
          kvkkAccepted: true,
          kvkkVersion: "v1",
          website: formData.website,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setErrorMessage(data?.error || "Talebiniz kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.");
        setLoading(false);
        return;
      }

      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem(
            "lastLeadSubmission",
            JSON.stringify({
              refCode: data.refCode,
              product: formData.product,
              quantity: formData.quantity,
              name: formData.name,
              company: formData.company,
              email: formData.email,
              phone: formData.phone,
              submittedAt: new Date().toISOString(),
            })
          );
        } catch (_err) {
          // ignore
        }
      }

      router.push("/basarili");
    } catch (_err) {
      setErrorMessage("Sunucuya bağlanırken bir sorun oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyin.");
      setLoading(false);
    }
  };

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

        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field (hidden from real users) */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Talep Türü */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Talep Türü *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: "teklif", label: "Oda Teklifi" },
                { key: "kesif", label: "Keşif Talebi" },
                { key: "demo", label: "Oda Demosu" },
                { key: "proje", label: "Toplu Proje" },
              ].map((t) => (
                <button
                  type="button"
                  key={t.key}
                  onClick={() => setFormData({ ...formData, requestType: t.key })}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    formData.requestType === t.key
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

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
              id="kvkk"
              checked={formData.kvkkAccepted}
              onChange={(e) => setFormData({ ...formData, kvkkAccepted: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-amber-500 border-slate-300 focus:ring-amber-400 cursor-pointer accent-amber-500"
            />
            <label htmlFor="kvkk" className="text-xs text-slate-600 select-none">
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
            disabled={loading}
            className="w-full bg-[#FFD100] hover:bg-[#E6BC00] active:scale-[0.99] disabled:opacity-70 text-slate-950 font-black text-sm py-4 rounded-xl transition-all shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 border border-amber-300/60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                <span>Talebiniz İletiliyor...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-slate-950" />
                <span>Fiyat Teklifi ve Bilgi Talebini Gönder</span>
              </>
            )}
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
