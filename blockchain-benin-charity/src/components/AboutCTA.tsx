import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="py-20 lg:py-24 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    Prêt à Faire la Différence ?
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-800 mb-10">
                    Rejoignez notre mouvement et contribuez à transformer des vies au Bénin
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Donate Button */}
                    <Link
                        href="/donate"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-200"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        Faire un don
                    </Link>

                    {/* Contact Button */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                    >
                        Nous contacter
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
