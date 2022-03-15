import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import navbarlogo from "../public/images/navbarlogo.webp";
import { Dropdown } from "../components/dropdown";
import { Footer } from "../components/footer";

import { Details } from "../components/details";
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";
import Script from "next/script";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const router = useRouter();

  function hideMenu() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.transitionDuration = "0.3s";
        document.getElementById("navbar").style.top = "-78px";
        setOpen(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }

  useEffect(() => {
    hideMenu();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen" id="app">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="Cô Tâm restaurant, vietnamese, vietnamees, restaurant, haarlem, authentiek"
        />
        <meta name="author" content="Cô Tâm" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav
        className="
        fixed top-0 flex h-[64px] w-full flex-row  justify-between bg-black p-4"
        id="navbar"
      >
        <Link href="./">
          <a className="mr-1 justify-start lg2:ml-4" onClick={closeMenu}>
            <Image
              src={navbarlogo}
              placeholder="blur"
              width="90"
              height="30"
              alt="co tam homepage logo"
            />
          </a>
        </Link>
        <div className="flex flex-row">
          <div className="font-bold text-white md:hidden">
            <Link href="./">
              <a onClick={closeMenu}>HOME</a>
            </Link>
            <span className="px-4">|</span>
            <a href="/menu" alt="menu co tam">
              <a onClick={closeMenu}>MENU</a>
            </a>
            <span className="px-4">|</span>
            <Link href="./order">
              <a onClick={closeMenu}>ORDER</a>
            </Link>
            <span className="px-4">|</span>
            <Link href="./about">
              <a onClick={closeMenu}>ABOUT</a>
            </Link>
            <span className="px-4">|</span>
            <Link href="./contact">
              <a onClick={closeMenu}>CONTACT</a>
            </Link>
            <span className="px-4">|</span>
          </div>
          <div className={open ? "hidden" : "pt-[3px] pl-3"}>
            <a
              href="https://www.facebook.com/Cotamrestaurant/"
              target="_blank"
              rel="noreferrer"
              alt="co tam restaurant facebook"
              className="inline-block pr-3"
            >
              <img src="images/facebook.svg" width="16px" />
            </a>
            <a
              href="https://www.instagram.com/cotam.restaurant/?hl=en"
              target="_blank"
              rel="noreferrer"
              alt="co tam restaurant instagram"
              className="inline-block px-3"
            >
              <img src="images/instagram.svg" width="14px" />
            </a>
            <a
              href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam_Restaurant-Haarlem_North_Holland_Province.html"
              target="_blank"
              rel="noreferrer"
              alt="co tam restaurant tripadvisor"
              className="inline-block px-3 pb-[2px]"
            >
              <img
                src="https://cdn.statically.io/gh/ervandenbosch/co-tam/main/public/images/tripadvisorwhite.png"
                width="22px"
              />
            </a>
          </div>
          <span className="pl-5 pr-2 md2:hidden">
            <button onClick={handleOpen}>
              <img
                src={open ? "/images/close.svg" : "/images/open.svg"}
                width="20px"
              />
            </button>
          </span>
        </div>
      </nav>

      <div id="Dropdown">
        {open && <Dropdown closeMenu={closeMenu} />}
        <Component {...pageProps} />
      </div>

      <Details />

      <Footer />

      <CookieConsent
        style={{ textAlign: "center", fontSize: "14px" }}
        buttonStyle={{
          marginRight: "50px",
          padding: "10px",
          textAlign: "center",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
}

export default MyApp;
