import { createFileRoute, Link } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'
import { Skills } from '@/features/skills/components/Skills'
import { Projects } from '@/features/projects/components/Projects'
import { Contact } from '@/features/contact/components/Contact'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import cvPdf from '@/assets/docs/Currículum_Vitae_Oscar_Vallecillo.pdf'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero.Root id="about">
        <Hero.Background />
        <Hero.Container>
          <Hero.Main>
            <Hero.Title>
              <span className="text-foreground">Full Stack</span>
              <br />
              <span className="text-primary">Developer</span>
            </Hero.Title>
            <Hero.Subtitle>
              Desarrollador full stack especializado en crear aplicaciones web
              modernas, escalables y de alto rendimiento usando las últimas tecnologías.
            </Hero.Subtitle>
            <Hero.Actions
            className=' flex flex-col sm:flex-row gap-4'>
              <button
                type="button"
                onClick={async () => {
                  const res = await fetch(cvPdf)
                  const blob = await res.blob()
                  const url = URL.createObjectURL(blob)
                  const link = document.createElement('a')
                  link.href = url
                  link.download = 'CV_Oscar_Vallecillo.pdf'
                  document.body.appendChild(link)
                  link.click()
                  link.remove()
                  URL.revokeObjectURL(url)
                }}
                className="inline-flex items-center gap-2 bg-primary/80 text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors rounded-sm cursor-pointer"
              >
                <Download size={18} />
                Descargar CV
              </button>
              <Link
                to="/"
                hash="projects"
                className="border border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                Ver proyectos
              </Link>
            </Hero.Actions>
            <Hero.Social>
              <Hero.SocialLink href="https://github.com/RacsoJosu">
                <Github size={24} />
              </Hero.SocialLink>
              <Hero.SocialLink href="https://www.linkedin.com/in/oscar-vallecillo-938127254/">
                <Linkedin size={24} />
              </Hero.SocialLink>
              <Hero.SocialLink href="mailto:oscarvallecillo.dev@gmail.com">
                <Mail size={24} />
              </Hero.SocialLink>
            </Hero.Social>
          </Hero.Main>
        </Hero.Container>
      </Hero.Root>
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
