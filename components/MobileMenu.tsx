'use client'

import { X, MessageCircle, ShoppingBag, MapPin, Clock, CakeSlice } from 'lucide-react'
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
    { label: 'Vitrine de Hoje', href: '#vitrine' },
    { label: 'Bolos de Festa & Encomendas', href: '#atelie' },
    { label: 'Diferenciais & Conservação', href: '#diferenciais' },
    { label: 'Quem Prova, Volta', href: '#depoimentos' },
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
              <span className={`flex size-10 items-center justify-center ${theme.classes.logoShape} ${theme.classes.logoBg} ${theme.classes.logoColor}`}>
                <CakeSlice className="size-5" />
              </span>
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
          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#4a3428] transition-colors hover:bg-[#fbf6f0] hover:text-[#8b263e]"
              >
                <span>{link.label}</span>
                <span className="text-[#c1ab9e]">→</span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="mt-6 space-y-2 border-t border-[#f0e4d9] pt-5">
            <button
              onClick={() => {
                onClose()
                onOpenOrderModal()
              }}
              className={`flex w-full items-center justify-center gap-2 bg-[#25d366] px-4 py-3 text-xs font-bold text-white shadow-md shadow-[#25d366]/20 transition-all hover:bg-[#20ba59] ${theme.classes.buttonRadius}`}
            >
              <MessageCircle className="size-4" />
              Fazer Pedido no WhatsApp
            </button>

            <button
              onClick={() => {
                onClose()
                onOpenOrderModal('ifood')
              }}
              className={`flex w-full items-center justify-center gap-2 bg-[#ea1d2c] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#ea1d2c]/20 transition-all hover:bg-[#d41423] ${theme.classes.buttonRadius}`}
            >
              <ShoppingBag className="size-4" />
              Pedir pelo iFood
            </button>
          </div>
        </div>

        {/* Footer info in mobile drawer */}
        <div className="mt-8 border-t border-[#f0e4d9] pt-4 text-xs text-[#7d6555] space-y-2">
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

