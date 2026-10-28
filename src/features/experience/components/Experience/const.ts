import type { ExperienceItem } from './Experience.types'

export const experiences: ExperienceItem[] = [
  {
    id: 'red-medicatel',
    company: 'Sector Seguros & Health Tech — Ecosistema Red Medicatel',
    location: 'Tegucigalpa, Honduras',
    period: 'Julio 2024 – Presente',
    badge: 'Seguros & Health Tech',
    roles: [
      {
        title: 'Tech Lead Software Engineer',
        period: 'Febrero 2026 – Presente',
        isCurrent: true,
        description:
          'Lideré la dirección técnica híbrida de un equipo de 5 desarrolladores en el sector Seguros & Health Tech. Diseñé nuevas arquitecturas para sistemas existentes, orienté al equipo en sprint triage y programé y refactoricé código crítico directamente.',
        highlights: [
          'Lideré la gestión técnica y sprint triage de 5 desarrolladores: definí estimaciones de entrega, desbloqueé tareas complejas y programé directamente en los componentes centrales.',
          'Diseñé la arquitectura backend modular definiendo separación de capas entre rutas, controladores, servicios y repositorios, aplicando inyección de dependencias y patrones de software (Strategy, Builder y Functional Core / Imperative Shell).',
          'Diseñé y programé la integración con la pasarela de pagos PixelPay para procesamiento de cobros recurrentes mediante computación serverless con AWS Lambda y Amazon EventBridge, recepción de webhooks y reactivación de suscripciones.',
          'Diseñé e implementé un workflow de desarrollo asistido por IA (AGENTS.md, Skills, subagentes especializados y validación humana) para garantizar calidad estricta de código y arquitectura.',
        ],
      },
      {
        title: 'Programador Full Stack (Full Stack Developer)',
        period: 'Julio 2024 – Enero 2026',
        description:
          'Programé APIs REST en Node.js y TypeScript bajo arquitectura modular y hexagonal, optimicé bases de datos de alta concurrencia y orquesté la infraestructura DevOps y serverless en AWS.',
        highlights: [
          'Optimizé el procesamiento de cargas masivas de Excel (~5.000 registros en múltiples tablas MySQL con Node.js y TypeScript), reduciendo el tiempo de procesamiento completo de ~5 minutos a 800 milisegundos mediante batch processing y separación de operaciones de lectura y escritura.',
          'Estandaricé la infraestructura DevOps del ecosistema: configuré imágenes con Docker multi-stage para acelerar compilaciones, automaticé pipelines en Jenkins y migré los repositorios a pnpm para optimizar la gestión de dependencias.',
          'Programé soluciones serverless y cobros recurrentes en AWS (Lambda, EventBridge, S3, DynamoDB) y configuré despliegues continuos en AWS Amplify mediante amplify.yml y .npmrc para control de versiones.',
          'Desarrollé y desplegué aplicaciones web progresivas (PWA) hacia entornos móviles con Capacitor, e implementé lectura inteligente de documentos por OCR para validación de asegurados e identidades.',
        ],
      },
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'Next.js',
      'AWS (Lambda, EventBridge, Amplify)',
      'Docker Multi-stage',
      'Jenkins CI/CD',
      'pnpm',
      'MySQL / PostgreSQL',
    ],
    projects: [
      { name: 'redmedicatel.com', url: 'https://redmedicatel.com/' },
      { name: 'mi.redmedicatel.com', url: 'https://mi.redmedicatel.com/login' },
      { name: 'app.redmedicatel.com (Proveedores)', url: 'https://app.redmedicatel.com/#/login' },
      { name: 'Core Transaccional & Pólizas (Privado)' },
    ],
  },
  {
    id: 'abstract-development',
    company: 'Abstract Development Studio S.A.',
    location: 'Honduras',
    period: 'Diciembre 2023 – Mayo 2024',
    badge: 'Software Studio',
    roles: [
      {
        title: 'Desarrollador de Software (Pasantía)',
        period: 'Diciembre 2023 – Mayo 2024',
        description:
          'Programé interfaces de usuario y servicios backend para plataformas cliente y servicios internos bajo metodología ágil Scrum.',
        highlights: [
          'Diseñé y programé módulos interactivos, pantallas de catálogo y flujos de checkout para el portal de financiamiento a cuotas Contadito (contadito.com) a partir de mockups y pruebas de concepto (PoC).',
          'Construí e integré microservicios backend con NestJS y APIs GraphQL y REST, manteniendo comunicación desacoplada y tipado estricto con Next.js y React.',
          'Participé activamente en sprints Scrum diarios, refactorización de código y documentación técnica de endpoints.',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'NestJS', 'TypeScript', 'GraphQL', 'REST APIs', 'Scrum'],
    projects: [{ name: 'contadito.com', url: 'https://contadito.com/' }],
  },
]
