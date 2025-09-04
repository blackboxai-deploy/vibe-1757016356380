import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accessoires Automobiles EL BAHJA - Spécialiste Auto",
  description: "EL BAHJA, votre spécialiste en accessoires automobiles. Large gamme d'équipements pour l'intérieur, l'extérieur, l'éclairage et le tuning de votre véhicule.",
  keywords: "accessoires auto, équipement automobile, éclairage auto, tuning, accessoires intérieur, accessoires extérieur, EL BAHJA",
  authors: [{ name: "Accessoires Automobiles EL BAHJA" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}