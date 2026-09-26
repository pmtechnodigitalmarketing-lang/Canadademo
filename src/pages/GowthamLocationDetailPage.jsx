import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import { servicesData } from '../data/servicesData';
import locationsData from '../data/locationsData';
import GowthamContactFAQ from '../components/GowthamContactFAQ';
import GowthamWhyChooseUs from '../components/GowthamWhyChooseUs';

export default function GowthamLocationDetailPage() {
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
  const title = matchedLocation 
    ? `Astrologer in ${matchedLocation.city}` 
    : formatTitle(slug);
  const serviceDetail = extractService(slug);

  const serviceImage = matchedLocation?.image || serviceDetail?.image || "https://pandithgowtham.com/wp-content/uploads/2026/02/t6rah7e0ejw55tclactr.webp";
  const serviceDesc = matchedLocation?.description || serviceDetail?.fullDesc || serviceDetail?.shortDesc || `Residents of ${city} have relied on ${brandConfig.name} for over 25+ years to find definitive answers and fast solutions to emotional heartbreak, black magic effects, marriage turmoil, financial stagnation, and dark energy blockages.`;

  return (
    <div>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '50px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
            <img src={brandConfig.faviconUrl} alt="Pandith Astrologer" />
            <span style={{ color: '#ffffff' }}>Top Rated Astrologer in {city}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '10px'
          }}>
            {title}
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)' }}>
            Pandith Astrologer offers guaranteed Vedic astrology, psychic guidance, and spiritual remedies in {city}.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="elementor-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            
            <div>
              <img 
                src={serviceImage} 
                alt={title}
                style={{
                  width: '100%',
                  borderRadius: '110px 0 0 0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  objectFit: 'cover',
                  maxHeight: '500px'
                }}
              />
            </div>

            <div>
              <div className="img-heading-pill">
                <img src={brandConfig.faviconUrl} alt="Pandith Astrologer" />
                <span>trusted in {city}</span>
              </div>

              <h2 className="gowtham-section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                {serviceDetail?.title ? `${serviceDetail.title} in ${city}` : `Expert Astrological Guidance for ${title}`}
              </h2>

              <p style={{ fontSize: '16px', color: '#444444', lineHeight: 1.8, marginBottom: '20px' }}>
                {serviceDesc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2b0404', fontWeight: 600 }}>
                  <CheckCircle size={20} color="var(--e-global-color-primary)" />
                  <span>Immediate Consultations Available via Phone or WhatsApp</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2b0404', fontWeight: 600 }}>
                  <CheckCircle size={20} color="var(--e-global-color-primary)" />
                  <span>In-Person Consultations in Alberta by Prior Appointment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2b0404', fontWeight: 600 }}>
                  <CheckCircle size={20} color="var(--e-global-color-primary)" />
                  <span>Permanent and Time-Tested Vedic Spiritual Remedies</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <a href={`tel:${brandConfig.phoneRaw}`} className="header-phone-btn">
                  <Phone size={18} />
                  <span>Call {brandConfig.phone}</span>
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
                    padding: '10px 22px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '15px'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Guruji</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <GowthamWhyChooseUs />

      {/* Contact & FAQ */}
      <GowthamContactFAQ />
    </div>
  );
}
