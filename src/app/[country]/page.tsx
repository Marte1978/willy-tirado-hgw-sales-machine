import { notFound } from "next/navigation";
import Link from "next/link";
import { COUNTRIES, COUNTRY_CODES } from "@/lib/countries";

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
        openGraph: {
            title: `HGW ${config.name}`,
            description: config.subheadline,
        },
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
                    <Link href="/" className="font-black text-xl text-slate-900">
                        HGW <span className="text-yellow-500">Willy Tirado</span>
                    </Link>
                    <span className="text-2xl">{config.flag}</span>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-yellow-900">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold">
                        {config.flag} {config.name}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        {config.headline}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {config.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href={config.whatsapp}
                            target="_blank"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.844L.057 23.882l6.184-1.622A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-4.994-1.368l-.358-.212-3.714.974.992-3.624-.233-.373A9.79 9.79 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818s9.818 4.4 9.818 9.818-4.4 9.818-9.818 9.818z" />
                            </svg>
                            {config.cta}
                        </Link>
                        <Link
                            href="/#qualify"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-2xl border border-white/20 transition-all"
                        >
                            Ver el Sistema HGW
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-12">
                        Por qué {config.name} elige <span className="text-yellow-500">HGW</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🌿",
                                title: "Productos de Bienestar",
                                desc: "Línea completa de salud: turmalina, café saludable, suplementos y más. Calidad certificada internacionalmente.",
                            },
                            {
                                icon: "🤖",
                                title: "Sistema C9-AI",
                                desc: "Tecnología de inteligencia artificial que potencia tu negocio. 9 módulos que trabajan para ti 24/7.",
                            },
                            {
                                icon: "🌎",
                                title: "Presencia en 20+ Países",
                                desc: "HGW opera en más de 20 mercados. Tu red no tiene fronteras — construye desde " + config.name + " para el mundo.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all text-center space-y-4">
                                <div className="text-5xl">{item.icon}</div>
                                <h3 className="font-black text-xl text-slate-900">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Willy */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-6xl flex-shrink-0 shadow-xl">
                            👑
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-slate-900">
                                Tu Mentor: <span className="text-yellow-500">Willy Tirado</span>
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Empresario digital dominicano con presencia en toda Latinoamérica. Fundador de WebFactory, líder Corona HGW y mentor de emprendedores en más de 12 países. Willy combina tecnología, visión de negocio y pasión por el bienestar para crear sistemas que generan resultados reales.
                            </p>
                            <Link
                                href={config.whatsapp}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
                            >
                                Contactar a Willy directamente →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form */}
            <section className="py-20 bg-slate-900" id="form">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="text-center space-y-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white">
                            Solicita Información Gratuita
                        </h2>
                        <p className="text-slate-400">
                            Willy o su equipo te contactará en menos de 24 horas
                        </p>
                    </div>
                    <LeadForm country={config.name} countryCode={country} whatsapp={config.whatsapp} />
                </div>
            </section>

            {/* Blog CTA */}
            <section className="py-16 bg-yellow-50 border-t border-yellow-100">
                <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <h2 className="text-2xl font-black text-slate-900">
                        Aprende sobre Salud, Bienestar y Emprendimiento
                    </h2>
                    <p className="text-slate-600">
                        Publicamos 3 artículos diarios con información sobre los productos HGW, tendencias de salud y estrategias de negocio.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all"
                    >
                        Leer el Blog →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-slate-900 text-center text-slate-500 text-sm">
                <p>© 2026 Willy Tirado · HGW {config.flag} {config.name} · Powered by WebFactory</p>
            </footer>
        </main>
    );
}

function LeadForm({ country, countryCode, whatsapp }: { country: string; countryCode: string; whatsapp: string }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
            <p className="text-slate-300 text-sm text-center mb-2">
                O escríbenos directamente por WhatsApp:
            </p>
            <Link
                href={whatsapp}
                target="_blank"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 hover:bg-green-400 text-white font-black text-lg rounded-2xl transition-all hover:scale-105"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.844L.057 23.882l6.184-1.622A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-4.994-1.368l-.358-.212-3.714.974.992-3.624-.233-.373A9.79 9.79 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818s9.818 4.4 9.818 9.818-4.4 9.818-9.818 9.818z" />
                </svg>
                Escribir por WhatsApp desde {country}
            </Link>
            <p className="text-slate-500 text-xs text-center mt-4">
                Al contactarnos aceptas nuestra política de privacidad. Sin spam, sin compromiso.
            </p>
        </div>
    );
}
