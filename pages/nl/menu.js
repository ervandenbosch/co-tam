import { MainDishesNL } from "/components/maindishesnl";
import { StartersNL } from "/components/startersnl";
import { DessertsNL } from "/components/dessertsnl";
import { useState } from "react";
import Head from "next/head";

export default function Menukaart() {
  const [maindishes, setMaindishes] = useState(true);
  const [starters, setStarters] = useState(false);
  const [desserts, setDesserts] = useState(false);

  function openMaindishes() {
    setMaindishes(true);
    setStarters(false);
    setDesserts(false);
  }

  function openStarters() {
    setStarters(true);
    setMaindishes(false);
    setDesserts(false);
  }

  function openDesserts() {
    setDesserts(true);
    setMaindishes(false);
    setStarters(false);
  }

  return (
    <>
      <Head>
        <title>Menu Cô Tâm</title>
        <meta
          name="beschrijving"
          content="Welkom bij Cô Tâm Vietnamees restaurant. De authentieke Vietnamese keuken in het centrum van Haarlem. Geniet van heerlijk Vietnamees eten aan het Spaarne."
        />

        <meta property="og:locale" content="nl_NL"></meta>
        <meta property="og:locale:alternate" content="en_US"></meta>
      </Head>
      <div className="pt-[64px]">
        <div className="text-md pt-10 text-center lg2:text-lg sm:text-sm">
          <button
            className={"px-2 hover:font-bold " + (starters && "font-bold")}
            onClick={openStarters}
          >
            VOORGERECHTEN
          </button>
          <b>|</b>
          <button
            className={"px-2 hover:font-bold " + (maindishes && "font-bold")}
            onClick={openMaindishes}
          >
            HOOFDGERECHTEN
          </button>
          <b>|</b>
          <button
            className={
              "px-2 hover:font-bold " +
              (desserts && "font-bold underline underline-offset-8")
            }
            onClick={openDesserts}
          >
            DESSERTS
          </button>
        </div>
        <div className="">
          {starters && <StartersNL />}
          {maindishes && <MainDishesNL />}
          {desserts && <DessertsNL />}
        </div>
        <div className="px-4 py-12">
          <h2 className="pb-4 text-center text-sm font-bold">Allergenen</h2>
          <img
            src="/images/allergens.webp"
            className="m-auto max-w-[500px] sm:w-full sm:pl-3 sm:pr-1"
          />
        </div>
      </div>
    </>
  );
}
