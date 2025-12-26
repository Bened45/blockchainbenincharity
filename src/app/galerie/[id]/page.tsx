import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reader } from "@/utils/reader";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const dynamic = 'force-static';

export async function generateStaticParams() {
    const albums = await reader.collections.gallery.list();
    return albums.map((id) => ({
        id,
    }));
}

export default async function GalleryDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const album = await reader.collections.gallery.read(id);

    if (!album) {
        notFound();
    }

    // 1. Manual images from Keystatic
    const manualImages = album.images?.map(img => ({
        url: img.image,
        caption: img.caption
    })) || [];

    // 2. Automatic images from folder scanning
    let folderImages: { url: string; caption: string }[] = [];
    if (album.folderPath) {
        const folderDir = path.join(process.cwd(), 'public/images/gallery/content', album.folderPath);

        try {
            if (fs.existsSync(folderDir)) {
                const files = fs.readdirSync(folderDir);
                const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];

                folderImages = files
                    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
                    .map(file => ({
                        url: `/images/gallery/content/${album.folderPath}/${file}`,
                        caption: '' // No caption for bulk images unless we use filenames
                    }));
            }
        } catch (error) {
            console.error(`Error reading gallery folder ${folderDir}:`, error);
        }
    }

    const allImages = [
        ...(album.coverImage ? [{ url: album.coverImage, caption: 'Couverture' }] : []),
        ...manualImages,
        ...folderImages
    ].filter(img => img.url);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-8 text-sm font-medium text-slate-500">
                        <Link href="/galerie" className="hover:text-green-600 transition-colors">Galerie</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 truncate">{album.title}</span>
                    </nav>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {album.category}
                            </span>
                            <span className="text-slate-500 text-sm flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {album.date ? new Date(album.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                            </span>
                            <span className="text-slate-500 text-sm flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {album.location || 'Bénin'}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{album.title}</h1>
                        <p className="text-slate-600 max-w-3xl whitespace-pre-wrap">{album.description}</p>
                    </div>

                    {/* Photos Grid */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Photos ({allImages.length})
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allImages.map((img, index) => (
                                <div key={index} className="group relative aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                    <Image
                                        src={img.url || ""}
                                        alt={(img.caption || album.title) || ""}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {img.caption && (
                                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-white text-sm font-medium">{img.caption}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Videos Section */}
                    {album.videos && album.videos.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Vidéos ({album.videos.length})
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {album.videos.map((video, index) => {
                                    // Basic YouTube URL to Embed conversion
                                    let embedUrl = video.url;
                                    if (video.url?.includes('youtube.com/watch?v=')) {
                                        embedUrl = video.url.replace('watch?v=', 'embed/');
                                    } else if (video.url?.includes('youtu.be/')) {
                                        embedUrl = video.url.replace('youtu.be/', 'youtube.com/embed/');
                                    }

                                    return (
                                        <div key={index} className="space-y-3">
                                            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                                                <iframe
                                                    src={embedUrl || ""}
                                                    title={video.title || `Vidéo ${index + 1}`}
                                                    className="w-full h-full"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                            {video.title && (
                                                <p className="font-bold text-slate-800">{video.title}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
