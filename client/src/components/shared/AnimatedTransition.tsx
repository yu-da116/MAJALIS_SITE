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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
