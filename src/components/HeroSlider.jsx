import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const desktopSlides = [
  {
    id: 1,
    image: "/images/exact-banners/banner-clean-0.webp",
    alt: "Love Rekindled - A Guide To Rebuilding Your Relationship",
    tag: "✦ Pure Vedic Reunion Rites",
    desc: "Heal emotional estrangements, restore deep sacred affection, and reignite everlasting harmony with your true partner.",
    link: "/get-ex-love-back"
  },
  {
    id: 2,
    image: "/images/exact-banners/banner-clean-1.webp",
    alt: "Free Yourself Today With Black Magic Removal",
    tag: "✦ Complete Spiritual Shield",
    desc: "Break dark curses, dissolve malicious jealousy energies, and shield your home and family with divine protective Kavach.",
    link: "/black-magic-removal"
  },
  {
    id: 3,
    image: "/images/exact-banners/banner-clean-2.webp",
    alt: "Restore Your Energy With Spiritual Cleansing Today",
    tag: "✦ 7 Chakra Biofield Healing",
    desc: "Rebalance your inner chakras, eliminate mental heaviness, and awaken peace, emotional clarity, and positive vibrations.",
    link: "/spiritual-cleansing"
  },
  {
    id: 4,
    image: "/images/exact-banners/banner-clean-3.webp",
    alt: "Discover Your Future With A Psychic Reading",
    tag: "✦ Accurate Future Roadmaps",
    desc: "Unveil clarity into upcoming crossroads, unlock soulmate destinies, and make life choices with confident spiritual guidance.",
    link: "/psychic-reading"
  },
  {
    id: 5,
    image: "/images/exact-banners/banner-clean-4.webp",
    alt: "Restore Harmony In Husband And Wife Relationship",
    tag: "✦ Sacred Marital Harmony",
    desc: "Resolve continuous marital friction, halt painful separation, and build an unbroken foundation of mutual love and trust.",
    link: "/relationship-problems"
  }
];

const mobileSlides = [
  {
    id: 1,
    image: "/images/exact-banners/mob-clean-1.webp",
    alt: "Restore Harmony In Husband And Wife Relationship - Mobile",
    tag: "✦ Sacred Marital Harmony",
    desc: "Resolve continuous marital friction and rebuild lifelong mutual trust and emotional closeness.",
    link: "/relationship-problems"
  },
  {
    id: 2,
    image: "/images/exact-banners/mob-clean-2.webp",
    alt: "Love Rekindled - Mobile Banner",
    tag: "✦ Pure Vedic Reunion",
    desc: "Heal painful breakups and reignite everlasting affection with your true soulmate.",
    link: "/get-ex-love-back"
  },
  {
    id: 3,
    image: "/images/exact-banners/mob-clean-3.webp",
    alt: "Black Magic Removal - Mobile Banner",
    tag: "✦ Divine Protection",
    desc: "Destroy dark occult curses and place an impenetrable shield of divine peace over your loved ones.",
    link: "/black-magic-removal"
  },
  {
    id: 4,
    image: "/images/exact-banners/mob-clean-4.webp",
    alt: "Spiritual Cleansing - Mobile Banner",
    tag: "✦ Chakra Cleansing",
    desc: "Purify lingering negative energy, restore emotional wellness, and uplift your daily vitality.",
    link: "/spiritual-cleansing"
  },
  {
    id: 5,
    image: "/images/exact-banners/mob-clean-5.webp",
    alt: "Psychic Reading - Mobile Banner",
    tag: "✦ Future Roadmaps",
    desc: "Unlock authentic cosmic foresight and receive clear direction for love, career, and destiny.",
    link: "/psychic-reading"
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

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
    }, 4500);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const handlePrev = (e) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="hero-slider-container" aria-label="Astrology Banner Slider">
      <div 
        className="hero-slider-slide"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img 
          src={activeSlides[currentIndex].image} 
          alt={activeSlides[currentIndex].alt}
          loading="eager"
          className="hero-slider-img"
        />

        {/* 2-Line Thematic Description Box according to the slide image */}
        <div className="banner-desc-overlay">
          <span className="banner-desc-tag">{activeSlides[currentIndex].tag}</span>
          <p className="banner-desc-text">
            {activeSlides[currentIndex].desc}
          </p>
          <Link to={activeSlides[currentIndex].link} className="banner-desc-btn">
            <span>Explore Guidance</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

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
      <div className="slider-dots-container">
        {activeSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
