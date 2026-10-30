import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Compass, Heart, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import brandConfig from '../data/brandConfig';

export default function SEOContentSection() {
  const pillars = [
    {
      icon: Compass,
      title: "Vedic Birth Chart Reading & Astrology Consultation",
      keywords: "Birth Chart Reading • Vedic Horoscope • Janam Kundli",
      desc: "Your birth chart (Janam Kundli) is a cosmic blueprint of your planetary alignments at birth. Master Narayan analyzes the 12 astrological houses, Mahadasha cycles, and planetary transit afflictions to reveal accurate forecasts for career, business wealth, foreign travel, and health.",
      points: [
        "In-depth 12 House & Planetary Transit Analysis",
        "Manglik & Kaal Sarp Dosha Pacification",
        "Auspicious Gemstone & Yantra Recommendations"
      ],
      link: "/services/vedic-astrology-reading",
      linkText: "Explore Birth Chart Reading"
    },
    {
      icon: Heart,
      title: "Love Problem Solution & Get Ex Love Back",
      keywords: "Love Astrologer • Ex Back Specialist • Marriage Astrology",
      desc: "Heartbreak, bitter arguments, and sudden breakups often stem from malefic transits of Venus, Mars, or Rahu. As Canada's top love problem solution specialist, Master Narayan utilizes pure Vedic Akarshan rituals and relationship poojas to soften hardened feelings and reunite partners fast.",
      points: [
        "Heal Painful Breakups & Reconnect with Ex",
        "Stop Divorce & Rebuild Spousal Harmony",
        "Inter-Caste & Family Opposition Remedies"
      ],
      link: "/get-ex-love-back",
      linkText: "Explore Love Problem Solutions"
    },
    {
      icon: Shield,
      title: "Black Magic Removal Expert Near Me",
      keywords: "Dark Energy Cleansing • Evil Eye Removal • Sudarshana Kavach",
      desc: "Unexplained financial collapses, constant family illnesses, chronic exhaustion, and dark home atmospheres often indicate jealousy curses or negative occult interference. Master Narayan performs ancient Maha Sudarshana and Kali rituals for permanent protection.",
      points: [
        "Complete Annihilation of Dark Occult & Hexes",
        "Banish Toxic Evil Eye (Buri Nazar) & Jealousy",
        "Lifelong Home & Family Protective Kavach"
      ],
      link: "/black-magic-removal",
      linkText: "Explore Black Magic Removal"
    }
  ];

  const cityLinks = [
    { name: "Toronto", path: "/locations/toronto" },
    { name: "Brampton", path: "/locations/brampton" },
    { name: "Mississauga", path: "/locations/mississauga" },
    { name: "Vancouver", path: "/locations/vancouver" },
    { name: "Calgary", path: "/locations/calgary" },
    { name: "Edmonton", path: "/locations/edmonton" },
    { name: "Montreal", path: "/locations/montreal" },
    { name: "Ottawa", path: "/locations/ottawa" },
    { name: "Delta (HQ)", path: "/locations/delta" }
  ];

  return (
    <section style={{ padding: '70px 0 50px', background: '#fcfaf6', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="elementor-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 45px' }}>
          <div className="img-heading-pill">
            <Sparkles size={16} color="var(--e-global-color-primary)" />
            <span>AUTHENTIC VEDIC JYOTISH &amp; SPIRITUAL HEALING</span>
          </div>

          <h2 className="section-title" style={{ marginTop: '12px', fontSize: 'clamp(24px, 3.5vw, 36px)' }}>
            Why We Are Rated The Best Astrologer In Canada
          </h2>

          <p style={{ color: '#444444', fontSize: '16px', lineHeight: 1.7, marginTop: '15px' }}>
            When facing sudden relationship distress, financial barriers, or unexplained negative energies, searching for a genuine <strong>astrologer near me</strong> can feel overwhelming. With over {brandConfig.experienceYears} years of ancestral Vedic wisdom, <strong>{brandConfig.name}</strong> provides confidential in-person appointments in British Columbia and direct phone &amp; WhatsApp consultations nationwide.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '35px 28px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(136, 19, 41, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <div>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, #4a050f 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--e-global-color-secondary)',
                    marginBottom: '20px'
                  }}>
                    <Icon size={28} />
                  </div>

                  <span style={{
                    display: 'inline-block',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: 'var(--e-global-color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '8px'
                  }}>
                    {pillar.keywords}
                  </span>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#2b0404',
                    lineHeight: 1.35,
                    marginBottom: '14px'
                  }}>
                    {pillar.title}
                  </h3>

                  <p style={{
                    color: '#555555',
                    fontSize: '14.5px',
                    lineHeight: 1.7,
                    marginBottom: '20px'
                  }}>
                    {pillar.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px' }}>
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#333333', fontWeight: 600 }}>
                        <CheckCircle size={15} color="var(--e-global-color-primary)" style={{ flexShrink: 0 }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to={pillar.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--e-global-color-primary)',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none'
                  }}
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Local City Hub Links for Canada SEO */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '30px 25px',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          textAlign: 'center'
        }}>
          <h4 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '17px',
            fontWeight: 700,
            color: 'var(--e-global-color-primary)',
            marginBottom: '15px'
          }}>
            Serving In-Person &amp; Remote Consultations Across All Canadian Metros:
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            {cityLinks.map((city, idx) => (
              <Link
                key={idx}
                to={city.path}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#f8f5f0',
                  color: '#2b0404',
                  padding: '7px 16px',
                  borderRadius: '25px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid #e8e2d7'
                }}
              >
                <span>Astrologer in {city.name}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

