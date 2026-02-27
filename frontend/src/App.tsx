import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurPhilosophy from './pages/OurPhilosophy';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Technologies from './pages/Technologies';
import TechCategoryPage from './pages/TechCategoryPage';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import ContactFormSection from './components/ContactFormSection';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import SolutionDetail from './pages/SolutionDetail';
import IndustryDetail from './pages/IndustryDetail';

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
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/technologies/:slug" element={<TechCategoryPage />} />
          <Route path="/our-philosophy" element={<OurPhilosophy />} />
          {/* Insights sub-pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <ContactFormSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
