'use client';

import AnimateOnScroll from './AnimateOnScroll';

import CountUp from './CountUp';

export interface Stat {
    id: number;
    label: string;
    value: number;
    suffix?: string;
    decimals?: number;
    icon: string;
    iconBg: string;
    iconColor: string;
    accentColor: string;
}

interface ImpactProps {
    stats: Stat[];
}

export default function Impact({ stats }: ImpactProps) {
    return (
        <section className="relative py-20 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <AnimateOnScroll animationName="animate-fade-in-down">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-white">Notre impact</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Impact en chiffres</h2>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Des résultats concrets, vérifiables et tracés sur la blockchain
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <AnimateOnScroll
                            key={stat.id}
                            delay={200 + index * 100}
                            className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                                <span className="text-3xl">{stat.icon}</span>
                            </div>

                            {/* Value */}
                            <div className="text-center mb-2">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                                    <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                    {stat.id === 2 && <span className="text-lg font-normal text-slate-600 ml-1">FCFA</span>}
                                </h3>
                                <p className="text-sm text-slate-600">{stat.label}</p>
                            </div>

                            {/* Accent bar */}
                            <div className="w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: stat.accentColor?.replace('bg-', '') }}>
                                <div className={`h-full ${stat.accentColor} rounded-full`} />
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* Bottom badge */}
                <AnimateOnScroll>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-white">Données en temps réel</span>
                            </div>
                            <div className="w-px h-4 bg-white/30" />
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium text-white">100% transparent via blockchain</span>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
