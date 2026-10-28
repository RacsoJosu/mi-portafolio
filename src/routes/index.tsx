import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

import { Hero } from '@/features/hero/components/Hero'
import { Experience } from '@/features/experience'
import {
  Projects,
  ProjectCard,
  ProjectDetailSheet,
  projects,
  type Project,
  type ProjectCategory,
} from '@/features/projects'
import { ImpactSection } from '@/features/impact/components/ImpactSection'
import { Skills } from '@/features/skills/components/Skills'
import { skillCategories } from '#/features/skills/components/Skills/const'
import { SkillCategoryGridCard } from '#/features/skills/components/Skills/SkillCategoryCard'
import { Contact } from '@/features/contact/components/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* ──────────── HERO SECTION ──────────── */}
      <Hero.Root id="about">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <Hero.Container>
          <Hero.Main>
            <Hero.Title>
              <span className="text-foreground">Arquitectura Backend,</span>
              <br />
              <span className="text-primary">Rendimiento & Cloud</span>
            </Hero.Title>

            <Hero.Subtitle>
              <strong className="text-foreground font-semibold">Tech Lead Software Engineer</strong> especializado en diseño modular, optimización de bases de datos
              y sistemas serverless en AWS. Liderazgo técnico con entrega activa de código,
              refactorizaciones de alto impacto y automatizaciones asistidas por IA.
            </Hero.Subtitle>

            <Hero.Actions className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Curriculum_Oscar_Vallecillo.pdf"
                download="Curriculum_Oscar_Vallecillo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download size={18} />
                Descargar CV
              </a>
              <Link
                to="/"
                hash="projects"
                className="border border-white/20 text-foreground px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors text-center font-medium"
              >
                Ver proyectos
              </Link>
            </Hero.Actions>

            <Hero.Social>
              <Hero.SocialLink href="https://github.com/RacsoJosu" aria-label="GitHub">
                <Github size={22} />
              </Hero.SocialLink>
              <Hero.SocialLink
                href="https://www.linkedin.com/in/oscar-vallecillo-938127254/"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </Hero.SocialLink>
              <Hero.SocialLink href="mailto:oscarvallecillo95@gmail.com" aria-label="Email">
                <Mail size={22} />
              </Hero.SocialLink>
            </Hero.Social>
          </Hero.Main>

          {/* Floating cards over developer image */}
          <Hero.FloatingMetrics />
        </Hero.Container>
      </Hero.Root>

      {/* ──────────── EXPERIENCIA PROFESIONAL ──────────── */}
      <Experience>
        <Experience.Header />
        <Experience.Timeline />
      </Experience>

      {/* ──────────── PROYECTOS DESTACADOS (FILTRABLES) ──────────── */}
      <Projects>
        <Projects.Header />
        <Projects.Filter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <Projects.List>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx}
                onOpenDetails={(p) => setActiveProjectModal(p)}
              />
            ))}
          </AnimatePresence>
        </Projects.List>

        {/* Panel lateral de arquitectura y detalles de ingeniería */}
        <ProjectDetailSheet
          project={activeProjectModal}
          isOpen={!!activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      </Projects>

      {/* ──────────── ENFOQUE DE INGENIERÍA ──────────── */}
      <ImpactSection />

      {/* ──────────── HABILIDADES & TECNOLOGÍAS ──────────── */}
      <Skills>
        <Skills.Body>
          <Skills.Header>
            <Skills.Header.Tittle>
              <span className="text-primary">Habilidades</span>{' '}
              <span className="text-muted-foreground">&</span>{' '}
              <span className="text-white">Tecnologías</span>
            </Skills.Header.Tittle>
            <Skills.Header.Label>
              Herramientas, plataformas y metodologías aplicadas directamente en entornos de producción.
            </Skills.Header.Label>
          </Skills.Header>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="max-w-full overflow-x-auto no-scrollbar pb-2">
              <div className="flex bg-muted/20 p-1.5 rounded-full border border-border/50 backdrop-blur-sm relative print:hidden w-max mx-auto min-w-80">
                {skillCategories.map((category, idx) => (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`
                      px-6 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 relative z-10 whitespace-nowrap cursor-pointer
                      ${activeTab === idx ? 'text-primary-foreground font-semibold' : 'text-muted-foreground hover:text-white'}
                    `}
                  >
                    {category.title}
                    {activeTab === idx && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-fit mt-6 mx-auto">
            <AnimatePresence mode="wait">
              {skillCategories.map((category, idx) =>
                idx === activeTab ? (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <SkillCategoryGridCard category={category} />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </Skills.Body>
      </Skills>

      {/* ──────────── CONTACTO ──────────── */}
      <Contact />
    </>
  )
}
