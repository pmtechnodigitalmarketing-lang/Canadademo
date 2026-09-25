import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import servicesData from '../data/servicesData';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Consultation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-parchment)', paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #2b060d 0%, #150205 100%)',
        color: '#ffffff',
        padding: '4rem 0',
        textAlign: 'center',
        borderBottom: '2px solid var(--gold-500)',
        marginBottom: '3.5rem'
      }}>
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <Phone size={14} style={{ color: 'var(--gold-400)' }} />
            <span>24/7 Spiritual Sanctuary &bull; Canada</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif-royal)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Contact <span className="gold-gradient">Pandith Raghav Guruji</span>
          </h1>

          <p style={{
            color: '#fed7aa',
            fontSize: '1.15rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Reach out directly for private in-person appointments at our Calgary &amp; Toronto centres or immediate confidential phone and WhatsApp consultations.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'flex-start'
        }}>
          
          {/* Left Column: Direct Contact Info & Sanctuaries */}
          <div>
            <div className="section-badge">
              <span>Direct Channels</span>
            </div>

            <h2 style={{ fontSize: '2rem', color: 'var(--crimson-900)', marginBottom: '1.25rem' }}>
              We Are Here To <span className="gold-gradient">Support You</span>
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Do not hesitate to connect if you are experiencing severe emotional pain, sudden unexplained marital conflicts, or negative spiritual oppression. Pandith Ji's team responds promptly and with complete confidentiality.
            </p>

            {/* Contact Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Primary Phone */}
              <a
                href={`tel:${brandConfig.phoneRaw}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(212, 175, 55, 0.35)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gold-500)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)'}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-300)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--crimson-800)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Primary Canadian Hotline (Calgary &amp; Nationwide)
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--crimson-950)' }}>
                    {brandConfig.phone}
                  </div>
                </div>
              </a>

              {/* Alternate GTA Phone */}
              <a
                href={`tel:${brandConfig.alternatePhoneRaw}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(212, 175, 55, 0.35)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gold-500)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)'}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--crimson-700) 0%, var(--crimson-900) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-300)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--crimson-800)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Greater Toronto Area (Mississauga &amp; Brampton)
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--crimson-950)' }}>
                    {brandConfig.alternatePhone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={brandConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(34, 197, 94, 0.4)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0
                }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#15803d', textTransform: 'uppercase', fontWeight: '700' }}>
                    Direct WhatsApp Chat &amp; Voice Note Reading
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--crimson-950)' }}>
                    Click to Open WhatsApp
                  </div>
                </div>
              </a>

              {/* Hours */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#ffffff',
                padding: '1.25rem',
                borderRadius: '10px',
                border: '1.5px solid rgba(212, 175, 55, 0.35)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--gold-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--crimson-900)',
                  flexShrink: 0
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--crimson-800)', textTransform: 'uppercase', fontWeight: '700' }}>
                    Consultation Hours
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--crimson-950)' }}>
                    Mon – Sun: 7:00 AM – 10:30 PM (24/7 for Emergencies)
                  </div>
                </div>
              </div>

            </div>

            {/* Physical Sanctuaries */}
            <div style={{
              background: 'linear-gradient(145deg, #2b060d 0%, #170205 100%)',
              color: '#ffffff',
              border: '2px solid var(--gold-400)',
              borderRadius: '12px',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-crimson)'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--gold-300)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} />
                <span>Our Canadian Sanctuaries (By Appointment)</span>
              </h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem' }}>
                  Calgary Central Sanctuary:
                </strong>
                <span style={{ color: '#fed7aa', fontSize: '0.88rem' }}>
                  {brandConfig.mainOffice}
                </span>
              </div>

              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.95rem' }}>
                  Greater Toronto Area Sanctuary:
                </strong>
                <span style={{ color: '#fed7aa', fontSize: '0.88rem' }}>
                  {brandConfig.torontoOffice}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div>
            <div style={{
              background: '#ffffff',
              border: '2px solid var(--gold-500)',
              borderRadius: '14px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-serif-royal)', fontSize: '1.8rem', color: 'var(--crimson-800)', fontWeight: '900' }}>
                  ॐ
                </div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--crimson-900)', marginBottom: '0.4rem' }}>
                  Send a Private Inquiry
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  All inquiries are kept under strict confidentiality.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Jennifer / Harpreet"
                      style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (xxx) xxx-xxxx"
                      style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your.email@example.com"
                      style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>
                      Subject / Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)' }}
                    >
                      <option value="Get Ex Love Back">Get Ex Love Back &amp; Reunion</option>
                      <option value="Black Magic & Curse Removal">Black Magic &amp; Curse Removal</option>
                      <option value="Husband & Wife Dispute">Husband &amp; Wife Dispute</option>
                      <option value="Psychic Reading & Future">Psychic Reading &amp; Future</option>
                      <option value="Spiritual Healing & Aura">Spiritual Healing &amp; 7 Chakra Cleanse</option>
                      <option value="Career & Business Astrology">Career &amp; Business Astrology</option>
                      <option value="Other Spiritual Concern">Other Spiritual Concern</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>
                      How May Guruji Help You? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your situation in detail. All details remain strictly confidential..."
                      style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.95rem' }}
                  >
                    <Send size={16} />
                    <span>Send Confidential Message</span>
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={48} style={{ color: '#22c55e', margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.6rem', color: 'var(--crimson-900)', marginBottom: '0.5rem' }}>
                    Message Dispatched Successfully
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you <strong>{form.name}</strong>. Guruji's personal team will reach out to your phone <strong>{form.phone}</strong> shortly.
                  </p>
                  <a
                    href={`https://wa.me/${brandConfig.whatsapp}?text=Hello%20Pandith%20Raghav%20Guruji%2C%20I%20sent%20a%20message%20via%20your%20website%20regarding%20${encodeURIComponent(form.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={18} />
                    <span>Connect Immediately on WhatsApp</span>
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
