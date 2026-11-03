"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [["/", "Home"], ["/modellen", "Modellen"], ["/inspiratie", "Inspiratie"], ["/contact", "Contact"]] as const;

export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = scrolled || path !== "/";
  return (
    <header className={`fixed inset-x-0 top-0 z-30 text-[#efe8da] transition duration-500 ${solid ? "bg-brown/95 backdrop-blur" : ""}`}>
      <nav aria-label="Hoofdmenu" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-[5vw] py-3">
        <Link href="/" className="font-serif text-xl font-semibold md:text-2xl">AB Outdoor Kitchens</Link>
        <ul className="flex w-full justify-between gap-4 text-sm md:w-auto md:gap-8 md:text-base">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} aria-current={path === href ? "page" : undefined}
                className={`border-b pb-1 transition ${path === href ? "border-gold" : "border-transparent hover:border-current"}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
