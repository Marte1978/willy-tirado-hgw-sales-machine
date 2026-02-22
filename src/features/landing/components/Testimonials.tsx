"use client";

const REVIEWS = [
    { name: "Juan Carlos M.", rank: "👑 Rango Máster", text: "Logré en 3 meses con el C9-AI lo que en 1 año en otras empresas no pude. El bot me ahorra 4 horas diarias.", avatar: "JC" },
    { name: "Ana Lucía T.", rank: "💎 Diamante Corona", text: "Cierro socios todos los días de varios países. Nunca imaginé que la prospección fuera tan fluida.", avatar: "AL" },
    { name: "Roberto M.", rank: "⭐ Rango Plata", text: "Llegué sin experiencia. El mapa de 90 días me dio claridad total. El sistema sigue creciendo sin mi esfuerzo diario.", avatar: "RM" },
];

export const Testimonials = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                        El Equipo Habla
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black">
                        Resultados <span className="text-gold">verificables</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {REVIEWS.map((rev, idx) => (
                        <div key={idx} className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden">
                            <div className="text-gold text-2xl">★★★★★</div>
                            <p className="text-white/70 italic leading-relaxed">"{rev.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gold to-[#A87830] flex items-center justify-center font-black text-dark text-xs">
                                    {rev.avatar}
                                </div>
                                <div>
                                    <div className="font-black text-sm">{rev.name}</div>
                                    <div className="text-[0.6rem] text-gold font-bold uppercase tracking-widest">{rev.rank}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
