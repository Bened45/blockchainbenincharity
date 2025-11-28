import { reader } from "@/utils/reader";
import { notFound } from "next/navigation";
import { DocumentRenderer } from '@keystatic/core/renderer';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
    const slugs = await reader.collections.posts.list();
    return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await reader.collections.posts.read(slug);

    if (!post) {
        notFound();
    }

    const content = await post.content();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-16">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                            <span>{post.publishedDate || new Date().toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{post.author || 'Équipe BBC'}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            {post.title}
                        </h1>
                        {post.coverImage && (
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-12">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate mx-auto prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl">
                        <DocumentRenderer document={content} />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
