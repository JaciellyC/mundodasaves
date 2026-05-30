import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Phone, Check, Info, Sparkles, AlertCircle, RefreshCw, Layers, CheckCircle2 } from 'lucide-react';
import { ProductCategory, Product } from '../types';
import { products, companyInfo } from '../data/products';
import ProductMockup from './ProductMockup';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailsProduct, setActiveDetailsProduct] = useState<Product | null>(null);

  const categories: (ProductCategory | 'Todos')[] = [
    'Todos',
    'Linha Econômica',
    'Linha Premium',
    'Linha Super Premium',
    'Linha Garrafas',
    'Linha Sibite',
    'Linha Sacaria',
  ];

  // Filter products based on active tab and search query
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchesCategory = selectedCategory === 'Todos' || prod.category === selectedCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        prod.name.toLowerCase().includes(cleanSearch) ||
        prod.code.includes(cleanSearch) ||
        prod.category.toLowerCase().includes(cleanSearch) ||
        (prod.notes && prod.notes.toLowerCase().includes(cleanSearch)) ||
        prod.weight.toLowerCase().includes(cleanSearch);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Generate WhatsApp text for a product
  const getWhatsAppLink = (product: Product) => {
    const text = `Olá! Gostaria de consultar a disponibilidade do seguinte produto do catálogo:\n\n• PRODUTO: ${product.name}\n• CÓDIGO: ${product.code}\n• PESO: ${product.weight}\n• CATEGORIA: ${product.category}\n\nPor favor, me informe o preço e condições de envio!`;
    return `https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalogo" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
          id="catalog-title-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#0a5c36] border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-widest leading-none">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fábrica de Nutrição de Alta Performance</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-none">
            Vitrine do Nosso Catálogo Oficial
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Todas as sementes comercializadas passam por um criterioso processo de triagem física. Selecione a linha abaixo para explorar detalhes, especificações e fichas técnicas de cada produto.
          </p>
        </motion.div>

        {/* Interactive Filters Bar (Tabs & Search Input) */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-200/50 border border-stone-150 mb-12 space-y-6"
          id="catalog-search-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
            {/* Search inputs */}
            <div className="relative grow max-w-lg" id="search-container">
              <Search className="absolute left-4 top-4 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar por sementes ou linha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0a5c36] focus:bg-white transition-all text-stone-850 font-sans shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-4 text-xs text-stone-400 hover:text-[#0a5c36] transition-colors font-bold font-sans"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="flex items-center gap-2.5 text-stone-600 text-sm font-sans font-medium shrink-0 lg:border-l lg:border-stone-200 lg:pl-6" id="results-counter">
              <Filter className="w-4.5 h-4.5 text-[#0a5c36]" />
              <span>Itens Disponíveis:</span>
              <strong className="text-stone-950 font-sans font-black text-base">{filteredProducts.length}</strong>
            </div>
          </div>

          {/* Categories Tabs - Customized human layout */}
          <div className="flex flex-wrap gap-2.5 items-center border-t border-stone-100 pt-6" id="category-tabs-row">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              // Calculate specific quantities
              const totalItems = cat === 'Todos'
                ? products.length
                : products.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-sans font-extrabold px-4.5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 focus:outline-none ${isActive
                    ? 'bg-[#0a5c36] text-amber-300 shadow-md shadow-emerald-900/10 scale-102 border border-[#0a5c36]'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80 hover:border-stone-300'
                    }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-black ${isActive ? 'bg-[#05311B] text-white' : 'bg-stone-200 text-stone-600'
                    }`}>
                    {totalItems}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Catalog Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8"
              id="product-cards-grid"
            >
              {filteredProducts.map((p) => {
                const isSpecial = p.category === 'Linha Super Premium' || p.category === 'Linha Premium';
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    key={p.id}
                    className="group bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 p-3 sm:p-5 shadow-sm hover:shadow-2xl hover:border-[#0a5c36]/20 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Background glow highlights */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-amber-500/5 to-transparent rounded-full pointer-events-none" />

                    <div>
                      {/* Product Realistic Mockup Showcase Container */}
                      <div className="relative w-full h-44 sm:h-80 bg-linear-to-b from-stone-50 to-stone-100/50 rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-4 overflow-hidden border border-stone-150 transition-colors duration-300 group-hover:from-emerald-50/20 group-hover:to-emerald-50/10">

                        <div className="relative z-10 w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                          <ProductMockup product={p} size="md" />
                        </div>

                        {p.notes && (
                          <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 flex items-center gap-1 bg-linear-to-r from-amber-400 to-amber-500 text-stone-950 font-sans text-[7px] sm:text-[9px] font-black px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-sm z-20">
                            <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" />
                            <span>{p.notes.toUpperCase()}</span>
                          </div>
                        )}

                        {/* Bottom Weight Sticker floating inside Container */}
                        <div className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 bg-stone-900 text-white font-sans text-[9px] sm:text-xs font-black px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow z-20">
                          {p.weight}
                        </div>
                      </div>

                      {/* Product Info Block */}
                      <div className="mt-3 sm:mt-5 space-y-1.5 sm:space-y-2 text-left">
                        <span className="text-[8px] sm:text-[10px] font-sans font-bold tracking-widest text-[#0a5c36] uppercase bg-emerald-50 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                          {p.category}
                        </span>

                        <h3 className="font-sans font-black text-stone-900 text-xs sm:text-base md:text-lg leading-tight pt-1 min-h-[2.2rem] sm:min-h-12 group-hover:text-[#0a5c36] transition-colors">
                          {p.name}
                        </h3>

                        <p className="text-stone-500 text-[11px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 min-h-[1.8rem] sm:min-h-[3.8rem] pt-0.5">
                          {p.description}
                        </p>
                      </div>
                    </div>

                    {/* Integrated Sophisticated Action Buttons Container */}
                    <div className="mt-4 sm:mt-8 space-y-1.5 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-stone-100">

                      {/* Premium Redesigned Ficha Completa Button (No standard style, fully customized) */}
                      <button
                        onClick={() => setActiveDetailsProduct(p)}
                        className="w-full flex items-center justify-center gap-1 sm:gap-2 bg-stone-50 hover:bg-stone-900 hover:text-white text-stone-700 py-2 sm:py-3 rounded-xl text-[10px] sm:text-xs font-extrabold transition-all duration-300 border border-stone-200/80 hover:border-stone-900 focus:outline-none"
                      >
                        <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>Ficha Técnica</span>
                      </button>

                      {/* Elegant Whatsapp Call to Action */}
                      <a
                        href={getWhatsAppLink(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 sm:gap-2 bg-linear-to-r from-[#0a5c36] to-[#0d7345] hover:from-[#0d7345] hover:to-[#084f2e] text-white py-2 sm:py-3 rounded-xl text-[10px] sm:text-xs font-black transition-all duration-300 shadow-md shadow-emerald-950/10 hover:shadow-lg focus:outline-none"
                      >
                        <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-white/90" />
                        <span>Encomendar</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Elegant Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-3xl p-16 border border-stone-200 shadow-xl shadow-stone-100 text-center max-w-lg mx-auto space-y-4"
              id="empty-state-results"
            >
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mx-auto border border-amber-200/85">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-bold text-xl text-stone-850">Nenhum produto encontrado</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                Não encontramos resultados para sua busca por <strong>"{searchQuery}"</strong> nesta categoria. Experimente limpar os termos.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todos');
                }}
                className="inline-flex items-center gap-2 bg-stone-900 text-amber-400 hover:bg-[#0a5c36] px-6 py-3 rounded-xl text-xs font-extrabold shadow-md transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restaurar Todos os Produtos</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Product Modal - Ultra Premium Studio View */}
        <AnimatePresence>
          {activeDetailsProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveDetailsProduct(null)}
                className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative bg-white rounded-4xl max-w-4xl w-full p-6 sm:p-8 md:p-10 shadow-2xl border border-stone-200 overflow-y-auto max-h-[90vh] sm:max-h-none sm:overflow-visible z-10 text-left"
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setActiveDetailsProduct(null)}
                  className="absolute top-5 right-5 text-stone-400 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 w-10 h-10 rounded-full transition-all flex items-center justify-center focus:outline-none z-30"
                  aria-label="Clean close icon"
                >
                  ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch pt-2">

                  {/* Left Column: Huge 3D Mockup Studio Frame */}
                  <div className="md:col-span-5 bg-linear-to-b from-stone-50 to-stone-100/60 rounded-3xl p-6 border border-stone-200/80 flex flex-col items-center justify-center min-h-75 sm:min-h-95 relative">
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[#05311B] text-amber-300 font-sans text-[10px] font-black px-3 py-1.5 rounded-lg border border-emerald-800/40 uppercase tracking-widest shadow-sm">
                      <Sparkles className="w-3 h-3 fill-current" />
                      <span>{activeDetailsProduct.category}</span>
                    </div>

                    <div className="w-48 h-72 flex items-center justify-center">
                      <ProductMockup product={activeDetailsProduct} size="lg" />
                    </div>

                    {/* Quality indicators inside the studio frame */}
                    <div className="mt-4 text-center">
                      <span className="font-mono text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Padrão Ouro Selecionado</span>
                    </div>
                  </div>

                  {/* Right Column: Detailed technical facts and compositions */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Meta and Category block */}
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-emerald-50 text-[#0a5c36] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border border-emerald-150">
                          QUALIDADE COMPROVADA
                        </span>
                        {activeDetailsProduct.notes && (
                          <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border border-amber-150">
                            {activeDetailsProduct.notes}
                          </span>
                        )}
                      </div>

                      {/* Main Title */}
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-stone-900 mt-3 leading-tight tracking-tight">
                        {activeDetailsProduct.name}
                      </h3>

                      {/* Technical Description with great spacing */}
                      <div className="mt-5 text-stone-600 text-sm leading-relaxed space-y-4">
                        <p>{activeDetailsProduct.description}</p>

                        <p className="text-xs text-stone-500 italic pb-2 border-b border-stone-100">
                          *Alimento natural enriquecido com minerais e elementos vitais, isento de grãos estragados, mofos ou qualquer tipo de agrotóxico industrial.
                        </p>
                      </div>

                      {/* Technical Specification Table */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-150">
                          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Peso Comercial</span>
                          <strong className="text-stone-900 font-sans font-black text-lg block mt-0.5">{activeDetailsProduct.weight}</strong>
                          <span className="text-[10px] text-stone-500">Pronto para expedição</span>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-150">
                          <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Procedência</span>
                          <strong className="text-stone-900 font-sans font-black text-lg block mt-0.5">Paraíba (NE)</strong>
                          <span className="text-[10px] text-stone-500">Desenvolvido em fábrica</span>
                        </div>
                      </div>

                      {/* Key features of raw bird feeding */}
                      <div className="mt-6 space-y-3 bg-emerald-50/20 p-4.5 rounded-2xl border border-emerald-600/5">
                        <h4 className="font-sans font-extrabold text-stone-900 text-xs uppercase tracking-wider flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0a5c36]" />
                          <span>Especificações Avançadas</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-500">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>Produção Diária</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>Sementes Selecionadas</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>Triplo Beneficiamento</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>Controle de Qualidade</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Integrated CTA Button Footer of Modal */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-stone-100">
                      <button
                        onClick={() => setActiveDetailsProduct(null)}
                        className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-700 font-sans font-extrabold px-6 py-4 rounded-xl text-xs transition-all focus:outline-none"
                      >
                        Fechar Visualização
                      </button>

                      <a
                        href={getWhatsAppLink(activeDetailsProduct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:grow flex items-center justify-center gap-2.5 bg-[#0a5c36] hover:bg-[#074428] text-white font-sans font-black px-6 py-4 rounded-xl text-sm shadow-xl shadow-emerald-900/10 transition-all focus:outline-none"
                      >
                        <Phone className="w-4 h-4 fill-current text-white/90" />
                        <span>Fazer Cotação Imediata</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
