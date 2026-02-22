"use client";

const MODULES = [
    { id: "C1", title: "Autoridad Digital", desc: "Tu perfil se convierte en un imán de prospectos calificados.", icon: "🎯" },
    { id: "C2", title: "Prospección IA", desc: "Mensajes hiper-personalizados que no parecen bots.", icon: "🤖" },
    { id: "C3", title: "Embudo Global", desc: "Secuencia que filtra y educa en cualquier idioma.", icon: "🌍" },
    { id: "C4", title: "Contenido Viral", desc: "Sistema de producción que cualquier socio replica.", icon: "📲" },
    { id: "C5", title: "Bot de Calificación", desc: "Identifica el perfil antes de la primera llamada.", icon: "💬" },
    { id: "C6", title: "Cierre Asistido", desc: "Scripts probados entregados vía WhatsApp.", icon: "🤝" },
    { id: "C7", title: "Seguimiento Total", desc: "Mantenimiento de leads en piloto automático.", icon: "📅" },
    { id: "C8", title: "Duplicación", desc: "Sistema que se activa solo para cada nuevo socio.", icon: "♾️" },
    { id: "C9", title: "Radar Global", desc: "IA para detectar mercados calientes antes que nadie.", icon: "🚀" },
];

export const SystemFeatures = () => {
    return (
        <section id="sistema" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                        Módulos Exclusivos
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black">
                        Sistema <span className="text-gold">C9-AI</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        No es un curso. Es el sistema operativo para tu negocio MLM en 2026.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MODULES.map((mod, idx) => (
                        <div key={idx} className="group glass p-8 rounded-2xl hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{mod.icon}</div>
                            <div className="text-gold text-[0.65rem] font-black tracking-widest uppercase mb-2">
                                {mod.id} — {mod.title}
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {mod.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
