'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProjectDetailContentProps {
    raised: number;
    goal: number;
    donors: number;
    daysRemaining: number;
    problem: string;
    solution: string;
    beneficiaries: string;
    duration: string;
    timeline: Array<{
        date: string;
        title: string;
    }>;
    budget: Array<{
        label: string;
        amount: string;
        percentage: number;
        color: string;
    }>;
}

export default function ProjectDetailContent({
    raised,
    goal,
    donors,
    daysRemaining,
    problem,
    solution,
    beneficiaries,
    duration,
    timeline,
    budget,
}: ProjectDetailContentProps) {
    const [activeTab, setActiveTab] = useState('contexte');
    const progress = Math.round((raised / goal) * 100);

    const tabs = [
        { id: 'contexte', label: 'Contexte' },
        { id: 'solution', label: 'Solution' },
        { id: 'impact', label: 'Impact' },
        { id: 'budget', label: 'Budget' },
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos du projet</h2>

                            {/* Tabs */}
                            <div className="flex gap-2 mb-8 border-b border-slate-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-3 font-semibold transition-all relative ${activeTab === tab.id
                                            ? 'text-blue-600'
                                            : 'text-slate-600 hover:text-slate-900'
                                            }`}
                                    >
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            {activeTab === 'contexte' && (
                                <div className="space-y-6">
                                    {/* Problem */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">Le problème</h3>
                                        </div>
                                        <p className="text-slate-700 leading-relaxed">{problem}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900">Notre solution</h3>
                                        </div>
                                        <p className="text-slate-700 leading-relaxed mb-6">{solution}</p>

                                        {/* Info Cards */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="border-2 border-blue-200 rounded-xl p-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-bold text-slate-900">Bénéficiaires</h4>
                                                </div>
                                                <p className="text-slate-700 text-sm leading-relaxed">{beneficiaries}</p>
                                            </div>

                                            <div className="border-2 border-yellow-200 rounded-xl p-6">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-bold text-slate-900">Durée</h4>
                                                </div>
                                                <p className="text-slate-700 text-sm leading-relaxed">{duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'solution' && (
                                <div className="space-y-6">
                                    {/* Description */}
                                    <p className="text-slate-700 leading-relaxed text-lg">
                                        {solution}
                                    </p>

                                    {/* Intervention Zone */}
                                    <div className="border-l-4 border-green-500 pl-6 py-4 bg-slate-50 rounded-r-xl">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">Zone d'intervention</h3>
                                        <p className="text-slate-700 mb-4">Cotonou, Bénin</p>

                                        {/* Map Placeholder */}
                                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center">
                                                    <svg className="w-16 h-16 mx-auto text-blue-600 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="text-sm text-slate-600 font-medium">Carte interactive - Zones d'intervention</p>
                                                </div>
                                            </div>
                                            {/* Decorative pins */}
                                            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-red-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }} />
                                            <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-red-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }} />
                                            <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-red-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.4s' }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'impact' && (
                                <div className="space-y-8">
                                    {/* Impact Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                                            <p className="text-6xl font-bold text-green-600 mb-3">500</p>
                                            <p className="text-lg font-bold text-slate-900 mb-2">Élèves soutenus</p>
                                            <p className="text-sm text-slate-600">Enfants ayant accès à des fournitures complètes</p>
                                        </div>

                                        <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                                            <p className="text-6xl font-bold text-green-600 mb-3">10</p>
                                            <p className="text-lg font-bold text-slate-900 mb-2">Écoles partenaires</p>
                                            <p className="text-sm text-slate-600">Établissements impliqués dans le projet</p>
                                        </div>

                                        <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                                            <p className="text-6xl font-bold text-green-600 mb-3">+35%</p>
                                            <p className="text-lg font-bold text-slate-900 mb-2">Taux de réussite attendu</p>
                                            <p className="text-sm text-slate-600">Amélioration des résultats scolaires</p>
                                        </div>

                                        <div className="bg-white border-2 border-green-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                                            <p className="text-6xl font-bold text-green-600 mb-3">500</p>
                                            <p className="text-lg font-bold text-slate-900 mb-2">Familles aidées</p>
                                            <p className="text-sm text-slate-600">Réduction de la charge financière</p>
                                        </div>
                                    </div>

                                    {/* Success Indicators */}
                                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                                        <div className="flex items-center gap-2 mb-6">
                                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <h3 className="text-xl font-bold text-slate-900">Indicateurs de succès</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-slate-700 font-medium">Taux de présence scolaire augmenté de 25%</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-slate-700 font-medium">Résultats scolaires améliorés de 35%</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-slate-700 font-medium">Satisfaction des familles &gt; 90%</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-slate-700 font-medium">Réduction du décrochage scolaire</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'budget' && (
                                <div className="space-y-8">
                                    <h3 className="text-xl font-bold text-slate-900">Répartition budgétaire</h3>

                                    <div className="space-y-6">
                                        {budget.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-end mb-2">
                                                    <span className="text-slate-700 font-medium">{item.label}</span>
                                                    <span className="text-slate-900 font-bold">
                                                        {item.amount} <span className="text-slate-500 text-sm font-normal">({item.percentage}%)</span>
                                                    </span>
                                                </div>
                                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${item.color}`}
                                                        style={{ width: `${item.percentage}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Transparency Box */}
                                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-blue-900 mb-1">Transparence garantie</h4>
                                            <p className="text-blue-800/80 text-sm leading-relaxed">
                                                Chaque transaction est enregistrée sur la blockchain. Vous recevrez des mises à jour régulières sur l'utilisation des fonds et l'avancement du projet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Timeline */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <div className="flex items-center gap-2 mb-6">
                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="text-2xl font-bold text-slate-900">Timeline du projet</h3>
                                </div>

                                <div className="space-y-6">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                {index < timeline.length - 1 && (
                                                    <div className="w-0.5 h-16 bg-slate-200" />
                                                )}
                                            </div>
                                            <div className="flex-1 pb-6">
                                                <p className="text-sm font-semibold text-blue-600 mb-1">{item.date}</p>
                                                <p className="text-slate-900 font-medium">{item.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Soutenir ce projet</h3>

                            {/* Progress */}
                            <div className="mb-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <p className="text-sm text-slate-600">Collecté</p>
                                    <p className="text-sm font-semibold text-blue-600">{progress}%</p>
                                </div>
                                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden mb-3">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">{raised}M FCFA</p>
                                <p className="text-sm text-slate-600">sur {goal}M FCFA</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                    <div>
                                        <p className="text-xl font-bold text-blue-600">{donors}</p>
                                        <p className="text-xs text-slate-600">Donateurs</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="text-xl font-bold text-red-600">-{daysRemaining}</p>
                                        <p className="text-xs text-slate-600">Jours restants</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/donate"
                                className="w-full block px-6 py-4 bg-yellow-400 text-slate-900 rounded-xl font-bold text-center hover:bg-yellow-500 transition-colors mb-4"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    Faire un don
                                </span>
                            </Link>

                            <p className="text-xs text-center text-slate-500 mb-6">
                                <span className="flex items-center justify-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    Paiement sécurisé - 100% blockchain
                                </span>
                            </p>

                            {/* Share */}
                            <div className="pt-6 border-t border-slate-200">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                    </svg>
                                    <p className="font-semibold text-slate-900">Partager</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 p-3 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                                        <svg className="w-5 h-5 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </button>
                                    <button className="flex-1 p-3 border-2 border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
                                        <svg className="w-5 h-5 mx-auto text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </button>
                                    <button className="flex-1 p-3 border-2 border-slate-200 rounded-lg hover:border-blue-700 hover:bg-blue-50 transition-colors">
                                        <svg className="w-5 h-5 mx-auto text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </button>
                                    <button className="flex-1 p-3 border-2 border-slate-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
                                        <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
