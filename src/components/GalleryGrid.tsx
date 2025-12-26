import GalleryGridClient from './GalleryGridClient';
import { reader } from '@/utils/reader';
import fs from 'fs';
import path from 'path';

export default async function GalleryGrid() {
    const galleryItems = await reader.collections.gallery.all();

    const events = galleryItems.map(item => {
        let folderPhotoCount = 0;
        if (item.entry.folderPath) {
            const folderDir = path.join(process.cwd(), 'public/images/gallery/content', item.entry.folderPath);
            try {
                if (fs.existsSync(folderDir)) {
                    const files = fs.readdirSync(folderDir);
                    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];
                    folderPhotoCount = files.filter(file => imageExtensions.includes(path.extname(file).toLowerCase())).length;
                }
            } catch (error) {
                console.error(`Error counting images in ${folderDir}:`, error);
            }
        }

        return {
            id: item.slug,
            title: item.entry.title || 'Sans titre',
            category: item.entry.category,
            description: item.entry.description,
            date: item.entry.date ? new Date(item.entry.date).getFullYear().toString() : 'N/A',
            location: item.entry.location || 'Bénin',
            beneficiaries: item.entry.beneficiaries || 0,
            photoCount: (item.entry.images?.length || 0) + (item.entry.coverImage ? 1 : 0) + folderPhotoCount,
            videoCount: item.entry.videos?.length || 0,
            imageUrl: item.entry.coverImage || '/images/gallery/default.jpg',
        };
    });

    return <GalleryGridClient initialEvents={events} />;
}
