"use client";

import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full"></div>
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 glass-gold px-4 py-2 rounded-full transform transition-all hover:scale-105 cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                        </span>
                        <span className="text-[0.6rem] font-black tracking-[0.3em] uppercase text-gold">
                            Sistema C9-AI · Equipo Corona
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-6xl md:text-8xl font-black leading-[1] tracking-tighter text-white">
                        El MLM evolucionó.<br />
                        <span className="text-gradient">Lidera el Futuro.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto font-medium">
                        Willy Tirado orquesta el sistema definitivo en HGW.
                        <span className="text-white"> Inteligencia Artificial</span> y el Plan de Ganancia Mutua
                        trabajando en sincronía para tu éxito global.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Link
                            href="https://api.whatsapp.com/send?phone=18094789071"
                            target="_blank"
                            className="btn-gold group flex items-center gap-4 text-lg"
                        >
                            <span>⚡ Quiero mi posición</span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Link>

                        <Link href="#sistema" className="text-white/60 hover:text-white font-bold tracking-widest text-xs uppercase transition-colors flex items-center gap-3">
                            Ver el ecosistema
                            <div className="w-8 h-[1px] bg-white/20"></div>
                        </Link>
                    </div>

                    {/* Hero Image / Visual Representation */}
                    <div className="relative mt-20 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 blur-2xl rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative glass p-2 rounded-[2.5rem]">
                            <Image
                                src="https://sspark.genspark.ai/cfimages?u1=ColBnmXBWW9zSJb6d9mqal3y%2Fh9e00%2FFJo1eurbB9o95nW7iv47krwuIbDf21vA0I7XYfT%2BYty%2F6FWfscqvukSt75tRMlnWFVYcZy%2FFtkH7ra28O%2FrzHEJXJWkVWF61Dkoo90BMrSqwLOljB6aGrNGfTpYjAPH0R&u2=seBYzqmkDHpsRgqW&width=1024"
                                alt="Willy Tirado AI Orchestrator"
                                width={1200}
                                height={600}
                                className="rounded-[2.2rem] shadow-premium object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                priority
                            />

                            {/* Floating Stats or Tags */}
                            <div className="absolute -top-10 -right-4 glass p-4 rounded-3xl shadow-glow animate-float">
                                <div className="text-[0.6rem] text-gold font-black uppercase tracking-widest mb-1">IA Activa</div>
                                <div className="text-sm font-bold">24/7 Global Lead Gen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
