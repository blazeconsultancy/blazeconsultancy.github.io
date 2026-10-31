export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const tapScale = {
  whileTap: { scale: 0.98 },
  transition: { duration: 0.15, ease: easeOut },
};
