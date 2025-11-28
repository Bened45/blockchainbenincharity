import Link from 'next/link';
import Image from 'next/image';

interface ProjectDetailHeroProps {
    title: string;
    category: string;
    status: string;
    location: string;
    daysRemaining: number;
    contributors: number;
    imageUrl?: string;
}

export default function ProjectDetailHero({
    title,
    category,
    status,
    location,
    daysRemaining,
    contributors,
    imageUrl = '/projects/project-hero.jpg',
}: ProjectDetailHeroProps) {
    const getCategoryColor = (cat: string) => {
        const colors: Record<string, string> = {
            'Éducation': 'bg-blue-500',
            'Santé': 'bg-red-500',
            'Environnement': 'bg-green-500',
            'Aide alimentaire': 'bg-yellow-500',
        };
        return colors[cat] || 'bg-gray-500';
    };

    const getStatusColor = (stat: string) => {
        const colors: Record<string, string> = {
            'Urgent': 'bg-red-500',
            'Actif': 'bg-blue-500',
            'En cours': 'bg-green-500',
        };
        return colors[stat] || 'bg-gray-500';
    };

    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-end">
            {/* Background Image */}
            <div className="absolute inset-0 bg-slate-900">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                    <svg className="w-32 h-32 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                </div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    {/* Back button */}
                    <Link
                        href="/projets"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm font-medium">Retour aux projets</span>
                    </Link>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className={`${getCategoryColor(category)} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                            {category}
                        </span>
                        <span className={`${getStatusColor(status)} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                            {status}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl">
                        {title}
                    </h1>

                    {/* Info bar */}
                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{daysRemaining} jours restants</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="font-medium">{contributors} contributeurs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
