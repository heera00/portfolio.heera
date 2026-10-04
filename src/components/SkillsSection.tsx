import { skillGroups } from '../data/portfolio'
import { Section } from './Section'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools and technologies I use to build, secure, and deploy projects.">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <h3 className="mb-3 font-semibold text-cyan-300">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
