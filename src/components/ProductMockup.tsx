import React from 'react';
import { Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductMockupProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export default function ProductMockup({ product, size = 'md' }: ProductMockupProps) {
  // Determine gradient color mapping based on line category
  const getLineDetails = () => {
    switch (product.category) {
      case 'Linha Super Premium':
        return {
          lineLabel: 'SUPER PREMIUM',
          badgeBg: 'bg-indigo-650 hover:bg-indigo-700 text-amber-300 border-indigo-500/40',
          baseColor: '#6366f1', // Indigo
          goldAccent: true,
          sealLabel: 'Fórmula FERT-VIT',
        };
      case 'Linha Premium':
        return {
          lineLabel: 'LINHA PREMIUM',
          badgeBg: 'bg-teal-650 hover:bg-teal-700 text-stone-100 border-teal-500/40',
          baseColor: '#0d9488', // Teal
          goldAccent: true,
          sealLabel: 'Com Óleo de Coco',
        };
      case 'Linha Sibite':
        return {
          lineLabel: 'LINHA SIBITE',
          badgeBg: 'bg-amber-500 hover:bg-amber-600 text-stone-950 border-amber-400/40',
          baseColor: '#eab308', // Amber/Yellow
          goldAccent: false,
          sealLabel: 'Alta Palatabilidade',
        };
      case 'Linha Garrafas':
        return {
          lineLabel: 'CONSERVA EMBALADA',
          badgeBg: 'bg-stone-800 text-amber-400 border-stone-700/60',
          baseColor: '#d97706', // Brownish Amber
          goldAccent: false,
          sealLabel: 'Pureza Vedada',
        };
      case 'Linha Sacaria':
        return {
          lineLabel: 'SACARIA CRIADOR',
          badgeBg: 'bg-emerald-900 text-amber-300 border-emerald-700/50',
          baseColor: '#064e3b', // Dark Emerald
          goldAccent: true,
          sealLabel: 'Triplo Beneficiado',
        };
      case 'Linha Econômica':
      default:
        return {
          lineLabel: 'LINHA ECONÔMICA',
          badgeBg: 'bg-emerald-700 text-stone-100 border-emerald-600/40',
          baseColor: '#15803d', // Green
          goldAccent: false,
          sealLabel: '100% Sementes Limpas',
        };
    }
  };

  const lineInfo = getLineDetails();

  // Helper for bird color/details in illustration logo
  const getBirdColors = () => {
    switch (product.iconType) {
      case 'bluebird':
        return { birdBody: '#2563eb', birdBack: '#1d4ed8', birdHead: '#3b82f6', birdName: 'AZULÃO' };
      case 'canario':
        return { birdBody: '#eab308', birdBack: '#ca8a04', birdHead: '#facc15', birdName: 'CANÁRIO' };
      case 'galo':
        return { birdBody: '#ef4444', birdBack: '#7f1d1d', birdHead: '#f87171', birdName: 'CAMPINA' };
      case 'papagaio':
        return { birdBody: '#16a34a', birdBack: '#15803d', birdHead: '#4ade80', birdName: 'PAPAGAIO' };
      case 'coleiro':
        return { birdBody: '#27272a', birdBack: '#18181b', birdHead: '#52525b', birdName: 'COLEIRO' };
      case 'sibite':
        return { birdBody: '#eab308', birdBack: '#15803d', birdHead: '#eab308', birdName: 'SIBITE / CAMBITO' };
      default:
        return { birdBody: '#059669', birdBack: '#047857', birdHead: '#34d399', birdName: 'AVES' };
    }
  };

  const bird = getBirdColors();

  // CSS height and sizes
  const dims = {
    sm: { container: 'h-40 w-28 sm:h-64 sm:w-44', scale: 'scale-75 sm:scale-75' },
    md: { container: 'h-40 w-28 sm:h-80 sm:w-56', scale: 'scale-90 sm:scale-100' },
    lg: { container: 'h-64 w-44 sm:h-[360px] sm:w-64', scale: 'scale-90 sm:scale-105' },
    hero: { container: 'h-72 w-52 sm:h-[440px] sm:w-80', scale: 'scale-95 sm:scale-110 sm:scale-120' },
  }[size];

  // RENDER STAND-UP POUCH (For 500g Sacks - Econômica, Premium, Super Premium)
  const renderPouchMockup = () => {
    return (
      <svg
        viewBox="0 0 240 340"
        className="w-full h-full drop-shadow-[0_25px_30px_rgba(0,0,0,0.65)] hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)] transition-all duration-500 filter"
      >
        <defs>
          {/* Pouch Metal Foil Gradients */}
          <linearGradient id="foil-body" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#121212" />
            <stop offset="10%" stopColor="#2a2a2a" />
            <stop offset="30%" stopColor="#1e1e1e" />
            <stop offset="50%" stopColor="#3d3d3d" />
            <stop offset="70%" stopColor="#1a1a1a" />
            <stop offset="90%" stopColor="#2e2e2e" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>

          <linearGradient id="brand-header-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="50%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>

          <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>

          <linearGradient id="highlight-reflection" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.45" />
            <stop offset="20%" stopColor="white" stopOpacity="0.1" />
            <stop offset="80%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.4" />
          </linearGradient>

          {/* Seed pattern background */}
          <pattern id="seed-pattern" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <ellipse cx="4" cy="4" rx="3" ry="1.5" fill="#facc15" opacity="0.3" />
            <ellipse cx="12" cy="12" rx="2" ry="1" fill="#ea580c" opacity="0.25" />
            <circle cx="8" cy="8" r="1.5" fill="#ca8a04" opacity="0.4" />
          </pattern>

          {/* Soft back shadow inside SVG */}
          <radialGradient id="shadow-floor" cx="50%" cy="95%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.6)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* 3D Floor Shadow */}
        <ellipse cx="120" cy="328" rx="100" ry="12" fill="url(#shadow-floor)" />

        {/* --- MAIN POUCH SHAPE --- */}
        {/* Left ear sealing, Right ear sealing folds of standup format */}
        <path
          d="M 35 40 
             L 205 40 
             Q 213 40, 215 48 
             L 211 260 
             Q 214 290, 185 315 
             L 120 325 
             L 55 315 
             Q 26 290, 29 260 
             L 25 48 
             Q 27 40, 35 40 Z"
          fill="url(#foil-body)"
          stroke="#333"
          strokeWidth="1"
        />

        {/* Pouch Bottom gusset panel lines (shows thickness of package floor) */}
        <path
          d="M 31 270 
             Q 120 310, 209 270 
             Q 190 315, 120 325 
             Q 50 315, 31 270 Z"
          fill="#1c1c1c"
          opacity="0.9"
        />

        {/* Left & Right Heat-Sealed Textured Borders */}
        <path d="M 25 40 L 33 40 L 37 312 L 29 308 Z" fill="#262626" opacity="0.4" stroke="#444" strokeWidth="0.5" />
        <path d="M 215 40 L 207 40 L 203 312 L 211 308 Z" fill="#262626" opacity="0.4" stroke="#444" strokeWidth="0.5" />

        {/* Top Zip Lock Bar with Heat Seal Rows */}
        <rect x="33" y="44" width="174" height="20" fill="#222" rx="2" stroke="#444" strokeWidth="0.5" />
        {/* Zip Lock line ridges */}
        <line x1="33" y1="49" x2="207" y2="49" stroke="#555" strokeWidth="1" />
        <line x1="33" y1="53" x2="207" y2="53" stroke="url(#gold-foil)" strokeWidth="1" opacity={lineInfo.goldAccent ? 1 : 0.4} />
        <line x1="33" y1="58" x2="207" y2="58" stroke="#555" strokeWidth="1" />
        {/* Tear Notches on left/right */}
        <polygon points="33,52 38,54 33,56" fill="#111" />
        <polygon points="207,52 202,54 207,56" fill="#111" />

        {/* --- FRONT RÓTULO (LABEL) DESIGN --- */}
        {/* Elegant Rótulo Backing */}
        <path
          d="M 35 64 
             L 205 64 
             L 201 308 
             Q 120 326, 39 308 Z"
          fill="#072213"
        />

        {/* Seed pattern overlay on label background */}
        <path
          d="M 35 64 L 205 64 L 201 308 Q 120 326, 39 308 Z"
          fill="url(#seed-pattern)"
          opacity="1"
        />

        {/* Dynamic color ribbon (indicates the brand line) */}
        <path
          d="M 35 64 
             L 205 64 
             L 203 118 
             C 160 110, 80 125, 37 114 Z"
          fill={product.category === 'Linha Super Premium' ? '#4f46e5' : product.category === 'Linha Premium' ? '#0f766e' : product.category === 'Linha Sibite' ? '#d97706' : '#15803d'}
        />

        {/* Glossy top highlight on ribbon */}
        <path d="M 35 64 L 205 64 L 203 76 Q 120 82, 35 72 Z" fill="white" opacity="0.08" />

        {/* BRAND EMBLEM (Mundo das Aves Logotype inside bag) */}
        <rect x="50" y="74" width="140" height="34" rx="4" fill="rgba(0, 0, 0, 0.45)" stroke="url(#gold-foil)" strokeWidth="1.2" />
        <text x="120" y="87" fill="#fff" fontFamily="system-ui" fontSize="8" fontWeight="bold" letterSpacing="2.5" textAnchor="middle">
          MUNDO DAS AVES
        </text>
        <line x1="65" y1="91" x2="175" y2="91" stroke="url(#gold-foil)" strokeWidth="1" />
        <text x="120" y="101" fill="url(#gold-foil)" fontFamily="system-ui" fontSize="8.5" fontWeight="black" letterSpacing="1" textAnchor="middle">
          NUTRIR COM AMOR
        </text>

        {/* CENTRAL BRAND CIRCLE WITH THE ILLUSTRATIVE BIRD HERO */}
        <circle cx="120" cy="182" r="54" fill="#031a0e" stroke="url(#gold-foil)" strokeWidth={lineInfo.goldAccent ? 2.5 : 1.2} />
        {/* Inner circle gradient */}
        <circle cx="120" cy="182" r="50" fill="rgba(8, 47, 73, 0.2)" />

        {/* Vector representation of bird */}
        <g transform="translate(80, 142)">
          {/* Wings and belly */}
          <path
            d="M 12 55 C 22 40, 38 35, 48 30 C 58 25, 70 12, 75 10 C 68 22, 60 35, 48 45 C 38 52, 22 55, 12 55 Z"
            fill={bird.birdBody}
          />
          {/* Tail plumes */}
          <path
            d="M 12 55 C 18 60, 28 66, 38 68 C 30 62, 22 58, 15 48"
            stroke={bird.birdBack}
            strokeWidth="2"
            fill="none"
          />
          {/* Bird Head */}
          <path
            d="M 48 30 C 56 26, 68 28, 72 20 C 70 30, 60 38, 52 40 Z"
            fill={bird.birdHead}
          />
          {/* Crest if galo de campina */}
          {product.iconType === 'galo' && (
            <path d="M 68 22 C 72 18, 76 10, 79 8 C 76 16, 80 18, 82 22" fill="#ef4444" />
          )}
          {/* Little sparkler eye of bird */}
          <circle cx="62" cy="24" r="2.5" fill="#fff" />
          <circle cx="62" cy="24" r="0.8" fill="#1e293b" />
          {/* Delicate golden sharp beak */}
          <polygon points="72,21 78,25 72,27" fill="#fbbf24" />
        </g>

        {/* Floating Bird Type Tag banner */}
        <rect x="75" y="222" width="90" height="15" rx="3" fill="#041d0f" stroke="url(#gold-foil)" strokeWidth="0.8" />
        <text x="120" y="232" fill="#fff" fontFamily="monospace" fontSize="8" fontWeight="bold" letterSpacing="1" textAnchor="middle">
          {bird.birdName}
        </text>

        {/* MAIN PRODUCT NAME (ON BRAND STRIP) */}
        <rect x="42" y="246" width="156" height="34" rx="4" fill="rgba(255, 255, 255, 0.95)" stroke="#e5e7eb" strokeWidth="0.5" />
        {/* Title Wrap for name */}
        <text x="120" y="258" fill="#0f291c" fontFamily="system-ui" fontSize="8.5" fontWeight="bold" textAnchor="middle">
          {product.name.length > 28 ? product.name.slice(0, 28) + '...' : product.name}
        </text>
        <text x="120" y="268" fill="#059669" fontFamily="system-ui" fontSize="7" fontWeight="bold" letterSpacing="1.2" textAnchor="middle">
          {lineInfo.lineLabel}
        </text>
        <text x="120" y="276" fill="#6b7280" fontFamily="system-ui" fontSize="6.5" textAnchor="middle">
          Nutrição Completa Tripla Limpeza
        </text>

        {/* BOTTOM INFORMATIONS (Codes, Weight & Seals) */}
        {/* Gold Badge Stamp of Quality Guaranteed */}
        <g transform="translate(42, 118)" opacity={lineInfo.goldAccent ? 1 : 0.75}>
          <circle cx="16" cy="16" r="13" fill="url(#gold-foil)" stroke="#92400e" strokeWidth="0.5" />
          <path d="M 11 16 L 14 19 L 21 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="16" y="31" fill="#fbbf24" fontSize="4.5" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">FUNDO 5★</text>
        </g>

        {/* Daily Fresh manufacture Stamp on right side */}
        <g transform="translate(170, 118)">
          <circle cx="16" cy="16" r="13" fill="#065f46" stroke="#047857" strokeWidth="0.5" />
          <text x="16" y="14" fill="#6bf7ae" fontSize="5" fontWeight="black" textAnchor="middle" fontFamily="system-ui">FRESCO</text>
          <text x="16" y="21" fill="#fff" fontSize="5.5" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">DIÁRIO</text>
          <path d="M10,24 Q16,28 22,24" stroke="#6bf7ae" strokeWidth="0.5" fill="none" />
        </g>

        {/* Peso Líquido stamp */}
        <text x="194" y="300" fill="#fff" fontFamily="system-ui" fontSize="10" fontWeight="black" textAnchor="end">
          {product.weight}
        </text>
        <text x="194" y="308" fill="#9ca3af" fontFamily="system-ui" fontSize="6" textAnchor="end">
          PESO LÍQUIDO
        </text>

        {/* Registration representation on bottom left */}
        <text x="46" y="300" fill="url(#gold-foil)" fontFamily="system-ui" fontSize="6.5" fontWeight="black" letterSpacing="0.2">
          REGISTRO ISENTO
        </text>
        <text x="46" y="308" fill="#9ca3af" fontFamily="system-ui" fontSize="6">
          CONFORME MAPA
        </text>

        {/* Real studio lights highlight overlay (for plastic metallic 3D feel!) */}
        <path
          d="M 36 64 
             Q 80 64, 120 180 
             Q 160 300, 200 308 
             L 204 308 
             L 205 64 Z"
          fill="url(#highlight-reflection)"
          style={{ mixBlendMode: 'overlay' }}
          pointerEvents="none"
        />

        {/* Soft white reflection lines along edges */}
        <path d="M 33 64 Q 120 80, 207 64" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.30" pointerEvents="none" />
        <path d="M 37 312 Q 120 326, 203 312" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.15" pointerEvents="none" />
      </svg>
    );
  };

  // RENDER TRANSLUCENT BOTTLE (For Linha Garrafas)
  const renderBottleMockup = () => {
    return (
      <svg
        viewBox="0 0 240 340"
        className="w-full h-full drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)] transition-all duration-500"
      >
        <defs>
          <radialGradient id="shadow-floor-bottle" cx="50%" cy="95%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <linearGradient id="bottle-plastic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="20%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="90%" stopColor="rgba(255,255,255,0.8)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgba(200,200,200,0.6)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="lid-green" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="30%" stopColor="#059669" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="70%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>
          {/* Seed filler for look inside the bottle */}
          <pattern id="seed-fill" width="20" height="20" patternUnits="userSpaceOnUse">
            <ellipse cx="6" cy="6" rx="4" ry="2" fill="#d97706" opacity="0.85" />
            <ellipse cx="14" cy="14" rx="3.5" ry="1.8" fill="#ca8a04" opacity="0.9" />
            <ellipse cx="14" cy="5" rx="2.5" ry="1.2" fill="#fbbf24" opacity="0.8" />
            <circle cx="5" cy="15" r="2" fill="#b45309" opacity="0.75" />
            <ellipse cx="10" cy="10" rx="3" ry="1.5" fill="#f59e0b" opacity="0.9" />
          </pattern>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="120" cy="326" rx="65" ry="10" fill="url(#shadow-floor-bottle)" />

        {/* --- BOTTLE CONTENTS (Inside seed background) --- */}
        <path
          d="M 85 85 
             L 155 85 
             L 155 110 
             Q 186 142, 185 178 
             L 185 306 
             Q 184 322, 168 322 
             L 72 322 
             Q 56 322, 55 306 
             L 55 178 
             Q 54 142, 85 110 Z"
          fill="url(#seed-fill)"
        />

        {/* --- GLASS/PLASTIC CONTAINER TRANSLUCENT BODY --- */}
        <path
          d="M 85 85 
             L 155 85 
             L 155 110 
             Q 186 142, 185 178 
             L 185 306 
             Q 184 322, 168 322 
             L 72 322 
             Q 56 322, 55 306 
             L 55 178 
             Q 54 142, 85 110 Z"
          fill="url(#bottle-plastic)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
        />

        {/* Screw Neck Thread lines */}
        <rect x="85" y="72" width="70" height="13" rx="1.5" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
        <line x1="85" y1="78" x2="155" y2="78" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />

        {/* Sealed Lid (Tampa de Plástico Verde Forest) */}
        <path d="M 82 46 L 158 46 L 158 72 L 82 72 Z" fill="url(#lid-green)" rx="3" stroke="#047857" strokeWidth="1" />
        {/* Lid Ridges/Grips */}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={i} x1={86 + i * 4.8} y1="48" x2={86 + i * 4.8} y2="70" stroke="#047857" strokeWidth="1.5" />
        ))}
        {/* Dynamic color band sealing */}
        <rect x="82" y="65" width="76" height="4" fill="#fbbf24" />

        {/* --- WRAP-AROUND BRAND LABEL (RÓTULO CENTRAL) --- */}
        <path
          d="M 55 160 
             L 185 160 
             L 185 264 
             L 55 264 Z"
          fill="#1c1917"
          stroke="#44403c"
          strokeWidth="0.5"
        />

        {/* Leaf Green Upper and Gold Lower Borders on Label */}
        <rect x="55" y="160" width="130" height="8" fill="#047857" />
        <rect x="55" y="256" width="130" height="8" fill="#f59e0b" />

        {/* Brand Text on Label */}
        <text x="120" y="184" fill="#fff" fontFamily="system-ui" fontSize="8" fontWeight="black" letterSpacing="1.5" textAnchor="middle">
          MUNDO DAS AVES
        </text>
        <line x1="75" y1="190" x2="165" y2="190" stroke="#f59e0b" strokeWidth="0.6" />

        {/* Product Inner Specific Name inside Label */}
        <text x="120" y="206" fill="#fef08a" fontFamily="system-ui" fontSize="8" fontWeight="black" textAnchor="middle">
          {product.name.length > 22 ? product.name.slice(0, 22) + '...' : product.name}
        </text>
        <text x="120" y="217" fill="#cbd5e1" fontFamily="system-ui" fontSize="6.5" textAnchor="middle">
          Suplemento Mineral Puro
        </text>

        {/* Quality Seal */}
        <rect x="94" y="226" width="52" height="12" rx="2" fill="#292524" stroke="#44403c" strokeWidth="0.5" />
        <text x="120" y="234.5" fill="#f59e0b" fontFamily="system-ui" fontSize="6.5" fontWeight="black" textAnchor="middle" letterSpacing="0.5">
          PREMIUM
        </text>

        {/* Weight */}
        <text x="120" y="251" fill="#fff" fontFamily="system-ui" fontSize="9" fontWeight="bold" textAnchor="middle">
          {product.weight} Líquido
        </text>

        {/* Studio Lights 3D Cylinder Reflection highlights */}
        <path
          d="M 62 110 
             L 76 110 
             L 76 321 
             L 62 321 
             Z"
          fill="white"
          opacity="0.3"
          pointerEvents="none"
        />

        {/* Soft centered wide highlight of reflection */}
        <path
          d="M 100 115 
             L 115 115 
             L 115 321 
             L 100 321 
             Z"
          fill="white"
          opacity="0.1"
          pointerEvents="none"
        />

        {/* Right edge shadow for round cylinder effect */}
        <path
          d="M 174 110 
             L 185 110 
             L 185 306 
             Q 184 321, 168 321 
             Y 174 321 Z"
          fill="black"
          opacity="0.25"
          pointerEvents="none"
        />
      </svg>
    );
  };

  // RENDER INDUSTRIAL WOVEN BAG (Linha Sacaria 10Kg)
  const renderSacariaMockup = () => {
    return (
      <svg
        viewBox="0 0 240 340"
        className="w-full h-full drop-shadow-[0_25px_30px_rgba(0,0,0,0.6)] hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)] transition-all duration-500"
      >
        <defs>
          <radialGradient id="shadow-floor-sacaria" cx="50%" cy="95%" r="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.65)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          {/* Sack woven polypropylene material pattern */}
          <pattern id="sack-weave" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="#e2e8f0" />
            <line x1="0" y1="5" x2="10" y2="5" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="5" y1="0" x2="5" y2="10" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="2" y1="2" x2="8" y2="8" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.5" />
          </pattern>
          <linearGradient id="sack-dimension" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="15%" stopColor="#f3f4f6" />
            <stop offset="50%" stopColor="#e5e7eb" />
            <stop offset="85%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>

        {/* Floor Shadow */}
        <ellipse cx="120" cy="330" rx="90" ry="12" fill="url(#shadow-floor-sacaria)" />

        {/* --- THE WOVEN BAG SHAPE --- */}
        <path
          d="M 50 35 
             L 190 35 
             Q 204 38, 206 58 
             L 204 286 
             Q 200 324, 174 326 
             L 120 328 
             L 66 326 
             Q 40 324, 36 286 
             L 34 58 
             Q 36 38, 50 35 Z"
          fill="url(#sack-dimension)"
          stroke="#9ca3af"
          strokeWidth="1.2"
        />
        {/* Overlay the fine weave fabric texture */}
        <path
          d="M 50 35 L 190 35 Q 204 38, 206 58 L 204 286 Q 200 324, 174 326 L 120 328 L 66 326 Q 40 324, 36 286 L 34 58 Q 36 38, 50 35 Z"
          fill="url(#sack-weave)"
          style={{ mixBlendMode: 'multiply' }}
          opacity="0.75"
        />

        {/* Top Folded Stitch Hemmed Edge */}
        <path d="M 45 35 Q 120 40, 195 35 L 193 46 Q 120 50, 47 46 Z" fill="#9ca3af" />
        {/* Heavy Cotton Stitching Threads */}
        <path d="M 43 39 Q 120 44, 197 39" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="4,4" />

        {/* Wrinkle shadows and soft organic 3D sack bumps */}
        <path d="M 40 120 Q 90 140, 200 125" fill="none" stroke="#9ca3af" strokeWidth="2.5" opacity="0.3" />
        <path d="M 38 210 Q 150 190, 202 215" fill="none" stroke="#9ca3af" strokeWidth="2.5" opacity="0.3" />
        <path d="M 45 285 Q 120 295, 195 282" fill="none" stroke="#d1d5db" strokeWidth="2.5" opacity="0.5" />

        {/* --- STENCIL DESIGN OF COMPANY & SEALS --- */}
        {/* Big Stencil background badge */}
        <rect x="52" y="66" width="136" height="240" rx="8" fill="none" stroke="#064e3b" strokeWidth="2" strokeDasharray="8 3" opacity="0.8" />

        {/* Mundo das Aves Stencil Crest */}
        <text x="120" y="98" fill="#064e3b" fontFamily="Impact, system-ui" fontSize="16" fontWeight="black" letterSpacing="1.5" textAnchor="middle">
          MUNDO DAS AVES
        </text>
        <text x="120" y="112" fill="#047857" fontFamily="monospace" fontSize="8" fontWeight="bold" letterSpacing="1.2" textAnchor="middle">
          ★ DISTRIBUIDORA DE PICOS ★
        </text>

        {/* Huge specialized "10 KG" stamp on center */}
        <circle cx="120" cy="164" r="32" fill="#064e3b" opacity="0.9" />
        <text x="120" y="172" fill="#fff" fontFamily="sans-serif" fontSize="18" fontWeight="black" textAnchor="middle">
          10 KG
        </text>
        <text x="120" y="186" fill="#fbbf24" fontFamily="monospace" fontSize="6.5" fontWeight="bold" textAnchor="middle">
          SACA CRIADOR
        </text>

        {/* Product Specific Name (Printed as if stamped on the sack!) */}
        <rect x="56" y="208" width="128" height="38" rx="4" fill="#022c22" stroke="#047857" strokeWidth="1" />
        <text x="120" y="222" fill="#fff" fontFamily="system-ui" fontSize="8" fontWeight="black" textAnchor="middle">
          {product.name.length > 26 ? product.name.slice(0, 26) + '...' : product.name}
        </text>
        <text x="120" y="233" fill="#f59e0b" fontFamily="system-ui" fontSize="7" fontWeight="bold" textAnchor="middle">
          LOTE FRESCO • FABRICAÇÃO DIÁRIA
        </text>
        <text x="120" y="241" fill="#cbd5e1" fontFamily="system-ui" fontSize="6.5" textAnchor="middle">
          Triplo beneficiamento anti-poeira
        </text>

        {/* MAPA compliance and technical notes */}
        <text x="120" y="270" fill="#064e3b" fontFamily="monospace" fontSize="6" fontWeight="bold" textAnchor="middle">
          ISENTO DE REGISTRO MAPA ART. 11 DECRETO 5053
        </text>
        <text x="120" y="280" fill="#059669" fontFamily="system-ui" fontSize="6.5" textAnchor="middle">
          ALIMENTO TRADICIONAL COMPLETO PARA AVES
        </text>

        {/* Double-stitched bottom closure */}
        <path d="M 40 318 Q 120 323, 200 318 L 199 324 Q 120 329, 41 324" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="3,3" />
      </svg>
    );
  };

  const [imgError, setImgError] = React.useState(false);

  const renderContent = () => {
    if (product.image && !imgError) {
      return (
        <div className="w-full h-full flex items-center justify-center relative group">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
          {/* Studio specular overlay highlights to blend flat images into 3D premium context */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 opacity-60 rounded-xl pointer-events-none mix-blend-overlay" />
        </div>
      );
    }

    if (product.iconType === 'bottle') {
      return renderBottleMockup();
    } else if (product.iconType === 'sacaria') {
      return renderSacariaMockup();
    } else {
      return renderPouchMockup();
    }
  };

  return (
    <div className={`relative ${dims.container} flex items-center justify-center select-none`}>
      <div className={`w-full h-full transform transition-all duration-500 ease-out hover:scale-105 ${dims.scale}`}>
        {renderContent()}
      </div>
    </div>
  );
}
