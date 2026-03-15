import * as React from 'react'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import appCss from '../styles.css?url'
import { Header } from '#/shared/components/Header'
import { Footer } from '#/shared/components/Footer'
import { useActiveSection } from '#/shared/hooks/useActiveSection'

const SECTIONS = ['about', 'projects', 'habilidades', 'contact']

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Portafolio | Oscar developer',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
    notFoundComponent: () => (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Página no encontrada
      </h1>
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useActiveSection(SECTIONS, 'main-container')
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script />
        <HeadContent />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)] h-screen overflow-hidden flex flex-col"
      >
        <Header.Root>
          <Header.Brand />

        <Header.DesktopNav>
          <Header.DesktopLink to="/" hash="about">Sobre mí</Header.DesktopLink>
          <Header.DesktopLink to="/" hash="projects">Proyectos</Header.DesktopLink>
          <Header.DesktopLink to="/" hash="habilidades">Habilidades</Header.DesktopLink>
          <Header.DesktopLink to="/" hash="contact">Contacto</Header.DesktopLink>
        </Header.DesktopNav>

        <Header.MobileNav isOpen={isMenuOpen} onOpen={toggleMenu} onClose={closeMenu}>
          <Header.MobileLink to="/" hash="about" onClick={closeMenu}>Sobre mí</Header.MobileLink>
          <Header.MobileLink to="/" hash="projects" onClick={closeMenu}>Proyectos</Header.MobileLink>
          <Header.MobileLink to="/" hash="habilidades" onClick={closeMenu}>Habilidades</Header.MobileLink>
          <Header.MobileLink to="/" hash="contact" onClick={closeMenu}>Contacto</Header.MobileLink>
        </Header.MobileNav>
        </Header.Root>

        <main id="main-container" className="flex-1 overflow-y-auto w-full no-scrollbar">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
          <Footer />
        </main>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
