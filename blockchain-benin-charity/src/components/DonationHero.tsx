export default function DonationHero() {
    return (
        <section className="bg-green-600 pt-32 pb-20 relative overflow-hidden">
            {/* Top Bar - Progress */}
            <div className="absolute top-20 left-0 right-0 bg-blue-900 py-3 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-blue-100 mb-2">
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            </span>
                            <span className="font-bold">Objectif annuel 2025</span>
                        </div>
                        <span className="font-bold text-yellow-400">68% atteint</span>
                    </div>
                    <div className="w-full h-2 bg-blue-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs text-blue-300 mt-1">
                        <span>34.0M FCFA collectés (11 dons)</span>
                        <span>Objectif: 50.0M FCFA</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-12">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm font-medium">Chaque don compte • Transparence blockchain</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Transformer des vies avec la blockchain
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Votre générosité, tracée sur la blockchain pour une transparence totale. Ensemble, construisons un avenir meilleur pour le Bénin.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-2xl">
                            🎯
                        </div>
                        <span className="text-white text-sm font-medium">100% transparent</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">
                            ⚡
                        </div>
                        <span className="text-white text-sm font-medium">Impact immédiat</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">
                            🔒
                        </div>
                        <span className="text-white text-sm font-medium">Sécurisé</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
                            🌍
                        </div>
                        <span className="text-white text-sm font-medium">International</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
