"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

type langType = "en" | "pt";

/**
 * Setado a tipagem do context
 */

export type refProp = {
  lang: langType;
  setLang: Function;
};

/**
 * Setado o valor default do context tanto com o valor quanto sua função de alteração
 */

const DEFAULT_VALUE: refProp = {
  lang: "pt",
  setLang: () => {},
};

/**
 * Criado o contexto passando a tipagem refProp e com o DEFAULT_VALUE como valor inicial.
 */

export const LangContext = createContext<refProp>(DEFAULT_VALUE);

/**
 * Criada a função Provider passando children
 */

const LangProvider = ({ children }: PropsWithChildren) => {
  /**
   * Construído o estado que será manipulado com o valor default
   */
  const [lang, setLang] = useState<langType>(DEFAULT_VALUE.lang);

  /**
   * Retornando o Provider do contexto criado acima com values do estado acima.
   */

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

/**
 * Função criada para manipular possível erro na execução do contexto, intervindo com mensagem explicativa.
 */

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("UseLangContext must be used within a RefProvider.");
  }
  return context;
};

export default LangProvider;
