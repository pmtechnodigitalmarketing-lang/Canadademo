import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import faqData from '../data/faqData';
import brandConfig from '../data/brandConfig';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section style={{ padding: '5.5rem 0', background: 'var(--bg-cream)' }} id="faq">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">
            <HelpCircle size={14} style={{ color: 'var(--saffron-500)' }} />
            <span>Got Questions?</span>
          </div>

          <h2 className="section-title">
            Frequently Asked <span className="gold-gradient">Questions</span>
          </h2>
          
          <div className="divider-gold"></div>

          <p className="section-subtitle">
            Clear, transparent answers about our Vedic consultations, spiritual confidentiality, and remedy procedures.
          </p>
        </div>

        {/* Two-Column Layout (FAQ Accordion + Quick Help Box) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          
          {/* FAQ Accordion */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {faqData.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: isOpen ? '1.5px solid var(--crimson-700)' : '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                      transition: 'var(--transition)'
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: isOpen ? 'var(--crimson-700)' : 'var(--crimson-900)',
                        gap: '1rem'
                      }}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.3s ease',
                          color: isOpen ? 'var(--crimson-700)' : 'var(--gold-600)',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '0 1.5rem 1.25rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        borderTop: '1px solid rgba(212, 175, 55, 0.15)'
                      }}>
                        <p style={{ paddingTop: '0.75rem' }}>{item.answer}</p>
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
