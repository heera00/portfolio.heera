import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { NavItem } from '../types'
import { ThemeToggle } from './ThemeToggle'

type NavbarProps = {
  items: NavItem[]
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Navbar({ items, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6" aria-label="Primary">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="text-sm font-semibold tracking-wide text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Heera Wahengbam
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="rounded-md border border-white/15 p-2 text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="space-y-1 border-t border-white/10 bg-surface-900/95 px-4 py-3 md:hidden">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className="block w-full rounded-md px-3 py-2 text-left text-sm text-slate-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  )
}
