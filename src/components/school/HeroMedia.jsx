import { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import { heroMedia } from './data';

// Fills the hero visual with the school building photograph, a slideshow, or a short video.
// Which one shows is decided by `heroMedia.mode` in data.js — the hero layout is unchanged.
export default function HeroMedia() {
  const { mode, interval, image, slides, video } = heroMedia;
  const isSlideshow = mode === 'slideshow' && slides.length > 1;
  const isVideo = mode === 'video' && Boolean(video.src);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slides.length ? slides.length - 1 : 0);

  useEffect(() => {
    if (!isSlideshow) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setPrevIndex((p) => (p + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isSlideshow, slides.length, interval]);

  if (isVideo) {
    return (
      <video
        className="hero-image"
        src={video.src}
        type={video.type}
        poster={image.src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={video.alt} />);


  }

  if (isSlideshow) {
    return (
      <div className="hero-slides">
        {slides.map((slide, i) => {
          let movement = 'translate-x-0 opacity-100';
          if (i === prevIndex) movement = 'translate-x-[-105%] opacity-0';
          else if (i !== index) movement = 'translate-x-[105%] opacity-0';
          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              className={`hero-image transition-all duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] ${movement}`}
              fittingType="fill" />
          );
        })}
      </div>);

  }

  return <Image src={image.src} alt={image.alt} className="hero-image" fittingType="fill" />;
}