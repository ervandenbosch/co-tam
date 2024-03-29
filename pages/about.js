import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import { cdnImage } from "../components/utils";
import useScript from "/components/useScript";

export default function About() {
  useScript(`(function (g, s, t, p, l, n) {
          g["_gstpln"] = {};
          (l = s.createElement(t)), (n = s.getElementsByTagName(t)[0]);
          l.async = 1;
          l.src = p;
          n.parentNode.insertBefore(l, n);
        })(window, document, "script", "https://cdn.guestplan.com/widget.js");
        _gstpln.accessKey = "a61e9fd2920eb894b1f8ca80c3b0984b5e6b6059";
        _gstpln.open = false;
        _gstpln.useHtmlLanguage = true;`);

  return (
    <div className="m-auto lg2:w-4/5">
      <Head>
        <title>About Cô Tâm</title>
           <meta
          name="description"
          content="Welcome to Cô Tâm Vietnamese restaurant. The authentic Vietnamese cuisine in the center of Haarlem. Enjoy delicious Vietnamese food at the Spaarne."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:locale:alternate" content="nl_NL"></meta>
      </Head>
      <h1 className="mt-[64px] pt-8 text-center text-3xl font-bold">
        Our story
      </h1>
      <h2 className="mt-4 ml-7 text-left text-xl font-bold">
        Authentic Vietnamese
      </h2>
      <div className="mt-4 flex flex-row bg-white text-black md:flex-wrap">
        <div className="w-2/3 px-4 text-justify md:w-full">
          <p className="px-3">
            Me and my husband Phien have been working in restaurants in Germany
            for many many years and we have been dreaming of opening our own
            restaurant one day. We've been saving up some money and waiting for
            the right opportunity to come. Our daughter, who moved to the
            Netherlands, and with whom we've been living apart for the past 10
            years, was complaining about the lack of Vietnamese restaurants in
            her city. One day she stumbled upon a beautiful restaurant location
            in Haarlem that was available. We immediately fell in love with it
            and we took a big leap of faith to open a restaurant during pandemic
            in a country we don't speak the language yet (we only speak
            Vietnamese and German, but learning English and Dutch!). Although it
            might not seem to be the best time, we do believe that we are at the
            right place. We want to bring our customers the best of Vietnamese
            cuisine as food in our culture is what brings families and friends
            together. We hope that our meals will speak to your hearts and fill
            them with warmth and joy.
            <br />
            <br />
            Our story is a story of a family reunion and fulfillment of a dream
            of a hard working couple.
          </p>
        </div>
        <div className="m-auto w-1/2 pl-4 pr-8 md:mt-12 sm:w-4/5">
          <Carousel dynamicHeight labels autoPlay centerMode swipeable>
            <div>
              <img
                src={cdnImage("about-1.webp")}
                alt="vietnamese cuisine"
                style={{
                  maxHeight: 500,
                  zIndex: -2,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("carousel2.webp")}
                alt="vietnamese cuisine"
                style={{
                  maxHeight: 500,
                  zIndex: -2,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("carousel4.webp")}
                alt="vietnamese cuisine"
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
          We want to bring our customers the best of Vietnamese cuisine as food
          in our culture is what brings families and friends together. We hope
          that our meals will speak to your hearts and fill them with warmth and
          joy.
        </p>
        <p className="text-md pb-8 text-gray-200">-Tam Nguyenova-</p>
      </div>
    </div>
  );
}
