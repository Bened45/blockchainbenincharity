import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    imageUrl: string;
    tags: string[];
    slug: string;
}

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    // Hardcoded posts removed


    const recentPosts = posts.slice(0, 3);
    const popularTags = [
        '#éducation', '#technologie', '#enfance', '#eau',
        '#parakou', '#urgence', '#inondations', '#bohicon',
        '#aide humanitaire', '#noël', '#événement', '#cotonou'
    ];

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            'Annonces': 'bg-blue-600',
            'Événements': 'bg-red-600',
            'Mises à jour': 'bg-green-600',
        };
        return colors[category] || 'bg-slate-600';
    };

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Blog Posts */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
                                {/* Image */}
                                <div className="relative h-48 bg-slate-200 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 hover:scale-105 transition-transform duration-500" />
                                    <span className={`absolute top-4 left-4 ${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                                        {post.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-medium rounded border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">
                                                {post.author.charAt(0)}
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">{post.author}</span>
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                            Lire plus
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Newsletter Widget */}
                        <div className="bg-green-600 rounded-2xl p-8 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Newsletter</h3>
                            </div>
                            <p className="text-green-50 mb-6 text-sm leading-relaxed">
                                Restez informé de nos actualités et projets. Recevez nos histoires inspirantes directement dans votre boîte mail.
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
                                />
                                <button type="submit" className="w-full bg-white text-green-700 font-bold py-3 rounded-lg hover:bg-green-50 transition-colors shadow-sm">
                                    S'abonner
                                </button>
                            </form>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2 mb-6">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <h3 className="text-lg font-bold text-slate-900">Articles récents</h3>
                            </div>
                            <div className="space-y-6">
                                {recentPosts.map((post) => (
                                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                                        <div className="w-20 h-20 rounded-lg bg-slate-200 flex-shrink-0 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-slate-500">{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${post.category === 'Annonces' ? 'text-blue-600 border-blue-200 bg-blue-50' :
                                                    post.category === 'Événements' ? 'text-red-600 border-red-200 bg-red-50' :
                                                        'text-green-600 border-green-200 bg-green-50'
                                                    }`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Tags Widget */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2 mb-6">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                                <h3 className="text-lg font-bold text-slate-900">Tags populaires</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag, index) => (
                                    <button key={index} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg border border-slate-200 hover:border-green-300 hover:text-green-700 hover:bg-green-50 transition-all">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Donation CTA Widget */}
                        <div className="bg-blue-900 rounded-2xl p-8 text-center text-white shadow-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 transition-transform group-hover:scale-150 duration-700" />

                            <h3 className="text-xl font-bold mb-3 relative z-10">Soutenez nos actions</h3>
                            <p className="text-blue-100 text-sm mb-6 relative z-10">
                                Chaque don fait une différence dans la vie de nos bénéficiaires
                            </p>
                            <Link href="/don" className="inline-block w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg relative z-10">
                                Faire un don
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
