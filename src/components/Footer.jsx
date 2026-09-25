import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import servicesData from '../data/servicesData';
import locationsData from '../data/locationsData';

export default function Footer({ onOpenAppointment }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1f0308 0%, #120204 100%)',
      color: 'rgba(255, 255, 255, 0.75)',
      borderTop: '3px solid var(--gold-500)',
      paddingTop: '5rem',
      paddingBottom: '2rem',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        
        {/* Top 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #881329 0%, #2b060d 100%)',
                border: '2px solid var(--gold-400)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-300)',
                fontFamily: 'var(--font-serif-royal)',
                fontSize: '1.4rem',
                fontWeight: '900',
                flexShrink: 0
              }}>
                ॐ
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif-royal)',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '0.04em'
                }}>
                  PANDITH <span style={{ color: 'var(--gold-400)' }}>RAGHAV</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--gold-200)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Best Astrologer in Canada
                </div>
              </div>
            </div>

            <p style={{ color: '#fed7aa', lineHeight: 1.65, fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Carrying forward over 30 years of generational Vedic Jyotish lineage. Renowned across Canada for resolving complex love estrangements, black magic curses, divorce threats, and life distress through sacred Sattvic rituals.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={`tel:${brandConfig.phoneRaw}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-300)', fontWeight: '700' }}
              >
                <Phone size={16} />
                <span>{brandConfig.phone}</span>
              </a>

              <a
                href={`mailto:${brandConfig.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-200)' }}
              >
                <Mail size={16} />
                <span>{brandConfig.email}</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'rgba(255,255,255,0.7)' }}>
                <Clock size={16} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--gold-400)' }} />
                <span>Mon – Sun: 7:00 AM – 10:30 PM (Emergency 24/7 Available)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Top Services */}
          <div>
            <h4 style={{
              color: 'var(--gold-300)',
              fontSize: '1.15rem',
              marginBottom: '1.25rem',
              borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Top Sacred Services
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'var(--transition)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold-300)'; e.currentTarget.style.paddingLeft = '5px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    &bull; {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <Link to="/services" style={{ color: 'var(--gold-400)', fontWeight: '700', fontSize: '0.85rem' }}>
                  View All 12 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Canada Regional Hubs */}
          <div>
            <h4 style={{
              color: 'var(--gold-300)',
              fontSize: '1.15rem',
              marginBottom: '1.25rem',
              borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Canadian Locations
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {locationsData.map((loc) => (
                <li key={loc.id}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    style={{ color: 'rgba(255, 255, 255, 0.75)', transition: 'var(--transition)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold-300)'; e.currentTarget.style.paddingLeft = '5px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    &bull; Astrologer in {loc.city} ({loc.province})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Action & Sanctuary */}
          <div>
            <h4 style={{
              color: 'var(--gold-300)',
              fontSize: '1.15rem',
              marginBottom: '1.25rem',
              borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Private Sanctuary
            </h4>

            <p style={{ color: '#fed7aa', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              In-person visits available by advance appointment at our Calgary &amp; Toronto centres. Walk-ins subject to astrologer availability.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', marginBottom: '0.35rem', fontWeight: '700' }}>
                <MapPin size={16} style={{ color: 'var(--gold-400)' }} />
                <span>Calgary Central Office</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                {brandConfig.mainOffice}
              </p>
            </div>

            <button
              onClick={onOpenAppointment}
              className="btn-primary"
              style={{ width: '100%', fontSize: '0.88rem', padding: '0.75rem' }}
            >
              <span>Book Appointment</span>
            </button>
          </div>

        </div>

        {/* Spiritual Disclaimer (Standard on both pandithgowtham & masterganeshguruji) */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.35)',
          borderLeft: '4px solid var(--gold-500)',
          padding: '1rem 1.25rem',
          borderRadius: '0 6px 6px 0',
          margin: '2.5rem 0',
          fontSize: '0.8rem',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.65)'
        }}>
          <strong style={{ color: 'var(--gold-300)' }}>Spiritual &amp; Astrological Disclaimer:</strong> Vedic astrology, psychic reading, and spiritual healing are traditional belief systems rooted in ancient Indian scriptures. Consultations are intended for personal guidance, spiritual insight, and emotional well-being. Results may vary depending on individual karmic factors and free will. Astrology services do not substitute for licensed medical, psychological, legal, or financial advice.
        </div>

        {/* Bottom Copyright & Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <div>
            &copy; {currentYear} {brandConfig.brandName}. All Rights Reserved. Serving Calgary, Edmonton, Toronto, Vancouver &amp; All Canada.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.6)' }}>Services</Link>
            <Link to="/locations" style={{ color: 'rgba(255,255,255,0.6)' }}>Locations</Link>
            <Link to="/zodiac-horoscope" style={{ color: 'rgba(255,255,255,0.6)' }}>Zodiac Tool</Link>
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
