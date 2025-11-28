'use client';

import { partners } from '@/data/partners';

export default function Partners() {

    return (
        <section className="py-16 bg-white border-t border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 mb-4">
                        <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">Ils nous font confiance</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nos Partenaires</h2>
                </div>

                {/* Partners logos - scrolling animation */}
                <div className="relative overflow-hidden">
                    {/* Gradient overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Scrolling container */}
                    <div className="flex animate-scroll">
                        {/* First set of logos */}
                        {partners.map((partner, index) => (
                            <div
                                key={`partner-1-${index}`}
                                className="flex-shrink-0 mx-8 flex items-center justify-center"
                                style={{ width: '180px', height: '80px' }}
                            >
                                <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors duration-200">
                                    {partner.logo}
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, index) => (
                            <div
                                key={`partner-2-${index}`}
                                className="flex-shrink-0 mx-8 flex items-center justify-center"
                                style={{ width: '180px', height: '80px' }}
                            >
                                <div className="text-2xl font-bold text-slate-400 hover:text-slate-600 transition-colors duration-200">
                                    {partner.logo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: Add custom animation in globals.css */}
                <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
            </div>
        </section>
    );
}
