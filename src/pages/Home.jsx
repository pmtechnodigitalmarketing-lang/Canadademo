import React from 'react';
import GowthamHeroSlider from '../components/GowthamHeroSlider';
import GowthamServicesStrip from '../components/GowthamServicesStrip';
import GowthamAboutSection from '../components/GowthamAboutSection';
import GowthamServeSection from '../components/GowthamServeSection';
import GowthamCTABanner from '../components/GowthamCTABanner';
import GowthamWhyChooseUs from '../components/GowthamWhyChooseUs';
import GowthamTestimonials from '../components/GowthamTestimonials';
import GowthamContactFAQ from '../components/GowthamContactFAQ';

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner Slider */}
      <GowthamHeroSlider />

      {/* 2. Top Services Strip (6 rounded corner items) */}
      <GowthamServicesStrip />

      {/* 3. About Pandith Gowtham */}
      <GowthamAboutSection />

      {/* 4. What We Serve (Gold background with 6 Crimson Cards) */}
      <GowthamServeSection />

      {/* 5. Overlapping CTA Banner */}
      <GowthamCTABanner />

      {/* 6. Why Should You Choose Us (01 to 05 Gradient Numbers) */}
      <GowthamWhyChooseUs />

      {/* 8. What Our Client Say's (Testimonials) */}
      <GowthamTestimonials />

      {/* 9. Share Your Problems Form & FAQ Accordion */}
      <GowthamContactFAQ />
    </>
  );
}
