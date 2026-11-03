# AB Outdoor Kitchens website

## 1. Bekijken op uw computer
1. Installeer Node.js (nodejs.org, LTS-versie).
2. Open een terminal in deze map en typ: `npm install` en daarna `npm run dev`.
3. Ga naar http://localhost:3000

## 2. Publiceren (Vercel)
1. Maak een gratis account op github.com en zet deze map in een nieuwe repository.
2. Maak een gratis account op vercel.com, kies "Add New → Project" en kies de repository.
3. Voeg bij "Environment Variables" toe: `NEXT_PUBLIC_SITE_URL` (uw domein, bv. https://uwdomein.nl) en `NEXT_PUBLIC_FORMSPREE_URL` (zie punt 4). Klik Deploy.

## 3. Domeinnaam
Registreer de naam bij een registrar (bv. TransIP, Vimexx, Hostnet). In Vercel: Project → Settings → Domains → voeg uw domein toe en volg de DNS-instructies.

## 4. Contactformulier
Maak een gratis account op formspree.io, maak een formulier met uw e-mailadres en kopieer de URL (https://formspree.io/f/...) naar `NEXT_PUBLIC_FORMSPREE_URL`.

## 5. Zelf aanpassen
- Teksten van modellen en inspiratiebeelden: `data/models.ts`
- Telefoon, e-mail, adres, KvK: `lib/site.ts`
- Foto's: map `public/images` (zelfde bestandsnaam = automatisch vervangen)
- Een derde model: kopieer een blok in `data/models.ts`
- Na elke wijziging in GitHub bouwt Vercel de site automatisch opnieuw.
