import React from 'react';
import brandConfig from '../data/brandConfig';

export default function GowthamAboutSection({ 
  imageSrc = "/images/about-astro.webp", 
  imageAlt = "about astro" 
}) {
  return (
    <section className="about-section" id="about">
      <div className="elementor-container">
        <div className="about-grid">
          
          {/* Left Arch Image */}
          <div className="about-left-image">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }}
            />
          </div>

          {/* Right Content */}
          <div className="about-right-content">
            
            {/* Pill Badge */}
            <div className="img-heading-pill">
              <img 
                src={brandConfig.faviconUrl} 
                alt={`${brandConfig.name} favicon`} 
              />
              <span>{brandConfig.bannerBadge}</span>
            </div>

            {/* Heading */}
            <h2 className="gowtham-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Know More About<br />{brandConfig.name}
            </h2>

            {/* Paragraph 1 */}
            <p>
              {brandConfig.name} is a renowned astrologer and psychic reader based in Canada, carrying forward his family’s legacy of astrological wisdom. With forefathers who were esteemed astrologers in India, he developed a deep passion for astrology from a young age. His family has served countless individuals across generations, blending ancient knowledge with modern insights. {brandConfig.name.split(' ').pop()} holds a degree in Vedic astrology and has mastered diverse disciplines, including face reading, horoscope analysis, and palmistry, offering precise future predictions and life guidance.
            </p>

            {/* Paragraph 2 */}
            <p>
              Specializing in spiritual and emotional well-being, {brandConfig.name} provides solutions for love problems, marriage issues, and career challenges. His expertise extends to Vashikaran, love spells, and removing negative energies like black magic or dark forces. Clients trust him for his accurate birth chart readings, psychic insights, and effective spiritual healing techniques that bring positivity and balance into their lives.
            </p>

            {/* Experience Counter Box */}
            <div className="experience-counter-box">
              <span className="counter-text">
                years of<br />experience
              </span>
              <span className="counter-num">
                30+
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
