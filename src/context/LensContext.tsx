"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lens } from "@/lib/types";

interface LensContextValue {
  lens: Lens;
  setLens: (lens: Lens) => void;
}

const LensContext = createContext<LensContextValue | undefined>(undefined);

export function LensProvider({ children }: { children: ReactNode }) {
  const [lens, setLensState] = useState<Lens>("general");

  useEffect(() => {
    const stored = window.localStorage.getItem("lens");
    if (stored === "general" || stored === "healthcare") {
      setLensState(stored);
    }
  }, []);

  const setLens = (next: Lens) => {
    setLensState(next);
    window.localStorage.setItem("lens", next);
  };

  return <LensContext.Provider value={{ lens, setLens }}>{children}</LensContext.Provider>;
}

export function useLens() {
  const ctx = useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used within LensProvider");
  return ctx;
}
