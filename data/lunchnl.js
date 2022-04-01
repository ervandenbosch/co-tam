export const lunchdatanl = {
  Starter: [
    {
      name: "Mini Nem (mini spring rolls) - 2pcs",
      description: "Select: seafood, pork or chicken",
      price: 4,
      mainallergens: ["gluten", "fish"],
    },
  ],
  Grote_Soep: [
    {
      name: "Pho",
      description:
        "Traditional soup with strong clear beef and chicken broth with wide rice noodles, beansprouts, spring onion, coriander",
      options: [
        "Chicken (Vietnamese classic)",
        "Beef (Vietnamese classic)",
        "Tofu",
      ],
      price: [13, 14, 12],
      allergens: ["fish", "fish", ["fish", "soy"]],
    },
    {
      name: "Bun bo Hue",
      description:
        "Traditional soup of Hue city. Beef and chicken broth with rice noodles with beef, lemongrass, onion, bean sprouts, chili",
      price: 14,
      mainallergens: ["fish", "pepper"],
    },
  ],
  Wok: [
    {
      name: "Com rang",
      description: "Stir fried rice with, onion, vegetables and eggs",
      options: ["Chicken", "Beef", "Crispy duck", "Tofu"],
      price: [16, 17, 18, 19, 15],
      allergens: [
        ["egg", "fish"],
        ["egg", "fish"],
        ["egg", "fish", "gluten"],
        ["egg", "fish", "soy"],
      ],
    },
    {
      name: "Pho xao",
      description:
        "Stir fried wide rice noodles with vegetables, eggs, fried onion, and herbs",
      options: ["Chicken", "Beef", "Crispy duck", "Tofu"],
      price: [16, 17, 18, 19, 15],
      allergens: [
        ["egg", "fish"],
        ["egg", "fish"],
        ["egg", "fish", "gluten"],
        ["egg", "fish", "soy"],
      ],
    },
    {
      name: "Udon xao",
      description:
        "Stir fried udon noodles with pakchoi, spring onion, bean sprouts",
      options: ["Chicken", "Beef", "Crispy Duck", "Tofu (vegan on request)"],
      price: [13, 14, 15, 12],
      allergens: ["fish", "fish", ["fish", "gluten"], ["fish", "soy"]],
    },
  ],
  Rijstgerechten: [
    {
      name: "Curry do",
      description:
        "Red curry sauce with cream and coconut milk, green vegetables, eggplant, champignons",
      options: ["Chicken", "Beef", "Crispy duck", "Tofu"],
      price: [17, 18, 19, 20, 16],
      allergens: [
        ["lactose", "fish"],
        ["lactose", "fish"],
        ["lactose", "fish", "gluten"],
        ["lactose", "fish", "soy"],
      ],
      mainallergens: ["pepper", "pepper"],
    },
    {
      name: "Sot lac",
      description: "Peanut sauce with green vegetables, champignons",
      options: ["Chicken", "Crispy duck", "Tofu (vegan on request)"],
      price: [17, 18, 16],
      allergens: [
        ["peanut", "fish"],
        ["peanut", "fish", "gluten"],
        ["peanut", "fish", "soy"],
      ],
    },
    {
      name: "Sot gung",
      description:
        "Ginger sauce with green vegetables, champignons, and bean sprouts",
      options: ["Chicken", "Beef", "Crispy duck", "Tofu (vegan on request)"],
      price: [17, 18, 19, 20, 16],
      allergens: ["fish", "fish", ["fish", "gluten"], ["fish", "soy"]],
      mainallergens: "pepper",
    },
    {
      name: "Sot hoisin",
      description: "Hoisin sauce with green vegetables, cashew nuts",
      options: ["Chicken", "Beef", "Crispy duck", "Tofu (vegan on request)"],
      price: [18, 19, 20, 21, 17],
      allergens: ["fish", "fish", ["fish", "gluten"], ["fish", "soy"]],
      mainallergens: ["nuts", "soy", "pepper"],
    },
    {
      name: "Bo zao khoai tay",
      description:
        "Stir fried beef slices, potatoes, coriander, celery, cherry tomatoes, pepper",
      price: 14,
      mainallergens: ["celery", "fish", "pepper"],
    },
    {
      name: "Stir fried white fungus (vegan)",
      description:
        "Stir fried white fungus with green vegetables, bean sprouts, crispy tofu",
      price: 12,
      allergens: ["sesam", "soy"],
    },
    {
      name: "Rao Xao Tofu (vegan)",
      description: "Stir fried vegetable mix with tofu",
      price: 12,
      mainallergens: ["sesam", "soy"],
    },
  ],
  Noodle_specialiteiten: [
    {
      name: "Bun nem",
      description: "Rice noodles with meat spring rolls",
      price: 12,
      mainallergens: ["fish", "peanut"],
    },
    {
      name: "Bun vit",
      description: "Rice noodles with crispy duck",
      price: 13,
      mainallergens: ["fish", "peanut", "gluten"],
    },
    {
      name: "Bun ga",
      description: "Rice noodles with stir fried chicken",
      price: 12,
      mainallergens: ["fish", "peanut"],
    },
    {
      name: "Bun chay (vegan on request",
      description: "Rice noodles with tofu",
      price: 12,
      mainallergens: ["fish", "peanut", "soy"],
    },
  ],
};
