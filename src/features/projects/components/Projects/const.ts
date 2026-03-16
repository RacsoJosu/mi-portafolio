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
    title: 'Store React',
    description:
      'Aplicación moderna de comercio electrónico con listado de productos, vistas detalladas y gestión de carrito de compras.',
    tech: ['React', 'TypeScript', 'Vite', 'PNPM'],
    github: 'https://github.com/RacsoJosu/Store-React',
    live: 'https://store-react-alpha.vercel.app/',
    image: 'https://api.microlink.io/?url=https://store-react-alpha.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Pokedex App',
    description:
      'Pokedex interactiva que consume la PokeAPI, con paginación y caché local mediante IndexedDB para una mejor experiencia.',
    tech: ['React', 'Redux', 'Tailwind CSS', 'IndexedDB', 'JavaScript'],
    github: 'https://github.com/RacsoJosu/Pokedex',
    live: 'https://pokedex-nu-cyan.vercel.app/',
    image: 'https://api.microlink.io/?url=https://pokedex-nu-cyan.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Items Store API',
    description:
      'API robusta para una plataforma de ventas de productos, construida con arquitectura moderna y una interfaz GraphQL.',
    tech: ['NestJS', 'GraphQL', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/RacsoJosu/Items-Store',
    live: 'https://github.com/RacsoJosu/Items-Store',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/Items-Store&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'AWS Serverless CRUD',
    description:
      'Implementación de backend serverless para una API CRUD utilizando servicios de AWS como Lambda, DynamoDB y API Gateway.',
    tech: ['TypeScript', 'AWS CDK', 'AWS Lambda', 'DynamoDB', 'API Gateway'],
    github: 'https://github.com/RacsoJosu/api-gateway-dynamo-db-serverless-crud',
    live: 'https://github.com/RacsoJosu/api-gateway-dynamo-db-serverless-crud',
    image: 'https://api.microlink.io/?url=https://github.com/RacsoJosu/api-gateway-dynamo-db-serverless-crud&screenshot=true&meta=false&embed=screenshot.url',
  },
]
