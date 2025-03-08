import { createContext, useContext, useState, useEffect } from "react";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { AnimatePresence } from "framer-motion";

interface LoadingContextType {
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: (isLoading: boolean) => React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 初期ローディングを表示（カウントアップアニメーションの時間に合わせて2.5秒に設定）
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>
      {children(loading)}
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