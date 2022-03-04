import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export function Footer() {
  return (
    <div className="relative w-full border-t bg-white py-8 text-center text-sm font-bold text-gray-600 sm:text-xs">
      <div className="flex justify-around">
        <div>
          <FontAwesomeIcon
            icon={faCopyright}
            className="mx-2 inline-block"
            width="10px"
          />
          2022 CÔ TÂM. All Rights Reserved.
        </div>
        <span>
          Interact with us:
          <span>
            <a
              href="https://www.facebook.com/Cotamrestaurant/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="color-blue-400"
                width="40px"
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
                width="40px"
              />
            </a>
          </span>
        </span>

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
    </div>
  );
}
