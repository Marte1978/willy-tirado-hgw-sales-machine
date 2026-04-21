import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return {};
    return {
        title: `${article.title} | Blog HGW`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    const allArticles = getAllArticles().filter((a) => a.slug !== slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
                    <Link href="/" className="font-black text-xl text-slate-900">
                        HGW <span className="text-yellow-500">Willy Tirado</span>
                    </Link>
                    <Link href="/blog" className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors">
                        ← Blog
                    </Link>
                </div>
            </nav>

            {/* Article */}
            <article className="container mx-auto px-6 max-w-3xl py-16">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 font-bold rounded-full">
                        {article.category}
                    </span>
                    <span className="text-slate-400">{article.readTime} de lectura</span>
                    <span className="text-slate-400">
                        {new Date(article.date + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                    {article.title}
                </h1>

                <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-yellow-500 pl-6 mb-10">
                    {article.excerpt}
                </p>

                {/* AdSense mid */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm mb-10">
                    {/* Google AdSense — ins tag here */}
                    Espacio publicitario
                </div>

                {/* Content */}
                <div
                    className="article-content text-slate-700 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-yellow-900 rounded-3xl text-center space-y-4">
                    <h3 className="text-2xl font-black text-white">
                        ¿Te interesa saber más sobre HGW?
                    </h3>
                    <p className="text-slate-300">
                        Habla directamente con Willy Tirado y descubre cómo los productos y el sistema HGW pueden transformar tu vida.
                    </p>
                    <Link
                        href="https://api.whatsapp.com/send?phone=18094789071&text=Hola%20Willy%2C%20leí%20tu%20blog%20y%20quiero%20más%20información"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg rounded-2xl transition-all hover:scale-105"
                    >
                        Contactar a Willy por WhatsApp
                    </Link>
                </div>
            </article>

            {/* Related articles */}
            {allArticles.length > 0 && (
                <section className="bg-slate-50 py-16">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-2xl font-black text-slate-900 mb-8">Más artículos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {allArticles.map((related) => (
                                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all space-y-3">
                                    <span className="text-xs font-bold text-yellow-600">{related.category}</span>
                                    <h3 className="font-bold text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-3">
                                        {related.title}
                                    </h3>
                                    <span className="text-xs text-slate-400">Leer →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2026 Willy Tirado · HGW Blog · Powered by WebFactory</p>
            </footer>
        </main>
    );
}
