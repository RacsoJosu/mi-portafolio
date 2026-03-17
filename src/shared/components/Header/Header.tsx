import * as React from 'react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/react-router'
import { cn } from '#/shared/components/ui/utils'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '#/shared/components/ui/sheet'

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

// ──────────── DESKTOP NAVIGATION ────────────

interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {}

const DesktopNav = React.forwardRef<HTMLElement, HeaderNavProps>(({ className, children, ...props }, ref) => (
  <nav ref={ref} className={cn('hidden md:flex gap-8 items-center', className)} {...props}>
    {children}
  </nav>
))
DesktopNav.displayName = 'HeaderDesktopNav'

interface HeaderLinkProps extends RouterLinkProps {
  children: React.ReactNode
  className?: string
}

const DesktopLink = ({ className, children, ...props }: HeaderLinkProps) => {
  return (
    <RouterLink
      className={cn(
        'text-base transition-all duration-300 relative py-1 px-1',
        'text-foreground/70 hover:text-primary',
        'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300',
        className
      )}
      // activeProps={{
      //   className: 'text-primary font-medium after:scale-x-100',
      // }}
      inactiveProps={{
        className: "text-foreground/70 hover:text-primary"
      }}
      // activeOptions={{ includeHash: true , exact: false}}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

// ──────────── MOBILE NAVIGATION ────────────

interface MobileNavProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  children: React.ReactNode
}

const MobileNav = ({ isOpen, onOpen, onClose, children }: MobileNavProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onOpen}
        className="p-2 text-foreground focus:outline-none transition-all hover:text-primary active:scale-95"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>
      <Sheet>
        <SheetContent
          isOpen={isOpen}
          onClose={onClose}
          side="right"
          className="border-l border-border pt-16 shadow-2xl"
        >
          <SheetHeader className="absolute top-6 left-6">
            <SheetTitle>
              <Brand />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-6 mt-8">
            {children}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
MobileNav.displayName = 'HeaderMobileNav'

const MobileLink = ({ className, children, onClick, ...props }: HeaderLinkProps & { onClick?: React.MouseEventHandler<HTMLAnchorElement> }) => {
  return (
    <RouterLink
      className={cn(
        'text-xl transition-all duration-300 py-2 px-4 border-l-4 border-transparent',
        'text-foreground/70 hover:text-primary hover:bg-primary/5',
        className
      )}
      // activeProps={{
      //   className: 'text-primary font-medium border-primary bg-primary/10',
      // }}
      // activeOptions={{ includeHash: true }}
      onClick={onClick}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

export const Header = {
  Root,
  Brand,
  DesktopNav,
  MobileNav,
  Link: DesktopLink,
  DesktopLink,
  MobileLink,
  Nav: DesktopNav,
}
