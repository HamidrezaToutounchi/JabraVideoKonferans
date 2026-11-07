import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="bg-[#0A0F1D] text-[#F8FAFC] min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
