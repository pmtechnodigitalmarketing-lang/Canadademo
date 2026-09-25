import React from 'react';
import brandConfig from '../data/brandConfig';

const reviews = [
  {
    name: "alex",
    location: "Canada",
    text: "Strange things kept happening nightmares, bad luck, constant fear. Pandith Gowtham detected black magic and removed it completely. The darkness lifted instantly. Now I feel safe and free again. His power is real.",
    avatar: "https://pandithgowtham.com/wp-content/uploads/2025/05/image-55.png"
  },
  {
    name: "Courtney Henry",
    location: "Canada",
    text: "I was drowning in bad luck, failed relationships, constant anxiety. Pandith Gowtham identified dark energy around me. After his powerful removal ritual, peace returned. Now I sleep better, and opportunities flow. Truly saved my life!",
    avatar: "https://pandithgowtham.com/wp-content/uploads/2025/05/Ellipse-45.png"
  },
  {
    name: "Henry",
    location: "Canada",
    text: "After our breakup, I was heartbroken until Pandith Gowtham Ji’s wisdom worked like magic. Within weeks, she returned, full of love and regret. Now we’re happier than ever. His guidance truly mended what I thought was lost forever.",
    avatar: "https://pandithgowtham.com/wp-content/uploads/2025/05/image-56.png"
  },
  {
    name: "Theresa Webb",
    location: "Canada",
    text: "My husband was leaving me for another woman, I was shattered. Pandith Gowtham’s guidance and remedies brought him back in weeks. Today, our marriage is stronger than ever. I’ll forever be grateful for this second chance.",
    avatar: "https://pandithgowtham.com/wp-content/uploads/2025/05/Ellipse-41.png"
  }
];

export default function GowthamTestimonials() {
  return (
    <section className="reviews-section" id="testimonials">
      <div className="elementor-container">
        
        {/* Header */}
        <div className="img-heading-pill">
          <img 
            src={brandConfig.faviconUrl} 
            alt="pandith gowtham favicon" 
          />
          <span>testimonials</span>
        </div>

        <h2 className="gowtham-section-title">
          what our client say’s
        </h2>

        <p style={{ maxWidth: '800px', margin: '0 auto 35px', color: '#444', fontSize: '15px', lineHeight: 1.7 }}>
          Our clients’ words speak louder than promises. From love reunions to career breakthroughs, their heartfelt testimonials reveal the life-changing power of Pandith Gowtham’s guidance. Read their journeys—your turn could be next!
        </p>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              
              <p className="review-card-text">
                "{rev.text}"
              </p>

              <div>
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="review-card-author-img"
                  loading="lazy"
                />
                
                <h4 className="review-card-name">
                  {rev.name}
                </h4>

                <p className="review-card-location">
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
