import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { models } from "@/data/models";

const features = [
  ["Alles binnen handbereik", "Grill, spoelbak en koelkast in één doorlopend werkblad."],
  ["Sfeer tot laat in de avond", "RGB-ledstripverlichting geeft de keuken ook na zonsondergang sfeer."],
  ["Strak afgesloten", "De handmatige klapdeur sluit de keuken netjes af wanneer u klaar bent."],
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="px-[5vw] py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal><h2 className="h2">Koken in de tuin, op het hoogste niveau.</h2></Reveal>
          <Reveal delay={0.15}>
            <p>AB Outdoor Kitchens maakt van uw buitenruimte een plek om te koken, te ontvangen en te blijven hangen. Onze outdoor kitchens zijn complete keukens, ontworpen om buiten te staan en er thuis te zijn.</p>
            <p className="mt-5 text-mute">Een aluminium frame, een roestvrijstalen werkblad en een doordachte indeling combineren landelijke rust met moderne luxe. U geniet van het buitenleven; wij zorgen dat de keuken er past.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-sand px-[5vw] py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="h2">Onze outdoor kitchens</h2>
            <p className="mt-5 max-w-xl text-mute">Complete outdoor kitchens met grill, spoelbak en koelkast, gemaakt voor het buitenleven. Kies uw model en vraag vrijblijvend informatie aan.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {models.map((m) => (
              <Link key={m.slug} href={`/modellen#${m.slug}`} className="group relative block aspect-square overflow-hidden text-[#f3e9d2]">
                <Image src={m.images[0].src} alt={m.images[0].alt} fill sizes="(min-width:768px) 50vw, 100vw"
                  className={`object-cover transition duration-[1200ms] group-hover:scale-105 ${m.pos}`} />
                <span className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-brown/90" />
                <span className="absolute inset-x-6 bottom-5">
                  <b className="block font-serif text-3xl font-medium">{m.name}</b>
                  <span className="text-sm">{m.short}</span>
                </span>
              </Link>
            ))}
          </div>
          <Link href="/modellen" className="btn btn-dark mt-10">Bekijk alle modellen</Link>
        </div>
      </section>
      <section className="bg-cream px-[5vw] py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="h2">Gemaakt voor het buitenleven</h2></Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {features.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.12}>
                <div className="border-t-2 border-gold pt-5">
                  <h3 className="text-2xl">{t}</h3>
                  <p className="mt-2 text-[0.98rem] text-mute">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
