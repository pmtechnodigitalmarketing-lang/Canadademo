import React from 'react';
import { Link } from 'react-router-dom';
import brandConfig from '../data/brandConfig';

const stripServices = [
  {
    image: "/images/assets/image-14-1.webp",
    title: "Get Ex Love Back & Love Problem Solution",
    alt: "Love problem solution and get ex love back specialist in Canada",
    link: "/get-ex-love-back"
  },
  {
    image: "/images/assets/image-9.webp",
    title: "Psychic Astrologer & Clairvoyant Reading",
    alt: "Psychic astrologer near me and psychic reading in Canada",
    link: "/psychic-reading"
  },
  {
    image: "/images/assets/image-12.webp",
    title: "Black Magic Removal Expert",
    alt: "Black magic removal expert near me in Canada",
    link: "/black-magic-removal"
  },
  {
    image: "/images/assets/image-13-1.webp",
    title: "Spiritual Healing & Biofield Cleansing",
    alt: "Spiritual healing and negative energy cleansing in Canada",
    link: "/spiritual-cleansing"
  },
  {
    image: "/images/assets/image-10.webp",
    title: "Negative Energy Removal",
    alt: "Negative energy removal and aura purification",
    link: "/negative-energy-removal"
  },
  {
    image: "/images/assets/image-111.webp",
    title: "Jealousy & Curse Removal Specialist",
    alt: "Evil eye and jealousy curse removal in Canada",
    link: "/jealousy-and-curse-removal"
  }
];

export default function ServicesStrip() {
  return (
    <section style={{ padding: '45px 0 25px 0', background: '#ffffff' }}>
      <div className="elementor-container" style={{ textAlign: 'center' }}>
        
        {/* Elementor Pill Badge */}
        <div className="img-heading-pill">
          <img 
            src={brandConfig.faviconUrl} 
            alt={`${brandConfig.name} favicon`} 
          />
          <span>{brandConfig.bannerBadge}</span>
        </div>

        {/* Primary Page Heading with High-Value Ranking Keywords */}
        <h1 className="section-title">
          Best Astrologer in Canada: Vedic Astrology Reading &amp; Solutions
        </h1>

        <p style={{
          color: '#444444',
          fontSize: '16px',
          maxWidth: '820px',
          margin: '0 auto 28px auto',
          lineHeight: 1.6
        }}>
          Looking for a trusted <strong>astrologer near me</strong> in Canada? <strong>{brandConfig.name}</strong> brings over 25+ years of generational Vedic wisdom offering accurate birth chart readings, love problem solutions, psychic foresight, and black magic protection across Toronto, Vancouver, Calgary, Brampton, and Mississauga.
        </p>

        {/* 6 Grid items */}
        <div className="services-strip-carousel">
          {stripServices.map((service, index) => (
            <div key={index} className="strip-item">
              <Link to={service.link} title={service.title}>
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  width="190"
                  height="210"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
