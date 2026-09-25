import React from 'react';
import LocationsDirectory from '../components/LocationsDirectory';
import { Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function Locations() {
  return (
    <div style={{ background: 'var(--bg-parchment)', paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #2b060d 0%, #150205 100%)',
        color: '#ffffff',
        padding: '4rem 0',
        textAlign: 'center',
        borderBottom: '2px solid var(--gold-500)',
        marginBottom: '2rem'
      }}>
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <MapPin size={14} style={{ color: 'var(--gold-400)' }} />
            <span>Serving All Canadian Provinces</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif-royal)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Vedic Astrology Sanctuaries in <span className="gold-gradient">Canada</span>
          </h1>

          <p style={{
            color: '#fed7aa',
            fontSize: '1.15rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            From Alberta to Ontario, British Columbia and Quebec—Pandith Raghav Guruji provides trusted in-person appointments and instant remote phone consultations.
          </p>
        </div>
      </section>

      {/* Directory of Locations */}
      <LocationsDirectory showTitle={false} />

    </div>
  );
}
