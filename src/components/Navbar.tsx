import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { companyInfo } from '../data/products';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  const headerBgStyle = scrolled
    ? 'bg-stone-950/95 md:bg-emerald-950/90 md:backdrop-blur-md shadow-lg border-b border-white/10'
    : isOpen
      ? 'bg-stone-950 shadow-lg border-b border-white/10'
      : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBgStyle}`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Brand */}
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-id"
          >

            <div className="flex flex-col">
              <img src="assets/logo.png" alt="Mundo das Aves Logo" className="w-40 md:w-48 h-auto object-contain" />
            </div>
          </a> {/* ✅ </a> fechado aqui corretamente */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-menu">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-stone-200 hover:text-amber-400 font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Action */}
          <div className="hidden md:block" id="whatsapp-callout-btn">
            <a
              href={`https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(companyInfo.whatsappMessageTemplate)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/10 transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-amber-500"
            >
              <Phone className="w-4 h-4" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" id="mobile-toggle-btn-group">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-100 hover:text-amber-400 p-2 rounded-lg hover:bg-white/5 transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-stone-950 border-b border-stone-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="block px-3 py-2.5 rounded-lg text-stone-200 hover:text-amber-400 hover:bg-stone-900 font-medium text-base transition-all"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-2"
              >
                <a
                  href={`https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(companyInfo.whatsappMessageTemplate)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-stone-950 py-3 rounded-xl font-bold text-center shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Central de Vendas</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
