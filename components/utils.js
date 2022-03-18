// prettier-ignore
export const cdnImage = (name, folder='public/images') => {
  if (process.env.NODE_ENV === "production") {
      return "https://cdn.statically.io/gh/ervandenbosch/co-tam/main/"+folder+"/"+name;
  } else {
    return "../images/" + name;
  }
};
