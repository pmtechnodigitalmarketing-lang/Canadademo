import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import locationsData from '../data/locationsData';
import brandConfig from '../data/brandConfig';

export default function LocationsDirectory({ showTitle = true }) {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-parchment)' }} id="locations">
      <div className="container">
        
        {showTitle && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-badge">
              <MapPin size={14} style={{ color: 'var(--saffron-500)' }} />
              <span>Canada-Wide Astrological Presence</span>
            </div>

            <h2 className="section-title">
              Our Regional <span className="gold-gradient">City Hubs Across Canada</span>
            </h2>
            
            <div className="divider-gold"></div>

            <p className="section-subtitle">
              Offering both confidential in-person appointments at our Calgary &amp; Greater Toronto Area sanctuaries, as well as immediate remote phone &amp; WhatsApp readings for all Canadian provinces.
            </p>
          </div>
        )}

        {/* City Hubs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              className="card-sacred"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-300)'
                  }}>
                    <Navigation size={18} />
                  </div>

                  <span style={{
                    background: 'var(--gold-100)',
                    color: 'var(--crimson-950)',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {loc.province}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--crimson-900)', marginBottom: '0.35rem' }}>
                  <Link to={`/locations/${loc.slug}`} style={{ color: 'inherit' }}>
                    Astrologer in {loc.city}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {loc.description}
                </p>

                {/* Popular Services in City */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--crimson-800)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                    Popular in {loc.city}:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {loc.popularServices.slice(0, 3).map((item, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(109, 14, 32, 0.05)',
                        border: '1px solid rgba(109, 14, 32, 0.12)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '3px',
                        fontSize: '0.75rem',
                        color: 'var(--crimson-900)'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--crimson-800)',
                    fontWeight: '700',
                    fontSize: '0.85rem'
                  }}
                >
                  <Phone size={14} style={{ color: 'var(--gold-600)' }} />
                  <span>{loc.phone}</span>
                </a>

                <Link
                  to={`/locations/${loc.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: 'var(--crimson-700)',
                    fontWeight: '700',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--saffron-500)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--crimson-700)'}
                >
                  <span>City Page</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
