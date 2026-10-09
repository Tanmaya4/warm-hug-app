import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, categoryName, type Category } from '@/lib/products';
import { WebsiteShell, PageHeading } from './website-shell';
export function Catalogue({ category }: { category?: Category }) {
 const [filter,setFilter]=useState<Category|'all'>(category || 'all');
 const [search,setSearch]=useState('');
 const filtered=products.filter(p=>(filter==='all'||p.category===filter)&&`${p.name} ${p.description}`.toLowerCase().includes(search.toLowerCase()));
 return <WebsiteShell><PageHeading label="Our product catalogue" title={category?categoryName(category):'Built around your business.'} description={category==='lighting'?'Street light manufacturing for your outdoor lighting requirements. Share your project to discuss availability and specifications.':category==='automobile'?'Automobile spare parts for your replacement and bulk supply requirements. Share your vehicle models and part references.':'Two specialized divisions. One dependable partner. Explore automobile parts and street lighting for your next requirement.'}/><section className="section"><div className="container-shell">
  <div className="catalog-controls"><div className="filter-row">{!category&&(['all','automobile','lighting'] as const).map(c=><Button key={c} variant={filter===c?'industrial':'outline'} onClick={()=>setFilter(c)}>{c==='all'?'All Products':c==='automobile'?'Automobile Parts':'Street Lights'}</Button>)}</div><label className="search-field"><Search size={17}/><input aria-label="Search products" placeholder="Search products…" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
  <p className="text-xs text-muted-foreground mb-6">Sample catalogue · Illustrative images. Product availability and specifications require confirmation.</p>
  <div className="product-grid">{filtered.map(p=><article className="product-card" key={p.id}><Link to="/product/$productId" params={{productId:p.id}}><img src={p.image} alt={`${p.name} — illustrative image`} width={1440} height={1024} loading="lazy"/></Link><div className="product-card-body"><span className="sample-label">Sample product</span><h2><Link to="/product/$productId" params={{productId:p.id}}>{p.name}</Link></h2><p>{p.description}</p><div className="flex items-center justify-between gap-2 mt-5"><Button asChild variant="industrial" size="sm"><Link to="/contact" search={{product:p.name}}>Request a Quote <ArrowUpRight/></Link></Button><Button asChild variant="ghost" size="icon"><Link to="/product/$productId" params={{productId:p.id}} aria-label={`View ${p.name}`}><ArrowRight/></Link></Button></div></div></article>)}</div>
  {filtered.length===0&&<div className="empty-state"><Search className="mx-auto mb-4"/><h2>No matching products</h2><p>Try another search or send us your specific requirement.</p><Button variant="outline" className="mt-5" onClick={()=>{setSearch('');setFilter(category||'all');}}>Clear search</Button></div>}
 </div></section></WebsiteShell>;
}
