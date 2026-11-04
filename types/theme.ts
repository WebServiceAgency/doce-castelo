export type ThemeStyle = 'premium' | 'retro' | 'minimalist' | 'chocolatier' | 'parisienne'

export interface ThemeConfig {
  id: ThemeStyle
  name: string
  label: string
  badgeLabel: string
  description: string
  vibe: string
  fontTitle: string
  fontBody: string
  isUppercaseTitles: boolean
  immersiveBgImage?: string
  immersiveBgOverlay?: string
  immersiveBgFilter?: string
  classes: {
    pageBg: string
    textColor: string
    topBarBg: string
    topBarText: string
    headerBg: string
    headerBorder: string
    logoShape: string
    logoBg: string
    logoColor: string
    logoText: string
    logoSub: string
    primaryBtn: string
    secondaryBtn: string
    accentText: string
    tagStyle: string
    cardBg: string
    cardBorder: string
    cardShadow: string
    cardRadius: string
    imageRadius: string
    heroFrame: string
    categoryTabActive: string
    categoryTabInactive: string
    atelieBg: string
    atelieBorder: string
    atelieRadius: string
    atelieText: string
    atelieBtn: string
    atelieHighlight: string
    featureCard: string
    featureCard1: string
    featureCard2: string
    featureCard3: string
    testimonialsBg: string
    testimonialCard: string
    faqContainer: string
    footerBg: string
    footerBorder: string
    footerText: string
    buttonRadius: string
    floatingBarBg: string
  }
}

