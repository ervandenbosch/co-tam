import { Lunch } from "../components/lunch";
import Head from "next/head";

export default function LunchMenu() {
  return (
    <>
      <Head>
        <title>Lunch Menu Cô Tâm</title>
      </Head>
      <div className="mt-[64px]">
        <h1 className="pt-8 pb-2 text-center text-2xl font-bold underline">
          Lunch Menu
        </h1>
        <p className="text-center text-xs">(12:00-14:30)</p>
        <div className="text-md text-left lg2:text-lg sm:text-sm">
          <div className="">
            <Lunch />
          </div>
          <div className="py-12 px-4">
            <h2 className="pb-4 text-center text-sm font-bold">Allergens</h2>
            <img
              src="/images/allergens.webp"
              className="m-auto max-w-[500px] sm:w-full sm:pl-3 sm:pr-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
