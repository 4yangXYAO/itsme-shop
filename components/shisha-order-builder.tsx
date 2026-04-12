"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Check, ChevronDown, ChevronUp, Bike, Info, Glasses } from "lucide-react"
import { useLanguage } from "@/components/language-context"

// ── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "6282266475348"

// ── Menu Data ────────────────────────────────────────────────────────────────
export const PACKAGES = [
  {
    id: "paket-1",
    label: "Paket 1",
    price: "Rp350.000",
    desc: { en: "Starter — 1 flavor", id: "Pemula — 1 rasa" },
  },
  {
    id: "paket-2",
    label: "Paket 2",
    price: "Rp450.000",
    desc: { en: "Premium — 2 flavors", id: "Premium — 2 rasa" },
  },
  {
    id: "paket-3",
    label: "Paket 3",
    price: "Rp550.000",
    desc: { en: "Deluxe — 3 flavors", id: "Deluxe — 3 rasa" },
  },
]

export const SIGNATURE_FLAVORS = ["Tropina Mint", "Berry Fusion"]
export const SINGLE_FLAVORS = ["Mint", "2Apple", "Kiwi", "Strawberry", "Nanas", "Blueberry", "Semangka", "Panras"]
export const MIX_FLAVORS = ["Lady Killer", "Love66", "Labonita", "Havana", "Marakunja"]
export const DARKSIDE_FLAVORS = ["Red Alert", "Dark Passion", "Fruitality", "Spacejam"]
export const EXTRAS = [
  { id: "extra-flavor", label: "Extra flavor (+1 portion)", price: "+Rp100.000" },
  { id: "extra-charcoal", label: "Extra charcoal (carkol)", price: "+Rp50.000" },
]

// ── Types ────────────────────────────────────────────────────────────────────
interface DeliveryForm {
  name: string
  phone: string
  address: string
  area: string
  notes: string
}

// ── WhatsApp Message Builder ─────────────────────────────────────────────────
function buildWAMessage(opts: {
  pkg: string | null
  signature: string[]
  single: string[]
  mix: string[]
  darkside: string[]
  extras: string[]
  isDelivery: boolean | null
  delivery: DeliveryForm
}): string {
  const { pkg, signature, single, mix, darkside, extras, isDelivery, delivery } = opts

  const line = (label: string, items: string[]) =>
    items.length > 0 ? `${label}:\n${items.map((i) => `  - ${i}`).join("\n")}` : `${label}:\n  (none)`

  const pkgLabel = PACKAGES.find((p) => p.id === pkg)
  const pkgText = pkgLabel ? `${pkgLabel.label} — ${pkgLabel.price}` : "(not selected)"

  let msg = `Hello ItsMe Hookah & Tattoo! 🌿\nI would like to place a shisha order.\n\n`
  msg += `📦 Package:\n  ${pkgText}\n\n`
  msg += `✨ ${line("Signature Flavors", signature)}\n\n`
  msg += `🍃 ${line("Single Flavors", single)}\n\n`
  msg += `🌀 ${line("Mix Flavors", mix)}\n\n`
  msg += `🔥 ${line("Darkside Flavors", darkside)}\n\n`
  msg += `➕ ${line("Extras", extras.map((id) => EXTRAS.find((e) => e.id === id)?.label ?? id))}\n\n`

  if (isDelivery === true) {
    msg += `🛵 Delivery: Yes (+Rp150.000)\n`
    msg += `  Name: ${delivery.name || "-"}\n`
    msg += `  Phone: ${delivery.phone || "-"}\n`
    msg += `  Address: ${delivery.address || "-"}\n`
    msg += `  Area: ${delivery.area || "-"}\n`
    if (delivery.notes) msg += `  Notes: ${delivery.notes}\n`
  } else if (isDelivery === false) {
    msg += `🏠 Delivery: No (Dine-in / Pickup)\n`
  } else {
    msg += `🚗 Delivery: (not specified)\n`
  }

  msg += `\nPlease confirm availability. Thank you! 🙏`
  return msg
}

