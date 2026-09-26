import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import PageIntro from '@/components/school/PageIntro';
import { images } from '@/components/school/data';
export default function Gallery() {
  const [filter, setFilter] = useState('All'),[selected, setSelected] = useState(null);
  const categories = ['All', ...new Set(images.gallery.map((i) => i.category))];
  const closeRef = useRef(null);
  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement;
    const onKeyDown = (e) => {if (e.key === 'Escape') setSelected(null);if (e.key === 'Tab') {e.preventDefault();closeRef.current?.focus();}};
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    window.addEventListener('keydown', onKeyDown);
    return () => {document.body.style.overflow = '';window.removeEventListener('keydown', onKeyDown);previous?.focus();};
  }, [selected]);
  return <><PageIntro index="05" label="GALLERY" title={<>Moments of <em>belonging.</em></>} description="A glimpse of learning, place and community at Queen of Peace." /><section className="inner-section gallery-section"><div className="shell"><div className="gallery-filters" aria-label="Filter gallery">{categories.map((c) => <button type="button" key={c} className={filter === c ? 'chosen' : ''} onClick={() => setFilter(c)} aria-pressed={filter === c}>{c}</button>)}</div><div className="gallery-grid">{images.gallery.filter((i) => filter === 'All' || filter === i.category).map((item, i) => <button className="gallery-item" key={item.src} type="button" onClick={() => setSelected(item)} aria-label={`View ${item.category} image`}><Image src={item.src} alt={item.alt} className="fill-image" fittingType="fill" /><span>{String(i + 1).padStart(2, '0')} / {item.category} <ArrowUpRight size={18} /></span></button>)}</div><p className="gallery-note">Photographs from school life at Queen of Peace Model Secondary School.</p></div></section>{selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selected.category} image`} onClick={() => setSelected(null)}><button ref={closeRef} type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image"><X size={22} /></button><div onClick={(e) => e.stopPropagation()}><Image src={selected.src} alt={selected.alt} className="lightbox-image" fittingType="fit" /><p>{selected.category}</p></div></div>}</>;
}