import React from 'react';
import { motion } from 'motion/react';
import { Shield, Phone, FileText, CheckCircle2, Factory, Warehouse } from 'lucide-react';
import { companyInfo } from '../data/products';

export default function About() {
  return (
    <section id="sobre-nos" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative organic blur rings */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#0a5c36]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Column 1: Presenting the Brand (Human & Authentic) */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            id="about-brand-description"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-[#05311B] border border-emerald-500/20 text-stone-100 px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider">
              <Factory className="w-4 h-4 text-emerald-400" />
              <span>Nossa Fábrica & Alma</span>
            </div>

            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              Inovando na Nutrição, <br />
              <span className="text-amber-400">Preservando o Canto</span>
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans">
              No <strong>Mundo das Aves</strong>, acreditamos que a saúde, a beleza da plumagem e o desempenho das aves começam com uma alimentação de excelência. Por isso, desenvolvemos sementes selecionadas e formulações exclusivas destinadas a criadores, revendedores e apaixonados por aves que valorizam qualidade e confiança.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Nosso processo industrial conta com modernas etapas de seleção e triplo beneficiamento pneumático, que removem impurezas, poeira, cascas soltas e resíduos indesejados. O resultado são sementes mais <strong> limpas, uniformes e prontas </strong>para oferecer o melhor em nutrição e bem-estar.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Mais do que fabricar alimentos, cultivamos uma relação de confiança com quem dedica cuidado e paixão às aves. Mundo das Aves: qualidade que você vê nas sementes e seus pássaros sentem todos os dias.
            </p>

            {/* List of values with beautiful border accents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans font-bold text-stone-200 text-sm">Embalagens Seladas Zip Lock</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans font-bold text-stone-200 text-sm">Responsabilidade Sanitária</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Legal Corporate Details Panel (Fulfills exact request points) */}
          <motion.div
            className="lg:col-span-5"
            id="about-brand-corporative-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="bg-stone-850 rounded-3xl p-8 border border-stone-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0a5c36] to-amber-500" />

              <div className="flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-amber-400" />
                <h3 className="font-sans font-black text-lg text-white">Consolidação Corporativa</h3>
              </div>

              <div className="space-y-6 pt-2">
                {/* CNPJ Block */}
                <div className="flex items-start gap-4 text-left">
                  <div className="bg-[#05311B] p-3 rounded-2xl border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-stone-500 uppercase tracking-widest leading-none">Cadastro Nacional de Fabricante</h4>
                    <p className="text-base sm:text-lg font-sans font-black text-white mt-1.5">{companyInfo.cnpj}</p>
                    <p className="text-[11px] text-stone-400 mt-1">Situação: Ativa • Indústria de Mistura e Envasamento de Grãos</p>
                  </div>
                </div>

                {/* Telephone Block */}
                <div className="flex items-start gap-4 text-left">
                  <div className="bg-amber-500/10 p-3 rounded-2xl border border-amber-500/20 text-amber-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-stone-500 uppercase tracking-widest leading-none">Canal Direto de Vendas</h4>
                    <p className="text-base sm:text-lg font-sans font-black text-white mt-1.5">{companyInfo.phone}</p>
                    <p className="text-[11px] text-stone-400 mt-1">Negociação de sacarias, cotação de fretes e pedidos corporativos</p>
                  </div>
                </div>
              </div>

              {/* Decorative Trust banner */}
              <div className="bg-[#052d19] rounded-2xl p-5 border border-emerald-600/30 flex items-start gap-4 text-left mt-4">
                <Shield className="w-10 h-10 flex-shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <span className="font-sans font-black text-xs text-white uppercase tracking-wider block">Fator Isenção de Registro</span>
                  <span className="text-stone-300 text-[11px] block mt-1 leading-relaxed">
                    Alimentos de uso tradicional de fabricação isenta de registro no Ministério do Trabalho e Agricultura conforme legislação MAPA vigente Art. 11.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
