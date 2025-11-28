import Image from 'next/image';

interface ProjectGalleryProps {
    images?: string[];
}

export default function ProjectGallery({ images = [] }: ProjectGalleryProps) {
    // Default placeholder images if none provided
    const galleryImages = images.length > 0 ? images : [
        '/projects/gallery-1.jpg',
        '/projects/gallery-2.jpg',
    ];

    return (
        <section className="py-16 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 mb-8">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-bold text-slate-900">Galerie</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                        >
                            {/* Placeholder */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                                <svg className="w-16 h-16 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
