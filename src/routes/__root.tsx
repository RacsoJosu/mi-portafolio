import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import appCss from '../styles.css?url'
import { Header } from '#/shared/components/Header'
import { Footer } from '#/shared/components/Footer'
import { useActiveSection } from '#/shared/hooks/useActiveSection'

const SECTIONS = ['about', 'projects', 'skills', 'contact']

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
  const activeSection = useActiveSection(SECTIONS)

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script />
        <HeadContent />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)] h-screen overflow-hidden flex flex-col"
      >
        <Header.Root>
          <Header.Brand />
          <Header.Nav>
            <Header.Link href="#about" active={activeSection === 'about'}>Sobre mí</Header.Link>
            <Header.Link href="#projects" active={activeSection === 'projects'}>Proyectos</Header.Link>
            <Header.Link href="#skills" active={activeSection === 'skills'}>Skills</Header.Link>
            <Header.Link href="#contact" active={activeSection === 'contact'}>Contacto</Header.Link>
          </Header.Nav>
        </Header.Root>
        <main className="flex-1 overflow-y-auto w-full no-scrollbar">
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
