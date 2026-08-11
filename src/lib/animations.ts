import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Variants for fade up animation
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  }
};

// Variants for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Variants for text reveal
export const textRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  }
};

// Variants for scale image reveal
export const scaleImageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    }
  }
};

// Variants for floating elements
export const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Variants for parallax
export const parallaxVariants = {
  initial: { y: -50, opacity: 0 },
  enter: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    }
  },
  exit: {
    y: 50,
    opacity: 0
  }
};
