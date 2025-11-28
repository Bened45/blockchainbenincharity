import Image from 'next/image';

export default function AboutStory() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-6">
                        <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-yellow-800">QUI SOMMES-NOUS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Révolutionner l'Aide Humanitaire
                    </h2>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Image with badge */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/team-meeting.jpg"
                                alt="Équipe BBC en réunion"
                                width={600}
                                height={400}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        {/* Experience badge */}
                        <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-2xl px-8 py-6 shadow-2xl">
                            <p className="text-4xl font-bold text-slate-900">25+</p>
                            <p className="text-sm font-semibold text-slate-700 max-w-[150px]">
                                Années d'expérience combinées
                            </p>
                        </div>
                    </div>

                    {/* Right side - Story sections */}
                    <div className="space-y-8">
                        {/* Origine de BBC */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Origine de BBC</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Née en 2024 d'une initiative de Blockchain BENIN, l'association pionnière de la blockchain au Bénin. Nous appliquons la technologie blockchain pour révolutionner l'aide humanitaire.
                                </p>
                            </div>
                        </div>

                        {/* Le Problème */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Le Problème</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Manque de transparence dans la gestion des dons, difficultés d'accès aux services essentiels et exclusion numérique freinent le développement en Afrique et au Bénin.
                                </p>
                            </div>
                        </div>

                        {/* Notre Solution */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Notre Solution</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Traçabilité totale de chaque don via blockchain. Chaque transaction est enregistrée de manière immuable, permettant un suivi en temps réel de l'impact généré.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
