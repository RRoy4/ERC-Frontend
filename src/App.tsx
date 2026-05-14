// App.tsx
import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import XLR8Page from './components/XLR8Page.tsx';
import Events from './components/Events';
import Team from './components/Team';
import Resources from './components/Resources';
import Contact from './components/Contact';
import LegacyPage from './components/LegacyPage';
import BlogViewer from './components/BlogViewer.tsx';
import CertificatePortal from './components/CertificatePortal.tsx';
// import Winteros from './components/Winteros';
// import Week0 from './components/week0';
// import Week1 from './components/week1';
// import Week2Part1 from './components/week2p1.jsx';
// import Week2Part2 from './components/week2p2.jsx';
// import Week3Part1 from './components/week3p1.jsx';
// import Week3Part2 from './components/week3p2.jsx';
// import Week4 from './components/week4.jsx';
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
            <Route path="/xlr8" element={<XLR8Page />} />
            {/* <Route path="/winteROS" element={<Winteros />} /> */}

            {/* NEW ROUTE */}
            {/* <Route path="/winteros" element={<Winteros />} />
            <Route path="/week0" element={<Week0 />} />
            <Route path="/week1" element={<Week1 />} />
            <Route path="/week2p1" element={<Week2Part1 />} />
            <Route path="/week2p2" element={<Week2Part2 />} />
            <Route path="/week3p1" element={<Week3Part1 />} />
            <Route path="/week3p2" element={<Week3Part2 />} />
            <Route path="/week4" element={<Week4 />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
