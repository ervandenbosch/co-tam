import { startersdata } from "../data/starters";
import Link from "next/link";

export function Starters() {
  let prefix = "/images/";
  let postfix = ".jpg";

  return (
    <>
      <div className="mt-4 text-center">
        |{"  "}
        {Object.keys(startersdata).map((key) => {
          return (
            <>
              <Link id={key} href={`#${key.toString()}`}>
                <a>
                  <button className={"px-1 text-center text-xs"}>
                    {key.replace(/_/g, " ")}
                  </button>{" "}
                </a>
              </Link>
              |{" "}
            </>
          );
        })}
      </div>
      <div className="m-auto max-w-[700px] pt-4">
        {Object.keys(startersdata).map((key, i) => {
          return (
            <>
              <h2 id={key} className="ml-6 pt-6 pb-4 text-lg font-bold">
                {key.replace(/_/g, " ")}
              </h2>
              <div className="m-auto mx-6 border-b border-black">
                {startersdata[key].map((item, z) => (
                  <div className="flex flex-col">
                    <div
                      key={z}
                      className="flex flex-row justify-between text-sm font-bold"
                    >
                      <div>
                        {item.name}
                        {item.mainallergens &&
                          item.mainallergens.map((x) => {
                            return (
                              <img
                                src={prefix + x + postfix}
                                width="14px"
                                style={{
                                  display: "inline-block",
                                  marginLeft: 5,
                                  marginBottom: 1,
                                }}
                              />
                            );
                          })}
                      </div>
                      {!Array.isArray(item.price) && (
                        <div className="inline-block">{item.price}.00</div>
                      )}
                    </div>
                    <p className="pr-32 pb-1 text-sm font-normal sm:pr-16">
                      {item.description}
                    </p>
                    {item.options &&
                      item.options.map((x, i) => {
                        return (
                          <div className="flex flex-row justify-between text-sm">
                            <div>
                              <li className="list-disc font-normal">
                                {x}{" "}
                                {Array.isArray(item.allergens[i]) ? (
                                  item.allergens[i].map((y) => {
                                    return (
                                      <img
                                        src={prefix + y + postfix}
                                        width="14px"
                                        style={{
                                          display: "inline-block",
                                          marginLeft: 5,
                                          marginBottom: 1,
                                          zIndex: 0,
                                        }}
                                      />
                                    );
                                  })
                                ) : (
                                  <img
                                    src={prefix + item.allergens[i] + postfix}
                                    width="14px"
                                    style={{
                                      display: "inline-block",
                                      marginLeft: 5,
                                      marginBottom: 1,
                                      zIndex: 0,
                                    }}
                                  />
                                )}
                              </li>
                            </div>
                            {Array.isArray(item.price) && (
                              <div className="inline-block">
                                {item.price[i]}.00
                              </div>
                            )}
                          </div>
                        );
                      })}
                    <br />
                  </div>
                ))}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
