import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Phone, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function About({ onOpenAppointment }) {
  const credentials = [
    "30+ Years of Rigorous Generational Vedic Study & Practice",
    "Mastery in Parashari Jyotish, Jaimini Sutras & Prashna Kundli",
    "Certified Specialist in Vedic Tantra Shanti & Aura Cleansing",
    "Over 20,000+ Verified Consultations Across Canada, USA & Worldwide",
    "Revered Authority in Reversing Black Magic, Hexes & Dark Curses",
    "100% Sattvic, Non-Harmful & Pure Scriptural Remedies"
  ];

  return (
    <div style={{ background: 'var(--bg-parchment)', paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      
      {/* Page Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #2b060d 0%, #150205 100%)',
        color: '#ffffff',
        padding: '4rem 0',
        textAlign: 'center',
        borderBottom: '2px solid var(--gold-500)',
        marginBottom: '4rem'
      }}>
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <Sparkles size={14} style={{ color: 'var(--gold-400)' }} />
            <span>Sacred Lineage &bull; 30+ Years Experience</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif-royal)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            About <span className="gold-gradient">Pandith Raghav Guruji</span>
          </h1>

          <p style={{
            color: '#fed7aa',
            fontSize: '1.15rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Renowned Vedic Astrologer, Clairvoyant Psychic Reader &amp; Master Spiritual Healer guiding souls through life's deepest storms across Canada.
          </p>
        </div>
      </section>

      {/* Main Narrative & Imagery */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div>
            <div className="section-badge">
              <span>Sacred Background</span>
            </div>
            
            <h2 style={{ fontSize: '2.2rem', color: 'var(--crimson-900)', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              A Sacred Heritage of <span className="gold-gradient">Vedic Wisdom</span>
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Pandith Raghav Guruji was born into a distinguished South Indian priestly lineage whose ancestors served as revered royal astrologers (Raj-Jyotishis) and temple preceptors for generations. Initiated into ancient Sanskrit scriptures and meditative sadhana at an early age, he mastered classical Parashari Jyotish, Vedic numerology, Hastarekha (palmistry), and Samudrika Shastra (face reading).
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Recognizing the acute emotional stress and spiritual isolation faced by immigrants and families in Canada, Guruji established his spiritual sanctuaries to provide accessible, compassionate, and 100% confidential guidance. He treats every seeker not as a client, but as a soul under his spiritual protection.
            </p>

            <div style={{
              background: '#ffffff',
              border: '1.5px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '10px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h4 style={{ color: 'var(--crimson-900)', marginBottom: '0.85rem', fontSize: '1.1rem' }}>
                Core Credentials &amp; Accomplishments
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {credentials.map((cred, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--crimson-950)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--crimson-700)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '3px solid var(--gold-500)',
              boxShadow: '0 20px 50px rgba(84, 12, 26, 0.25)',
              background: '#2b060d'
            }}>
              <img
                src="/images/cosmic_shiva_hero.jpg"
                alt="Pandith Raghav Guruji Vedic Sanctuary"
                style={{ width: '100%', height: '520px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          <div className="card-sacred" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-300)',
              marginBottom: '1rem'
            }}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--crimson-900)', marginBottom: '0.65rem' }}>
              Absolute Honesty &amp; Truth
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Guruji tells you the authentic planetary reality as revealed in your charts. No fear-mongering, no false promises—only genuine, transparent insights and realistic remedies.
            </p>
          </div>

          <div className="card-sacred" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-300)',
              marginBottom: '1rem'
            }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--crimson-900)', marginBottom: '0.65rem' }}>
              Uncompromising Confidentiality
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              We understand the sensitive nature of love breakups, domestic disputes, and psychic disturbances. Your matters are kept under sacred vow of confidentiality.
            </p>
          </div>

          <div className="card-sacred" style={{ padding: '2rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-300)',
              marginBottom: '1rem'
            }}>
              <HeartHandshake size={24} />
            </div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--crimson-900)', marginBottom: '0.65rem' }}>
              Pure Sattvic Remedies
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Guruji strictly forbids and rejects harmful black magic or manipulative practices. All pujas, mantras, and yantras invite divine grace and peace.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #3f0913 0%, #200408 100%)',
          border: '2px solid var(--gold-400)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
            Speak Directly with <span style={{ color: 'var(--gold-300)' }}>Pandith Raghav Guruji</span>
          </h3>
          <p style={{ color: '#fed7aa', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
            Consultations available in-person at our Calgary &amp; Toronto centres, or directly over confidential phone and WhatsApp.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a href={`tel:${brandConfig.phoneRaw}`} className="btn-primary">
              <Phone size={16} />
              <span>Call: {brandConfig.phone}</span>
            </a>
            <button onClick={onOpenAppointment} className="btn-crimson">
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
