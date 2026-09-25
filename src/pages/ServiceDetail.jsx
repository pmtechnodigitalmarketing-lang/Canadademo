import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageCircle, Calendar, Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle, ChevronRight } from 'lucide-react';
import servicesData from '../data/servicesData';
import brandConfig from '../data/brandConfig';

export default function ServiceDetail({ onOpenAppointment }) {
  const { serviceSlug } = useParams();

  const service = servicesData.find(s => s.slug === serviceSlug) || servicesData[0];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = servicesData.filter(s => s.id !== service.id).slice(0, 4);

  return (
    <div style={{ background: 'var(--bg-parchment)', paddingTop: '2rem', paddingBottom: '5rem' }}>
      
      {/* Breadcrumb Strip */}
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--crimson-800)' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/services" style={{ color: 'var(--crimson-800)' }}>Services</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--crimson-950)', fontWeight: '600' }}>{service.shortTitle}</span>
        </div>
      </div>

      {/* Hero Banner for Service */}
      <section style={{
        background: 'linear-gradient(135deg, #2b060d 0%, #150205 100%)',
        color: '#ffffff',
        padding: '3.5rem 0',
        borderBottom: '2px solid var(--gold-500)',
        marginBottom: '3.5rem'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
              <Sparkles size={14} style={{ color: 'var(--gold-400)' }} />
              <span>{service.category} &bull; {service.badge}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif-royal)',
              fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              {service.title}
            </h1>

            <p style={{
              color: '#fed7aa',
              fontSize: '1.15rem',
              lineHeight: 1.6,
              marginBottom: '1.75rem'
            }}>
              {service.tagline}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href={`tel:${brandConfig.phoneRaw}`} className="btn-primary">
                <Phone size={16} />
                <span>Call Guruji: {brandConfig.phone}</span>
              </a>

              <button onClick={onOpenAppointment} className="btn-crimson">
                <Calendar size={16} />
                <span>Book Remedy Session</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'flex-start'
        }}>
          
          {/* Main Article Column (2/3 width on wide screens) */}
          <div style={{ gridColumn: 'span 2' }}>
            
            {/* Service Featured Image */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2.5rem',
              maxHeight: '440px',
              background: '#2b060d'
            }}>
              <img
                src={service.image}
                alt={service.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Deep Description */}
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2.5rem'
            }}>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--crimson-900)', marginBottom: '1.25rem' }}>
                Astrological Overview &amp; <span className="gold-gradient">Remedial Methodology</span>
              </h2>

              <div style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {service.fullContent.split('\n\n').map((para, idx) => (
                  <p key={idx} style={{ marginBottom: '1.25rem' }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Areas Covered */}
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--crimson-900)', marginBottom: '1.25rem' }}>
                What This Sacred Remedy Includes:
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {service.features.map((feat, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    background: 'var(--bg-parchment)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(109, 14, 32, 0.1)'
                  }}>
                    <Check size={18} style={{ color: 'var(--crimson-700)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--crimson-950)', fontWeight: '600' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits & Guarantees */}
            <div style={{
              background: 'linear-gradient(145deg, #2b060d 0%, #170205 100%)',
              color: '#ffffff',
              border: '2px solid var(--gold-400)',
              borderRadius: '12px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-crimson)',
              marginBottom: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--gold-300)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={22} />
                <span>Client Benefits &amp; Spiritual Protections</span>
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {service.benefits.map((ben, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#fed7aa' }}>
                    <Sparkles size={16} style={{ color: 'var(--gold-400)', flexShrink: 0, marginTop: '4px' }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service FAQs */}
            {service.faqs && (
              <div style={{
                background: '#ffffff',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '2.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--crimson-900)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={20} style={{ color: 'var(--crimson-700)' }} />
                  <span>Frequently Asked About {service.shortTitle}</span>
                </h3>
                {service.faqs.map((f, i) => (
                  <div key={i} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: i < service.faqs.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--crimson-900)', marginBottom: '0.4rem' }}>{f.q}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.a}</p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Sidebar Column (1/3 width) */}
          <div>
            
            {/* Quick Consultation Booking Card */}
            <div style={{
              background: '#ffffff',
              border: '2px solid var(--gold-500)',
              borderRadius: '12px',
              padding: '1.85rem',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '2rem',
              position: 'sticky',
              top: '100px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.5rem', color: 'var(--crimson-800)', fontFamily: 'var(--font-serif-royal)' }}>ॐ</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--crimson-900)', marginBottom: '0.35rem' }}>
                  Immediate Consultation
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Speak directly with Pandith Raghav Guruji
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={`tel:${brandConfig.phoneRaw}`}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <Phone size={16} />
                  <span>Call: {brandConfig.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.whatsapp}?text=Hello%20Pandith%20Raghav%20Guruji%2C%20I%20would%20like%20to%20consult%20you%20regarding%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crimson"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Message</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="btn-outline-gold"
                  style={{ width: '100%', fontSize: '0.9rem', color: 'var(--crimson-900)' }}
                >
                  <Calendar size={16} />
                  <span>Book Appointment</span>
                </button>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                🔒 100% Confidential &bull; Private 1-on-1 Guidance
              </div>
            </div>

            {/* Related Services */}
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--crimson-900)', marginBottom: '1rem', borderBottom: '2px solid rgba(212, 175, 55, 0.3)', paddingBottom: '0.4rem' }}>
                Other Sacred Services
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <Link
                      to={`/services/${other.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.55rem',
                        borderRadius: '6px',
                        color: 'var(--crimson-950)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        background: 'var(--bg-parchment)',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--crimson-700)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--bg-parchment)';
                        e.currentTarget.style.color = 'var(--crimson-950)';
                      }}
                    >
                      <span>{other.shortTitle}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
