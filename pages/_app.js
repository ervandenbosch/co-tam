import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import navbarlogo from "../public/images/navbarlogo.webp";
import { Dropdown } from "../components/dropdown";
import { Footer } from "../components/footer";
import { FooterNL } from "../components/footernl";
import { Details } from "../components/details";
import { DetailsNL } from "../components/detailsnl";
import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";
import Script from "next/script";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [langNL, setLangNL] = useState(false);

  const handleOpen = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const router = useRouter();
  let href = router.asPath;

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

  const setSmoothScroll = (isSmooth) => {
    document.documentElement.style.scrollBehavior = isSmooth
      ? "smooth"
      : "auto";
  };

  useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  function toTopButton() {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 200) {
        setVisible(true);
      } else if (scrolled <= 200) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
  }

  function checkLang() {
    {
      href.includes("nl") ? setLangNL(true) : setLangNL(false);
    }
  }

  useEffect(() => {
    hideMenu();
    toTopButton();
    checkLang();
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

  function changeLang() {
    setLangNL(!langNL);
    {
      langNL
        ? router.push(href.replace(/nl/g, ""), undefined, { scroll: false })
        : router.push(`nl${href}`, undefined, { scroll: false });
    }
  }
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
            <Link href={langNL ? "/nl" : "/"}>
              <a onClick={closeMenu}>HOME</a>
            </Link>
            <span className="px-4">|</span>
            <Link href={langNL ? "/nl/menu" : "/menu"} alt="menu co tam">
              <a onClick={closeMenu}>MENU</a>
            </Link>
            <span className="px-4">|</span>
            <Link href={langNL ? "/nl/order" : "/order"}>
              <a onClick={closeMenu}>{langNL ? <>BESTELLEN</> : <>ORDER</>}</a>
            </Link>
            <span className="px-4">|</span>
            <Link href={langNL ? "/nl/about" : "/about"}>
              <a onClick={closeMenu}>{langNL ? <>OVER</> : <>ABOUT</>}</a>
            </Link>
            <span className="px-4">|</span>
            <Link href={langNL ? "/nl/contact" : "/contact"}>
              <a onClick={closeMenu}>CONTACT</a>
            </Link>
          </div>
          <span className="px-4 text-white md:hidden">|</span>
          <button
            className="mb-2 pr-2 font-bold text-white sm:mb-0"
            onClick={changeLang}
          >
            {langNL ? (
              <>
                EN{" "}
                <img
                  src="/images/en.svg"
                  width="22px"
                  style={{
                    display: "inline-block",
                    marginLeft: 4,
                    marginBottom: 3,
                  }}
                />
              </>
            ) : (
              <>
                NL
                <img
                  src="/images/nl.svg"
                  width="20px"
                  style={{
                    display: "inline-block",
                    marginLeft: 8,
                    marginBottom: 3,
                  }}
                />
              </>
            )}
          </button>

          <span
            className={"pl-5 pr-2 md2:hidden " + (open ? "sm:mb-1" : "sm:mt-1")}
          >
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
        {open && <Dropdown closeMenu={closeMenu} langNL={langNL} />}
        <Component {...pageProps} />
      </div>

      <div
        className={
          "fixed right-[48.5%] bottom-6 z-10 xl:right-[48%] lg:right-[47%] md:right-[46.5%] sm:right-[45.5%]  " +
          (visible ? "block" : "hidden")
        }
      >
        <button
          className="rounded-full bg-black py-2 px-4 text-xl text-white opacity-80"
          onClick={scrollToTop}
        >
          ^
        </button>
      </div>

      {langNL ? <DetailsNL /> : <Details />}

      {langNL ? <FooterNL /> : <Footer />}

      <CookieConsent
        style={{ textAlign: "center", fontSize: "14px" }}
        buttonStyle={{
          marginRight: "50px",
          padding: "10px",
          textAlign: "center",
        }}
        expires={150}
      >
        {langNL ? (
          <>
            Deze website maakt gebruik van cookies om de gebruikerservaring te
            verbeteren.
          </>
        ) : (
          <>This website uses cookies to enhance the user experience. </>
        )}
      </CookieConsent>
    </div>
  );
}

export default MyApp;
