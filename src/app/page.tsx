// src/app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestNews from "@/components/LatestNews";
import Testimonial from "@/components/Testimonial";
import PotensiDesa from "@/components/PotensiDesa"; // <-- 1. Impor komponen baru
import CTA from "@/components/CTA";
import { pendiriQuery } from "@/sanity/lib/pendiri";
import { client } from "@/sanity/lib/sanityClient";
import PendiriGrid from "@/components/PendiriGrid";

export default async function HomePage() {
   const data = await client.fetch(pendiriQuery);
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <FeaturedProducts />
      <LatestNews />
      <Testimonial />
      {/* Section: Struktural Pendiri */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <PendiriGrid data={data} />
      </section>
      <PotensiDesa /> {/* <-- 2. Tambahkan di sini */}
      <CTA />
    </main>
  );
}
