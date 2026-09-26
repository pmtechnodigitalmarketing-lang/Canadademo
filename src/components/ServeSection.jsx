import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import brandConfig from '../data/brandConfig';

const servicesList = [
  {
    title: "psychic reading",
    image: "/images/assets/vpvftb7rgcxglzn2a0eg.webp",
    alt: "astrologer in Calgary",
    link: "/psychic-reading",
    desc: "Psychic reading is a crucial part of astrology where someone can explore different things by implementing several ancient techniques."
  },
  {
    title: "spiritual healing",
    image: "/images/assets/pqgtjgbbnggd7sja2xsq.webp",
    alt: "spiritual healer",
    link: "/spiritual-cleansing",
    desc: "Spiritual or energy healing is an ancient practice that can help an individual both physically and mentally."
  },
  {
    title: "ex love back",
    image: "/images/assets/qdlimvfjewyrob9b8rfg.webp",
    alt: "get ex love back in Calgary",
    link: "/get-ex-love-back",
    desc: "A breakup can be very effective if you are still in love with your partner. Even though some situations can be the prime causes."
  },
  {
    title: "BLACK MAGIC REMOVAL",
    image: "/images/assets/hjaobubgx1dq3ngklzsc.webp",
    alt: "black magic removal",
    link: "/black-magic-removal",
    desc: "Black magic is an evil act that is mostly practiced out of jealousy. When an individual is jealous of your success."
  },
  {
    title: "jealousy and curse removal",
    image: "/images/assets/lcvmdq6ytk4h3o4pijrf.webp",
    alt: "evil spirit removal",
    link: "/jealousy-and-curse-removal",
    desc: "When someone is affected by an evil curse, it can create a lot of issues. In that case, only consulting an expert for curse removal in Canada."
  },
  {
    title: "NEGATIVE ENERGY REMOVAL",
    image: "/images/assets/dnmorazmguyea2a6fwxo.webp",
    alt: "astrology services",
    link: "/negative-energy-removal",
    desc: "Negative energy is a part of spirituality that can harm an individual in different ways. Even though there’s no evidence in science."
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
            what we serve
          </h2>

          <p style={{ color: '#2b0404', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
            {brandConfig.name} offers precise horoscope readings, palmistry, face reading, and future predictions to guide your life path. Specializing in love spells, vashikaran, marriage solutions, and black magic removal, he also provides career, business, and spiritual healing services. With ancient wisdom and proven remedies, he brings clarity, protection, and success to your journey.
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
                  loading="lazy"
                />

                {/* Absolute Consult Now Pill on Right Edge */}
                <a 
                  href={`tel:${brandConfig.phoneRaw}`} 
                  className="card-consult-btn"
                  title="consult now"
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
                  <Link to={service.link} className="card-readmore-btn">
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
