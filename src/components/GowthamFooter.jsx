import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import brandConfig from '../data/brandConfig';

export default function GowthamFooter() {
  return (
    <footer className="gowtham-footer">
      <div className="elementor-container">
        
        {/* Top 3 Info Boxes */}
        <div className="footer-top-boxes">
          
          {/* Phone */}
          <div className="footer-info-box">
            <div className="footer-info-icon">
              <Phone size={24} />
            </div>
            <div>
              <span className="footer-info-title">PHONE NUMBER</span>
              <div className="footer-info-val">
                <a href={`tel:${brandConfig.phoneRaw}`}>{brandConfig.phone}</a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="footer-info-box">
            <div className="footer-info-icon">
              <Mail size={24} />
            </div>
            <div>
              <span className="footer-info-title">EMAIL</span>
              <div className="footer-info-val">
                <a href={`mailto:${brandConfig.email}`}>{brandConfig.email}</a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="footer-info-box">
            <div className="footer-info-icon">
              <MapPin size={24} />
            </div>
            <div>
              <span className="footer-info-title">ADDRESS</span>
              <div className="footer-info-val">
                <span>{brandConfig.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Links Menu */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          margin: '30px 0 20px',
          fontSize: '14.5px',
          fontWeight: 600
        }}>
          <Link to="/" style={{ color: '#ffffff' }}>Home</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/about-us" style={{ color: '#ffffff' }}>About us</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/psychic-reading" style={{ color: '#ffffff' }}>Psychic Reading</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/get-ex-love-back" style={{ color: '#ffffff' }}>Get Ex Love Back</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/black-magic-removal" style={{ color: '#ffffff' }}>Black Magic Removal</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/negative-energy-removal" style={{ color: '#ffffff' }}>Negative Energy Removal</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/contact-us" style={{ color: '#ffffff' }}>Contact us</Link>
          <span style={{ color: 'var(--e-global-color-secondary)' }}>•</span>
          <Link to="/book-an-appointment" style={{ color: '#ffffff' }}>Book an Appointment</Link>
        </div>

        {/* Google Map Embed */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160570.62768564177!2d-114.25055403212891!3d51.044733099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="260"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pandith Gowtham Calgary Location"
          />
        </div>

        {/* Disclaimer */}
        <div className="footer-disclaimer">
          {brandConfig.disclaimer}
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            Copyright © {new Date().getFullYear()} <Link to="/">{brandConfig.brandName}</Link>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
