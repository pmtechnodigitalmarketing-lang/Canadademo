import React from 'react';
import brandConfig from '../data/brandConfig';

export default function AboutSection({ 
  imageSrc = "/images/about-astro.webp", 
  imageAlt = "Narayan Astrologer - Best Astrologer in Canada" 
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
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Know More About<br />{brandConfig.name}
            </h2>

            {/* Paragraph 1 */}
            <p>
              <strong>{brandConfig.name}</strong> is widely recognized as the <strong>best astrologer in Canada</strong> and premier <strong>psychic astrologer</strong>, carrying forward five generations of sacred Vedic wisdom. Born into an esteemed lineage of Indian Jyotish masters, he developed deep mastery in planetary science and spiritual energy from an early age. Holding traditional degrees in Vedic Jyotish, Master Narayan specializes in comprehensive <strong>birth chart readings</strong> (Janam Kundli), <strong>vedic horoscope analysis</strong>, <strong>palmistry readings</strong>, and face reading (Samudrika Shastra), delivering uncannily accurate future predictions.
            </p>

            {/* Paragraph 2 */}
            <p>
              Whether you are searching for a trusted <strong>astrologer near me</strong> for an immediate <strong>love problem solution</strong>, looking to <strong>get your ex love back</strong>, or seeking an authentic <strong>black magic removal expert near me</strong>, {brandConfig.name} offers time-tested Sattvic remedies. His proven rituals—including pure Vedic Vashikaran, planetary dosha pacification (Manglik &amp; Kaal Sarp Dosha), evil eye protection, and biofield chakra healing—have brought peace, prosperity, and joy to over 35,000+ satisfied clients across Canada and worldwide.
            </p>

            {/* Experience Counter Box */}
            <div className="experience-counter-box">
              <span className="counter-text">
                years of<br />experience
              </span>
              <span className="counter-num">
                {brandConfig.counterYears}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
