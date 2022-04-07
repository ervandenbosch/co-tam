import Link from "next/link";

export function FooterNL() {
  return (
    <div className="relative flex w-full flex-row justify-around border-t bg-white py-8 text-center text-sm font-bold text-gray-600 sm:px-2 sm:text-xs">
      <div className="flex flex-row sm:flex-wrap">
        <div>
          <img
            src="/images/copyright.svg"
            className="mr-2 inline-block"
            width="15px"
            alt="copyright co tam"
          />
          2022 Cô Tâm.
        </div>
        <div className="ml-2">Alle rechten voorbehouden.</div>
      </div>
      <div className="flex flex-row sm:flex-wrap">
        Social media:
        <div className="flex flex-row pl-3 sm:mt-2">
          <a
            href="https://www.facebook.com/Cotamrestaurant/"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant facebook"
            className="mx-3"
          >
            <img
              src="/images/facebook-dark.svg"
              width="18px"
              alt="co tam restaurant facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/cotam.restaurant/?hl=en"
            target="_blank"
            rel="noreferrer"
            alt="co tam restaurant instagram"
            className="mr-3"
          >
            <img
              src="/images/instagram-dark.svg"
              width="16px"
              alt="co tam restaurant instagram"
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
                src="https://cdn.statically.io/gh/ervandenbosch/co-tam/main/public/images/tripadvisor.png"
                alt="tripadvisor co tam"
                width="18px"
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
