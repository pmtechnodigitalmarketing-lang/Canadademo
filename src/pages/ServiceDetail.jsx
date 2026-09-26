import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle, ArrowRight, Sparkles, Clock, Compass } from 'lucide-react';
import brandConfig from '../data/brandConfig';
import allServices from '../data/servicesData';
import ContactFAQ from '../components/ContactFAQ';
import WhyChooseUs from '../components/WhyChooseUs';

const legacyServicesData = {
  "/relationship-problems": {
    title: "Relationship Problems Solution",
    subtitle: "Resolve Misunderstandings, Arguments & Rekindle Eternal Affection",
    image: "/images/assets/qdlimvfjewyrob9b8rfg.webp",
    description: `Are you and your partner constantly arguing over trivial matters? Has emotional distance grown between you? ${brandConfig.name} offers profound Vedic horoscope compatibility matching and planetary remedies to eliminate friction and restore true love.`
  },
  "/psychic-reading": {
    title: "Psychic Reading in Canada",
    subtitle: "Clairvoyant Foresight for Love, Destiny, Career & Finances",
    image: "/images/assets/vpvftb7rgcxglzn2a0eg.webp",
    description: `Receive deep clarity on your past, present, and future. ${brandConfig.name} utilizes inherited clairvoyant psychic perception, palmistry, and Vedic astrology charts to reveal hidden opportunities and protect you from upcoming hardships.`
  },
  "/spiritual-cleansing": {
    title: "Spiritual Healing & Cleansing",
    subtitle: "Restore Inner Harmony, Karmic Balance & Positive Vibrations",
    image: "/images/assets/pqgtjgbbnggd7sja2xsq.webp",
    description: `Clear emotional distress, chronic anxiety, and heavy psychic burdens with sacred Vedic mantras, chakra balancing, and ancestral spiritual healing performed by ${brandConfig.name}.`
  },
  "/vashikaran-specialist": {
    title: "Vashikaran Specialist in Canada",
    subtitle: "Positive Vedic Vashikaran Mantras to Attract Love & Harmony",
    image: "/images/assets/image-14-1.webp",
    description: "Influence circumstances and attract your beloved ethically using pure, satvik Vedic Vashikaran rituals passed down through generations of revered masters."
  },
  "/get-ex-love-back": {
    title: "Get Ex Love Back Specialist",
    subtitle: "Bring Back Your Ex Partner & Reignite True Passion Fast",
    image: "/images/assets/qdlimvfjewyrob9b8rfg.webp",
    description: `Experiencing heartbreak after a sudden separation or breakup? ${brandConfig.name} identifies planetary hindrances causing third-party interference and uses proven love spells and astrological remedies to bring your lover back.`
  },
  "/black-magic-removal": {
    title: "Black Magic & Evil Spirit Removal",
    subtitle: "Powerful Vedic Protection Against Dark Occult Energies & Hexes",
    image: "/images/assets/hjaobubgx1dq3ngklzsc.webp",
    description: `If you are suffering from unexplained health problems, business collapses, recurring nightmares, or domestic discord, you may be affected by black magic or evil spirits. ${brandConfig.name} provides guaranteed removal rituals and lifelong shields.`
  },
  "/negative-energy-removal": {
    title: "Negative Energy Removal",
    subtitle: "Purify Your Aura, Home & Business from Envious Vibrations",
    image: "/images/assets/dnmorazmguyea2a6fwxo.webp",
    description: `Banish lingering dark vibrations, depression, and bad luck. ${brandConfig.name}'s powerful yantras and havans cleanse your living space, inviting wealth, prosperity, and peace of mind.`
  },
  "/jealousy-and-curse-removal": {
    title: "Jealousy & Curse Removal Specialist",
    subtitle: "Neutralize Evil Eye (Buri Nazar), Family Curses & Rival Malice",
    image: "/images/assets/lcvmdq6ytk4h3o4pijrf.webp",
    description: `Protect your loved ones and your hard-earned achievements from destructive envy and ancestral curses. ${brandConfig.name}'s divine protective talismans repel all hostile energies permanently.`
  }
};

