import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export function Footer() {
  return (
    <div className="relative flex w-full flex-row justify-around border-t bg-white py-8 text-center text-sm font-bold text-gray-600 sm:px-8 sm:text-xs">
      <div className="flex flex-row sm:flex-wrap">
        <div>
          <FontAwesomeIcon
            icon={faCopyright}
            className="mx-2 inline-block"
            width="14px"
          />
          2022 CÔ TÂM.
        </div>
        <div className="ml-2"> All Rights Reserved.</div>
      </div>
      <div className="flex flex-row sm:flex-wrap">
        Interact with us:
        <div className="ml-2 sm:mt-1">
          <a
            href="https://www.facebook.com/Cotamrestaurant/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="color-blue-400"
              width="25px"
            />
          </a>

          <a
            href="https://www.instagram.com/cotam.restaurant/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="bg-color-purple"
              width="25px"
            />
          </a>
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
