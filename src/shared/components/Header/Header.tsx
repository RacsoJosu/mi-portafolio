import * as React from 'react'
import { cn } from '#/shared/components/ui/utils'

interface HeaderRootProps extends React.HTMLAttributes<HTMLElement> {}

const Root = React.forwardRef<HTMLElement, HeaderRootProps>(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      'fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-border',
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
  <div ref={ref} className={cn('text-xl', className)} {...props}>
    <span className="text-foreground">{'<'}</span>
    <span className="text-primary">Dev</span>
    <span className="text-foreground">{('/>')}</span>
  </div>
))
Brand.displayName = 'HeaderBrand'

interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {}

const Nav = React.forwardRef<HTMLElement, HeaderNavProps>(({ className, children, ...props }, ref) => (
  <nav ref={ref} className={cn('flex gap-8', className)} {...props}>
    {children}
  </nav>
))
Nav.displayName = 'HeaderNav'

interface HeaderLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = React.forwardRef<HTMLAnchorElement, HeaderLinkProps>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn('text-foreground/80 hover:text-primary transition-colors', className)}
    {...props}
  >
    {children}
  </a>
))
Link.displayName = 'HeaderLink'

export const Header = {
  Root,
  Brand,
  Nav,
  Link,
}