export const themeConfigs: Record<ThemeStyle, ThemeConfig> = {
  premium: {
    id: 'premium',
    name: 'Premium',
    label: '👑 Premium',
    badgeLabel: 'Alta Confeitaria & Casamentos',
    description: 'Marsala nobre, ouro champanhe e marfim. Estética de alta gastronomia e casamentos luxuosos.',
    vibe: 'Elegância Clássica · Linhas Suaves · Requinte',
    fontTitle: 'font-theme-premium',
    fontBody: 'font-sans',
    isUppercaseTitles: false,
    // Bolo nupcial com pérolas e flores de açúcar em alta resolução
    immersiveBgImage: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=2400&q=85',
    immersiveBgOverlay: 'bg-gradient-to-b from-[#fdfbf7]/75 via-[#fdfbf7]/85 to-[#f6eee4]/90',
    immersiveBgFilter: 'opacity-40 contrast-110',
    classes: {
      pageBg: 'bg-[#fdfbf7]/80',
      textColor: 'text-[#2c1810]',
      topBarBg: 'bg-[#23120b]',
      topBarText: 'text-[#f9e9ce]',
      headerBg: 'bg-[#fdfbf7]/85',
      headerBorder: 'border-b border-[#eadfd2]',
      logoShape: 'rounded-full',
      logoBg: 'bg-[#8b263e]',
      logoColor: 'text-[#fdfbf7]',
      logoText: 'font-theme-premium text-[#8b263e]',
      logoSub: 'text-[#8c7465] tracking-[0.25em]',
      primaryBtn: 'rounded-full bg-[#8b263e] text-white hover:bg-[#701d30] shadow-md shadow-[#8b263e]/20',
      secondaryBtn: 'rounded-full border border-[#d4a373] text-[#8b263e] hover:bg-[#f7ece1]',
      accentText: 'text-[#8b263e]',
      tagStyle: 'rounded-full bg-[#8b263e] text-white shadow-sm',
      cardBg: 'bg-white/85 backdrop-blur-md',
      cardBorder: 'border border-[#eadfd5]',
      cardShadow: 'shadow-md shadow-[#7a4e3d]/8 hover:shadow-2xl hover:shadow-[#7a4e3d]/15 hover:-translate-y-1.5',
      cardRadius: 'rounded-[1.8rem]',
      imageRadius: 'rounded-t-[1.8rem]',
      heroFrame: 'rounded-[2.2rem] rounded-tr-[7rem] border border-[#d4a373]/40 shadow-2xl shadow-[#6c3c2d]/20',
      categoryTabActive: 'rounded-full bg-[#8b263e] text-white shadow-md shadow-[#8b263e]/20',
      categoryTabInactive: 'rounded-full border border-[#dfcec0] bg-white/80 text-[#755e51] hover:border-[#8b263e] hover:text-[#8b263e]',
      atelieBg: 'bg-gradient-to-br from-[#23120b] via-[#331811] to-[#23120b]',
      atelieBorder: 'border border-[#d4a373]/30',
      atelieRadius: 'rounded-[2.5rem]',
      atelieText: 'text-[#fdfbf7]',
      atelieBtn: 'rounded-full bg-[#d4a373] text-[#2c1810] hover:bg-[#e4b685] font-bold shadow-lg shadow-[#d4a373]/20',
      atelieHighlight: 'text-[#e8b4b8] italic',
      featureCard: 'rounded-2xl transition-all',
      featureCard1: 'bg-[#f4ebe3]/85 backdrop-blur-sm border border-[#eadfd5]',
      featureCard2: 'bg-[#faf2ec]/85 backdrop-blur-sm border border-[#eadfd5]',
      featureCard3: 'bg-[#efe5da]/85 backdrop-blur-sm border border-[#eadfd5]',
      testimonialsBg: 'bg-[#faf4ee]/75 backdrop-blur-md border-y border-[#eadfd5]',
      testimonialCard: 'rounded-2xl bg-white/90 border border-[#eadfd5] shadow-sm backdrop-blur-md',
      faqContainer: 'rounded-2xl border border-[#eadfd5] bg-white/85 backdrop-blur-md divide-y divide-[#eadfd5] shadow-sm',
      footerBg: 'bg-[#23120b]',
      footerBorder: 'border-white/10',
      footerText: 'text-[#cdb9ad]',
      buttonRadius: 'rounded-full',
      floatingBarBg: 'bg-white/95 border-t border-[#eadfd5]',
    },
  },
  retro: {
    id: 'retro',
    name: 'Retrô',
    label: '🌸 Retrô',
    badgeLabel: 'Afeto, Tradição & Bolo de Vó',
    description: 'Tom alaranjado quente vintage, rosa antigo e baunilha com sombras offset.',
    vibe: 'Nostalgia · Selos Artesanais · Aconchego',
    fontTitle: 'font-theme-retro',
    fontBody: 'font-sans',
    isUppercaseTitles: false,
    // Bolo artesanal com calda generosa de brigadeiro cremoso
    immersiveBgImage: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=2400&q=85',
    immersiveBgOverlay: 'bg-gradient-to-b from-[#fffbf2]/75 via-[#fffbf2]/85 to-[#faece0]/90',
    immersiveBgFilter: 'opacity-40 contrast-115',
    classes: {
      pageBg: 'bg-[#fffbf2]/80',
      textColor: 'text-[#38261e]',
      topBarBg: 'bg-[#d9653b]',
      topBarText: 'text-[#fffcf7]',
      headerBg: 'bg-[#fffbf2]/85',
      headerBorder: 'border-b-2 border-[#d9653b]/25',
      logoShape: 'rounded-2xl border-2 border-[#d9653b] shadow-[2px_2px_0px_0px_#d9653b]',
      logoBg: 'bg-[#d9653b]',
      logoColor: 'text-[#fffbf2]',
      logoText: 'font-theme-retro text-[#d9653b]',
      logoSub: 'text-[#d9653b] tracking-[0.18em] font-bold',
      primaryBtn: 'rounded-2xl border-2 border-[#c0542d] bg-[#d9653b] text-white hover:bg-[#c0542d] shadow-[3px_3px_0px_0px_#a8431e] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#a8431e]',
      secondaryBtn: 'rounded-2xl border-2 border-[#d9653b] bg-[#fdf3ec] text-[#d9653b] hover:bg-[#fae6d9] shadow-[3px_3px_0px_0px_#d9653b]',
      accentText: 'text-[#d9653b]',
      tagStyle: 'rounded-full border-2 border-[#d9653b] bg-[#fdf3ec] text-[#d9653b] font-black shadow-sm',
      cardBg: 'bg-white/90 backdrop-blur-md',
      cardBorder: 'border-2 border-[#d9653b]/30',
      cardShadow: 'shadow-[5px_5px_0px_0px_#f0ded1] hover:shadow-[7px_7px_0px_0px_#d9653b] hover:-translate-y-1',
      cardRadius: 'rounded-3xl',
      imageRadius: 'rounded-t-[1.35rem]',
      heroFrame: 'rounded-3xl border-4 border-[#d9653b] shadow-[8px_8px_0px_0px_#d9653b]',
      categoryTabActive: 'rounded-2xl border-2 border-[#c0542d] bg-[#d9653b] text-white shadow-[2px_2px_0px_0px_#a8431e]',
      categoryTabInactive: 'rounded-2xl border-2 border-[#e5d5c5] bg-[#fffdf9] text-[#6b4733] hover:border-[#d9653b] hover:text-[#d9653b]',
      atelieBg: 'bg-[#7c321d]',
      atelieBorder: 'border-4 border-[#f0ded1]',
      atelieRadius: 'rounded-3xl shadow-[8px_8px_0px_0px_#541e0e]',
      atelieText: 'text-[#fffbf2]',
      atelieBtn: 'rounded-2xl border-2 border-[#fffbf2] bg-[#d9653b] text-white hover:bg-[#c0542d] shadow-[4px_4px_0px_0px_#fffbf2] font-black',
      atelieHighlight: 'text-[#ffedd5]',
      featureCard: 'rounded-3xl border-2 border-[#d9653b]/30 shadow-[4px_4px_0px_0px_#f0ded1] transition-all',
      featureCard1: 'bg-[#fff5f0]/85 backdrop-blur-sm',
      featureCard2: 'bg-[#fdf6f0]/85 backdrop-blur-sm',
      featureCard3: 'bg-[#fff9f2]/85 backdrop-blur-sm',
      testimonialsBg: 'bg-[#fdf7ee]/75 backdrop-blur-md border-y-2 border-[#d9653b]/20',
      testimonialCard: 'rounded-3xl bg-white border-2 border-[#d9653b]/30 shadow-[4px_4px_0px_0px_#f0ded1]',
      faqContainer: 'rounded-3xl border-2 border-[#d9653b]/30 bg-white/90 backdrop-blur-md divide-y-2 divide-[#d9653b]/15 shadow-[4px_4px_0px_0px_#f0ded1]',
      footerBg: 'bg-[#221812]',
      footerBorder: 'border-white/10',
      footerText: 'text-[#dbcbbe]',
      buttonRadius: 'rounded-2xl',
      floatingBarBg: 'bg-[#fffbf2]/95 border-t-2 border-[#d9653b]/20',
    },
  },
  minimalist: {
    id: 'minimalist',
    name: 'Contemporânea',
    label: '🖤 Contemporânea',
    badgeLabel: 'Design Urbano & Pâtisserie Conceitual',
    description: 'Preto ônix, linho e vermelho carmim. Formas puras e retas (rounded-none), grid geométrico e tipografia uppercase.',
    vibe: 'Modernismo Urbano · Geometria Pura · Alta Pâtisserie',
    fontTitle: 'font-theme-minimalist',
    fontBody: 'font-sans',
    isUppercaseTitles: true,
    // Torta mousse escultórica com glaçagem espelhada de chocolate belga
    immersiveBgImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2400&q=85',
    immersiveBgOverlay: 'bg-gradient-to-b from-[#f8f8f9]/78 via-[#f8f8f9]/86 to-[#e9e9ec]/92',
    immersiveBgFilter: 'opacity-35 contrast-125',
    classes: {
      pageBg: 'bg-[#f8f8f9]/80',
      textColor: 'text-[#09090b]',
      topBarBg: 'bg-[#09090b]',
      topBarText: 'text-[#f4f4f5]',
      headerBg: 'bg-[#f8f8f9]/85',
      headerBorder: 'border-b border-black',
      logoShape: 'rounded-none border border-black',
      logoBg: 'bg-[#09090b]',
      logoColor: 'text-white',
      logoText: 'font-theme-minimalist font-bold uppercase tracking-[0.15em] text-[#09090b]',
      logoSub: 'text-[#71717a] uppercase tracking-[0.3em] font-mono',
      primaryBtn: 'rounded-none border border-black bg-black text-white hover:bg-neutral-800 uppercase tracking-widest text-[11px] font-bold shadow-none',
      secondaryBtn: 'rounded-none border border-black bg-transparent text-black hover:bg-neutral-100 uppercase tracking-widest text-[11px] font-bold',
      accentText: 'text-[#dc2626]',
      tagStyle: 'rounded-none bg-black text-white px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest',
      cardBg: 'bg-white/90 backdrop-blur-md',
      cardBorder: 'border border-black',
      cardShadow: 'shadow-none hover:border-black hover:bg-neutral-50/50 hover:-translate-y-1',
      cardRadius: 'rounded-none',
      imageRadius: 'rounded-none',
      heroFrame: 'rounded-none border-2 border-black shadow-none',
      categoryTabActive: 'rounded-none border border-black bg-black text-white uppercase font-mono tracking-widest',
      categoryTabInactive: 'rounded-none border border-neutral-300 bg-white text-neutral-700 hover:border-black uppercase font-mono tracking-widest',
      atelieBg: 'bg-[#09090b]',
      atelieBorder: 'border-2 border-black',
      atelieRadius: 'rounded-none',
      atelieText: 'text-white',
      atelieBtn: 'rounded-none border border-white bg-white text-black hover:bg-neutral-200 uppercase tracking-widest font-bold text-xs',
      atelieHighlight: 'text-[#f87171] not-italic',
      featureCard: 'rounded-none border border-black transition-all',
      featureCard1: 'bg-white/90 backdrop-blur-sm',
      featureCard2: 'bg-white/90 backdrop-blur-sm',
      featureCard3: 'bg-white/90 backdrop-blur-sm',
      testimonialsBg: 'bg-[#f0f0f2]/75 backdrop-blur-md border-y border-black',
      testimonialCard: 'rounded-none bg-white border border-black shadow-none',
      faqContainer: 'rounded-none border border-black bg-white/90 backdrop-blur-md divide-y divide-black shadow-none',
      footerBg: 'bg-[#09090b]',
      footerBorder: 'border-neutral-800',
      footerText: 'text-[#a1a1aa]',
      buttonRadius: 'rounded-none',
      floatingBarBg: 'bg-white border-t border-black',
    },
  },
  chocolatier: {
    id: 'chocolatier',
    name: 'Chocolatier',
    label: '🍫 Chocolatier',
    badgeLabel: '🍰Festival de Fatias, todo dia!',
    description: 'Cacau noir profundo, caramelo dourado, detalhes em ouro quente e âmbar aveludado. A atmosfera de uma chocolateria fina suíça e belga.',
    vibe: 'Cacau Puro · Ouro Quente · Sofisticação Noir',
    fontTitle: 'font-theme-chocolatier',
    fontBody: 'font-sans',
    isUppercaseTitles: false,
    // Cascata de ganache de chocolate belga escuro brilhante (100% doce e chocolate, sem gatos!)
    immersiveBgImage: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=2400&q=85',
    immersiveBgOverlay: 'bg-gradient-to-b from-[#120a06]/75 via-[#180e09]/85 to-[#0e0705]/92',
    immersiveBgFilter: 'opacity-50 contrast-130 brightness-90',
    classes: {
      pageBg: 'bg-[#120a06]/80',
      textColor: 'text-[#fbf4eb]',
      topBarBg: 'bg-[#0a0503]',
      topBarText: 'text-[#e5b567]',
      headerBg: 'bg-[#140b07]/85',
      headerBorder: 'border-b border-[#e5b567]/20',
      logoShape: 'rounded-full border border-[#e5b567]/50 shadow-gold-glow',
      logoBg: 'bg-gradient-to-br from-[#2a170f] to-[#120a06]',
      logoColor: 'text-[#e5b567]',
      logoText: 'font-theme-chocolatier tracking-wider text-[#e5b567]',
      logoSub: 'text-[#c4a17b] tracking-[0.25em]',
      primaryBtn: 'rounded-xl bg-gradient-to-r from-[#d4a373] via-[#e5b567] to-[#d4a373] text-[#140b07] hover:brightness-110 shadow-lg shadow-[#e5b567]/20 font-bold tracking-wide',
      secondaryBtn: 'rounded-xl border border-[#e5b567]/40 bg-[#1f120c]/60 text-[#fbf4eb] hover:bg-[#2c1a11] hover:border-[#e5b567]',
      accentText: 'text-[#e5b567]',
      tagStyle: 'rounded-md border border-[#e5b567]/40 bg-[#1a0f0a]/90 text-[#e5b567] font-semibold backdrop-blur-sm',
      cardBg: 'bg-[#1c100a]/85 backdrop-blur-md',
      cardBorder: 'border border-[#e5b567]/20 hover:border-[#e5b567]/50',
      cardShadow: 'shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#e5b567]/10 hover:-translate-y-1.5',
      cardRadius: 'rounded-2xl',
      imageRadius: 'rounded-t-2xl',
      heroFrame: 'rounded-2xl border-2 border-[#e5b567]/40 shadow-2xl shadow-black/60 shadow-gold-glow',
      categoryTabActive: 'rounded-xl bg-gradient-to-r from-[#d4a373] to-[#e5b567] text-[#140b07] font-bold shadow-md shadow-[#e5b567]/20',
      categoryTabInactive: 'rounded-xl border border-[#e5b567]/25 bg-[#1a0f0a]/80 text-[#d6b797] hover:border-[#e5b567] hover:text-[#e5b567]',
      atelieBg: 'bg-gradient-to-br from-[#1a0e08] via-[#2d180f] to-[#120905]',
      atelieBorder: 'border-2 border-[#e5b567]/40 shadow-gold-glow',
      atelieRadius: 'rounded-3xl',
      atelieText: 'text-[#fbf4eb]',
      atelieBtn: 'rounded-xl bg-gradient-to-r from-[#e5b567] to-[#d4a373] text-[#140b07] hover:brightness-110 font-bold shadow-xl shadow-[#e5b567]/30',
      atelieHighlight: 'text-[#e5b567] italic font-serif',
      featureCard: 'rounded-2xl transition-all backdrop-blur-md',
      featureCard1: 'bg-[#1a0f0a]/85 border border-[#e5b567]/25',
      featureCard2: 'bg-[#1e110c]/85 border border-[#e5b567]/25',
      featureCard3: 'bg-[#180e09]/85 border border-[#e5b567]/25',
      testimonialsBg: 'bg-[#140b07]/75 backdrop-blur-md border-y border-[#e5b567]/20',
      testimonialCard: 'rounded-2xl bg-[#1c100a]/90 border border-[#e5b567]/20 shadow-lg shadow-black/40 backdrop-blur-md',
      faqContainer: 'rounded-2xl border border-[#e5b567]/25 bg-[#190e09]/90 backdrop-blur-md divide-y divide-[#e5b567]/15 shadow-xl shadow-black/40',
      footerBg: 'bg-[#0b0503]',
      footerBorder: 'border-[#e5b567]/15',
      footerText: 'text-[#c4a17b]',
      buttonRadius: 'rounded-xl',
      floatingBarBg: 'bg-[#140b07]/95 border-t border-[#e5b567]/20 backdrop-blur-md',
    },
  },
  parisienne: {
    id: 'parisienne',
    name: 'Parisienne',
    label: '🥐 Parisienne',
    badgeLabel: 'Pâtisserie Francesa & Salon de Thé',
    description: 'Verde pistache imperial, mármore Carrara, toques florais de lavanda e marfim parisiense. Inspiração nos salões de chá clássicos de Paris.',
    vibe: 'Chic Parisiense · Mármore & Pistache · Delicadeza Floral',
    fontTitle: 'font-theme-parisienne',
    fontBody: 'font-sans',
    isUppercaseTitles: false,
    // Bolo gourmet de morangos com chantilly artesanal e doces franceses
    immersiveBgImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=2400&q=85',
    immersiveBgOverlay: 'bg-gradient-to-b from-[#f8faf7]/75 via-[#f2f7f3]/85 to-[#e5eee7]/92',
    immersiveBgFilter: 'opacity-40 contrast-115',
    classes: {
      pageBg: 'bg-[#f8faf7]/80',
      textColor: 'text-[#1f3327]',
      topBarBg: 'bg-[#254233]',
      topBarText: 'text-[#eef5f0]',
      headerBg: 'bg-[#f8faf7]/85',
      headerBorder: 'border-b border-[#3d6952]/20',
      logoShape: 'rounded-full border border-[#c5a059]/60 shadow-sm',
      logoBg: 'bg-[#2e5641]',
      logoColor: 'text-[#fbf9f4]',
      logoText: 'font-theme-parisienne text-[#2e5641]',
      logoSub: 'text-[#587a68] tracking-[0.22em] font-medium',
      primaryBtn: 'rounded-full bg-[#2e5641] text-white hover:bg-[#234232] shadow-md shadow-[#2e5641]/20 font-semibold tracking-wide',
      secondaryBtn: 'rounded-full border border-[#c5a059] bg-white/70 text-[#2e5641] hover:bg-[#edf3ee] shadow-sm',
      accentText: 'text-[#2e5641]',
      tagStyle: 'rounded-full border border-[#3d6952]/30 bg-[#edf5f0] text-[#254233] font-bold shadow-sm',
      cardBg: 'bg-white/85 backdrop-blur-md',
      cardBorder: 'border border-[#3d6952]/20 hover:border-[#c5a059]',
      cardShadow: 'shadow-lg shadow-[#2e5641]/8 hover:shadow-2xl hover:shadow-[#2e5641]/15 hover:-translate-y-1.5',
      cardRadius: 'rounded-[2rem]',
      imageRadius: 'rounded-t-[2rem]',
      heroFrame: 'rounded-[2.5rem] rounded-tl-[6rem] border-2 border-[#c5a059]/40 shadow-2xl shadow-[#2e5641]/15',
      categoryTabActive: 'rounded-full bg-[#2e5641] text-white shadow-md shadow-[#2e5641]/20',
      categoryTabInactive: 'rounded-full border border-[#cfded4] bg-white/75 text-[#3f5f4d] hover:border-[#2e5641] hover:text-[#2e5641]',
      atelieBg: 'bg-gradient-to-br from-[#234232] via-[#2d523e] to-[#1b3527]',
      atelieBorder: 'border-2 border-[#c5a059]/40 shadow-pistache-glow',
      atelieRadius: 'rounded-[2.8rem]',
      atelieText: 'text-[#fbf9f4]',
      atelieBtn: 'rounded-full border border-[#c5a059] bg-[#c5a059] text-[#1b3527] hover:bg-[#d8b56f] font-bold shadow-lg shadow-[#c5a059]/30',
      atelieHighlight: 'text-[#edd8a6] italic font-serif',
      featureCard: 'rounded-2xl transition-all backdrop-blur-md',
      featureCard1: 'bg-[#eef5ef]/85 border border-[#3d6952]/20',
      featureCard2: 'bg-[#f4f8f4]/85 border border-[#3d6952]/20',
      featureCard3: 'bg-[#edf3ee]/85 border border-[#3d6952]/20',
      testimonialsBg: 'bg-[#f0f6f1]/75 backdrop-blur-md border-y border-[#3d6952]/15',
      testimonialCard: 'rounded-2xl bg-white/90 border border-[#3d6952]/20 shadow-sm backdrop-blur-md',
      faqContainer: 'rounded-2xl border border-[#3d6952]/20 bg-white/90 backdrop-blur-md divide-y divide-[#3d6952]/15 shadow-sm',
      footerBg: 'bg-[#192b21]',
      footerBorder: 'border-white/10',
      footerText: 'text-[#bfd3c6]',
      buttonRadius: 'rounded-full',
      floatingBarBg: 'bg-[#f8faf7]/95 border-t border-[#3d6952]/20 backdrop-blur-md',
    },
  },
}
