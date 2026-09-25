import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GowthamNavbar from './components/GowthamNavbar';
import GowthamFooter from './components/GowthamFooter';
import GowthamFloatingButtons from './components/GowthamFloatingButtons';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import GowthamAboutPage from './pages/GowthamAboutPage';
import Services from './pages/Services';
import GowthamServiceDetailPage from './pages/GowthamServiceDetailPage';
import GowthamContactPage from './pages/GowthamContactPage';
import GowthamAppointmentPage from './pages/GowthamAppointmentPage';
import GowthamLocationDetailPage from './pages/GowthamLocationDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Exact Pandith Gowtham Topbar & Sticky Header */}
        <GowthamNavbar />

        {/* Dynamic Route Content */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Us */}
            <Route path="/about-us" element={<GowthamAboutPage />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />

            {/* Individual Exact Services from pandithgowtham.com */}
            <Route path="/relationship-problems" element={<GowthamServiceDetailPage />} />
            <Route path="/psychic-reading" element={<GowthamServiceDetailPage />} />
            <Route path="/spiritual-cleansing" element={<GowthamServiceDetailPage />} />
            <Route path="/vashikaran-specialist" element={<GowthamServiceDetailPage />} />
            <Route path="/get-ex-love-back" element={<GowthamServiceDetailPage />} />
            <Route path="/black-magic-removal" element={<GowthamServiceDetailPage />} />
            <Route path="/negative-energy-removal" element={<GowthamServiceDetailPage />} />
            <Route path="/jealousy-and-curse-removal" element={<GowthamServiceDetailPage />} />

            {/* Services dedicated page & individual details */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<GowthamServiceDetailPage />} />

            {/* Locations (Edmonton & Calgary sub-routes) */}
            <Route path="/locations/:slug" element={<GowthamLocationDetailPage />} />
            <Route path="/locations" element={<GowthamLocationDetailPage />} />

            {/* Contact & Appointment */}
            <Route path="/contact-us" element={<GowthamContactPage />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/book-an-appointment" element={<GowthamAppointmentPage />} />

            {/* Wildcard redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Exact Pandith Gowtham Footer */}
        <GowthamFooter />

        {/* Floating Call, WhatsApp & Scroll-to-Top Triggers */}
        <GowthamFloatingButtons />

      </div>
    </BrowserRouter>
  );
}

export default App;
