import { createContext, useContext, useState, useEffect } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { AnimatePresence } from "framer-motion";

interface LoadingContextType {
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 初期ローディングを表示
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
