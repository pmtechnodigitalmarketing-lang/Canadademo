import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Sparkles, Check, Heart, Shield, Flame, Compass } from 'lucide-react';
import servicesData from '../data/servicesData';
import brandConfig from '../data/brandConfig';

export default function ServicesShowcase({ limit = 12, showTitle = true }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Love & Relationships",
    "Spiritual Protection",
    "Divination & Intuition",
    "Holistic Wellness",
    "Wealth & Prosperity"
  ];

  const filteredServices = selectedCategory === "All" 
    ? servicesData.slice(0, limit)
    : servicesData.filter(s => s.category.includes(selectedCategory)).slice(0, limit);

  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-parchment)' }} id="services">
      <div className="container">
        
        {/* Section Header */}
        {showTitle && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-badge">
              <Sparkles size={14} style={{ color: 'var(--saffron-500)' }} />
              <span>Sacred Vedic Offerings</span>
            </div>

            <h2 className="section-title">
              Our Authentic <span className="gold-gradient">Astrology &amp; Healing</span> Services
            </h2>
            
            <div className="divider-gold"></div>

            <p className="section-subtitle">
              Drawing upon 30+ years of generational Vedic Jyotish, Pandith Raghav Guruji provides authentic, time-tested spiritual remedies to dissolve life's most painful challenges.
            </p>

            {/* Category Filter Tabs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              marginTop: '2rem'
            }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-sans)',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    border: selectedCategory === cat 
                      ? '1px solid var(--crimson-700)' 
                      : '1px solid rgba(212, 175, 55, 0.4)',
                    background: selectedCategory === cat 
                      ? 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-850) 100%)' 
                      : '#ffffff',
                    color: selectedCategory === cat ? '#ffffff' : 'var(--crimson-900)',
                    boxShadow: selectedCategory === cat ? '0 4px 15px rgba(84, 12, 26, 0.25)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredServices.map((service) => (
            <article 
              key={service.id} 
              className="card-sacred"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: '#ffffff',
                border: '1.5px solid rgba(212, 175, 55, 0.28)'
              }}
            >
              {/* Card Image with Hover Zoom */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#2b060d' }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'linear-gradient(135deg, #a71833 0%, #6d0e20 100%)',
                  color: 'var(--gold-200)',
                  border: '1px solid var(--gold-400)',
                  borderRadius: '4px',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.725rem',
                  fontWeight: '800',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'
                }}>
                  {service.badge}
                </div>

                {/* Category Pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  color: 'var(--gold-300)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: '20px',
                  padding: '0.2rem 0.65rem',
                  fontSize: '0.72rem',
                  fontWeight: '600'
                }}>
                  {service.category}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.65rem',
                  lineHeight: 1.3
                }}>
                  <Link 
                    to={`/services/${service.slug}`}
                    style={{ color: 'var(--crimson-900)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--crimson-600)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--crimson-900)'}
                  >
                    {service.title}
                  </Link>
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.15rem'
                }}>
                  {service.shortDesc}
                </p>

                {/* Features Bullets */}
                <ul style={{ listStyle: 'none', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.82rem',
                      color: 'var(--crimson-950)',
                      marginBottom: '0.45rem'
                    }}>
                      <Check size={14} style={{ color: 'var(--crimson-700)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Buttons (Direct Call + Read More) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                  gap: '0.75rem'
                }}>
                  <a
                    href={`tel:${brandConfig.phoneRaw}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-850) 100%)',
                      color: 'var(--gold-200)',
                      padding: '0.55rem 0.95rem',
                      borderRadius: '5px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold-500)';
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-850) 100%)';
                      e.currentTarget.style.color = 'var(--gold-200)';
                    }}
                  >
                    <Phone size={13} />
                    <span>Consult Now</span>
                  </a>

                  <Link
                    to={`/services/${service.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--crimson-800)',
                      fontSize: '0.825rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--saffron-500)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--crimson-800)'}
                  >
                    <span>Read Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
