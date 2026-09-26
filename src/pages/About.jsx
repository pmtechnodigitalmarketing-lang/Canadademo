import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactFAQ from '../components/ContactFAQ';
import brandConfig from '../data/brandConfig';

export default function About() {
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
            About {brandConfig.brandName}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)' }}>
            Best Astrologer, Psychic Reader &amp; Spiritual Healer in Canada Over {brandConfig.experienceYears} Years
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <AboutSection 
        imageSrc="/images/Shiv%20Shambho.jpg" 
        imageAlt={`About ${brandConfig.name}`} 
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact & FAQ */}
      <ContactFAQ />

    </div>
  );
}
