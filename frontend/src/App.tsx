import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Technologies from './pages/Technologies';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import ContactFormSection from './components/ContactFormSection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 relative">
        <Header />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
        <ContactFormSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
