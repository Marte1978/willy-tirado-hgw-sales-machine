import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
    title: "Blog HGW — Salud, Bienestar y Emprendimiento",
    description: "Artículos diarios sobre productos HGW, consejos de salud, bienestar y estrategias de emprendimiento en Latinoamérica.",
};

const CATEGORY_COLORS: Record<string, string> = {
    "Salud y Bienestar": "bg-green-100 text-green-700",
    "Productos HGW": "bg-yellow-100 text-yellow-700",
    "Emprendimiento": "bg-blue-100 text-blue-700",
    "Sistema C9-AI": "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
    const articles = getAllArticles();

    return (
        <main className="min-h-screen bg-white">
            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
                    <Link href="/" className="font-black text-xl text-slate-900">
                        HGW <span className="text-yellow-500">Willy Tirado</span>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=18094789071" target="_blank"
                        className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm rounded-xl transition-all">
                        Unirme al Equipo
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
                <div className="container mx-auto px-6 max-w-3xl space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white">
                        Blog <span className="text-yellow-500">HGW</span>
                    </h1>
                    <p className="text-slate-300 text-lg">
                        Salud · Bienestar · Emprendimiento · Productos HGW
                    </p>
                    <p className="text-slate-400 text-sm">
                        3 artículos nuevos cada día
                    </p>
                </div>
            </section>

            {/* AdSense top */}
            <div className="container mx-auto px-6 max-w-5xl py-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">
                    {/* Google AdSense — ins tag here */}
                    Espacio publicitario
                </div>
            </div>

            {/* Articles grid */}
            <section className="container mx-auto px-6 max-w-5xl pb-20">
                {articles.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <p className="text-xl">Los artículos llegarán pronto...</p>
                        <p className="text-sm mt-2">Publicamos 3 artículos diarios sobre salud y bienestar</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                                <article className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                                    <div className="h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                                        <span className="text-5xl">
                                            {article.category === "Salud y Bienestar" ? "🌿" :
                                             article.category === "Productos HGW" ? "✨" :
                                             article.category === "Sistema C9-AI" ? "🤖" : "🚀"}
                                        </span>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${CATEGORY_COLORS[article.category] || "bg-slate-100 text-slate-600"}`}>
                                                {article.category}
                                            </span>
                                            <span className="text-xs text-slate-400">{article.readTime}</span>
                                        </div>
                                        <h2 className="font-black text-slate-900 text-lg leading-snug group-hover:text-yellow-600 transition-colors line-clamp-3">
                                            {article.title}
                                        </h2>
                                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                                            <span className="text-xs text-slate-400">{new Date(article.date + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</span>
                                            <span className="text-xs font-bold text-yellow-600">Leer →</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* AdSense bottom */}
            <div className="container mx-auto px-6 max-w-5xl pb-10">
                <div className="bg-slate-50 border border-slate-200 rounded-xl h-24 flex items-center justify-center text-slate-400 text-sm">
                    {/* Google AdSense — ins tag here */}
                    Espacio publicitario
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2026 Willy Tirado · HGW Blog · Powered by WebFactory</p>
            </footer>
        </main>
    );
}
