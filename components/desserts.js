import { dessertsdata } from "../data/desserts";

export function Desserts() {
  let prefix = "/images/";
  let postfix = ".jpg";

  return (
    <div className="m-auto max-w-[700px] pt-6">
      <h2 className="ml-6 pt-6 pb-4 text-lg font-bold underline underline-offset-4">
        Desserts
      </h2>
      <div className="m-auto mx-6">
        {dessertsdata.map((item, i) => {
          return (
            <div className="flex flex-col">
              <div
                key={i}
                className="flex flex-row justify-between text-sm font-bold"
              >
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
                {!Array.isArray(item.mainprice) && (
                  <div className="inline-block">{item.mainprice}.00</div>
                )}
              </div>
              <p className="pr-16 pb-1 text-sm font-normal">
                {item.description}
              </p>
              {Array.isArray(item.options) && item.options
                ? item.options.map((x, i) => {
                    return (
                      <div className="flex flex-row justify-between pr-16 text-sm">
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
                        {item.mainprice && item.price && (
                          <div className="inline-block">{item.price[i]}.00</div>
                        )}
                      </div>
                    );
                  })
                : item.options && (
                    <div className="flex flex-row justify-between text-sm">
                      <div>
                        <li className="list-disc pr-16 font-normal">
                          {item.options}{" "}
                          {item.allergens && (
                            <img
                              src={prefix + item.allergens + postfix}
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
                      {item.mainprice && item.price && (
                        <div className="inline-block">{item.price}.00</div>
                      )}
                    </div>
                  )}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
