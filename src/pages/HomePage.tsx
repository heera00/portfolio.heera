import { Award, GraduationCap, Mail, MapPin, Shield } from 'lucide-react'
import { siteConfig } from '../config/site'
import {
  aboutText,
  achievements,
  cybersecurityInterests,
  learningNow,
} from '../data/portfolio'
import { BackToTop } from '../components/BackToTop'
import { HeroSection } from '../components/HeroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { Section } from '../components/Section'
import { SkillsSection } from '../components/SkillsSection'

type HomePageProps = {
  onJumpTo: (id: string) => void
}

export function HomePage({ onJumpTo }: HomePageProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
      <HeroSection onViewProjects={() => onJumpTo('projects')} onContact={() => onJumpTo('contact')} />

      <Section id="about" title="About" subtitle="Builder mindset with curiosity across software and security.">
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">{aboutText}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <MapPin size={14} /> {siteConfig.location}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <GraduationCap size={14} /> {siteConfig.education}
          </span>
        </div>
      </Section>

      <Section id="education" title="Education">
        <article className="rounded-xl border border-white/10 bg-slate-900/40 p-4 text-sm text-slate-200 md:text-base">
          NIT Manipur — B.Tech CSE — 3rd Semester.
        </article>
      </Section>

      <SkillsSection />

      <ProjectsSection />

      <Section id="cybersecurity" title="Cybersecurity" subtitle="Focused learning and practice across secure systems and network fundamentals.">
        <div className="flex flex-wrap gap-2">
          {cybersecurityInterests.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100"
            >
              <Shield size={13} /> {item}
            </span>
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements">
        <div className="grid gap-3 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article key={achievement.title} className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-200 md:text-base">
                <Award size={16} /> {achievement.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">{achievement.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="learning" title="Currently Learning">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {learningNow.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-sm text-slate-300">Open to collaborations, projects, and learning opportunities.</p>
        <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span className="mb-1 inline-flex items-center gap-2 font-semibold text-cyan-200">
              <Mail size={14} /> Email
            </span>
            <p>{siteConfig.email}</p>
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span className="font-semibold text-cyan-200">GitHub</span>
            <p className="mt-1 break-all text-xs md:text-sm">{siteConfig.github}</p>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span className="font-semibold text-cyan-200">LinkedIn</span>
            <p className="mt-1 break-all text-xs md:text-sm">{siteConfig.linkedin}</p>
          </a>
        </div>
      </Section>

      <footer className="rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-6 text-center">
        <p className="text-base font-semibold text-white">{siteConfig.name}</p>
        <p className="mt-1 text-sm text-slate-300">{siteConfig.tagline}</p>
        <p className="mt-3 text-sm text-cyan-200">Developed with ❤️ by Heera Wahengbam</p>
      </footer>

      <BackToTop />
    </main>
  )
}
