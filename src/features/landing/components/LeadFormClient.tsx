"use client";

import { useState } from "react";

interface Props {
    country: string;
    countryCode: string;
    whatsapp: string;
}

export function LeadFormClient({ country, countryCode, whatsapp }: Props) {
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) return;
        setStatus("sending");
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, country, source: `hgw.webfactoryrd.com/${countryCode}` }),
            });
            setStatus(res.ok ? "ok" : "error");
        } catch {
            setStatus("error");
        }
    }

    if (status === "ok") {
        return (
            <div className="text-center py-10 space-y-4">
                <div className="text-5xl">✅</div>
                <h3 className="text-xl font-black text-white">¡Recibido!</h3>
                <p className="text-slate-300">Willy o su equipo te contactará en las próximas horas.</p>
                <a href={whatsapp} target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all text-sm">
                    También puedes escribir ahora por WhatsApp →
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-slate-300 text-sm font-semibold mb-1">
                        Nombre completo <span className="text-emerald-400">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-slate-300 text-sm font-semibold mb-1">
                        WhatsApp / Teléfono <span className="text-emerald-400">*</span>
                    </label>
                    <input
                        type="tel"
                        required
                        placeholder="+52 55 1234 5678"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                </div>
            </div>
            <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">Email (opcional)</label>
                <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
            </div>
            <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">¿Qué te interesa saber? (opcional)</label>
                <textarea
                    rows={3}
                    placeholder={`Hola, soy de ${country} y me interesa...`}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
            </div>
            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-black text-lg rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
                {status === "sending" ? "Enviando..." : `Solicitar información gratis — ${country}`}
            </button>
            {status === "error" && (
                <p className="text-red-400 text-sm text-center">Hubo un error. Por favor intenta por WhatsApp directamente.</p>
            )}
            <p className="text-slate-500 text-xs text-center">
                Sin spam, sin compromiso. Respuesta en menos de 24h.
            </p>
        </form>
    );
}
