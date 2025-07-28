import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Testimonials from "../components/testimonials";
import { cdnImage } from "../components/utils";
import useScript from "../components/useScript";
import { images } from "../components/images";

export default function Home() {
  const [menuButtons, setMenuButtons] = useState(false);

  const [langNL, setlangNL] = useState(false);

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
          <div style={{ color: "blue" }}>sending...</div>
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
        <h2 className="py-8 text-xl font-bold">STAY UP TO DATE</h2>
        <p className="m-auto w-[60vw] pb-4 text-center">
          Be among the first to receive our latest updates and special deals.
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
            placeholder="Your name"
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
            placeholder="Your email"
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
          Submit
        </button>
      </div>
    );
  };

  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <title>Home of Cô Tâm Vietnamees Restaurant Haarlem</title>
        <meta
          name="description"
          content="Welcome to Cô Tâm Vietnamese restaurant. The authentic Vietnamese cuisine in the center of Haarlem. Enjoy delicious Vietnamese food at the Spaarne."
        />

        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:locale:alternate" content="nl_NL"></meta>
        <meta
          name="google-site-verification"
          content="0McVxhTlTb0g_D-qQOIpqL_KOV6P-sl0Kp3jiHLV8ok"
        />
      </Head>
      <body>
        <div
          className="bg local flex w-full flex-col justify-center bg-cover bg-no-repeat "
          id="top"
          style={{
            backgroundImage:
              "url('https://cdn.statically.io/gh/ervandenbosch/co-tam/main/public/images/bg-orig2.jpg.webp')",
          }}
        >
          <div className="m-auto mt-[72px] w-2/3 pt-2 lg2:w-1/2 sm:mt-[70px] sm:w-full sm:px-2">
            <img
              src={cdnImage("cotamlogo.webp")}
              alt="co tam vietnamese restaurant logo"
            />
          </div>
          <div className="sm:text-md m-auto px-48 py-5 text-center text-xl text-white md:px-16 md:text-lg sm:px-10">
            We bring the vibrant, fresh, and bold flavours of Vietnam to
            Haarlem. From traditional Vietnamese dishes to innovative Asian
            fusion creations by our chef. Make a reservation to join us for
            dinner or order takeaway.
          </div>
                <div className="sm:text-md m-auto px-48 py-5 text-center  text-xl text-white md:px-16 md:text-lg sm:px-10">
            <b>⚠️ NOTE: We are closed this week from 30 July until the 5th of August. Thank you. ⚠️</b>
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
                Order to Takeaway
              </button>
            </a>
            <Link href="menu">
              <button
                className="mx-auto mb-2 w-[250px] rounded-md border border-[#F7C12F] p-2 text-[#F7C12F] hover:bg-[#F7C12F] hover:text-gray-800 sm2:ml-4 sm:mt-2 sm:w-4/5"
                alt="see menu"
              >
                See menu
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row bg-white pb-8 pt-12 md:flex-wrap">
          <div className="flex w-1/2 flex-col px-8 md:w-full md:px-10">
            <h2 className="m-auto max-w-[600px] text-center text-xl font-bold text-black">
              Experience a wide variety of authentic Vietnamese dishes and chef
              inspired creations
            </h2>
            <p className="m-auto mb-4 max-w-[600px] p-4 text-justify text-black">
              We invite you to indulge in a burst of flavours at Cô Tâm. Our
              carefully curated selection includes authentic Vietnamese dishes
              and beyond. Each dish is thoughtfully crafted with high-quality
              ingredients, focusing on fresh vegetables, greens, and meats at
              the heart of every meal. We also offer a diverse range of seafood
              and fish dishes, prepared with the same care and precision that
              define our kitchen. The majority of our meals are homemade, and we
              have plenty of delicious options for vegetarians and vegans. At Cô
              Tâm, you’ll experience the best of Vietnamese cuisine—light,
              fresh, and rich in flavour. We aim to be the go-to spot for those
              seeking tasty comfort food, while delivering healthy and wholesome
              meals.
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
            What our customers say about us on Google
          </h2>
          <div className="">
            <Testimonials />
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
              See all reviews
            </button>
          </a>
        </div>

        <div className="w-screen border-t-2 md:mt-8">
          <div style={{ maxHeight: "400px", overflow: "hidden" }}>
            <Carousel
              infiniteLoop
              autoPlay
              centerMode
              swipeable
              showArrows
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false} // Make sure this is false so it doesn't override maxHeight
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  style={{
                    zIndex: -2,
                    maxHeight: "400px", // Ensures images also respect the max height
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    style={{
                      maxHeight: "400px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <div className="legend">
                    <p className="font-bold">{image.title}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
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
