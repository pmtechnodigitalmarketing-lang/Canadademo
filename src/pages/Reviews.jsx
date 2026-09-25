import React, { useState } from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import { Star, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function Reviews() {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    city: '',
    service: 'Get Ex Love Back',
    rating: 5,
    reviewText: ''
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
        marginBottom: '2rem'
      }}>
        <div className="container">
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <Star size={14} style={{ fill: 'var(--gold-400)', color: 'var(--gold-400)' }} />
            <span>850+ Verified Client Reviews</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif-royal)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Client Testimonials &amp; <span className="gold-gradient">Success Stories</span>
          </h1>

          <p style={{
            color: '#fed7aa',
            fontSize: '1.15rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.65
          }}>
            Read authentic reviews from individuals whose lives, marriages, and careers were transformed by Pandith Raghav Guruji.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Component */}
      <TestimonialsSection />

      {/* Submit a Review Form Section */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-cream)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{
            background: '#ffffff',
            border: '2px solid var(--gold-400)',
            borderRadius: '12px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="section-badge">
                <span>Share Your Experience</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--crimson-900)', marginBottom: '0.4rem' }}>
                Leave a Verified Review
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Your feedback inspires others seeking spiritual healing and clarity.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>Your Name / Initials *</label>
                    <input
                      type="text"
                      required
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      placeholder="e.g., Kenny M."
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>Your City (Canada) *</label>
                    <input
                      type="text"
                      required
                      value={reviewForm.city}
                      onChange={(e) => setReviewForm({ ...reviewForm, city: e.target.value })}
                      placeholder="e.g., Calgary, AB"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>Your Rating</label>
                  <div style={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={28}
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        style={{
                          fill: star <= reviewForm.rating ? 'var(--gold-400)' : 'none',
                          color: 'var(--gold-500)',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--crimson-900)', fontWeight: '700', marginBottom: '0.35rem' }}>Your Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={reviewForm.reviewText}
                    onChange={(e) => setReviewForm({ ...reviewForm, reviewText: e.target.value })}
                    placeholder="Describe how Pandith Raghav Guruji assisted you..."
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d4af37', background: 'var(--bg-parchment)', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                  <Send size={16} />
                  <span>Submit Verified Review</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={46} style={{ color: '#22c55e', margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.5rem', color: 'var(--crimson-900)', marginBottom: '0.5rem' }}>
                  Thank You for Your Review!
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  May Lord Shiva and the planetary deities bless your home with unending peace, joy, and prosperity.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
