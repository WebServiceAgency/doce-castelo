'use client'

import { X, MessageCircle, ShoppingBag, MapPin, Clock, UtensilsCrossed, GraduationCap, Flame, ExternalLink } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { siteConfig } from '@/config/site'
import { ThemeConfig } from '@/types/theme'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenOrderModal: (customRequest?: string) => void
  theme: ThemeConfig
}

export function MobileMenu({ isOpen, onClose, onOpenOrderModal, theme }: MobileMenuProps) {
  if (!isOpen) return null

  const navLinks = [
    { label: 'Cardápio / Vitrine', href: '#vitrine' },
    { label: 'Cursos & Grupo VIP', href: '#comunidade' },
    { label: 'Bolos de Festa & Encomendas', href: '#atelie' },
    { label: 'Como Entregamos (iFood & 99)', href: '#diferenciais' },
    { label: 'Avaliações no Google', href: '#depoimentos' },
    { label: 'Dúvidas Frequentes', href: '#duvidas' },
  ]

  const handleLinkClick = (href: string) => {
    onClose()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide Drawer */}
      <div className="relative z-10 ml-auto flex h-full w-[85%] max-w-sm flex-col justify-between overflow-y-auto bg-white p-6 shadow-2xl transition-transform">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#f0e4d9] pb-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-doce-castelo.webp"
                alt="Doce Castelo"
                className="size-11 rounded-full object-cover border border-[#d4a373] shadow-sm"
              />
              <div>
                <strong className={`block text-xl leading-none ${theme.classes.logoText}`}>
                  {siteConfig.name}
                </strong>
                <small className="text-[10px] uppercase tracking-widest text-[#8c7465]">
                  {siteConfig.tagline}
                </small>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 text-[#4a3428] hover:bg-[#ebdccf] ${theme.classes.buttonRadius}`}
              aria-label="Fechar menu"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Status Badge */}
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{siteConfig.hours.statusBadge}</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#4a3428] transition-colors hover:bg-[#fbf6f0] hover:text-[#8b263e]"
              >
                <span>{link.label}</span>
                <span className="text-[#c1ab9e]">→</span>
              </button>
            ))}
          </nav>

          {/* Delivery & Direct Actions */}
          <div className="mt-5 space-y-2 border-t border-[#f0e4d9] pt-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#8c7465]">
              Canais Oficiais do Linktree
            </p>

            {/* WhatsApp Atendimento */}
            <a
              href={siteConfig.social.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-xl bg-[#25d366] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20ba59]"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="size-4" />
                Atendimento Loja no WhatsApp
              </span>
              <ExternalLink className="size-3.5 opacity-80" />
            </a>

            {/* iFood */}
            <a
              href={siteConfig.social.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-xl bg-[#ea1d2c] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#d41423]"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="size-4" />
                Delivery iFood
              </span>
              <ExternalLink className="size-3.5 opacity-80" />
            </a>

            {/* 99Food */}
            <a
              href={siteConfig.social.food99Url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-xl border border-amber-400 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800 transition-all hover:bg-amber-100"
            >
              <span className="flex items-center gap-2">
                <UtensilsCrossed className="size-4 text-amber-600" />
                Delivery 99Food
              </span>
              <ExternalLink className="size-3.5 opacity-80" />
            </a>

            {/* Cursos */}
            <a
              href={siteConfig.social.cursosWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-xl border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold text-orange-800 transition-all hover:bg-orange-100"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="size-4 text-orange-600" />
                Cursos de Confeitaria
              </span>
              <ExternalLink className="size-3.5 opacity-80" />
            </a>

            {/* Grupo Promoções */}
            <a
              href={siteConfig.social.promoGroupWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between rounded-xl border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold text-pink-800 transition-all hover:bg-pink-100"
            >
              <span className="flex items-center gap-2">
                <Flame className="size-4 text-pink-600" />
                Grupo VIP de Promoções
              </span>
              <ExternalLink className="size-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Footer info in mobile drawer */}
        <div className="mt-6 border-t border-[#f0e4d9] pt-4 text-xs text-[#7d6555] space-y-1.5">
          <div className="flex items-start gap-2">
            <MapPin className="size-4 shrink-0 text-[#8b263e] mt-0.5" />
            <span>{siteConfig.address.full}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-[#8b263e]" />
            <span>{siteConfig.hours.weekdays}</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <InstagramIcon className="size-4 shrink-0 text-[#8b263e]" />
            <span className="font-semibold">{siteConfig.social.instagramHandle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
