import Head from "next/head";
import { MapPin, Clock, Utensils, Users } from "lucide-react";

export default function Vacancies() {
  return (
    <>
      <Head>
        <title>Zelfstandig Werkend Kok</title>
        <meta
          name="description"
          content="Join Cô Tâm, a family-run Vietnamese restaurant in Haarlem. We’re hiring an independent cook who loves authentic food and warm hospitality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="mx-auto max-w-3xl px-6 sm:px-8 mb-16 font-sans text-neutral-800">
        {/* Hero */}
        <section className="text-center mt-24 mb-8">
          <h1 className="text-3xl font-bold text-emerald-700 mb-4">
Zelfstandig Werkend Kok          </h1>
          <p className="text-md text-neutral-600 max-w-xl mx-auto">
            Kom bij ons werken en breng de authentieke Vietnamese smaken tot leven.
          </p>
        </section>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
Over Ons       </h2>
          <p className="text-neutral-700 leading-relaxed">
Cô Tâm is een levendig, familierestaurant met een focus op authentieke Vietnamese gerechten. We zijn trots op het gebruik van verse ingrediënten en traditionele kooktechnieken om smaakvolle gerechten te creëren die de rijke Vietnamese cultuur weerspiegelen.
          </p>
        </section>

        {/* Position */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            Functieomschrijving
          </h2>
          <p className="text-neutral-700 leading-relaxed">
           Wij zijn op zoek naar een gepassioneerde en vaardige Zelfstandig Werkend Kok om ons keukenteam te versterken. De ideale kandidaat beschikt over uitstekende kookvaardigheden en kan zelfstandig werken in een dynamische omgeving.
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
Kerntaken          </h2>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700 leading-relaxed">
            <li>Levert input t.a.v. de samenstelling en wijziging van menu's, kaart end methoden.</li>
            <li>Bereiden en koken van onze diverse gerechten met oog voor kwaliteit en presentatie. Ingredienten worden zelf voorbereid.</li>
            <li>Zelfstandig werken en efficiënt beheren van je eigen werkstation in een drukke keuken.</li>
            <li>Samenwerken met collega’s om een soepele keukenwerking en goede communicatie te waarborgen.</li>
            <li>Zorgdragen voor een schone en georganiseerde werkplek, volgens de geldende hygiëne- en voedselveiligheidsnormen.</li>
            <li>Beheren van voorraad en ondersteunen bij het bestellen van ingrediënten indien nodig.</li>
            <li>Zorgen voor stiptheid en betrouwbaarheid tijdens je diensten.</li>
            <li>Vaktechnisch aansturen van hulpkracht(en)</li>
          </ul>
        </section>

        {/* Offer */}
        <section className="mb-8 bg-emerald-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
Wat wij bieden          </h2>
<div className="grid gap-6 sm:grid-cols-2">
  <div className="flex items-start gap-3">
    <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
    <span className="text-neutral-700">
      Een prachtige locatie aan de Spaarne in het centrum van Haarlem.
    </span>
  </div>
  <div className="flex items-start gap-3">
    <Users className="mt-1 h-5 w-5 text-emerald-600" />
    <span className="text-neutral-700">
      Een warm, hecht team en tweejaarlijkse teamdiners.
    </span>
  </div>
  <div className="flex items-start gap-3">
    <Clock className="mt-1 h-5 w-5 text-emerald-600" />
    <span className="text-neutral-700">
      38 uur per week, dinsdag t/m zondag, met openbare reiskostenvergoeding.
    </span>
  </div>
  <div className="flex items-start gap-3">
    <Utensils className="mt-1 h-5 w-5 text-emerald-600" />
    <span className="text-neutral-700">
      Dagelijkse maaltijd en continue training & ontwikkeling.
    </span>
  </div>
  </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            Wij zoeken een persoon die
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700 leading-relaxed">
            <li>een MBO3 koksopleiding heeft</li>
            <li>Kennis heeft van kooktechnieken en oog voor presentatie</li>
            <li>Goed kan werken in een zeer dynamische en snelle werkomgeving</li>
            <li>Bereid is om te leren en te groeien binnen het team.</li>
            <li>Punctueel is en beschikt over uitstekende organisatorische vaardigheden en oog voor detail</li>
            <li>Beheersing van Nederlandse of Engels taal</li>
            <li>Vriendelijk, energiek en proactief is</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center bg-emerald-100 p-8 rounded-lg sm:w-full lg:w-2/3 mx-auto">
          <a
            href="mailto:cotamrestaurant@gmail.com?subject=Application Independent Cook"
            className="inline-block rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700"
          >
Reageer nu          </a>
          <p className="mt-4 text-sm text-neutral-700">
            Stuur jouw CV en een korte motivatie naar{" "}
            <a
              href="mailto:cotamrestaurant@gmail.com"
              className="text-emerald-700 underline"
            >
              cotamrestaurant@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}