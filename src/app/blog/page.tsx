import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { AIChatWidget } from "@/features/ai-chat/components/AIChatWidget";

export const metadata = {
    title: "Blog HGW — Salud, Bienestar y Emprendimiento | Willy Tirado",
    description: "Artículos diarios sobre productos HGW, consejos de salud, bienestar y estrategias de emprendimiento en Latinoamérica.",
};

const CATEGORY_STYLES: Record<string, { bg: string; text: string; icon: string }> = {
    "Salud y Bienestar":  { bg: "bg-emerald-100", text: "text-emerald-700", icon: "🌿" },
    "Productos HGW":      { bg: "bg-teal-100",    text: "text-teal-700",    icon: "✨" },
    "Emprendimiento":     { bg: "bg-blue-100",     text: "text-blue-700",    icon: "🚀" },
    "Sistema C9-AI":      { bg: "bg-purple-100",   text: "text-purple-700",  icon: "🤖" },
};

function defaultStyle() { return { bg: "bg-slate-100", text: "text-slate-600", icon: "📝" }; }

export default function BlogPage() {
    const articles = getAllArticles();

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
                    <Link href="https://api.whatsapp.com/send?phone=18094789071" target="_blank"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all">
                        Únete al Equipo
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <section className="py-16 bg-gradient-to-br from-slate-900 to-emerald-950 text-center">
                <div className="container mx-auto px-6 max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                        3 artículos nuevos cada día
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white">
                        Blog <span className="text-emerald-400">HGW</span>
                    </h1>
                    <p className="text-slate-300 text-lg">
                        Salud · Bienestar · Emprendimiento · Productos HGW
                    </p>
                </div>
            </section>

            {/* AdSense top */}
            <div className="container mx-auto px-6 max-w-5xl py-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl h-20 flex items-center justify-center text-slate-400 text-xs font-medium">
                    {/* Google AdSense — activar con código ins aquí */}
                    Publicidad
                </div>
            </div>

            {/* Articles grid */}
            <section className="container mx-auto px-6 max-w-5xl pb-20">
                {articles.length === 0 ? (
                    <div className="text-center py-20 space-y-3">
                        <div className="text-5xl">🌿</div>
                        <p className="text-xl font-bold text-slate-700">Artículos llegando pronto...</p>
                        <p className="text-slate-500 text-sm">Publicamos 3 artículos diarios sobre salud y bienestar</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => {
                            const style = CATEGORY_STYLES[article.category] || defaultStyle();
                            return (
                                <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                                    <article className="border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                                        <div className="h-40 bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                                            <span className="text-5xl">{style.icon}</span>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col space-y-3">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${style.bg} ${style.text}`}>
                                                    {article.category}
                                                </span>
                                                <span className="text-xs text-slate-400 whitespace-nowrap">{article.readTime}</span>
                                            </div>
                                            <h2 className="font-black text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-3">
                                                {article.title}
                                            </h2>
                                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                                                <span className="text-xs text-slate-400">
                                                    {new Date(article.date + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                                                </span>
                                                <span className="text-xs font-bold text-emerald-600">Leer →</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* AdSense bottom */}
            <div className="container mx-auto px-6 max-w-5xl pb-10">
                <div className="bg-slate-50 border border-slate-200 rounded-xl h-20 flex items-center justify-center text-slate-400 text-xs font-medium">
                    {/* Google AdSense — activar con código ins aquí */}
                    Publicidad
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2026 Willy Tirado · Blog HGW · Sistema HGW Pro · Powered by WebFactory</p>
            </footer>

            <AIChatWidget />
        </main>
    );
}
