"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl ${scrolled ? "top-4" : "top-8"
            }`}>
            <div className={`glass rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 ${scrolled ? "bg-white/[0.05] border-white/[0.15] shadow-glow" : "bg-white/[0.02] border-white/[0.05]"
                }`}>
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-xl font-black tracking-tighter uppercase group">
                        Willy<span className="text-gold group-hover:text-white transition-colors">Tirado</span>
                    </Link>

                    <div className="hidden md:flex gap-8 text-[0.7rem] font-black uppercase tracking-[0.2em] text-white/50">
                        <Link href="#sistema" className="hover:text-gold transition-colors">Sistema</Link>
                        <Link href="#plan" className="hover:text-gold transition-colors">Plan</Link>
                        <Link href="#productos" className="hover:text-gold transition-colors">Productos</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://api.whatsapp.com/send?phone=18094789071"
                        target="_blank"
                        className="btn-gold !px-6 !py-2 !text-[0.7rem] uppercase tracking-widest"
                    >
                        Iniciar ahora
                    </Link>
                </div>
            </div>
        </nav>
    );
};
