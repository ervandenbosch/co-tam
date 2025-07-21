import Link from "next/link";
import { useState } from "react";

export function Dropdown({ closeDropdown, langNL }) {
  const [menuDropdown, setMenuDropdown] = useState(false);

  function toggleMenuDropdown() {
    setMenuDropdown(!menuDropdown);
  }

  return (
    <div
      className="fixed top-[64px] z-50 flex w-screen flex-col justify-between overflow-hidden bg-black text-left font-bold text-white opacity-90"
      id="Dropdown"
    >
      <div className="mt-6">
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl" : "/"} alt="home Co Tam">
            <a className="mr-8" onClick={closeDropdown}>
              HOME
            </a>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl/reservation" : "/reservation"}>
            <a onClick={closeDropdown}>
              {langNL ? <>RESERVEREN</> : <>RESERVATION</>}
            </a>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl/menu" : "/menu"}>
            <a onClick={closeDropdown}>{langNL ? <>MENUKAART</> : <>MENU</>}</a>
          </Link>
          {/*{menuDropdown && (
            <div className="pt-6">
              <div className="pl-4 pb-6 ">
                <Link href="/lunch" alt="menu co tam">
                  <button
                    className="font-bold hover:underline "
                    onClick={closeDropdown}
                  >
                    Lunch
                  </button>
                </Link>
              </div>
              <div className="pl-4">
                <Link href={langNL ? "/nl/menu" : "/menu"}>
                  <button
                    className="font-bold hover:underline"
                    onClick={closeDropdown}
                  >
                    {langNL ? <>Diner</> : <>Dinner</>}
                  </button>
                </Link>
              </div>
            </div>
          )}*/}
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl/order" : "/order"}>
            <a onClick={closeDropdown}>
              {langNL ? <>BESTELLEN</> : <>ORDER</>}
            </a>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl/about" : "/about"}>
            <a onClick={closeDropdown}>{langNL ? <>OVER</> : <>ABOUT</>}</a>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl/contact" : "/contact"}>
            <a onClick={closeDropdown}>CONTACT</a>
          </Link>
        </div>
          <div className="pb-10 pl-10 lg:pl-6">
          <Link href={langNL ? "/nl/vacatures" : "/vacancies"}>
            <a onClick={closeDropdown}>{langNL ? <>VACATURES</> : <>VACANCIES</>}</a>
          </Link>
        </div>
        <div className="border-t py-6 text-center text-white">
          <a
            href="https://www.facebook.com/Cotamrestaurant/"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant facebook"
            className="inline-block pb-[1px]"
          >
            <img src="/images/facebook.svg" width="22px" />
          </a>
          <a
            href="https://www.instagram.com/cotam.restaurant/?hl=en"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant instagram"
            className="inline-block px-6"
          >
            <img src="/images/instagram.svg" width="21px" />
          </a>
          <a
            href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam_Restaurant-Haarlem_North_Holland_Province.html"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant tripadvisor"
            className="inline-block pb-[3px]"
          >
            <img src="/images/tripadvisorwhite.png" width="30px" />
          </a>
        </div>
      </div>
    </div>
  );
}
