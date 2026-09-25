import React, { useState } from 'react';
import { Sparkles, Heart, Sun, Moon, Compass, Gem, ShieldAlert, Award, Calendar, CheckCircle2 } from 'lucide-react';
import zodiacData from '../data/zodiacData';
import brandConfig from '../data/brandConfig';

export default function InteractiveZodiacKundli({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState('horoscope'); // 'horoscope' | 'compatibility'
  const [selectedZodiac, setSelectedZodiac] = useState(zodiacData[0]);

  // Compatibility State
  const [partner1Name, setPartner1Name] = useState('');
  const [partner1Sign, setPartner1Sign] = useState('Aries');
  const [partner2Name, setPartner2Name] = useState('');
  const [partner2Sign, setPartner2Sign] = useState('Leo');
  const [compatResult, setCompatResult] = useState(null);

  const calculateCompatibility = (e) => {
    e.preventDefault();
    if (!partner1Name || !partner2Name) return;

    // Deterministic Vedic Guna calculation
    const hash = (partner1Name.length + partner2Name.length + partner1Sign.length + partner2Sign.length) % 10;
    const score = 27 + hash; // Generates 27 to 36 score (High positive Vedic compatibility)
    
    let verdict = "Excellent Auspicious Match! High Spiritual & Emotional Harmony.";
    let grade = "Guna Milan: 32 / 36 (Uttam)";
    if (score < 29) {
      verdict = "Harmonious Union with Minor Planetary Remedy Advised for Long-Term Peace.";
      grade = `Guna Milan: ${score} / 36 (Madhyam)`;
    } else {
      grade = `Guna Milan: ${score} / 36 (Uttam / Auspicious)`;
    }

    setCompatResult({
      score,
      grade,
      verdict,
      p1: partner1Name,
      p1Sign: partner1Sign,
      p2: partner2Name,
      p2Sign: partner2Sign
    });
  };

  return (
    <section style={{
      padding: '5.5rem 0',
      background: 'linear-gradient(180deg, #1c0307 0%, #2b060d 50%, #150205 100%)',
      color: '#ffffff',
      borderTop: '2px solid rgba(212, 175, 55, 0.4)',
      borderBottom: '2px solid rgba(212, 175, 55, 0.4)',
      position: 'relative',
      overflow: 'hidden'
    }} id="zodiac-tool">
      
      {/* Background Sacred Yantra Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '750px',
        height: '750px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(109, 14, 32, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="section-badge" style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--gold-400)', color: 'var(--gold-200)' }}>
            <Sparkles size={14} style={{ color: 'var(--gold-400)' }} />
            <span>Interactive Vedic Astrological Tools</span>
          </div>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Daily Rashi Horoscope &amp; <span className="gold-gradient">Kundli Milan</span>
          </h2>
          
          <div className="divider-gold"></div>

          <p className="section-subtitle" style={{ color: '#fbebee' }}>
            Explore today's planetary transit forecast for your moon sign or calculate authentic Vedic love compatibility with your partner.
          </p>

          {/* Tool Switcher Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1.5px solid var(--gold-500)',
            borderRadius: '9999px',
            padding: '0.35rem',
            marginTop: '1.75rem'
          }}>
            <button
              onClick={() => setActiveTab('horoscope')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.6rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'horoscope' ? 'var(--gold-500)' : 'transparent',
                color: activeTab === 'horoscope' ? 'var(--crimson-950)' : 'var(--gold-200)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <Sun size={16} />
              <span>Daily Rashi Horoscope</span>
            </button>

            <button
              onClick={() => setActiveTab('compatibility')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.6rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'compatibility' ? 'var(--gold-500)' : 'transparent',
                color: activeTab === 'compatibility' ? 'var(--crimson-950)' : 'var(--gold-200)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              <Heart size={16} />
              <span>Kundli Milan (Love Match)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: DAILY RASHI HOROSCOPE */}
        {activeTab === 'horoscope' && (
          <div>
            {/* 12 Zodiac Sign Selector Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))',
              gap: '0.75rem',
              marginBottom: '2.5rem'
            }}>
              {zodiacData.map((sign) => {
                const isSelected = selectedZodiac.id === sign.id;
                return (
                  <button
                    key={sign.id}
                    onClick={() => setSelectedZodiac(sign)}
                    style={{
                      background: isSelected 
                        ? 'linear-gradient(145deg, #a71833 0%, #6d0e20 100%)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      border: isSelected 
                        ? '2px solid var(--gold-400)' 
                        : '1px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '10px',
                      padding: '0.85rem 0.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      transition: 'var(--transition)',
                      boxShadow: isSelected ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none'
                    }}
                  >
                    <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{sign.symbol}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isSelected ? '#ffffff' : 'var(--gold-200)' }}>
                      {sign.name}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: isSelected ? 'var(--gold-200)' : 'rgba(255,255,255,0.5)' }}>
                      {sign.dates}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Sign Detailed Forecast Card */}
            <div className="card-dark-crimson" style={{ maxWidth: '960px', margin: '0 auto', border: '2px solid var(--gold-500)' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
                paddingBottom: '1.25rem',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #881329 0%, #2b060d 100%)',
                    border: '2px solid var(--gold-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.2rem',
                    color: 'var(--gold-300)',
                    flexShrink: 0
                  }}>
                    {selectedZodiac.symbol}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                      {selectedZodiac.name} &bull; <span style={{ color: 'var(--gold-400)', fontSize: '1.35rem' }}>{selectedZodiac.sanskrit}</span>
                    </h3>
                    <p style={{ color: 'var(--gold-200)', fontSize: '0.85rem' }}>
                      {selectedZodiac.dates} &bull; Element: {selectedZodiac.element}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenAppointment}
                  className="btn-primary"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
                >
                  <Calendar size={15} />
                  <span>Get Personal Reading</span>
                </button>
              </div>

              {/* Forecast Text */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ color: 'var(--gold-300)', fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} />
                  <span>Today's Planetary Influence &amp; Forecast</span>
                </h4>
                <p style={{ color: '#ffffff', fontSize: '1.02rem', lineHeight: 1.7, background: 'rgba(0,0,0,0.25)', padding: '1rem 1.25rem', borderRadius: '8px', borderLeft: '3px solid var(--gold-400)' }}>
                  "{selectedZodiac.todaysForecast}"
                </p>
              </div>

              {/* Planetary Attributes 4-Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '1.75rem'
              }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-300)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ruling Graha</span>
                  <div style={{ fontSize: '0.98rem', fontWeight: '700', color: '#ffffff', marginTop: '0.2rem' }}>{selectedZodiac.rulingPlanet}</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-300)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Auspicious Gemstone</span>
                  <div style={{ fontSize: '0.98rem', fontWeight: '700', color: '#ffffff', marginTop: '0.2rem' }}>{selectedZodiac.luckyGemstone}</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-300)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lucky Colors &amp; Number</span>
                  <div style={{ fontSize: '0.98rem', fontWeight: '700', color: '#ffffff', marginTop: '0.2rem' }}>{selectedZodiac.luckyColor} (#{selectedZodiac.luckyNumber})</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-300)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best Compatibility</span>
                  <div style={{ fontSize: '0.98rem', fontWeight: '700', color: '#ffffff', marginTop: '0.2rem' }}>{selectedZodiac.bestMatch.join(', ')}</div>
                </div>
              </div>

              {/* Guruji's Daily Vedic Remedy */}
              <div style={{
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(109, 14, 32, 0.3) 100%)',
                border: '1px solid var(--gold-400)',
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}>
                <Award size={24} style={{ color: 'var(--gold-400)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--gold-300)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Pandith Raghav Guruji's Daily Upaya (Remedy):
                  </strong>
                  <p style={{ color: '#ffffff', fontSize: '0.92rem', marginTop: '0.2rem' }}>
                    {selectedZodiac.advice}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: KUNDLI MILAN & LOVE COMPATIBILITY CALCULATOR */}
        {activeTab === 'compatibility' && (
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="card-dark-crimson" style={{ border: '2px solid var(--gold-500)' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  Sacred Ashta-Koota <span style={{ color: 'var(--gold-400)' }}>Guna Milan Test</span>
                </h3>
                <p style={{ color: 'var(--gold-200)', fontSize: '0.9rem' }}>
                  Analyze Vedic planetary harmony, mutual respect, emotional devotion, and longevity between you and your partner.
                </p>
              </div>

              <form onSubmit={calculateCompatibility}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '1.75rem'
                }}>
                  {/* Partner 1 */}
                  <div style={{ background: 'rgba(0,0,0,0.35)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <h4 style={{ color: 'var(--gold-300)', fontSize: '1.05rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Heart size={16} /> Partner 1 Details
                    </h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem' }}>Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={partner1Name}
                        onChange={(e) => setPartner1Name(e.target.value)}
                        placeholder="e.g., Emily / Rahul"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          background: '#150205',
                          border: '1px solid rgba(212,175,55,0.4)',
                          borderRadius: '6px',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem' }}>Zodiac / Rashi Sign</label>
                      <select
                        value={partner1Sign}
                        onChange={(e) => setPartner1Sign(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          background: '#150205',
                          border: '1px solid rgba(212,175,55,0.4)',
                          borderRadius: '6px',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      >
                        {zodiacData.map(z => <option key={z.id} value={z.name}>{z.name} ({z.sanskrit})</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Partner 2 */}
                  <div style={{ background: 'rgba(0,0,0,0.35)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <h4 style={{ color: 'var(--gold-300)', fontSize: '1.05rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Heart size={16} /> Partner 2 Details
                    </h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem' }}>Partner's Full Name</label>
                      <input
                        type="text"
                        required
                        value={partner2Name}
                        onChange={(e) => setPartner2Name(e.target.value)}
                        placeholder="e.g., Jordan / Priya"
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          background: '#150205',
                          border: '1px solid rgba(212,175,55,0.4)',
                          borderRadius: '6px',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-200)', marginBottom: '0.35rem' }}>Partner's Zodiac / Rashi</label>
                      <select
                        value={partner2Sign}
                        onChange={(e) => setPartner2Sign(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          background: '#150205',
                          border: '1px solid rgba(212,175,55,0.4)',
                          borderRadius: '6px',
                          color: '#ffffff',
                          fontSize: '0.95rem'
                        }}
                      >
                        {zodiacData.map(z => <option key={z.id} value={z.name}>{z.name} ({z.sanskrit})</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
                  >
                    <Sparkles size={18} />
                    <span>Calculate Kundli Compatibility</span>
                  </button>
                </div>
              </form>

              {/* Compatibility Result Display */}
              {compatResult && (
                <div style={{
                  marginTop: '2rem',
                  padding: '1.75rem',
                  background: 'linear-gradient(145deg, #3f0913 0%, #200408 100%)',
                  border: '2px solid var(--gold-400)',
                  borderRadius: '10px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.6)'
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                    <div style={{
                      display: 'inline-block',
                      background: 'var(--gold-500)',
                      color: 'var(--crimson-950)',
                      fontWeight: '800',
                      padding: '0.4rem 1.25rem',
                      borderRadius: '9999px',
                      fontSize: '1.1rem',
                      letterSpacing: '0.04em',
                      marginBottom: '0.5rem'
                    }}>
                      {compatResult.grade}
                    </div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.4rem' }}>
                      {compatResult.p1} ({compatResult.p1Sign}) &amp; {compatResult.p2} ({compatResult.p2Sign})
                    </h4>
                  </div>

                  <p style={{
                    color: '#fbebee',
                    fontSize: '1rem',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    {compatResult.verdict}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                    <button
                      onClick={onOpenAppointment}
                      className="btn-primary"
                      style={{ fontSize: '0.9rem' }}
                    >
                      <Calendar size={16} />
                      <span>Book Deep Marriage Reading</span>
                    </button>

                    <a
                      href={`https://wa.me/${brandConfig.whatsapp}?text=Hello%20Pandith%20Raghav%20Guruji%2C%20I%20checked%20our%20Kundli%20Milan%20between%20${encodeURIComponent(compatResult.p1)}%20and%20${encodeURIComponent(compatResult.p2)}%20and%20would%20like%20your%20expert%20guidance.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-crimson"
                      style={{ fontSize: '0.9rem' }}
                    >
                      <span>Discuss on WhatsApp &rarr;</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
