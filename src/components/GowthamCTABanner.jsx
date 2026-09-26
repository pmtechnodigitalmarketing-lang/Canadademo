import React from 'react';
import brandConfig from '../data/brandConfig';

export default function GowthamCTABanner() {
  return (
    <div className="cta-banner-wrapper">
      <div className="elementor-container">
        <a 
          href={`tel:${brandConfig.phoneRaw}`} 
          style={{ display: 'block', width: '100%', margin: '0 auto' }}
        >
          <img 
            src="https://pandithgowtham.com/wp-content/uploads/2025/05/Gowtham-cta.webp" 
            alt="Pandith CTA" 
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </a>
      </div>
    </div>
  );
}

