import { createFileRoute, Link } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'
import { ImpactSection } from '@/features/impact/components/ImpactSection'
import { Skills } from '@/features/skills/components/Skills'
import { Projects } from '@/features/projects/components/Projects'
import { Contact } from '@/features/contact/components/Contact'
import { Footer } from '@/shared/components/Footer'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

import { Fragment } from 'react/jsx-runtime'
import { ProjectCard } from '#/features/projects/components/Projects/ProjectCard'
import { ProjectCardMobile } from '#/features/projects/components/Projects/ProjectCardMobile'
import { projects } from '#/features/projects/components/Projects/const'
import { useState } from 'react'
import { skillCategories } from '#/features/skills/components/Skills/const'
import { motion, AnimatePresence } from 'motion/react'
import { SkillCategoryGridCard } from '#/features/skills/components/Skills/SkillCategoryCard'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedProject, setSelectedProject] = useState("")

  return (
    <>
      <Hero.Root id="about">
        <Hero.Background />
        <Hero.Container>
          <Hero.Main>
            <div className="inline-block text-xs uppercase tracking-wider font-semibold text-primary mb-3 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/25">
              Tech Lead Software Engineer · Full Stack
            </div>
            <Hero.Title>
              <span className="text-foreground">Arquitectura Backend,</span>
              <br />
              <span className="text-primary">Rendimiento & Cloud</span>
            </Hero.Title>
            <Hero.Subtitle>
              Ingeniero en Sistemas especializado en optimización de rendimiento, diseño modular
              de arquitecturas y sistemas serverless en AWS. Liderazgo técnico híbrido con entrega
              activa de código y refactorizaciones en producción.
            </Hero.Subtitle>
            <Hero.Actions className="flex flex-col sm:flex-row gap-4">
              <a
                href="/Curriculum_Oscar_Vallecillo.pdf"
                download="Curriculum_Oscar_Vallecillo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download size={18} />
                Descargar CV
              </a>
              <Link
                to="/"
                hash="projects"
                className="border border-foreground text-foreground px-8 py-3 rounded-md hover:bg-foreground hover:text-background transition-colors text-center font-medium"
              >
                Ver proyectos
              </Link>
            </Hero.Actions>
            <Hero.Social>
              <Hero.SocialLink href="https://github.com/RacsoJosu" aria-label="GitHub">
                <Github size={24} />
              </Hero.SocialLink>
              <Hero.SocialLink href="https://www.linkedin.com/in/oscar-vallecillo-938127254/" aria-label="LinkedIn">
                <Linkedin size={24} />
              </Hero.SocialLink>
              <Hero.SocialLink href="mailto:oscarvallecillo95@gmail.com" aria-label="Email">
                <Mail size={24} />
              </Hero.SocialLink>
            </Hero.Social>
          </Hero.Main>
        </Hero.Container>
      </Hero.Root>

      <ImpactSection />

      <Projects>

        <Projects.Body>
          <Projects.Title>
          <span className="text-white">Proyectos</span>{' '}
          <span className="text-primary">Destacados</span>
          </Projects.Title>
          <Projects.List>
             {projects.map((project, idx) => (
              <Fragment key={project.title}>
                <ProjectCard project={project} index={idx} />
                 <ProjectCardMobile project={project} index={idx}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                 />
              </Fragment>
            ))}

          </Projects.List>
        </Projects.Body>
      </Projects>
      <Skills >
        <Skills.Body>
          <Skills.Header>
            <Skills.Header.Tittle>
              <span className="text-primary">Habilidades</span>{' '}
              <span className="text-muted-foreground">&</span>{' '}
              <span className="text-white">Tecnologías</span>


            </Skills.Header.Tittle>
            <Skills.Header.Label>
              Tecnologías favoritas y herramientas que utilizo para dar vida a productos digitales excepcionales.
            </Skills.Header.Label>


          </Skills.Header>



          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="max-w-full overflow-x-auto no-scrollbar pb-2">
              <div className="flex bg-muted/20 p-1.5 rounded-full border border-border/50 backdrop-blur-sm relative print:hidden w-max mx-auto min-w-80">
                {skillCategories.map((category, idx) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveTab(idx)}
                    className={`
                      px-6 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 relative z-10 whitespace-nowrap
                      ${activeTab === idx ? 'text-primary-foreground' : 'text-muted-foreground hover:text-white'}
                    `}
                  >
                    {category.title}
                    {activeTab === idx && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
      <Contact />
    </>
  )
}
