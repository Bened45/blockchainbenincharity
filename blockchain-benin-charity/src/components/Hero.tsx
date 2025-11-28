'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CountUp from './CountUp';

export interface HeroStat {
    label: string;
    value: number;
    decimals?: number;
    suffix?: string;
    unit?: string;
}

interface HeroProps {
    quickStats: HeroStat[];
    cardStats: HeroStat[];
}

export default function Hero({ quickStats, cardStats }: HeroProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left side - Text content */}
                <div className="text-white space-y-4 sm:space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 animate-fade-in-down">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-medium">Innovation béninoise</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up delay-100">
                        La Blockchain au service de{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                            l'humain
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium animate-fade-in-up delay-200">
                        Changer des vies, un bloc à la fois.
                    </p>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-in-up delay-300">
                        Nous utilisons la technologie blockchain pour garantir la transparence totale de vos dons
                        et maximiser leur impact sur les communautés béninoises.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up delay-400">
                        <Link
                            href="/don"
                            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Faire un don
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/projets"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white font-bold rounded-xl transition-all border border-slate-700 hover:border-slate-600 hover:-translate-y-1 text-center"
                        >
                            Nos projets
                        </Link>
                    </div>





                    {/* Stats - Quick numbers */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in delay-500">
                        {quickStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-white">
                                    {mounted ? <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} /> : '...'}
                                </div>
                                <div className="text-xs text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - Stats cards */}
                <div className="space-y-4 sm:space-y-6 animate-fade-in-right delay-300">
                    {/* Real-time counter card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-slate-800">Compteur en temps réel</h3>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Mis à jour en temps réel via blockchain
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Total donations */}
                            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl">
                                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-600">{cardStats[0]?.label || 'Dons'}</p>
                                    <p className="text-2xl font-bold text-slate-900">
                                        {mounted ? <CountUp end={cardStats[0]?.value || 0} decimals={cardStats[0]?.decimals} suffix={cardStats[0]?.suffix} /> : '...'} <span className="text-base font-normal text-slate-600">{cardStats[0]?.unit}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Beneficiaries */}
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-600">{cardStats[1]?.label || 'Bénéficiaires'}</p>
                                    <p className="text-2xl font-bold text-slate-900">
                                        {mounted ? <CountUp end={cardStats[1]?.value || 0} decimals={cardStats[1]?.decimals} suffix={cardStats[1]?.suffix} /> : '...'} <span className="text-base font-normal text-slate-600">{cardStats[1]?.unit}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-600">{cardStats[2]?.label || 'Projets'}</p>
                                    <p className="text-2xl font-bold text-slate-900">
                                        {mounted ? <CountUp end={cardStats[2]?.value || 0} decimals={cardStats[2]?.decimals} suffix={cardStats[2]?.suffix} /> : '...'} <span className="text-base font-normal text-slate-600">{cardStats[2]?.unit}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QR Code card */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-start gap-4">
                            <div className="w-24 h-24 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-slate-200">
                                {/* QR Code placeholder */}
                                <svg className="w-20 h-20 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm11-2h3v3h-3v-3zm0 5h3v3h-3v-3zm5-5h3v3h-3v-3zm0 5h3v3h-3v-3z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-900 mb-1">Don rapide</h4>
                                <p className="text-sm text-slate-600">Scannez pour contribuer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
