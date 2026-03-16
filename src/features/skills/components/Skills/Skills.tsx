import {  type ComponentProps } from 'react'
import { motion } from 'motion/react'
import { cn } from '#/shared/components/ui/utils'



export function Skills({ className, children, ...rest}:ComponentProps<"section">) {

  return (
    <section id="habilidades"
      className={cn("min-h-fit flex items-center justify-center px-6 pt-24 pb-12 bg-background/50 relative overflow-hidden", className)}
    {...rest}
    >
      {/* Background purely decorative blob */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 blur-[120px] rounded-full -z-10" /> */}

     {children}
    </section>
  )
}

Skills.Body = function Body({children, className, ...rest}:ComponentProps<"div">) {
  return (
    <div className={cn("max-w-7xl w-full", className)}
    {...rest}
    >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
  )
}

function Header({className, children, ...rest}:ComponentProps<"div">) {
  return (<div className={cn("text-center mb-16", className)}
    {...rest}

  >
    {children}

          </div>)
}

Header.Tittle = function HeaderTittle({className, children, ...rest} : ComponentProps<"h2">) {
  return (<h2 className={cn("text-5xl font-bold mb-4 tracking-tight", className)}
  {...rest}
  >
         {children}
            </h2>)
}

Header.Label = function Label({className, children, ...rest}:ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground max-w-2xl mx-auto", className)}
  {...rest}
  >
             {children}
            </p>
  )
}

Skills.Header = Header
