import Header from "@/components/Header";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";
import { reader } from "@/utils/reader";
import fs from "fs";
import path from "path";

export default async function GalleryPage() {
    const galleryItems = await reader.collections.gallery.all();

    let totalPhotos = 0;
    let totalVideos = 0;

    galleryItems.forEach(item => {
        // Cover + manual images
        totalPhotos += (item.entry.images?.length || 0) + (item.entry.coverImage ? 1 : 0);

        // Folder images
        if (item.entry.folderPath) {
            const folderDir = path.join(process.cwd(), 'public/images/gallery/content', item.entry.folderPath);
            try {
                if (fs.existsSync(folderDir)) {
                    const files = fs.readdirSync(folderDir);
                    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];
                    totalPhotos += files.filter(file => imageExtensions.includes(path.extname(file).toLowerCase())).length;
                }
            } catch (error) {
                console.error(`Error reading gallery folder ${folderDir}:`, error);
            }
        }

        totalVideos += (item.entry.videos?.length || 0);
    });

    const stats = {
        eventCount: galleryItems.length,
        photoCount: totalPhotos,
        videoCount: totalVideos
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <GalleryHero {...stats} />
            <GalleryGrid />
            <Footer />
        </div>
    );
}
