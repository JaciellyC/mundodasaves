import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageSquare, ShieldCheck, Sparkles, Award, Leaf } from 'lucide-react';
import { companyInfo, products } from '../data/products';
import ProductMockup from './ProductMockup';

export default function Hero() {
  const words = ['Premium', 'Nutritiva', 'Completa', 'Saudável'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToCatalog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#catalogo');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Get exact products from catalog data for the showoff
  const sacaProduct = products.find(p => p.id === 'sac-036') || products[16];
  const pouchProduct = products.find(p => p.id === 'sprem-013') || products[12];
  const bottleProduct = products.find(p => p.id === 'garr-018') || products[11];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-20 bg-stone-900 text-stone-100 overflow-hidden"
    >
      {/* Background patterns of seed particles / Nature leaf overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-950 opacity-40 bg-[radial-gradient(#2e322b_1.5px,transparent_1.5px)] bg-size-[24px_24px]" />

        {/* Soft, hand-crafted decorative warm lights for high depth */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-850/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Deep vignetting background overlay to keep look premium with clean edges */}
        <div className="absolute inset-0 bg-linear-to-tr from-stone-950 via-stone-900/95 to-emerald-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Main Hero Column (Asymmetric Left) */}
          <div className="lg:col-span-6 space-y-8 text-left" id="hero-left-col">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#05311B] border border-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-xl text-stone-100 text-xs font-sans font-bold uppercase tracking-wider"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Indústria Nordestina de Nutrição</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]"
              >
                Alimentação{' '}
                <span className="inline-grid grid-cols-1 grid-rows-1 text-left text-amber-400 min-w-36.25 sm:min-w-48.75 md:min-w-61.25 relative">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={words[index]}
                      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="col-start-1 row-start-1 inline-block"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>{' '}
                de Verdade para Seus{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-300">
                  Pássaros
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-stone-350 max-w-xl text-base sm:text-lg leading-relaxed font-sans"
              >
                Esqueça misturas genéricas de sementes cruas. Mundo das Aves oferece sementes submetidas a <strong className="text-white">triplo beneficiamento</strong> livre de resíduos, enriquecidas com óleo de coco, mel de abelha e larvas de Tenébrio reais.
              </motion.p>
            </div>

            {/* Premium action buttons with human design layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-3"
              id="hero-buttons"
            >
              <button
                onClick={handleScrollToCatalog}
                className="group relative flex items-center justify-center gap-3 bg-[#0a5c36] hover:bg-[#074428] text-white w-full sm:w-72.5 h-14 rounded-xl text-base font-extrabold shadow-lg shadow-emerald-950/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-300" />
                <span>Explorar Linhas & Catálogo</span>
              </button>

              <a
                href={`https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(companyInfo.whatsappMessageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-stone-800 hover:bg-stone-750 text-white border border-stone-700 w-full sm:w-72.5 h-14 rounded-xl text-base font-extrabold transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Falar com Faturamento</span>
              </a>
            </motion.div>

            {/* Physical Attributes Badge Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 border-t border-stone-850 pt-8 max-w-lg"
              id="hero-badges-row"
            >
              <div className="flex items-start gap-2 text-left">
                <Leaf className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white text-sm font-bold leading-none font-sans">100% Puro</span>
                  <span className="text-stone-400 text-[11px] leading-tight block mt-1">Sementes selecionadas</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-left">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white text-sm font-bold leading-none font-sans">Sem Poeira</span>
                  <span className="text-stone-400 text-[11px] leading-tight block mt-1">Beneficiamento triplo por sucção</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-left">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white text-sm font-bold leading-none font-sans">Especialista</span>
                  <span className="text-stone-400 text-[11px] leading-tight block mt-1">Fórmulas ricas com coco e tenébrios</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Asymmetric Overlapped Mockups Right Column (Studio Photography Style) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-72.5 sm:min-h-120 mt-6 lg:mt-0" id="hero-right-col">
            {/* Ambient Backlight Aura representing Studio Softbox */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)] animate-pulse pointer-events-none" />

            <div className="relative w-full max-w-lg h-70 sm:h-115 flex items-center justify-center">

              {/* Back Element: Sacaria 10Kg Comercial */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 10, rotate: 0 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 45 }}
                className="absolute z-10 -left-6 bottom-4 filter hover:brightness-110 cursor-pointer object-cover"
              >
                <div className="relative group">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-900 border border-emerald-500/30 text-emerald-400 rounded-full px-3 py-1 font-sans text-[10px] font-black uppercase tracking-widest leading-none shadow shadow-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    Saca Profissional
                  </span>
                  <ProductMockup product={sacaProduct} size="lg" />
                </div>
              </motion.div>

              {/* Center Main Element: Stand-Up Pouch 500g Super Premium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, type: 'spring', stiffness: 50 }}
                className="absolute z-30 drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] filter hover:brightness-110 cursor-pointer"
              >
                <div className="relative group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-linear-to-r from-amber-500 to-amber-600 text-stone-950 rounded-full px-4 py-1 font-sans text-xs font-black uppercase tracking-widest leading-none shadow-xl z-20 animate-bounce">
                    NOSSAS EMBALAGENS REAIS
                  </div>
                  <ProductMockup product={pouchProduct} size="lg" />
                </div>
              </motion.div>

              {/* Front Right Element: Garrafa Mineral 150g */}
              <motion.div
                initial={{ opacity: 0, x: -70, y: 30, rotate: 0 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.35, type: 'spring', stiffness: 55 }}
                className="absolute z-20 right-2 sm:-right-4 bottom-6 sm:-bottom-2 filter hover:brightness-110 cursor-pointer"
                style={{ transformOrigin: 'bottom center' }}
              >
                <div className="relative group">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stone-900 border border-amber-500/30 text-amber-400 rounded-full px-3 py-1 font-sans text-[10px] font-black uppercase tracking-widest leading-none shadow shadow-amber-950 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    Vidro/Frasco
                  </span>
                  <ProductMockup product={bottleProduct} size="lg" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section >
  );
}
