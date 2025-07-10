// src/components/LatestNews.tsx

import Image from "next/image";
import Link from "next/link";

// Data berita statis (bisa diganti dengan data dari CMS nantinya)
const newsData = [
    {
        title: "Rapat Anggota Tahunan 2025 Sukses Digelar",
        excerpt: "Seluruh anggota Koperasi Merah Putih berkumpul untuk membahas laporan tahunan dan rencana strategis ke depan.",
        image: "/news-1.jpg", // Ganti dengan nama file gambar Anda
        date: "05 Juli 2025",
        slug: "/berita/rapat-anggota-2025",
    },
    {
        title: "Pelatihan Pemasaran Digital untuk Anggota UMKM",
        excerpt: "Bekerja sama dengan universitas lokal, koperasi memberikan pelatihan untuk meningkatkan penjualan produk anggota.",
        image: "/news-2.jpg", // Ganti dengan nama file gambar Anda
        date: "28 Juni 2025",
        slug: "/berita/pelatihan-pemasaran-digital",
    },
    {
        title: "Panen Raya Padi Organik Desa Pesanggrahan",
        excerpt: "Anggota petani merayakan hasil panen padi organik yang melimpah, menunjukkan keberhasilan program pertanian berkelanjutan.",
        image: "/news-3.jpg", // Ganti dengan nama file gambar Anda
        date: "15 Juni 2025",
        slug: "/berita/panen-raya-padi-organik",
    },
];

export default function LatestNews() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                
                {/* Judul Bagian */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Berita & Kegiatan Terbaru
                    </h2>
                    <p className="text-lg text-gray-500 mt-2">
                        Ikuti perkembangan dan aktivitas terkini dari Koperasi Merah Putih.
                    </p>
                    <div className="mt-4 w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Grid Kartu Berita */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((newsItem, index) => (
                        <Link href={newsItem.slug} key={index}>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden group h-full flex flex-col">
                                <div className="relative w-full h-56">
                                    <Image
                                        src={newsItem.image}
                                        alt={newsItem.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
                                    <h3 className="text-xl font-bold text-gray-800 flex-grow">{newsItem.title}</h3>
                                    <p className="text-gray-600 mt-3 flex-grow">{newsItem.excerpt}</p>
                                    <div className="mt-4 text-red-600 font-semibold group-hover:text-red-800 transition-colors">
                                        Baca Selengkapnya →
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}