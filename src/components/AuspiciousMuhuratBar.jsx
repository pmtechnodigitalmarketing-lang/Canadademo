import React from 'react';
import { Sun, Moon, AlertTriangle, ShieldCheck, PhoneCall } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function AuspiciousMuhuratBar() {
  const today = new Date().toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div style={{
      background: 'linear-gradient(90deg, #3f0913 0%, #540c1a 50%, #3f0913 100%)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      padding: '0.65rem 0',
      fontSize: '0.85rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.85rem'
      }}>
        
        {/* Left: Today's Vedic Cosmic Weather */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--gold-200)' }}>
            <Sun size={15} style={{ color: 'var(--gold-400)' }} />
            <span><strong style={{ color: '#ffffff' }}>Today ({today}):</strong> Shukla Paksha &bull; Pushya Nakshatra</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.4)',
            padding: '0.2rem 0.65rem',
            borderRadius: '9999px',
            color: '#86efac',
            fontWeight: '600',
            fontSize: '0.78rem'
          }}>
            <ShieldCheck size={13} />
            <span>Abhijit Muhurat: 11:42 AM – 12:34 PM (Highly Auspicious)</span>
          </div>
        </div>

        {/* Right: Urgent Assistance Callout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#fed7aa',
            fontSize: '0.82rem'
          }}>
            <AlertTriangle size={13} style={{ color: '#fb923c' }} />
            <span>Under Malefic Transit or Dark Attack?</span>
          </div>

          <a 
            href={`tel:${brandConfig.phoneRaw}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--gold-500)',
              color: 'var(--crimson-950)',
              padding: '0.25rem 0.75rem',
              borderRadius: '4px',
              fontWeight: '800',
              fontSize: '0.8rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            <PhoneCall size={12} />
            <span>Speak to Guruji</span>
          </a>
        </div>

      </div>
    </div>
  );
}
