import type { Project } from "./Projects.types";

export const projects: Project[] = [
  {
    title: 'Red Medicatel',
    description:
      'Plataforma digital de salud con sede en Honduras diseñada para facilitar el acceso a servicios médicos, conectando a pacientes con médicos especialistas y ofreciendo gestión de salud digital.',
    tech: ['Next.js', 'shadcn/ui', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/RacsoJosu',
    live: 'https://redmedicatel.com/',
    image: 'https://api.microlink.io/?url=https://redmedicatel.com/&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Shinball Fronted',
    description:
      'Dashboard administrativo para la gestión de reservas de propiedades y vehículos, con visualizaciones analíticas y gestión de usuarios.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/RacsoJosu/shinball-fronted',
    live: 'https://shinball-fronted.vercel.app/login',
    image: 'https://api.microlink.io/?url=https://shinball-fronted.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Hilo — Chatbot WhatsApp Platform',
    description:
      'Centro de conversaciones de WhatsApp multi-tenant con Fastify, React 19, TanStack Router/Query, PostgreSQL 17, roles seguros en runtime y autenticación MFA con TOTP.',
    tech: ['Fastify', 'React 19', 'PostgreSQL 17', 'Docker', 'TanStack Router'],
    github: 'https://github.com/RacsoJosu/mono-repo-chat',
    live: 'https://github.com/RacsoJosu/mono-repo-chat',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/mono-repo-chat&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'AWS Event-Driven Architecture (CDK)',
    description:
      'Plataforma serverless de reservas basada en eventos con AWS CDK (Python), Amazon EventBridge, microservicios Lambda políglotas y emulación en LocalStack.',
    tech: ['AWS CDK', 'EventBridge', 'AWS Lambda', 'Python', 'API Gateway'],
    github: 'https://github.com/RacsoJosu/event-driven-architecture-aws',
    live: 'https://github.com/RacsoJosu/event-driven-architecture-aws',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/event-driven-architecture-aws&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Shiball Admin API',
    description:
      'API del administrativo de Shinball con OpenAPI 3.0 generado en tiempo real desde esquemas Zod y documentación interactiva con Scalar.',
    tech: ['TypeScript', 'Node.js', 'Zod', 'OpenAPI 3.0', 'Scalar'],
    github: 'https://github.com/RacsoJosu/shiball-admin-api',
    live: 'https://shinball-fronted.vercel.app/login',
    image: 'https://api.microlink.io/?url=https://shinball-fronted.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Items Store API',
    description:
      'API robusta para venta de productos con NestJS, resolvers GraphQL fuertemente tipados, persistencia en PostgreSQL y arquitectura limpia.',
    tech: ['NestJS', 'GraphQL', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/RacsoJosu/Items-Store',
    live: 'https://github.com/RacsoJosu/Items-Store',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/Items-Store&screenshot=true&meta=false&embed=screenshot.url',
  },
]
