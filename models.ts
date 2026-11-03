// Een model toevoegen? Kopieer een blok in `models`, pas de tekst aan en zet de foto's in public/images.
export type Model = {
  slug: string; name: string; short: string; description: string;
  ratio: string; pos: string;
  images: { src: string; alt: string }[];
  specs: [string, string][];
  features: string[];
};

export const models: Model[] = [
  {
    slug: "outside-kitchen-pro",
    name: "Outside Kitchen Pro",
    short: "Zwart met witte kastdeuren, grill met 6 branders voor gas en houtskool",
    description: "De Outside Kitchen Pro is een complete outdoor kitchen in één geheel. Grill, spoelbak, inductiekookplaat en koelkast zitten in een doorlopend roestvrijstalen werkblad, met daaronder kasten en laden. Het zwarte aluminium frame en de witte kastdeuren geven de keuken een rustige, hoogwaardige uitstraling, en de handmatige klapdeur met RGB-ledstripverlichting maakt hem ook in de avond sfeervol.",
    ratio: "aspect-[4/3]", pos: "object-center",
    images: [
      { src: "/images/pro-1.jpg", alt: "Outside Kitchen Pro schuin van rechts met geopende klapdeur en verlichting" },
      { src: "/images/pro-2.jpg", alt: "Outside Kitchen Pro vooraanzicht" },
    ],
    specs: [
      ["Afmetingen", "2878 × 945 × 1200 mm"],
      ["Kleuren", "Zwarte buitenkant, zwarte binnenkant en witte kastdeuren"],
      ["Frame", "Aluminium rechthoekige buis"],
      ["Buitenkant", "Aluminium honingraatpaneel"],
      ["Binnenkant", "Aluminium honingraatpaneel"],
      ["Werkblad en spoelbak", "Roestvrij staal"],
      ["Kasten", "Aluminiumlegering"],
      ["Binnenpaneel opbergrek", "Aluminium honingraatplaat"],
      ["Elektrische apparatuur", "Koelkast, inductiekookplaat, grill met 6 branders voor gas en houtskool, spoor met stopcontacten, ledstripverlichting"],
    ],
    features: ["Handmatige klapdeur", "RGB-ledstripverlichting", "Ledverlichting in twee kleuren", "Grill met 6 branders (gas en houtskool)", "Inklapbare kraan", "Inductiekookplaat", "Roestvrijstalen aanrechtblad", "Koelkast", "Spoor met stopcontacten", "Beschermkap voor de elektriciteitskast aan de zijkant", "Verstelbare steunpoten"],
  },
  {
    slug: "outside-kitchen-mini-pro",
    name: "Outside Kitchen Mini Pro",
    short: "Grijs, grill met 4 branders voor gas",
    description: "De Outside Kitchen Mini Pro is een complete outdoor kitchen in een kortere uitvoering. Grill met vier branders, spoelbak en koelkast zitten in een doorlopend roestvrijstalen werkblad, met daaronder kasten en laden. De grijze buitenkant, binnenkant en kastdeuren geven de keuken een moderne, rustige uitstraling, en de handmatige klapdeur met RGB-ledstripverlichting zorgt voor sfeer in de avond.",
    ratio: "aspect-[4/5]", pos: "object-[50%_70%]",
    images: [
      { src: "/images/mini-1.jpg", alt: "Outside Kitchen Mini Pro vooraanzicht" },
      { src: "/images/mini-2.jpg", alt: "Outside Kitchen Mini Pro schuin van rechts" },
      { src: "/images/mini-3.jpg", alt: "Outside Kitchen Mini Pro schuin van links" },
    ],
    specs: [
      ["Afmetingen", "2287 × 945 × 1200 mm"],
      ["Kleuren", "Grijze buitenkant, grijze binnenkant en grijze kastdeuren"],
      ["Frame", "Aluminium rechthoekige buis"],
      ["Buitenkant", "Aluminium honingraatpaneel"],
      ["Binnenkant", "Aluminium honingraatpaneel"],
      ["Werkblad en spoelbak", "Roestvrij staal"],
      ["Kasten", "Aluminiumlegering"],
      ["Binnenpaneel opbergrek", "Aluminium honingraatplaat"],
      ["Elektrische apparatuur", "Koelkast, gasgrill met 4 branders, spoor met stopcontacten, ledstripverlichting"],
    ],
    features: ["Handmatige klapdeur", "RGB-ledstripverlichting", "Ledverlichting in twee kleuren", "Grill met 4 branders (gas)", "Inklapbare kraan", "Roestvrijstalen aanrechtblad", "Koelkast", "Spoor met stopcontacten", "Beschermkap voor de elektriciteitskast aan de zijkant", "Verstelbare steunpoten"],
  },
];

export const inspiration = [
  { src: "/images/insp-tuin.jpg", title: "Landelijke tuin", model: "Outside Kitchen Pro" },
  { src: "/images/insp-woning.jpg", title: "Moderne woning", model: "Outside Kitchen Pro" },
  { src: "/images/insp-terras.jpg", title: "Luxe terras", model: "Outside Kitchen Mini Pro" },
  { src: "/images/insp-avond.jpg", title: "Avond met verlichting", model: "Outside Kitchen Mini Pro" },
];
