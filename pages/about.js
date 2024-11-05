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
      <h2 className="ml-7 mt-4 text-left text-xl font-bold">
        A Family Reunion and a Dream Fulfilled
      </h2>
      <div className="mt-4 flex flex-row bg-white text-black md:flex-wrap">
        <div className="w-2/3 px-4 text-justify md:w-full">
          <p className="px-3">
            A decade of living apart from our daughter was enough. It was time
            to reunite and bring a taste of home to the Netherlands. My husband
            Phien and I spent many years working in restaurants across Germany,
            always dreaming of opening one of our own. Our daughter, who lived
            in the Netherlands, would often tell us how much she missed
            authentic Vietnamese food in her city—and having her parents nearby.
            So, here we are.
            <br />
            <br />
            Despite the challenges of the pandemic and not yet speaking the
            local language, we took a leap of faith, moved to a new country, and
            opened our restaurant. We are incredibly grateful to all our loyal
            customers who supported us during those difficult times. Thanks to
            them, we were one of the fortunate restaurants that made it through
            the lockdown and emerged stronger.
            <br />
            <br />
            Our story is one of family reunion and a hardworking couple who, at
            50, fulfilled their lifelong dream. ❤️
          </p>
        </div>
        <div className="m-auto w-1/2 pl-4 pr-8 md:mt-12 sm:w-4/5">
          <Carousel
            infiniteLoop
            autoPlay
            centerMode
            swipeable
            showArrows
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
          >
            <div>
              <img
                src={cdnImage("6.webp")}
                alt="vietnamese cuisine"
                style={{
                  zIndex: -2,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("7.webp")}
                alt="vietnamese cuisine"
                style={{
                  zIndex: -2,
                }}
              />
            </div>
            <div>
              <img
                src={cdnImage("8.webp")}
                alt="vietnamese cuisine"
                style={{
                  zIndex: -2,
                }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="m-auto mb-12 mt-8 flex w-2/3 flex-col rounded-lg border-2 bg-gray-800 text-center sm:w-3/4">
        <p className="p-8 text-lg text-gray-100">
          In Vietnam, mealtimes are sacred—they’re a time to share stories,
          laughter, and love. We’re a small, family-run restaurant on a mission
          to bring that same warmth and hospitality to every guest who walks
          through our doors. Come visit us and taste the love and care that goes
          into every dish.
        </p>
        <p className="text-md pb-8 text-gray-200">-Tam Nguyenova-</p>
      </div>
    </div>
  );
}
