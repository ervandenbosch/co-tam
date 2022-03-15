import { maindishesdata } from "../data/maindishes";

export function MainDishes() {
  let prefix = "/images/";
  let postfix = ".jpg";

  return (
    <div className="m-auto max-w-[700px] pt-6">
      {Object.keys(maindishesdata).map((key) => {
        return (
          <>
            <h2 className="pt-6 pb-4 pl-6 text-lg font-bold">{key}</h2>
            <div className="m-auto border-b border-black pr-4 pl-7">
              {console.log(maindishesdata[key])}
              {maindishesdata[key].map((item, i) => (
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
                                width="18px"
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
                            width="18px"
                            style={{
                              display: "inline-block",
                              marginLeft: 5,
                              marginBottom: 1,
                            }}
                          />
                        ))}
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
                                      width="18px"
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
                                  width="18px"
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
  );
}