// ── Sub-components ───────────────────────────────────────────────────────────

/** Section wrapper with step number and title */
function SectionBlock({
  step,
  title,
  subtitle,
  children,
}: {
  step: number
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-10">
      <div className="flex items-start gap-4 mb-5">
        <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-primary text-primary text-xs font-medium">
          {step}
        </span>
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-foreground leading-none">{title}</h3>
          {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="pl-11">{children}</div>
    </div>
  )
}

/** Single-select package card */
function PackageCard({
  pkg,
  selected,
  lang,
  onClick,
}: {
  pkg: (typeof PACKAGES)[number]
  selected: boolean
  lang: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left border p-5 transition-all duration-200 ${
        selected
          ? "border-primary bg-primary/10 shadow-[0_0_16px_rgba(var(--primary)/0.15)]"
          : "border-border bg-transparent hover:border-primary/50 hover:bg-secondary/30"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{pkg.label}</span>
          <p className="font-serif text-2xl text-primary mt-1">{pkg.price}</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            {lang === "en" ? pkg.desc.en : pkg.desc.id}
          </p>
        </div>
        <div
          className={`w-5 h-5 border flex items-center justify-center shrink-0 ml-4 transition-colors ${
            selected ? "border-primary bg-primary" : "border-border"
          }`}
        >
          {selected && <Check className="w-3 h-3 text-primary-foreground" />}
        </div>
      </div>
    </button>
  )
}

/** Toggleable flavor pill */
function FlavorPill({
  name,
  selected,
  variant = "default",
  onClick,
}: {
  name: string
  selected: boolean
  variant?: "default" | "signature" | "darkside"
  onClick: () => void
}) {
  const base = "px-4 py-2 text-sm border transition-all duration-150 cursor-pointer select-none"
  const styles: Record<string, string> = {
    default: selected
      ? "border-primary bg-primary/15 text-primary"
      : "border-border text-foreground hover:border-primary/60 hover:text-primary",
    signature: selected
      ? "border-primary bg-primary/20 text-primary font-medium"
      : "border-primary/30 bg-primary/5 text-primary/70 hover:bg-primary/10 hover:text-primary",
    darkside: selected
      ? "border-primary bg-primary/20 text-primary"
      : "border-primary/20 bg-secondary/40 text-foreground hover:border-primary/60",
  }
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles[variant]}`}>
      <span className="flex items-center gap-2">
        {selected && <Check className="w-3 h-3 shrink-0" />}
        {name}
      </span>
    </button>
  )
}

/** Input field */
function FormInput({
  label,
  placeholder,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  type?: string
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          className="w-full bg-secondary/30 border border-border text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className="w-full bg-secondary/30 border border-border text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  )
}

// ── Main Order Builder ────────────────────────────────────────────────────────
export function ShishaOrderBuilder() {
  const { lang, t } = useLanguage()

  // State
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [selectedSignature, setSelectedSignature] = useState<string[]>([])
  const [selectedSingle, setSelectedSingle] = useState<string[]>([])
  const [selectedMix, setSelectedMix] = useState<string[]>([])
  const [selectedDarkside, setSelectedDarkside] = useState<string[]>([])
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [isDelivery, setIsDelivery] = useState<boolean | null>(null)
  const [deliveryForm, setDeliveryForm] = useState<DeliveryForm>({
    name: "", phone: "", address: "", area: "", notes: "",
  })
  const [summaryOpen, setSummaryOpen] = useState(false)

  // Toggle helper
  const toggle = useCallback((list: string[], item: string, set: (v: string[]) => void) => {
    set(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])
  }, [])

  const updateDelivery = (field: keyof DeliveryForm, val: string) =>
    setDeliveryForm((prev) => ({ ...prev, [field]: val }))

  // WA message
  const waMessage = buildWAMessage({
    pkg: selectedPackage,
    signature: selectedSignature,
    single: selectedSingle,
    mix: selectedMix,
    darkside: selectedDarkside,
    extras: selectedExtras,
    isDelivery,
    delivery: deliveryForm,
  })

  const orderLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`
  const consultLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello ItsMe Hookah & Tattoo! I would like to consult about your shisha menu and delivery options. Could you help me? Thank you!"
  )}`

  const canOrder = selectedPackage !== null

  // Summary counts
  const totalFlavors = [
    ...selectedSignature, ...selectedSingle, ...selectedMix, ...selectedDarkside,
  ].length

  return (
    <div className="max-w-3xl mx-auto">
      {/* ── Step 1: Package ─────────────────────────────────────────────────── */}
      <SectionBlock
        step={1}
        title={t("Choose Your Package", "Pilih Paket")}
        subtitle={t("Select one package to get started", "Pilih satu paket untuk mulai")}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              lang={lang}
              selected={selectedPackage === pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
            />
          ))}
        </div>
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Step 2: Signature Flavors ───────────────────────────────────────── */}
      <SectionBlock
        step={2}
        title={t("Signature Flavors", "Signature Flavors")}
        subtitle={t("Our house specials — highly recommended", "Spesial kami — sangat direkomendasikan")}
      >
        <div className="flex flex-wrap gap-3">
          {SIGNATURE_FLAVORS.map((f) => (
            <FlavorPill
              key={f}
              name={f}
              variant="signature"
              selected={selectedSignature.includes(f)}
              onClick={() => toggle(selectedSignature, f, setSelectedSignature)}
            />
          ))}
        </div>
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Step 3: Single Flavor ───────────────────────────────────────────── */}
      <SectionBlock
        step={3}
        title={t("Single Flavor", "Single Flavor")}
        subtitle={t("Pick one or more pure flavors", "Pilih satu atau lebih rasa murni")}
      >
        <div className="flex flex-wrap gap-3">
          {SINGLE_FLAVORS.map((f) => (
            <FlavorPill
              key={f}
              name={f}
              selected={selectedSingle.includes(f)}
              onClick={() => toggle(selectedSingle, f, setSelectedSingle)}
            />
          ))}
        </div>
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Step 4: Mix Flavor ──────────────────────────────────────────────── */}
      <SectionBlock
        step={4}
        title={t("Mix Flavor", "Mix Flavor")}
        subtitle={t("Pre-blended signature combinations", "Kombinasi campuran pilihan")}
      >
        <div className="flex flex-wrap gap-3">
          {MIX_FLAVORS.map((f) => (
            <FlavorPill
              key={f}
              name={f}
              selected={selectedMix.includes(f)}
              onClick={() => toggle(selectedMix, f, setSelectedMix)}
            />
          ))}
        </div>
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Step 5: Darkside ────────────────────────────────────────────────── */}
      <SectionBlock
        step={5}
        title={t("Darkside Flavors", "Darkside Flavors")}
        subtitle={t("Premium bold blends — intense experience", "Campuran premium berani — pengalaman intens")}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-primary border border-primary/40 px-2 py-0.5">
            {t("Premium", "Premium")}
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {DARKSIDE_FLAVORS.map((f) => (
            <FlavorPill
              key={f}
              name={f}
              variant="darkside"
              selected={selectedDarkside.includes(f)}
              onClick={() => toggle(selectedDarkside, f, setSelectedDarkside)}
            />
          ))}
        </div>
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Step 6: Extras ──────────────────────────────────────────────────── */}
      <SectionBlock
        step={6}
        title={t("Add Extras", "Tambahan")}
        subtitle={t("Optional add-ons to enhance your session", "Tambahan opsional untuk sesi terbaik")}
      >
        <div className="space-y-3">
          {EXTRAS.map((extra) => (
            <button
              key={extra.id}
              type="button"
              onClick={() => toggle(selectedExtras, extra.id, setSelectedExtras)}
              className={`w-full flex items-center justify-between border px-5 py-4 transition-all ${
                selectedExtras.includes(extra.id)
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50 hover:bg-secondary/20"
              }`}
            >
              <span className="flex items-center gap-3 text-sm text-foreground">
                <span
                  className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors ${
                    selectedExtras.includes(extra.id) ? "border-primary bg-primary" : "border-border"
                  }`}
                >
                  {selectedExtras.includes(extra.id) && (
                    <Check className="w-2.5 h-2.5 text-primary-foreground" />
                  )}
                </span>
                {extra.label}
              </span>
              <span className="text-sm text-primary font-medium">{extra.price}</span>
            </button>
          ))}
        </div>
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Step 7: Delivery ────────────────────────────────────────────────── */}
      <SectionBlock
        step={7}
        title={t("Delivery?", "Pesan Antar?")}
        subtitle={t("Choose dine-in or delivery to your location", "Pilih makan di tempat atau antar ke lokasi")}
      >
        <div className="flex gap-4 mb-6">
          {[
            { val: false, label: t("No — Dine In", "Tidak — Di Tempat") },
            { val: true, label: t("Yes — Delivery", "Ya — Dikirim") },
          ].map(({ val, label }) => (
            <button
              key={String(val)}
              type="button"
              onClick={() => setIsDelivery(val)}
              className={`flex-1 py-4 text-sm border font-medium tracking-wide transition-all ${
                isDelivery === val
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Delivery info note */}
        {isDelivery === true && (
          <div className="space-y-4">
            <div className="flex items-start gap-2 bg-secondary/30 border border-border px-4 py-3 text-sm text-muted-foreground mb-5">
              <Bike className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                {t(
                  "Delivery to Ubud, Jimbaran, Nusa Dua, Uluwatu: +Rp150.000 · Open 24 hours",
                  "Delivery ke Ubud, Jimbaran, Nusa Dua, Uluwatu: +Rp150.000 · Buka 24 jam"
                )}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                label={t("Full Name", "Nama Lengkap")}
                placeholder={t("Your name", "Nama kamu")}
                value={deliveryForm.name}
                onChange={(v) => updateDelivery("name", v)}
                required
              />
              <FormInput
                label={t("Phone Number", "Nomor HP")}
                placeholder="+62..."
                value={deliveryForm.phone}
                onChange={(v) => updateDelivery("phone", v)}
                type="tel"
                required
              />
            </div>
            <FormInput
              label={t("Full Address", "Alamat Lengkap")}
              placeholder={t("Street, village, area...", "Jalan, desa, area...")}
              value={deliveryForm.address}
              onChange={(v) => updateDelivery("address", v)}
              type="textarea"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                label={t("Delivery Area", "Area / Wilayah")}
                placeholder="Ubud / Jimbaran / Nusa Dua / Uluwatu"
                value={deliveryForm.area}
                onChange={(v) => updateDelivery("area", v)}
                required
              />
              <FormInput
                label={t("Notes (optional)", "Catatan (opsional)")}
                placeholder={t("Landmark, gate code...", "Patokan, kode pintu...")}
                value={deliveryForm.notes}
                onChange={(v) => updateDelivery("notes", v)}
              />
            </div>
          </div>
        )}
      </SectionBlock>

      <div className="border-t border-border/40 my-6" />

      {/* ── Order Summary ────────────────────────────────────────────────────── */}
      <div className="mb-8">
        <button
          type="button"
          onClick={() => setSummaryOpen((o) => !o)}
          className="w-full flex items-center justify-between border border-border bg-secondary/20 px-5 py-4 text-sm hover:border-primary/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Info className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">
              {t("Order Summary", "Ringkasan Pesanan")}
            </span>
            {(selectedPackage || totalFlavors > 0) && (
              <span className="text-xs border border-primary/40 text-primary px-2 py-0.5">
                {totalFlavors} {t("flavor(s)", "rasa")}
                {selectedPackage && ` · ${PACKAGES.find((p) => p.id === selectedPackage)?.label}`}
              </span>
            )}
          </div>
          {summaryOpen ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </button>

        {summaryOpen && (
          <div className="border border-t-0 border-border bg-secondary/10 px-5 py-5 text-sm space-y-3">
            <SummaryRow
              label={t("Package", "Paket")}
              value={
                selectedPackage
                  ? `${PACKAGES.find((p) => p.id === selectedPackage)?.label} — ${PACKAGES.find((p) => p.id === selectedPackage)?.price}`
                  : t("(not selected)", "(belum dipilih)")
              }
              highlight={!!selectedPackage}
            />
            <SummaryRow
              label={t("Signature", "Signature")}
              value={selectedSignature.join(", ") || t("(none)", "(tidak ada)")}
              highlight={selectedSignature.length > 0}
            />
            <SummaryRow
              label={t("Single", "Single")}
              value={selectedSingle.join(", ") || t("(none)", "(tidak ada)")}
              highlight={selectedSingle.length > 0}
            />
            <SummaryRow
              label={t("Mix", "Mix")}
              value={selectedMix.join(", ") || t("(none)", "(tidak ada)")}
              highlight={selectedMix.length > 0}
            />
            <SummaryRow
              label={t("Darkside", "Darkside")}
              value={selectedDarkside.join(", ") || t("(none)", "(tidak ada)")}
              highlight={selectedDarkside.length > 0}
            />
            <SummaryRow
              label={t("Extras", "Tambahan")}
              value={
                selectedExtras.length > 0
                  ? selectedExtras.map((id) => EXTRAS.find((e) => e.id === id)?.label).join(", ")
                  : t("(none)", "(tidak ada)")
              }
              highlight={selectedExtras.length > 0}
            />
            <SummaryRow
              label={t("Delivery", "Pengiriman")}
              value={
                isDelivery === true
                  ? t("Yes — +Rp150.000", "Ya — +Rp150.000")
                  : isDelivery === false
                  ? t("No — Dine In", "Tidak — Di Tempat")
                  : t("(not selected)", "(belum dipilih)")
              }
              highlight={isDelivery !== null}
            />
          </div>
        )}
      </div>

      {/* ── CTA Buttons ─────────────────────────────────────────────────────── */}
      {!canOrder && (
        <p className="text-center text-xs text-muted-foreground mb-4 flex items-center justify-center gap-1">
          <Info className="w-3.5 h-3.5 text-primary/60" />
          {t("Please select a package to place your order.", "Silakan pilih paket untuk melanjutkan pesanan.")}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
  disabled={!canOrder}
  className="flex-1 bg-[#1b5e35] text-white hover:bg-[#164d2c] disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-[0.15em] text-sm h-auto py-3 px-5"
  asChild={canOrder}
>
  {canOrder ? (
    <a href={orderLink} target="_blank" rel="noopener noreferrer">
      <MessageCircle className="w-4 h-4 mr-2" />
      {t("Order via WhatsApp", "Pesan via WhatsApp")}
    </a>
  ) : (
    <span>
      <MessageCircle className="w-4 h-4 mr-2" />
      {t("Order via WhatsApp", "Pesan via WhatsApp")}
    </span>
  )}
</Button>

        <Button
          variant="outline"
          className="flex-1 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-[0.15em] text-sm h-auto py-3 px-5"
          asChild
        >
          <a href={consultLink} target="_blank" rel="noopener noreferrer">
            <Glasses className="w-4 h-4 mr-2" />
            {t("Consultation", "Konsultasi")}
          </a>
        </Button>
      </div>
    </div>
  )
}

// ── Helper: Summary Row ───────────────────────────────────────────────────────
function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight: boolean
}) {
  return (
    <div className="flex gap-3">
      <span className="text-muted-foreground w-24 shrink-0">{label}:</span>
      <span className={highlight ? "text-foreground" : "text-muted-foreground/50 italic"}>{value}</span>
    </div>
  )
}
