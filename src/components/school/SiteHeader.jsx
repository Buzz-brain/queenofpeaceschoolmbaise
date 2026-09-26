import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav, school, images } from './data';
export default function SiteHeader() {
  const [open, setOpen] = useState(false), [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 30); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const closeOnEscape = e => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', closeOnEscape); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape); }; }, [open]);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="header-inner">
      <Link to="/" className="brand" aria-label="Queen of Peace home"><img className="brand-logo" src={images.logo.src} alt={images.logo.alt} width="46" height="46" /><span className="brand-name">Queen of Peace<small>MODEL SECONDARY SCHOOL</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <NavLink key={item.path} to={item.path} className={({isActive}) => isActive ? 'active' : ''}>{item.label}</NavLink>)}</nav>
      <a className="portal-link" href={school.portal} target="_blank" rel="noopener noreferrer">Portal Login <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={25}/> : <Menu size={25}/>}</button>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>{nav.map((item, i) => <NavLink key={item.path} to={item.path} tabIndex={open ? 0 : -1}><span className="menu-index">0{i+1}</span>{item.label}<ArrowUpRight size={18}/></NavLink>)}<a href={school.portal} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>Portal Login <ArrowUpRight size={18}/></a><p>EXCELLENCE · HONESTY · SERVICE</p></nav>
  </header>;
}