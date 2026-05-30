import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, ArrowUp, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { companyInfo } from './data/products';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-850 antialiased selection:bg-emerald-800 selection:text-white" id="app-root-wrapper">
      {/* Navbar header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10" id="app-main-sections">
        {/* 1. Hero Section with dynamic avian backdrop */}
        <Hero />

        {/* 2. About Section showing corporate statistics and CNPJ */}
        <About />

        {/* 4. Differentiators Section */}
        <Features />

        {/* 3. Products Catalog with custom dynamic filters & search */}
        <Catalog />

        {/* 5. Rich Contact with interactive Form */}
        <Contact />
      </main>

      {/* 6. Legal and copyrights Footer */}
      <Footer />

      {/* Floating Interactive Whatsapp Assist (Brazilian customer absolute favorite) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end" id="floating-actions-container">
        {/* Floating Scroll-to-top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-white/90 hover:bg-white text-stone-800 rounded-full shadow-lg border border-stone-250 transition-all transform hover:-translate-y-0.5 focus:outline-none"
            title="Voltar ao Topo"
            id="scroll-top-action-btn"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Fluttering WhatsApp Floating badge */}
        <a
          href={`https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(companyInfo.whatsappMessageTemplate)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          title="Atendimento Imediato no WhatsApp"
          id="floating-whatsapp-action-btn"
        >
          <Phone className="w-6 h-6 fill-current text-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-sans font-bold text-sm whitespace-nowrap block">
            Fale Conosco
          </span>
          <span className="absolute -top-1 -left-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </a>
      </div>
    </div>
  );
}
