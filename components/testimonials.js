import { reviews } from "../data/reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Testimonials() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="flex-cols-5 flex flex-wrap justify-center gap-4 lg:grid-cols-4 sm:grid-cols-2">
      {reviews.slice(0, 5).map((item, i) => (
        <div
          key={i}
          className="w-60 overflow-hidden rounded-xl border border-slate-200 bg-white xs:w-48"
        >
          <div className="relative flex flex-col justify-between">
            <div className="p-3">
              <p className="xs:text-md pr-8 text-left text-lg font-semibold ">
                {item.user.name}
              </p>
              <div id="rating" className="">
                {[...Array(item.rating)].map((x, i) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={i}
                    className="text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-justified m-auto p-3 text-sm text-gray-400 ">
                {!toggle && item.snippet.substring(0, 90)}{" "}
                {item.snippet.length > 90 && !toggle && (
                  <button
                    className="text-xs font-bold text-blue-400"
                    onClick={handleToggle}
                  >
                    {" "}
                    ...read more
                  </button>
                )}{" "}
                {toggle && (
                  <button
                    className="absolute top-5 right-3 text-xs font-bold text-blue-400"
                    onClick={handleToggle}
                  >
                    {" "}
                    close
                  </button>
                )}
                {toggle && item.snippet}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
