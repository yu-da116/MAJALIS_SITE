import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

interface AnimatedTransitionProps {
  children: React.ReactNode;
}

export function AnimatedTransition({ children }: AnimatedTransitionProps) {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}