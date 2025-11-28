import Header from "@/components/Header";
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <GalleryHero />
            <GalleryGrid />
            <Footer />
        </div>
    );
}
