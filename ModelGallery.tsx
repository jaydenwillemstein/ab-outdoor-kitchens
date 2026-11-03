"use client";
import Image from "next/image";
import { useState } from "react";
import type { Model } from "@/data/models";

export default function ModelGallery({ m }: { m: Model }) {
  const [i, setI] = useState(0);
  const cur = m.images[i];
  return (
    <div>
      <div className={`relative w-full overflow-hidden ${m.ratio}`}>
        <Image key={cur.src} src={cur.src} alt={cur.alt} fill sizes="(min-width:768px) 55vw, 100vw" className={`object-cover ${m.pos}`} />
      </div>
      <div className="mt-3 flex gap-3">
        {m.images.map((im, n) => (
          <button key={im.src} type="button" onClick={() => setI(n)} aria-label={`Foto ${n + 1} bekijken`} aria-current={n === i}
            className={`relative w-24 overflow-hidden border-2 transition ${m.ratio} ${n === i ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"}`}>
            <Image src={im.src} alt="" fill sizes="96px" className={`object-cover ${m.pos}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
