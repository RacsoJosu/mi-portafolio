import { motion } from 'motion/react'
import {  type ComponentProps, type ReactElement } from 'react'
import { cn } from '#/shared/components/ui/utils'

type ProjectsBodyElement = ReactElement<typeof Projects.Body>

type ProjectsProps = Omit<ComponentProps<"section">, "children"> & {
  children: ProjectsBodyElement | ProjectsBodyElement[]
}
export function Projects({
  className, children, ...rest
}:ProjectsProps) {
  return (
    <section id="projects" className={cn("min-h-screen flex items-center justify-center px-6 py-20", className)}
{...rest}
    >
      {children}
    </section>
  )
}


Projects.Body = function Body({className, children,...rest}: ComponentProps<"div">) {
  return (
    <div className={cn("max-w-7xl w-full", className)}
    {...rest}
    >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>

  )
}

Projects.Title = function Title({ children, className, ...rest}: ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-4xl mb-16 text-center", className)}
    {...rest}
    >
{children}
          </h2>

  )
}

type ProjectsListElement = ReactElement<typeof Projects.List>

type ProjectsListProps = Omit<ComponentProps<"div">, "children"> & {
  children: ProjectsListElement | ProjectsListElement[]
}
Projects.List = function List({children, className, ...rest}:ProjectsListProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8", className)}
    {...rest}
    >
      {children}
   </div>
  )
}
