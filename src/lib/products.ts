import automobile from '@/assets/automobile.jpg';
import streetlights from '@/assets/streetlights.jpg';
export type Category = 'automobile' | 'lighting';
export const products = [
 { id:'engine-components', name:'Engine Components', category:'automobile' as Category, image:automobile, description:'Discuss your requirements for engine replacement components and vehicle compatibility.' },
 { id:'bearings-gears', name:'Bearings & Gears', category:'automobile' as Category, image:automobile, description:'Enquire about mechanical bearings and transmission components for your application.' },
 { id:'brake-suspension', name:'Brake & Suspension Parts', category:'automobile' as Category, image:automobile, description:'Share your vehicle model and replacement part requirements with our team.' },
 { id:'led-street-lights', name:'LED Street Lights', category:'lighting' as Category, image:streetlights, description:'Explore street lighting requirements for roads and outdoor spaces.' },
];
export const categoryName = (category: Category) => category === 'automobile' ? 'Automobile Spare Parts' : 'Street Light Manufacturing';
