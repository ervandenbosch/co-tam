import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import { cdnImage } from "/components/utils";
import useScript from "/components/useScript";

export default function Over() {
  useScript(`(function (g, s, t, p, l, n) {
          g["_gstpln"] = {};
          (l = s.createElement(t)), (n = s.getElementsByTagName(t)[0]);
          l.async = 1;
          l.src = p;
          n.parentNode.insertBefore(l, n);
        })(window, document, "script", "https://cdn.guestplan.com/widget.js");
        _gstpln.accessKey = "a61e9fd2920eb894b1f8ca80c3b0984b5e6b6059";
        _gstpln.open = false;
        _gstpln.locale = "nl";`);

  return (
    <div className="m-auto lg2:w-4/5">
      <Head>
        <title>Over Cô Tâm</title>
      </Head>
      <h1 className="mt-[64px] pt-8 text-center text-3xl font-bold">
        Ons verhaal
      </h1>
      <h2 className="mt-4 ml-7 text-left text-xl font-bold">
        Authentiek Vietnamees
      </h2>
      <div className="mt-4 flex flex-row bg-white text-black md:flex-wrap">
        <div className="w-2/3 px-4 text-justify md:w-full">
          <p className="px-3">
            Mijn man Phien en ik hebben vele jaren gewerkt in restaurants in
            Duitsland en we droomden ervan om ons eigen restaurant te openen. We
            hadden geld gespaard en wachtten op de beste gelegenheid. Onze
            dochter, die naar Nederland is verhuisd en waar we al 10 jaar apart
            van wonen, miste de aanwezigheid van Vietnamese restaurants in haar
            stad. Op een dag stuitte ze op een prachtige restaurantlocatie in
            Haarlem die beschikbaar was. We werden meteen verliefd en we namen
            een grote sprong in het diepe om tijdens de coronapandemie een
            restaurant te openen in een land waar we de taal <i>nog</i> niet
            konden spreken (we spreken alleen Vietnamees en Duits, maar leren
            Engels en Nederlands!). Hoewel het misschien niet de beste tijd
            leek, zijn we van mening dat we op de juiste plek zijn gekomen. We
            willen onze klanten het beste van de Vietnamese keuken bieden,
            aangezien eten in onze cultuur families en vrienden bij elkaar
            brengt. We hopen dat onze maaltijden tot uw hart zullen spreken en
            ze met warmte en vreugde zullen vullen.
            <br />
            <br />
            Ons verhaal gaat over een familiereünie en de vervulling van een
            droom van een hardwerkend paar.
          </p>
        </div>
        <div className="m-auto w-1/2 pl-4 pr-8 md:mt-12 sm:w-4/5">
          <Carousel dynamicHeight labels autoPlay centerMode swipeable>
            <div>
              <img
                src={cdnImage("about-1.webp")}
                alt="vietnamese keuken"
                style={{
                  maxHeight: 500,
                  zIndex: -2,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("carousel2.webp")}
                alt="vietnamese keuken"
                style={{
                  maxHeight: 500,
                  zIndex: -2,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("carousel4.webp")}
                alt="vietnamese keuken"
                style={{
                  maxHeight: 500,
                  zIndex: -2,
                }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="m-auto mt-8 mb-12 flex w-2/3 flex-col rounded-lg border-2 bg-gray-800 text-center sm:w-3/4">
        <p className="p-8 text-lg text-gray-100">
          We willen onze klanten het beste van de Vietnamese keuken als eten
          brengen in onze cultuur is wat families en vrienden samenbrengt. We
          hopen dat onze maaltijden tot uw hart zullen spreken en ze zullen
          vullen met warmte en vreugde.
        </p>
        <p className="text-md pb-8 text-gray-200">-Tam Nguyenova-</p>
      </div>
    </div>
  );
}
