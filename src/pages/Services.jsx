import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, ArrowRight, CheckCircle2, Sparkles, Clock, Compass, Shield, MessageCircle, X } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import servicesData from '../data/servicesData';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactFAQ from '../components/ContactFAQ';

const categories = [
  { key: 'all', label: `All (${servicesData.length}) Services` },
  { key: 'love-relationship', label: '❤️ Love & Relationships' },
  { key: 'spiritual-protection', label: '🧿 Spiritual & Dark Energy Protection' },
  { key: 'indian-vedic', label: '🕉️ Vedic Astrology & Readings' },
  { key: 'career-guidance', label: '✨ Career, Business & Wealth' }
];

const serviceTestimonials = [
  {
    id: "st-1",
    serviceName: "Sacred Akarshan & Ex Love Reconnection",
    serviceId: "ex-love-back",
    category: "love-relationship",
    icon: "❤️",
    turnaround: "Resolved in 42 Hours",
    client: "Elena & Marcus",
    avatar: "/images/testimonials/elena.jpg",
    location: "Calgary, Alberta",
    quote: `Marcus had blocked me everywhere for 7 months after heavy interference from his relatives. ${brandConfig.name} performed a 3-night remote Venusian pooja with our photographs. On the 2nd night at 2:15 AM, Marcus unblocked me, called sobbing, and confessed he couldn't live without me. We are now happily reunited!`,
    metrics: "7 Months Separation → Reunited in 42 Hours"
  },
  {
    id: "st-2",
    serviceName: "Maha Sudarshana & Black Magic Annihilation",
    serviceId: "black-magic-removal",
    category: "spiritual-protection",
    icon: "🧿",
    turnaround: "Relief in 24 Hours",
    client: "Vikramaditya S.",
    avatar: "/images/testimonials/vikram.jpg",
    location: "Edmonton, Alberta",
    quote: `For nearly two years, my home felt suffocating. Unexplained physical illness, sharp sudden losses in business, and horrific recurring nightmares. ${brandConfig.name} identified an envious curse sent by a rival. Within 24 hours of his Kavach consecration, the oppressive weight lifted completely.`,
    metrics: "2-Year Affliction → Shielded in 24 Hours"
  },
  {
    id: "st-3",
    serviceName: "Kumbh Vivah & Manglik Dosha Shanti",
    serviceId: "manglik-dosha-hanuman",
    category: "indian-vedic",
    icon: "💍",
    turnaround: "Harmonized in 3 Days",
    client: "Pooja & Rohan K.",
    avatar: "/images/testimonials/rajesh-priya.jpg",
    location: "Toronto, Canada",
    quote: `Our marriage was on the brink of divorce due to daily violent arguments and extreme anger outbursts. ${brandConfig.name} detected a high-intensity Mangal Dosha in my 7th house and conducted a specialized distance ritual. The hostility evaporated, and love and mutual respect returned to our home.`,
    metrics: "Divorce Halted → Lifelong Harmony Restored"
  },
  {
    id: "st-4",
    serviceName: "Rahu Mahadasha & Financial Debt Liberation",
    serviceId: "business-debt-recovery",
    category: "career-guidance",
    icon: "🪐",
    turnaround: "Breakthrough in 7 Days",
    client: "Michael T.",
    avatar: "/images/testimonials/michael.jpg",
    location: "Vancouver, BC",
    quote: `My commercial logistics firm was drowning in $230,000 bad debt and stalled contracts during my Rahu Dasha. ${brandConfig.name} created an energized Surya Yantra and performed a Maha Lakshmi Yagya on my birth nakshatra. Within 10 days, 3 stalled contracts cleared simultaneously!`,
    metrics: "$230k Stalled Debt → 3 Contracts Cleared"
  },
  {
    id: "st-5",
    serviceName: "Tantric Evil Eye & Buri Nazar Shielding",
    serviceId: "evil-eye-removal",
    category: "spiritual-protection",
    icon: "🛡️",
    turnaround: "Instant Shift",
    client: "Simran & Harpreet",
    avatar: "/images/testimonials/harpreet-sonia.jpg",
    location: "Calgary, AB",
    quote: `Our 4-month-old infant would cry hysterically every night from midnight to 3 AM without any medical cause. ${brandConfig.name} immediately diagnosed severe Buri Nazar and performed a protective distance Hanuman Kavach recitation. That very night, our baby slept peacefully through till morning.`,
    metrics: "Severe Disturbance → Peaceful Deep Sleep"
  },
  {
    id: "st-6",
    serviceName: "Inter-Caste Marriage & Parental Consent Pooja",
    serviceId: "love-marriage-specialist",
    category: "love-relationship",
    icon: "🕊️",
    turnaround: "Approval in 5 Days",
    client: "Devraj & Ananya",
    avatar: "/images/testimonials/devraj.jpg",
    location: "Edmonton, AB",
    quote: `Both families were fiercely opposed to our union for 14 months and threatened disownment. ${brandConfig.name} conducted a Kamakhya Mohini Sankalpam. On the fifth day, my strictly traditional father called Devraj's family to invite them with complete goodwill. We were happily married!`,
    metrics: "14-Month Opposition → Blessed Marriage in 5 Days"
  },
  {
    id: "st-7",
    serviceName: "Samudrika Shastra & Complete Palmistry Reading",
    serviceId: "palmistry-reading",
    category: "career-guidance",
    icon: "✋",
    turnaround: "Immediate Clarity",
    client: "Carlos Mendez",
    avatar: "/images/testimonials/carlos.jpg",
    location: "Red Deer, Alberta",
    quote: `I sent photos of both palms via WhatsApp with total skepticism. ${brandConfig.name} named my exact surgery from age 14, my mother's passing month, and predicted a sudden international tech buyout for my venture. The buyout happened precisely as he foresaw down to the week!`,
    metrics: "100% Uncanny Accuracy on Past & Future"
  },
  {
    id: "st-8",
    serviceName: "Vedic Vashikaran for Husband Distancing & Infidelity",
    serviceId: "marriage-solutions",
    category: "love-relationship",
    icon: "❤️",
    turnaround: "Turnaround in 48 Hours",
    client: "Kavita S.",
    avatar: "/images/testimonials/kavita.jpg",
    location: "Lethbridge, AB",
    quote: `My husband of 11 years had walked out for another woman, ignoring our two young children. ${brandConfig.name} performed an ancestral Mohini Shukra remedy. Within 48 hours, my husband arrived at our doorstep in tears begging for forgiveness, and has dedicated himself completely to our family.`,
    metrics: "Infidelity & Departure → Reunited in 48 Hours"
  }
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);

  const filteredServices = servicesData.filter(service => {
    const sTerm = searchTerm.toLowerCase();
    const titleMatch = (service.title || '').toLowerCase().includes(sTerm);
    const subMatch = (service.subtitle || '').toLowerCase().includes(sTerm);
    const descMatch = (service.shortDesc || '').toLowerCase().includes(sTerm);
    const remMatch = Array.isArray(service.remedies) && service.remedies.some(r => r.toLowerCase().includes(sTerm));
    const matchesSearch = !searchTerm || titleMatch || subMatch || descMatch || remMatch;

    const matchesCat = activeCategory === 'all' || service.category === activeCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '65px 15px 55px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle patterned overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(rgba(240, 180, 21, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.6,
          pointerEvents: 'none'
        }} />

        <div className="elementor-container" style={{ position: 'relative', zIndex: 1 }}>
          
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            <img src={brandConfig.faviconUrl} alt={`${brandConfig.name} favicon`} />
            <span style={{ color: '#ffffff', fontWeight: 800, letterSpacing: '1px' }}>
              ✦ {servicesData.length} AUTHENTIC VEDIC REMEDIAL DISCIPLINES
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4.5vw, 44px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '15px',
            lineHeight: 1.2
          }}>
            All Astrology &amp; Spiritual Services
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '850px',
            margin: '0 auto 30px',
            lineHeight: 1.7
          }}>
            Every human struggle is rooted in planetary transits, unaligned chakras, karmic debts, or negative spiritual interference. <strong>{brandConfig.name}</strong> provides exact, fast-acting remedies tailored to your birth chart with proven results across Canada.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '620px', margin: '0 auto', position: 'relative' }}>
            <Search 
              size={22} 
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--e-global-color-secondary)'
              }}
            />
            <input
              type="text"
              placeholder="Search by problem (e.g. Ex Love, Black Magic, Vashikaran, Marriage, Career)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 22px 15px 56px',
                borderRadius: '35px',
                border: '2px solid var(--e-global-color-secondary)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#ffffff',
                fontSize: '16px',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 2. SERVICES CATALOG GRID SECTION */}
      <section style={{ padding: '50px 0 70px', background: '#fdfbf7' }}>
        <div className="elementor-container">
          
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            {categories.map(cat => {
              const isActive = activeCategory === cat.key;
              const count = cat.key === 'all' 
                ? servicesData.length 
                : servicesData.filter(s => s.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    padding: '11px 22px',
                    borderRadius: '30px',
                    border: isActive ? '2px solid var(--e-global-color-primary)' : '1px solid #dcd3c5',
                    backgroundColor: isActive ? 'var(--e-global-color-primary)' : '#ffffff',
                    color: isActive ? '#ffffff' : '#333333',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 5px 15px rgba(150, 4, 4, 0.25)' : '0 2px 6px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat.label} {cat.key !== 'all' && `(${count})`}
                </button>
              );
            })}
          </div>

          {/* Results Count Banner */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            paddingBottom: '12px',
            borderBottom: '2px solid rgba(240, 180, 21, 0.3)'
          }}>
            <p style={{ fontSize: '17px', fontWeight: 800, color: 'var(--e-global-color-darkred)' }}>
              Showing {filteredServices.length} Authentic Vedic Disciplines
            </p>
            {searchTerm && (
              <button 
                type="button"
                onClick={() => setSearchTerm('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--e-global-color-primary)',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Clear Search &times;
              </button>
            )}
          </div>

          {/* 40 Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(18px, 3vw, 30px)'
          }}>
            {filteredServices.map(service => (
              <article 
                key={service.id} 
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(240, 180, 21, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="service-catalog-card"
              >
                
                {/* Image Container with Top Badge */}
                <div 
                  style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#2b0404', cursor: 'pointer' }}
                  onClick={() => setActiveModalService(service)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/assets/image-14-1.webp";
                    }}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '6px',
                    lineHeight: 1.3
                  }}>
                    <Link to={`/services/${service.id}`} style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                      {service.title}
                    </Link>
                  </h3>

                  <div style={{
                    fontSize: '13.5px',
                    color: 'var(--e-global-color-primary)',
                    fontWeight: 700,
                    marginBottom: '12px'
                  }}>
                    {service.subtitle}
                  </div>

                  <p style={{
                    fontSize: '14.5px',
                    color: '#555555',
                    lineHeight: 1.6,
                    marginBottom: '18px',
                    flexGrow: 1
                  }}>
                    {service.shortDesc}
                  </p>



                  {/* Actions Bar */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '15px',
                    borderTop: '1px solid #eeeeee',
                    gap: '8px'
                  }}>
                    <button
                      type="button"
                      onClick={() => setActiveModalService(service)}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--e-global-color-primary)',
                        color: 'var(--e-global-color-primary)',
                        padding: '7px 12px',
                        borderRadius: '18px',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Quick View
                    </button>

                    <a
                      href={`tel:${brandConfig.phoneRaw}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: 'var(--e-global-color-primary)',
                        color: '#ffffff',
                        padding: '8px 14px',
                        borderRadius: '20px',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      <Phone size={14} />
                      <span>Consult</span>
                    </a>

                    <Link
                      to={`/services/${service.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                        color: 'var(--e-global-color-darkred)',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>

              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--e-global-color-darkred)', marginBottom: '10px' }}>
                No Services Match "{searchTerm}"
              </h3>
              <p style={{ color: '#666666', marginBottom: '20px' }}>
                Try searching for keywords like "Love", "Breakup", "Black Magic", "Marriage", or "Protection".
              </p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="header-phone-btn"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                View All {servicesData.length} Services
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. HOW REMOTE DISTANCE HEALING WORKS (FROM MASTER OMKAR) */}
      <section style={{ padding: '60px 0', background: '#f5eee6', borderTop: '1px solid #e8dec8' }}>
        <div className="elementor-container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 45px' }}>
            <div className="img-heading-pill" style={{ marginBottom: '12px' }}>
              <img src={brandConfig.faviconUrl} alt={`${brandConfig.name} favicon`} />
              <span>✦ DISTANCE REMEDIAL PROCESS ✦</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--e-global-color-primary)',
              marginBottom: '15px'
            }}>
              How Vedic Energy Works Across All Distances
            </h2>
            <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.7 }}>
              You do not need to travel in person. Vedic prana energy operates on the astral plane through sacred intention, photographs, and astrological birth blueprints.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px'
          }}>
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '30px 25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', position: 'relative' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: 'rgba(240, 180, 21, 0.4)', position: 'absolute', top: '15px', right: '20px' }}>01</span>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>📞</div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--e-global-color-primary)', marginBottom: '10px' }}>Initial Confidential Call</h3>
              <p style={{ fontSize: '14.5px', color: '#666666', lineHeight: 1.6 }}>
                Speak directly with {brandConfig.name} via phone or WhatsApp. Share your current distress, dates of birth, photos, and maternal names of the parties involved.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '30px 25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', position: 'relative' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: 'rgba(240, 180, 21, 0.4)', position: 'absolute', top: '15px', right: '20px' }}>02</span>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>🪐</div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--e-global-color-primary)', marginBottom: '10px' }}>Root Cause Astral Reading</h3>
              <p style={{ fontSize: '14.5px', color: '#666666', lineHeight: 1.6 }}>
                {brandConfig.name} performs a deep Kundli &amp; Prana energy diagnostic to uncover hidden blockages, negative outside spells, or malefic planetary transits.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '30px 25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', position: 'relative' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: 'rgba(240, 180, 21, 0.4)', position: 'absolute', top: '15px', right: '20px' }}>03</span>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>🔥</div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--e-global-color-primary)', marginBottom: '10px' }}>Sacred Remedial Yajna</h3>
              <p style={{ fontSize: '14.5px', color: '#666666', lineHeight: 1.6 }}>
                Consecrated mantras, Shukra Akarshan poojas, or Sudarshana Kavacham rituals are performed at {brandConfig.name}’s sacred altar on your behalf.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '30px 25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', position: 'relative' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: 'rgba(240, 180, 21, 0.4)', position: 'absolute', top: '15px', right: '20px' }}>04</span>
              <div style={{ fontSize: '30px', marginBottom: '15px' }}>✨</div>
              <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--e-global-color-primary)', marginBottom: '10px' }}>Noticeable Shifts in 24-48h</h3>
              <p style={{ fontSize: '14.5px', color: '#666666', lineHeight: 1.6 }}>
                Seekers experience palpable relief: renewed communication from ex-partners, lifted emotional burdens, financial breakthroughs, and deep inner peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFIED CLIENT TRANSFORMATIONS & TESTIMONIALS */}
      <section style={{ padding: '65px 0', background: '#ffffff', overflow: 'hidden' }}>
        <div className="elementor-container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <div className="img-heading-pill" style={{ marginBottom: '12px' }}>
              <img src={brandConfig.faviconUrl} alt={`${brandConfig.name} favicon`} />
              <span>✦ VERIFIED SACRED TRANSFORMATIONS ✦</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--e-global-color-primary)',
              marginBottom: '15px'
            }}>
              Real Miracles &amp; Client Breakthroughs
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: 1.7 }}>
              Documented cases of life transformations achieved through {brandConfig.name}'s Vedic astrological solutions.
            </p>
          </div>
        </div>

        {/* Single Line Moving Left to Right Marquee */}
        <div className="transformations-slider-wrap">
          <div className="transformations-track">
            {[...serviceTestimonials, ...serviceTestimonials].map((t, index) => (
              <div
                key={`${t.id}-${index}`}
                className="transformation-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--e-global-color-primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span>{t.icon}</span>
                      <span>{t.serviceName}</span>
                    </span>
                    <span style={{ fontSize: '11.5px', background: '#ffeec2', color: '#875100', padding: '2px 8px', borderRadius: '10px', fontWeight: 800 }}>
                      ⚡ {t.turnaround}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ color: '#F0B415', fontSize: '15px' }}>★★★★★</span>
                    <span style={{ fontSize: '12px', background: '#ffffff', border: '1px solid #e0d0b0', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, color: '#333333' }}>
                      {t.metrics}
                    </span>
                  </div>

                  <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '18px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #e8dec8', paddingTop: '14px', marginTop: 'auto' }}>
                  <img
                    src={t.avatar}
                    alt={t.client}
                    style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--e-global-color-secondary)' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/assets/image-14-1.webp";
                    }}
                  />
                  <div>
                    <strong style={{ fontSize: '15px', color: '#1a1a1a', display: 'block' }}>{t.client}</strong>
                    <span style={{ fontSize: '12.5px', color: '#777777' }}>📍 {t.location} • <span style={{ color: '#2e7d32', fontWeight: 700 }}>✓ Verified Seeker</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 6. CONTACT FORM & FAQ */}
      <ContactFAQ />

      {/* 7. QUICK VIEW MODAL */}
      {activeModalService && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(5px)'
          }}
          onClick={() => setActiveModalService(null)}
        >
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              position: 'relative',
              border: '2px solid var(--e-global-color-secondary)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.6)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image Header */}
            <div style={{ position: 'relative', height: '240px', background: '#1a0000' }}>
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/assets/image-14-1.webp";
                }}
              />
            </div>

            {/* Modal Content */}
            <div style={{ padding: '25px' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 800,
                color: 'var(--e-global-color-darkred)',
                marginBottom: '6px'
              }}>
                {activeModalService.title}
              </h3>

              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--e-global-color-primary)', marginBottom: '16px' }}>
                {activeModalService.subtitle}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', color: '#333333', marginBottom: '8px' }}>
                  ✦ Vedic Analysis &amp; Astrological Roots
                </h4>
                <p style={{ fontSize: '15px', color: '#555555', lineHeight: 1.7 }}>
                  {activeModalService.fullDesc || activeModalService.shortDesc}
                </p>
              </div>

              {activeModalService.remedies && activeModalService.remedies.length > 0 && (
                <div style={{ background: '#fbf5e8', padding: '16px', borderRadius: '10px', marginBottom: '24px', borderLeft: '4px solid var(--e-global-color-secondary)' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--e-global-color-darkred)', marginBottom: '10px' }}>
                    ✦ Prescribed Vedic Remedies &amp; Havans
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                    {activeModalService.remedies.map((rem, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '13.5px', color: '#333333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} color="var(--e-global-color-primary)" />
                        <span>{rem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Consultation Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={`tel:${brandConfig.phoneRaw}`}
                  style={{
                    flex: '1 1 200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'var(--e-global-color-primary)',
                    color: '#ffffff',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={18} />
                  <span>Call {brandConfig.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.phoneRaw.replace('+', '')}?text=${encodeURIComponent(`Hello ${brandConfig.name}, I need confidential help with ${activeModalService.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: '1 1 200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp {brandConfig.name}</span>
                </a>

                <Link
                  to={`/services/${activeModalService.id}`}
                  onClick={() => setActiveModalService(null)}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'var(--e-global-color-darkred)',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    paddingTop: '6px'
                  }}
                >
                  Read In-Depth Dedicated Guide →
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}

      <style>{`
        .service-catalog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(150, 4, 4, 0.12) !important;
          border-color: var(--e-global-color-primary) !important;
        }
        .service-catalog-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
