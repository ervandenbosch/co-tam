import Link from "next/link";
import { useState } from "react";

export function MenuModal({ langNL, handleMenuButtons }) {
  return (
    <div
      className="opacity-[.97]"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex h-[200px] w-[250px] flex-col justify-center rounded-xl border border-white bg-black">
        <button
          className="absolute top-0 right-2 font-bold text-white"
          onClick={handleMenuButtons}
        >
          x
        </button>
        <p className="my-2 text-center font-bold text-white">
          {langNL ? <>Selecteer uw keuze:</> : <> Select your choice: </>}
        </p>
        <Link href="lunch">
          <button className="mx-auto mt-4 w-1/2 rounded-md border-2 bg-[#F7C12F] p-1 hover:bg-black hover:text-[#F7C12F]">
            Lunch
          </button>
        </Link>

        <Link href={langNL ? "nl/menu" : "menu"}>
          <button className="mx-auto mt-4 w-1/2 rounded-md border-2 bg-[#F7C12F] p-1 hover:bg-black hover:text-[#F7C12F]">
            {langNL ? <>Diner</> : <>Dinner</>}
          </button>
        </Link>
      </div>
    </div>
  );
}
