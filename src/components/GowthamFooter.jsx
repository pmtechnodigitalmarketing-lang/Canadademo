import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import brandConfig from '../data/brandConfig';

export default function GowthamFooter() {
  return (
    <footer className="gowtham-premium-footer">
      {/* Decorative background elements */}
      <div className="footer-astrology-bg">
        <div className="footer-stars star-1"></div>
        <div className="footer-stars star-2"></div>
        <div className="footer-stars star-3"></div>
        <div className="footer-orbit-line line-1"></div>
        <div className="footer-orbit-line line-2"></div>
      </div>
      
      <div className="elementor-container relative-z">
        
        <div className="footer-main-grid">
          
          {/* Column 1: Brand / Description */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '15px', textDecoration: 'none' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #881329 0%, #2b060d 100%)',
                border: '2px solid var(--e-global-color-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--e-global-color-secondary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: '900',
                flexShrink: 0
              }}>
                ॐ
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '0.04em'
                }}>
                  {brandConfig.name.split(' ')[0]} <span style={{ color: 'var(--e-global-color-secondary)' }}>{brandConfig.name.split(' ').slice(1).join(' ')}</span>
                </div>
              </div>
            </Link>
            <p className="footer-brand-desc">
              {brandConfig.name} is a renowned astrologer and psychic reader based in {brandConfig.country}, carrying forward his family’s legacy of astrological wisdom, offering precise future predictions and spiritual healing to bring positivity and balance into your life.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col link-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/"><ArrowRight size={14}/> Home</Link></li>
              <li><Link to="/about-us"><ArrowRight size={14}/> About Us</Link></li>
              <li><Link to="/contact-us"><ArrowRight size={14}/> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Astrology Services */}
          <div className="footer-col link-col">
            <h3 className="footer-col-title">Astrology Services</h3>
            <ul className="footer-links">
              <li><Link to="/psychic-reading"><ArrowRight size={14}/> Psychic Reading</Link></li>
              <li><Link to="/get-ex-love-back"><ArrowRight size={14}/> Get Ex Love Back</Link></li>
              <li><Link to="/black-magic-removal"><ArrowRight size={14}/> Black Magic Removal</Link></li>
              <li><Link to="/negative-energy-removal"><ArrowRight size={14}/> Negative Energy Removal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & CTA */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Contact Us</h3>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-icon" />
              <a href={`tel:${brandConfig.phoneRaw}`}>{brandConfig.phoneDisplay}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-icon" />
              <a href={`mailto:${brandConfig.email}`}>{brandConfig.email}</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon" />
              <span>{brandConfig.address}</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Disclaimer */}
        <div className="footer-disclaimer-premium">
          {brandConfig.disclaimer}
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>Copyright © {new Date().getFullYear()} {brandConfig.brandName}. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
