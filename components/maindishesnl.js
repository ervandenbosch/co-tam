import { maindishesdataNL } from "../data/maindishesnl";
import Link from "next/link";

export function MainDishesNL() {
  let prefix = "/images/";
  let postfix = ".jpg";

  return (
    <>
      <div className="mt-4 text-center">
        {Object.keys(maindishesdataNL).map((key) => {
          return (
            <>
              <Link id={key} href={`#${key.toString()}`}>
                <a className="lg2:text-md text-sm font-normal sm:text-xs">
                  <button
                    className={
                      "lg2:text-md text-center text-sm hover:underline hover:underline-offset-4 sm:text-xs"
                    }
                  >
                    {key.replace(/_/g, " ")}
                  </button>
                  {key === "Noodle_Salad_Bowl" ? "" : " | "}
                </a>
              </Link>
            </>
          );
        })}
      </div>
      <div className="m-auto max-w-[700px] pt-2">
        {Object.keys(maindishesdataNL).map((key) => {
          return (
            <>
              <h2
                id={key}
                className="ml-6 pb-4 pt-6 text-lg font-bold underline underline-offset-4"
              >
                {key.replace(/_/g, " ")}
              </h2>
              <div className="m-auto mx-6 border-b border-black">
                {maindishesdataNL[key].map((item, i) => (
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between text-sm font-bold">
                      <div>
                        {item.name}
                        {item.mainallergens &&
                          (Array.isArray(item.mainallergens) ? (
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
                            })
                          ) : (
                            <img
                              src={prefix + item.mainallergens + postfix}
                              width="14px"
                              style={{
                                display: "inline-block",
                                marginLeft: 5,
                                marginBottom: 1,
                              }}
                            />
                          ))}
                      </div>
                      {!Array.isArray(item.price) && (
                        <div className="inline-block">{item.price}</div>
                      )}
                    </div>
                    <p className="pb-1 pr-32 text-sm font-normal sm:pr-16">
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
                                {item.price[i]}
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
