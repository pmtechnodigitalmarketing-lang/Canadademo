import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, ChevronLeft, ChevronRight, Award, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import brandConfig from '../data/brandConfig';

const heroSlides = [
  {
    badge: "Specialist In Canada & USA",
    title: "Get Ex Love Back & Reunite Estranged Hearts",
    subtitle: "Permanent reconciliation through sacred Vedic Mohini mantras, Venus (Shukra) shanti, and third-party blockage dissolution.",
    image: "/images/cosmic_shiva_hero.jpg",
    highlight: "Results in 3 to 7 Days • Pure Vedic Sattvic Remedies",
    ctaText: "Reunite With Your Love",
    secondaryText: "WhatsApp Reading"
  },
  {
    badge: "Supreme Protection Specialist",
    title: "Destroy Black Magic, Dark Curses & Evil Eye",
    subtitle: "Shatter occult hexes, demonic voodoo, unexplainable financial blockages, and constant domestic terror with Sudarshan Kavach.",
    image: "/images/services/black-magic-ritual.jpg",
    highlight: "100% Guaranteed Relief • Complete Home & Family Shielding",
    ctaText: "Break The Dark Curse Now",
    secondaryText: "Urgent Protection Call"
  },
  {
    badge: "30+ Years Generational Mastery",
    title: "Accurate Psychic Reading & Kundli Life Roadmap",
    subtitle: "Pinpoint clarity on your marriage timing, soulmate compatibility, career breakthroughs, business investments & hidden enemies.",
    image: "/images/spiritual_clarity_hero.jpg",
    highlight: "Unmatched Precision • Answers to Your Life's Deepest Questions",
    ctaText: "Unveil Your Destiny",
    secondaryText: "Book Horoscope Reading"
  },
  {
    badge: "Marital Peace & Harmony",
    title: "Stop Bitter Divorce & Resolve Husband-Wife Disputes",
    subtitle: "Re-ignite deep intimacy, mutual devotion, and mutual respect. Cancel contentious court separations without bitter conflict.",
    image: "/images/services/indian-wedding-marriage.jpg",
    highlight: "5,000+ Marriages Saved Across North America",
    ctaText: "Heal Your Marriage",
    secondaryText: "Private Couple Consultation"
  },
  {
    badge: "Holistic Pranic Restoration",
    title: "Spiritual Healing & 7 Chakra Biofield Cleansing",
    subtitle: "Dissolve accumulated past trauma, chronic anxiety, heartbreak heaviness, and negative astral cords. Radiate peace and vitality.",
    image: "/images/Shiva Parvati Spiritual wallpaper.jpg",
    highlight: "Feel Instant Lightness, Restful Sleep & Mental Serenity",
    ctaText: "Experience Divine Healing",
    secondaryText: "Schedule Aura Cleanse"
  }
];

export default function HeroSection({ onOpenAppointment }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <section style={{
      position: 'relative',
      minHeight: '620px',
      background: 'linear-gradient(135deg, #1c0307 0%, #2b060d 40%, #150205 100%)',
      color: '#ffffff',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '2px solid rgba(212, 175, 55, 0.4)'
    }}>
      {/* Background Image with Dark Crimson Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('${slide.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.22,
        transition: 'background-image 0.8s ease-in-out, opacity 0.8s',
        filter: 'saturate(1.2)'
      }} />

      {/* Radiant Cosmic Gradients */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(109, 14, 32, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(136, 19, 41, 0.45) 0%, rgba(26, 3, 7, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* Main Hero Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '3.5rem 1.25rem 4rem' }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Top Energetic Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.25) 0%, rgba(109, 14, 32, 0.4) 100%)',
            border: '1px solid var(--gold-400)',
            borderRadius: '9999px',
            padding: '0.4rem 1.15rem',
            marginBottom: '1.25rem',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.25)'
          }}>
            <Sparkles size={16} style={{ color: 'var(--gold-300)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.825rem',
              fontWeight: '800',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-200)'
            }}>
              {slide.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontFamily: 'var(--font-serif-royal)',
            fontSize: 'clamp(2.1rem, 4.8vw, 3.8rem)',
            fontWeight: '900',
            lineHeight: 1.15,
            color: '#ffffff',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
            marginBottom: '1.15rem'
          }}>
            {slide.title.split('&').map((part, index, arr) => (
              <React.Fragment key={index}>
                {part}
                {index < arr.length - 1 && (
                  <span style={{ color: 'var(--gold-400)' }}> &amp; </span>
                )}
              </React.Fragment>
            ))}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.22rem)',
            lineHeight: 1.65,
            color: '#fed7aa',
            marginBottom: '1.5rem',
            maxWidth: '720px',
            fontWeight: '400'
          }}>
            {slide.subtitle}
          </p>

          {/* Highlight Benefit Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(0, 0, 0, 0.45)',
            borderLeft: '4px solid var(--gold-400)',
            padding: '0.65rem 1.25rem',
            borderRadius: '0 8px 8px 0',
            marginBottom: '2rem',
            color: '#ffffff',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            <CheckCircle2 size={18} style={{ color: '#22c55e', flexShrink: 0 }} />
            <span>{slide.highlight}</span>
          </div>

          {/* CTA Actions Group */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a 
              href={`tel:${brandConfig.phoneRaw}`} 
              className="btn-primary"
              style={{
                fontSize: '1.02rem',
                padding: '0.95rem 2rem'
              }}
            >
              <Phone size={18} />
              <span>Call: {brandConfig.phone}</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="btn-crimson"
              style={{
                fontSize: '1.02rem',
                padding: '0.95rem 1.85rem',
                cursor: 'pointer'
              }}
            >
              <Calendar size={18} />
              <span>Book Consultation</span>
            </button>

            <a
              href={brandConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1.5px solid #22c55e',
                color: '#86efac',
                padding: '0.9rem 1.45rem',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '0.92rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#22c55e';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(34, 197, 94, 0.15)';
                e.currentTarget.style.color = '#86efac';
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Trust Badges Strip (Inspired by Master Ganesh Guruji & Pandith Gowtham) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            marginTop: '2.85rem',
            paddingTop: '1.85rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Award size={26} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>30+ Years</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-200)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Generational Lineage</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <ShieldCheck size={26} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>20,000+</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-200)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Clients Served</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Sparkles size={26} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>99.4%</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-200)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Success Rate</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Heart size={26} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.25rem', fontWeight: '800', color: '#ffffff' }}>100%</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-200)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Private &amp; Confidential</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(43, 6, 13, 0.75)',
          border: '1.5px solid var(--gold-500)',
          color: 'var(--gold-300)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'var(--transition)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gold-500)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(43, 6, 13, 0.75)'}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(43, 6, 13, 0.75)',
          border: '1.5px solid var(--gold-500)',
          color: 'var(--gold-300)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'var(--transition)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gold-500)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(43, 6, 13, 0.75)'}
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Navigation Dots */}
      <div style={{
        position: 'absolute',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 20
      }}>
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: currentSlide === idx ? '26px' : '10px',
              height: '10px',
              borderRadius: '9999px',
              background: currentSlide === idx ? 'var(--gold-400)' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
          />
        ))}
      </div>
    </section>
  );
}
