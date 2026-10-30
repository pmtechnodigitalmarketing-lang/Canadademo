import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, CheckCircle, Sparkles, Star, ShieldCheck } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import { servicesData } from '../data/servicesData';
import locationsData from '../data/locationsData';
import ContactFAQ from '../components/ContactFAQ';
import WhyChooseUs from '../components/WhyChooseUs';

export default function LocationDetail() {
  const { slug } = useParams();

  const formatTitle = (s) => {
    if (!s) return "Astrology Services in Canada";
    return s
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const extractRegion = (s) => {
    if (!s) return "Canada";
    const parts = s.split('-in-');
    if (parts.length > 1) {
      return parts[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return "Canada";
  };

  const extractService = (s) => {
    if (!s) return null;
    const parts = s.split('-in-');
    if (parts.length > 0) {
      return servicesData.find(service => service.id === parts[0]);
    }
    return null;
  };

  const matchedLocation = locationsData.find(
    l => l.slug.toLowerCase() === (slug || '').toLowerCase() || l.id.toLowerCase() === (slug || '').toLowerCase()
  );

  const city = matchedLocation ? matchedLocation.city : extractRegion(slug);
  const h1Title = matchedLocation?.headingH1 || `Best Astrologer in ${city}, Canada`;
  const h2Title = matchedLocation?.headingH2 || `Expert Vedic Astrology Reading & Spiritual Guidance in ${city}`;
  const serviceDetail = extractService(slug);

  const serviceImage = matchedLocation?.image || serviceDetail?.image || "/images/Shiv%20Shambho.jpg";
  const serviceDesc = matchedLocation?.description || serviceDetail?.fullDesc || serviceDetail?.shortDesc || `Residents of ${city} have relied on ${brandConfig.name} for over 25+ years to find definitive answers and fast solutions to emotional heartbreak, black magic effects, marriage turmoil, financial stagnation, and dark energy blockages.`;
  const detailedText = matchedLocation?.detailedContent || `As Canada's premier Vedic astrologer and psychic spiritual healer, ${brandConfig.name} provides accurate birth chart readings, love problem solutions, and black magic protection for clients in ${city} and across Canada.`;

  return (
    <div>
      {/* 1. Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '55px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
            <img src={brandConfig.faviconUrl} alt={brandConfig.brandName} />
            <span style={{ color: '#ffffff' }}>Top Rated Astrologer in {city}</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '12px',
            lineHeight: 1.2
          }}>
            {h1Title}
          </h1>

          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.92)', maxWidth: '850px', margin: '0 auto' }}>
            {matchedLocation?.tagline || `${brandConfig.name} offers guaranteed Vedic astrology, psychic guidance, and spiritual remedies in ${city}.`}
          </p>
        </div>
      </div>

      {/* 2. Main Location Content Section */}
      <section style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="elementor-container">
          <div className="about-grid">
            
            {/* Left Image & Review Card */}
            <div>
              <img 
                src={serviceImage} 
                alt={`${h1Title} - ${brandConfig.name}`}
                style={{
                  width: '100%',
                  borderRadius: '110px 0 0 0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  objectFit: 'cover',
                  maxHeight: '480px',
                  marginBottom: '25px'
                }}
              />

              {matchedLocation?.reviewSnippet && (
                <div style={{
                  background: '#fdf7eb',
                  border: '1px solid #e8d7b5',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f0b415', marginBottom: '8px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f0b415" />
                    ))}
                    <span style={{ color: '#666', fontSize: '13px', marginLeft: '6px', fontWeight: 600 }}>Verified Client in {city}</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: '#333', fontSize: '14.5px', lineHeight: 1.6, margin: '0 0 10px 0' }}>
                    "{matchedLocation.reviewSnippet.text}"
                  </p>
                  <p style={{ fontWeight: 700, color: 'var(--e-global-color-primary)', fontSize: '14px', margin: 0 }}>
                    — {matchedLocation.reviewSnippet.author} ({matchedLocation.reviewSnippet.location})
                  </p>
                </div>
              )}
            </div>

            {/* Right Content */}
            <div>
              <div className="img-heading-pill">
                <img src={brandConfig.faviconUrl} alt={brandConfig.brandName} />
                <span>trusted in {city}</span>
              </div>

              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                {h2Title}
              </h2>

              <p style={{ fontSize: '16px', color: '#444444', lineHeight: 1.8, marginBottom: '18px' }}>
                {serviceDesc}
              </p>

              <p style={{ fontSize: '15.5px', color: '#555555', lineHeight: 1.8, marginBottom: '25px' }}>
                {detailedText}
              </p>

              {/* Popular Services in City */}
              {matchedLocation?.popularServices && (
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--e-global-color-primary)',
                    marginBottom: '15px'
                  }}>
                    Popular Astrology Solutions in {city}:
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                    {matchedLocation.popularServices.map((serviceName, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2b0404', fontSize: '14.5px', fontWeight: 600 }}>
                        <CheckCircle size={17} color="var(--e-global-color-primary)" style={{ flexShrink: 0 }} />
                        <span>{serviceName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', background: '#faf8f5', padding: '16px 20px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2b0404', fontWeight: 600, fontSize: '14px' }}>
                  <ShieldCheck size={18} color="var(--e-global-color-primary)" />
                  <span>Immediate Consultations Available via Direct Phone or WhatsApp</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2b0404', fontWeight: 600, fontSize: '14px' }}>
                  <ShieldCheck size={18} color="var(--e-global-color-primary)" />
                  <span>Confidential In-Person Appointments by Prior Booking in British Columbia</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2b0404', fontWeight: 600, fontSize: '14px' }}>
                  <ShieldCheck size={18} color="var(--e-global-color-primary)" />
                  <span>100% Satvik, Safe &amp; Permanent Vedic Spiritual Remedies</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <a href={`tel:${brandConfig.phoneRaw}`} className="header-phone-btn">
                  <Phone size={18} />
                  <span>Call {brandConfig.phoneDisplay}</span>
                </a>

                <a 
                  href={brandConfig.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Astrologer</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Contact & FAQ */}
      <ContactFAQ />
    </div>
  );
}
