import { createFileRoute, Link } from '@tanstack/react-router'
import { Hero } from '@/features/hero/components/Hero'
import { Skills } from '@/features/skills/components/Skills'
import { Projects } from '@/features/projects/components/Projects'
import { Contact } from '@/features/contact/components/Contact'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero.Root>
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
              <Link
                to="/"
                hash="contact"
                className="bg-primary/80 text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
              >
                Contáctame
              </Link>
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
              <Hero.SocialLink href="mailto:oscarvallecillo95@gmail.com">
                <Mail size={24} />
              </Hero.SocialLink>
            </Hero.Social>
          </Hero.Main>
        </Hero.Container>
      </Hero.Root>
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
