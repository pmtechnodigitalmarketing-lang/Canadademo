import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function GowthamAppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    tob: '',
    pob: '',
    consultationType: 'Phone Consultation',
    preferredDate: '',
    notes: ''
  });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
    const msg = `*Appointment Request for Pandith Astrologer*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Type:* ${formData.consultationType}%0A*Preferred Date:* ${formData.preferredDate}%0A*DOB:* ${formData.dob || 'N/A'}%0A*Problem:* ${formData.notes || 'General Reading'}`;
    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=${brandConfig.whatsapp}&text=${msg}`, '_blank');
    }, 1000);
  };

  return (
    <div>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '50px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
            <img src={brandConfig.faviconUrl} alt="Pandith Astrologer" />
            <span style={{ color: '#ffffff' }}>Private &amp; Confidential Consultation</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '10px'
          }}>
            Book An Appointment
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)' }}>
            Meet with Pandith Astrologer in Calgary or schedule a phone/WhatsApp reading.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 0', background: '#fbf5e8' }}>
        <div className="elementor-container" style={{ maxWidth: '800px' }}>
          
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '40px 30px',
            boxShadow: '0 10px 35px rgba(0,0,0,0.08)',
            borderTop: '6px solid var(--e-global-color-primary)'
          }}>
            {booked ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle size={64} color="var(--e-global-color-primary)" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--e-global-color-primary)', marginBottom: '15px' }}>
                  Appointment Request Submitted!
                </h3>
                <p style={{ fontSize: '16px', color: '#555', marginBottom: '25px', lineHeight: 1.7 }}>
                  Thank you, <strong>{formData.name}</strong>. We are redirecting you to WhatsApp to finalize your consultation time with Pandith Astrologer. You may also call immediately:
                </p>
                <a href={`tel:${brandConfig.phoneRaw}`} className="header-phone-btn">
                  <Phone size={18} />
                  <span>Call: {brandConfig.phone}</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, color: 'var(--e-global-color-darkred)' }}>
                    Fill In Your Details for Accurate Horoscope Analysis
                  </h2>
                  <p style={{ fontSize: '14px', color: '#666', marginTop: '6px' }}>
                    All readings are 100% confidential and conducted by Pandith Astrologer personally.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 403-431-5226"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                      Consultation Mode
                    </label>
                    <select
                      value={formData.consultationType}
                      onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '15px',
                        backgroundColor: '#fff'
                      }}
                    >
                      <option value="Phone Consultation">Phone Consultation</option>
                      <option value="WhatsApp Video Call">WhatsApp Video Call</option>
                      <option value="In-Person Calgary Office">In-Person Consultation (Calgary Office)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                      Date of Birth (Optional for Kundli)
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                      Birth Place (City, Country)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Calgary, Canada"
                      value={formData.pob}
                      onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '15px'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>
                    Describe Your Problem / Concerns
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Provide details about relationship problems, negative energy, career, family issues, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '15px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--e-global-color-primary)',
                    color: '#ffffff',
                    fontSize: '17px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(150, 4, 4, 0.3)'
                  }}
                >
                  CONFIRM &amp; BOOK APPOINTMENT NOW
                </button>
              </form>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
