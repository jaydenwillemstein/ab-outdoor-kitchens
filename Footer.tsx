import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-gold bg-brown px-[5vw] py-16 text-[#f3e9d2]">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10">
        <div>
          <p className="font-serif text-3xl text-gold">{SITE.name}</p>
          <p className="mt-1 text-[#b9a98c]">{SITE.tagline}</p>
        </div>
        <address className="text-sm not-italic leading-7 text-[#b9a98c]">
          <a href={`tel:${SITE.phone}`} className="hover:text-[#f3e9d2]">{SITE.phoneDisplay}</a><br />
          <a href={`mailto:${SITE.email}`} className="hover:text-[#f3e9d2]">{SITE.email}</a><br />
          {SITE.address}<br />
          KvK {SITE.kvk} · btw {SITE.btw}<br />
          <Link href="/privacy" className="hover:text-[#f3e9d2]">Privacyverklaring</Link> · © {new Date().getFullYear()} {SITE.name}
        </address>
      </div>
    </footer>
  );
}
