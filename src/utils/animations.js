// Animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

export const hoverRotate = {
  whileHover: { rotate: 5 },
  whileTap: { rotate: 0 }
}

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const slideInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const flipIn = {
  initial: { opacity: 0, rotateY: -90 },
  animate: { opacity: 1, rotateY: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const zoomIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const slideDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const slideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

// Page transition variants
export const pageVariants = {
  initial: { opacity: 0, x: -200 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 200 }
}

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

// Loading animation variants
export const loadingVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

// Button animation variants
export const buttonVariants = {
  hover: { 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  tap: { scale: 0.95 }
}

// Card animation variants
export const cardVariants = {
  hover: { 
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  }
}

// Text animation variants
export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Icon animation variants
export const iconVariants = {
  hover: { 
    scale: 1.2,
    rotate: 5
  },
  tap: { scale: 0.9 }
}
