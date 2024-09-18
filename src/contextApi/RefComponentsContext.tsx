"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
interface RefContextType {
  projectsRef: React.RefObject<HTMLDivElement>;
  formsRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
}

export const RefContext = createContext<RefContextType | undefined>(undefined);

const RefProvider = ({ children }: PropsWithChildren) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const formsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  return (
    <RefContext.Provider value={{ projectsRef, homeRef, formsRef }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => {
  const context = useContext(RefContext);
  if (!context) {
    throw new Error("UseRefContext must be used within a RefProvider.");
  }
  return context;
};

export default RefProvider;
