-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    full_name TEXT,
    email TEXT,
    phone TEXT,
    whatsapp_link TEXT,
    status TEXT DEFAULT 'new' CHECK (
        status IN (
            'new',
            'qualified',
            'contacted',
            'closed',
            'rejected'
        )
    ),
    score INTEGER DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    source TEXT DEFAULT 'landing_v3'
);
-- Create chat_history table
CREATE TABLE IF NOT EXISTS public.chat_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    session_id TEXT UNIQUE NOT NULL,
    messages JSONB DEFAULT '[]'::jsonb
);
-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
-- Policies (Public can insert, but only authenticated can view/update)
CREATE POLICY "Public leads insertion" ON public.leads FOR
INSERT WITH CHECK (true);
CREATE POLICY "Public chat session insertion" ON public.chat_sessions FOR
INSERT WITH CHECK (true);
-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_leads_score ON public.leads(score);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON public.chat_sessions(session_id);