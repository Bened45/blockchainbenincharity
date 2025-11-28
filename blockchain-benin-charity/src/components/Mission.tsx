import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function Mission() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <AnimateOnScroll animationName="animate-fade-in-down">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-blue-800">Qui sommes-nous</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Notre Mission</h2>
                    </div>
                </AnimateOnScroll>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <AnimateOnScroll animationName="animate-fade-in-right" delay={200}>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/mission-image.jpg"
                                    alt="Enfants béninois"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                                {/* Badge overlay */}
                                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">100% Béninois</p>
                                        <p className="text-sm text-slate-600">Fiers & Engagés</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right side - Text content */}
                    <AnimateOnScroll animationName="animate-fade-in-left" delay={300}>
                        <div className="space-y-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Blockchain BENIN Charity (BBC) est une organisation humanitaire numérique béninoise qui révolutionne l'aide sociale en Afrique de l'Ouest. Nous combinons l'innovation blockchain avec la solidarité africaine pour créer un impact social mesurable et transparent.
                            </p>

                            <p className="text-lg text-slate-700 leading-relaxed">
                                Notre mission est de transformer la vie des communautés les plus vulnérables à travers des programmes d'éducation, de santé, d'inclusion numérique et de développement économique. Chaque don est tracé sur la blockchain, garantissant une transparence totale et une confiance maximale.
                            </p>

                            <p className="text-lg text-slate-700 leading-relaxed">
                                Nous croyons en une approche locale, inclusive et technologique qui place l'humain au centre de chaque innovation. Ensemble, nous construisons un Bénin plus solidaire, un bloc à la fois.
                            </p>

                            {/* Values */}
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                {/* Blockchain Transparence */}
                                <AnimateOnScroll delay={400}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="font-semibold text-slate-900 text-sm">Blockchain</p>
                                        <p className="text-xs text-slate-600">Transparence</p>
                                    </div>
                                </AnimateOnScroll>

                                {/* Cœur Humanité */}
                                <AnimateOnScroll delay={500}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="font-semibold text-slate-900 text-sm">Cœur</p>
                                        <p className="text-xs text-slate-600">Humanité</p>
                                    </div>
                                </AnimateOnScroll>

                                {/* Communauté Solidaire */}
                                <AnimateOnScroll delay={600}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                            </svg>
                                        </div>
                                        <p className="font-semibold text-slate-900 text-sm">Communauté</p>
                                        <p className="text-xs text-slate-600">Solidaire</p>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
