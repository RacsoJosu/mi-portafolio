# Oscar Vallecillo — Portafolio de Ingeniería

Sitio web y portafolio técnico de **Oscar Vallecillo** (Tech Lead Software Engineer | Full Stack Developer).

Enfocado en **arquitectura backend, optimización de rendimiento y sistemas cloud en AWS**.

---

## 🛠️ Stack Tecnológico

- **Framework**: [TanStack Start](https://tanstack.com/start) (React + TanStack Router).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) con tokens CSS modernos.
- **Componentes**: [Radix UI](https://www.radix-ui.com/) y diseño de primitivas accesibles.
- **Animaciones**: [Motion](https://motion.dev/) (Framer Motion).
- **Iconos**: [Lucide React](https://lucide.dev/).
- **Arquitectura**: Screaming Architecture por dominios de negocio (`src/features/` y `src/shared/`), siguiendo las especificaciones de [AGENTS.md](./AGENTS.md).

---

## 🚀 Ejecución en Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo en http://localhost:3000
pnpm dev
```

---

## 📂 Estructura del Proyecto

```text
src/
├── features/
│   ├── hero/        # Presentación e impacto inicial
│   ├── skills/      # Capacidades y stack técnico por dominios
│   ├── projects/    # Casos de estudio en producción y repositorios
│   └── contact/     # Formulario e información de contacto
├── routes/          # Rutas basadas en archivos de TanStack Router
├── shared/          # Primitivas de UI, Header y Footer
└── styles/          # Variables CSS de tema y Tailwind v4
```