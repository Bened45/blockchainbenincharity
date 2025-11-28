export default function AboutMissionVision() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Notre Mission */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Notre Mission
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 italic leading-relaxed mb-8">
                            "Créer un impact social positif durable en utilisant la technologie blockchain pour assurer la transparence, l'efficacité et la traçabilité de nos actions caritatives au Bénin et en Afrique francophone."
                        </p>

                        {/* Objectifs court terme */}
                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                Objectifs Court Terme
                            </p>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 flex-1">
                                    Lancer 5 projets pilotes au Bénin d'ici fin 2025
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 flex-1">
                                    Former 1000 bénéficiaires aux outils numériques
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Notre Vision */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Notre Vision
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 italic leading-relaxed mb-8">
                            "Devenir l'organisation caritative de référence en Afrique francophone, démontrant comment la technologie peut transformer la philanthropie et maximiser l'impact social."
                        </p>

                        {/* Objectifs long terme */}
                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                Objectifs Long Terme
                            </p>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 text-yellow-400 mt-0.5">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 flex-1">
                                    Étendre nos actions dans 5 pays d'Afrique francophone
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 text-yellow-400 mt-0.5">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 flex-1">
                                    Toucher 50 000 bénéficiaires d'ici 2030
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
