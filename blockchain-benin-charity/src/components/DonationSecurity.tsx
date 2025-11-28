export default function DonationSecurity() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Votre confiance est notre priorité
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Sécurité & Transparence
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Nous garantissons la sécurité de vos dons et la transparence de leur utilisation
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Security Card */}
                    <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">
                            Paiements 100% sécurisés
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Certificat SSL, cryptage des données, conformité aux normes internationales de sécurité bancaire
                        </p>
                    </div>

                    {/* Blockchain Card */}
                    <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">
                            Tracé sur la blockchain
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Transparence totale : chaque transaction est enregistrée sur la blockchain et publiquement vérifiable
                        </p>
                    </div>

                    {/* Transparency Card */}
                    <div className="bg-yellow-50 rounded-2xl p-8 text-center border border-yellow-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-20 h-20 mx-auto bg-yellow-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4">
                            Rapports transparents
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Consultez nos rapports financiers trimestriels détaillant l'utilisation de chaque don reçu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
