import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacyverklaring", robots: { index: false } };

export default function Privacy() {
  return (
    <main className="min-h-screen bg-cream px-[5vw] pb-24 pt-32 md:pt-36">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="h2">Privacyverklaring</h1>
        <p className="rounded border border-gold p-3 text-sm">Concept: laat deze tekst controleren voordat de website live gaat.</p>
        <p>{SITE.name}, {SITE.address}, KvK {SITE.kvk}, is verantwoordelijk voor de verwerking van persoonsgegevens op deze website.</p>
        <h2 className="pt-4 text-2xl">Welke gegevens</h2>
        <p>Via het contactformulier verwerken wij uw naam, e-mailadres, telefoonnummer (optioneel) en uw bericht.</p>
        <h2 className="pt-4 text-2xl">Waarvoor</h2>
        <p>Alleen om uw vraag te beantwoorden en contact met u op te nemen.</p>
        <h2 className="pt-4 text-2xl">Verwerker en bewaartermijn</h2>
        <p>Berichten lopen via onze formulierdienst (Formspree) naar ons e-mailadres. Bewaartermijn: [in te vullen].</p>
        <h2 className="pt-4 text-2xl">Uw rechten</h2>
        <p>U kunt uw gegevens inzien, laten corrigeren of laten verwijderen. Mail ons via {SITE.email}.</p>
      </div>
    </main>
  );
}
