import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Globe2, Sparkles, Check, Phone } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function WhyChooseGuruji({ onOpenAppointment }) {
  const pillars = [
    {
      icon: Award,
      title: "30+ Years Generational Lineage",
      desc: "Trained from childhood in classical Parashari Jyotish, Vedic Tantra Shanti, Hastarekha, and Samudrika Shastra by revered Himalayan masters in India."
    },
    {
      icon: ShieldCheck,
      title: "100% Private & Confidential",
      desc: "Every consultation is held in the strictest sacred confidence. Your identity, sensitive marital affairs, and family secrets are forever safeguarded."
    },
    {
      icon: HeartHandshake,
      title: "Pure Sattvic Vedic Remedies",
      desc: "We strictly reject harmful dark craft. All rituals invoke benevolent celestial deities (Shiva, Durga, Hanuman, Lakshmi) to produce pure, harm-free miracles."
    },
    {
      icon: Globe2,
      title: "Serving All of Canada & USA",
      desc: "Offering convenient in-person sessions at our Calgary & Toronto hubs as well as confidential direct phone and WhatsApp consultations nationwide."
    }
  ];

  return (
    <section style={{ padding: '5.5rem 0', background: 'var(--bg-cream)' }} id="about">
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Astrologer Portrait & Sacred Badge */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '3px solid var(--gold-500)',
              boxShadow: '0 20px 50px rgba(84, 12, 26, 0.25)',
              background: '#2b060d'
            }}>
              <img
                src="/images/vedic-astrology-sage.jpg"
                alt="Pandith Raghav Guruji Astrologer Canada"
                style={{
                  width: '100%',
                  height: '520px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Bottom Floating Credentials Pill */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                right: '18px',
                background: 'linear-gradient(135deg, rgba(43, 6, 13, 0.95) 0%, rgba(26, 3, 7, 0.95) 100%)',
                border: '1.5px solid var(--gold-400)',
                backdropFilter: 'blur(8px)',
                borderRadius: '10px',
                padding: '1.15rem',
                color: '#ffffff',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.15rem', fontWeight: '800', color: 'var(--gold-300)' }}>
                      Pandith Raghav Guruji
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#fed7aa' }}>
                      Senior Vedic Astrologer &bull; Spiritual Master
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.45rem', fontWeight: '900', color: '#ffffff' }}>
                      30+ Yrs
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gold-200)', textTransform: 'uppercase' }}>
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Mandala */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #d4af37 0%, #b89326 100%)',
              border: '2px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--crimson-950)',
              fontFamily: 'var(--font-serif-royal)',
              fontSize: '1.8rem',
              fontWeight: '900',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              zIndex: 15
            }}>
              卐
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div>
            <div className="section-badge">
              <Sparkles size={14} style={{ color: 'var(--saffron-500)' }} />
              <span>Know More About Pandith Ji</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Canada's Most Trusted Authority in <span className="gold-gradient">Vedic Jyotish &amp; Spiritual Healing</span>
            </h2>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Born into an ancient family of spiritual healers and astrologers in South India, Pandith Raghav Guruji inherited profound esoteric wisdom handed down across generations. Blending ancient scriptural precision with compassionate psychological understanding, he brings clarity and peace to individuals confronting insurmountable roadblocks.
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Whether you are suffering the agony of a sudden breakup, fighting to protect your marriage from divorce, suffocated by unexplained dark energies, or facing stagnation in your Canadian career or business, Pandith Ji uncovers the cosmic root cause and applies divine remedies that restore your rightful happiness.
            </p>

            {/* 4 Pillars List */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.25rem'
            }}>
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: '#ffffff',
                    padding: '1.15rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-300)',
                      flexShrink: 0
                    }}>
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--crimson-900)', marginBottom: '0.25rem' }}>
                        {pillar.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={onOpenAppointment}
                className="btn-primary"
                style={{ padding: '0.85rem 1.85rem' }}
              >
                <span>Request Consultation</span>
              </button>

              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="btn-crimson"
                style={{ padding: '0.85rem 1.85rem' }}
              >
                <Phone size={16} />
                <span>Call {brandConfig.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
