import { useEffect, useMemo, useState } from 'react'
import { Navbar } from './components/Navbar'
import { navItems } from './config/site'
import { HomePage } from './pages/HomePage'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const jumpToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const appClass = useMemo(
    () =>
      theme === 'dark'
        ? 'min-h-screen bg-surface-950 text-slate-100'
        : 'min-h-screen bg-slate-100 text-slate-900',
    [theme],
  )

  return (
    <div className={appClass}>
      <Navbar items={navItems} theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
      <HomePage onJumpTo={jumpToSection} />
    </div>
  )
}

export default App
