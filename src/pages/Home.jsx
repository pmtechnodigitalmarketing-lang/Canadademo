import React, { Suspense, lazy } from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesStrip from '../components/ServicesStrip';
import LazySection from '../components/LazySection';

// Below-the-fold sections are lazily loaded to ensure instantaneous initial paint and zero TBT
const AboutSection = lazy(() => import('../components/AboutSection'));
const ServeSection = lazy(() => import('../components/ServeSection'));
const CTABanner = lazy(() => import('../components/CTABanner'));
const LocationsSection = lazy(() => import('../components/LocationsSection'));
const SEOContentSection = lazy(() => import('../components/SEOContentSection'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const ContactFAQ = lazy(() => import('../components/ContactFAQ'));

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner Slider (Above-the-fold, immediate) */}
      <HeroSlider />

      {/* 2. Top Services Strip (Above-the-fold, immediate) */}
      <ServicesStrip />

      {/* 3. About Section (Lazy loaded) */}
      <LazySection minHeight="500px">
        <Suspense fallback={<div style={{ minHeight: '500px' }} />}>
          <AboutSection />
        </Suspense>
      </LazySection>

      {/* 4. What We Serve Section (Lazy loaded) */}
      <LazySection minHeight="650px">
        <Suspense fallback={<div style={{ minHeight: '650px' }} />}>
          <ServeSection />
        </Suspense>
      </LazySection>

      {/* 5. Overlapping CTA Banner (Lazy loaded) */}
      <LazySection minHeight="220px">
        <Suspense fallback={<div style={{ minHeight: '220px' }} />}>
          <CTABanner />
        </Suspense>
      </LazySection>

      {/* 6. Where We Are Serving in Canada (Lazy loaded) */}
      <LazySection minHeight="400px">
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <LocationsSection />
        </Suspense>
      </LazySection>

      {/* 7. Comprehensive Keyword & SEO Content Pillar Section (Lazy loaded) */}
      <LazySection minHeight="550px">
        <Suspense fallback={<div style={{ minHeight: '550px' }} />}>
          <SEOContentSection />
        </Suspense>
      </LazySection>

      {/* 8. Why Should You Choose Us (Lazy loaded) */}
      <LazySection minHeight="600px">
        <Suspense fallback={<div style={{ minHeight: '600px' }} />}>
          <WhyChooseUs />
        </Suspense>
      </LazySection>

      {/* 9. What Our Client Say's - Testimonials (Lazy loaded) */}
      <LazySection minHeight="450px">
        <Suspense fallback={<div style={{ minHeight: '450px' }} />}>
          <Testimonials />
        </Suspense>
      </LazySection>

      {/* 10. Share Your Problems Form & FAQ Accordion (Lazy loaded) */}
      <LazySection minHeight="550px">
        <Suspense fallback={<div style={{ minHeight: '550px' }} />}>
          <ContactFAQ />
        </Suspense>
      </LazySection>
    </>
  );
}
