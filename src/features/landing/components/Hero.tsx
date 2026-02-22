"use client";

import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C9A84C\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-[2px] w-8 bg-gold"></div>
                            <span className="text-[0.7rem] font-black tracking-[0.3em] uppercase text-gold">
                                Sistema C9-AI · Equipo Corona
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                            El MLM cambió.<br />
                            Los que no se<br />
                            adaptan quedan<br />
                            <span className="text-gold relative inline-block">
                                atrás.
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gold/30 rounded-full"></div>
                            </span>
                        </h1>

                        <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                            Willy Tirado dirige el único sistema en HGW que combina
                            <span className="text-white font-bold"> Inteligencia Artificial</span>, prospección automática y el
                            Plan de Ganancia Mutua para construir equipos de alto nivel a escala global.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="https://api.whatsapp.com/send?phone=18094789071" target="_blank" className="btn-gold group flex items-center gap-3">
                                <span>⚡ Quiero mi posición</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>

                            <Link href="#sistema" className="px-8 py-4 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-colors">
                                Ver el Sistema C9-AI
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative glass p-4 rounded-3xl animate-float">
                            <Image
                                src="https://sspark.genspark.ai/cfimages?u1=ColBnmXBWW9zSJb6d9mqal3y%2Fh9e00%2FFJo1eurbB9o95nW7iv47krwuIbDf21vA0I7XYfT%2BYty%2F6FWfscqvukSt75tRMlnWFVYcZy%2FFtkH7ra28O%2FrzHEJXJWkVWF61Dkoo90BMrSqwLOljB6aGrNGfTpYjAPH0R&u2=seBYzqmkDHpsRgqW&width=1024"
                                alt="Willy Tirado"
                                width={800}
                                height={1000}
                                className="rounded-2xl border border-white/10 shadow-premium"
                                priority
                            />

                            {/* Floating Badges */}
                            <div className="absolute -top-6 -left-6 glass p-4 rounded-2xl flex items-center gap-4 shadow-gold animate-bounce">
                                <span className="text-2xl">🤖</span>
                                <div>
                                    <div className="text-sm font-black">IA Activa</div>
                                    <div className="text-[0.65rem] text-white/50 uppercase tracking-wider">Prospección 24/7</div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                                <span className="text-2xl">👑</span>
                                <div>
                                    <div className="text-sm font-black">Equipo Corona</div>
                                    <div className="text-[0.65rem] text-white/50 uppercase tracking-wider">5 cupos / mes</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
