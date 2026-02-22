"use client";

const STATS = [
    { value: "+20", label: "Países activos", suffix: "" },
    { value: "C9", label: "Módulos de IA", suffix: "" },
    { value: "50%", label: "Sin bloqueo", suffix: "de pierna" },
    { value: "90d", label: "Al Rango", suffix: "Diamante" },
];

export const Stats = () => {
    return (
        <div className="border-y border-white/5 bg-dark-card/30 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="text-center md:text-left space-y-1">
                            <div className="text-4xl md:text-5xl font-black text-gold tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[0.65rem] font-bold text-white/40 uppercase tracking-[0.2em]">
                                {stat.label} <span className="block md:inline">{stat.suffix}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
