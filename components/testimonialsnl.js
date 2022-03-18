import { reviews } from "../data/reviews";
import { useState } from "react";

export default function TestimonialsNL() {
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
              <div className="px-3 py-2">
                <p className="xs:text-md pr-8 text-left text-lg font-semibold ">
                  {item.user.name}
                </p>
                <div id="rating">
                  {[...Array(item.rating)].map((x, i) => (
                    <img
                      src="/images/star.svg"
                      width="20px"
                      key={i}
                      className="inline-block pb-2 text-yellow-400"
                    />
                  ))}
                  <a href={item.user.link} target="_blank" rel="noreferrer">
                    <button
                      className="inline-block px-2 text-red-600 hover:text-blue-400"
                      alt="see full review"
                    >
                      <img src="/images/google.svg" width="19px" />
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-justified m-auto px-3 pb-4 text-sm text-gray-400 ">
                  {!toggle && item.snippet.substring(0, 90)}{" "}
                  {item.snippet.length > 90 && !toggle && (
                    <button
                      className="text-xs font-bold text-blue-400 hover:text-red-500"
                      onClick={handleToggle}
                      alt="read full description"
                    >
                      {" "}
                      ...lees meer
                    </button>
                  )}{" "}
                  {toggle && item.snippet}
                  {toggle && (
                    <button
                      className="ml-2 text-xs font-bold text-blue-400 hover:text-red-500"
                      onClick={handleToggle}
                      alt="close description"
                    >
                      {" "}
                      ...minder
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
