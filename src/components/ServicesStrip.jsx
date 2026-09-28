import React from 'react';
import { Link } from 'react-router-dom';
import brandConfig from '../data/brandConfig';

const stripServices = [
  {
    image: "/images/assets/image-14-1.webp",
    title: "image-14 (1)",
    link: "/get-ex-love-back"
  },
  {
    image: "/images/assets/image-9.webp",
    title: "image-9",
    link: "/psychic-reading"
  },
  {
    image: "/images/assets/image-12.webp",
    title: "image-12",
    link: "/black-magic-removal"
  },
  {
    image: "/images/assets/image-13-1.webp",
    title: "image-13 (1)",
    link: "/spiritual-cleansing"
  },
  {
    image: "/images/assets/image-10.webp",
    title: "image-10",
    link: "/negative-energy-removal"
  },
  {
    image: "/images/assets/image-111.webp",
    title: "image-111",
    link: "/jealousy-and-curse-removal"
  }
];

export default function ServicesStrip() {
  return (
    <section style={{ padding: '45px 0 25px 0', background: '#ffffff' }}>
      <div className="elementor-container" style={{ textAlign: 'center' }}>
        
        {/* Exact Elementor Pill Badge */}
        <div className="img-heading-pill">
          <img 
            src={brandConfig.faviconUrl} 
            alt={`${brandConfig.name} favicon`} 
          />
          <span>{brandConfig.bannerBadge}</span>
        </div>

        {/* Section Heading */}
        <h1 className="section-title">
          Best Astrologer in Canada: our top services
        </h1>

        {/* 6 Grid items */}
        <div className="services-strip-carousel">
          {stripServices.map((service, index) => (
            <div key={index} className="strip-item">
              <a href={`tel:${brandConfig.phoneRaw}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
