"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Lang = "en" | "id"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  t: (en: string, id: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLang: () => {},
  t: (_en, id) => id,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id")

  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"))
  const t = (en: string, id: string) => (lang === "en" ? en : id)

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
