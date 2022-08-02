export const soupsdata = [
  {
    name: "Hoanh thanh sup",
    description: "Soup with Wan Tan dumplings, pak choi, green onion",
    price: 9,
    mainallergens: ["gluten", "fish", "sesam"],
  },
  {
    name: "Sup ga",
    description:
      "Chicken soup with white fungus and goji berries, spring onion, coriander",
    price: 9,
  },
  {
    name: "Pho",
    description:
      "Traditional soup with strong clear beef and chicken broth with wide rice noodles, beansprouts, spring onion, coriander",
    options: [
      "Chicken (Vietnamese classic)",
      "Beef (Vietnamese classic)",
      "Crispy duck",
      "Shrimps",
      "Tofu",
    ],
    price: [15, 16, 17, 19, 14],
    allergens: [
      "fish",
      ["gluten", "fish"],
      "fish",
      ["fish", "crust"],
      ["fish", "soy"],
    ],
  },
  {
    name: "Bun bo Hue",
    description:
      "Traditional soup of Hue city. Beef and chicken broth with rice noodles with beef, lemongrass, onion, bean sprouts, chili",
    price: 17,
    mainallergens: ["fish", "pepper"],
  },
];
