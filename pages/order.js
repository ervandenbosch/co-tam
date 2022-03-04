import Link from "next/link";

export default function Order() {
  return (
    <div className="flex flex-col justify-center bg-white pt-[76px]">
      <div className="m-auto py-24">
        <a
          href="https://weborder-eu.spont.cash/widget/?key=fa9610655bd04ad896c4fcb6a5c49bc9&source=direct&autoopen=pickup"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center hover:inset-2 hover:border-2 hover:border-[#F7C12F] hover:bg-transparent hover:text-[#F7C12F]">
            Order
          </button>
        </a>
        <p className="w-[200px] pt-6 text-justify">
          Pick up your order at Spaarne 104, Haarlem at a time that suits you.
          You can temporarily park in front of the Restaurant or walk from
          Parking garage the Kamp.
        </p>
      </div>
      <div className="bg-gray-600 py-12 text-center">
        <h2 className="px-8 pb-4 text-2xl font-bold text-white">
          Enjoyed our food at Cô Tâm? Let us know below!
        </h2>
        <a
          href="https://www.facebook.com/Cotamrestaurant/reviews/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="box-shadow m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
            Facebook
          </button>
        </a>
        <a
          href="https://g.page/cotam_restaurant/review?gm"
          target="_blank"
          rel="noreferrer"
        >
          <button className="box-shadow m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
            Google
          </button>
        </a>
        <a
          href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam-Haarlem_North_Holland_Province.html"
          target="_blank"
          rel="noreferrer"
        >
          <button className="box-shadow m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
            Tripadvisor
          </button>
        </a>
      </div>
    </div>
  );
}
