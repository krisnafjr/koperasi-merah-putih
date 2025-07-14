// src/components/Navbar.tsx

"use client"; // <-- 1. Tandai sebagai Client Component

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Untuk mendeteksi halaman aktif
import Link from 'next/link';

// Komponen untuk ikon Hamburger dan X (Close)
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default function Navbar() {
    // 2. State untuk mengelola scroll dan menu mobile
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Mendapatkan path URL saat ini

    // 3. Efek untuk mendeteksi scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function untuk menghapus event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/berita", label: "Berita" },
        { href: "/produk", label: "Produk & Layanan" },
        { href: "/kontak", label: "Kontak" },
    ];

    return (
        <>
            {/* 4. Navbar Utama */}
            <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'bg-red-600' : 'bg-white'}`}>
                            <span className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-red-600'}`}>MP</span>
                        </div>
                        <span className={`text-xl font-semibold transition-colors duration-300 font-serif ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                            Koperasi Merah Putih
                        </span>
                    </Link>

                    {/* Menu Navigasi Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link href={link.href} key={link.href} 
                                className={`font-medium transition-colors duration-300 ${
                                    isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-200'
                                } ${pathname === link.href && '!text-red-600 font-bold'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Tombol Menu Mobile */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* 5. Overlay Menu Mobile */}
            <div className={`fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>
                <div className="container mx-auto px-6 py-4 flex flex-col items-center justify-center text-center">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-6 text-white">
                        <CloseIcon />
                    </button>
                    <ul className="flex flex-col space-y-8">
                        {navLinks.map((link) => (
                             <li key={link.href}>
                                <Link href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-3xl font-bold transition-colors duration-300 ${
                                        pathname === link.href ? 'text-red-500' : 'text-white hover:text-red-400'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}