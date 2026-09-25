import React from 'react';
import brandConfig from '../data/brandConfig';

export default function GowthamVideoSection() {
  const videos = [
    {
      id: "zJAk630_4-0",
      title: "Client Experience 1"
    },
    {
      id: "TLIuRErX4TA",
      title: "Client Experience 2"
    }
  ];

  return (
    <section 
      className="video-section"
      style={{
        backgroundImage: 'url("https://pandithgowtham.com/wp-content/uploads/2025/07/lucid-origin_prompt_Luxury_mystical_crystal_ball_on_elegant_antique_stand_glowing_cosmic_gala-0-1.jpg")'
      }}
    >
      <div className="elementor-container video-section-content">
        
        {/* Pill Badge */}
        <div className="img-heading-pill">
          <img 
            src={brandConfig.faviconUrl} 
            alt="pandith gowtham favicon" 
          />
          <span>testimonials</span>
        </div>

        {/* Heading */}
        <h2 className="gowtham-section-title" style={{ color: '#ffffff', marginBottom: '10px' }}>
          what our client Feel After Guidance
        </h2>

        {/* Video Cards Grid */}
        <div className="video-grid">
          {videos.map((vid, idx) => (
            <div key={idx} className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${vid.id}?rel=0&controls=1&modestbranding=1`}
                title={vid.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
