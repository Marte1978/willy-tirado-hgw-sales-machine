"use client";

import { useState, useEffect, useRef } from "react";

const WEBHOOK_URL = "https://automatizacion-n8n.lnr2f0.easypanel.host/webhook/sitema_willy";

export const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", content: "👋 Hola, soy el sistema experto de Willy Tirado.<br/><br/>Estoy aquí para analizar tu perfil y decirte si calificas para el <strong>Equipo Corona</strong>.<br/><br/>¿Por dónde empezamos?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const sendMessage = async (content: string) => {
        if (!content.trim()) return;

        setMessages(prev => [...prev, { role: "user", content }]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: content, sessionId: "session_" + Date.now() }),
            });

            const data = await response.json();

            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "bot",
                content: data.output || data.message || "Gracias por tu mensaje. Para una respuesta personalizada, te recomiendo hablar con Willy por WhatsApp."
            }]);
        } catch (error) {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: "bot",
                content: "Lo siento, tuve un problema de conexión. ¿Te gustaría hablar directamente con Willy por WhatsApp?"
            }]);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Notifications */}
            {!isOpen && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-dark text-[0.6rem] font-black flex items-center justify-center animate-pulse">
                    1
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[22rem] h-[32rem] glass rounded-3xl flex flex-col shadow-premium overflow-hidden border-gold/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Header */}
                    <div className="p-6 bg-linear-to-br from-dark-card to-dark border-b border-white/5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-xl">🤖</div>
                        <div>
                            <div className="text-sm font-black tracking-tight">Willy AI — Sistema C9</div>
                            <div className="text-[0.6rem] text-success flex items-center gap-1 font-bold uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                                Activo ahora
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="ml-auto text-white/20 hover:text-white transition-colors">✕</button>
                    </div>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                        ? 'bg-gold text-dark font-bold rounded-tr-none'
                                        : 'bg-white/5 border border-white/5 rounded-tl-none'
                                    }`} dangerouslySetInnerHTML={{ __html: m.content }}>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/5 bg-dark/50">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                                placeholder="Escribe tu pregunta..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-gold/50 transition-colors"
                            />
                            <button
                                onClick={() => sendMessage(input)}
                                className="w-12 h-12 bg-gold text-dark rounded-xl flex items-center justify-center font-black transition-transform hover:scale-105 active:scale-95"
                            >
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-linear-to-br from-gold to-[#A87830] text-dark text-3xl flex items-center justify-center shadow-gold transition-transform hover:scale-110 active:scale-90"
            >
                {isOpen ? '✕' : '🤖'}
            </button>
        </div>
    );
};
