import { useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, MapPin, Menu, X, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/shakti-logo.png.asset.json';
import { company } from '@/lib/company';
const links = [ ['Home','/'], ['About Us','/about'], ['Products','/products'], ['Automobile Parts','/automobile-parts'], ['Street Lights','/street-lights'], ['Contact Us','/contact'] ] as const;
export function WebsiteShell({ children }: { children: ReactNode }) {
 const [open,setOpen] = useState(false);
 return <>
  <div className="topline"><div className="container-shell"><span><MapPin size={12}/> Varanasi, Uttar Pradesh, India</span><span>Engineering dependable solutions since 2010</span></div></div>
  <header className="main-header"><div className="container-shell nav-row">
   <Link to="/" aria-label="Shakti Enterprise home"><img className="brand-logo" src={logo.url} alt="Shakti Enterprise" width={178} height={63}/></Link>
   <nav className="desktop-nav" aria-label="Main navigation">{links.map(([name,to])=><Link key={to} to={to}>{name}</Link>)}</nav>
   <Button asChild variant="industrial" size="lg"><Link to="/contact">Get a Quote <ArrowUpRight/></Link></Button>
   <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button>
  </div>{open&&<nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([name,to])=><Link key={to} to={to} onClick={()=>setOpen(false)}>{name}</Link>)}</nav>}</header>
  <main>{children}</main>
  <section className="quote-band"><div className="container-shell quote-row"><div><h2>Let’s build a dependable partnership.</h2><p>Automobile parts or street lighting — tell us what your business needs.</p></div><Button asChild size="lg"><Link to="/contact">Discuss Your Requirements <ArrowUpRight/></Link></Button></div></section>
  <footer className="site-footer"><div className="container-shell"><div className="footer-grid">
   <div><Link to="/" aria-label="Shakti Enterprise home"><img src={logo.url} className="brand-logo" width={178} height={63} loading="lazy" alt="Shakti Enterprise"/></Link><p className="mt-4 max-w-64">Your partner in automobile spare parts and street light manufacturing. Established in 2010, rooted in Varanasi.</p></div>
   <div><h3>Explore</h3><div className="footer-links"><Link to="/">Home</Link><Link to="/about">About Shakti Enterprise</Link><Link to="/products">Our Products</Link><Link to="/contact">Contact Us</Link></div></div>
   <div><h3>Our Divisions</h3><div className="footer-links"><Link to="/automobile-parts">Automobile Spare Parts</Link><Link to="/street-lights">Street Light Manufacturing</Link><Link to="/contact">Bulk Order Enquiries</Link><Link to="/contact">Request a Quote <ArrowRight className="inline size-3"/></Link></div></div>
   <div><h3>Get in Touch</h3><p className="flex items-start gap-2"><MapPin className="size-4 shrink-0"/>{company.address || company.location}</p><div className="footer-links mt-4">{company.phone&&<a href={`tel:${company.phone}`}><Phone className="inline size-3"/> {company.phone}</a>}{company.email&&<a href={`mailto:${company.email}`}><Mail className="inline size-3"/> {company.email}</a>}<Link to="/contact">Send a business enquiry <ArrowUpRight className="inline size-3"/></Link>{company.socialLinks.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div></div>
  </div><div className="footer-bottom"><span>© 2026 Shakti Enterprise. All rights reserved.</span><span>Varanasi, India · Established 2010</span></div></div></footer>
 </>;
}
export function PageHeading({ label, title, description }: { label:string; title:string; description:string }) {
 return <section className="page-heading"><div className="container-shell"><div className="eyebrow">{label}</div><h1>{title}</h1><p>{description}</p></div></section>;
}
