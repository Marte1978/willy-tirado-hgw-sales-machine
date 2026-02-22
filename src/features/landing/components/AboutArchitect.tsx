"use client";

import Image from "next/image";

export const AboutArchitect = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-premium group">
                            <Image
                                src="https://sspark.genspark.ai/cfimages?u1=ColBnmXBWW9zSJb6d9mqal3y%2Fh9e00%2FFJo1eurbB9o95nW7iv47krwuIbDf21vA0I7XYfT%2BYty%2F6FWfscqvukSt75tRMlnWFVYcZy%2FFtkH7ra28O%2FrzHEJXJWkVWF61Dkoo90BMrSqwLOljB6aGrNGfTpYjAPH0R&u2=seBYzqmkDHpsRgqW&width=1024"
                                alt="Willy Tirado Profile"
                                width={800}
                                height={800}
                                className="transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 right-6 glass p-6 rounded-2xl text-center">
                                <div className="text-gold font-black text-xs tracking-[0.3em] uppercase mb-1">Top Global</div>
                                <div className="text-2xl font-black tracking-tighter">STRATEGIST</div>
                                <div className="text-gold text-lg">⭐ HGW</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                            Sobre Willy Tirado
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                            No soy un motivador.<br />
                            Soy un <span className="text-gold">arquitecto.</span>
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed">
                            El dinero real en el MLM no está en el esfuerzo individual, sino en la <span className="text-white font-bold">arquitectura del sistema</span> que soporta al equipo.
                        </p>
                        <p className="text-white/40 leading-relaxed">
                            Hoy, mi equipo opera en más de 20 países. Prospectos de Asia, Latinoamérica y Europa llegan al sistema sin que yo haga una sola llamada en frío. Al unirte, no solo entras a HGW, accedes a la infraestructura digital que construí para llegar al rango Corona.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                            <div className="space-y-1">
                                <div className="text-3xl font-black text-gold">+20</div>
                                <div className="text-[0.6rem] font-bold text-white/30 uppercase tracking-[0.2em]">Países activos</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-3xl font-black text-gold">24/7</div>
                                <div className="text-[0.6rem] font-bold text-white/30 uppercase tracking-[0.2em]">Operación IA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
