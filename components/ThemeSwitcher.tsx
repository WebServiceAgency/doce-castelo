'use client'

import { useState } from 'react'
import { Palette, ChevronDown, ChevronUp, Sparkles, Check } from 'lucide-react'
import { ThemeStyle, themeConfigs } from '@/types/theme'

interface ThemeSwitcherProps {
  currentTheme: ThemeStyle
  onSelectTheme: (theme: ThemeStyle) => void
}

export function ThemeSwitcher({ currentTheme, onSelectTheme }: ThemeSwitcherProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const activeConfig = themeConfigs[currentTheme]

  const themes: { id: ThemeStyle; name: string; emoji: string }[] = [
    { id: 'premium', name: 'Premium', emoji: '👑' },
    { id: 'retro', name: 'Retrô', emoji: '🌸' },
    { id: 'minimalist', name: 'Contemporânea', emoji: '🖤' },
    { id: 'chocolatier', name: 'Chocolatier', emoji: '🍫' },
    { id: 'parisienne', name: 'Parisienne', emoji: '🥐' },
  ]

  return (
    <aside aria-label="Seletor de Estilo Visual" className="fixed bottom-20 left-4 z-40 sm:bottom-6 sm:left-6">
      {/* Expanded Menu Panel */}
      {isExpanded && (
        <div className="mb-2 w-64 overflow-hidden rounded-2xl border border-white/20 bg-black/90 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white/90">
              <Sparkles className="size-3.5 text-amber-400" />
              <span>Estilo da Confeitaria</span>
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">5 Estilos</span>
          </div>

          <div className="mt-2.5 space-y-1.5">
            {themes.map((t) => {
              const isSelected = currentTheme === t.id
              const config = themeConfigs[t.id]
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTheme(t.id)
                    setIsExpanded(false)
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-zinc-950 font-bold shadow-md'
                      : 'bg-white/10 text-white/90 font-medium hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{t.emoji}</span>
                    <div>
                      <span className="block text-xs font-bold leading-tight">{t.name}</span>
                      <span className={`block text-[10px] line-clamp-1 ${isSelected ? 'text-zinc-600' : 'text-white/60'}`}>
                        {config.vibe.split('·')[0]}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="size-4 text-emerald-600 shrink-0" />}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Main Pill Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/90 px-4 py-2.5 text-xs font-bold text-white shadow-2xl shadow-black/40 backdrop-blur-md transition-all hover:scale-105 hover:bg-zinc-900 active:scale-95 cursor-pointer"
        title="Alternar estilo da confeitaria"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-amber-500 text-zinc-950 text-xs shadow-sm">
          <Palette className="size-3.5" />
        </span>
        <span className="hidden sm:inline text-xs font-medium text-white/70">Estilo:</span>
        <strong className="text-xs font-extrabold text-white">{activeConfig.name}</strong>
        {isExpanded ? (
          <ChevronDown className="size-3.5 text-white/70" />
        ) : (
          <ChevronUp className="size-3.5 text-white/70" />
        )}
      </button>
    </aside>
  )
}
