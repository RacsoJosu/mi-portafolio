# 🚀 Developer Portfolio

A modern, high-performance portfolio landing page designed to showcase professional projects, technical skills, and experience as a **Full Stack Developer**. This project prioritizes visual excellence, modularity, and a premium user experience.

---

## 🛠️ Tech Stack

This project leverages a cutting-edge stack for performance and developer experience:

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utilizing the latest CSS-first configuration and `@theme` engine.
- **Animations**: [Motion](https://motion.dev/) (Framer Motion v12) - Powering high-fidelity, smooth interactive elements.
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives for peak accessibility and customization.
- **Icons**: [Lucide React](https://lucide.dev/) for a clean, consistent icon set.
- **Package Manager**: [pnpm](https://pnpm.io/) for fast, disk-efficient dependency management.

---

## 🏗️ Project Structure

The codebase follows a modular, feature-based architecture to ensure scalability and maintainability:

```text
src/
├── assets/          # Static assets (images, fonts, etc.)
├── features/        # Feature-based modules (Hero, Skills, Projects, Contact)
│   └── hero/        # Example: Hero section logic, components, and types
├── routes/          # TanStack Start file-based routing
│   └── __root.tsx   # Global App Shell and Layout
├── shared/          # Centralized reusable logic and design system
│   ├── components/  # UI primitives (Buttons, Nav, Header, Footer)
│   └── utils/       # Global helper functions (cn, cookie management)
└── styles.css       # Global CSS variables and Tailwind v4 configuration
```

### Key Design Patterns
- **Compound Components (Composition)**: Components like `Hero`, `Header`, and `Image` use the pattern `Component.Root`, `Component.Main`, etc., allowing for high flexibility and inversion of control.
- **App Shell Architecture**: Managed in `__root.tsx`, providing a persistent layout with independent scrolling for the main content area.
- **CSS-Variable Theming**: Deep integration between Tailwind v4 and CSS variables for robust token management.

---

## 🚀 Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
```

---

## ✨ Features

- **Dynamic Animations**: Orbital particles, pulsating rings, and smooth entrance transitions.
- **Responsive Layout**: Optimized for all device sizes, from desktop grids to mobile stacks.
- **Developer-Focused UI**: Dark mode by default with clean typography and premium color palettes.
- **Robust Asset Loading**: Custom `ImageWithFallback` system for handling external resource reliability.

---

## 📄 License

Created by **Oscar** for professional portfolio exhibition.
