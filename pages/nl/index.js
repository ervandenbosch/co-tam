import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import TestimonialsNL from "/components/testimonialsnl";
import { cdnImage } from "/components/utils";
import useScript from "/components/useScript";
import { images } from "../../components/images";

export default function HomeNL() {
  const [menuButtons, setMenuButtons] = useState(false);

  const [langNL, setlangNL] = useState(true);
  const handleMenuButtons = () => setMenuButtons(!menuButtons);

  useScript(`(function(g,s,t,p,l,n){
      g["_gstpln"]={};
      (l=s.createElement(t)),(n=s.getElementsByTagName(t)[0]);
      l.async=1;l.src=p;n.parentNode.insertBefore(l,n);
    })(window,document,"script","https://cdn.guestplan.com/widget.js");
 	_gstpln.accessKey = "a61e9fd2920eb894b1f8ca80c3b0984b5e6b6059";`);

  const url =
    "https://cotam.us2.list-manage.com/subscribe/post?u=6d4a8b5dd3caa61e591833f74&amp;id=e1dad9f537";

  // simplest form (only email)
  const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
      });

    return (
      <div
        style={{
          background:
            "url('https://cdn.statically.io/gh/ervandenbosch/co-tam/main/public/images/bg-dark.png.webp') no-repeat center",
          backgroundSize: "cover",
          borderRadius: 2,
          paddingBottom: 48,
          paddingTop: 26,
          textAlign: "center",
          margin: "auto",
          color: "white",
        }}
      >
        {status === "sending" && (
          <div style={{ color: "blue" }}>verzenden...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <h2 className="py-4 text-xl font-bold">BLIJF OP DE HOOGTE</h2>
        <p className="m-auto w-[60vw] pb-4 text-center">
          Wees één van de eerste om te horen van nieuwe acties en/of deals.
        </p>
        <div className="pt-3">
          <input
            style={{
              fontSize: "1em",
              padding: 5,
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
            }}
            ref={(node) => (name = node)}
            type="text"
            placeholder="Naam.."
          />
        </div>
        <br />
        <div className="">
          <input
            style={{
              fontSize: "1em",
              padding: 5,
              borderRadius: "5px",
              background: "transparent",
              border: "1px solid white",
            }}
            ref={(node) => (email = node)}
            type="email"
            placeholder="Email adres.."
          />
        </div>
        <br />
        <button
          style={{
            fontSize: "1em",
            backgroundColor: "#F7C12F",
          }}
          className="rounded-lg px-4 py-2 shadow-md hover:shadow-gray-500"
          onClick={submit}
        >
          Verstuur
        </button>
      </div>
    );
  };

  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <title>Homepagina van Cô Tâm Vietnamees Restaurant Haarlem</title>
        <meta
          name="beschrijving"
          content="Welkom bij Cô Tâm Vietnamees restaurant. De authentieke Vietnamese keuken in het centrum van Haarlem. Geniet van heerlijk Vietnamees eten aan het Spaarne."
        />
        <meta property="og:locale" content="nl_NL"></meta>
        <meta property="og:locale:alternate" content="en_US"></meta>
      </Head>
      <body>
        <div
          className="bg local flex w-full flex-col justify-center bg-cover bg-no-repeat"
          id="top"
          style={{
            backgroundImage:
              "url('https://cdn.statically.io/gh/ervandenbosch/co-tam/main/public/images/bg-orig2.jpg.webp')",
          }}
        >
          <div className="m-auto mt-[72px] w-2/3 pt-2 lg2:w-1/2 sm:mt-[70px] sm:w-full sm:px-2">
            <img
              src={cdnImage("cotamlogo.webp")}
              alt="co tam vietnamees restaurant logo"
            />
          </div>
          <div className="sm:text-md m-auto px-48 py-5 text-center text-xl text-white md:px-16 md:text-lg sm:px-10">
            Welkom bij het authentieke Vietnamees restaurant Cô Tâm van Haarlem.
            Wij zijn open voor tafelreserveringen tijdens lunch en diner. Tevens
            zijn wij open voor afhalen. Gebruik onze reseringsmodule rechts
            onderaan uw scherm om een tafel te reserveren!
          </div>
          <div className="mx-auto flex flex-row flex-wrap justify-center pb-10 pt-6 text-center sm:w-full sm:flex-col">
            <a
              href="https://online.spont.nl/?key=fa9610655bd04ad896c4fcb6a5c49bc9&source=direct&autoopen=pickup&lang=en"
              target="_blank"
              rel="noopener noreferrer"
              alt="order at co tam"
            >
              <button
                className="w-[250px] rounded-md bg-[#F7C12F] p-2 text-black hover:border-2 hover:border-[#F7C12F] hover:bg-transparent hover:text-[#F7C12F] sm2:mr-4 sm:w-4/5"
                alt="order"
                tabIndex={0}
              >
                Bestellen voor Afhalen
              </button>
            </a>
            <Link href="nl/menu">
              <button
                className="mx-auto mb-2 w-[250px] rounded-md border border-[#F7C12F] p-2  text-[#F7C12F] hover:bg-[#F7C12F] hover:text-gray-800 sm2:ml-4 sm:mt-2 sm:w-4/5"
                alt="zie het menu"
              >
                Menukaart
              </button>
            </Link>
            {/*{menuButtons && (
              <MenuModal
                langNL={langNL}
                handleMenuButtons={handleMenuButtons}
              />
            )}*/}
          </div>
        </div>
        <div className="flex flex-row bg-white pb-8 pt-12 md:flex-wrap">
          <div className="flex w-1/2 flex-col px-8 md:w-full md:px-10">
            <h2 className="m-auto max-w-[600px] text-center text-xl font-bold text-black">
              Bij ons proef je een brede variatie aan authentieke Vietnamese
              gerechten
            </h2>
            <p className="m-auto mb-4 max-w-[600px] p-4 text-justify text-black">
              Vietnamees eten is vers, licht en vol met ongelooflijke smaken.
              Groenten en vlees vormen de kern van de Vietnamese keuken, maar we
              bieden ook een grote verscheidenheid aan maaltijden die
              vegetarisch en veganistisch zijn. Al onze maaltijden worden met de
              grootste zorg bereid waarbij kunstmatige smaakversterkers zoveel
              mogelijk worden vermeden, zodat u bij ons zo gezond mogelijk eet.
              We gebruiken alleen de hoogwaardigste ingrediënten voor onze
              gerechten om onze gasten de beste versie van de Vietnamese keuken
              te kunnen bieden.
            </p>
          </div>
          <div className="m-auto max-w-sm sm:w-full sm:px-8">
            <img
              src={cdnImage("img-2.webp")}
              className="rounded-2xl"
              alt="wok & stir fried food"
            />
          </div>
        </div>
        <div className="flex flex-col border-t-2 border-black bg-white pb-14 md:w-full sm:pb-6">
          <h2 className="p-12 text-center text-2xl font-bold text-black">
            Ervaringen van onze klanten op Google
          </h2>
          <div className="">
            <TestimonialsNL />
          </div>
          <a
            href="https://www.google.com/maps/place/C%C3%B4+T%C3%A2m+Restaurant/@52.3783644,4.6355134,17z/data=!4m7!3m6!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!8m2!3d52.3783644!4d4.6377021!9m1!1b1"
            target="_blank"
            rel="noreferrer"
            className="m-auto"
          >
            <button
              className="m-auto mt-10 w-[200px] rounded-lg border-2 bg-[#F7C12F] p-2 text-center text-gray-600 shadow-sm shadow-slate-300 hover:shadow-inner"
              alt="see all google reviews "
            >
              Naar alle reviews
            </button>
          </a>
        </div>

        <div className="w-screen border-t-2 md:mt-8">
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
            {images.map((image) => (
              <div
                key={image.id}
                style={{
                  zIndex: -2,
                }}
              >
                <img src={image.url} alt={image.alt} />
                <div className="legend">
                  <p className="font-bold">{image.title}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </body>
    </div>
  );
}
