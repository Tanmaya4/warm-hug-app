CREATE TABLE public.business_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (length(trim(name)) BETWEEN 2 AND 100),
 company text NOT NULL CHECK (length(trim(company)) BETWEEN 2 AND 160),
 phone text NOT NULL CHECK (phone ~ '^[+0-9 ()-]{7,24}$'),
 email text NOT NULL CHECK (length(email) <= 255 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 category text NOT NULL CHECK (category IN ('Automobile Spare Parts','Street Light Manufacturing','Both / Other')),
 quantity integer NOT NULL CHECK (quantity BETWEEN 1 AND 100000000),
 message text NOT NULL CHECK (length(trim(message)) BETWEEN 10 AND 3000)
);
GRANT INSERT ON public.business_enquiries TO anon, authenticated;
GRANT ALL ON public.business_enquiries TO service_role;
ALTER TABLE public.business_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit enquiries" ON public.business_enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);