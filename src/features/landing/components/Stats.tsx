"use client";

const STATS = [
    { value: "+20", label: "Mercados", suffix: "Activos" },
    { value: "C9", label: "Módulos", suffix: "IA" },
    { value: "Pierna", label: "Ganancia", suffix: "Mutua" },
    { value: "$6M", label: "Seed", suffix: "Funding" },
];

export const Stats = () => {
    return (
        <div className="py-20 border-y border-white/[0.05]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center justify-items-center">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center lg:items-start space-y-2 group">
                            <div className="text-5xl md:text-6xl font-black text-white/90 tracking-tighter group-hover:text-gold transition-colors duration-500">
                                {stat.value}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-[1px] bg-gold/30"></div>
                                <div className="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.2em]">
                                    {stat.label} <span className="text-white/20">{stat.suffix}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
