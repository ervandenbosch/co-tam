import { MainDishes } from "../components/maindishes";
import { Soups } from "../components/soups";
import { Starters } from "../components/starters";
import { Desserts } from "../components/desserts";
import { useState } from "react";
import Head from "next/head";

export default function Menu() {
  const [maindishes, setMaindishes] = useState(true);
  const [soups, setSoups] = useState(false);
  const [starters, setStarters] = useState(false);
  const [desserts, setDesserts] = useState(false);

  function openMaindishes() {
    setMaindishes(true);
    setSoups(false);
    setStarters(false);
    setDesserts(false);
  }

  function openSoups() {
    setSoups(true);
    setMaindishes(false);
    setStarters(false);
    setDesserts(false);
  }

  function openStarters() {
    setStarters(true);
    setSoups(false);
    setMaindishes(false);
    setDesserts(false);
  }

  function openDesserts() {
    setDesserts(true);
    setSoups(false);
    setMaindishes(false);
    setStarters(false);
  }

  return (
    <>
      <Head>
        <title>Menu Cô Tâm</title>
      </Head>
      <div className="pt-[64px]">
        <div className="text-md md2: pt-10 text-center lg2:text-lg sm:text-sm">
          <button
            className={"px-2 " + (starters && "font-bold")}
            onClick={openStarters}
          >
            STARTERS
          </button>{" "}
          |{" "}
          <button
            className={
              "px-2 " + (soups && "font-bold underline underline-offset-8")
            }
            onClick={openSoups}
          >
            SOUPS
          </button>{" "}
          |{" "}
          <button
            className={"px-2 " + (maindishes && "font-bold")}
            onClick={openMaindishes}
          >
            MAIN DISHES
          </button>{" "}
          |{" "}
          <button
            className={
              "px-2 " + (desserts && "font-bold underline underline-offset-8")
            }
            onClick={openDesserts}
          >
            DESSERTS
          </button>
        </div>
        <div className="">
          {starters && <Starters />}
          {soups && <Soups />}
          {maindishes && <MainDishes />}
          {desserts && <Desserts />}
        </div>
        <div className="py-12 px-4">
          <h2 className="pb-4 text-center text-sm font-bold">Allergens</h2>
          <img
            src="/images/allergens.webp"
            className="m-auto max-w-[500px] sm:w-full sm:pl-3 sm:pr-1"
          />
        </div>
      </div>
    </>
  );
}
