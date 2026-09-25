import React from 'react';
import GowthamAboutSection from '../components/GowthamAboutSection';
import GowthamWhyChooseUs from '../components/GowthamWhyChooseUs';
import GowthamTestimonials from '../components/GowthamTestimonials';
import GowthamContactFAQ from '../components/GowthamContactFAQ';
import brandConfig from '../data/brandConfig';

export default function GowthamAboutPage() {
  return (
    <div style={{ paddingTop: '10px' }}>
      
      {/* Page Title Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '50px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '10px'
          }}>
            About Pandith Gowtham
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}>
            Best Astrologer, Psychic Reader &amp; Spiritual Healer in Canada Over 25+ Years
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <GowthamAboutSection />

      {/* Why Choose Us */}
      <GowthamWhyChooseUs />

      {/* Testimonials */}
      <GowthamTestimonials />

      {/* Contact & FAQ */}
      <GowthamContactFAQ />

    </div>
  );
}
