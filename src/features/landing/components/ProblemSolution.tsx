"use client";

const COMPARISONS = [
    {
        title: "El Modelo Viejo (Legacy)",
        type: "old",
        items: [
            { h: "Listas agotadas", p: "Persigues a amigos y familiares hasta quemar la relación." },
            { h: "Presentaciones frías", p: "Zoom tras Zoom con prospectos que no calificaron." },
            { h: "Trabajo manual", p: "Tu negocio solo crece cuando tú estás presente." },
        ]
    },
    {
        title: "Sistema C9-AI (Futuro)",
        type: "new",
        items: [
            { h: "Atracción Automática", p: "El sistema genera prospectos calificados mientras duermes." },
            { h: "Filtro Inteligente", p: "El bot califica y entrega el prospecto listo para el cierre." },
            { h: "Duplicación Viral", p: "Cada socio recibe el mismo sistema desde el día 1." },
        ]
    }
];

export const ProblemSolution = () => {
    return (
        <section className="py-24 bg-white border-y border-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                        El modelo viejo está <span className="text-gold">muerto.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-medium">
                        La diferencia entre estancarse y escalar no es el producto, es el sistema que usas para operar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {COMPARISONS.map((col, idx) => (
                        <div key={idx} className={`p-8 rounded-3xl border ${col.type === 'old' ? 'border-slate-100 bg-slate-50/50 opacity-60' : 'border-gold/10 bg-white shadow-xl'}`}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-2xl">{col.type === 'old' ? '❌' : '✅'}</span>
                                <h3 className={`text-xl font-black ${col.type === 'old' ? 'text-slate-400' : 'text-gold'}`}>
                                    {col.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {col.items.map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <h4 className="font-bold text-slate-800">{item.h}</h4>
                                        <p className="text-sm text-slate-500 font-medium">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
