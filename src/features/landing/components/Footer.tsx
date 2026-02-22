"use client";

export const Footer = () => {
    return (
        <footer className="py-16 border-t border-white/5 bg-dark">
            <div className="container mx-auto px-6 text-center space-y-8">
                <div className="text-2xl font-black tracking-tighter uppercase">
                    Willy<span className="text-gold">Tirado</span>
                </div>

                <p className="text-white/30 text-xs tracking-widest uppercase">
                    Sistema C9-AI · Equipo Corona · HGW Global
                </p>

                <div className="pt-8 border-t border-white/5 text-[0.65rem] text-white/20 uppercase tracking-[0.1em] leading-loose">
                    © 2026 Willy Tirado. Todos los derechos reservados.<br />
                    Los resultados individuales dependen del esfuerzo, consistencia y aplicación del sistema.
                </div>
            </div>
        </footer>
    );
};
