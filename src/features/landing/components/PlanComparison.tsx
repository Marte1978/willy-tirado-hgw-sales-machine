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
        <section id="plan" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-gold/10 bg-gold/5 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                        La Matemática del Éxito
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900">
                        El plan que otros <span className="text-gold">no enseñan</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-medium">
                        Número a número, la diferencia entre estancarse y escalar es el plan de compensación.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {PLANS.map((plan, idx) => (
                        <div key={idx} className="rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-lg">
                            <div className={`p-6 text-center font-black uppercase tracking-widest ${plan.type === 'old' ? 'bg-slate-50 text-slate-400' : 'bg-gold/10 text-gold border-b border-gold/20'}`}>
                                {plan.name}
                            </div>
                            <div className="p-8 space-y-6">
                                {plan.rows.map((row, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                                        <span className="text-sm text-slate-400 font-medium">{row.label}</span>
                                        <span className={`font-bold ${row.good ? 'text-emerald-500' : 'text-rose-500'}`}>{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-12 rounded-3xl bg-slate-50 border border-slate-100 text-center">
                    <h3 className="text-2xl font-black mb-2 text-slate-900">¿Qué significa en dinero real?</h3>
                    <p className="text-slate-400 text-sm mb-8 font-medium">Volumen de equipo estimado: $6,000 / mes</p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                        <div className="space-y-2">
                            <div className="text-4xl font-black text-slate-200">$1,200</div>
                            <div className="text-[0.6rem] font-bold text-slate-300 uppercase tracking-widest">Binario Tradicional</div>
                        </div>
                        <div className="text-2xl font-black text-slate-100 hidden md:block">VS</div>
                        <div className="space-y-2">
                            <div className="text-6xl font-black text-emerald-500 shadow-emerald-100 drop-shadow-xl">$3,000</div>
                            <div className="text-[0.6rem] font-bold text-gold uppercase tracking-widest">HGW + C9-AI (50%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
