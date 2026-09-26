import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesStrip from '../components/ServicesStrip';
import AboutSection from '../components/AboutSection';
import ServeSection from '../components/ServeSection';
import CTABanner from '../components/CTABanner';
import LocationsSection from '../components/LocationsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactFAQ from '../components/ContactFAQ';

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner Slider */}
      <HeroSlider />

      {/* 2. Top Services Strip (6 rounded corner items) */}
      <ServicesStrip />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. What We Serve Section */}
      <ServeSection />

      {/* 5. Overlapping CTA Banner */}
      <CTABanner />

      {/* 6. Where We Are Serving in Canada */}
      <LocationsSection />

      {/* 7. Why Should You Choose Us (01 to 05 Gradient Numbers) */}
      <WhyChooseUs />

      {/* 8. What Our Client Say's (Testimonials) */}
      <Testimonials />

      {/* 9. Share Your Problems Form & FAQ Accordion */}
      <ContactFAQ />
    </>
  );
}
