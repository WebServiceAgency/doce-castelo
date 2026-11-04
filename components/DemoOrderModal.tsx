'use client'

import { X, MessageCircle, ShoppingBag, Sparkles, CheckCircle2, ExternalLink, UtensilsCrossed } from 'lucide-react'
import { Product } from '@/data/products'
import { siteConfig } from '@/config/site'

interface DemoOrderModalProps {
  isOpen: boolean
  onClose: () => void
  product?: Product | null
  customRequest?: string
  channel?: 'whatsapp' | 'ifood' | '99food'
}

export function DemoOrderModal({
  isOpen,
  onClose,
  product,
  customRequest,
  channel = 'whatsapp',
}: DemoOrderModalProps) {
  if (!isOpen) return null

  const messageText = product
    ? `Olá, ${siteConfig.name}! Vim pelo site e gostaria de pedir o item "${product.name}" (${product.price}). Poderiam me informar a disponibilidade e taxa de entrega para Curitiba?`
    : customRequest
      ? `Olá, ${siteConfig.name}! Gostaria de consultar a disponibilidade para ${customRequest}. Vi as opções no site!`
      : `Olá, ${siteConfig.name}! Vim pelo site e gostaria de fazer um pedido ou consultar as fatias disponíveis no dia.`

  const whatsappUrl = siteConfig.social.whatsappLink
  const ifoodUrl = siteConfig.social.ifoodUrl
  const food99Url = siteConfig.social.food99Url

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white text-[#2c1810] shadow-2xl transition-all">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#2c1810] via-[#4a261a] to-[#2c1810] px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-doce-castelo.webp"
                alt="Doce Castelo"
                className="size-8 rounded-full object-cover border border-[#d4a373]"
              />
              <div>
                <h3 className="font-serif text-lg font-bold tracking-tight">Atendimento & Pedidos</h3>
                <p className="text-[11px] text-[#dfcfc4]">{siteConfig.name} • Água Verde, Curitiba</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white cursor-pointer"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-4 p-6">
          {/* Informative Explanation */}
          <div className="rounded-2xl border border-[#eadfd5] bg-[#fbf8f4] p-4 text-xs leading-relaxed text-[#6f5647]">
            <p className="font-semibold text-[#8b263e]">✨ Escolha o seu canal preferido de pedido:</p>
            <p className="mt-1">
              Atendimento direto no WhatsApp oficial da loja, ou peça no delivery rápido através do <strong>iFood</strong> e <strong>99Food</strong>.
            </p>
          </div>

          {/* Delivery Platforms Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50/80 p-3 text-xs font-bold text-[#ea1d2c] transition-all hover:bg-red-100"
            >
              <ShoppingBag className="size-4 shrink-0" />
              <span>Pedir no iFood</span>
              <ExternalLink className="size-3 opacity-60 ml-auto" />
            </a>

            <a
              href={food99Url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-amber-300 bg-amber-50/80 p-3 text-xs font-bold text-[#b45309] transition-all hover:bg-amber-100"
            >
              <UtensilsCrossed className="size-4 shrink-0 text-amber-600" />
              <span>Pedir no 99Food</span>
              <ExternalLink className="size-3 opacity-60 ml-auto" />
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="rounded-2xl border border-[#d2eed9] bg-[#f0fbf3] p-4 text-left">
            <div className="flex items-center justify-between border-b border-[#c1e6cb] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <MessageCircle className="size-3.5" />
                </span>
                <span className="text-xs font-bold text-[#14532d]">Atendimento Loja no WhatsApp:</span>
              </div>
              <span className="rounded-full bg-[#25d366]/20 px-2 py-0.5 text-[10px] font-semibold text-[#14532d]">
                Link Oficial
              </span>
            </div>

            <div className="mt-3 rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-sm text-xs leading-relaxed text-[#1f2937] border border-[#e5e7eb]">
              <p className="text-[#374151] font-medium">{messageText}</p>
              <span className="mt-2 block text-right text-[10px] text-gray-400">
                {siteConfig.social.whatsappFormatted} • Atendimento Loja
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#eadfd5] bg-[#fcf9f5] px-6 py-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
          >
            Voltar
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20ba59] cursor-pointer"
          >
            <MessageCircle className="size-4" />
            <span>Chamar Atendimento Loja</span>
            <ExternalLink className="size-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  )
}
