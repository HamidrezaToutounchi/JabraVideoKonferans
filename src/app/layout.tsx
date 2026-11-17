import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jabra Video Konferans & Toplantı Odası Sistemleri — Türkiye Resmi Çözüm Merkezi",
  description:
    "Microsoft Teams Rooms ve Zoom Rooms sertifikalı Jabra PanaCast video barları, Speak2 hoparlörleri ve anahtar teslim toplantı odası paketleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-amber-300 selection:text-slate-950 pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar
          phone="0850 850 08 55"
          telNumber="08508500855"
          whatsappText="Merhaba, Jabra Video Konferans sistemleri ve Speak2 çözümleri hakkında bilgi ve teklif almak istiyorum."
          formUrl="/teklif-al"
        />
      </body>
    </html>
  );
}
