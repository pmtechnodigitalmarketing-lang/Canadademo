import React from 'react';
import InteractiveZodiacKundli from '../components/InteractiveZodiacKundli';
import { Sparkles } from 'lucide-react';

export default function ZodiacTool({ onOpenAppointment }) {
  return (
    <div style={{ background: 'var(--bg-parchment)', paddingTop: '2.5rem', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #2b060d 0%, #150205 100%)',
        color: '#ffffff',
        padding: '3.5rem 0',
        textAlign: 'center',
        borderBottom: '2px solid var(--gold-500)',
        marginBottom: '2rem'
      }}>
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <Sparkles size={14} style={{ color: 'var(--gold-400)' }} />
            <span>Interactive Astrological Wisdom</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif-royal)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Daily Rashi &amp; <span className="gold-gradient">Kundli Milan Tool</span>
          </h1>

          <p style={{
            color: '#fed7aa',
            fontSize: '1.15rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Check your zodiac's daily planetary transits, auspicious gemstone, lucky numbers, and calculate authentic love compatibility.
          </p>
        </div>
      </section>

      {/* Interactive Tool Component */}
      <InteractiveZodiacKundli onOpenAppointment={onOpenAppointment} />

    </div>
  );
}
