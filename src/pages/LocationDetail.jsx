import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Calendar, Star, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';
import locationsData from '../data/locationsData';
import servicesData from '../data/servicesData';
import brandConfig from '../data/brandConfig';

export default function LocationDetail({ onOpenAppointment }) {
  const { locationSlug } = useParams();

  const location = locationsData.find(l => l.slug === locationSlug) || locationsData[0];

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const otherLocations = locationsData.filter(l => l.id !== location.id);

  return (
    <div style={{ background: 'var(--bg-parchment)', paddingTop: '2rem', paddingBottom: '5rem' }}>
      
      {/* Breadcrumb */}
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--crimson-800)' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/locations" style={{ color: 'var(--crimson-800)' }}>Locations</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--crimson-950)', fontWeight: '600' }}>{location.city}</span>
        </div>
      </div>

      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #2b060d 0%, #150205 100%)',
        color: '#ffffff',
        padding: '3.5rem 0',
        borderBottom: '2px solid var(--gold-500)',
        marginBottom: '3.5rem'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
              <MapPin size={14} style={{ color: 'var(--gold-400)' }} />
              <span>{location.city}, {location.province} &bull; Canada</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif-royal)',
              fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Best Indian Astrologer in <span className="gold-gradient">{location.city}</span>
            </h1>

            <p style={{
              color: '#fed7aa',
              fontSize: '1.15rem',
              lineHeight: 1.6,
              marginBottom: '1.75rem'
            }}>
              {location.tagline}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`} className="btn-primary">
                <Phone size={16} />
                <span>Call {location.city} Office: {location.phone}</span>
              </a>

              <button onClick={onOpenAppointment} className="btn-crimson">
                <Calendar size={16} />
                <span>Book In-Person / Phone Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem'
        }}>
          
          {/* Main Column */}
          <div style={{ gridColumn: 'span 2' }}>
            
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2.5rem'
            }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--crimson-900)', marginBottom: '1rem' }}>
                Trusted Astrology Services in <span className="gold-gradient">{location.city}, {location.province}</span>
              </h2>

              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                {location.description} For decades, residents of {location.city} have relied on Pandith Raghav Guruji's generational insights to resolve painful relationship breakups, stop divorces, and eliminate black magic attacks.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                Every consultation for clients in {location.city} is held with complete dedication to Vedic principles and utmost privacy. Whether you prefer an in-person reading or a confidential phone/WhatsApp session, Guruji offers compassionate answers.
              </p>
            </div>

            {/* Popular Services in this city */}
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--crimson-900)', marginBottom: '1.25rem' }}>
                Most Requested Services in {location.city}:
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {location.popularServices.map((srv, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    background: 'var(--bg-parchment)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(109, 14, 32, 0.12)'
                  }}>
                    <Sparkles size={16} style={{ color: 'var(--crimson-700)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--crimson-950)', fontWeight: '700' }}>
                      {srv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* City Client Review */}
            {location.reviewSnippet && (
              <div style={{
                background: 'linear-gradient(145deg, #2b060d 0%, #170205 100%)',
                border: '2px solid var(--gold-400)',
                borderRadius: '12px',
                padding: '2rem',
                color: '#ffffff',
                boxShadow: 'var(--shadow-crimson)'
              }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '0.75rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: 'var(--gold-400)', color: 'var(--gold-400)' }} />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem', color: '#fed7aa' }}>
                  "{location.reviewSnippet.text}"
                </p>
                <div style={{ fontWeight: '700', color: 'var(--gold-300)' }}>
                  {location.reviewSnippet.author} &bull; <span style={{ color: '#ffffff' }}>{location.reviewSnippet.location}</span>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div>
            
            <div style={{
              background: '#ffffff',
              border: '2px solid var(--gold-500)',
              borderRadius: '12px',
              padding: '1.85rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <MapPin size={28} style={{ color: 'var(--crimson-700)', margin: '0 auto 0.5rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--crimson-900)' }}>
                  {location.city} Sanctuary
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {location.address}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <Phone size={16} />
                  <span>Call {location.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.whatsapp}?text=Hello%20Pandith%20Raghav%20Guruji%2C%20I%20am%20in%20${encodeURIComponent(location.city)}%20and%20need%20astrology%20guidance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crimson"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Guruji</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="btn-outline-gold"
                  style={{ width: '100%', fontSize: '0.9rem', color: 'var(--crimson-900)' }}
                >
                  <Calendar size={16} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Other Cities */}
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--crimson-900)', marginBottom: '1rem', borderBottom: '2px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.4rem' }}>
                Other Canadian Locations
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {otherLocations.map((other) => (
                  <li key={other.id}>
                    <Link
                      to={`/locations/${other.slug}`}
                      style={{
                        display: 'block',
                        padding: '0.55rem',
                        borderRadius: '6px',
                        color: 'var(--crimson-950)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        background: 'var(--bg-parchment)'
                      }}
                    >
                      Astrologer in {other.city} ({other.province})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
