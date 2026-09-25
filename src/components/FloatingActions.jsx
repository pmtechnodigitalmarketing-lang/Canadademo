import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function FloatingActions({ onOpenAppointment }) {
  return (
    <>
      {/* Desktop Floating Actions (Bottom Right) */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        zIndex: 9998
      }} className="d-none d-md-flex">
        
        {/* Floating Call Button */}
        <a
          href={`tel:${brandConfig.phoneRaw}`}
          aria-label="Call Astrologer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
            color: 'var(--gold-200)',
            border: '2px solid var(--gold-400)',
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 15px rgba(212, 175, 55, 0.3)',
            fontWeight: '800',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.background = 'var(--gold-500)';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)';
            e.currentTarget.style.color = 'var(--gold-200)';
          }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'var(--gold-500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--crimson-950)'
          }}>
            <Phone size={15} />
          </div>
          <span>Call: {brandConfig.phone}</span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={brandConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            background: '#22c55e',
            color: '#ffffff',
            border: '2px solid #ffffff',
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            boxShadow: '0 8px 30px rgba(34, 197, 94, 0.45)',
            fontWeight: '800',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <MessageCircle size={20} />
          <span>Chat on WhatsApp</span>
        </a>

      </div>

      {/* Mobile Bottom Sticky Navigation Bar */}
      <div className="mobile-nav-bar">
        <a
          href={`tel:${brandConfig.phoneRaw}`}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold-300)',
            fontSize: '0.7rem',
            fontWeight: '700',
            borderRight: '1px solid rgba(212, 175, 55, 0.2)'
          }}
        >
          <Phone size={18} style={{ marginBottom: '2px', color: 'var(--gold-400)' }} />
          <span>Call Now</span>
        </a>

        <a
          href={brandConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#86efac',
            fontSize: '0.7rem',
            fontWeight: '700',
            borderRight: '1px solid rgba(212, 175, 55, 0.2)'
          }}
        >
          <MessageCircle size={18} style={{ marginBottom: '2px', color: '#22c55e' }} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenAppointment}
          style={{
            flex: 1.2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
            color: 'var(--gold-200)',
            fontSize: '0.7rem',
            fontWeight: '800',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Calendar size={18} style={{ marginBottom: '2px', color: 'var(--gold-400)' }} />
          <span>Book Reading</span>
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .d-none { display: none !important; }
          .d-md-flex { display: flex !important; }
        }
      `}</style>
    </>
  );
}
