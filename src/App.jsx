import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import TimelinePage from './pages/TimelinePage';
import BiasControl from './pages/BiasControl';
import Results from './pages/Results';
import Architectures from './pages/Architectures';
import Reproducibility from './pages/Reproducibility';
import DocsPortal from './pages/DocsPortal';
import Credits from './pages/Credits';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/bias-control" element={<BiasControl />} />
          <Route path="/results" element={<Results />} />
          <Route path="/architectures" element={<Architectures />} />
          <Route path="/reproducibility" element={<Reproducibility />} />
          <Route path="/docs" element={<DocsPortal />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
