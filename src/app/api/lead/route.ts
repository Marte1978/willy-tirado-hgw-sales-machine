import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK = process.env.N8N_LEAD_WEBHOOK || "";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, phone, email, country, message } = body;

    if (!name || !phone) {
        return NextResponse.json({ error: "name and phone required" }, { status: 400 });
    }

    if (N8N_WEBHOOK) {
        try {
            await fetch(N8N_WEBHOOK, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone,
                    email: email || "",
                    country: country || "Desconocido",
                    message: message || "",
                    source: "hgw.webfactoryrd.com",
                    timestamp: new Date().toISOString(),
                }),
            });
        } catch {
            // Don't block the response if webhook fails
        }
    }

    return NextResponse.json({ ok: true });
}
