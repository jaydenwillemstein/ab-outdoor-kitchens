import type { Metadata } from "next";
import Link from "next/link";
import ModelGallery from "@/components/ModelGallery";
import { models } from "@/data/models";

export const metadata: Metadata = { title: "Modellen", description: "Bekijk de Outside Kitchen Pro en de Outside Kitchen Mini Pro van AB Outdoor Kitchens." };

export default function Modellen() {
  return (
    <main className="min-h-screen bg-sand px-[5vw] pb-24 pt-32 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <h1 className="h2">Onze modellen</h1>
        <p className="mt-4 max-w-xl text-mute">Ontdek onze outdoor kitchens en vraag vrijblijvend informatie aan.</p>
        {models.map((m) => (
          <article key={m.slug} id={m.slug} className="mt-14 grid scroll-mt-28 gap-10 border-t border-line pt-14 first-of-type:border-0 first-of-type:pt-0 md:grid-cols-[1.15fr_1fr]">
            <ModelGallery m={m} />
            <div>
              <h2 className="text-4xl md:text-5xl">{m.name}</h2>
              <p className="mt-4 text-mute">{m.description}</p>
              <table className="my-6 w-full text-left">
                <tbody>
                  {m.specs.map(([k, v]) => (
                    <tr key={k} className="border-b border-gold/60">
                      <th scope="row" className="w-2/5 py-3 pr-4 align-top font-light text-mute">{k}</th>
                      <td className="py-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="font-sans text-lg font-medium">Wat erop zit</h3>
              <ul className="mt-3 grid gap-1.5">
                {m.features.map((f) => (
                  <li key={f} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-0.5 before:w-2 before:bg-gold">{f}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-dark mt-8">Vraag vrijblijvend informatie aan</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
