import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { inspiration } from "@/data/models";

export const metadata: Metadata = { title: "Inspiratie", description: "Inspiratie voor uw tuin of terras met een AB outdoor kitchen." };

export default function Inspiratie() {
  return (
    <main className="min-h-screen bg-cream px-[5vw] pb-24 pt-32 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <h1 className="h2">Inspiratie voor uw buitenruimte</h1>
        <p className="mt-4 text-mute">Zo kan buiten koken aanvoelen in verschillende omgevingen.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {inspiration.map((p, i) => (
            <Reveal key={p.src} delay={(i % 2) * 0.12}>
              <figure className="group relative aspect-[4/3] overflow-hidden text-[#f3e9d2]">
                <Image src={p.src} alt={`Impressie: ${p.title}, met de ${p.model}`} fill sizes="(min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-[1200ms] group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-b from-transparent from-55% to-brown/85" />
                <figcaption className="absolute inset-x-5 bottom-4">
                  <span className="block text-xs opacity-90">Impressie · {p.model}</span>
                  <span className="font-serif text-2xl">{p.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-mute">Impressies ter inspiratie van sfeer en omgeving. Het zijn geen foto’s van geleverde keukens.</p>
      </div>
    </main>
  );
}
