import type { Project } from "./Projects.types";

export const projects: Project[] = [
  {
    title: 'Red Medicatel',
    description:
      'Plataforma de salud digital y telemedicina en producción para Honduras. Lideré el desarrollo frontend y optimizaciones de rendimiento con Next.js y React Server Components, implementando lazy loading y code splitting que redujeron los tiempos de carga inicial en un 40% para miles de pacientes y consultas médicas.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    github: 'https://github.com/RacsoJosu',
    live: 'https://redmedicatel.com/',
    image: 'https://api.microlink.io/?url=https://redmedicatel.com/&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'AWS Event-Driven Architecture (CDK)',
    description:
      'Infraestructura serverless desacoplada modelada con AWS CDK en Python. Implementa un bus de eventos central con Amazon EventBridge, orquestación de funciones Lambda políglotas, colas DLQ (Dead Letter Queues), ingesta masiva en S3 y emulación local reproducible con LocalStack.',
    tech: ['AWS CDK', 'EventBridge', 'AWS Lambda', 'Python', 'S3', 'LocalStack'],
    github: 'https://github.com/RacsoJosu/event-driven-architecture-aws',
    live: 'https://github.com/RacsoJosu/event-driven-architecture-aws',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/event-driven-architecture-aws&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Hilo — WhatsApp Platform',
    description:
      'Centro de mensajería y atención multi-tenant con integración directa a la API oficial de Meta WhatsApp Cloud. Diseñado con Fastify de alto rendimiento, React 19, TanStack Router/Query, PostgreSQL 17 con aislamiento por empresa, autenticación MFA (TOTP) y roles seguros en runtime.',
    tech: ['Fastify', 'React 19', 'Meta Cloud API', 'PostgreSQL 17', 'Docker', 'TanStack'],
    github: 'https://github.com/RacsoJosu/mono-repo-chat',
    live: 'https://github.com/RacsoJosu/mono-repo-chat',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/mono-repo-chat&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Shinball Fronted',
    description:
      'Dashboard operativo y analítico para administración de reservas inmobiliarias y flota vehicular. Diseñado con arquitectura por capas en React y Vite, gestión de estados optimistas, validación de formularios complejos con Zod y componentes modulares con carga perezosa para máxima fluidez.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zod', 'REST API'],
    github: 'https://github.com/RacsoJosu/shinball-fronted',
    live: 'https://shinball-fronted.vercel.app/login',
    image: 'https://api.microlink.io/?url=https://shinball-fronted.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Shiball Admin API',
    description:
      'API REST modular para la gestión integral de reservas. Incorpora validación de contratos en runtime y generación dinámica de esquemas OpenAPI 3.0 con Zod, ofreciendo documentación interactiva viva mediante Scalar y desacoplamiento de servicios.',
    tech: ['TypeScript', 'Node.js', 'Zod', 'OpenAPI 3.0', 'Scalar', 'REST API'],
    github: 'https://github.com/RacsoJosu/shiball-admin-api',
    live: 'https://shinball-fronted.vercel.app/login',
    image: 'https://api.microlink.io/?url=https://shinball-fronted.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Items Store API',
    description:
      'Backend empresarial para comercio electrónico estructurado bajo principios de Clean Architecture y Domain-Driven Design (DDD). Desarrollado con NestJS, resolvers GraphQL fuertemente tipados, paginación basada en cursores y persistencia relacional en PostgreSQL con Prisma.',
    tech: ['NestJS', 'GraphQL', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    github: 'https://github.com/RacsoJosu/Items-Store',
    live: 'https://github.com/RacsoJosu/Items-Store',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/Items-Store&screenshot=true&meta=false&embed=screenshot.url',
  },
]
