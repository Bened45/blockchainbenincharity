import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';

import { events } from '@/data/events';

// Remove local interface and events array

export default function Events() {
    // Filtrer les événements passés et trier par date décroissante
    const pastEvents = events
        .filter(event => event.category === 'Réalisé') // Uniquement les événements réalisés
        .sort((a, b) => {
            // Tri par date (les plus récents en premier)
            // Note: Pour un tri précis, il faudrait des vraies dates. Ici on suppose que l'ordre dans le tableau est chronologique
            return events.indexOf(b) - events.indexOf(a);
        })
        .slice(0, 3); // Prendre les 3 premiers

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <AnimateOnScroll animationName="animate-fade-in-down">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-4">
                            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-yellow-800">Nos Actions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Derniers Événements</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Découvrez nos 3 actions les plus récentes sur le terrain
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Events grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {pastEvents.map((event, index) => (
                        <AnimateOnScroll key={event.id} delay={200 + index * 100}>
                            <div
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 h-full"
                            >
                                {/* Event image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Category badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1.5 ${event.categoryColor} text-white rounded-full text-xs font-semibold shadow-lg`}>
                                        {event.category}
                                    </div>
                                </div>

                                {/* Event content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                    <p className="text-sm text-slate-600 mb-4">{event.description}</p>

                                    {/* Meta info */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* View gallery button */}
                <AnimateOnScroll>
                    <div className="text-center">
                        <Link
                            href="/galerie"
                            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Voir notre galerie
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
