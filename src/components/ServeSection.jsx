import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import brandConfig from '../data/brandConfig';

const servicesList = [
  {
    title: "Psychic Reading & Astrologer Near Me",
    image: "/images/assets/vpvftb7rgcxglzn2a0eg.webp",
    alt: "Psychic astrologer and psychic reading in Canada",
    link: "/psychic-reading",
    desc: "Receive accurate future predictions and clairvoyant insights into soulmates, career breakthroughs, and upcoming destiny crossroads."
  },
  {
    title: "Spiritual Healing & Biofield Cleansing",
    image: "/images/assets/pqgtjgbbnggd7sja2xsq.webp",
    alt: "Spiritual healer and biofield chakra healing in Canada",
    link: "/spiritual-cleansing",
    desc: "Purify chronic emotional anxiety, unblock 7 chakras, and restore energetic vitality through sacred Vedic spiritual healing."
  },
  {
    title: "Love Problem Solution & Get Ex Back",
    image: "/images/assets/qdlimvfjewyrob9b8rfg.webp",
    alt: "Love problem solution and get ex love back specialist in Canada",
    link: "/get-ex-love-back",
    desc: "Heal painful breakups and marriages with ancient Vedic Akarshan and Venusian poojas to reunite with your true partner fast."
  },
  {
    title: "Black Magic Removal Expert Near Me",
    image: "/images/assets/hjaobubgx1dq3ngklzsc.webp",
    alt: "Black magic removal expert and dark energy protection in Canada",
    link: "/black-magic-removal",
    desc: "Break dark occult curses, demonic disturbances, and envious hexes permanently with sacred Maha Sudarshana and Kali Kavach."
  },
  {
    title: "Evil Eye & Jealousy Curse Removal",
    image: "/images/assets/lcvmdq6ytk4h3o4pijrf.webp",
    alt: "Evil eye removal and curse removal specialist in Canada",
    link: "/jealousy-and-curse-removal",
    desc: "Neutralize toxic envious glance (Buri Nazar) from competitors and family rivals, reversing bad luck into prosperity."
  },
  {
    title: "Negative Energy Removal & Protection",
    image: "/images/assets/dnmorazmguyea2a6fwxo.webp",
    alt: "Negative energy removal and home aura cleansing",
    link: "/negative-energy-removal",
    desc: "Dispel heavy spiritual blockages, chronic bad luck, and home disharmony with potent Vedic yantras and sacred havans."
  }
];

export default function ServeSection() {
  return (
    <section className="serve-section" id="services">
      <div className="elementor-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="img-heading-pill">
            <Sparkles size={16} style={{ color: '#ffffff' }} />
            <span>{brandConfig.bannerBadge}</span>
          </div>

          <h2 className="section-title" style={{ color: 'var(--e-global-color-darkred)' }}>
            What We Serve: Vedic Astrology &amp; Spiritual Healing
          </h2>

          <p style={{ color: '#2b0404', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
            <strong>{brandConfig.name}</strong> provides comprehensive <strong>birth chart readings</strong>, <strong>palmistry</strong>, face reading, and future predictions across Canada. Specializing in <strong>love problem solutions</strong>, <strong>vashikaran</strong>, marriage remedies, and <strong>black magic removal near you</strong>, he delivers authentic Vedic solutions that bring clarity, protection, and lifelong peace.
          </p>
        </div>

        {/* 6 Crimson Cards Grid */}
        <div className="cards-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="serve-card">
              
              {/* Service Image */}
              <div className="card-image-wrap">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  width="360"
                  height="230"
                  loading="lazy"
                />

                {/* Absolute Consult Now Pill on Right Edge */}
                <a 
                  href={`tel:${brandConfig.phoneRaw}`} 
                  className="card-consult-btn"
                  title={`Consult Now for ${service.title}`}
                  aria-label={`Consult Now for ${service.title} via Phone`}
                >
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                  <span>consult now</span>
                </a>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-title">
                  <Link to={service.link}>
                    {service.title}
                  </Link>
                </h3>

                <p className="card-text">
                  {service.desc}
                </p>

                <div>
                  <Link 
                    to={service.link} 
                    className="card-readmore-btn"
                    aria-label={`Read more about ${service.title}`}
                  >
                    <span>read more</span>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
