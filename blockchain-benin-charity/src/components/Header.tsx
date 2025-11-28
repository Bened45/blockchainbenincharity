'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [language, setLanguage] = useState('FR');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Disable scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/projets', label: 'Projets' },
        { href: '/galerie', label: 'Galerie' },
        { href: '/about', label: 'À propos' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 relative flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Blockchain Bénin Charity Logo"
                                width={48}
                                height={48}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-base relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Search icon - Hidden on small mobile */}
                        <button className="hidden xs:block p-2 lg:p-2.5 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Rechercher">
                            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Language selector - Hidden on mobile */}
                        <button
                            className="hidden md:flex items-center gap-2 px-3 py-2.5 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
                        >
                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            <span className="text-sm font-semibold text-slate-700">{language}</span>
                            <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Donate button - Always visible */}
                        <Link
                            href="/don"
                            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl transition-all duration-200 flex items-center gap-1.5 sm:gap-2 shadow-md hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="hidden sm:inline">Faire un don</span>
                            <span className="sm:hidden">Don</span>
                        </Link>

                        {/* Mobile menu button - Always visible on mobile */}
                        <button
                            className="lg:hidden p-2.5 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                        }`}
                                ></span>
                                <span
                                    className={`w-full h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                                        }`}
                                ></span>
                                <span
                                    className={`w-full h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                        }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    style={{ zIndex: 9998 }}
                    className="fixed inset-0 bg-black/50 lg:hidden animate-fade-in"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                style={{ backgroundColor: 'white', zIndex: 9999, minHeight: '100vh' }}
                className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full" style={{ backgroundColor: 'white' }}>
                    {/* Mobile menu header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-200">
                        <span className="text-xl font-bold text-slate-900">Menu</span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            aria-label="Fermer"
                        >
                            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile navigation links */}
                    <nav className="flex-1 overflow-y-auto py-6" style={{ backgroundColor: 'white' }}>
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-6 py-4 text-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors border-b border-slate-100"
                                style={{ opacity: 1 }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu footer */}
                    <div className="p-6 border-t border-slate-200 space-y-4">
                        {/* Language selector */}
                        <button
                            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
                        >
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                <span className="text-sm font-semibold text-slate-700">Langue</span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">{language}</span>
                        </button>

                        {/* Donate button */}
                        <Link
                            href="/don"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Faire un don
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
