import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Send, CheckCircle2 } from 'lucide-react';
import brandConfig from '../data/brandConfig';

const faqs = [
  {
    q: "How does Pandith Gowtham provide astrological consultations?",
    a: "Pandith Gowtham offers both confidential in-person consultations in Calgary, Alberta, as well as remote phone and WhatsApp sessions for clients throughout Canada, the US, and worldwide. His readings are conducted with extreme care, precision, and complete privacy."
  },
  {
    q: "Can Pandith Gowtham help me get my ex-love back?",
    a: "Yes. Pandith Gowtham specializes in powerful Vedic love astrology, Vashikaran mantras, and dispute-resolution spiritual rituals designed to clear emotional misunderstandings, dispel negative outside influences, and bring estranged lovers back together."
  },
  {
    q: "Is my consultation and personal information kept confidential?",
    a: "Absolutely 100%. Pandith Gowtham treats all client information, conversations, birth details, and life situations with the highest level of confidentiality and ethical standards. Your privacy is permanently protected."
  },
  {
    q: "How fast can I see results from astrological remedies?",
    a: "Many clients feel immediate relief, peace of mind, and notice positive shifts within 24 to 72 hours of performing the prescribed remedies. The exact timeline depends on the complexity of planetary positions and karmic circumstances."
  },
  {
    q: "What is the process for booking an urgent consultation?",
    a: "You can call directly at +1 403-431-5226 or send a WhatsApp message anytime. Emergency spiritual cleansing and same-day sessions are prioritized for urgent family, relationship, or psychological distress."
  },
  {
    q: "How do I know which astrological service I need?",
    a: "During your initial reading, Pandith Gowtham examines your date of birth, palm, horoscope chart, or aura to diagnose the root cause of your difficulties and recommends the exact remedy that will work most effectively for you."
  }
];

export default function GowthamContactFAQ() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      // open WhatsApp with message
      const text = `Hi Pandith Gowtham, my name is ${formData.name}. Phone: ${formData.phone}. Problem: ${formData.message}`;
      window.open(`https://api.whatsapp.com/send?phone=${brandConfig.whatsapp}&text=${encodeURIComponent(text)}`, '_blank');
    }, 800);
  };

  return (
    <section className="contact-faq-section" id="contact">
      <div className="elementor-container">
        <div className="contact-faq-grid">
          
          {/* Left Column: Contact Form */}
          <div className="contact-form-box">
            
            <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
              <img 
                src={brandConfig.faviconUrl} 
                alt="Pandith Gowtham" 
              />
              <span style={{ color: '#ffffff' }}>connect with guruji</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '28px',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '20px'
            }}>
              share your problems!
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={54} color="var(--e-global-color-secondary)" style={{ margin: '0 auto 15px' }} />
                <h4 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>Thank You!</h4>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.9)' }}>
                  Your details have been received. Connecting you to Pandith Gowtham on WhatsApp now...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    rows="4"
                    placeholder="Describe your problem or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}

          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            
            <div className="img-heading-pill">
              <img 
                src={brandConfig.faviconUrl} 
                alt="Pandith Gowtham" 
              />
              <span>frequently asked questions</span>
            </div>

            <h3 className="gowtham-section-title" style={{ textAlign: 'left', marginBottom: '25px' }}>
              Need Help? Check Our FAQs
            </h3>

            <div>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="faq-accordion-item">
                    <div 
                      className="faq-accordion-header"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp size={20} color="var(--e-global-color-primary)" />
                      ) : (
                        <ChevronDown size={20} color="#777777" />
                      )}
                    </div>
                    {isOpen && (
                      <div className="faq-accordion-body">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
