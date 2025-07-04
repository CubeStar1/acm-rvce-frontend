import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const
    }
  })
};

export const socialButtonVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.15,
    transition: { 
      type: "spring" as const, 
      stiffness: 400, 
      damping: 10 
    }
  }
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Contact page animations
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 15 
    }
  }
};

export const fadeInStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  })
};

export const formFieldVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut" as const
    }
  })
};

export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.97,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  })
};

export const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    filter: "blur(10px)" 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.43, 0.13, 0.23, 0.96] as const 
    }
  }
};

export const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 15 
    }
  }
}; 