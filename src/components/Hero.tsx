// src/components/Hero.tsx (Layout Disesuaikan)

import Link from "next/link";

export default function Hero() {
  const heroStyle = {
    backgroundImage: "url('/pesanggrahan.jpg')",
  };

  // SVG Ikon untuk tombol Hubungi Kami
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white" 
      style={heroStyle}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4">
        
        {/* UKURAN FONT JUDUL DIKECILKAN */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Selamat Datang di
          <span className="block mt-2">Desa <span className="text-red-500">Merah Putih</span></span>
        </h1>
        
        {/* JARAK DI TAMBAH & FONT DISESUAIKAN */}
        <p className="mt-8 text-base md:text-lg font-light max-w-2xl mx-auto">
          Desa yang indah dengan kearifan lokal dan potensi alam yang melimpah, menuju masa depan yang berkelanjutan.
        </p>

        {/* JARAK KE TOMBOL DI TAMBAH */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link 
            href="/tentang-kami" 
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            Tentang Desa →
          </Link>
          <Link 
            href="/hubungi-kami" 
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <PhoneIcon />
            Hubungi Kami
          </Link>
        </div>

      </div>
    </section>
  );
}

// Catatan: Pastikan Anda menyalin ulang definisi PhoneIcon jika Anda menghapus seluruh file.