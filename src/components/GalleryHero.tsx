interface GalleryHeroProps {
    eventCount: number;
    photoCount: number;
    videoCount: number;
}

export default function GalleryHero({ eventCount, photoCount, videoCount }: GalleryHeroProps) {
    return (
        <section className="relative py-24 bg-green-600 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-green-600/90 z-10" />
                <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-50" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Galerie d'événements</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Nos Événements en Images
                </h1>

                {/* Description */}
                <p className="text-lg text-green-50 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Découvrez la réalité du terrain à travers nos événements. Chaque événement contient photos et vidéos témoignant de notre impact.
                </p>

                {/* Stats Badges */}
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                        {eventCount} Événements
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                        {photoCount} Photos
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
                        {videoCount} Vidéos
                    </div>
                </div>
            </div>
        </section>
    );
}
