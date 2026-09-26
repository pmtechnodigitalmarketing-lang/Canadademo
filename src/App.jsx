import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Topbar & Sticky Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Us */}
            <Route path="/about-us" element={<About />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />

            {/* Individual Exact Services */}
            <Route path="/relationship-problems" element={<ServiceDetail />} />
            <Route path="/psychic-reading" element={<ServiceDetail />} />
            <Route path="/spiritual-cleansing" element={<ServiceDetail />} />
            <Route path="/vashikaran-specialist" element={<ServiceDetail />} />
            <Route path="/get-ex-love-back" element={<ServiceDetail />} />
            <Route path="/black-magic-removal" element={<ServiceDetail />} />
            <Route path="/negative-energy-removal" element={<ServiceDetail />} />
            <Route path="/jealousy-and-curse-removal" element={<ServiceDetail />} />

            {/* Services dedicated page & individual details */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />

            {/* Locations Directory & Individual Cities */}
            <Route path="/locations" element={<Locations />} />
            <Route path="/location" element={<Navigate to="/locations" replace />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />

            {/* Contact & Appointment */}
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

            {/* Wildcard redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Premium Footer */}
        <Footer />

        {/* Floating Call, WhatsApp & Scroll-to-Top Triggers */}
        <FloatingButtons />

      </div>
    </BrowserRouter>
  );
}

export default App;
