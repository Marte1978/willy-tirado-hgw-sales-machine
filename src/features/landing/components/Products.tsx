"use client";

const PRODUCTS = [
    { icon: "☕", title: "Café de Arándanos", tag: "Residual · #1 Top Seller", desc: "Un hábito billonario convertido en salud. Alta rotación y consumo recurrente automático." },
    { icon: "💎", title: "Turmalina Premium", tag: "Tecnología · Exclusivo", desc: "Bienestar instantáneo mediante aniones. Cierres de impacto en el acto." },
    { icon: "🌿", title: "Línea Bienestar", tag: "Salud · Alta Demanda", desc: "Manufactura propia que construye confianza y retención en tu red global." },
];

export const Products = () => {
    return (
        <section id="productos" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block px-4 py-1 rounded-full border border-gold/10 bg-gold/5 text-gold text-[0.6rem] font-black uppercase tracking-widest">
                        Tecnología & Salud
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900">
                        Productos que <span className="text-gold">venden solos</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto font-medium">
                        Alta rotación diaria. Consumo habitual. El producto trabaja para ti mientras el sistema construye tu equipo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {PRODUCTS.map((prod, idx) => (
                        <div key={idx} className="bento-card p-8 rounded-3xl text-center hover:border-gold/30 transition-all group bg-white shadow-lg">
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform grayscale-[40%] group-hover:grayscale-0">{prod.icon}</div>
                            <div className="inline-block px-3 py-1 rounded-full bg-slate-50 text-gold text-[0.6rem] font-bold uppercase tracking-widest mb-4 border border-slate-100">
                                {prod.tag}
                            </div>
                            <h3 className="text-xl font-black mb-3 text-slate-800">{prod.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{prod.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
