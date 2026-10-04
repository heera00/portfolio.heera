import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 rounded-full border border-cyan-300/40 bg-surface-900/90 p-3 text-cyan-200 shadow-glass transition hover:bg-surface-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  )
}
