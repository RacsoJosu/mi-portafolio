import type { Project, ProjectCategory } from './Projects.types'

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos los proyectos' },
  { id: 'production', label: '🟢 En Producción' },
  { id: 'frontend', label: '💻 Frontend & E-commerce' },
  { id: 'cloud', label: '☁️ Cloud & Backend' },
]

export const projects: Project[] = [
  {
    title: 'Red Medicatel — Plataforma Web',
    description:
      'Optimización de rendimiento y arquitectura frontend con Next.js y React. Implementación de Server-Side Rendering (SSR), generación estática (SSG) y estrategias de caché para acelerar tiempos de carga, junto con estructuración de datos en JSON-LD y HTML semántico para posicionamiento SEO y GEO.',
    metrics: 'SSR & SSG con caché de alta velocidad y posicionamiento SEO / GEO con JSON-LD',
    details: [
      'Implementación de Server-Side Rendering (SSR) y Static Site Generation (SSG) con caché optimizada en Next.js.',
      'Inyección de metadatos estructurados en JSON-LD (Schema.org) y HTML semántico para SEO y GEO en búsquedas médicas.',
      'Diseño de componentes modulares y responsivos con Tailwind CSS y tipado estricto en TypeScript.',
      'Estrategias de optimización para Core Web Vitals en conexiones de escritorio y móviles.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'SSR / SSG Cache', 'JSON-LD', 'Tailwind CSS'],
    github: 'https://github.com/RacsoJosu',
    live: 'https://redmedicatel.com/',
    image: 'https://api.microlink.io/?url=https://redmedicatel.com/&screenshot=true&meta=false&embed=screenshot.url',
    category: 'production',
    badge: 'Producción Nacional',
    isPrivate: true,
  },
  {
    title: 'Contadito — Fintech & Pagos (Abstract Dev)',
    description:
      'Diseño e implementación de vistas y flujos de compra desde mockups interactivos, desarrollo de pruebas de concepto (PoC) y construcción de microservicios backend con NestJS y APIs GraphQL integradas a interfaces en Next.js y React.',
    metrics: 'Microservicios con NestJS, GraphQL y checkout interactivo para cuotas',
    details: [
      'Construcción de módulos y pantallas de compra desde mockups interactivos para financiamiento a cuotas.',
      'Desarrollo de microservicios backend en NestJS con esquemas y resolvers en GraphQL.',
      'Pruebas de concepto (PoC) y validación de arquitectura frontend desacoplada con Next.js y React.',
      'Diseño de componentes UI modulares con TypeScript y estilos con Tailwind CSS.',
    ],
    tech: ['Next.js', 'React', 'NestJS', 'GraphQL', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/RacsoJosu',
    live: 'https://contadito.com/',
    image: 'https://api.microlink.io/?url=https://contadito.com/&screenshot=true&meta=false&embed=screenshot.url',
    category: 'production',
    badge: 'Fintech & Retail',
    isPrivate: true,
  },
  {
    title: 'Portal de Proveedores Red Medicatel',
    description:
      'Frontend operativo para médicos y clínicas. Estandarización de despliegue mediante Docker multi-stage e integración continua en Jenkins para reducir tiempos de build de imágenes. Migración del ecosistema a pnpm, configuración de soporte en AWS Amplify (amplify.yml, .npmrc) y suite de pruebas unitarias e integración.',
    metrics: 'Docker multi-stage, pipelines en Jenkins, AWS Amplify y suite de pruebas',
    details: [
      'Estandarización de imágenes de despliegue con Docker multi-stage y optimización de pipelines en Jenkins.',
      'Migración del ecosistema a pnpm para acelerar tiempos de instalación y gestión estricta de dependencias.',
      'Configuración de soporte en AWS Amplify con amplify.yml y .npmrc para control de versiones y builds.',
      'Implementación de suite de pruebas unitarias y de integración para garantizar estabilidad en producción.',
    ],
    tech: ['React', 'TypeScript', 'Docker Multi-stage', 'Jenkins CI/CD', 'AWS Amplify', 'pnpm', 'Unit Tests'],
    github: 'https://github.com/RacsoJosu',
    live: 'https://app.redmedicatel.com/#/login',
    image: '/projects/app-redmedicatel.png',
    category: 'production',
    badge: 'Portal de Proveedores',
    isPrivate: true,
  },
  {
    title: 'App de Pacientes Red Medicatel',
    description:
      'Aplicación de salud para pacientes (PWA y móvil con Capacitor) con lectura inteligente de documentos por OCR para validación de identidad y carnet. Integración con pasarela de pago y procesamiento de cobros mediante computación serverless en AWS Lambda y despliegue continuo con Amplify.',
    metrics: 'OCR para carnets, pagos con computación serverless en AWS Lambda y Amplify',
    details: [
      'Arquitectura de aplicación web progresiva (PWA) con React y empaquetado nativo mediante Capacitor.',
      'Lectura inteligente y extracción de datos mediante OCR para validación de carnets de asegurado e identidad.',
      'Integración con pasarela de pago y procesamiento de transacciones con computación serverless en AWS Lambda.',
      'Configuración de despliegue continuo en AWS Amplify con perfiles y variables de entorno.',
    ],
    tech: ['React', 'PWA & Capacitor', 'AWS Lambda', 'PixelPay', 'OCR', 'AWS Amplify'],
    github: 'https://github.com/RacsoJosu',
    live: 'https://mi.redmedicatel.com/login',
    image: 'https://api.microlink.io/?url=https://mi.redmedicatel.com/login&screenshot=true&meta=false&embed=screenshot.url',
    category: 'production',
    badge: 'PWA & Serverless',
    isPrivate: true,
  },
  {
    title: 'Store React',
    description:
      'Arquitectura frontend en React 18, TypeScript y Vite. Gestión del estado global del carrito de compras con persistencia en LocalStorage, catálogo con filtrado interactivo por categorías y modales de producto optimizados.',
    metrics: 'Bundle ligero con Vite, filtros en milisegundos y persistencia local',
    details: [
      'Desarrollado con React 18 y Vite para compilación y recarga en caliente instantáneas.',
      'Filtrado reactivo por categorías y búsqueda dinámica en tiempo real.',
      'Carrito de compras con cálculo automático de totales y persistencia en LocalStorage.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'State Management'],
    github: 'https://github.com/RacsoJosu/Store-React',
    live: 'https://store-react-alpha.vercel.app/',
    image: 'https://api.microlink.io/?url=https://store-react-alpha.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    category: 'frontend',
    badge: 'E-Commerce App',
  },
  {
    title: 'Shinball Frontend',
    description:
      'Panel administrativo y de reservas con arquitectura modular por capas en React y Vite. Validación estricta de esquemas y formularios dinámicos con Zod, lazy loading de rutas y consumo de APIs protegidas con JWT.',
    metrics: 'Validación estricta con Zod y carga optimizada por rutas',
    details: [
      'Estructura modular dividida en capas para autenticación, reservas y dashboards.',
      'Validación de esquemas de datos y entradas con Zod.',
      'Consumo de servicios REST con interceptores para manejo de tokens JWT.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zod', 'REST API'],
    github: 'https://github.com/RacsoJosu/shinball-fronted',
    live: 'https://shinball-fronted.vercel.app/login',
    image: 'https://api.microlink.io/?url=https://shinball-fronted.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url',
    category: 'frontend',
    badge: 'Dashboard Operativo',
  },
  {
    title: 'AWS Event-Driven Architecture (CDK)',
    description:
      'Infraestructura serverless como código (IaC) con AWS CDK en Python. Bus de eventos desacoplado con Amazon EventBridge, enrutamiento a microservicios Lambda, colas DLQ en Amazon SQS y entorno de pruebas con LocalStack.',
    metrics: 'Arquitectura desacoplada, tolerancia a fallos con DLQ y emulación LocalStack',
    details: [
      'Definición reproducible de infraestructura con AWS CDK en Python.',
      'Enrutamiento de eventos mediante EventBridge Rules hacia múltiples Lambdas.',
      'Mecanismos de resiliencia con Dead-Letter Queues (DLQ) en Amazon SQS.',
      'Pruebas y validación previa a producción con LocalStack y Docker.',
    ],
    tech: ['AWS CDK', 'EventBridge', 'AWS Lambda', 'Python', 'SQS / DLQ', 'LocalStack'],
    github: 'https://github.com/RacsoJosu/event-driven-architecture-aws',
    live: 'https://github.com/RacsoJosu/event-driven-architecture-aws',
    image: '/projects/aws-event-driven.svg',
    category: 'cloud',
    badge: 'IaC & Serverless',
  },
]
