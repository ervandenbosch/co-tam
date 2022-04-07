import Head from "next/head";

export default function Reserveren() {
  return (
    <>
      <Head>
        <title>Reserveer een tafel bij Cô Tâm</title>
      </Head>
      <div className="flex flex-col justify-center bg-white pt-[64px]">
        <div className="my-[32px] w-full sm:my-[0px]">
          <iframe
            style={{
              width: "100%",
              height: "500px",
            }}
            src="/widgetnl.html"
          ></iframe>
        </div>
        <div className="bg-gray-600 py-12 text-center">
          <h2 className="px-8 pb-12 text-2xl font-bold text-white">
            Genoten van ons eten bij Cô Tâm? Laat het hieronder weten op jouw
            favoriete platform!
          </h2>
          <a
            href="https://www.facebook.com/Cotamrestaurant/reviews/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
              Facebook
            </button>
          </a>
          <a
            href="https://g.page/cotam_restaurant/review?gm"
            target="_blank"
            rel="noreferrer"
          >
            <button className="m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
              Google
            </button>
          </a>
          <a
            href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam-Haarlem_North_Holland_Province.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
              Tripadvisor
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
