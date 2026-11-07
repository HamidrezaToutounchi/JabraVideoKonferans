import React from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft, Video, Mic, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Jabra Video & Ses Sistemleri Karşılaştırma — jabravideokonferans.com",
  description: "PanaCast 50, PanaCast 40 VBS, Speak2 75 ve Speak2 55 modellerini karşılaştırın.",
};

export default function ComparePage() {
  const videoSystems = [
    {
      model: "PanaCast 50 VBS",
      os: "Dahili Bağımsız Android",
      camera: "180° Panoramik 4K (3x 13MP)",
      audio: "8 Beamforming Mikrofon + 4 Hoparlör",
      controller: "10.1\" Dokunmatik Tablet Dahil",
      room: "Orta ve Büyük Odalar (6-12 Kişi)",
      teamsCert: "Microsoft Teams Rooms on Android",
    },
    {
      model: "PanaCast 50 BYOD",
      os: "Laptop USB Tak-Çalıştır",
      camera: "180° Panoramik 4K (3x 13MP)",
      audio: "8 Beamforming Mikrofon + 4 Hoparlör",
      controller: "Kullanıcı Laptopu",
      room: "Orta Odalar (6-10 Kişi)",
      teamsCert: "Teams & Zoom Sertifikalı USB",
    },
    {
      model: "PanaCast 40 VBS",
      os: "Android Huddle Room Mimarisi",
      camera: "Geniş Açı 4K Ultra HD",
      audio: "Tümleşik Huddle Hoparlör & Mikrofon",
      controller: "Dokunmatik Kontrol Destekli",
      room: "Huddle Odaları (2-6 Kişi)",
      teamsCert: "Teams Rooms & Zoom Sertifikalı",
    },
  ];

  const audioSystems = [
    {
      model: "Speak2 75",
      speaker: "65mm Super-Wideband Hi-Fi",
      mics: "4 Beamforming (360°)",
      ledRing: "Evet (360° Mikrofon Kalite Halkası)",
      battery: "32 Saate Kadar",
      cable: "Entegre USB-C + USB-A & Bluetooth 5.2",
      rating: "IP64 Su/Toz Korumalı",
    },
    {
      model: "Speak2 55",
      speaker: "50mm Tam Aralıklı",
      mics: "4 Beamforming (Full-Duplex)",
      ledRing: "Temel LED Göstergeleri",
      battery: "12 Saate Kadar",
      cable: "Entegre USB-C + USB-A & Bluetooth 5.1",
      rating: "IP64 Su/Toz Korumalı",
    },
    {
      model: "Speak 750",
      speaker: "Klasik Hi-Fi Müzik & Ses",
      mics: "360° Çok Yönlü Mikrofon",
      ledRing: "Dokunmatik Tuş Işıkları",
      battery: "11 Saate Kadar",
      cable: "USB-A & Bluetooth (Link 370)",
      rating: "Standart Ofis Dayanımı",
    },
  ];

  return (
    <div className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-amber-600 uppercase tracking-wider block mb-2">
            Teknik Karşılaştırma Merkezi
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Toplantı Odası Video ve Ses Sistemleri Karşılaştırması
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            İhtiyacınıza en uygun video barı ve konferans hoparlörünü teknik detaylarıyla kıyaslayın.
          </p>
        </div>

        {/* Section 1: Video Systems */}
        <div className="mb-16">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Video className="w-5 h-5 text-blue-600" />
            <span>PanaCast Video Bar Karşılaştırması</span>
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-600 font-bold">
                <tr>
                  <th className="p-4">Model Adı</th>
                  <th className="p-4">Çalışma Mimarisi</th>
                  <th className="p-4">Kamera Özelliği</th>
                  <th className="p-4">Ses Donanımı</th>
                  <th className="p-4">Önerilen Oda Boyutu</th>
                  <th className="p-4">Sertifikalar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {videoSystems.map((v, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-black text-slate-900 text-sm">{v.model}</td>
                    <td className="p-4 text-slate-600">{v.os}</td>
                    <td className="p-4 text-blue-700 font-bold">{v.camera}</td>
                    <td className="p-4 text-slate-600">{v.audio}</td>
                    <td className="p-4 text-amber-700 font-bold">{v.room}</td>
                    <td className="p-4 text-emerald-700 font-semibold">{v.teamsCert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Audio Systems */}
        <div className="mb-16">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Mic className="w-5 h-5 text-emerald-600" />
            <span>Speak2 & Speak Konferans Hoparlörleri Karşılaştırması</span>
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-600 font-bold">
                <tr>
                  <th className="p-4">Model Adı</th>
                  <th className="p-4">Hoparlör Boyutu</th>
                  <th className="p-4">Mikrofon Sistemi</th>
                  <th className="p-4">360° Kalite Göstergesi</th>
                  <th className="p-4">Kablosuz Pil Süresi</th>
                  <th className="p-4">Bağlantı & Koruma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {audioSystems.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-black text-slate-900 text-sm">{a.model}</td>
                    <td className="p-4 text-slate-600">{a.speaker}</td>
                    <td className="p-4 text-emerald-700 font-bold">{a.mics}</td>
                    <td className="p-4 text-amber-700 font-black">{a.ledRing}</td>
                    <td className="p-4 text-slate-900 font-bold">{a.battery}</td>
                    <td className="p-4 text-slate-600">{a.cable} | {a.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Standard Form */}
        <div className="max-w-4xl mx-auto">
          <LeadForm
            defaultProduct="Jabra Video & Ses Toplantı Odası Karşılaştırma Teklifi"
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </div>
    </div>
  );
}
