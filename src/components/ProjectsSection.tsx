import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projectFilters, projects, type ProjectFilter } from '../data/portfolio'
import type { Project } from '../types'
import { Section } from './Section'

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects
    }
    return projects.filter((project) => project.category === filter)
  }, [filter])

  return (
    <Section id="projects" title="Projects" subtitle="Selected work with real-world features and scalable architecture.">
      <div className="mb-5 flex flex-wrap gap-2">
        {projectFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
              filter === item.id
                ? 'bg-cyan-500 text-slate-950'
                : 'border border-white/15 bg-white/5 text-slate-200 hover:bg-white/15'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`group rounded-xl border p-4 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 ${
              project.featured ? 'border-cyan-300/35 bg-cyan-500/5 md:col-span-2' : 'border-white/10 bg-slate-900/40'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              {project.featured ? (
                <span className="rounded-full border border-cyan-300/35 bg-cyan-500/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan-100">
                  Featured
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/40 px-3 py-1.5 text-xs text-cyan-100 hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <ExternalLink size={14} /> Demo
              </a>
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="inline-flex items-center gap-1.5 rounded-md border border-purple-300/35 px-3 py-1.5 text-xs text-purple-100 hover:bg-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
              >
                Details
              </button>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-surface-900 p-6 shadow-glass"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 id="project-modal-title" className="text-xl font-semibold text-white">
                  {activeProject.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-md p-1.5 text-slate-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-sm text-slate-300">{activeProject.details}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
                {activeProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
