"use client";

const MODULES = [
    { id: "C1", title: "Autoridad Digital", desc: "Tu perfil se convierte en un imán de prospectos calificados.", icon: "🎯" },
    { id: "C2", title: "Prospección IA", desc: "Mensajes hiper-personalizados que no parecen bots.", icon: "🤖" },
    { id: "C3", title: "Embudo Global", desc: "Secuencia que filtra y educa en cualquier idioma.", icon: "🌍" },
    { id: "C4", title: "Contenido Viral", desc: "Sistema de producción que cualquier socio replica.", icon: "📲" },
    { id: "C5", title: "Bot de Calificación", desc: "Identifica el perfil antes de la primera llamada.", icon: "💬" },
    { id: "C6", title: "Cierre Asistido", desc: "Scripts probados entregados vía WhatsApp.", icon: "🤝" },
];

export const SystemFeatures = () => {
    return (
        <section id="sistema" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-block px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[0.6rem] font-bold uppercase tracking-widest">
                            Infraestructura de Escalamiento
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                            Orquesta tu<br />
                            <span className="text-gradient">Crecimiento.</span>
                        </h2>
                    </div>
                    <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
                        No implementamos herramientas aisladas. Entregamos el sistema operativo
                        que coordina cada interacción de tu negocio.
                    </p>
                </div>

                <div className="grid md:grid-cols-6 gap-6">
                    {MODULES.map((mod, idx) => (
                        <div
                            key={idx}
                            className={`bento-card flex flex-col justify-between group h-full cursor-default ${idx === 0 || idx === 3 ? "md:col-span-3" : "md:col-span-2"
                                } ${idx === 4 ? "md:col-span-4" : ""}`}
                        >
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
                                    {mod.icon}
                                </div>
                                <div className="space-y-2">
                                    <div className="text-gold text-[0.6rem] font-black tracking-[0.2em] uppercase opacity-60">
                                        Módulo {mod.id}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                                        {mod.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed mt-8 group-hover:text-white/60 transition-colors">
                                {mod.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
