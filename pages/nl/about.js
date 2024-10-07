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
        <meta
          name="beschrijving"
          content="Welkom bij Cô Tâm Vietnamees restaurant. De authentieke Vietnamese keuken in het centrum van Haarlem. Geniet van heerlijk Vietnamees eten aan het Spaarne."
        />
        <meta property="og:locale" content="nl_NL"></meta>
        <meta property="og:locale:alternate" content="en_US"></meta>
      </Head>
      <h1 className="mt-[64px] pt-8 text-center text-3xl font-bold">
        Ons verhaal
      </h1>
      <h2 className="ml-7 mt-4 text-left text-xl font-bold">
        Een familie reunie en een droom in vervulling{" "}
      </h2>
      <div className="mt-4 flex flex-row bg-white text-black md:flex-wrap">
        <div className="w-2/3 px-4 text-justify md:w-full">
          <p className="px-3">
            Een decennium apart leven van onze dochter was genoeg. Het was tijd
            om te herenigen en een vleugje thuis naar Nederland te brengen. Mijn
            man Phien en ik hebben vele jaren gewerkt in restaurants in heel
            Duitsland, altijd dromend van het openen van ons eigen restaurant.
            Onze dochter, die in Nederland woonde, vertelde ons vaak hoeveel ze
            het authentieke Vietnamese eten in haar stad miste—en hoezeer ze
            haar ouders in de buurt wilde hebben. Dus, hier zijn we dan.
            <br />
            <br />
            Ondanks de uitdagingen van de pandemie en het feit dat we de lokale
            taal nog niet spraken, namen we een sprong in het diepe, verhuisden
            naar een nieuw land en openden ons restaurant. We zijn ongelooflijk
            dankbaar voor al onze loyale klanten die ons in die moeilijke tijden
            hebben gesteund. Dankzij hen waren we een van de gelukkige
            restaurants die de lockdown hebben overleefd en sterker zijn
            geworden.
            <br />
            <br />
            Ons verhaal is er een van familiehereniging en een hardwerkend stel
            dat op 50-jarige leeftijd hun levenslange droom vervulde. ❤️
          </p>
        </div>
        <div
          className="m-auto w-1/2 pl-4 pr-8 md:mt-12 sm:w-4/5"
          style={{ paddingTop: "80px" }}
        >
          <Carousel dynamicHeight labels autoPlay centerMode swipeable>
            <div>
              <img
                src={cdnImage("about-1.webp")}
                alt="vietnamese keuken"
                style={{
                  maxHeight: 500,
                  zIndex: -1, // Lower than the navbar's z-index
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("carousel2.webp")}
                alt="vietnamese keuken"
                style={{
                  maxHeight: 500,
                  zIndex: -1,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("carousel4.webp")}
                alt="vietnamese keuken"
                style={{
                  maxHeight: 500,
                  zIndex: -1,
                }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="m-auto mb-12 mt-8 flex w-2/3 flex-col rounded-lg border-2 bg-gray-800 text-center sm:w-3/4">
        <p className="p-8 text-lg text-gray-100">
          In Vietnam zijn maaltijden heilig—het is een moment om verhalen, lach
          en liefde te delen. Wij zijn een klein familiebedrijf met als missie
          om diezelfde warmte en gastvrijheid te brengen aan iedere gast die
          door onze deuren komt. Kom ons bezoeken en proef de liefde en zorg die
          in elk gerecht wordt gestopt.
        </p>
        <p className="text-md pb-8 text-gray-200">-Tam Nguyenova-</p>
      </div>
    </div>
  );
}
