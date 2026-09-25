import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import GowthamContactFAQ from '../components/GowthamContactFAQ';

export default function GowthamContactPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '50px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
            <img src={brandConfig.faviconUrl} alt="Pandith Gowtham" />
            <span style={{ color: '#ffffff' }}>24/7 Astrological Assistance</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '10px'
          }}>
            Contact Pandith Gowtham
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)' }}>
            Schedule an in-person consultation in Calgary or a private phone/WhatsApp reading from anywhere.
          </p>
        </div>
      </div>

      {/* 3 Contact Cards */}
      <section style={{ padding: '50px 0 20px', background: '#fbf5e8' }}>
        <div className="elementor-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            
            {/* Phone */}
            <div style={{
              background: '#ffffff',
              padding: '30px 25px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              borderTop: '4px solid var(--e-global-color-primary)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--e-global-color-primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px'
              }}>
                <Phone size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Call Direct</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Instant response for critical emergencies</p>
              <a 
                href={`tel:${brandConfig.phoneRaw}`} 
                style={{ color: 'var(--e-global-color-primary)', fontWeight: 800, fontSize: '17px' }}
              >
                {brandConfig.phone}
              </a>
            </div>

            {/* WhatsApp */}
            <div style={{
              background: '#ffffff',
              padding: '30px 25px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              borderTop: '4px solid #25D366'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#25D366',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px'
              }}>
                <MessageCircle size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>WhatsApp Chat</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>Send birth details &amp; palm photos</p>
              <a 
                href={brandConfig.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#25D366', fontWeight: 800, fontSize: '17px' }}
              >
                +{brandConfig.whatsapp}
              </a>
            </div>

            {/* Email & Location */}
            <div style={{
              background: '#ffffff',
              padding: '30px 25px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              borderTop: '4px solid var(--e-global-color-secondary)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--e-global-color-secondary)',
                color: 'var(--e-global-color-darkred)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px'
              }}>
                <MapPin size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Location</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>{brandConfig.address}, Canada</p>
              <a 
                href={`mailto:${brandConfig.email}`} 
                style={{ color: 'var(--e-global-color-primary)', fontWeight: 600, fontSize: '14.5px' }}
              >
                {brandConfig.email}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Main Contact Form and FAQs */}
      <GowthamContactFAQ />
    </div>
  );
}
