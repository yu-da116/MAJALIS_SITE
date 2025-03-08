import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = 2秒でカウントアップ

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="relative w-16 h-16 mb-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="absolute inset-0 border-2 border-primary/20 rounded-full"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="absolute inset-0 border-t-2 border-primary/40 rounded-full animate-spin"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut"}}
        className="text-xl font-medium text-primary/60"
      >
        {count}%
      </motion.div>
    </motion.div>
  );
}