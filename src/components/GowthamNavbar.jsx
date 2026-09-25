import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import brandConfig from '../data/brandConfig';

const canadaRegions = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
  "Northwest Territories", "Nunavut", "Yukon"
];

const standardServices = [
  { id: "vedic-astrology-reading", name: "Astrologer" },
  { id: "ex-love-back", name: "Ex Love Back" },
  { id: "marriage-solutions", name: "Husband and Wife Problem Solution" },
  { id: "love-marriage-specialist", name: "Love Marriage Specialist" },
  { id: "black-magic-removal", name: "Black Magic Removal" },
  { id: "negative-energy-cleansing", name: "Negative Energy Removal" },
  { id: "love-spells", name: "Love Spell Caster" },
  { id: "voodoo-expert", name: "Voodoo Removal" },
  { id: "jealous-curses-removal", name: "Curse Removal" }
];

export default function GowthamNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [activeSubCity, setActiveSubCity] = useState(null);
  const location = useLocation();

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setLocationsDropdown(false);
    setActiveSubCity(null);
  };

  const marqueeItems = [
    "psychic reading",
    "get ex love back",
    "spiritual healing",
    "black magic removal",
    "negative energy removal",
    "evil spirit removal"
  ];

  return (
    <>
      {/* 1. TOP BAR MARQUEE LIST (Exact Elementor icon-list) */}
      <div className="gowtham-topbar">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="topbar-item">
              <svg aria-hidden="true" viewBox="0 0 512 512" fill="currentColor">
                <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path>
              </svg>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. MAIN HEADER (Logo + Nav Menu + Call Button) */}
      <header className="gowtham-header">
        <div className="header-inner">
          
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="gowtham-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--e-global-color-primary) 0%, #2b060d 100%)',
              border: '2px solid var(--e-global-color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
              flexShrink: 0
            }}>
              <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--e-global-color-secondary)', fontSize: '1.4rem', fontWeight: '900' }}>
                ॐ
              </span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                fontWeight: '800',
                color: '#000000',
                letterSpacing: '0.04em',
                lineHeight: 1.15
              }}>
                {brandConfig.name.split(' ')[0]} <span style={{ color: 'var(--e-global-color-primary)' }}>{brandConfig.name.split(' ').slice(1).join(' ')}</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--e-global-color-text)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '0.15rem',
                fontWeight: 600
              }}>
                Canadian Astrologer
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className="gowtham-nav">
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                  About us
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link to="/services" onClick={closeMenu} className={location.pathname === '/services' ? 'active' : ''} style={{ cursor: 'pointer' }}>
                  <span>Services</span>
                  <ChevronDown size={14} />
                </Link>

                {servicesDropdown && (
                  <ul className="dropdown-menu">
                    <li style={{ borderBottom: '1px solid #f0f0f0', marginBottom: '4px' }}>
                      <Link to="/services" onClick={closeMenu} style={{ color: 'var(--e-global-color-primary)', fontWeight: 700 }}>
                        ✦ View All 40+ Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/relationship-problems" onClick={closeMenu}>Relationship Problems</Link>
                    </li>
                    <li>
                      <Link to="/psychic-reading" onClick={closeMenu}>Psychic Reading</Link>
                    </li>
                    <li>
                      <Link to="/spiritual-cleansing" onClick={closeMenu}>Spiritual Cleansing</Link>
                    </li>
                    <li>
                      <Link to="/vashikaran-specialist" onClick={closeMenu}>Vashikaran Specialist</Link>
                    </li>
                    <li>
                      <Link to="/get-ex-love-back" onClick={closeMenu}>Get Ex Love Back</Link>
                    </li>
                    <li>
                      <Link to="/black-magic-removal" onClick={closeMenu}>Black Magic Removal</Link>
                    </li>
                    <li>
                      <Link to="/negative-energy-removal" onClick={closeMenu}>Negative Energy Removal</Link>
                    </li>
                    <li>
                      <Link to="/jealousy-and-curse-removal" onClick={closeMenu}>Jealousy &amp; Curse Removal</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Locations Dropdown with Submenus */}
              <li
                onMouseEnter={() => setLocationsDropdown(true)}
                onMouseLeave={() => { setLocationsDropdown(false); setActiveSubCity(null); }}
              >
                <a href="#locations" style={{ cursor: 'pointer' }}>
                  <span>Locations</span>
                  <ChevronDown size={14} />
                </a>

                {locationsDropdown && (
                  <ul className="dropdown-menu">
                    {canadaRegions.map((region) => {
                      const regionSlug = region.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <li 
                          key={region}
                          onMouseEnter={() => setActiveSubCity(regionSlug)}
                          onMouseLeave={() => setActiveSubCity(null)}
                        >
                          <a href={`#${regionSlug}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>{region}</span>
                            <span>&rsaquo;</span>
                          </a>

                          {activeSubCity === regionSlug && (
                            <ul className="dropdown-sub" style={{ top: 0, minWidth: '320px' }}>
                              {standardServices.map((service) => {
                                const fullSlug = `${service.id}-in-${regionSlug}`;
                                return (
                                  <li key={service.id}>
                                    <Link to={`/locations/${fullSlug}`} onClick={closeMenu}>
                                      {service.name} in {region}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>

              <li>
                <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>
                  Contact us
                </Link>
              </li>

              <li>
                <Link to="/book-an-appointment" className={location.pathname === '/book-an-appointment' ? 'active' : ''}>
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call Button Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a href={`tel:${brandConfig.phoneRaw}`} className="header-phone-btn">
              <Phone size={16} />
              <span>{brandConfig.phone}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--e-global-color-primary)',
                cursor: 'pointer',
                display: 'none'
              }}
              id="mobile-toggle-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div style={{ background: '#ffffff', borderTop: '2px solid var(--e-global-color-primary)', padding: '20px' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" onClick={closeMenu} style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '17px' }}>Home</Link></li>
              <li><Link to="/about-us" onClick={closeMenu} style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '17px' }}>About us</Link></li>
              <li><Link to="/services" onClick={closeMenu} style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '17px' }}>Services</Link></li>
              <li><a href="#locations" onClick={closeMenu} style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '17px' }}>Locations</a></li>
              <li><Link to="/contact-us" onClick={closeMenu} style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '17px' }}>Contact us</Link></li>
              <li><Link to="/book-an-appointment" onClick={closeMenu} style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '17px' }}>Book an Appointment</Link></li>
            </ul>
            <div style={{ marginTop: '20px' }}>
              <a href={`tel:${brandConfig.phoneRaw}`} className="header-phone-btn" style={{ width: '100%', justifyContent: 'center' }}>
                <Phone size={16} />
                <span>Call Now: {brandConfig.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 992px) {
          #mobile-toggle-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
