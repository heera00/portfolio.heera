import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  title: string
  subtitle?: string
  className?: string
}>

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8 ${className ?? ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="mb-5">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-slate-300 md:text-base">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  )
}
