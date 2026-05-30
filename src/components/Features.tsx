import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'framer-motion';
import { Calendar, Award, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-[#0a5c36]" />,
      title: 'Produção Diária',
      description: 'Produzimos diariamente para que suas aves recebam sempre alimentos frescos e de alta qualidade. Nossa rotina de fabricação contínua reduz o tempo de armazenamento e garante que sementes e misturas mantenham suas propriedades nutricionais, sabor e aparência.',
      tag: 'FRESCOR ATIVO',
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: 'Triplo Beneficiamento',
      description: 'Todas as sementes passam por um avançado processo de triplo beneficiamento, reduzindo impurezas, poeira, cascas soltas e resíduos indesejados. O resultado é uma mistura mais limpa, uniforme e de maior qualidade.',
      tag: 'PUREZA SELECIONADA',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      title: 'Fórmulas Exclusivas para Alto Desempenho',
      description: 'Desenvolvemos misturas especiais enriquecidas com ingredientes selecionados, como óleo de coco, mel, aminoácidos e proteínas de alta digestibilidade, proporcionando suporte nutricional completo para diferentes fases da vida das aves.',
      tag: 'NUTRIÇÃO DIFERENCIADA',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: 'Saúde e Bem-Estar',
      description: 'Nossas formulações são desenvolvidas para auxiliar na manutenção da saúde, vitalidade, plumagem e desempenho das aves, sempre com ingredientes cuidadosamente selecionados e balanceados.',
      tag: 'SAÚDE INTEGRAL',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="diferenciais" className="py-24 bg-white border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bento Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-lg uppercase">
              REPUTAÇÃO CONSOLIDADA
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-tight leading-none">
              Excelência em Cada Etapa da Produção
            </h2>
          </div>
          <div className="lg:col-span-5 text-left">
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              Nossa missão é oferecer alimentos de alto padrão para aves ornamentais, silvestres e exóticas. Com rigorosos processos de seleção e controle de qualidade, entregamos aos criadores e lojistas produtos desenvolvidos para promover nutrição, desempenho e bem-estar.
            </p>
          </div>
        </motion.div>

        {/* Custom modern design cards with organic spacing & visual depth */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="features-bento-system"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-stone-50 hover:bg-stone-100/70 p-8 sm:p-10 rounded-4xl border border-stone-200/80 transition-all duration-500 flex flex-col justify-between text-left group hover:border-[#0a5c36]/20 shadow-sm"
              style={{ contentVisibility: 'auto' }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                    {feat.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-stone-400 bg-stone-200/50 px-3 py-1 rounded-full uppercase tracking-wider">
                    {feat.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-black text-xl text-stone-900">{feat.title}</h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{feat.description}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200/60 flex items-center gap-2 text-stone-400 text-xs font-semibold">
                <CheckCircle className="w-4.5 h-4.5 text-[#0a5c36]" />
                <span>Padrão de Qualidade Assegurado Mundo das Aves</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
