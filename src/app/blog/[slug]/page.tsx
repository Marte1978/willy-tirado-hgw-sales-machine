import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { AIChatWidget } from "@/features/ai-chat/components/AIChatWidget";

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
        openGraph: { title: article.title, description: article.excerpt },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    const related = getAllArticles().filter((a) => a.slug !== slug).slice(0, 3);

    const CATEGORY_STYLES: Record<string, string> = {
        "Salud y Bienestar": "bg-emerald-100 text-emerald-700",
        "Productos HGW":     "bg-teal-100 text-teal-700",
        "Emprendimiento":    "bg-blue-100 text-blue-700",
        "Sistema C9-AI":     "bg-purple-100 text-purple-700",
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-xs">HGW</span>
                        </div>
                        <div>
                            <span className="font-black text-slate-900 text-lg leading-none block">Willy Tirado</span>
                            <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Sistema HGW Pro</span>
                        </div>
                    </Link>
                    <Link href="/blog" className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors flex items-center gap-1">
                        ← Blog
                    </Link>
                </div>
            </nav>

            {/* Article hero */}
            <div className="bg-gradient-to-br from-slate-900 to-emerald-950 py-14">
                <div className="container mx-auto px-6 max-w-3xl space-y-5">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className={`px-3 py-1 font-bold rounded-full ${CATEGORY_STYLES[article.category] || "bg-slate-100 text-slate-600"}`}>
                            {article.category}
                        </span>
                        <span className="text-slate-400">{article.readTime} de lectura</span>
                        <span className="text-slate-500">
                            {new Date(article.date + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                        {article.title}
                    </h1>
                    <p className="text-slate-300 text-lg leading-relaxed border-l-4 border-emerald-500 pl-5">
                        {article.excerpt}
                    </p>
                </div>
            </div>

            {/* Article */}
            <article className="container mx-auto px-6 max-w-3xl py-12">

                {/* AdSense mid */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl h-20 flex items-center justify-center text-slate-400 text-xs font-medium mb-10">
                    {/* Google AdSense — activar con código ins aquí */}
                    Publicidad
                </div>

                {/* Content */}
                <div
                    className="article-content text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* CTA */}
                <div className="mt-14 p-8 bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wide">
                        Sistema HGW Pro
                    </div>
                    <h3 className="text-2xl font-black text-white">
                        ¿Te interesa conocer más sobre HGW?
                    </h3>
                    <p className="text-slate-300 max-w-lg mx-auto">
                        Habla directamente con Willy Tirado y descubre cómo los productos y el sistema HGW pueden transformar tu vida.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/#form"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl transition-all hover:scale-105">
                            Solicitar información gratis
                        </Link>
                        <Link
                            href="https://api.whatsapp.com/send?phone=18094789071&text=Hola%20Willy%2C%20leí%20tu%20blog%20y%20quiero%20más%20información"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-2xl border border-white/20 transition-all">
                            WhatsApp directo
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related articles */}
            {related.length > 0 && (
                <section className="bg-slate-50 py-14">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-xl font-black text-slate-900 mb-7">Más artículos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {related.map((rel) => (
                                <Link key={rel.slug} href={`/blog/${rel.slug}`}
                                    className="group block bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-emerald-100 transition-all space-y-3">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${CATEGORY_STYLES[rel.category] || "bg-slate-100 text-slate-600"}`}>
                                        {rel.category}
                                    </span>
                                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-3 text-sm leading-snug mt-2">
                                        {rel.title}
                                    </h3>
                                    <span className="text-xs font-bold text-emerald-600">Leer →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2026 Willy Tirado · Blog HGW · Sistema HGW Pro · Powered by WebFactory</p>
            </footer>

            <AIChatWidget />
        </main>
    );
}
