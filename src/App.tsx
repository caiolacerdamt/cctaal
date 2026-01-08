import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Intelligence from './pages/Intelligence';
import Contact from './pages/Contact';

import SolucoesEmpresariais from './pages/SolucoesEmpresariais';
import ComercioInternacional from './pages/ComercioInternacional';
import TecnologiaInovacao from './pages/TecnologiaInovacao';
import MarketIntelligence from './pages/MarketIntelligence';
import NewsPage from './pages/NewsPage';
import SingleNewsPage from './pages/SingleNewsPage';
import Chamber from './pages/Chamber';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';


import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/camara" element={<Chamber />} />
          <Route path="/privacidade" element={<PrivacyPolicyPage />} />

          <Route path="/solucoes" element={<SolucoesEmpresariais />} />
          <Route path="/comercio" element={<ComercioInternacional />} />
          <Route path="/tecnologia" element={<TecnologiaInovacao />} />
          <Route path="/market-intelligence" element={<MarketIntelligence />} />
          <Route path="/projetos" element={<Navigate to="/market-intelligence" replace />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:id" element={<SingleNewsPage />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </Router>
  );
}

export default App;
