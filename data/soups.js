export const soupsdata = [
  {
    name: "Hoanh thanh sup",
    description: "Soup with Wan Tan dumplings, pak choi, green onion",
    price: 10,
    mainallergens: ["gluten", "fish", "sesam"],
  },
  {
    name: "Sup ga",
    description:
      "Chicken soup with white fungus and goji berries, spring onion, coriander",
    price: 10,
  },
  {
    name: "Pho",
    description:
      "Traditional soup with strong clear beef and chicken broth with wide rice noodles, beansprouts, spring onion, coriander",
    options: [
      "Chicken (Vietnamese classic)",
      "Beef (Vietnamese classic)",
      "Tofu",
    ],
    price: [16, 17, 15],
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
    price: 18,
    mainallergens: ["fish", "pepper"],
  },
];
