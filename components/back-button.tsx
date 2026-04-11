"use client"

import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-context"

interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  const { t } = useLanguage()
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors group"
      aria-label="Go back"
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-200" />
      {t("Back", "Kembali")}
    </button>
  )
}
