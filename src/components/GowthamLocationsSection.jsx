import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import locationsData from '../data/locationsData';

export default function GowthamLocationsSection() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedLocations = [...locationsData, ...locationsData];

  return (
    <section className="gowtham-locations-section" id="serving-locations">
      {/* Section Header */}
      <div className="elementor-container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 35px' }}>
          <div className="img-heading-pill">
            <img 
              src={brandConfig.faviconUrl} 
              alt="pandith astrologer favicon" 
            />
            <span>Pandith GOWTHAM</span>
          </div>

          <h2 className="gowtham-section-title" style={{ marginTop: '10px' }}>
            Where We Are Serving In Canada
          </h2>

          <p style={{ color: '#444444', fontSize: '15.5px', lineHeight: 1.7, marginTop: '14px' }}>
            {brandConfig.name} provides trusted Vedic astrology, accurate psychic reading, spiritual healing, and relationship problem solutions across Canada. Available for in-person consultations in Alberta and immediate phone or WhatsApp guidance nationwide.
          </p>
        </div>
      </div>

      {/* Single-Line Continuous Slow Moving Slider */}
      <div className="gowtham-locations-slider-wrap">
        <div className="gowtham-locations-track">
          {duplicatedLocations.map((loc, index) => (
            <div key={`${loc.id}-${index}`} className="gowtham-location-card">
              
              {/* Actual Place Image Container */}
              <div className="location-img-wrap">
                <img 
                  src={loc.image} 
                  alt={`${loc.city}, ${loc.province} skyline`} 
                  loading="lazy"
                />

                {/* Province Pill */}
                <span className="location-province-tag">
                  {loc.province}
                </span>

                {/* HQ Badge for Calgary */}
                {loc.isHeadquarters && (
                  <span className="location-hq-tag">
                    Main Sanctuary
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="location-card-body">
                <h3 className="location-card-title">
                  <MapPin size={17} style={{ color: 'var(--e-global-color-primary)', flexShrink: 0 }} />
                  <Link to={`/locations/${loc.slug}`}>
                    Astrologer in {loc.city}
                  </Link>
                </h3>

                <p className="location-card-desc">
                  {loc.description}
                </p>

                {/* Card Footer Actions */}
                <div className="location-card-footer">
                  <Link to={`/locations/${loc.slug}`} className="location-view-link">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a 
                    href={`tel:${brandConfig.phoneRaw}`} 
                    className="location-call-link"
                    title={`Call Astrologer in ${loc.city}`}
                  >
                    <Phone size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
