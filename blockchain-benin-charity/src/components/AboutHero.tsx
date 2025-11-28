'use client';

import Link from 'next/link';

export default function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-emerald-600">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Back button and badge */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm font-medium">Retour à l'accueil</span>
                    </Link>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-white">À propos de BBC</span>
                    </div>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Innovation au Service de la{' '}
                    <span className="text-yellow-400">Solidarité Africaine</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
                    Blockchain BENIN Charity révolutionne l'aide humanitaire en combinant technologie blockchain et valeurs africaines pour créer un impact social transparent et mesurable.
                </p>

                {/* Stats badges */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Year badge */}
                    <div className="bg-yellow-400 rounded-2xl px-8 py-4 shadow-xl">
                        <p className="text-3xl md:text-4xl font-bold text-slate-900">2024</p>
                        <p className="text-sm font-medium text-slate-700">Année de création</p>
                    </div>

                    {/* Transparency badge */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30 shadow-xl">
                        <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
                        <p className="text-sm font-medium text-white/90">Transparent</p>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
