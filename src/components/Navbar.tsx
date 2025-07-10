// src/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 transition-all duration-300">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo dengan ikon merah */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
            MP
          </div>
          <span className="text-xl font-semibold text-white">
            Koperasi Merah Putih
          </span>
        </Link>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-medium hover:text-red-300 transition-colors duration-300">Beranda</Link>
          <Link href="/berita" className="text-white font-medium hover:text-red-300 transition-colors duration-300">Berita</Link>
          <Link href="/galeri" className="text-white font-medium hover:text-red-300 transition-colors duration-300">Galeri</Link>
        </div>

      </div>
    </nav>
  );
}