import { soupsdata } from "../data/soups";

export function Soups() {
  let prefix = "/images/";
  let postfix = ".jpg";

  return (
    <div className="m-auto max-w-[700px]  pt-12">
      <h2 className="pl-6 pb-4 text-lg font-bold">Soups</h2>
      <div className="m-auto border-b border-black pr-4 pl-7">
        {soupsdata.map((item, i) => {
          return (
            <div className="flex flex-col">
              <div
                key={i}
                className="flex flex-row justify-between text-sm font-bold"
              >
                <div>
                  {item.name}
                  {item.mainallergens &&
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
                    })}
                </div>
                {!Array.isArray(item.price) && (
                  <div className="inline-block">{item.price}.00</div>
                )}
              </div>
              <p className="pr-16 pb-1 text-sm font-normal">
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
                        <div className="inline-block">{item.price[i]}.00</div>
                      )}
                    </div>
                  );
                })}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
