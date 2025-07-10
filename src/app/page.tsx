// src/app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestNews from "@/components/LatestNews"; 

export default function HomePage() {
  return (
    <main> {/* Hapus bg-gray-50 dari sini jika ada */}
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FeaturedProducts />
      <LatestNews /> {/* <-- 2. Tambahkan komponen di sini */}
    </main>
  );
}