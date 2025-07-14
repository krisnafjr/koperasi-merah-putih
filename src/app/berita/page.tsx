// src/app/berita/page.tsx

import Navbar from "@/components/Navbar"; // Navbar atas untuk mobile
import BeritaSidebar from "@/components/BeritaSidebar"; // Sidebar judul untuk desktop
import { newsData } from "@/data/berita";
import Image from "next/image";
import Link from "next/link";

const featuredPost = newsData.length > 0 ? newsData[0] : null;
const otherPosts = newsData.length > 1 ? newsData.slice(1) : [];

export default function BeritaPage() {
    return (
        <div className="bg-gray-50">
            {/* Navbar atas akan otomatis ter-hide di desktop oleh class di dalamnya */}
            <Navbar />

            {/* Sidebar judul akan otomatis muncul di desktop */}
            <BeritaSidebar />

            {/* Konten utama dengan padding kiri seukuran sidebar di desktop */}
            <main className="lg:pl-64">
                <div className="container mx-auto px-6 py-12">
                    
                    {/* Berita Utama */}
                    {featuredPost && (
                        <section className="mb-12">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
                                <Link href={featuredPost.slug}>
                                    <div className="relative w-full aspect-w-16 aspect-h-8">
                                        <Image src={featuredPost.image} alt={featuredPost.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <p className="text-sm text-gray-500 mb-2">{featuredPost.date}</p>
                                        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-600 mt-3 line-clamp-2">{featuredPost.excerpt}</p>
                                        <span className="inline-block mt-4 text-red-600 font-semibold">
                                            Baca Selengkapnya &rarr;
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </section>
                    )}

                    {/* Grid Berita Lainnya */}
                    {otherPosts.length > 0 && (
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {otherPosts.map((post) => (
                                    <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                                        <div className="relative w-full aspect-w-4 aspect-h-3">
                                            <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                            <h3 className="text-xl font-semibold text-gray-800 font-serif group-hover:text-red-600 transition-colors line-clamp-3 flex-grow">
                                                <Link href={post.slug}>{post.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}