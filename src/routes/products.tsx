import { createFileRoute } from '@tanstack/react-router';
import { Catalogue } from '@/components/site/catalogue';
import { pageMeta } from '@/lib/company';
export const Route=createFileRoute('/products')({head:()=>pageMeta('Product Catalogue','Explore sample automobile spare parts and street light products from Shakti Enterprise, Varanasi. Enquire for availability and bulk quotes.'),component:()=> <Catalogue/>});
