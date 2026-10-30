import React from 'react';
import brandConfig from '../data/brandConfig';

const reviews = [
  {
    name: "alex",
    location: "Canada",
    text: `Strange things kept happening nightmares, bad luck, constant fear. ${brandConfig.name} detected black magic and removed it completely. The darkness lifted instantly. Now I feel safe and free again. His power is real.`,
    avatar: "/images/assets/image-55.png"
  },
  {
    name: "Courtney Henry",
    location: "Canada",
    text: `I was drowning in bad luck, failed relationships, constant anxiety. ${brandConfig.name} identified dark energy around me. After his powerful removal ritual, peace returned. Now I sleep better, and opportunities flow. Truly saved my life!`,
    avatar: "/images/assets/Ellipse-45.png"
  },
  {
    name: "Henry",
    location: "Canada",
    text: `After our breakup, I was heartbroken until ${brandConfig.name}’s wisdom worked like magic. Within weeks, she returned, full of love and regret. Now we’re happier than ever. His guidance truly mended what I thought was lost forever.`,
    avatar: "/images/assets/image-56.png"
  },
  {
    name: "Theresa Webb",
    location: "Canada",
    text: `My husband was leaving me for another woman, I was shattered. ${brandConfig.name}’s guidance and remedies brought him back in weeks. Today, our marriage is stronger than ever. I’ll forever be grateful for this second chance.`,
    avatar: "/images/assets/Ellipse-41.png"
  }
];

export default function Testimonials() {
  return (
    <section className="reviews-section" id="testimonials">
      <div className="elementor-container">
        
        {/* Header */}
        <div className="img-heading-pill">
          <img 
            src={brandConfig.faviconUrl} 
            alt={`${brandConfig.name} favicon`} 
            width="20"
            height="20"
          />
          <span>testimonials</span>
        </div>

        <h2 className="section-title">
          what our client say’s
        </h2>

        <p style={{ maxWidth: '800px', margin: '0 auto 35px', color: '#444', fontSize: '15px', lineHeight: 1.7 }}>
          Our clients’ words speak louder than promises. From love reunions to career breakthroughs, their heartfelt testimonials reveal the life-changing power of {brandConfig.name}’s guidance. Read their journeys—your turn could be next!
        </p>

        {/* Reviews Grid */}
        <div className="reviews-grid-container">
          <div className="reviews-grid">
            {[...reviews, ...reviews].map((rev, idx) => (
              <div key={idx} className="review-card reviews-marquee-card">
                
                <p className="review-card-text">
                  "{rev.text}"
                </p>

                <div>
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="review-card-author-img"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  
                  <h3 className="review-card-name">
                    {rev.name}
                  </h3>

                  <p className="review-card-location" style={{ color: '#555555' }}>
                    {rev.location}
                  </p>

                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} aria-hidden="true" width="16" height="16" viewBox="0 0 1000 1000" fill="currentColor">
                        <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Localized Inline SVG Google Review Badge (Zero external network requests & no third-party cookies) */}
                <svg
                  className="google-review-badge"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-label="Google Review Verified"
                >
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
