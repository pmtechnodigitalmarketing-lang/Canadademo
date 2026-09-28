import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle, Navigation, Sparkles } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import locationsData from '../data/locationsData';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactFAQ from '../components/ContactFAQ';

export default function Locations() {
  const [selectedProvince, setSelectedProvince] = useState('All');

  const provinces = ['All', 'Alberta', 'Ontario', 'British Columbia', 'Quebec'];

  const filteredLocations = selectedProvince === 'All' 
    ? locationsData 
    : locationsData.filter(loc => loc.province.toLowerCase() === selectedProvince.toLowerCase());

  return (
    <div style={{ paddingTop: '10px' }}>
      
      {/* 1. Page Title Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '55px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
            <img src={brandConfig.faviconUrl} alt={brandConfig.brandName} />
            <span style={{ color: '#ffffff' }}>Across All Canadian Provinces</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '12px'
          }}>
            Our Astrological Locations in Canada
          </h1>

          <p style={{ fontSize: '16.5px', color: 'rgba(255,255,255,0.92)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            {brandConfig.name} offers confidential in-person appointments in British Columbia and prompt phone &amp; WhatsApp readings across all Canadian provinces and territories. Explore our prominent city hubs below.
          </p>
        </div>
      </div>

      {/* 2. Main Locations Directory Section */}
      <section style={{ padding: '60px 0', background: '#fdfbf7' }}>
        <div className="elementor-container">
          
          {/* Province Filter Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px'
          }}>
            {provinces.map((prov) => (
              <button
                key={prov}
                onClick={() => setSelectedProvince(prov)}
                style={{
                  padding: '9px 22px',
                  borderRadius: '30px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: selectedProvince === prov 
                    ? '2px solid var(--e-global-color-primary)' 
                    : '1px solid rgba(0, 0, 0, 0.12)',
                  background: selectedProvince === prov 
                    ? 'var(--e-global-color-primary)' 
                    : '#ffffff',
                  color: selectedProvince === prov 
                    ? '#ffffff' 
                    : '#333333',
                  boxShadow: selectedProvince === prov 
                    ? '0 4px 15px rgba(78, 1, 1, 0.25)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                {prov === 'All' ? '✦ All Canadian Cities' : prov}
              </button>
            ))}
          </div>

          {/* Locations Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(18px, 3vw, 30px)'
          }}>
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="locations-page-card"
              >
                
                {/* Place Photo Header */}
                <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={loc.image}
                    alt={`${loc.city}, ${loc.province} skyline`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />

                  {/* Province Tag */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.25)'
                  }}>
                    {loc.province}
                  </span>

                  {/* Calgary HQ Badge */}
                  {loc.isHeadquarters && (
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'linear-gradient(135deg, #f3b723 0%, #d4af37 100%)',
                      color: '#2b0404',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                    }}>
                      ★ Main Sanctuary
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={20} style={{ color: 'var(--e-global-color-primary)', flexShrink: 0 }} />
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--e-global-color-darkred)',
                      margin: 0
                    }}>
                      <Link to={`/locations/${loc.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        Astrologer in {loc.city}
                      </Link>
                    </h3>
                  </div>

                  {/* Card Actions Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    gap: '10px'
                  }}>
                    <Link
                      to={`/locations/${loc.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'var(--e-global-color-primary)',
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '13px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <span>Explore City</span>
                      <ArrowRight size={14} />
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <a
                        href={`tel:${brandConfig.phoneRaw}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          background: 'rgba(78, 1, 1, 0.08)',
                          color: 'var(--e-global-color-primary)',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        title={`Call Astrologer for ${loc.city}`}
                      >
                        <Phone size={15} />
                      </a>

                      <a
                        href={brandConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          background: 'rgba(37, 211, 102, 0.12)',
                          color: '#25D366',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Contact & FAQ */}
      <ContactFAQ />

      <style>{`
        .locations-page-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 35px rgba(78, 1, 1, 0.15) !important;
          border-color: var(--e-global-color-secondary) !important;
        }
      `}</style>
    </div>
  );
}
