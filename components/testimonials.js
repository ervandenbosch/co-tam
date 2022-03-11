import { reviews } from "../data/reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Testimonials() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  let count = 5;

  return (
    <div className="flex-cols-5 z-0 flex flex-wrap justify-center gap-4 lg:grid-cols-4 sm:grid-cols-2">
      {reviews.slice(0, count).map((item, i) =>
        item.rating >= 4 ? (
          <div
            key={i}
            className="w-60 overflow-hidden rounded-xl border border-slate-200 bg-white sm:w-2/3"
          >
            <div className=" flex flex-col justify-between">
              <div className="p-3">
                <p className="xs:text-md pr-8 text-left text-lg font-semibold ">
                  {item.user.name}
                </p>
                <div id="rating">
                  {[...Array(item.rating)].map((x, i) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      key={i}
                      className="text-yellow-400"
                    />
                  ))}
                  <a href={item.user.link}>
                    <button className="mx-2 text-red-600" alt="see full review">
                      <FontAwesomeIcon icon={faGoogle} size="1x" />
                    </button>
                  </a>
                  <span className="text-xs">{item.date}..</span>
                </div>
              </div>
              <div>
                <p className="text-justified m-auto px-3 pb-4 text-sm text-gray-400 ">
                  {!toggle && item.snippet.substring(0, 90)}{" "}
                  {item.snippet.length > 90 && !toggle && (
                    <button
                      className="text-xs font-bold text-blue-400"
                      onClick={handleToggle}
                      alt="read full description"
                    >
                      {" "}
                      ...read more
                    </button>
                  )}{" "}
                  {toggle && item.snippet}
                  {toggle && (
                    <button
                      className="ml-2 text-xs font-bold text-blue-400"
                      onClick={handleToggle}
                      alt="close description"
                    >
                      {" "}
                      ...less
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}
