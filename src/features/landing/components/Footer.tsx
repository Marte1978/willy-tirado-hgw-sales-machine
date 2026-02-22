"use client";

import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-24 border-t border-white/[0.05] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                <div className="space-y-4">
                    <div className="text-2xl font-black tracking-tighter uppercase group inline-block">
                        Willy<span className="text-gold group-hover:text-white transition-colors duration-500">Tirado</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-[0.6rem] font-black text-white/30 uppercase tracking-[0.3em]">
                        <span>C9-AI</span>
                        <div className="w-1 h-1 rounded-full bg-gold/30"></div>
                        <span>Equipo Corona</span>
                        <div className="w-1 h-1 rounded-full bg-gold/30"></div>
                        <span>HGW Global</span>
                    </div>
                </div>

                <div className="flex justify-center gap-8 text-[0.65rem] font-bold text-white/40 uppercase tracking-widest">
                    <Link href="#sistema" className="hover:text-white transition-colors">Ecosistema</Link>
                    <Link href="#plan" className="hover:text-white transition-colors">Plan HGW</Link>
                    <Link href="#productos" className="hover:text-white transition-colors">Productos</Link>
                </div>

                <div className="pt-12 border-t border-white/[0.03] space-y-4">
                    <p className="text-[0.6rem] text-white/20 uppercase tracking-[0.15em] leading-loose max-w-2xl mx-auto">
                        © 2026 Willy Tirado. Todos los derechos reservados.<br />
                        Los resultados individuales dependen del esfuerzo, consistencia y aplicación del sistema.
                        Este sitio no es parte de Facebook ni de Google Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};
