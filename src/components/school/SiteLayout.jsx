import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import './site.css';
const titles = { '/': 'Queen of Peace Model Secondary School | Mbaise, Imo State', '/about': 'About | Queen of Peace Model Secondary School', '/academics': 'Academics | Queen of Peace Model Secondary School', '/leadership': 'Leadership | Queen of Peace Model Secondary School', '/school-life': 'School Life | Queen of Peace Model Secondary School', '/gallery': 'Gallery | Queen of Peace Model Secondary School', '/admissions': 'Admissions | Queen of Peace Model Secondary School', '/contact': 'Contact | Queen of Peace Model Secondary School' };
export default function SiteLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || titles['/'];
    const description = pathname === '/' ? 'Discover Queen of Peace Model Secondary School, a Catholic institution in Oboama Ezinihitte, Mbaise, Imo State, committed to excellence, honesty and service.' : `Explore ${titles[pathname]?.split(' | ')[0] || 'Queen of Peace'} at Queen of Peace Model Secondary School in Mbaise, Imo State, Nigeria.`;
    for (const [selector, content] of [['meta[name="description"]',description],['meta[property="og:title"]',document.title],['meta[property="og:description"]',description]]) { const el = document.querySelector(selector); if (el) el.setAttribute('content',content); }
  }, [pathname]);
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main"><Outlet/></main><SiteFooter/></>;
}