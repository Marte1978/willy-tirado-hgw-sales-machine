"use client";

import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-black tracking-tighter uppercase">
                    Willy<span className="text-gold">Tirado</span>
                </div>

                <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-white/70">
                    <Link href="#sistema" className="hover:text-gold transition-colors">Sistema</Link>
                    <Link href="#plan" className="hover:text-gold transition-colors">Plan</Link>
                    <Link href="#productos" className="hover:text-gold transition-colors">Productos</Link>
                </div>

                <Link
                    href="https://api.whatsapp.com/send?phone=18094789071"
                    target="_blank"
                    className="bg-gold text-dark px-6 py-2 rounded-lg font-bold text-sm transition-transform hover:scale-105"
                >
                    🚀 Iniciar ahora
                </Link>
            </div>
        </nav>
    );
};
