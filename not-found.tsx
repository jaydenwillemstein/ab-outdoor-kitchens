import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center gap-5 bg-beige px-[5vw]">
      <h1 className="text-5xl">Deze pagina bestaat niet</h1>
      <Link href="/" className="btn btn-dark">Terug naar home</Link>
    </main>
  );
}
