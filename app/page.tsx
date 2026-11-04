'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  CakeSlice,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Quote,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Eye,
  GraduationCap,
  Flame,
  ExternalLink,
  UtensilsCrossed,
} from 'lucide-react'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { siteConfig } from '@/config/site'
import { categories, products, Product } from '@/data/products'
import { ThemeStyle, themeConfigs } from '@/types/theme'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { DemoOrderModal } from '@/components/DemoOrderModal'
import { QuickViewModal } from '@/components/QuickViewModal'
import { MobileMenu } from '@/components/MobileMenu'

export default function Page() {
  const [currentTheme, setCurrentTheme] = useState<ThemeStyle>('premium')
  const [activeCategory, setActiveCategory] = useState<string>('Todos os Doces')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Modals state
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState<Product | null>(null)
  const [orderModalData, setOrderModalData] = useState<{
    isOpen: boolean
    product?: Product | null
    customRequest?: string
    channel?: 'whatsapp' | 'ifood' | '99food'
  }>({
    isOpen: false,
    product: null,
    customRequest: undefined,
    channel: 'whatsapp',
  })

  const theme = themeConfigs[currentTheme]

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos os Doces') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  const openOrderDemo = (
    product?: Product | null,
    customRequest?: string,
    channel: 'whatsapp' | 'ifood' | '99food' = 'whatsapp'
  ) => {
    setOrderModalData({
      isOpen: true,
      product: product || null,
      customRequest,
      channel,
    })
  }

  const closeOrderDemo = () => {
    setOrderModalData((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-all duration-300 ${theme.classes.pageBg} ${theme.classes.textColor}`}
    >
      {/* Immersive Atmospheric Background Layer with Image */}
      {theme.immersiveBgImage && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={theme.immersiveBgImage}
            alt=""
            aria-hidden="true"
            className={`size-full object-cover object-center transition-all duration-700 ${theme.immersiveBgFilter || 'opacity-30'}`}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${theme.immersiveBgOverlay || 'bg-black/40'}`} />
        </div>
      )}

      {/* Top Announcement Bar */}
      <div
        className={`relative z-20 px-4 py-2.5 text-center text-[11px] font-medium tracking-wider sm:text-xs transition-colors duration-300 ${theme.classes.topBarBg} ${theme.classes.topBarText}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <strong className="font-semibold">{siteConfig.announcement}</strong>
          </span>
          <span className="hidden md:inline opacity-60">|</span>
          <span className="hidden md:inline text-[11px] opacity-90">
            {siteConfig.hours.weekdays}
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-30 backdrop-blur-md transition-all duration-300 ${theme.classes.headerBg} ${theme.classes.headerBorder}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3.5 lg:py-4">
          {/* Logo & Brand */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group shrink-0 mr-3 lg:mr-6 select-none"
            aria-label={`${siteConfig.name} início`}
          >
            <img
              src="/images/logo-doce-castelo.webp"
              alt={siteConfig.name}
              className={`size-10 lg:size-11 rounded-full object-cover transition-all duration-300 group-hover:scale-105 border border-[#d4a373]/40 shadow-sm shrink-0`}
            />
            <span className="shrink-0">
              <strong
                className={`block text-xl lg:text-2xl leading-none transition-colors whitespace-nowrap ${theme.classes.logoText}`}
              >
                {siteConfig.name}
              </strong>
              <small className={`block text-[10px] mt-0.5 whitespace-nowrap ${theme.classes.logoSub}`}>
                {siteConfig.tagline}
              </small>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center justify-center gap-3 xl:gap-5 2xl:gap-7 font-semibold tracking-wide whitespace-nowrap px-2 xl:px-4 ${
              theme.isUppercaseTitles
                ? 'uppercase font-mono text-[11px] xl:text-xs tracking-wider'
                : 'text-xs xl:text-sm'
            }`}
          >
            <a href="#vitrine" className="whitespace-nowrap transition-colors hover:opacity-75 py-1">
              Cardápio
            </a>
            <a href="#comunidade" className="whitespace-nowrap transition-colors hover:opacity-75 py-1 text-orange-600 font-bold">
              Cursos & Grupo VIP
            </a>
            <a href="#atelie" className="whitespace-nowrap transition-colors hover:opacity-75 py-1">
              Bolos de Festa
            </a>
            <a href="#diferenciais" className="whitespace-nowrap transition-colors hover:opacity-75 py-1">
              Delivery (iFood & 99)
            </a>
            <a href="#depoimentos" className="whitespace-nowrap transition-colors hover:opacity-75 py-1">
              Avaliações
            </a>
            <a href="#duvidas" className="whitespace-nowrap transition-colors hover:opacity-75 py-1">
              Dúvidas
            </a>
          </nav>

          {/* Header Action Buttons (99Food, iFood & WhatsApp) */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0 ml-3 lg:ml-6">
            <a
              href={siteConfig.social.food99Url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs font-bold text-amber-700 transition-all hover:bg-amber-500/20 whitespace-nowrap ${theme.classes.buttonRadius}`}
              title="Pedir pelo 99Food"
            >
              <span className="flex size-4 items-center justify-center rounded-full bg-amber-500 text-white text-[9px] font-black">99</span>
              <span>99Food</span>
            </a>

            <a
              href={siteConfig.social.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs font-bold text-[#ea1d2c] transition-all hover:bg-red-500/20 whitespace-nowrap ${theme.classes.buttonRadius}`}
              title="Pedir pelo iFood"
            >
              <ShoppingBag className="size-3.5 shrink-0" />
              <span>iFood</span>
            </a>

            <a
              href={siteConfig.social.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap ${theme.classes.primaryBtn}`}
              title="Atendimento no WhatsApp Loja"
            >
              <MessageCircle className="size-3.5 shrink-0" />
              <span>WhatsApp Loja</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`flex lg:hidden size-10 items-center justify-center border bg-white/90 shadow-sm hover:opacity-80 ${theme.classes.buttonRadius}`}
            aria-label="Abrir menu de navegação"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:pb-24 lg:pt-14"
      >
        <div
          className={`max-w-xl p-6 sm:p-9 transition-all duration-300 ${
            currentTheme === 'chocolatier'
              ? 'rounded-3xl bg-[#140b07]/90 border border-[#e5b567]/30 shadow-2xl backdrop-blur-md'
              : 'rounded-3xl bg-white/95 border border-[#f4cbd1] shadow-xl shadow-[#db7a83]/10 backdrop-blur-md'
          }`}
        >
          {/* Badge */}
          <div
            className={`mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold shadow-sm ${
              theme.isUppercaseTitles ? 'uppercase tracking-widest font-mono' : 'tracking-wide'
            } ${theme.classes.buttonRadius} ${
              currentTheme === 'chocolatier'
                ? 'border border-[#e5b567]/50 bg-[#1c100a]/90 text-[#e5b567] shadow-gold-glow'
                : 'border border-[#f4cbd1] bg-[#fff0f2] text-[#b84855] shadow-sm'
            }`}
          >
            <Sparkles className="size-3.5" />
            <span>{theme.badgeLabel}</span>
          </div>

          {/* Dynamic Headline */}
          <h1
            className={`${theme.fontTitle} text-4xl leading-[1.08] sm:text-6xl lg:text-[4.2rem] ${
              theme.isUppercaseTitles ? 'uppercase tracking-wider font-extrabold' : 'tracking-tight font-bold'
            }`}
          >
            {siteConfig.headline}{' '}
            <em className={`not-italic ${theme.classes.accentText}`}>
              {siteConfig.headlineHighlight}
            </em>
          </h1>

          <p
            className={`mt-6 max-w-lg text-base leading-relaxed sm:text-lg ${
              currentTheme === 'chocolatier' ? 'text-[#d8be9f]' : 'text-[#4a242c]'
            }`}
          >
            {siteConfig.description}
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#vitrine"
              className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold transition-transform hover:-translate-y-0.5 ${theme.classes.primaryBtn}`}
            >
              Ver vitrine de hoje <ArrowRight className="size-4" />
            </a>

            <button
              onClick={() =>
                openOrderDemo(
                  null,
                  'um bolo personalizado sob medida para o meu evento',
                  'whatsapp'
                )
              }
              className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold transition-all ${theme.classes.secondaryBtn}`}
            >
              Encomenda para eventos
            </button>
          </div>

          {/* Feature highlights below Hero */}
          <div
            className={`mt-10 grid grid-cols-3 gap-3 border-t pt-6 text-xs font-semibold leading-snug ${
              currentTheme === 'chocolatier'
                ? 'border-[#e5b567]/30 text-[#d8be9f]'
                : 'border-[#f4cbd1] text-[#4a242c]'
            }`}
          >
            <div>
              <ShieldCheck className={`mb-2 size-5 ${theme.classes.accentText}`} />
              100% manteiga e chocolate nobre
            </div>
            <div>
              <Sparkles className={`mb-2 size-5 ${theme.classes.accentText}`} />
              Fornadas frescas todos os dias
            </div>
            <div>
              <PackageCheck className={`mb-2 size-5 ${theme.classes.accentText}`} />
              Embalagens reforçadas para viagem
            </div>
          </div>
        </div>

        {/* Hero Visual Image Card */}
        <div className="relative">
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-300 ${theme.classes.heroFrame}`}>
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=90"
              alt="Bolo artesanal decorado com frutas nobres"
              className="aspect-[4/4.1] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay Review Badge based on theme style */}
            <div
              className={`absolute bottom-5 left-5 right-5 sm:right-auto p-4 transition-all duration-300 ${
                currentTheme === 'chocolatier'
                  ? 'rounded-2xl border border-[#e5b567]/50 bg-[#1a0f0a]/95 text-[#fbf4eb] shadow-xl shadow-black/60 shadow-gold-glow backdrop-blur-md'
                  : 'rounded-2xl border border-[#f4cbd1] bg-white/95 text-[#2c1418] shadow-xl shadow-[#db7a83]/15 backdrop-blur-md'
              }`}
            >
              <div className="flex items-center gap-1 text-[#c58d42]">
                <Star className="size-3.5 fill-current" />
                <Star className="size-3.5 fill-current" />
                <Star className="size-3.5 fill-current" />
                <Star className="size-3.5 fill-current" />
                <Star className="size-3.5 fill-current" />
                <span className="ml-1 text-[11px] font-bold text-current">4.8 no Google (310+ avaliações)</span>
              </div>
              <p
                className={`mt-1 font-bold ${theme.fontTitle} ${
                  theme.isUppercaseTitles ? 'text-xs uppercase tracking-wider' : 'text-sm'
                }`}
              >
                “A melhor fatia de bolo e sobremesas de Curitiba!”
              </p>
              <span className="text-[10px] opacity-75">Chocolates Nobres 50% Cacau • Água Verde</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vitrine / Product Showcase Section */}
      <section
        id="vitrine"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24"
      >
        {/* Section Header */}
        <div
          className={`mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end p-6 sm:p-8 transition-all duration-300 ${
            currentTheme === 'chocolatier'
              ? 'rounded-3xl bg-[#140b07]/90 border border-[#e5b567]/30 shadow-2xl backdrop-blur-md'
              : 'rounded-3xl bg-white/95 border border-[#f4cbd1] shadow-xl shadow-[#db7a83]/10 backdrop-blur-md'
          }`}
        >
          <div>
            <p
              className={`mb-2 text-xs font-bold uppercase tracking-widest ${
                currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#b84855]'
              }`}
            >
              Cardápio Selecionado
            </p>
            <h2
              className={`${theme.fontTitle} text-3xl sm:text-5xl tracking-tight font-bold`}
            >
              <em className={`not-italic ${theme.classes.accentText}`}>Peça agora.</em>
            </h2>
          </div>
          <p
            className={`max-w-xs text-xs sm:text-sm leading-relaxed ${
              currentTheme === 'chocolatier' ? 'text-[#d6b797]' : 'text-[#4a242c]'
            }`}
          >
            Produção em pequenos lotes diários para garantir o máximo frescor e textura perfeita.
          </p>
        </div>

        {/* Category Filter Pills (styled per theme) */}
        <div className="no-scrollbar mb-10 flex gap-2.5 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isSelected = activeCategory === category
            const count =
              category === 'Todos os Doces'
                ? products.length
                : products.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? theme.classes.categoryTabActive
                    : theme.classes.categoryTabInactive
                }`}
              >
                {category} <span className="ml-1 opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className={`group flex flex-col justify-between overflow-hidden transition-all duration-300 ${theme.classes.cardBg} ${theme.classes.cardRadius} ${theme.classes.cardBorder} ${theme.classes.cardShadow}`}
            >
              <div>
                {/* Image & Tag */}
                <div className="relative overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 ${theme.classes.imageRadius}`}
                  />
                  <span
                    className={`absolute left-3.5 top-3.5 px-3 py-1 text-[10px] font-bold ${theme.classes.tagStyle}`}
                  >
                    {product.tag}
                  </span>

                  {/* Quick View Button on Image */}
                  <button
                    onClick={() => setSelectedProductForQuickView(product)}
                    className={`absolute right-3.5 top-3.5 flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium backdrop-blur-md transition-all cursor-pointer ${
                      currentTheme === 'chocolatier'
                        ? 'rounded-lg bg-[#140b07]/85 text-[#e5b567] border border-[#e5b567]/40 hover:bg-[#1a0f0a]'
                        : 'rounded-full bg-white/90 text-[#b84855] border border-[#f4cbd1] hover:bg-white shadow-sm'
                    }`}
                    title="Ver detalhes e ingredientes"
                  >
                    <Eye className="size-3" />
                    <span>Detalhes</span>
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 p-5">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider ${
                      currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#db7a83]'
                    }`}
                  >
                    {product.category}
                  </span>
                  <h3
                    className={`${theme.fontTitle} text-xl sm:text-2xl font-bold leading-tight ${
                      theme.isUppercaseTitles ? 'uppercase tracking-wider text-base sm:text-lg' : ''
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      currentTheme === 'chocolatier' ? 'text-[#c7a98b]' : 'text-[#6e4e54]'
                    }`}
                  >
                    {product.description}
                  </p>
                  <p className="text-[11px] font-semibold opacity-80">
                    {product.size}
                  </p>
                </div>
              </div>

              {/* Card Footer with Price and Order Actions */}
              <div
                className={`flex items-center justify-between gap-2 p-5 pt-4 border-t ${
                  currentTheme === 'chocolatier' ? 'border-[#e5b567]/20' : 'border-[#f4cbd1]'
                }`}
              >
                <div>
                  <strong
                    className={`${theme.fontTitle} text-2xl font-black ${theme.classes.accentText}`}
                  >
                    {product.price}
                  </strong>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedProductForQuickView(product)}
                    className={`px-3 py-2 text-[11px] font-bold transition-all cursor-pointer ${theme.classes.secondaryBtn}`}
                  >
                    Ingredientes
                  </button>

                  <button
                    onClick={() => openOrderDemo(product, undefined, 'whatsapp')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${theme.classes.primaryBtn}`}
                  >
                    <MessageCircle className="size-3.5" />
                    <span>Pedir</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seção Cursos de Confeitaria & Grupo VIP de Promoções */}
      <section
        id="comunidade"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-5 py-8 lg:px-8 lg:py-12"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Cursos de Confeitaria */}
          <div
            className={`flex flex-col justify-between overflow-hidden p-7 sm:p-9 transition-all ${theme.classes.cardRadius} border-2 ${
              currentTheme === 'chocolatier'
                ? 'bg-[#1a0f0a]/95 border-[#e5b567]/40 shadow-2xl backdrop-blur-md text-[#fbf4eb]'
                : 'bg-white/95 border-orange-400/50 shadow-xl shadow-orange-500/10 backdrop-blur-md text-[#2c1418]'
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3.5 py-1.5 text-xs font-bold text-orange-600 mb-4">
                <GraduationCap className="size-4 shrink-0" />
                <span>Cursos & Masterclasses • Vagas Limitadas</span>
              </div>
              <h3
                className={`${theme.fontTitle} text-2xl sm:text-3xl font-bold leading-tight`}
              >
                Cursos de Confeitaria Doce Castelo
              </h3>
              <p
                className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                  currentTheme === 'chocolatier' ? 'text-[#d8be9f]' : 'text-[#4a242c]'
                }`}
              >
                Domine na prática técnicas profissionais de confeitaria com a nossa chef: massas estruturadas, recheios aveludados, ponto de brigadeiro de panela, montagem de taças gourmet e acabamento fino para venda ou celebração!
              </p>
            </div>
            <div className={`mt-7 pt-5 border-t ${currentTheme === 'chocolatier' ? 'border-white/10' : 'border-[#f4cbd1]'}`}>
              <a
                href={siteConfig.social.cursosWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <GraduationCap className="size-4" />
                <span>Quero me inscrever no próximo curso</span>
                <ExternalLink className="size-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Card 2: Grupo VIP de Promoções */}
          <div
            className={`flex flex-col justify-between overflow-hidden p-7 sm:p-9 transition-all ${theme.classes.cardRadius} border-2 ${
              currentTheme === 'chocolatier'
                ? 'bg-[#1e110c]/95 border-pink-500/40 shadow-2xl backdrop-blur-md text-[#fbf4eb]'
                : 'bg-white/95 border-pink-400/50 shadow-xl shadow-pink-500/10 backdrop-blur-md text-[#2c1418]'
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-500/15 px-3.5 py-1.5 text-xs font-bold text-pink-600 mb-4">
                <Flame className="size-4 shrink-0" />
                <span>Canal Oficial de Clientes VIP</span>
              </div>
              <h3
                className={`${theme.fontTitle} text-2xl sm:text-3xl font-bold leading-tight`}
              >
                🍰 Grupo de Promoções no WhatsApp
              </h3>
              <p
                className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                  currentTheme === 'chocolatier' ? 'text-[#d8be9f]' : 'text-[#4a242c]'
                }`}
              >
                Quer receber em primeira mão as fatias que acabaram de sair do forno, novidades do cardápio e aproveitar descontos relâmpago exclusivos? Entre no nosso grupo e garanta sua sobremesa com vantagens especiais!
              </p>
            </div>
            <div className="mt-7 pt-5 border-t border-black/10">
              <a
                href={siteConfig.social.promoGroupWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="size-4" />
                <span>Entrar no Grupo de Promoções</span>
                <ExternalLink className="size-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cakes Studio Section (Ateliê de Bolos) */}
      <section
        id="atelie"
        className={`relative z-10 mx-5 overflow-hidden transition-all duration-300 lg:mx-auto lg:max-w-7xl ${theme.classes.atelieRadius} ${theme.classes.atelieBorder} ${theme.classes.atelieBg} ${theme.classes.atelieText}`}
      >
        <div className="grid items-center gap-10 px-7 py-12 sm:px-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              className={`mb-3 text-xs font-bold uppercase tracking-widest ${
                currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#fce4e8]'
              }`}
            >
              Ateliê de Projetos Sob Medida
            </p>
            <h2
              className={`max-w-2xl text-3xl sm:text-5xl leading-tight ${theme.fontTitle} ${
                theme.isUppercaseTitles ? 'uppercase tracking-wider font-extrabold' : 'font-bold'
              }`}
            >
              Sonha com um bolo único para o seu{' '}
              <em className={`not-italic ${theme.classes.atelieHighlight}`}>dia inesquecível?</em>
            </h2>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed opacity-90">
              Criamos projetos personalizados para casamentos, aniversários e comemorações
              especiais. Massas nobres estruturadas, recheios aveludados e decorações autorais com
              flores naturais ou pintura botânica.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  openOrderDemo(
                    null,
                    'um projeto de bolo personalizado para o meu evento',
                    'whatsapp'
                  )
                }
                className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold transition-transform hover:-translate-y-0.5 cursor-pointer ${theme.classes.atelieBtn}`}
              >
                Planejar meu bolo com a confeiteira <Send className="size-4" />
              </button>
            </div>
          </div>

          <div
            className={`relative hidden aspect-square overflow-hidden border p-3 sm:block ${
              currentTheme === 'chocolatier'
                ? 'rounded-2xl border-2 border-[#e5b567]/50 shadow-gold-glow'
                : 'rounded-3xl border-2 border-[#f4cbd1]/50 shadow-xl shadow-[#db7a83]/20'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=85"
              alt="Detalhe de bolo de festa artesanal"
              className={`size-full object-cover ${
                currentTheme === 'chocolatier' ? 'rounded-xl' : 'rounded-2xl'
              }`}
            />
            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 text-xs font-bold shadow-lg whitespace-nowrap ${
                currentTheme === 'chocolatier'
                  ? 'rounded-xl border border-[#e5b567]/50 bg-[#1c100a] text-[#e5b567] shadow-gold-glow'
                  : 'rounded-full bg-white text-[#b84855] border border-[#f4cbd1] shadow-md'
              }`}
            >
              ✨ Projetos 100% Autorais
            </div>
          </div>
        </div>
      </section>

      {/* Destaques de Logística, Conservação e Ateliê */}
      <section
        id="diferenciais"
        className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Entrega */}
          <div
            className={`p-7 transition-all ${theme.classes.featureCard} ${theme.classes.featureCard1}`}
          >
            <Truck className={`mb-5 size-7 ${theme.classes.accentText}`} />
            <h3
              className={`${theme.fontTitle} text-2xl font-bold ${
                theme.isUppercaseTitles ? 'uppercase tracking-wider text-lg' : ''
              }`}
            >
              Entrega Segura & Delivery
            </h3>
            <p
              className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'chocolatier' ? 'text-[#c7a98b]' : 'text-[#6e4e54]'
              }`}
            >
              Caixas reforçadas com base antiderrapante para bolos e fatias chegarem impecáveis. Peça
              pelo WhatsApp da loja, ou receba rápido via iFood e 99Food.
            </p>
          </div>

          {/* Card 2: Conservação */}
          <div
            className={`p-7 transition-all ${theme.classes.featureCard} ${theme.classes.featureCard2}`}
          >
            <Clock3 className={`mb-5 size-7 ${theme.classes.accentText}`} />
            <h3
              className={`${theme.fontTitle} text-2xl font-bold ${
                theme.isUppercaseTitles ? 'uppercase tracking-wider text-lg' : ''
              }`}
            >
              Guia de Degustação
            </h3>
            <p
              className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'chocolatier' ? 'text-[#c7a98b]' : 'text-[#6e4e54]'
              }`}
            >
              Mantenha refrigerado e retire da geladeira 30 minutos antes de servir. O creme atinge o
              ponto máximo de aveludamento.
            </p>
          </div>

          {/* Card 3: Retirada */}
          <div
            className={`p-7 transition-all ${theme.classes.featureCard} ${theme.classes.featureCard3}`}
          >
            <MapPin className={`mb-5 size-7 ${theme.classes.accentText}`} />
            <h3
              className={`${theme.fontTitle} text-2xl font-bold ${
                theme.isUppercaseTitles ? 'uppercase tracking-wider text-lg' : ''
              }`}
            >
              Retirada no Ateliê
            </h3>
            <p
              className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'chocolatier' ? 'text-[#c7a98b]' : 'text-[#6e4e54]'
              }`}
            >
              {siteConfig.address.full}
              <br />
              {siteConfig.hours.weekdays}
            </p>
            <button
              onClick={() => openOrderDemo(null, 'como chegar para retirar meu pedido no ateliê')}
              className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold cursor-pointer ${theme.classes.accentText}`}
            >
              Ver localização no mapa <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Depoimentos & Prova Social */}
      <section
        id="depoimentos"
        className={`relative z-10 px-5 py-16 lg:px-8 lg:py-20 transition-colors duration-300 ${theme.classes.testimonialsBg}`}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={`mx-auto mb-12 max-w-xl text-center p-6 sm:p-8 rounded-3xl backdrop-blur-md border transition-all ${
              currentTheme === 'chocolatier'
                ? 'bg-[#140b07]/90 border-[#e5b567]/25 shadow-xl'
                : 'bg-white/95 border-[#f4cbd1] shadow-lg shadow-[#db7a83]/10'
            }`}
          >
            <p
              className={`mb-2 text-xs font-bold uppercase tracking-widest ${
                currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#b84855]'
              }`}
            >
              Experiência Comprovada
            </p>
            <h2
              className={`${theme.fontTitle} text-3xl sm:text-4xl tracking-tight font-bold`}
            >
              Afeto que dá vontade de{' '}
              <em className={`not-italic ${theme.classes.accentText}`}>repetir.</em>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  '“Os bolos no pote e o bombom de uva verde são de outro mundo! Doce na medida exata, muito cremoso e super recheado. Peço sempre para a sobremesa da família.”',
                author: 'Mariana Castilho',
                event: 'Avaliação 5 Estrelas no Google',
              },
              {
                quote:
                  '“Atendimento nota mil pelo WhatsApp para encomendar bolo de aniversário. Chegou super pontual, embalagem impecável e a fatia de Ferrero Rocher fez o maior sucesso!”',
                author: 'Lucas F. Silveira',
                event: 'Cliente Água Verde (Google)',
              },
              {
                quote:
                  '“A melhor doceria do Água Verde! O morango cravejado e a taça de brownie com Nutella são sensacionais. Dá para sentir o capricho e carinho em cada detalhe.”',
                author: 'Beatriz Zanin',
                event: 'Avaliação 5 Estrelas no Google',
              },
            ].map((dep) => (
              <div
                key={dep.author}
                className={`flex flex-col justify-between p-7 ${theme.classes.testimonialCard}`}
              >
                <div>
                  <Quote className={`size-6 ${theme.classes.accentText}`} />
                  <p
                    className={`mt-4 text-base leading-relaxed ${theme.fontTitle} ${
                      theme.isUppercaseTitles ? 'text-sm' : ''
                    }`}
                  >
                    {dep.quote}
                  </p>
                </div>
                <div
                  className={`mt-6 border-t pt-4 ${
                    currentTheme === 'chocolatier' ? 'border-[#e5b567]/20' : 'border-[#f4cbd1]'
                  }`}
                >
                  <strong
                    className={`block text-xs font-bold ${theme.classes.accentText} ${
                      theme.isUppercaseTitles ? 'uppercase font-mono' : ''
                    }`}
                  >
                    {dep.author}
                  </strong>
                  <span className="text-[11px] opacity-75">{dep.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes (FAQ) */}
      <section
        id="duvidas"
        className="relative z-10 mx-auto max-w-3xl scroll-mt-20 px-5 py-16 lg:py-24"
      >
        <div
          className={`mx-auto mb-10 max-w-xl text-center p-6 sm:p-7 rounded-3xl backdrop-blur-md border transition-all ${
            currentTheme === 'chocolatier'
              ? 'bg-[#140b07]/90 border-[#e5b567]/25 shadow-xl'
              : 'bg-white/95 border-[#f4cbd1] shadow-lg shadow-[#db7a83]/10'
          }`}
        >
          <p
            className={`mb-2 text-xs font-bold uppercase tracking-widest ${
              currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#b84855]'
            }`}
          >
            Antes de Fazer o Pedido
          </p>
          <h2
            className={`${theme.fontTitle} text-3xl sm:text-4xl font-bold`}
          >
            Dúvidas Frequentes
          </h2>
        </div>

        <div className={`px-6 ${theme.classes.faqContainer}`}>
          {[
            {
              question: 'Com quantos dias de antecedência devo fazer minha encomenda?',
              answer:
                'Para bolos vulcão, tortas inteiras e encomendas comemorativas, recomendamos de 2 a 4 dias de antecedência pelo WhatsApp. Para fatias, taças e doces do dia, você pode pedir pelo WhatsApp ou iFood com entrega expressa para hoje.',
            },
            {
              question: 'Como funciona a entrega ou retirada em Curitiba?',
              answer:
                'Você pode retirar seu pedido em nossa loja no bairro Água Verde (Rua Maranhão, 1031) ou pedir pelo iFood e WhatsApp com entrega rápida por motoboy para diversos bairros de Curitiba.',
            },
            {
              question: 'Quais são os diferenciais dos chocolates da Doce Castelo?',
              answer:
                'Utilizamos chocolates nobres com teor mínimo de 50% cacau, Nutella pura e frutas frescas selecionadas no dia, sem adição de gordura hidrogenada.',
            },
            {
              question: 'Quais são as formas de pagamento aceitas?',
              answer:
                'Aceitamos Pix, cartões de crédito e débito, além das formas de pagamento disponíveis diretamente pelo aplicativo do iFood.',
            },
          ].map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-4 text-base sm:text-lg font-semibold ${theme.fontTitle} ${
                  theme.isUppercaseTitles ? 'uppercase tracking-wider text-sm sm:text-base' : ''
                }`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`size-5 shrink-0 transition-transform group-open:rotate-180 ${theme.classes.accentText}`}
                />
              </summary>
              <p
                className={`max-w-2xl pt-3 text-xs sm:text-sm leading-relaxed ${
                  currentTheme === 'chocolatier' ? 'text-[#c7a98b]' : 'text-[#6e4e54]'
                }`}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`relative z-10 px-5 pb-28 pt-14 transition-colors duration-300 sm:pb-14 lg:px-8 ${theme.classes.footerBg} ${theme.classes.footerText}`}
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-doce-castelo.webp"
                alt={siteConfig.name}
                className="size-11 rounded-full object-cover border border-[#d4a373]/40 shadow-sm"
              />
              <span className={`text-2xl font-bold text-white ${theme.fontTitle}`}>
                {siteConfig.name}
              </span>
            </div>
            <p
              className={`mt-4 max-w-xs text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'chocolatier' ? 'text-[#c4a17b]' : 'text-[#cdb9ad]'
              }`}
            >
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-2.5">
              <button
                onClick={() => openOrderDemo(null, 'gostaria de acompanhar o Instagram do ateliê')}
                aria-label="Instagram"
                className={`flex items-center gap-2 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20 cursor-pointer ${theme.classes.buttonRadius}`}
              >
                <InstagramIcon className="size-4" />
                <span>{siteConfig.social.instagramHandle}</span>
              </button>
            </div>
          </div>

          <div>
            <h3
              className={`mb-3 text-xs font-bold uppercase tracking-widest ${
                currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#f4cbd1]'
              }`}
            >
              Ateliê & Retirada
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'chocolatier' ? 'text-[#c4a17b]' : 'text-[#cdb9ad]'
              }`}
            >
              {siteConfig.address.full}
              <br />
              {siteConfig.hours.weekdays}
            </p>
          </div>

          <div>
            <h3
              className={`mb-3 text-xs font-bold uppercase tracking-widest ${
                currentTheme === 'chocolatier' ? 'text-[#e5b567]' : 'text-[#f4cbd1]'
              }`}
            >
              Canais de Pedido
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                currentTheme === 'chocolatier' ? 'text-[#c4a17b]' : 'text-[#cdb9ad]'
              }`}
            >
              Atendimento ágil para pedidos no WhatsApp Loja e entrega expressa pelo iFood e 99Food.
            </p>
            <p className="mt-3 text-[11px] opacity-75">
              Rua Maranhão, 1031 • Água Verde, Curitiba
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs opacity-75">
          © {new Date().getFullYear()} {siteConfig.name} · Água Verde, Curitiba - PR
        </div>
      </footer>

      {/* Floating Action Bar on Mobile */}
      <div className="fixed inset-x-3 bottom-4 z-30 flex items-center gap-2 sm:hidden">
        <button
          onClick={() => openOrderDemo(null, undefined, 'whatsapp')}
          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-3 text-xs font-bold text-white shadow-xl shadow-black/20 ${
            currentTheme === 'chocolatier'
              ? 'rounded-xl bg-gradient-to-r from-[#d4a373] to-[#e5b567] text-[#140b07] font-extrabold border border-[#e5b567]/50'
              : 'rounded-full bg-[#25d366]'
          }`}
        >
          <MessageCircle className="size-4 shrink-0" />
          <span className="truncate">Pedir no WhatsApp</span>
        </button>

        <button
          onClick={() => openOrderDemo(null, undefined, 'ifood')}
          className={`flex items-center justify-center px-3 py-3 text-white shadow-xl shadow-black/20 font-bold text-xs gap-1 ${
            currentTheme === 'chocolatier'
              ? 'rounded-xl border border-[#e5b567]/50 bg-[#ea1d2c]'
              : 'rounded-full bg-[#ea1d2c]'
          }`}
          aria-label="Pedir no iFood"
          title="iFood"
        >
          <ShoppingBag className="size-4 shrink-0" />
          <span className="text-[11px] font-semibold">iFood</span>
        </button>

        <button
          onClick={() => openOrderDemo(null, undefined, '99food')}
          className={`flex items-center justify-center px-3 py-3 text-white shadow-xl shadow-black/20 font-bold text-xs gap-1 ${
            currentTheme === 'chocolatier'
              ? 'rounded-xl border border-[#e5b567]/50 bg-[#ff5e00]'
              : 'rounded-full bg-[#ff5e00]'
          }`}
          aria-label="Pedir no 99Food"
          title="99Food"
        >
          <UtensilsCrossed className="size-4 shrink-0" />
          <span className="text-[11px] font-semibold">99Food</span>
        </button>
      </div>

      {/* Style Theme Switcher Widget (Floating Pill) */}
      <ThemeSwitcher
        currentTheme={currentTheme}
        onSelectTheme={(newTheme) => setCurrentTheme(newTheme)}
      />

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenOrderModal={(req) => openOrderDemo(null, req)}
        theme={theme}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={selectedProductForQuickView}
        onClose={() => setSelectedProductForQuickView(null)}
        onOrderWhatsApp={(prod) => {
          setSelectedProductForQuickView(null)
          openOrderDemo(prod, undefined, 'whatsapp')
        }}
        onOrderIfood={(prod) => {
          setSelectedProductForQuickView(null)
          openOrderDemo(prod, undefined, 'ifood')
        }}
        onOrder99Food={(prod) => {
          setSelectedProductForQuickView(null)
          openOrderDemo(prod, undefined, '99food')
        }}
        theme={theme}
      />

      {/* Commercial Demo Order Modal */}
      <DemoOrderModal
        isOpen={orderModalData.isOpen}
        onClose={closeOrderDemo}
        product={orderModalData.product}
        customRequest={orderModalData.customRequest}
        channel={orderModalData.channel}
      />
    </main>
  )
}
