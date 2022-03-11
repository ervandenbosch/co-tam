import Link from "next/link";

export function Dropdown({ closeMenu }) {
  return (
    <div
      className="z-5 fixed top-[64px] flex w-screen flex-col justify-between overflow-hidden bg-black text-left font-bold text-white opacity-90"
      id="Dropdown"
    >
      <div className="mt-6">
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./">
            <a className="mr-8" onClick={closeMenu}>
              HOME
            </a>
          </Link>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <a
            href="/files/menu.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a className="mr-8" onClick={closeMenu}>
              MENU
            </a>
          </a>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./order">
            <a className="mr-4" onClick={closeMenu}>
              ORDER
            </a>
          </Link>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./about">
            <a className="mr-4" onClick={closeMenu}>
              ABOUT
            </a>
          </Link>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./contact">
            <a className="mr-4" onClick={closeMenu}>
              CONTACT
            </a>
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
            <img src="images/facebook.svg" width="22px" />
          </a>
          <a
            href="https://www.instagram.com/cotam.restaurant/?hl=en"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant instagram"
            className="inline-block px-6"
          >
            <img src="images/instagram.svg" width="21px" />
          </a>
          <a
            href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam_Restaurant-Haarlem_North_Holland_Province.html"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant tripadvisor"
            className="inline-block pb-[3px]"
          >
            <img src="images/tripadvisorwhite.png" width="30px" />
          </a>
        </div>
      </div>
    </div>
  );
}
