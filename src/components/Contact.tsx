import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'framer-motion';
import { Phone, MapPin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/products';

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="contato" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Titles */}
        <motion.div
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
          id="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded-full">
            Fale com a nossa Fábrica
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight" id="id-contact-title">
            Estamos Prontos para lhe Atender
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Seja você um criador individual, pet shop, ou grande distribuidor, entre em contato diretamente pelos nossos canais oficiais de vendas da Mundo das Aves.
          </p>
        </motion.div>

        {/* Dynamic Multi-Card Grid for Contact channels */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          id="contact-main-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >

          {/* Card 1: Commercial telephone */}
          <motion.div
            variants={cardVariants}
            className="bg-stone-850 rounded-2xl p-8 border border-stone-750 shadow-xl transition-all duration-300 hover:border-emerald-500/30 flex flex-col justify-between text-left group"
          >
            <div className="space-y-4">
              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 text-emerald-400 w-fit transition-transform group-hover:scale-105">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-sans font-bold text-white">Central de Vendas (Voz)</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Fale diretamente com os nossos representantes comerciais para negociar lotes, consultar frete de sacarias e tirar dúvidas gerais por ligação.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-800 mt-6">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block mb-1">Telefone Principal</span>
              <a
                href={`tel:${companyInfo.phoneFormatted}`}
                className="text-xl font-sans font-black text-white hover:text-emerald-400 transition-colors block"
              >
                {companyInfo.phone}
              </a>
              <span className="text-[11px] text-stone-500 block mt-1">Chamada direta de fábrica</span>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp Direct Channel */}
          <motion.div
            variants={cardVariants}
            className="bg-stone-850 rounded-2xl p-8 border border-stone-750 shadow-xl transition-all duration-300 hover:border-amber-500/30 flex flex-col justify-between text-left group"
          >
            <div className="space-y-4">
              <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20 text-amber-400 w-fit transition-transform group-hover:scale-105">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-sans font-bold text-white">Suporte e Orçamentos Vapt-Vupt</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Solicite cotações imediatas das nossas linhas por mensagem rápida. Enviamos tabelas de preços completas de atacadista em PDF.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-800 mt-6">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block mb-1">WhatsApp Oficial</span>
              <a
                href={`https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(companyInfo.whatsappMessageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-sans font-black text-[#25D366] hover:text-white transition-colors block"
              >
                {companyInfo.phone}
              </a>
              <span className="text-[11px] text-zinc-500 block mt-1">Resposta rápida em horário comercial</span>
            </div>
          </motion.div>

          {/* Card 3: Operation Hours & Shipments */}
          <motion.div
            variants={cardVariants}
            className="bg-stone-850 rounded-2xl p-8 border border-stone-750 shadow-xl transition-all duration-300 lg:col-span-1 md:col-span-2 flex flex-col justify-between text-left group"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest">Horário Comercial</h4>
                    <p className="text-sm font-sans font-semibold text-stone-200 mt-0.5">Segunda a Sexta: 08:00 às 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <div>
                    <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest">Envios & Abrangência</h4>
                    <p className="text-sm font-sans font-semibold text-stone-200 mt-0.5">Despacho para todo o Brasil</p>
                  </div>
                </div>
              </div>

              <p className="text-stone-400 text-xs leading-relaxed border-t border-stone-800 pt-4">
                Origem das cargas diretamente da Paraíba. Trabalhamos com frete CIF/FOB e transportadoras conveniadas que garantem agilidade e taxas reduzidas.
              </p>
            </div>

            <div className="bg-stone-900/80 rounded-xl p-4 border border-stone-750 mt-6">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-[11px] leading-relaxed text-stone-400">
                  <strong className="text-stone-300 block mb-0.5 font-bold">Qualidade Registrada</strong>
                  Rações e misturas formuladas na mais alta pureza técnica, isentas de agrotóxicos ou resíduos industriais.
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Integrated Quick Action Button below layout */}
        <motion.div
          className="mt-16 text-center"
          id="contact-bottom-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <a
            href={`https://wa.me/${companyInfo.phoneFormatted}?text=${encodeURIComponent(companyInfo.whatsappMessageTemplate)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-850 text-white font-sans font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Chame Agora no WhatsApp e Peça Seu Catálogo</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
