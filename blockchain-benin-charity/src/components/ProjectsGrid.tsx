'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
    id: string;
    title: string;
    description: string;
    location: string;
    category: string;
    status: string;
    raised: number;
    goal: number;
    donors: number;
    beneficiaries?: number;
    progress: number;
    image: string;
}

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    const [activeTab, setActiveTab] = useState('ongoing');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const ongoingProjects = projects.filter(p => p.status !== 'Terminé');
    const completedProjects = projects.filter(p => p.status === 'Terminé');

    const displayedProjects = activeTab === 'completed' ? completedProjects : ongoingProjects;

    const categories = [
        { id: 'all', label: 'Tous les projets', icon: '📊' },
        { id: 'education', label: 'Éducation', icon: '📚' },
        { id: 'health', label: 'Santé', icon: '❤️' },
        { id: 'environment', label: 'Environnement', icon: '🌿' },
        { id: 'food', label: 'Aide alimentaire', icon: '🍎' },
    ];

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            'Éducation': 'bg-blue-500',
            'Santé': 'bg-red-500',
            'Environnement': 'bg-green-500',
            'Aide alimentaire': 'bg-yellow-500',
        };
        return colors[category] || 'bg-gray-500';
    };

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            'Urgent': 'bg-red-500',
            'Actif': 'bg-blue-500',
            'En cours': 'bg-green-500',
        };
        return colors[status] || 'bg-gray-500';
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('ongoing')}
                        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base ${activeTab === 'ongoing'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                    >
                        Projets en cours
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base ${activeTab === 'completed'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                    >
                        Projets réalisés
                    </button>
                    <button
                        onClick={() => setActiveTab('impact')}
                        className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base ${activeTab === 'impact'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                            : 'bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                    >
                        Impact Créé
                    </button>
                </div>

                {/* Search bar */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher un projet..."
                            className="w-full px-6 py-4 pl-12 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Title for completed projects */}
                {activeTab === 'completed' && (
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Projets Réalisés avec Succès
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600">
                            Découvrez l'impact concret de vos dons et les témoignages de nos bénéficiaires
                        </p>
                    </div>
                )}

                {/* Filters - only show for ongoing projects */}
                {activeTab === 'ongoing' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        {/* Categories */}
                        <div>
                            <p className="text-sm font-semibold text-slate-700 mb-3">Catégories</p>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${selectedCategory === cat.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {cat.icon} {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Status & Progression */}
                        <div>
                            <p className="text-sm font-semibold text-slate-700 mb-3">Statut</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <button className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-green-100 text-green-700">
                                    Actif
                                </button>
                                <button className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 hover:bg-slate-100">
                                    Urgent
                                </button>
                                <button className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 hover:bg-slate-100">
                                    Normal
                                </button>
                            </div>
                            <p className="text-sm font-semibold text-slate-700 mb-3">Progression</p>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-green-100 text-green-700">
                                    Tous
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 hover:bg-slate-100">
                                    Presque atteint (&gt;70%)
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 hover:bg-slate-100">
                                    En cours (25-70%)
                                </button>
                                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 hover:bg-slate-100">
                                    Début (&lt;25%)
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Impact Tab Content */}
                {activeTab === 'impact' ? (
                    <div>
                        {/* Title */}
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                                Notre Impact Global
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600">
                                Des résultats concrets et mesurables grâce à votre générosité
                            </p>
                        </div>

                        {/* Global Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">89.5M</p>
                                <p className="text-white font-semibold text-sm sm:text-base">FCFA collectés</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">47</p>
                                <p className="text-white font-semibold text-sm sm:text-base">Projets réalisés</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">8,450</p>
                                <p className="text-white font-semibold text-sm sm:text-base">Bénéficiaires</p>
                            </div>
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-center shadow-lg">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-5xl font-bold text-white">892</p>
                                </div>
                                <p className="text-white font-semibold">donateurs</p>
                            </div>
                        </div>

                        {/* Impact by Category */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Impact par Catégorie</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-xl font-bold text-slate-900">Éducation</h4>
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                                        </svg>
                                    </div>
                                    <p className="text-4xl font-bold text-blue-600 mb-2">3 450</p>
                                    <p className="text-slate-600">élèves aidés</p>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-xl font-bold text-slate-900">Santé</h4>
                                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-4xl font-bold text-red-600 mb-2">2 890</p>
                                    <p className="text-slate-600">patients soignés</p>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-xl font-bold text-slate-900">Environnement</h4>
                                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-4xl font-bold text-green-600 mb-2">15 000</p>
                                    <p className="text-slate-600">arbres plantés</p>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-xl font-bold text-slate-900">Aide alimentaire</h4>
                                        <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-4xl font-bold text-yellow-600 mb-2">1 200</p>
                                    <p className="text-slate-600">familles soutenues</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Rejoignez le Mouvement
                            </h3>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Chaque contribution compte. Ensemble, nous pouvons faire encore plus !
                            </p>
                            <Link
                                href="/donate"
                                className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-lg"
                            >
                                Faire un don maintenant
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Results count */}
                        <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                            <span className="font-semibold">{displayedProjects.length} projets trouvés</span>
                        </p>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {displayedProjects.map((project) => (
                                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    {/* Image */}
                                    <div className="relative h-48 bg-slate-200">
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className={`${getCategoryColor(project.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                                {project.category}
                                            </span>
                                            {activeTab === 'completed' ? (
                                                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    Terminé
                                                </span>
                                            ) : (
                                                <span className={`${getStatusColor(project.status)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                                    {project.status}
                                                </span>
                                            )}
                                        </div>
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {project.location}
                                        </div>
                                        {/* Placeholder */}
                                        <div className="w-full h-full flex items-center justify-center bg-slate-300">
                                            <svg className="w-16 h-16 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{project.description}</p>

                                        {/* Progress or Stats */}
                                        {activeTab === 'completed' ? (
                                            <div className="mb-4">
                                                <div className="flex justify-between items-center mb-4">
                                                    <div>
                                                        <p className="text-sm text-slate-600">Montant collecté</p>
                                                        <p className="text-2xl font-bold text-green-600">{project.raised}M FCFA</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm text-slate-600">Bénéficiaires</p>
                                                        <p className="text-2xl font-bold text-blue-600">{(project as any).beneficiaries}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="mb-4">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="font-bold text-slate-900">{project.raised}M FCFA</span>
                                                    <span className="text-slate-600">sur {project.goal}M FCFA</span>
                                                </div>
                                                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-green-500 rounded-full transition-all duration-300"
                                                        style={{ width: `${project.progress}%` }}
                                                    />
                                                </div>
                                                <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                    </svg>
                                                    {(project as any).donors} donateurs
                                                </div>
                                            </div>
                                        )}

                                        {/* Actions */}
                                        {activeTab === 'completed' ? (
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/projets/${project.id}/rapport`}
                                                    className="flex-1 px-4 py-2.5 border-2 border-green-500 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition-colors text-sm flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                                    </svg>
                                                    Rapport final
                                                </Link>
                                                <button className="px-4 py-2.5 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex gap-2">
                                                <Link
                                                    href={`/projets/${project.id}`}
                                                    className="flex-1 px-4 py-2.5 bg-yellow-400 text-slate-900 rounded-xl font-bold text-center hover:bg-yellow-500 transition-colors text-sm"
                                                >
                                                    Faire maintenant
                                                </Link>
                                                <Link
                                                    href={`/projets/${project.id}`}
                                                    className="px-4 py-2.5 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 transition-colors text-sm flex items-center gap-1"
                                                >
                                                    En savoir plus
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
