import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(options = { once: true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    ...options,
  });

  return { ref, isInView };
}
