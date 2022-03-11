import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export function Footer() {
  return (
    <div className="relative flex w-full flex-row justify-around border-t bg-white py-8 text-center text-sm font-bold text-gray-600 sm:px-2 sm:text-xs">
      <div className="flex flex-row sm:flex-wrap">
        <div>
          <FontAwesomeIcon
            icon={faCopyright}
            className="mx-2 inline-block"
            width="14px"
          />
          2022 Cô Tâm.
        </div>
        <div className="ml-2"> All Rights Reserved.</div>
      </div>
      <div className="flex flex-row sm:flex-wrap">
        Interact with Cô Tâm:
        <div className="flex flex-row sm:mt-1">
          <a
            href="https://www.facebook.com/Cotamrestaurant/"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant facebook"
            className="mx-3 sm:mt-1"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="color-blue-400"
              size="lg"
            />
          </a>
          <a
            href="https://www.instagram.com/cotam.restaurant/?hl=en"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant instagram"
            className="mr-3 sm:mt-1"
            size="lg"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="bg-color-purple"
              size="lg"
            />
          </a>
          <span>
            <a
              href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam_Restaurant-Haarlem_North_Holland_Province.html"
              target="_blank"
              rel="noreferrer"
              alt="co tam tripadvisor"
            >
              <img
                src="/images/tripadvisor.png"
                alt="tripadvisor co tam"
                width="21px"
              />
            </a>
          </span>
        </div>
      </div>

      <span>
        <a
          href="https://linktr.ee/Cotamrestaurant"
          target="_blank"
          rel="noreferrer"
        >
          Linktree
        </a>{" "}
        - <Link href="./privacy-policy">Privacy policy</Link>
      </span>
    </div>
  );
}
