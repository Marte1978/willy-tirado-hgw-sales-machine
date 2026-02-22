"use client";

import Image from "next/image";

export const AboutArchitect = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/[0.08] shadow-premium bento-card !p-2">
                            <Image
                                src="https://sspark.genspark.ai/cfimages?u1=ColBnmXBWW9zSJb6d9mqal3y%2Fh9e00%2FFJo1eurbB9o95nW7iv47krwuIbDf21vA0I7XYfT%2BYty%2F6FWfscqvukSt75tRMlnWFVYcZy%2FFtkH7ra28O%2FrzHEJXJWkVWF61Dkoo90BMrSqwLOljB6aGrNGfTpYjAPH0R&u2=seBYzqmkDHpsRgqW&width=1024"
                                alt="Willy Tirado Profile"
                                width={800}
                                height={800}
                                className="rounded-[2.2rem] transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-[1.02]"
                            />
                            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl text-center">
                                <div className="text-gold font-black text-[0.6rem] tracking-[0.4em] uppercase mb-1">Estatus Global</div>
                                <div className="text-3xl font-black tracking-tighter text-white">CORONA STRATEGIST</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[0.6rem] font-bold uppercase tracking-widest">
                                El Arquitecto del Sistema
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter">
                                Menos motivación.<br />
                                <span className="text-gradient">Más arquitectura.</span>
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed font-medium">
                                El éxito persistente no nace del entusiasmo, sino de la
                                <span className="text-white"> infraestructura digital</span> que sostiene cada paso de tu equipo.
                            </p>
                        </div>

                        <div className="space-y-6 text-white/40 leading-relaxed max-w-xl text-sm font-medium">
                            <p>
                                Mi equipo opera en más de 20 países con un sistema que no descansa.
                                Leads calificados de Asia y Europa son procesados por IA antes de llegar a tu WhatsApp.
                            </p>
                            <p>
                                Al unirte, no solo entras a HGW. Accedes a la maquinaria que construí para
                                automatizar el camino al Rango Corona.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/[0.05]">
                            <div className="space-y-2">
                                <div className="text-4xl font-black text-white group-hover:text-gold transition-colors">+20</div>
                                <div className="text-[0.6rem] font-black text-white/20 uppercase tracking-[0.2em]">Países Activos</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-black text-white">24/7</div>
                                <div className="text-[0.6rem] font-black text-white/20 uppercase tracking-[0.2em]">Operación IA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
