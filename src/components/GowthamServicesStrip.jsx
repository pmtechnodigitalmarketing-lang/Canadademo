import React from 'react';
import { Link } from 'react-router-dom';
import brandConfig from '../data/brandConfig';

const stripServices = [
  {
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/image-14-1.webp",
    title: "image-14 (1)",
    link: "/get-ex-love-back"
  },
  {
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/image-9.webp",
    title: "image-9",
    link: "/psychic-reading"
  },
  {
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/image-12.webp",
    title: "image-12",
    link: "/black-magic-removal"
  },
  {
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/image-13-1.webp",
    title: "image-13 (1)",
    link: "/spiritual-cleansing"
  },
  {
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/image-10.webp",
    title: "image-10",
    link: "/negative-energy-removal"
  },
  {
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/image-111.webp",
    title: "image-111",
    link: "/jealousy-and-curse-removal"
  }
];

export default function GowthamServicesStrip() {
  return (
    <section style={{ padding: '45px 0 25px 0', background: '#ffffff' }}>
      <div className="elementor-container" style={{ textAlign: 'center' }}>
        
        {/* Exact Elementor Pill Badge */}
        <div className="img-heading-pill">
          <img 
            src={brandConfig.faviconUrl} 
            alt="pandith astrologer favicon" 
          />
          <span>{brandConfig.bannerBadge}</span>
        </div>

        {/* Section Heading */}
        <h1 className="gowtham-section-title">
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
