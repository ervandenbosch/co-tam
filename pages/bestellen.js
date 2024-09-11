import Head from "next/head";

export default function Bestellen() {
  return (
    <>
      <Head>
        <title>Bestellen bij Cô Tâm</title>
        <meta
          name="description"
          content="Welcome to Cô Tâm Vietnamese restaurant. The authentic Vietnamese cuisine in the center of Haarlem. Enjoy delicious Vietnamese food at the Spaarne."
        />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:locale:alternate" content="nl_NL"></meta>
      </Head>
      ;
      <div className="flex flex-col justify-center bg-white pt-[64px]">
        <div className="m-auto pb-24 pt-20">
          <a
            href="https://online.spont.nl/?key=fa9610655bd04ad896c4fcb6a5c49bc9&source=direct&autoopen=pickup&lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center hover:inset-2 hover:border-2 hover:border-[#F7C12F] hover:bg-transparent hover:text-[#F7C12F]">
              Bestellen
            </button>
          </a>
          <p className="w-[200px] pt-6 text-justify">
            Haal uw bestelling op aan Spaarne 104 te Haarlem op een tijdstip dat
            u uitkomt. U kunt tijdelijk voor het Restaurant parkeren of komen
            lopen vanaf Parkeergarage de Kamp.
          </p>
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
