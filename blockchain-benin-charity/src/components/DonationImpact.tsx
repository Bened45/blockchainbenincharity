import Image from 'next/image';

export default function DonationImpact() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Impact concret
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Pourquoi donner à Blockchain BENIN Charity ?
                        </h2>

                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>
                                Depuis notre création, nous avons aidé plus de <strong className="text-slate-900">5 000 personnes</strong> au Bénin grâce à la générosité de donateurs comme vous. Chaque contribution, petite ou grande, a un impact mesurable et transparent.
                            </p>
                            <p>
                                Grâce à la <strong className="text-slate-900">technologie blockchain</strong>, vous pouvez suivre en temps réel l'utilisation de votre don. Aucun intermédiaire, aucune zone d'ombre : <strong className="text-slate-900">100% de transparence</strong> pour 100% d'impact.
                            </p>
                            <p>
                                Rejoignez notre communauté de <strong className="text-slate-900">donateurs engagés</strong> et participez à la construction d'un Bénin plus solidaire, éduqué et prospère.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 mt-12">
                            <div>
                                <p className="text-4xl font-bold text-green-500 mb-1">5K+</p>
                                <p className="text-sm text-slate-500 font-medium">Bénéficiaires</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-blue-500 mb-1">150+</p>
                                <p className="text-sm text-slate-500 font-medium">Projets réalisés</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-yellow-500 mb-1">100%</p>
                                <p className="text-sm text-slate-500 font-medium">Transparence</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 bg-slate-200" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            {/* Quote Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <p className="text-lg font-medium italic mb-4">
                                    "Grâce à BBC, j'ai reçu un kit scolaire complet et je peux maintenant étudier dans de bonnes conditions."
                                </p>
                                <div className="flex items-center gap-2 text-sm text-yellow-400 font-bold">
                                    <span>- Marie, 12 ans, Porto-Novo</span>
                                </div>
                            </div>

                            {/* Badge Top Right */}
                            <div className="absolute top-6 right-6 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                <span>🏆</span> ONG de l'année 2024
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10 opacity-50" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10 opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
