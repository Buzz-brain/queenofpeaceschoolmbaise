import { Fragment } from 'react';
import PageIntro from '@/components/school/PageIntro';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { images, leaders } from '@/components/school/data';

function LeaderName({ nameLines }) {
  return <h2>{nameLines[0]}<br/><em>{nameLines.slice(1).map(line => <Fragment key={line}><br />{line}</Fragment>)}</em></h2>;
}

export default function Leadership() {
  return <><PageIntro index="03" label="LEADERSHIP" title={<>Led with <em>purpose.</em></>} description="Meet the leadership of Queen of Peace Model Secondary School." />
    <section className="inner-section">
      <div className="shell">
        {leaders.map(l => <div key={l.position} className={`leader-detail${l.flip ? ' flip' : ''}`}>
          <div className="leader-art">
            <Image src={l.image.src} alt={l.image.alt} className="leader-art-photo" width={l.image.width} height={l.image.height} />
            <span className="photo-caption">{l.caption}</span>
          </div>
          <div className="leader-text">
            <span className="eyebrow">{l.eyebrow}</span>
            <LeaderName nameLines={l.nameLines} />
            <div className="divider" />
            <p>{l.position}<br />Queen of Peace Model Secondary School</p>
            <Link to="/contact" className="under-link">Get in touch with the school <ArrowUpRight size={18} /></Link>
          </div>
        </div>)}
      </div>
    </section>
    <section className="inner-section">
      <div className="shell">
        <span className="eyebrow">IN THE WORK OF THE SCHOOL</span>
        <div className="leader-work">
          <Image src={images.principalOffice.src} alt={images.principalOffice.alt} className="fill-image" fittingType="fill" />
          <span className="photo-caption">THE PRINCIPAL AT WORK</span>
        </div>
      </div>
    </section>
  </>;
}
