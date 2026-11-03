"use client";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";

const inp = "w-full border-0 border-b border-ink bg-transparent py-2.5 text-ink focus:outline-none focus:border-gold";
type Status = "idle" | "sending" | "ok" | "error";

function Field({ label, ...p }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return <label className="grid gap-1.5 text-sm text-mute">{label}<input {...p} className={inp} /></label>;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return setStatus("ok"); // spam-val
    if (!String(data.get("naam")).trim() || !/\S+@\S+\.\S+/.test(String(data.get("email")))) {
      setError("Vul uw naam en een geldig e-mailadres in."); return setStatus("error");
    }
    if (!endpoint) { setError("Het formulier is nog niet gekoppeld. Bel of mail ons in de tussentijd."); return setStatus("error"); }
    setStatus("sending");
    try {
      const r = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error("mislukt");
      form.reset(); setStatus("ok");
    } catch {
      setError("Versturen is niet gelukt. Probeer het later opnieuw of bel ons."); setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Naam" name="naam" autoComplete="name" required />
        <Field label="Telefoonnummer" name="telefoon" type="tel" autoComplete="tel" />
      </div>
      <Field label="E-mailadres" name="email" type="email" autoComplete="email" required />
      <label className="grid gap-1.5 text-sm text-mute">Bericht<textarea name="bericht" rows={5} className={inp} /></label>
      <button type="submit" disabled={status === "sending"} className="btn btn-dark justify-self-start disabled:opacity-60">
        {status === "sending" ? "Versturen…" : "Verstuur bericht"}
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "ok" && "Bedankt! Uw bericht is verstuurd. We nemen snel contact met u op."}
        {status === "error" && error}
      </p>
    </form>
  );
}
