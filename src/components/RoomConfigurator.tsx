"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sliders, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function RoomConfigurator() {
  const [roomSize, setRoomSize] = useState<string>("medium");
  const [platform, setPlatform] = useState<string>("teams");

  const packages: Record<string, Record<string, any>> = {
    personal: {
      teams: {
        title: "Kişisel / Telefon Kulübesi Teams Paketi",
        camera: "Jabra PanaCast 20 (4K Edge AI Kişisel Kamera)",
        audio: "Jabra Speak2 55 (Kablosuz & USB)",
        controller: "Doğrudan PC / Teams Client Arayüzü",
        cable: "USB-C Tak-Çalıştır Entegre Kablo",
        desc: "Kişisel masalarda veya 1-2 kişilik odak odalarında profesyonel 4K görüntü ve yankısız ses sağlar.",
        schematic: "1 Masa + 1-2 Sandalye + 1 Ekran (27\"-32\")",
        image: "https://assets2.jabra.com/5/e/5/7/5e5780d2896b17079bdfa776b4df15c945d39a79_Jabra_PanaCast20_00s.png",
      },
      zoom: {
        title: "Kişisel / Telefon Kulübesi Zoom Paketi",
        camera: "Jabra PanaCast 20 (4K Edge AI)",
        audio: "Jabra Speak2 40 (Kablolu USB)",
        controller: "Doğrudan Zoom Desktop Client",
        cable: "USB-C Tak-Çalıştır",
        desc: "Zoom toplantılarında cihaz içi AI ışık dengeleme ile karanlık ortamlarda bile stüdyo aydınlatması.",
        schematic: "1 Masa + 1-2 Sandalye + 1 Ekran",
        image: "https://assets2.jabra.com/5/e/5/7/5e5780d2896b17079bdfa776b4df15c945d39a79_Jabra_PanaCast20_00s.png",
      },
      byod: {
        title: "Kişisel / Mobil Esnek BYOD Paketi",
        camera: "Jabra PanaCast 20",
        audio: "Jabra Speak2 55 (Bluetooth + USB)",
        controller: "Kullanıcı Laptopu",
        cable: "Çift USB-C/A Kablo",
        desc: "Tüm video platformlarıyla uyumlu, taşınabilir kişisel video ve ses kiti.",
        schematic: "1 Masa + Laptop Bağlantısı",
        image: "https://assets2.jabra.com/5/e/5/7/5e5780d2896b17079bdfa776b4df15c945d39a79_Jabra_PanaCast20_00s.png",
      },
    },
    small: {
      teams: {
        title: "Huddle Room Microsoft Teams Rooms Paketi",
        camera: "Jabra PanaCast 40 VBS / PanaCast 50",
        audio: "Dahili 8 Beamforming Mikrofon ve Yüksek Güçlü Stereo Hoparlör",
        controller: "10.1\" PanaCast Control Dokunmatik Masa Tableti",
        cable: "Tek Ethernet PoE Kablosu",
        desc: "2-6 kişilik huddle alanlarında duvardan duvara 180° panoramik kapsama ve tek dokunuşla toplantı başlatma.",
        schematic: "Huddle Masa + 4-6 Sandalye + 55\" Toplantı Ekranı",
        image: "https://assets2.jabra.com/3/e/f/f/3effb4227189ad803cb3160caeb47258a57dfa91_Jabra_PanaCast_40vbs_techspec3.png",
      },
      zoom: {
        title: "Huddle Room Zoom Rooms Paketi",
        camera: "Jabra PanaCast 40 VBS (Zoom Rooms On Android)",
        audio: "Entegre Beamforming Mikrofonlar + Hoparlör",
        controller: "10.1\" Dokunmatik Masa Tableti",
        cable: "PoE Ethernet",
        desc: "Zoom Rooms sertifikalı kompakt video bar sistemi, sıfır bilgisayar ihtiyacı.",
        schematic: "Huddle Masa + 4-6 Sandalye + 55\" Ekran",
        image: "https://assets2.jabra.com/3/e/f/f/3effb4227189ad803cb3160caeb47258a57dfa91_Jabra_PanaCast_40vbs_techspec3.png",
      },
      byod: {
        title: "Huddle Room Esnek BYOD Paketi",
        camera: "Jabra PanaCast (180° USB Kamera)",
        audio: "Jabra Speak2 75 (Süper Geniş Bant Ses)",
        controller: "Masaüstü USB-C Tak-Çalıştır Hub",
        cable: "Tek Kablo Ekran ve Kamera Aktarımı",
        desc: "Gelen her çalışanın kendi laptopunu tek kabloyla bağlayıp odayı kullanabildiği BYOD huddle paketi.",
        schematic: "Huddle Masa + Masaüstü Hub + Ekran",
        image: "https://assets2.jabra.com/c/c/f/b/ccfb65e3b0c8558d478dfadd5d53c691e5ef2ee5_Jabra_PanaCast_Meet_Anywhere1s.png",
      },
    },
    medium: {
      teams: {
        title: "Orta Toplantı Odası MTR on Android Paketi (En Popüler)",
        camera: "Jabra PanaCast 50 VBS (180° Panoramik 4K Akıllı Video Bar)",
        audio: "8 Beamforming Mikrofon + 4 Titreşimsiz Stereo Hoparlör",
        controller: "10.1\" PanaCast Control Dokunmatik Ekran",
        cable: "PoE Güç ve Veri Hattı, Çift HDMI Ekran Çıkışı",
        desc: "6-10 kişilik odalarda kör nokta bırakmayan 180° görüş açısı, Dynamic Composition ve Canlı Beyaz Tahta akışı.",
        schematic: "Orta Boy Toplantı Masası + 8-10 Sandalye + Çift 65\" Ekran",
        image: "https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png",
      },
      zoom: {
        title: "Orta Toplantı Odası Zoom Rooms Paketi",
        camera: "Jabra PanaCast 50 VBS (Android Tabanlı Zoom Rooms)",
        audio: "8 Mikrofon + 4 Hoparlör + Virtual Director AI Takip",
        controller: "10.1\" PanaCast Control",
        cable: "PoE Ethernet + HDMI",
        desc: "Zoom Rooms ile tam entegre, IT yönetimi kolay, konuşmacıyı otomatik takip eden akıllı sistem.",
        schematic: "Orta Boy Toplantı Masası + 8 Sandalye + 65\" Ekran",
        image: "https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png",
      },
      byod: {
        title: "Orta Toplantı Odası Profesyonel BYOD Paketi",
        camera: "Jabra PanaCast 50 Akıllı Video Bar (BYOD)",
        audio: "PanaCast 50 Dahili Hoparlör + Ek Masa Speak2 75 Desteği",
        controller: "Masaüstü USB-C Bağlantı Noktası",
        cable: "USB 3.0 / USB-C 5m Kablolama",
        desc: "Masa başındaki kullanıcıların tek bir USB kablosuyla stüdyo 180° video ve ses altyapısını devraldığı sistem.",
        schematic: "Toplantı Masası + Duvar Montaj Video Bar + 65\"-75\" Ekran",
        image: "https://assets2.jabra.com/1/4/2/f/142fdb59906cebf07c63b2312f7710001bebf25e_Jabra_PanaCast50_table_stand_grey_02.png",
      },
    },
    boardroom: {
      teams: {
        title: "Yönetim Kurulu Odası Windows MTR Paketi",
        camera: "Jabra PanaCast 50 Room System (Lenovo ThinkSmart Core)",
        audio: "PanaCast 50 Stüdyo Ses Sistemi + Intelligent Speaker (10 Kişi Ses Tanıma)",
        controller: "10.1\" ThinkSmart Controller Dokunmatik Panel",
        cable: "Yapısal Kablolama + Mini PC Güvenli Montaj",
        desc: "10+ kişilik salonlar için kurumsal Windows 11 IoT SAC işletim sistemi, sesli toplantı katibi ve maksimum güvenlik.",
        schematic: "Geniş U / V Toplantı Masası + 12-20 Sandalye + Çift 75\"-85\" Ekran",
        image: "https://assets2.jabra.com/4/c/a/1/4ca17c389237d27f6781486803fd21fe86babdb2_Jabra_PanaCast50VBS_01.png",
      },
      zoom: {
        title: "Yönetim Kurulu Odası Zoom Rooms Windows Paketi",
        camera: "Jabra PanaCast 50 Room System (Windows)",
        audio: "Full-Duplex Süper Geniş Bant Ses + Çoklu Mikrofon",
        controller: "10.1\" Dokunmatik Yönetim Paneli",
        cable: "Endüstriyel Kilitli Kablolama",
        desc: "Yüksek katılımcılı Zoom Rooms oturumlarında kusursuz video berraklığı ve uzaktan yönetim.",
        schematic: "Büyük Toplantı Masası + 12+ Sandalye + Çift Ekran",
        image: "https://assets2.jabra.com/4/c/a/1/4ca17c389237d27f6781486803fd21fe86babdb2_Jabra_PanaCast50VBS_01.png",
      },
      byod: {
        title: "Büyük Salon Çift Hoparlörlü Hibrit Paket",
        camera: "Jabra PanaCast 50 Video Bar",
        audio: "2 Adet Kablosuz Eşleştirilmiş Jabra Speak 750 / Speak2 75",
        controller: "Masaüstü Bağlantı Paneli",
        cable: "Genişletilmiş USB Altyapısı",
        desc: "Geniş masaların her iki ucunda oturanların da eşit netlikte duyulmasını sağlayan çift hoparlörlü mimari.",
        schematic: "Geniş Masa + Çift Hoparlör Eşleştirme + 75\" Ekran",
        image: "https://assets2.jabra.com/1/4/2/f/142fdb59906cebf07c63b2312f7710001bebf25e_Jabra_PanaCast50_table_stand_grey_02.png",
      },
    },
  };

  const currentPkg = packages[roomSize][platform];

  return (
    <section id="room-configurator" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-amber-500" />
            <span>Akıllı Toplantı Odası Konfigüratörü</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Toplantı Odanız İçin <span className="text-amber-600">İdeal Paketi Bulun</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Oda büyüklüğünüzü ve kullanmak istediğiniz platformu seçin; mühendislerimizin önerdiği ideal kamera, hoparlör ve kontrol cihazı paketini anında görün.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Step 1: Room Size */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[#FFD100] text-slate-950 font-black text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="text-base font-bold text-slate-900">Toplantı Odanızın Boyutunu Seçin:</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { id: "personal", label: "Kişisel / Telefon Kulübesi", capacity: "1 - 2 Kişi" },
                { id: "small", label: "Küçük Oda / Huddle Room", capacity: "2 - 6 Kişi" },
                { id: "medium", label: "Orta Boy Toplantı Odası", capacity: "6 - 10 Kişi" },
                { id: "boardroom", label: "Büyük Oda / Yönetim Kurulu", capacity: "10+ Kişi" },
              ].map((size) => (
                <button
                  key={size.id}
                  onClick={() => setRoomSize(size.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    roomSize === size.id
                      ? "bg-amber-50/50 border-amber-400 shadow-md scale-[1.02]"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Users className={`w-5 h-5 mb-2 ${roomSize === size.id ? "text-amber-600" : "text-slate-400"}`} />
                  <div className="text-xs font-black text-slate-900 leading-snug">{size.label}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{size.capacity}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Platform Choice */}
          <div className="mb-10 pb-8 border-b border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-[#FFD100] text-slate-950 font-black text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-bold text-slate-900">Tercih Ettiğiniz Toplantı Platformunu Seçin:</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  id: "teams",
                  title: "Microsoft Teams Rooms",
                  desc: "MTR Sertifikalı, tek tıkla Teams katılımı",
                  badgeColor: "bg-indigo-100 text-indigo-700 border border-indigo-200",
                },
                {
                  id: "zoom",
                  title: "Zoom Rooms",
                  desc: "Zoom Rooms resmi sertifikalı sistemler",
                  badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
                },
                {
                  id: "byod",
                  title: "Kendi Cihazını Getir (BYOD)",
                  desc: "Laptop tak-çalıştır esnek video altyapısı",
                  badgeColor: "bg-emerald-100 text-emerald-800 border border-emerald-200",
                },
              ].map((plat) => (
                <button
                  key={plat.id}
                  onClick={() => setPlatform(plat.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    platform === plat.id
                      ? "bg-amber-50/50 border-amber-400 shadow-md scale-[1.02]"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${plat.badgeColor}`}>
                      {plat.title.split(" ")[0]}
                    </span>
                    {platform === plat.id && <CheckCircle className="w-4 h-4 text-amber-600" />}
                  </div>
                  <div className="text-sm font-black text-slate-900">{plat.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{plat.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Result Package Display */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
              <span className="text-xs font-black text-amber-600 uppercase tracking-wider">
                Önerilen Toplantı Odası Çözüm Paketi
              </span>
              <span className="text-xs bg-white text-slate-700 font-bold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                {currentPkg.schematic}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 flex items-center justify-center shadow-sm">
                <img
                  src={currentPkg.image}
                  alt={currentPkg.title}
                  className="max-h-48 object-contain drop-shadow-md"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-2xl font-black text-slate-900">{currentPkg.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{currentPkg.desc}</p>

                <div className="space-y-2 py-3 border-y border-slate-200 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-bold">Kamera / Video Bar:</span>
                    <span className="text-slate-900 font-semibold text-right">{currentPkg.camera}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-bold">Ses & Mikrofon Sistemi:</span>
                    <span className="text-slate-900 font-semibold text-right">{currentPkg.audio}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-bold">Kontrol Paneli:</span>
                    <span className="text-slate-900 font-semibold text-right">{currentPkg.controller}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-bold">Kablolama Altyapısı:</span>
                    <span className="text-slate-900 font-semibold text-right">{currentPkg.cable}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/teklif-al?room=${roomSize}&platform=${platform}&title=${encodeURIComponent(currentPkg.title)}`}
                    className="flex-1 bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-sm py-3.5 px-6 rounded-xl transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2"
                  >
                    <span>Bu Oda Paketi İçin Fiyat Teklifi Al</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/karsilastir"
                    className="sm:w-auto bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs py-3.5 px-5 rounded-xl border border-slate-300 text-center shadow-sm"
                  >
                    Tüm Seçenekleri Karşılaştır
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
