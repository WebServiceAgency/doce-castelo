'use client'

import { X, MessageCircle, ShoppingBag, Users, Sparkles, AlertCircle } from 'lucide-react'
import { Product } from '@/data/products'
import { ThemeConfig } from '@/types/theme'

interface QuickViewModalProps {
  product: Product | null
  onClose: () => void
  onOrderWhatsApp: (product: Product) => void
  onOrderIfood: (product: Product) => void
  theme: ThemeConfig
}

export function QuickViewModal({
  product,
  onClose,
  onOrderWhatsApp,
  onOrderIfood,
  theme,
}: QuickViewModalProps) {
  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className={`relative z-10 w-full max-w-2xl overflow-hidden bg-white text-[#2c1810] shadow-2xl transition-all ${theme.classes.cardRadius} ${theme.classes.cardBorder}`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 z-20 flex size-9 items-center justify-center bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80 ${theme.classes.buttonRadius}`}
          aria-label="Fechar"
        >
          <X className="size-4" />
        </button>

        <div className="grid max-h-[85vh] overflow-y-auto sm:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square w-full sm:aspect-auto sm:h-full bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="size-full object-cover"
            />
            <span className={`absolute left-4 top-4 px-3 py-1.5 text-[10px] font-bold ${theme.classes.tagStyle}`}>
              {product.tag}
            </span>
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <span className={`text-[11px] font-semibold uppercase tracking-widest ${theme.isUppercaseTitles ? 'font-mono text-[#dc2626]' : 'text-[#a87858]'}`}>
                  {product.category}
                </span>
                <h3 className={`mt-1 text-2xl font-bold leading-snug text-[#2c1810] ${theme.fontTitle} ${theme.isUppercaseTitles ? 'uppercase tracking-wider text-xl' : ''}`}>
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className={`text-2xl font-black ${theme.fontTitle} ${theme.classes.accentText}`}>
                    {product.price}
                  </span>
                  <span className="text-xs text-[#8c7465]">/ unidade</span>
                </div>
              </div>

              {/* Servings Info */}
              <div className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#7d5d47] ${theme.classes.buttonRadius} bg-[#faf5f0]`}>
                <Users className={`size-4 ${theme.classes.accentText}`} />
                <span>{product.size}</span>
              </div>

              {/* Detailed Description */}
              <p className="text-xs leading-relaxed text-[#6c5548]">
                {product.details}
              </p>

              {/* Key Ingredients */}
              <div>
                <h4 className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${theme.classes.accentText}`}>
                  <Sparkles className="size-3" /> Ingredientes Nobres
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className={`px-2.5 py-1 text-[11px] font-medium text-[#6e5445] bg-[#f4ece3] ${theme.classes.buttonRadius}`}
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Allergens Notice */}
              <div className={`border border-amber-200/80 bg-amber-50/70 p-2.5 text-[11px] text-amber-900 ${theme.classes.buttonRadius}`}>
                <div className="flex items-center gap-1.5 font-semibold">
                  <AlertCircle className="size-3.5 text-amber-700" />
                  <span>Atenção a Alergênicos:</span>
                </div>
                <p className="mt-1 text-[10px] text-amber-800">
                  {product.allergens.join(' · ')}
                </p>
              </div>
            </div>

            {/* Direct Order Actions */}
            <div className="mt-6 space-y-2 border-t border-[#eee4dc] pt-5">
              <button
                onClick={() => onOrderWhatsApp(product)}
                className={`flex w-full items-center justify-center gap-2 bg-[#25d366] px-4 py-3 text-xs font-bold text-white shadow-md shadow-[#25d366]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#20ba59] ${theme.classes.buttonRadius}`}
              >
                <MessageCircle className="size-4" />
                Pedir no WhatsApp (Simulação)
              </button>

              {product.availableOnIfood && (
                <button
                  onClick={() => onOrderIfood(product)}
                  className={`flex w-full items-center justify-center gap-2 bg-[#ea1d2c] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#ea1d2c]/20 transition-transform hover:-translate-y-0.5 hover:bg-[#d41423] ${theme.classes.buttonRadius}`}
                >
                  <ShoppingBag className="size-4" />
                  Pedir pelo iFood (Pronta-Entrega)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

