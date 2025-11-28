'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

export interface Project {
    id: string; // Changed to string for CMS compatibility
    category: string;
    categoryIcon: string;
    categoryColor: string;
    title: string;
    description: string;
    image: string;
    raised: number;
    goal: number;
    currency: string;
    donors: number;
    daysLeft: number;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    // Helper to get category styles (since CMS only stores category name)
    const getCategoryStyles = (category: string) => {
        switch (category) {
            case 'Éducation': return { icon: '📚', color: 'bg-pink-100 text-pink-700' };
            case 'Inclusion numérique': return { icon: '💻', color: 'bg-blue-100 text-blue-700' };
            case 'Santé': return { icon: '⚕️', color: 'bg-cyan-100 text-cyan-700' };
            default: return { icon: '🌟', color: 'bg-green-100 text-green-700' };
        }
    };

    return (
        <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <AnimateOnScroll animationName="animate-fade-in-down">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-blue-800">Faites la différence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Projets en cours</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Soutenez nos initiatives et suivez l'impact en temps réel via la blockchain
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => {
                        const percentage = Math.round((project.raised / project.goal) * 100);
                        const style = getCategoryStyles(project.category);

                        return (
                            <AnimateOnScroll key={project.id} delay={200 + index * 100}>
                                <div
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full group border border-slate-100"
                                >
                                    {/* Project image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${style.color}`}>
                                                <span>{style.icon}</span>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project content */}
                                    <div className="p-6 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">{project.description}</p>

                                        {/* Progress section */}
                                        <div className="mb-4">
                                            {/* Progress bar */}
                                            <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden mb-2">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>

                                            {/* Stats */}
                                            <div className="flex justify-between items-center text-sm mb-1">
                                                <span className="font-semibold text-slate-900">
                                                    {project.raised}{project.currency} collectés
                                                </span>
                                                <span className="text-slate-600">{percentage}%</span>
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                Objectif: {project.goal}{project.currency}
                                            </div>
                                        </div>

                                        {/* Meta info */}
                                        <div className="flex items-center justify-between text-sm text-slate-600 mb-4 pb-4 border-b border-slate-100">
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                </svg>
                                                <span>{project.donors} donateurs</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                <span>{project.daysLeft} jours</span>
                                            </div>
                                        </div>

                                        {/* CTA button */}
                                        <Link
                                            href={`/projets/${project.id}`}
                                            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                                        >
                                            Contribuer maintenant
                                        </Link>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>

                {/* View all projects button */}
                <AnimateOnScroll>
                    <div className="text-center">
                        <Link
                            href="/projets"
                            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Découvrir nos projets
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
