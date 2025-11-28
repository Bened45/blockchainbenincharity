import Header from "@/components/Header";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";
import Footer from "@/components/Footer";

import { reader } from "@/utils/reader";
import { BlogPost } from "@/components/BlogGrid";

export default async function BlogPage() {
    const posts = await reader.collections.posts.all();

    const formattedPosts: BlogPost[] = posts.map(post => ({
        id: post.slug,
        slug: post.slug,
        title: post.entry.title,
        excerpt: post.entry.excerpt,
        category: 'Actualités', // Default category as it's not in schema yet
        date: post.entry.publishedDate || new Date().toLocaleDateString(),
        readTime: '5 min', // Placeholder
        author: post.entry.author || 'Équipe BBC',
        imageUrl: post.entry.coverImage || '/blog/default.jpg',
        tags: [], // Default empty tags
    }));

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <BlogHero />
            <BlogGrid posts={formattedPosts} />
            <Footer />
        </div>
    );
}