export default function ServiceDetail() {
  const location = useLocation();
  const { serviceSlug } = useParams();
  const currentPath = location.pathname;

  // 1. Try to find in all 40 services
  const matchedService = allServices.find(s => 
    s.id === serviceSlug || 
    s.id === currentPath.replace('/services/', '').replace('/', '') ||
    currentPath.includes(s.id)
  );

  // 2. Fallback to legacy dictionary or psychic reading default
  const legacy = legacyServicesData[currentPath];

  const title = matchedService ? matchedService.title : (legacy ? legacy.title : "Vedic Astrology Service");
  const subtitle = matchedService ? matchedService.subtitle : (legacy ? legacy.subtitle : "Astrological Solutions Across Canada");
  const image = matchedService ? matchedService.image : (legacy ? legacy.image : "/images/assets/vpvftb7rgcxglzn2a0eg.webp");
  const description = matchedService ? (matchedService.fullDesc || matchedService.shortDesc) : (legacy ? legacy.description : `Contact ${brandConfig.name} for personal Vedic guidance.`);
  const remedies = matchedService ? matchedService.remedies : ["Personal Horoscope Reading", "Vedic Dosha Pacification", "Protective Yantra", "Spiritual Counseling"];
  const timing = matchedService ? matchedService.timing : "Immediate consultation available";

  return (
    <div>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--e-global-color-primary) 0%, var(--e-global-color-darkred) 100%)',
        color: '#ffffff',
        padding: '50px 15px',
        textAlign: 'center'
      }}>
        <div className="elementor-container">
          <div className="img-heading-pill" style={{ background: 'rgba(255, 255, 255, 0.15)', boxShadow: 'none' }}>
            <img src={brandConfig.faviconUrl} alt={`${brandConfig.name} favicon`} />
            <span style={{ color: '#ffffff' }}>{brandConfig.name} Services</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--e-global-color-secondary)',
            marginBottom: '10px'
          }}>
            {title}
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)', maxWidth: '750px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Details */}
      <section style={{ padding: '60px 0', background: '#ffffff' }}>
        <div className="elementor-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(25px, 4vw, 50px)', alignItems: 'center' }}>
            
            {/* Image */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                background: '#2b0404',
                maxHeight: '450px'
              }}>
                <img 
                  src={image} 
                  alt={title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '450px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/assets/image-14-1.webp";
                  }}
                />
              </div>
            </div>

            {/* Content & Remedies */}
            <div>
              <div className="img-heading-pill">
                <img src={brandConfig.faviconUrl} alt={`${brandConfig.name} favicon`} />
                <span>guaranteed solutions</span>
              </div>

              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Why Consult {brandConfig.name} for {title}?
              </h2>

              <p style={{ fontSize: '16px', color: '#444444', lineHeight: 1.8, marginBottom: '25px' }}>
                {description}
              </p>

              {/* Remedies Box */}
              {remedies && remedies.length > 0 && (
                <div style={{
                  background: '#fbf5e8',
                  padding: '20px',
                  borderRadius: '12px',
                  marginBottom: '25px',
                  borderLeft: '4px solid var(--e-global-color-secondary)'
                }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--e-global-color-darkred)', marginBottom: '10px' }}>
                    Sacred Vedic Remedies Applied:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                    {remedies.map((rem, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#2b0404', fontWeight: 600 }}>
                        <CheckCircle size={16} color="var(--e-global-color-primary)" />
                        <span>{rem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timing */}
              {timing && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--e-global-color-primary)', fontWeight: 700, marginBottom: '25px' }}>
                  <Clock size={18} />
                  <span>Expected Results: {timing}</span>
                </div>
              )}

              {/* Call to action buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <a href={`tel:${brandConfig.phoneRaw}`} className="header-phone-btn">
                  <Phone size={18} />
                  <span>Call Now: {brandConfig.phoneDisplay}</span>
                </a>

                <a 
                  href={brandConfig.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '15px'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Chat</span>
                </a>

                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1.5px solid var(--e-global-color-primary)',
                    color: 'var(--e-global-color-primary)',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}
                >
                  <span>View All 40+ Services</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Contact & FAQ */}
      <ContactFAQ />
    </div>
  );
}

