import { Zap, Workflow, Cloud, Bot } from 'lucide-react'
import { motion } from 'motion/react'
import type { ImpactArea } from './ImpactSection.types'
import { ImpactCard } from './ImpactCard'

const impactAreas: ImpactArea[] = [
  {
    id: 'optimizacion',
    title: 'Optimización y Rendimiento',
    subtitle: 'Auditoría & Refactorización de Procesos Críticos',
    icon: Zap,
    metricHighlight: '⚡ ~5 min ➔ 800 ms',
    description:
      'Refactorización profunda de flujos existentes en producción para reducir drásticamente los tiempos de respuesta y ejecución. En frontend, optimización mediante lazy loading, memoización y code splitting para aligerar la carga inicial.',
    evidence: [
      'Tiempos antes/después documentados (~5 min a 800 ms en carga de ~5.000 registros)',
      'Separación de operaciones de lectura y escritura en lotes (batch processing)',
      'Optimización de bundle frontend y eliminación de cuellos de botella en consultas con múltiples JOINs',
    ],
  },
  {
    id: 'automatizacion',
    title: 'Automatización de Procesos Empresariales',
    subtitle: 'Orquestación Desatendida & Eliminación de Fricción',
    icon: Workflow,
    metricHighlight: 'Procesos 100% Desatendidos',
    description:
      'Automatización de pipelines de datos masivos desde Excel e integración de herramientas como n8n y Make con la API de Meta (WhatsApp) para notificaciones inmediatas a usuarios y operadores.',
    evidence: [
      'Eliminación de intervención manual en la ingestión y actualización de pólizas',
      'Despacho automatizado de notificaciones vía WhatsApp con la API oficial de Meta',
      'Distribución de operaciones pesadas en nodos independientes para evitar saturar el servidor',
    ],
  },
  {
    id: 'backend-eda',
    title: 'Backend e Infraestructura Orientada a Eventos',
    subtitle: 'Arquitecturas Cloud Escalables & Resilientes',
    icon: Cloud,
    metricHighlight: 'AWS Serverless (IaC)',
    description:
      'Diseño e implementación de arquitecturas desacopladas en AWS con Amazon EventBridge para programar cron jobs y enrutar eventos, funciones Lambda para procesamiento asíncrono y S3 para almacenamiento de alta durabilidad.',
    evidence: [
      'Cobros recurrentes programados con EventBridge, Lambda y pasarela PixelPay',
      'Procesamiento seguro de webhooks y generación dinámica de enlaces de contingencia ante fallos',
      'Interoperabilidad políglota y gestión híbrida con MySQL y MongoDB según el caso de uso',
    ],
  },
  {
    id: 'ia-asistida',
    title: 'Ingeniería Asistida por IA',
    subtitle: 'Gobernanza, Contexto & Control Arquitectónico',
    icon: Bot,
    metricHighlight: 'Workflows con AGENTS.md',
    description:
      'Integración sistemática de herramientas de inteligencia artificial en el ciclo de desarrollo, estructurando el contexto que reciben los agentes (AGENTS.md, Skills y Hooks) para mantener coherencia arquitectónica y estándares estrictos.',
    evidence: [
      'Definición de reglas de arquitectura limpias, principios SOLID y restricciones de repositorio',
      'Clasificación de tareas por complejidad, refinamiento previo de requisitos y subagentes dedicados',
      'Reducción drástica de retrabajo manteniendo siempre la supervisión y validación humana',
    ],
  },
]

export function ImpactSection() {
  return (
    <section id="enfoque" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-3 inline-block">
            Enfoque de Ingeniería
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Cuatro Áreas de <span className="text-primary">Impacto Técnico</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Cómo resuelvo problemas de ingeniería en producción, respaldado por decisiones
            de arquitectura, automatizaciones y métricas comprobables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {impactAreas.map((impact, idx) => (
            <ImpactCard key={impact.id} impact={impact} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
