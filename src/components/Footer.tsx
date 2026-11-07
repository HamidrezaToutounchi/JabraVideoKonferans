import React from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <JabraLogo />
              <div className="border-l border-slate-700 pl-3">
                <span className="text-white font-black text-lg tracking-tight block">VideoKonferans</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Oda Sistemleri</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Toplantı odaları, huddle alanları ve yönetim kurulları için Microsoft Teams & Zoom sertifikalı video bar ve profesyonel ses çözümleri entegrasyon merkezi.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 border border-slate-700 p-2.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-[#FFD100] flex-shrink-0" />
              <span>Microsoft Teams Rooms & Zoom Rooms Yetkili Çözüm Merkezi</span>
            </div>
          </div>

          {/* Video Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Video Bar & Oda Sistemleri
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/urunler/jabra-panacast-50-vbs" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 Video Bar System (Android)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-50" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 Akıllı Video Bar (BYOD)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-50-room-system" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 Room System (Windows)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-40-vbs" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 40 VBS (Huddle Odaları)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-20" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 20 Kişisel 4K AI Kamera
                </Link>
              </li>
            </ul>
          </div>

          {/* Audio Solutions */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Konferans Hoparlörleri
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/urunler/jabra-speak2-75" className="hover:text-[#FFD100] transition-colors">
                  Speak2 75 (Amiral Gemisi 360° LED Halka)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-speak2-55" className="hover:text-[#FFD100] transition-colors">
                  Speak2 55 (Kablosuz & USB)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-speak2-40" className="hover:text-[#FFD100] transition-colors">
                  Speak2 40 (Kablolu Profesyonel)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-speak-750" className="hover:text-[#FFD100] transition-colors">
                  Speak 750 (Tam Çift Yönlü & Çiftleme)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-meet-anywhere" className="hover:text-[#FFD100] transition-colors">
                  Meet Anywhere Taşınabilir Oda Paketleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Kurumsal Keşif Hattı
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD100]" />
                <span className="text-slate-200">0850 300 JABRA (5227)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD100]" />
                <span className="text-slate-200">proje@jabravideokonferans.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD100] mt-0.5" />
                <span>İstanbul Maslak & Ankara Çözüm Merkezi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} jabravideokonferans.com — Türkiye Toplantı Odası Video ve Ses Çözüm Merkezi.</p>
          <div className="flex space-x-6 text-slate-500">
            <span>Gizlilik Politikası</span>
            <span>KVKK Bildirimi</span>
            <span>Oda Kurulum Şartları</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
