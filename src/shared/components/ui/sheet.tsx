import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { cn } from "#/shared/components/ui/utils"
import { createPortal } from "react-dom"

interface SheetProps {
  children: React.ReactNode
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  side?: "left" | "right" | "top" | "bottom"
}

export function Sheet({ children }: SheetProps) {
  return <>{children}</>
}

export function SheetTrigger({ children }: any) {
  return <>{children}</>
}

export function SheetContent({
  isOpen,
  onClose,
  side = "right",
  className,
  children,
}: SheetContentProps) {
  const variants = {
    closed: {
      x: side === "right" ? "100%" : side === "left" ? "-100%" : 0,
      y: side === "bottom" ? "100%" : side === "top" ? "-100%" : 0,
      opacity: 0,
    },
    open: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  }

  const transition: any = {
    type: "spring",
    damping: 25,
    stiffness: 200,
  }

  // Prevent scrolling when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (typeof document === "undefined") return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="sheet-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-90 bg-black/40 backdrop-blur-sm"
          />
          {/* Content */}
          <motion.div
            key="sheet-content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={transition}
            className={cn(
              "fixed z-100 bg-background p-6 shadow-2xl",
              {
                "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm": side === "right",
                "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm": side === "left",
                "inset-x-0 top-0 h-auto w-full border-b": side === "top",
                "inset-x-0 bottom-0 h-auto w-full border-t": side === "bottom",
              },
              className
            )}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

export function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
}

export function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-lg font-semibold text-foreground", className)} {...props} />
}

export function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <div className={cn("text-sm text-foreground/70", className)} {...props} />
}
