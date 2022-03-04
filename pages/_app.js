import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarlogo from "../public/navbarlogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../components/dropdown";
import { Footer } from "../components/footer";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Details } from "../components/details";
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";

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
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen" id="app">
      <nav
        className="
        fixed top-0 flex h-[64px] w-full flex-row flex-nowrap justify-between bg-black p-4"
        id="navbar"
      >
        <Link href="./">
          <a className="lg2:ml-4 mr-1 " onClick={closeMenu}>
            <Image src={navbarlogo} placeholder="blur" width="90" height="30" />
          </a>
        </Link>
        <span className="mr-4 font-bold text-white md:hidden">
          <Link href="./">
            <a onClick={closeMenu}>HOME</a>
          </Link>
          <span className="px-4">|</span>
          <a
            href="/menu.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <span className="text-white md:block">
            <a
              href="https://www.facebook.com/Cotamrestaurant/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} width="40px" />
            </a>
            <a
              href="https://www.instagram.com/cotam.restaurant/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} width="40px" />
            </a>
          </span>
        </span>

        <span className="md2:hidden mt-1 pl-2 pr-2">
          <button onClick={handleOpen}>
            <FontAwesomeIcon
              icon={open ? faXmark : faBars}
              size="xl"
              className="text-white"
            />
          </button>
        </span>
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
