import * as React from "react";
import type { HTMLMotionProps } from "motion/react";

export interface HeroRootProps extends React.HTMLAttributes<HTMLElement> {}

export interface HeroBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
  imgAlt?: string;
}

export interface HeroContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface HeroMainProps extends HTMLMotionProps<"div"> {}

export interface HeroTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface HeroSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface HeroSocialProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface HeroSocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
