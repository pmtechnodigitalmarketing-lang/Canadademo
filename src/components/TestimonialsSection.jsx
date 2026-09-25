import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import testimonialsData from '../data/testimonialsData';
import brandConfig from '../data/brandConfig';

export default function TestimonialsSection() {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Relationship', 'Marriage', 'Black Magic', 'Career'];

  const filtered = filter === 'All'
    ? testimonialsData
    : testimonialsData.filter(t => t.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section style={{
      padding: '5.5rem 0',
      background: 'linear-gradient(180deg, #1c0307 0%, #2b060d 50%, #150205 100%)',
      color: '#ffffff',
      borderTop: '2px solid rgba(212, 175, 55, 0.3)',
      borderBottom: '2px solid rgba(212, 175, 55, 0.3)'
    }} id="reviews">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <Star size={14} style={{ fill: 'var(--gold-400)', color: 'var(--gold-400)' }} />
            <span>Verified Client Experiences</span>
          </div>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            What Our <span className="gold-gradient">Clients Say Across Canada</span>
          </h2>
          
          <div className="divider-gold"></div>

          <p className="section-subtitle" style={{ color: '#fbebee' }}>
            Read real, heartfelt stories of restored love, saved marriages, and dark blockages broken from verified clients in Calgary, Edmonton, Toronto, Vancouver, and across Canada.
          </p>

          {/* Google 5-Star Rating Badge (Inspired by Master Ganesh Guruji) */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1.5px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '9999px',
            padding: '0.65rem 1.75rem',
            marginTop: '1.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} style={{ fill: 'var(--gold-400)', color: 'var(--gold-400)' }} />
              ))}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#ffffff' }}>
              <strong style={{ color: 'var(--gold-300)' }}>4.9 / 5.0 Rating</strong> &bull; Based on 850+ Verified Consultations
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filtered.map((item) => (
            <article
              key={item.id}
              className="card-dark-crimson"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: 'linear-gradient(145deg, #2b060d 0%, #170205 100%)',
                border: '1.5px solid rgba(212, 175, 55, 0.25)',
                padding: '2rem'
              }}
            >
              <Quote
                size={40}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '20px',
                  color: 'rgba(212, 175, 55, 0.15)',
                  pointerEvents: 'none'
                }}
              />

              <div>
                {/* 5 Golden Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: 'var(--gold-400)', color: 'var(--gold-400)' }} />
                  ))}
                </div>

                {/* Service Tag */}
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--gold-300)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '4px',
                  padding: '0.2rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '1rem'
                }}>
                  {item.service}
                </div>

                {/* Testimonial Quote */}
                <p style={{
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.15)'
              }}>
                <div>
                  <div style={{ fontWeight: '700', color: 'var(--gold-300)', fontSize: '1rem' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#fed7aa' }}>
                    {item.location} &bull; {item.date}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: '#86efac',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  <CheckCircle2 size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom WhatsApp Inquiry Banner */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '850px',
          margin: '3.5rem auto 0'
        }}>
          <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Ready to Experience Peace &amp; Resolution in Your Life?
          </h3>
          <p style={{ color: '#fed7aa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Join thousands of satisfied individuals who transformed their love, marriage, and career through Pandith Raghav Guruji.
          </p>
          <a
            href={brandConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.95rem' }}
          >
            <MessageCircle size={18} />
            <span>Connect with Guruji on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
