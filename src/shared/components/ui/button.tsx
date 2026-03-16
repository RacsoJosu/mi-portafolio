import type { ComponentProps } from "react"
import { cn } from "./utils"


function Button({onClick, className, type,children, ...rest }: ComponentProps<"button">) {
  return (
   <button
    type="button"
    onClick={onClick}
      className={cn("inline-flex items-center gap-2 bg-primary/80 text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors rounded-sm cursor-pointer", className)}
      {...rest}
    >{ children}</button>
  )
}

export default Button
