export const company = {
 name: 'Shakti Enterprise', established: 2010,
 location: 'Varanasi, Uttar Pradesh, India',
 phone: '', email: '', whatsapp: '', address: '',
 socialLinks: [] as { label: string; url: string }[],
};
export function pageMeta(title: string, description: string) {
 return { meta: [ { title: `${title} | Shakti Enterprise` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Shakti Enterprise` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] };
}
