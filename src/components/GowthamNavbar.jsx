import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import brandConfig from '../data/brandConfig';

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
          <Link to="/" onClick={closeMenu} className="gowtham-logo">
            <img 
              src={brandConfig.logoUrl} 
              alt="Pandith Gowtham" 
              loading="eager"
            />
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

              {/* Locations Dropdown with Submenus (Edmonton & Calgary) */}
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
                    <li 
                      onMouseEnter={() => setActiveSubCity('edmonton')}
                      onMouseLeave={() => setActiveSubCity(null)}
                    >
                      <a href="#edmonton" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Edmonton</span>
                        <span>&rsaquo;</span>
                      </a>

                      {activeSubCity === 'edmonton' && (
                        <ul className="dropdown-sub">
                          <li><Link to="/locations/ex-love-back-in-edmonton" onClick={closeMenu}>Ex Love Back in Edmonton</Link></li>
                          <li><Link to="/locations/husband-and-wife-problem-solution-in-edmonton" onClick={closeMenu}>Husband and Wife Problem Solution in Edmonton</Link></li>
                          <li><Link to="/locations/love-marriage-specialist-in-edmonton" onClick={closeMenu}>Love Marriage Specialist in Edmonton</Link></li>
                          <li><Link to="/locations/black-magic-removal-in-edmonton" onClick={closeMenu}>Black Magic Removal in Edmonton</Link></li>
                          <li><Link to="/locations/astrologer-in-edmonton" onClick={closeMenu}>Astrologer in Edmonton</Link></li>
                          <li><Link to="/locations/negative-energy-removal-in-edmonton" onClick={closeMenu}>Negative Energy Removal in Edmonton</Link></li>
                          <li><Link to="/locations/love-spell-caster-in-edmonton" onClick={closeMenu}>Love Spell Caster in Edmonton</Link></li>
                          <li><Link to="/locations/voodoo-removal-in-edmonton" onClick={closeMenu}>Voodoo Removal in Edmonton</Link></li>
                          <li><Link to="/locations/curse-removal-in-edmonton" onClick={closeMenu}>Curse Removal in Edmonton</Link></li>
                        </ul>
                      )}
                    </li>

                    <li 
                      onMouseEnter={() => setActiveSubCity('calgary')}
                      onMouseLeave={() => setActiveSubCity(null)}
                    >
                      <a href="#calgary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Calgary</span>
                        <span>&rsaquo;</span>
                      </a>

                      {activeSubCity === 'calgary' && (
                        <ul className="dropdown-sub">
                          <li><Link to="/locations/psychic-in-calgary" onClick={closeMenu}>Psychic in Calgary</Link></li>
                          <li><Link to="/locations/love-problem-solution-in-calgary" onClick={closeMenu}>Love Problem Solution in Calgary</Link></li>
                          <li><Link to="/locations/ex-love-back-in-calgary" onClick={closeMenu}>Ex Love Back in Calgary</Link></li>
                          <li><Link to="/locations/voodoo-removal-in-calgary" onClick={closeMenu}>Voodoo Removal in Calgary</Link></li>
                          <li><Link to="/locations/best-astrologer-in-calgary" onClick={closeMenu}>Best Astrologer in Calgary</Link></li>
                          <li><Link to="/locations/negative-energy-removal-in-calgary" onClick={closeMenu}>Negative Energy Removal in Calgary</Link></li>
                          <li><Link to="/locations/husband-and-wife-problem-solution-in-calgary" onClick={closeMenu}>Husband and Wife Problem Solution in Calgary</Link></li>
                        </ul>
                      )}
                    </li>
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
