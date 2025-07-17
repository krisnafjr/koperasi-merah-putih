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
import { pendiriQuery } from "@/sanity/lib/pendiri"; /*ijul*/
import { client } from "@/sanity/lib/sanityClient"; /*ijul*/
import PendiriGrid from "@/components/PendiriGrid"; /*ijul*/

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
      {/* Section: Struktural Pendiri */} /*ijul*/
      <section className="py-12 px-4 md:px-10 bg-white"> /*ijul*/
        <PendiriGrid data={data} /> /*ijul*/
      </section> /*ijul*/
      <PotensiDesa /> {/* <-- 2. Tambahkan di sini */}
      <CTA />
    </main>
  );
}
