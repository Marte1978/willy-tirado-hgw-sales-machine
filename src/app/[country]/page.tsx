import { notFound } from "next/navigation";
import Link from "next/link";
import { COUNTRIES, COUNTRY_CODES } from "@/lib/countries";
import { LeadFormClient } from "@/features/landing/components/LeadFormClient";
import { AIChatWidget } from "@/features/ai-chat/components/AIChatWidget";

export async function generateStaticParams() {
    return COUNTRY_CODES.map((code) => ({ country: code }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
    const { country } = await params;
    const config = COUNTRIES[country];
    if (!config) return {};
    return {
        title: `HGW ${config.name} — ${config.headline}`,
        description: config.subheadline,
        openGraph: { title: `HGW ${config.name}`, description: config.subheadline },
    };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
    const { country } = await params;
    const config = COUNTRIES[country];
    if (!config) notFound();

    return (
        <main className="min-h-screen bg-white">
            {/* Navbar */}
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
                    <div className="flex items-center gap-3">
                        <span className="text-xl">{config.flag}</span>
                        <Link href={config.whatsapp} target="_blank"
                            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all">
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                        {config.flag} {config.name}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        {config.headline}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {config.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a href="#form"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-lg">
                            Quiero información gratis
                        </a>
                        <Link href={config.whatsapp} target="_blank"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-2xl border border-white/20 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.844L.057 23.882l6.184-1.622A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-4.994-1.368l-.358-.212-3.714.974.992-3.624-.233-.373A9.79 9.79 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818s9.818 4.4 9.818 9.818-4.4 9.818-9.818 9.818z" />
                            </svg>
                            WhatsApp directo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-4">
                        Por qué {config.name} elige <span className="text-emerald-600">HGW</span>
                    </h2>
                    <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
                        Más de 20 países. Miles de familias transformadas. Un sistema probado.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🌿",
                                title: "Productos de Bienestar",
                                desc: "Línea completa: turmalina, café funcional con ganoderma, suplementos y cuidado personal. Calidad certificada internacionalmente.",
                            },
                            {
                                icon: "🤖",
                                title: "Sistema C9-AI",
                                desc: "9 módulos de inteligencia artificial que potencian tu negocio. Automatización, análisis de equipo y crecimiento sin límites.",
                            },
                            {
                                icon: "🌎",
                                title: "20+ Países Activos",
                                desc: `HGW opera en más de 20 mercados. Tu red crece desde ${config.name} hacia toda Latinoamérica y el mundo.`,
                            },
                        ].map((item) => (
                            <div key={item.title}
                                className="p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl transition-all text-center space-y-4 group">
                                <div className="text-5xl">{item.icon}</div>
                                <h3 className="font-black text-xl text-slate-900">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <section className="py-10 bg-emerald-600">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid grid-cols-3 gap-6 text-center text-white">
                        {[
                            { value: "20+", label: "Países activos" },
                            { value: "C9-AI", label: "Módulos IA" },
                            { value: "Pierna", label: "Ganancia mutua" },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="text-3xl md:text-4xl font-black">{s.value}</div>
                                <div className="text-emerald-100 text-sm font-medium mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Willy */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-6xl flex-shrink-0 shadow-xl">
                            👑
                        </div>
                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wide">
                                Tu Mentor
                            </div>
                            <h2 className="text-3xl font-black text-slate-900">
                                Willy Tirado
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Empresario digital dominicano, fundador de WebFactory y líder Corona HGW. Con presencia en más de 12 países, Willy combina tecnología, visión de negocio y pasión por el bienestar para crear sistemas que generan resultados reales para su equipo.
                            </p>
                            <Link href={config.whatsapp} target="_blank"
                                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                                Hablar directamente con Willy →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form */}
            <section className="py-20 bg-slate-900" id="form">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="text-center space-y-3 mb-10">
                        <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wide border border-emerald-500/30">
                            Acceso gratuito
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            Solicita tu información personalizada
                        </h2>
                        <p className="text-slate-400">
                            Cuéntanos sobre ti y te contactamos con información específica para {config.name}
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <LeadFormClient
                            country={config.name}
                            countryCode={country}
                            whatsapp={config.whatsapp}
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-slate-500 text-sm mb-3">O escríbenos directamente:</p>
                        <Link href={config.whatsapp} target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all text-sm">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.844L.057 23.882l6.184-1.622A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-4.994-1.368l-.358-.212-3.714.974.992-3.624-.233-.373A9.79 9.79 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818s9.818 4.4 9.818 9.818-4.4 9.818-9.818 9.818z" />
                            </svg>
                            WhatsApp directo — {config.name}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Blog CTA */}
            <section className="py-14 bg-emerald-50 border-t border-emerald-100">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-5">
                    <h2 className="text-2xl font-black text-slate-900">
                        Aprende sobre Salud y Bienestar
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Publicamos 3 artículos diarios sobre los productos HGW, tendencias de salud y estrategias de emprendimiento.
                    </p>
                    <Link href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all">
                        Leer el Blog de Bienestar →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2026 Willy Tirado · Sistema HGW Pro · {config.flag} {config.name}</p>
                <p className="mt-1 text-slate-600 text-xs">hgw.webfactoryrd.com · Powered by WebFactory</p>
            </footer>

            <AIChatWidget />
        </main>
    );
}
