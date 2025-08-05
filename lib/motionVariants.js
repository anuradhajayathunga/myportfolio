// motionVariants.js - Enhanced for Modern Portfolio Websites

// Smooth fade in from bottom - perfect for hero sections and content blocks
export const fadeInUp = (delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(4px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1], // Modern easing curve
    },
  },
});

// Elegant fade down - great for navigation and headers
export const fadeInDown = (delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: -30,
    filter: "blur(4px)"
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Professional stagger effect for lists and grids
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Refined zoom with subtle blur - perfect for cards and images
export const scaleIn = (delay = 0) => ({
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: "blur(8px)"
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Clean fade in - minimal and professional
export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Smooth slide from left - great for text content
export const slideInLeft = (delay = 0) => ({
  hidden: { 
    x: -60, 
    opacity: 0,
    filter: "blur(4px)"
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Smooth slide from right - perfect for alternating layouts
export const slideInRight = (delay = 0) => ({
  hidden: { 
    x: 60, 
    opacity: 0,
    filter: "blur(4px)"
  },
  show: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Elegant reveal with scale - ideal for hero elements
export const revealUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(6px)"
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Sophisticated text reveal - perfect for headings
export const textReveal = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 20,
    skewY: 2,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Modern floating animation - great for call-to-action buttons
export const floatIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotateX: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// Professional card hover effect
export const cardHover = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Smooth page transition
export const pageTransition = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(10px)"
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Staggered text animation for letters/words
export const staggerText = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const letterVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};