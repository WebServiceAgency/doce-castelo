export type ThemeStyle = 'premium' | 'chocolatier'

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
    name: 'Estilo 1',
    label: '🌸 Estilo 1',
    badgeLabel: '🍰Festival de Fatias, todo dia!',
    description: 'Paleta inspirada na logo oficial: rosa doce e branco puro com vitrine iluminada e fatias generosas.',
    vibe: 'Rosa Doce · Branco Puro · Vitrine Iluminada',
    fontTitle: 'font-theme-premium',
    fontBody: 'font-sans',
    isUppercaseTitles: false,
    // Foto horizontal apetitosa de bolo artesanal com morangos e cobertura branca, bem visível
    immersiveBgImage: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=2400&q=85',
    immersiveBgOverlay: 'bg-gradient-to-b from-white/35 via-[#fff2f4]/45 to-white/50 backdrop-blur-[0.5px]',
    immersiveBgFilter: 'opacity-80 contrast-110 saturate-110',
    classes: {
      pageBg: 'bg-transparent',
      textColor: 'text-[#2c1418]',
      topBarBg: 'bg-[#b84855]',
      topBarText: 'text-white',
      headerBg: 'bg-white/90 backdrop-blur-md',
      headerBorder: 'border-b border-[#f4cbd1]',
      logoShape: 'rounded-full border border-[#f4cbd1]',
      logoBg: 'bg-[#db7a83]',
      logoColor: 'text-white',
      logoText: 'font-theme-premium text-[#db7a83]',
      logoSub: 'text-[#a6616a] tracking-[0.2em]',
      primaryBtn: 'rounded-full bg-[#db7a83] text-white hover:bg-[#c6656f] shadow-md shadow-[#db7a83]/30 font-bold',
      secondaryBtn: 'rounded-full border-2 border-[#db7a83] bg-white/80 text-[#b84855] hover:bg-[#fff0f2] font-semibold',
      accentText: 'text-[#db7a83]',
      tagStyle: 'rounded-full bg-[#db7a83] text-white shadow-sm font-semibold',
      cardBg: 'bg-white/95 backdrop-blur-md',
      cardBorder: 'border border-[#f4cbd1] hover:border-[#db7a83]/60',
      cardShadow: 'shadow-md shadow-[#db7a83]/10 hover:shadow-2xl hover:shadow-[#db7a83]/20 hover:-translate-y-1.5',
      cardRadius: 'rounded-[1.8rem]',
      imageRadius: 'rounded-t-[1.8rem]',
      heroFrame: 'rounded-[2.2rem] rounded-tr-[7rem] border-2 border-[#f4cbd1] shadow-2xl shadow-[#db7a83]/20',
      categoryTabActive: 'rounded-full bg-[#db7a83] text-white shadow-md shadow-[#db7a83]/30 font-bold',
      categoryTabInactive: 'rounded-full border border-[#f4cbd1] bg-white/90 text-[#7a4c54] hover:border-[#db7a83] hover:text-[#db7a83]',
      atelieBg: 'bg-gradient-to-br from-[#45141b] via-[#5c1c25] to-[#360e14]',
      atelieBorder: 'border-2 border-[#f4cbd1]/40 shadow-2xl shadow-[#db7a83]/20',
      atelieRadius: 'rounded-3xl',
      atelieText: 'text-white',
      atelieBtn: 'rounded-full bg-[#db7a83] text-white hover:bg-[#c6656f] font-bold shadow-xl shadow-[#db7a83]/40',
      atelieHighlight: 'text-[#fce4e8] italic font-serif',
      featureCard: 'rounded-2xl transition-all backdrop-blur-md',
      featureCard1: 'bg-white/95 border border-[#f4cbd1] shadow-sm',
      featureCard2: 'bg-white/95 border border-[#f4cbd1] shadow-sm',
      featureCard3: 'bg-white/95 border border-[#f4cbd1] shadow-sm',
      testimonialsBg: 'bg-gradient-to-r from-[#fff5f6]/85 via-white/80 to-[#fff5f6]/85 backdrop-blur-md border-y border-[#f4cbd1]',
      testimonialCard: 'rounded-2xl bg-white/95 border border-[#f4cbd1] shadow-md shadow-[#db7a83]/10 backdrop-blur-md',
      faqContainer: 'rounded-2xl border border-[#f4cbd1] bg-white/95 backdrop-blur-md divide-y divide-[#f4cbd1]/60 shadow-lg shadow-[#db7a83]/10',
      footerBg: 'bg-[#290d13]',
      footerBorder: 'border-[#f4cbd1]/20',
      footerText: 'text-[#e8c8ce]',
      buttonRadius: 'rounded-full',
      floatingBarBg: 'bg-white/95 border-t border-[#f4cbd1] backdrop-blur-md shadow-lg',
    },
  },
  chocolatier: {
    id: 'chocolatier',
    name: 'Estilo 2',
    label: '🍫 Estilo 2',
    badgeLabel: '🍰Festival de Fatias, todo dia!',
    description: 'Cacau noir profundo, caramelo dourado, detalhes em ouro quente e âmbar aveludado. A atmosfera de uma chocolateria fina suíça e belga.',
    vibe: 'Cacau Puro · Ouro Quente · Sofisticação Noir',
    fontTitle: 'font-theme-chocolatier',
    fontBody: 'font-sans',
    isUppercaseTitles: false,
    // Cascata de ganache de chocolate belga escuro brilhante
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
}
