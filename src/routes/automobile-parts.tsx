import { createFileRoute } from '@tanstack/react-router';
import { Catalogue } from '@/components/site/catalogue';
import { pageMeta } from '@/lib/company';
export const Route=createFileRoute('/automobile-parts')({head:()=>pageMeta('Automobile Spare Parts','Discuss automobile replacement parts and bulk supply requirements with Shakti Enterprise in Varanasi, established in 2010.'),component:()=> <Catalogue category="automobile"/>});
