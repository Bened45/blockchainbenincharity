'use client';

import { useState } from 'react';

export default function BlogHero() {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        'Tous les articles',
        'Annonces',
        'Mises à jour',
        'Résultats & Célébrations',
        'Événements',
        'Histoires inspirantes',
        'Éducation',
        'Remerciements'
    ];

    return (
        <section className="bg-white pt-32 pb-12 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher un article..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400 transition-all"
                        />
                        <svg className="w-6 h-6 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${index === 0
                                    ? 'bg-blue-900 text-white border-blue-900 shadow-md'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-blue-700 hover:bg-blue-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
