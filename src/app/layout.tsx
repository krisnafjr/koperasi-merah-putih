// src/app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Impor Poppins
import "./globals.css";

// Konfigurasi font Poppins dengan berbagai ketebalan (weight)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Koperasi Merah Putih",
  description: "Membangun ekonomi kerakyatan yang mandiri dan sejahtera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Terapkan kelas font ke body */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}