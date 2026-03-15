import * as React from 'react'
import { cn } from '#/shared/components/ui/utils'
import { Menu, X } from 'lucide-react'

interface HeaderRootProps extends React.HTMLAttributes<HTMLElement> {}

const Root = React.forwardRef<HTMLElement, HeaderRootProps>(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      'fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300',
      className
    )}
    {...props}
  >
    {children}
  </header>
))
Root.displayName = 'HeaderRoot'

interface HeaderBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

const Brand = React.forwardRef<HTMLDivElement, HeaderBrandProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-xl font-bold cursor-default flex items-center', className)} {...props}>
    <span className="text-foreground">{'<'}</span>
    <span className="text-primary">Dev</span>
    <span className="text-foreground">{('/>')}</span>
  </div>
))
Brand.displayName = 'HeaderBrand'

interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {}

const Nav = React.forwardRef<HTMLElement, HeaderNavProps>(({ className, children, ...props }, ref) => (
  <nav ref={ref} className={cn('hidden md:flex gap-8 items-center', className)} {...props}>
    {children}
  </nav>
))
Nav.displayName = 'HeaderNav'

interface HeaderLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, HeaderLinkProps>(
  ({ className, active, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'text-base transition-all duration-300 relative py-1 px-1',
        active
          ? 'text-primary font-medium'
          : 'text-foreground/70 hover:text-primary',
        'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300',
        active && 'after:scale-x-100',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
)
Link.displayName = 'HeaderLink'

// ──────────── NEW MOBILE TOGGLE & OVERLAY ────────────

interface HeaderToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
}

const Toggle = React.forwardRef<HTMLButtonElement, HeaderToggleProps>(
  ({ className, isOpen, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'md:hidden p-2 text-foreground focus:outline-none transition-colors hover:text-primary',
        className
      )}
      {...props}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  )
)
Toggle.displayName = 'HeaderToggle'

interface MobileOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
}

const MobileOverlay = React.forwardRef<HTMLDivElement, MobileOverlayProps>(
  ({ className, isOpen, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 top-[73px] z-40 bg-background/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out',
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none',
        className
      )}
      {...props}
    >
      <nav className="flex flex-col items-center justify-center h-full gap-10 p-6">
        {children}
      </nav>
    </div>
  )
)
MobileOverlay.displayName = 'MobileOverlay'

export const Header = {
  Root,
  Brand,
  Nav,
  Link,
  Toggle,
  MobileOverlay,
}
