import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function CTABanner() {
  return (
    <div className="cta-banner-wrapper">
      <div className="elementor-container">
        <div style={{
          background: 'linear-gradient(135deg, #7c1021 0%, #4a050f 50%, #2b0404 100%)',
          borderRadius: '16px',
          padding: '38px 25px',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
          border: '2px solid rgba(240, 180, 21, 0.65)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          {/* Subtle golden ornamental glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(240, 180, 21, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          {/* Sacred Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(240, 180, 21, 0.4)',
            padding: '6px 18px',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--e-global-color-secondary)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '15px'
          }}>
            <Sparkles size={16} />
            <span>24/7 Confidential Vedic Consultations</span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 12px 0',
            lineHeight: 1.25,
            letterSpacing: '0.02em'
          }}>
            Get Immediate Answers &amp; Solutions to All Life Problems
          </h2>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '750px',
            margin: '0 0 25px 0',
            lineHeight: 1.6
          }}>
            Speak directly with <strong>{brandConfig.name}</strong> for guaranteed astrological guidance, love reunions, black magic removal &amp; peace of mind.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Call Button */}
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, var(--e-global-color-secondary) 0%, #c49619 100%)',
                color: '#2b0404',
                padding: '14px 28px',
                borderRadius: '50px',
                fontWeight: 800,
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(240, 180, 21, 0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Phone size={18} />
              <span>Call: {brandConfig.phoneDisplay}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={brandConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '50px',
                fontWeight: 800,
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp {brandConfig.name}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}


