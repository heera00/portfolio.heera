import { motion } from 'framer-motion'
import { ArrowDownToLine, FolderOpen, Mail } from 'lucide-react'
import { siteConfig } from '../config/site'
import { heroIntro } from '../data/portfolio'

type HeroProps = {
  onViewProjects: () => void
  onContact: () => void
}

export function HeroSection({ onViewProjects, onContact }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden rounded-2xl border border-white/10 bg-glow p-7 md:p-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/15" />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-cyan-300">Portfolio</p>
        <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">{siteConfig.title}</h1>
        <p className="mt-3 text-lg text-slate-200 md:text-xl">{siteConfig.subtitle}</p>
        <p className="mt-2 text-sm text-cyan-200 md:text-base">Developer • Cybersecurity Enthusiast • Builder</p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{heroIntro}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onViewProjects}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <FolderOpen size={16} />
            View Projects
          </button>
          <a
            href={siteConfig.resume}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <ArrowDownToLine size={16} />
            Download Resume
          </a>
          <button
            type="button"
            onClick={onContact}
            className="inline-flex items-center gap-2 rounded-full border border-purple-300/30 bg-purple-400/15 px-5 py-2.5 text-sm font-semibold text-purple-100 transition hover:bg-purple-400/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  )
}
