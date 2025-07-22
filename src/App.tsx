import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Events from './components/Events';
import Team from './components/Team';
import Resources from './components/Resources';
import Contact from './components/Contact';
import LegacyPage from './components/LegacyPage';
import BlogViewer  from './components/BlogViewer.tsx';
import CertificatePortal from './components/CertificatePortal.tsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogViewer />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legacy" element={<LegacyPage />} />
            <Route path="/certificates" element={<CertificatePortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
