import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Neem contact op met AB Outdoor Kitchens en vraag vrijblijvend informatie aan." };

export default function Contact() {
  return (
    <main className="min-h-screen bg-sand px-[5vw] pb-24 pt-32 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.3fr]">
        <div>
          <h1 className="h2">Neem contact op</h1>
          <p className="mt-4 text-mute">Vertel ons over uw tuin of terras. Wij reageren persoonlijk en vrijblijvend.</p>
          <address className="mt-8 not-italic leading-8">
            <a href={`tel:${SITE.phone}`} className="underline decoration-gold underline-offset-4">{SITE.phoneDisplay}</a><br />
            <a href={`mailto:${SITE.email}`} className="underline decoration-gold underline-offset-4">{SITE.email}</a><br />
            {SITE.address}
          </address>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
