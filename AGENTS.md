# AGENTS.md

## Purpose

This document defines rules that AI agents must follow when generating
or modifying code in this repository. The goal is to ensure consistent
architecture, reusable components, and maintainable React code.

------------------------------------------------------------------------

# 1. Core Principles

Agents must prioritize the following principles:

1.  Composition over configuration
2.  Small and focused components
3.  Reusability first
4.  Feature-based architecture
5.  Clear separation between UI and logic
6.  Predictable folder structure
7.  Consistent design system usage

------------------------------------------------------------------------

# 2. Screaming Architecture

The project structure must reflect **business capabilities**, not
technical layers.

Example:

src/ features/ reservations/ users/ payments/ shared/ components/ hooks/
utils/ app/

Rules:

-   Features represent **domain concepts**
-   Shared folder contains reusable code across domains
-   Avoid root-level folders like:
    -   components
    -   helpers
    -   services

These belong inside a feature or shared module.

------------------------------------------------------------------------

# 3. Component Folder Structure

Each component must live inside its own folder.

Example:

Button/ Button.tsx Button.types.ts Button.styles.ts ButtonIcon.tsx
ButtonLabel.tsx index.ts

Rules:

-   One main component per folder
-   Subcomponents in separate files
-   Always expose exports through `index.ts`
-   Avoid large monolithic component files

Maximum recommended file size: **150 lines**

------------------------------------------------------------------------

# 4. Compound Components Pattern

Complex UI components must use the Compound Components Pattern.

Example:

`<Card>`{=html} \<Card.Header /\> \<Card.Body /\> \<Card.Footer /\>
`</Card>`{=html}

Rules:

-   Parent component acts as context provider
-   Subcomponents consume context
-   Avoid boolean props controlling UI structure

Avoid:

`<Card showHeader showFooter />`{=html}

Prefer:

`<Card>`{=html} \<Card.Header /\> \<Card.Body /\> `</Card>`{=html}

Benefits:

-   More flexible APIs
-   Better composition
-   Cleaner JSX structure

------------------------------------------------------------------------

# 5. Small Component Strategy

Components must follow single-responsibility principles.

Guidelines:

-   Components should handle **one UI responsibility**
-   Complex logic must be extracted into hooks
-   UI files should remain mostly declarative

Example:

hooks/ useReservationForm.ts

components/ ReservationForm/

------------------------------------------------------------------------

# 6. Hooks Architecture

Hooks encapsulate reusable logic.

Rules:

-   Hooks must start with `use`
-   Hooks should not render UI
-   Hooks should manage state and side effects

Example:

useModal useReservation usePagination

Hooks location:

feature/hooks/ or

shared/hooks/

------------------------------------------------------------------------

# 7. React Best Practices

Use:

-   Function components
-   TypeScript strict mode
-   Explicit prop typing

Example:

type Props = { children: React.ReactNode }

Avoid:

-   `any`
-   giant prop objects
-   unnecessary state duplication

------------------------------------------------------------------------

# 8. State Management

Guidelines:

-   Keep state **as local as possible**
-   Avoid prop drilling deeper than 2--3 levels
-   Use context sparingly
-   Prefer server state libraries for remote data

------------------------------------------------------------------------

# 9. Barrel Exports

Every component folder must include `index.ts`.

Example:

export \* from "./Button"

This allows imports like:

import { Button } from "@/shared/components"

------------------------------------------------------------------------

# 10. Design System Rules

All UI must follow a shared design system.

Agents must:

-   reuse existing UI primitives
-   maintain consistent spacing
-   maintain typography consistency
-   follow color tokens

Preferred structure:

shared/ components/ Button/ Card/ Modal/ Input/

These act as **design primitives**.

Feature components should compose these primitives instead of redefining
UI.

------------------------------------------------------------------------

# 11. UI Composition Strategy

Prefer:

Layout components Primitive components Compound components

Example structure:

`<Card>`{=html} \<Card.Header /\> \<Card.Body\> `<UserProfile />`{=html}
\</Card.Body\> `</Card>`{=html}

Avoid deeply nested UI logic inside one component.

------------------------------------------------------------------------

# 12. Accessibility

Agents must ensure:

-   semantic HTML usage
-   aria attributes where required
-   keyboard navigation support

Example:

button elements must use `<button>` instead of clickable divs.

------------------------------------------------------------------------

# 13. Performance Guidelines

When necessary:

-   use React.memo for expensive components
-   avoid unnecessary re-renders
-   keep props stable

Avoid premature optimization.

------------------------------------------------------------------------

# 14. Testing Strategy

Tests must live next to components.

Example:

Button/ Button.tsx Button.test.tsx

Tests should focus on:

-   component behavior
-   user interaction
-   rendering correctness

------------------------------------------------------------------------

# 15. Anti-Patterns to Avoid

Agents must avoid:

Large components (\>300 lines)

Deep prop drilling

Massive prop objects

Multiple responsibilities in one component

Feature logic inside shared components

Duplicated UI elements

Boolean prop explosions such as:

`<Component
  showIcon
  showFooter
  isPrimary
  hasShadow
/>`{=html}

Prefer composition instead.

------------------------------------------------------------------------

# 16. Naming Conventions

Components:

PascalCase

Hooks:

useSomething

Files:

ComponentName.tsx ComponentName.types.ts

------------------------------------------------------------------------

# 17. Example Component Structure

Example:

Card/ Card.tsx CardHeader.tsx CardBody.tsx CardFooter.tsx Card.types.ts
index.ts

Usage:

`<Card>`{=html} \<Card.Header /\> \<Card.Body /\> `</Card>`{=html}

------------------------------------------------------------------------

# 18. Final Rule

If a component becomes complex:

1.  split it into smaller components
2.  extract logic into hooks
3.  apply compound components
4.  reorganize the folder structure

Always prioritize **clarity and composability**.
