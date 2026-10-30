import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const desktopSlides = [
  {
    id: 1,
    image: "/images/exact-banners/banner-clean-0.webp",
    alt: "Love Problem Solution & Ex Love Back - Best Astrologer in Canada",
    tag: "✦ Astrologer Near Me | Love Problem Solution",
    desc: "Heal painful breakups, consult Canada's top love astrologer, and reunite with your partner fast using sacred Vedic Akarshan remedies.",
    link: "/get-ex-love-back"
  },
  {
    id: 2,
    image: "/images/exact-banners/banner-clean-1.webp",
    alt: "Black Magic Removal Expert Near Me - Divine Protection",
    tag: "✦ Black Magic Removal Expert Near Me",
    desc: "Break dark occult curses, dissolve destructive jealousy energies, and shield your home with divine Sudarshana & Kali Kavach.",
    link: "/black-magic-removal"
  },
  {
    id: 3,
    image: "/images/exact-banners/banner-clean-2.webp",
    alt: "Vedic Astrology Reading & Spiritual Cleansing in Canada",
    tag: "✦ Vedic Astrology Reading & Spiritual Cleansing",
    desc: "Rebalance your inner chakras, eliminate mental heaviness, and awaken peace, emotional clarity, and positive vibrations.",
    link: "/spiritual-cleansing"
  },
  {
    id: 4,
    image: "/images/exact-banners/banner-clean-3.webp",
    alt: "Psychic Astrologer & Birth Chart Reading Near Me",
    tag: "✦ Psychic Astrologer & Birth Chart Reading",
    desc: "Unveil clarity into upcoming crossroads, unlock soulmate destinies, and make life choices with confident Vedic spiritual guidance.",
    link: "/psychic-reading"
  },
  {
    id: 5,
    image: "/images/exact-banners/banner-clean-4.webp",
    alt: "Marriage Astrology & Husband Wife Problem Solution",
    tag: "✦ Marriage Astrology & Sacred Marital Harmony",
    desc: "Resolve continuous marital friction, halt painful divorce, and build an unbroken foundation of mutual love and trust.",
    link: "/relationship-problems"
  }
];

const mobileSlides = [
  {
    id: 1,
    image: "/images/exact-banners/mob-clean-1.webp",
    alt: "Marriage Astrology - Best Astrologer in Canada",
    tag: "✦ Marriage Astrology & Harmony",
    desc: "Resolve marital friction, halt divorce, and rebuild lifelong mutual trust and emotional closeness.",
    link: "/relationship-problems"
  },
  {
    id: 2,
    image: "/images/exact-banners/mob-clean-2.webp",
    alt: "Love Problem Solution - Astrologer Near Me",
    tag: "✦ Love Problem Solution Near Me",
    desc: "Heal painful breakups and reignite everlasting affection with your true soulmate fast.",
    link: "/get-ex-love-back"
  },
  {
    id: 3,
    image: "/images/exact-banners/mob-clean-3.webp",
    alt: "Black Magic Removal Expert Near Me",
    tag: "✦ Black Magic Removal Expert",
    desc: "Destroy dark occult curses and place an impenetrable shield of divine peace over your loved ones.",
    link: "/black-magic-removal"
  },
  {
    id: 4,
    image: "/images/exact-banners/mob-clean-4.webp",
    alt: "Vedic Astrology Reading & Chakra Cleansing",
    tag: "✦ Vedic Chakra Cleansing",
    desc: "Purify lingering negative energy, restore emotional wellness, and uplift your daily vitality.",
    link: "/spiritual-cleansing"
  },
  {
    id: 5,
    image: "/images/exact-banners/mob-clean-5.webp",
    alt: "Psychic Astrologer in Canada",
    tag: "✦ Psychic Astrologer Reading",
    desc: "Unlock authentic cosmic foresight and receive clear direction for love, career, and destiny.",
    link: "/psychic-reading"
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 45;

  useEffect(() => {
    // Initial delay allows full reading of the primary hero before smooth rotating begins
    let timer;
    const initialDelay = setTimeout(() => {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % desktopSlides.length);
      }, 5000);
    }, 15000);

    return () => {
      clearTimeout(initialDelay);
      if (timer) clearInterval(timer);
    };
  }, []);

  const handlePrev = (e) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + desktopSlides.length) % desktopSlides.length);
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % desktopSlides.length);
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

  const currentDesktop = desktopSlides[currentIndex];
  const currentMobile = mobileSlides[currentIndex];

  return (
    <section className="hero-slider-container" aria-label="Astrology Banner Slider">
      <div 
        className="hero-slider-slide"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet={currentMobile.image} 
            width="412" 
            height="193" 
          />
          <img 
            src={currentDesktop.image} 
            alt={currentDesktop.alt}
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="550"
            className="hero-slider-img"
          />
        </picture>

        {/* Thematic Description Box according to the slide image */}
        <div className="banner-desc-overlay">
          <span className="banner-desc-tag">{currentDesktop.tag}</span>
          <p className="banner-desc-text">
            {currentDesktop.desc}
          </p>
          <Link to={currentDesktop.link} className="banner-desc-btn">
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
        {desktopSlides.map((_, idx) => (
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
