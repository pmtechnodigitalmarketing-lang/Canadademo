import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import brandConfig from '../data/brandConfig';

const desktopSlides = [
  {
    id: 1,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/05/pandith-banner.webp",
    alt: "pandith banner"
  },
  {
    id: 2,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/05/pandith-banner-1.webp",
    alt: "pandith banner (1)"
  },
  {
    id: 3,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/05/pandith-banner-1-1.webp",
    alt: "pandith banner-1"
  },
  {
    id: 4,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/05/pandith-banner-2.webp",
    alt: "pandith banner-2"
  },
  {
    id: 5,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/05/pandith-banner-3.webp",
    alt: "pandith banner-3"
  }
];

const mobileSlides = [
  {
    id: 1,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/rgvduunmgyrkupkxkxn4.webp",
    alt: "pandith mobile banner 1"
  },
  {
    id: 2,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/yvgljqfamcoyk1xnjk0e.webp",
    alt: "pandith mobile banner 2"
  },
  {
    id: 3,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/eidjp8umhtpzu6rspwlv.webp",
    alt: "pandith mobile banner 3"
  },
  {
    id: 4,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/ggcnnceqmgmihuqq3iln.webp",
    alt: "pandith mobile banner 4"
  },
  {
    id: 5,
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/qbibdde4rlgw4zhquzsp.webp",
    alt: "pandith mobile banner 5"
  }
];

export default function GowthamHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeSlides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  return (
    <section className="hero-slider-container" aria-label="Astrology Banner Slider">
      <a href={`tel:${brandConfig.phoneRaw}`} className="hero-slider-slide">
        <img 
          src={activeSlides[currentIndex].image} 
          alt={activeSlides[currentIndex].alt}
          loading="eager"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </a>

      {/* Navigation Arrows */}
      <button 
        type="button" 
        className="slider-arrow prev" 
        onClick={handlePrev} 
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        type="button" 
        className="slider-arrow next" 
        onClick={handleNext} 
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}>
        {activeSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentIndex ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: idx === currentIndex ? 'var(--e-global-color-secondary)' : 'rgba(255, 255, 255, 0.6)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
