"use client";

const PLANS = [
    {
        name: "Binario Tradicional",
        type: "old",
        rows: [
            { label: "Volumen $4,000", val: "Cobras ~$800", good: false },
            { label: "Pierna Fuerte", val: "$0 (Desequilibrio)", good: false },
            { label: "Gestión", val: "Manual constante", good: false },
            { label: "Duplicación", val: "Dificultad alta", good: false },
        ]
    },
    {
        name: "HGW + Sistema C9-AI",
        type: "new",
        rows: [
            { label: "Volumen $4,000", val: "Cobras $2,000", good: true },
            { label: "Una sola línea", val: "Cobras el 50%", good: true },
            { label: "Gestión", val: "Sistema C9-AI", good: true },
            { label: "Duplicación", val: "Automática", good: true },
        ]
    }
];

export const PlanComparison = () => {
    return (
        <section id="plan" className="py-24 bg-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                        La Matemática del Éxito
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black">
                        El plan que otros <span className="text-gold">no enseñan</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        Número a número, la diferencia entre estancarse y escalar es el plan de compensación.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {PLANS.map((plan, idx) => (
                        <div key={idx} className="rounded-3xl overflow-hidden border border-white/5">
                            <div className={`p-6 text-center font-black uppercase tracking-widest ${plan.type === 'old' ? 'bg-white/5 text-white/40' : 'bg-gold/10 text-gold border-b border-gold/20'}`}>
                                {plan.name}
                            </div>
                            <div className="bg-dark-card/50 p-8 space-y-6">
                                {plan.rows.map((row, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <span className="text-sm text-white/40">{row.label}</span>
                                        <span className={`font-bold ${row.good ? 'text-success' : 'text-red-500'}`}>{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-12 rounded-3xl bg-linear-to-br from-gold/5 to-transparent border border-gold/10 text-center">
                    <h3 className="text-2xl font-black mb-2">¿Qué significa en dinero real?</h3>
                    <p className="text-white/40 text-sm mb-8">Volumen de equipo estimado: $6,000 / mes</p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                        <div className="space-y-2">
                            <div className="text-4xl font-black text-red-500 opacity-50">$1,200</div>
                            <div className="text-[0.6rem] font-bold text-white/30 uppercase tracking-widest">Binario Tradicional</div>
                        </div>
                        <div className="text-2xl font-black text-white/20 hidden md:block">VS</div>
                        <div className="space-y-2">
                            <div className="text-6xl font-black text-success shadow-success/20 drop-shadow-2xl">$3,000</div>
                            <div className="text-[0.6rem] font-bold text-gold uppercase tracking-widest">HGW + C9-AI (50%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
