import Head from "next/head";
import { MapPin, Clock, Utensils, Users } from "lucide-react";

export default function Vacancies() {
  return (
    <>
      <Head>
        <title>Independent Cook – Cô Tâm Vietnamese Restaurant</title>
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
            Independent Cook
          </h1>
          <p className="text-md text-neutral-600 max-w-xl mx-auto">
            Join our family-run kitchen and bring authentic Vietnamese flavours to life.
          </p>
        </section>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            About Cô Tâm
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Cô Tâm is a vibrant, family-run Vietnamese restaurant nestled along the
            Spaarne river in the heart of Haarlem. We celebrate authentic flavours,
            fresh ingredients, and the kind of hospitality that makes every guest feel
            like family.
          </p>
        </section>

        {/* Position */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            Position Overview
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            We’re looking for a passionate, self-driven cook who can take charge of their
            station and help us deliver unforgettable dishes. You’ll work closely with our
            small, close-knit team in a fast-paced yet supportive environment.
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            Key Responsibilities
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700 leading-relaxed">
            <li>Contribute to menu development and refine cooking methods.</li>
            <li>Prepare and cook dishes to our high quality and presentation standards.</li>
            <li>Work independently and efficiently manage your station in a busy kitchen.</li>
            <li>Collaborate with team members to ensure smooth kitchen operations and effective communication.</li>
            <li>Maintain a clean and organized work environment, adhering to food safety and hygiene standards.</li>
            <li>Manage inventory and assist with ordering supplies as needed.</li>
            <li>Ensure punctuality and reliability in the execution of shifts.</li>
            <li>Technical management of kitchen help staff</li>
          </ul>
        </section>

        {/* Offer */}
        <section className="mb-8 bg-emerald-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            What We Offer
          </h2>
 <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
              <span className="text-neutral-700">
                A stunning location on the Spaarne river in central Haarlem.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-emerald-600" />
              <span className="text-neutral-700">
                A warm, family-like team and bi-annual team-building dinners.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-emerald-600" />
              <span className="text-neutral-700">
                38 hours/week, Tuesday–Sunday, with public-transport reimbursement.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Utensils className="mt-1 h-5 w-5 text-emerald-600" />
              <span className="text-neutral-700">
                Daily staff meal and continuous training & growth.
              </span>
            </div>
          </div>

        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
            Who You Are
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-neutral-700 leading-relaxed">
            <li>MBO-3 culinary diploma or equivalent experience.</li>
            <li>Proven ability to work independently and stay organised.</li>
            <li>Keen eye for presentation and detail.</li>
            <li>Fluent in English or Dutch.</li>
            <li>Positive, energetic and eager to learn and grow in a dynamic kitchen.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center bg-emerald-100 p-8 rounded-lg sm:w-full lg:w-2/3 mx-auto">
          <a
            href="mailto:cotamrestaurant@gmail.com?subject=Application Independent Cook"
            className="inline-block rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700"
          >
            Apply Now
          </a>
          <p className="mt-4 text-sm text-neutral-700">
            Send your CV and a short motivation to{" "}
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