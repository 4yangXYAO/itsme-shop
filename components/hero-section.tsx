"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import type { Screen } from "@/app/page"

interface HeroSectionProps {
  onNavigate?: (screen: Screen) => void
}

const WHATSAPP_NUMBER = "6281234567890"

interface WhatsAppOrderData {
  package?: string;
  signatureFlavors?: string[];
  singleFlavors?: string[];
  mixFlavors?: string[];
  darksideFlavors?: string[];
  extras?: string[];
  delivery?: boolean;
  name?: string;
  phone?: string;
  address?: string;
  area?: string;
  notes?: string;
}

const buildWhatsAppOrderMessage = (orderData: WhatsAppOrderData): string => {
  const {
    package: selectedPackage,
    signatureFlavors = [],
    singleFlavors = [],
    mixFlavors = [],
    darksideFlavors = [],
    extras = [],
    delivery,
    name,
    phone,
    address,
    area,
    notes,
  } = orderData;

  const message = [
    "Hello, I would like to place a shisha order.",
    "",
    `Package: ${selectedPackage || "None"}`,
    signatureFlavors.length > 0
      ? `Signature Flavors: ${signatureFlavors.join(", ")}`
      : null,
    singleFlavors.length > 0
      ? `Single Flavors: ${singleFlavors.join(", ")}`
      : null,
    mixFlavors.length > 0
      ? `Mix Flavors: ${mixFlavors.join(", ")}`
      : null,
    darksideFlavors.length > 0
      ? `Darkside Flavors: ${darksideFlavors.join(", ")}`
      : null,
    extras.length > 0 ? `Extras: ${extras.join(", ")}` : null,
    "",
    `Delivery: ${delivery ? "Yes" : "No"}`,
    delivery
      ? [
          `Name: ${name || "-"}`,
          `Phone: ${phone || "-"}`,
          `Address: ${address || "-"}`,
          `Area: ${area || "-"}`,
          notes ? `Notes: ${notes}` : null,
        ]
          .filter(Boolean)
          .join("\n")
      : null,
    "",
    "Please confirm availability and total price. Thank you.",
  ]
    .filter(Boolean)
    .join("\n\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage()

  const orderData = {
    package: "Paket 2",
    signatureFlavors: ["Tropina Mint", "Berry Fusion"],
    singleFlavors: ["Mint", "Kiwi", "Blueberry"],
    mixFlavors: ["Love66", "Havana"],
    darksideFlavors: ["Dark Passion"],
    extras: ["Extra 1 portion flavor", "Extra charcoal"],
    delivery: true,
    name: "[Customer Name]",
    phone: "[Customer Phone]",
    address: "[Full Address]",
    area: "[Delivery Area]",
    notes: "[Optional Notes]",
  }

  const WHATSAPP_LINK = buildWhatsAppOrderMessage(orderData)

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero-hookah-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
        <span className="text-primary uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
          {t("Open 24 Hours", "Buka 24 Jam")}
        </span>
        <h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight max-w-4xl"
          style={{ lineHeight: "1.2", letterSpacing: "0.02em" }}
        >
          {t(
            "Welcome to ItsMe Hookah & Tattoo, where smoke meets art",
            "Selamat Datang di ItsMe Hookah & Tattoo, tempat asap bertemu seni"
          )}
        </h1>
        <p className="text-muted-foreground mt-6 text-sm sm:text-base md:text-lg max-w-xl">
          {t(
            "Perumahan Graha Tibung Sari, Dalung, Badung (Cia House)",
            "Perumahan Graha Tibung Sari, Dalung, Badung (Cia House)"
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-4"
            onClick={() => onNavigate?.("menu")}
          >
            {t("Shisha Menu", "Menu Shisha")}
          </Button>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-4"
            onClick={() => onNavigate?.("tattoo")}
          >
            {t("Tattoo Pricelist", "Harga Tattoo")}
          </Button>
          <Button
            size="lg"
            className="bg-green-600 text-white hover:bg-green-700 uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-4"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              {t("WhatsApp Us", "Chat WhatsApp")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
