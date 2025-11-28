'use client';

import Link from 'next/link';

export default function ProjectsHero() {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
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
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-white">Nos Projets</span>
                    </div>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Ensemble, Construisons un{' '}
                    <span className="text-yellow-400">Avenir Meilleur</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    Découvrez nos projets humanitaires au Bénin. Chaque don est tracé sur la blockchain pour une transparence totale et un impact mesurable.
                </p>
            </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
