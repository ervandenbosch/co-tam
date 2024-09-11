import { MainDishes } from "/components/maindishes";
import { Starters } from "/components/starters";
import { Desserts } from "/components/desserts";
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
          name="description"
          content="Welcome to Cô Tâm Vietnamese restaurant. The authentic Vietnamese cuisine in the center of Haarlem. Enjoy delicious Vietnamese food at the Spaarne."
        />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:locale:alternate" content="nl_NL"></meta>
      </Head>
      <div className="pt-[64px]">
        <div className="text-md pt-10 text-center lg2:text-lg sm:text-sm">
          <button
            className={"px-2 hover:font-bold " + (starters && "font-bold")}
            onClick={openStarters}
          >
            STARTERS
          </button>
          <b>|</b>
          <button
            className={"px-2 hover:font-bold " + (maindishes && "font-bold")}
            onClick={openMaindishes}
          >
            MAIN DISHES
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
          {starters && <Starters />}
          {maindishes && <MainDishes />}
          {desserts && <Desserts />}
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
