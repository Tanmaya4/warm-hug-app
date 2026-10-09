import { createFileRoute } from '@tanstack/react-router';
import { Catalogue } from '@/components/site/catalogue';
import { pageMeta } from '@/lib/company';
export const Route=createFileRoute('/street-lights')({head:()=>pageMeta('Street Light Manufacturing','Street light manufacturing by Shakti Enterprise, Varanasi. Discuss your LED outdoor lighting project and bulk order requirements.'),component:()=> <Catalogue category="lighting"/>});
