"use client";

import Link from "next/link";

export const QualifyNow = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="glass p-12 md:p-20 rounded-[3rem] text-center space-y-10 relative overflow-hidden border-gold/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent"></div>

                    <div className="space-y-4">
                        <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                            Acceso Limitado
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black leading-tight">
                            ¿Quieres ser uno de los<br />
                            <span className="text-gold">5 nuevos líderes?</span>
                        </h2>
                        <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
                            Willy abre solo 5 posiciones directas al mes para garantizar la calidad de la mentoría y la aceleración del sistema C9-AI.
                        </p>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-500 font-bold text-sm animate-pulse">
                        ⚠️ Cupos disponibles: 3 de 5 · Mes de Febrero
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Link href="https://api.whatsapp.com/send?phone=18094789071" target="_blank" className="btn-gold scale-110">
                            🚀 Aplicar al Equipo Corona
                        </Link>
                        <p className="text-[0.7rem] text-white/30 uppercase tracking-[0.2em]">
                            Al hacer clic serás redirigido a una calificación rápida vía WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
