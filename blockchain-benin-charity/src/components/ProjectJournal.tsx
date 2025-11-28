'use client';

import { useState } from 'react';
import Image from 'next/image';

interface JournalEntry {
    id: string;
    date: string;
    title: string;
    summary: string;
    content: React.ReactNode;
    isNew?: boolean;
    image?: string;
}

export default function ProjectJournal() {
    const [expandedId, setExpandedId] = useState<string | null>('entry-3');

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const entries: JournalEntry[] = [
        {
            id: 'entry-1',
            date: '2025-02-01',
            title: 'Merci pour votre soutien !',
            summary: '70% de l\'objectif atteint - préparation des kits en cours',
            isNew: true,
            content: (
                <div className="space-y-4 text-slate-700">
                    <p>Grâce à votre générosité, nous avons franchi une étape majeure !</p>
                    <p>Les équipes sont déjà sur le terrain pour préparer la logistique.</p>
                </div>
            ),
        },
        {
            id: 'entry-2',
            date: '2025-01-15',
            title: "Rencontre avec les directeurs d'écoles",
            summary: 'Finalisation de la liste des 500 bénéficiaires avec nos 10 écoles partenaires',
            content: (
                <div className="space-y-4 text-slate-700">
                    <p>Nous avons rencontré les directeurs des 10 écoles partenaires pour valider les listes finales.</p>
                </div>
            ),
        },
        {
            id: 'entry-3',
            date: '2024-12-20',
            title: 'Lancement officiel du projet',
            summary: 'Présentation publique du projet Kits Scolaires 2025 à la Mairie de Cotonou',
            image: '/projects/journal-launch.jpg',
            content: (
                <div className="space-y-6 text-slate-700">
                    <p>C'est avec une grande fierté que nous avons lancé officiellement ce projet en présence des autorités locales et de nos partenaires ! 🚀</p>

                    <div>
                        <p className="font-semibold mb-2">Événement de lancement :</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span>🎤</span> Discours du Maire de Cotonou soutenant l'initiative
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📊</span> Présentation des objectifs et du plan d'action
                            </li>
                            <li className="flex items-center gap-2">
                                <span>🤝</span> Annonce des partenariats avec 10 écoles primaires
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📸</span> Rencontre avec les premiers donateurs
                            </li>
                        </ul>
                    </div>

                    <p>L'événement a été couvert par les médias locaux et a suscité un élan de solidarité immédiat. Plusieurs entreprises béninoises ont déjà manifesté leur intérêt pour soutenir le projet.</p>

                    <p>Notre objectif : transformer la rentrée scolaire 2025 en une expérience positive pour 500 enfants de familles défavorisées. Ensemble, nous y arriverons !</p>
                </div>
            ),
        },
    ];

    return (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-slate-900">Journal du Projet</h2>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                        {entries.length} articles
                    </span>
                </div>

                <div className="space-y-4">
                    {entries.map((entry) => (
                        <div
                            key={entry.id}
                            className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${expandedId === entry.id ? 'border-green-500 shadow-lg ring-1 ring-green-500' : 'border-slate-200 hover:border-green-300'
                                }`}
                        >
                            <div
                                onClick={() => toggleExpand(entry.id)}
                                className="p-6 cursor-pointer"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1 text-slate-400 text-xs font-medium">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {entry.date}
                                            </div>
                                            {entry.isNew && (
                                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded border border-green-200">
                                                    Nouveau
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                            {entry.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm">
                                            {entry.summary}
                                        </p>
                                    </div>

                                    <button
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedId === entry.id
                                                ? 'bg-blue-600 text-white rotate-180'
                                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                            }`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>

                                {expandedId === entry.id && (
                                    <div className="mt-2">
                                        <button className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:text-blue-700">
                                            Masquer le déroulement
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                )}

                                {expandedId !== entry.id && (
                                    <div className="mt-4">
                                        <button className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:text-blue-700">
                                            Lire le déroulement complet
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {expandedId === entry.id && (
                                <div className="px-6 pb-6 animate-fadeIn">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-px flex-1 bg-slate-100"></div>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Déroulement détaillé</span>
                                        <div className="h-px flex-1 bg-slate-100"></div>
                                    </div>

                                    {entry.content}

                                    {entry.image && (
                                        <div className="mt-6 rounded-xl overflow-hidden shadow-sm">
                                            {/* Placeholder for image since we don't have real files yet */}
                                            <div className="w-full aspect-video bg-slate-200 flex items-center justify-center relative">
                                                {/* In a real app, use next/image here */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                                    <p className="text-white font-medium text-sm">Lancement officiel à la mairie</p>
                                                </div>
                                                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                        <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            J'aime
                                        </button>

                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                                Partager
                                            </button>
                                            <span>Publié le {entry.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
