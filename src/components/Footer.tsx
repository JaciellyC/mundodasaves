import React from 'react';
import {
  Award,
  Instagram,
} from 'lucide-react';
import { companyInfo } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
  };

  return (
    <footer className="bg-[#0a0a0c] text-stone-400 pt-16 pb-12 relative overflow-hidden" id="footer-container">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Top border line */}
        <div className="border-t border-stone-900/60 mb-12" />

        {/* 1. Centered Brand Logo */}
        <div className="flex flex-col items-center justify-center mb-8" id="footer-brand-section">
          <a
            href="#inicio"
            onClick={handleScrollToTop}
            className="flex items-center gap-3 focus:outline-none group"
          >
            <div className="w-9 h-9 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center p-1.5 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-stone-950 shadow-sm">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-emerald-400 group-hover:text-emerald-355 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
              >
                <path
                  d="M20,80 C30,75 50,55 55,45 C60,35 65,22 80,18 C77,30 72,42 62,50 C52,58 35,70 20,80 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle cx="28" cy="72" r="5" fill="#f59e0b" />
              </svg>
            </div>
            <img
              src="/images/logo.png"
              alt="Mundo das Aves"
              className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* 2. Centered horizontal list of links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10" id="footer-links-menu">
          {[
            { label: 'Início', href: '#inicio', isScroll: true },
            { label: 'Sobre Nós', href: '#sobre-nos', isScroll: true },
            { label: 'Produtos', href: '#catalogo', isScroll: true },
            { label: 'Diferenciais', href: '#diferenciais', isScroll: true },
            { label: 'Contato', href: '#contato', isScroll: true },
            { label: 'Termos', href: '#', isScroll: false },
            { label: 'Privacidade', href: '#', isScroll: false },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => item.isScroll ? handleScrollTo(e, item.href) : undefined}
              className="font-sans text-xs sm:text-sm font-medium text-stone-400 hover:text-white transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Dotted/Dashed Break Separator */}
        <div className="border-t border-dashed border-stone-800/80 my-8" />

        {/* Footer Bottom Meta Panel */}
        <div className="flex flex-col items-center justify-center gap-6" id="footer-bottom-panel">

          {/* Copyright and corporate data */}
          <div className="flex flex-col items-center gap-1.5 text-center text-xs text-stone-500">
            <p className="font-sans text-stone-400">
              © {currentYear} Mundo das Aves LLABC. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-stone-600 font-mono">
              <span>CNPJ {companyInfo.cnpj}</span>
              <span className="hidden sm:inline text-stone-800">•</span>
              <span>Contato: {companyInfo.phone}</span>
              <span className="hidden sm:inline text-stone-800">•</span>
              <span className="flex items-center gap-1">
                <Award className="w-3 h-3 text-emerald-600" /> Isento de reg. MAPA
              </span>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-4 text-stone-550" id="footer-social-icons">
            <a
              href="https://www.instagram.com/mundodasaves.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-stone-450 hover:text-white hover:bg-stone-900 rounded-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
