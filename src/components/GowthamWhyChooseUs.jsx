import React from 'react';
import brandConfig from '../data/brandConfig';

const whyItems = [
  {
    num: "01",
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/kvvjgzm72dqfbrcpww2z.webp",
    alt: "guarantee",
    title: "best service everytime",
    desc: "Accurate, trustworthy, and transformative. Your satisfaction is our promise, delivered with care and expertise.",
    reverse: false
  },
  {
    num: "02",
    image: "https://pandithgowtham.com/wp-content/uploads/2025/05/get-instant-solution.png",
    alt: "get instant solution",
    title: "get instant solution",
    desc: "Get instant solutions to your problems. Reliable guidance for life's toughest challenges, just a call away.",
    reverse: true
  },
  {
    num: "03",
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/ogox67wmkjmggecrtmuw.webp",
    alt: "lock",
    title: "secure customer privacy",
    desc: "We prioritize secure customer privacy with strict confidentiality in every reading and consultation.",
    reverse: false
  },
  {
    num: "04",
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/xu7x1wiud24tjnmthnyf.webp",
    alt: "calendar",
    title: "35k + satisfied clients",
    desc: "35K+ satisfied clients worldwide. Our proven expertise and guidance continue to transform lives every day.",
    reverse: true
  },
  {
    num: "05",
    image: "https://pandithgowtham.com/wp-content/uploads/2025/07/kvvjgzm72dqfbrcpww2z.webp",
    alt: "guarantee",
    title: "365 days availability",
    desc: "We're here for you 365 days a year, weekends or holidays because your needs don’t keep a schedule.",
    reverse: false
  }
];

export default function GowthamWhyChooseUs() {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="elementor-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="img-heading-pill">
            <img 
              src={brandConfig.faviconUrl} 
              alt="pandith astrologer favicon" 
            />
            <span>Pandith</span>
          </div>

          <h2 className="gowtham-section-title">
            why should you choose us
          </h2>
        </div>

        {/* 5 Alternating Rows with 101px Gradient Numbers */}
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {whyItems.map((item, idx) => (
            <div key={idx} className="why-row">
              {item.reverse ? (
                <>
                  {/* Symmetrical Left Content Box (Image towards center, text on outer side) */}
                  <div className="why-content-box reverse-box">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      loading="lazy"
                    />
                    <div className="why-content-text">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>

                  {/* Gradient Number on Right */}
                  <div className="why-number">
                    {item.num}
                  </div>
                </>
              ) : (
                <>
                  {/* Gradient Number on Left */}
                  <div className="why-number">
                    {item.num}
                  </div>

                  {/* Content Box on Right (Image towards center, text on outer side) */}
                  <div className="why-content-box">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      loading="lazy"
                    />
                    <div className="why-content-text">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

