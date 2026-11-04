'use client'

import { X, MessageCircle, ShoppingBag, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react'
import { Product } from '@/data/products'
import { siteConfig } from '@/config/site'

interface DemoOrderModalProps {
  isOpen: boolean
  onClose: () => void
  product?: Product | null
  customRequest?: string
  channel?: 'whatsapp' | 'ifood'
}

export function DemoOrderModal({
  isOpen,
  onClose,
  product,
  customRequest,
  channel = 'whatsapp',
}: DemoOrderModalProps) {
  if (!isOpen) return null

  const isIfoodSelected = channel === 'ifood'

  const messageText = product
    ? `Olá, ${siteConfig.name}! Vim pelo site e gostaria de pedir o item "${product.name}" (${product.price}). Poderiam me informar a disponibilidade e taxa de entrega para Curitiba?`
    : customRequest
      ? `Olá, ${siteConfig.name}! Gostaria de consultar a disponibilidade para ${customRequest}. Vi as opções no site!`
      : `Olá, ${siteConfig.name}! Vim pelo site e gostaria de fazer um pedido ou consultar as fatias disponíveis no dia.`

  const whatsappUrl = `https://wa.me/${siteConfig.social.whatsapp}?text=${encodeURIComponent(messageText)}`
  const ifoodUrl = siteConfig.social.ifoodUrl

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
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#d4a373] text-[#2c1810] text-xs font-bold">
                <Sparkles className="size-3.5" />
              </span>
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
            <p className="font-semibold text-[#8b263e]">✨ Pedido Rápido e Direto:</p>
            <p className="mt-1">
              Escolha abaixo como prefere ser atendido: converse diretamente com a nossa equipe no <strong>WhatsApp</strong> para encomendas e reservas ou peça pelo <strong>iFood</strong> com entrega expressa.
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="rounded-2xl border border-[#d2eed9] bg-[#f0fbf3] p-4 text-left">
            <div className="flex items-center justify-between border-b border-[#c1e6cb] pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <MessageCircle className="size-3.5" />
                </span>
                <span className="text-xs font-bold text-[#14532d]">Atendimento no WhatsApp:</span>
              </div>
              <span className="rounded-full bg-[#25d366]/20 px-2 py-0.5 text-[10px] font-semibold text-[#14532d]">
                Loja Água Verde
              </span>
            </div>

            {/* Simulated Chat Bubble */}
            <div className="mt-3 rounded-2xl rounded-tl-sm bg-white p-3.5 shadow-sm text-xs leading-relaxed text-[#1f2937] border border-[#e5e7eb]">
              <p className="text-[#374151] font-medium">{messageText}</p>
              <span className="mt-2 block text-right text-[10px] text-gray-400">
                {siteConfig.social.whatsappFormatted}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1 text-xs text-[#523e33]">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              <span>Retirada no balcão: {siteConfig.address.street} - Água Verde</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              <span>Disponível também com entrega rápida pelo iFood</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#eadfd5] bg-[#fcf9f5] px-6 py-4">
          <a
            href={ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-red-500 bg-red-50 px-5 py-2.5 text-xs font-bold text-[#ea1d2c] shadow-sm transition-all hover:bg-red-100 cursor-pointer"
          >
            <ShoppingBag className="size-4" />
            <span>Pedir no iFood</span>
            <ExternalLink className="size-3 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20ba59] cursor-pointer"
          >
            <MessageCircle className="size-4" />
            <span>Chamar no WhatsApp</span>
            <ExternalLink className="size-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  )
}
