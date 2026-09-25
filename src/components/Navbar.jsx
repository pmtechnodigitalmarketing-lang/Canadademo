import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, Sparkles, ChevronDown, Menu, X, Shield, Star } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import servicesData from '../data/servicesData';
import locationsData from '../data/locationsData';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const location = useLocation();

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setLocationsDropdown(false);
  };

  return (
    <>
      {/* 1. TOP RUNNING SACRED MARQUEE (Inspired by Pandith Astrologer) */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span className="marquee-item"><Sparkles size={14} /> PSYCHIC READING</span>
          <span className="marquee-item"><Sparkles size={14} /> GET EX LOVE BACK PERMANENTLY</span>
          <span className="marquee-item"><Sparkles size={14} /> SPIRITUAL HEALING &amp; 7 CHAKRA CLEANSING</span>
          <span className="marquee-item"><Sparkles size={14} /> BLACK MAGIC &amp; EVIL EYE REMOVAL</span>
          <span className="marquee-item"><Sparkles size={14} /> HUSBAND &amp; WIFE DISPUTE RESOLUTION</span>
          <span className="marquee-item"><Sparkles size={14} /> VASHIKARAN SPECIALIST</span>
          <span className="marquee-item"><Sparkles size={14} /> 30+ YEARS EXPERIENCE IN CANADA</span>
          <span className="marquee-item"><Sparkles size={14} /> 100% PRIVATE &amp; CONFIDENTIAL</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="marquee-item"><Sparkles size={14} /> PSYCHIC READING</span>
          <span className="marquee-item"><Sparkles size={14} /> GET EX LOVE BACK PERMANENTLY</span>
          <span className="marquee-item"><Sparkles size={14} /> SPIRITUAL HEALING &amp; 7 CHAKRA CLEANSING</span>
          <span className="marquee-item"><Sparkles size={14} /> BLACK MAGIC &amp; EVIL EYE REMOVAL</span>
          <span className="marquee-item"><Sparkles size={14} /> HUSBAND &amp; WIFE DISPUTE RESOLUTION</span>
        </div>
      </div>

      {/* 2. TOP CONTACT STRIP */}
      <div style={{ background: '#200408', borderBottom: '1px solid rgba(212, 175, 55, 0.25)', padding: '0.45rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: '#fbebee' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }}></span>
              <strong style={{ color: 'var(--gold-300)' }}>Pandith Ji is Online:</strong> Available for Same-Day Consultation
            </span>
            <span style={{ display: 'none', color: '#f6cf65' }} className="d-md-inline">
              Serving Calgary, Edmonton, Toronto, Vancouver &amp; All Canada
            </span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href={`tel:${brandConfig.phoneRaw}`} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-200)', fontWeight: '700' }}
            >
              <Phone size={14} style={{ color: 'var(--gold-400)' }} />
              <span>{brandConfig.phone}</span>
            </a>
            <a 
              href={brandConfig.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#86efac', fontWeight: '700' }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'linear-gradient(180deg, #2b060d 0%, #1a0307 100%)',
        borderBottom: '2px solid var(--gold-500)',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.45)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '80px', padding: '0.5rem 1.25rem' }}>
          
          {/* Logo */}
          <Link to="/" onClick={closeMenus} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #881329 0%, #2b060d 100%)',
              border: '2px solid var(--gold-400)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
              flexShrink: 0
            }}>
              <span style={{ fontFamily: 'var(--font-serif-royal)', color: 'var(--gold-300)', fontSize: '1.4rem', fontWeight: '900' }}>
                ॐ
              </span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-serif-royal)',
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '0.04em',
                lineHeight: 1.15
              }}>
                PANDITH <span style={{ color: 'var(--gold-400)' }}>RAGHAV</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--gold-200)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                Vedic Astrologer &bull; Canada
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none' }} className="d-lg-flex">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none' }}>
              <li>
                <Link 
                  to="/" 
                  style={{
                    color: location.pathname === '/' ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname === '/' ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'block'
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link 
                  to="/about" 
                  style={{
                    color: location.pathname === '/about' ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname === '/about' ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'block'
                  }}
                >
                  About Pandith Ji
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link 
                  to="/services" 
                  style={{
                    color: location.pathname.startsWith('/services') ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname.startsWith('/services') ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Services</span>
                  <ChevronDown size={14} style={{ transform: servicesDropdown ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                </Link>

                {servicesDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '320px',
                    background: '#200408',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '8px',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)',
                    padding: '0.75rem 0',
                    zIndex: 1100
                  }}>
                    {servicesData.slice(0, 8).map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        onClick={closeMenus}
                        style={{
                          display: 'block',
                          padding: '0.55rem 1.25rem',
                          color: '#fbebee',
                          fontSize: '0.86rem',
                          borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)';
                          e.currentTarget.style.color = 'var(--gold-300)';
                          e.currentTarget.style.paddingLeft = '1.5rem';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#fbebee';
                          e.currentTarget.style.paddingLeft = '1.25rem';
                        }}
                      >
                        {srv.shortTitle}
                      </Link>
                    ))}
                    <div style={{ padding: '0.6rem 1.25rem 0.2rem' }}>
                      <Link 
                        to="/services" 
                        onClick={closeMenus}
                        style={{ color: 'var(--gold-400)', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        View All 12 Services &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Locations Dropdown */}
              <li 
                style={{ position: 'relative' }}
                onMouseEnter={() => setLocationsDropdown(true)}
                onMouseLeave={() => setLocationsDropdown(false)}
              >
                <Link 
                  to="/locations" 
                  style={{
                    color: location.pathname.startsWith('/locations') ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname.startsWith('/locations') ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>Locations</span>
                  <ChevronDown size={14} style={{ transform: locationsDropdown ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                </Link>

                {locationsDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '260px',
                    background: '#200408',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '8px',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)',
                    padding: '0.75rem 0',
                    zIndex: 1100
                  }}>
                    {locationsData.map((loc) => (
                      <Link
                        key={loc.id}
                        to={`/locations/${loc.slug}`}
                        onClick={closeMenus}
                        style={{
                          display: 'block',
                          padding: '0.55rem 1.25rem',
                          color: '#fbebee',
                          fontSize: '0.86rem',
                          borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)';
                          e.currentTarget.style.color = 'var(--gold-300)';
                          e.currentTarget.style.paddingLeft = '1.5rem';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#fbebee';
                          e.currentTarget.style.paddingLeft = '1.25rem';
                        }}
                      >
                        Astrologer in {loc.city} ({loc.province})
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Zodiac & Kundli Tool Link */}
              <li>
                <Link 
                  to="/zodiac-horoscope" 
                  style={{
                    color: location.pathname === '/zodiac-horoscope' ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname === '/zodiac-horoscope' ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Sparkles size={14} style={{ color: 'var(--gold-400)' }} />
                  <span>Daily Rashi &amp; Kundli</span>
                </Link>
              </li>

              <li>
                <Link 
                  to="/reviews" 
                  style={{
                    color: location.pathname === '/reviews' ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname === '/reviews' ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'block'
                  }}
                >
                  Reviews
                </Link>
              </li>

              <li>
                <Link 
                  to="/contact" 
                  style={{
                    color: location.pathname === '/contact' ? 'var(--gold-300)' : '#fbebee',
                    fontWeight: location.pathname === '/contact' ? '700' : '500',
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.92rem',
                    letterSpacing: '0.03em',
                    display: 'block'
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Header CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a 
              href={`tel:${brandConfig.phoneRaw}`} 
              className="btn-crimson"
              style={{
                padding: '0.65rem 1.15rem',
                fontSize: '0.88rem',
                display: 'none'
              }}
              id="header-call-btn"
            >
              <Phone size={15} />
              <span>Call Now</span>
            </a>

            <button 
              onClick={onOpenAppointment}
              className="btn-primary"
              style={{
                padding: '0.65rem 1.35rem',
                fontSize: '0.88rem',
                cursor: 'pointer'
              }}
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '6px',
                color: 'var(--gold-300)',
                padding: '0.55rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="d-lg-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: '#1a0307',
            borderTop: '1px solid rgba(212, 175, 55, 0.25)',
            padding: '1.25rem',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)'
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" onClick={closeMenus} style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', display: 'block' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenus} style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', display: 'block' }}>
                  About Pandith Ji
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeMenus} style={{ color: 'var(--gold-300)', fontSize: '1.05rem', fontWeight: '700', display: 'block' }}>
                  All Astrology Services &rarr;
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={closeMenus} style={{ color: 'var(--gold-300)', fontSize: '1.05rem', fontWeight: '700', display: 'block' }}>
                  Canada Locations &rarr;
                </Link>
              </li>
              <li>
                <Link to="/zodiac-horoscope" onClick={closeMenus} style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--gold-400)' }} />
                  Daily Rashi &amp; Kundli Tool
                </Link>
              </li>
              <li>
                <Link to="/reviews" onClick={closeMenus} style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', display: 'block' }}>
                  Client Reviews &amp; Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenus} style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', display: 'block' }}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href={`tel:${brandConfig.phoneRaw}`} 
                className="btn-crimson" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={16} />
                Call {brandConfig.phone}
              </a>
              <a 
                href={brandConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global CSS helper for responsive display */}
      <style>{`
        @media (min-width: 992px) {
          .d-lg-flex { display: flex !important; }
          .d-lg-none { display: none !important; }
          #header-call-btn { display: inline-flex !important; }
        }
        @media (min-width: 768px) {
          .d-md-inline { display: inline !important; }
        }
      `}</style>
    </>
  );
}
