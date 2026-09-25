import React, { useState } from 'react';
import { X, Calendar, Phone, Clock, MapPin, CheckCircle, MessageCircle, Send } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import servicesData from '../data/servicesData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Get Ex Love Back & Relationship Reunion',
    consultationType: 'Direct Phone Reading',
    date: '',
    timeSlot: 'Morning (9:00 AM - 12:00 PM)',
    city: 'Calgary',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappAppointmentLink = `https://wa.me/${brandConfig.whatsapp}?text=Hello%20Pandith%20Raghav%20Guruji%2C%20I%20would%20like%20to%20confirm%20my%20appointment.%0A%0A*Name:*%20${encodeURIComponent(formData.name)}%0A*Phone:*%20${encodeURIComponent(formData.phone)}%0A*Service:*%20${encodeURIComponent(formData.service)}%0A*Type:*%20${encodeURIComponent(formData.consultationType)}%0A*Date:*%20${encodeURIComponent(formData.date || 'Earliest Available')}%0A*City:*%20${encodeURIComponent(formData.city)}`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(26, 3, 7, 0.85)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      <div style={{
        background: 'linear-gradient(145deg, #2b060d 0%, #170205 100%)',
        border: '2px solid var(--gold-400)',
        borderRadius: '14px',
        maxWidth: '650px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        color: '#ffffff',
        padding: '2rem',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.25)'
      }}>
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '50%',
            color: 'var(--gold-200)',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--crimson-700)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span style={{
                fontFamily: 'var(--font-serif-royal)',
                color: 'var(--gold-300)',
                fontSize: '1.75rem',
                fontWeight: '900',
                display: 'block'
              }}>
                ॐ
              </span>
              <h3 style={{
                fontFamily: 'var(--font-serif-royal)',
                fontSize: '1.75rem',
                color: '#ffffff',
                marginBottom: '0.4rem'
              }}>
                Book Private <span style={{ color: 'var(--gold-400)' }}>Consultation</span>
              </h3>
              <p style={{ color: 'var(--gold-200)', fontSize: '0.88rem' }}>
                100% Confidential &bull; Personal Guidance with Pandith Raghav Guruji
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#150205',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (xxx) xxx-xxxx"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#150205',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#150205',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Your City (Canada / USA)
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#150205',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="Calgary">Calgary, AB</option>
                    <option value="Edmonton">Edmonton, AB</option>
                    <option value="Toronto">Toronto, ON</option>
                    <option value="Mississauga">Mississauga, ON</option>
                    <option value="Brampton">Brampton, ON</option>
                    <option value="Vancouver">Vancouver, BC</option>
                    <option value="Montreal">Montreal, QC</option>
                    <option value="Ottawa">Ottawa, ON</option>
                    <option value="Other Canada">Other Canada City</option>
                    <option value="USA">USA / International</option>
                  </select>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#150205',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  >
                    {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Consultation Format
                  </label>
                  <select
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#150205',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="Direct Phone Reading">Direct Phone Reading (Private Audio)</option>
                    <option value="WhatsApp Voice / Chat">WhatsApp Voice / Chat Reading</option>
                    <option value="In-Person Sanctuary Visit">In-Person Sanctuary Visit</option>
                    <option value="Virtual Video Session">Virtual Video Session (Zoom/Meet)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem', fontWeight: '600' }}>
                  Briefly Describe Your Situation (Optional &amp; Strictly Confidential)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g., My partner left suddenly without explanation, feeling heavy energy at home, need marriage compatibility reading..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#150205',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                <Send size={18} />
                <span>Confirm Appointment Request</span>
              </button>

              <p style={{
                textAlign: 'center',
                fontSize: '0.75rem',
                color: 'var(--gold-200)',
                marginTop: '1rem'
              }}>
                🔒 Your privacy is sacred. We never share details with any third parties.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.2)',
              border: '2px solid #22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: '#86efac'
            }}>
              <CheckCircle size={38} />
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Appointment Request <span style={{ color: 'var(--gold-400)' }}>Received!</span>
            </h3>

            <p style={{ color: '#fed7aa', fontSize: '1rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Namaste <strong>{formData.name}</strong>. Pandith Raghav Guruji's team has received your consultation booking for <strong>{formData.service}</strong>.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
              padding: '1.25rem',
              maxWidth: '460px',
              margin: '0 auto 2rem',
              textAlign: 'left',
              fontSize: '0.88rem'
            }}>
              <div style={{ marginBottom: '0.4rem', color: '#ffffff' }}>
                <strong style={{ color: 'var(--gold-300)' }}>Contact Phone:</strong> {formData.phone}
              </div>
              <div style={{ marginBottom: '0.4rem', color: '#ffffff' }}>
                <strong style={{ color: 'var(--gold-300)' }}>Format:</strong> {formData.consultationType}
              </div>
              <div style={{ color: '#ffffff' }}>
                <strong style={{ color: 'var(--gold-300)' }}>City:</strong> {formData.city}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '380px', margin: '0 auto' }}>
              <a
                href={whatsappAppointmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="btn-crimson"
                style={{ width: '100%' }}
              >
                <Phone size={18} />
                <span>Call Guruji Directly: {brandConfig.phone}</span>
              </a>

              <button
                onClick={resetAndClose}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  marginTop: '0.5rem'
                }}
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
