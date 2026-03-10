import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/shared/components/ui/utils";
import developerImage from "@/assets/154e5326f390a289c0fb5388da91aa1e529cf9fa.png";

import type {
  HeroRootProps,
  HeroBackgroundProps,
  HeroContainerProps,
  HeroMainProps,
  HeroTitleProps,
  HeroSubtitleProps,
  HeroActionsProps,
  HeroSocialProps,
  HeroSocialLinkProps,
} from "./types";

const Root = React.forwardRef<HTMLElement, HeroRootProps>(
  ({ className, children, ...props }, ref) => (
    <>
      <div className="h-[72px]" />
      <section
        ref={ref}
        className={cn(
          "min-h-screen flex items-center justify-center px-6 relative overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </section>
    </>
  )
);
Root.displayName = "HeroRoot";

const Background = React.forwardRef<HTMLDivElement, HeroBackgroundProps>(
  ({ className, children, imgSrc = developerImage, imgAlt = "Developer", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute inset-0 pointer-events-none flex justify-end", className)}
      {...props}
    >
      <div className="md:w-1/2 w-full h-full relative">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-cover object-center opacity-60 flex-shrink-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        {children}
      </div>
    </div>
  )
);
Background.displayName = "HeroBackground";

const Container = React.forwardRef<HTMLDivElement, HeroContainerProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Container.displayName = "HeroContainer";

const Main = React.forwardRef<HTMLDivElement, HeroMainProps>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
Main.displayName = "HeroMain";

const Title = React.forwardRef<HTMLHeadingElement, HeroTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h1 ref={ref} className={cn("text-6xl mb-6", className)} {...props}>
      {children}
    </h1>
  )
);
Title.displayName = "HeroTitle";

const Subtitle = React.forwardRef<HTMLParagraphElement, HeroSubtitleProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-xl text-muted-foreground mb-8 max-w-2xl", className)}
      {...props}
    >
      {children}
    </p>
  )
);
Subtitle.displayName = "HeroSubtitle";

const Actions = React.forwardRef<HTMLDivElement, HeroActionsProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-4", className)} {...props}>
      {children}
    </div>
  )
);
Actions.displayName = "HeroActions";

const Social = React.forwardRef<HTMLDivElement, HeroSocialProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-4 mt-8", className)} {...props}>
      {children}
    </div>
  )
);
Social.displayName = "HeroSocial";

const SocialLink = React.forwardRef<HTMLAnchorElement, HeroSocialLinkProps>(
  ({ className, children, href, ...props }, ref) => (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-foreground hover:text-primary transition-colors", className)}
      {...props}
    >
      {children}
    </a>
  )
);
SocialLink.displayName = "HeroSocialLink";

export const Hero = {
  Root,
  Background,
  Container,
  Main,
  Title,
  Subtitle,
  Actions,
  Social,
  SocialLink,
};
