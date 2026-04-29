"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

type AnimationVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const animationVariants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const selected = animationVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: selected.hidden as Record<string, unknown>,
        visible: {
          ...(selected.visible as Record<string, unknown>),
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      } as Variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
