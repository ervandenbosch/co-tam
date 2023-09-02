export const maindishesdataNL = {
  Wok: [
    {
      name: "Com rang",
      description: "Stir fried rice with, onion, vegetables and eggs",
      options: [
        "Chicken",
        "Beef",
        "Crispy duck",
        "Shrimp",
        "Tofu (vegan on request)",
      ],
      price: [17, 18, 20, 21, 17],
      allergens: [
        ["egg", "fish"],
        ["egg", "fish"],
        ["egg", "fish", "gluten"],
        ["egg", "fish", "crust"],
        ["egg", "soy"],
      ],
    },
    {
      name: "Pho xao",
      description:
        "Stir fried wide rice noodles with vegetables, eggs, fried onion, and herbs",
      options: [
        "Chicken",
        "Beef",
        "Crispy duck",
        "Shrimp",
        "Tofu (vegan on request)",
      ],
      price: [17, 18, 20, 21, 17],
      allergens: [
        ["egg", "fish"],
        ["egg", "fish"],
        ["egg", "fish", "gluten"],
        ["egg", "fish", "crust"],
        ["egg", "soy"],
      ],
    },
    {
      name: "Udon xao",
      description:
        "Stir fried udon noodles with vegetables, eggs, fried onion, and herbs",
      options: ["Crispy duck", "Tofu (vegan)"],
      price: [21, 18],
      allergens: [["egg", "fish"], ["soy"]],
    },
  ],
  Hoofdgerechten: [
    {
      name: "Curry do",
      description:
        "Red curry sauce with cream and coconut milk, green vegetables, eggplant, champignons",
      options: ["Chicken", "Beef", "Crispy duck", "Shrimp", "Tofu"],
      price: [19, 20, 21, 23, 19],
      allergens: [
        ["lactose", "fish"],
        ["lactose", "fish"],
        ["lactose", "fish", "gluten"],
        ["lactose", "fish", "crust"],
        ["lactose", "fish", "soy"],
      ],
      mainallergens: "pepper",
    },
    {
      name: "Sot lac",
      description: "Peanut sauce with green vegetables, champignons",
      options: ["Chicken", "Crispy duck", "Tofu (vegan)"],
      price: [19, 21, 19],
      allergens: [
        ["peanut", "fish"],
        ["peanut", "fish", "gluten"],
        ["peanut", "soy"],
      ],
    },
    {
      name: "Sot gung",
      description:
        "Ginger sauce with green vegetables, champignons, and bean sprouts",
      options: ["Chicken", "Beef", "Crispy duck", "Shrimp", "Tofu (vegan)"],
      price: [19, 20, 21, 23, 19],
      allergens: [
        "fish",
        "fish",
        ["fish", "gluten"],
        ["fish", "crust"],
        ["soy"],
      ],
      mainallergens: "pepper",
    },
    {
      name: "Sa ot",
      description:
        "Lemongrass sauce with green vegetables, champignons and chilli",
      options: ["Chicken", "Beef", "Shrimp", "Tofu (vegan)"],
      price: [20, 21, 24, 20],
      allergens: ["fish", "fish", ["fish", "crust"], ["soy"]],
      mainallergens: ["pepper", "pepper"],
    },
    {
      name: "Sot me",
      description:
        "Tamarind sauce with grilled asparagus, sugar snaps, dried chilli",
      options: ["Crispy chicken", "Crispy beef", "Crispy shrimp"],
      price: [21, 22, 25],
      allergens: [
        ["fish", "gluten"],
        ["fish", "gluten"],
        ["fish", "gluten", "crust"],
      ],
      mainallergens: "pepper",
    },
    {
      name: "Sot basilicum",
      description: "Basil sauce with green vegetables and champignons",
      options: ["Chicken", "Beef", "Crispy duck", "Shrimp", "Tofu (vegan)"],
      price: [20, 21, 22, 24, 20],
      allergens: [
        "fish",
        "fish",
        ["fish", "gluten"],
        ["fish", "crust"],
        ["soy"],
      ],
      mainallergens: "pepper",
    },
    {
      name: "Sot hoisin",
      description: "Hoisin sauce with green vegetables, cashew nuts",
      options: ["Chicken", "Beef", "Crispy duck", "Shrimp", "Tofu (vegan)"],
      price: [19, 20, 21, 23, 20],
      allergens: [
        "fish",
        "fish",
        ["fish", "gluten"],
        ["fish", "crust"],
        ["soy"],
      ],
      mainallergens: ["nuts", "soy", "pepper"],
    },
    {
      name: "Dua Xao Bo",
      description:
        "Sliced beef with pineapple, spring onion, cherry tomatoes and ginger",
      price: 21,
      mainallergens: ["crust", "celery", "pepper"],
    },
    {
      name: "Stir fried white fungus (vegan)",
      description:
        "Stir fried white fungus with green vegetables, bean sprouts, crispy tofu",
      price: 19,
      mainallergens: ["sesam", "soy"],
    },
    ,
  ],
  Noodle_salade_bowl: [
    {
      name: "Bun bo nam bo",
      description: "Rice noodles with beef",
      price: 20,
      mainallergens: ["fish", "peanut"],
    },
    {
      name: "Bun nem",
      description: "Rice noodles with meat spring rolls",
      price: 20,
      mainallergens: ["fish", "peanut"],
    },
    {
      name: "Bun vit",
      description: "Rice noodles with crispy duck",
      price: 22,
      mainallergens: ["fish", "peanut", "gluten"],
    },
    {
      name: "Bun ga",
      description: "Rice noodles with stir fried chicken",
      price: 19,
      mainallergens: ["fish", "peanut"],
    },
    {
      name: "Bun tom",
      description: "Rice noodles with prawns",
      price: 23,
      mainallergens: ["fish", "peanut", "crust"],
    },
    {
      name: "Bun chay (vegan on request) ",
      description: "Rice noodles with tofu",
      price: 19,
      mainallergens: ["fish", "peanut", "soy"],
    },
    {
      name: "Bun la lot",
      description: "Rice noodles with beef betel leaf wraps",
      price: 20,
      mainallergens: ["fish", "peanut", "sesam"],
    },
  ],
  "Vis_&_Zeevruchten_specialiteiten": [
    {
      name: "Ginger salmon",
      description:
        "Grilled salmon with grilled asparagus and shiitake mushrooms, and ginger sauce, rice on side",
      price: 25,
      mainallergens: ["fish", "pepper"],
    },
    {
      name: "Dua Xao Seafood",
      description:
        "Spring onion, pineapple, cherry tomatoes, Jacob mussels, monk fish, squid, shrimps, ginger",
      price: 29,
      mainallergens: ["fish", "shell", "crust", "celery", "pepper", "pepper"],
    },
    {
      name: "Red Pepper Jacob mussels",
      description:
        "Jacob mussels in red pepper sauce with asparagus, string and green beans, rice on the side",
      price: 29,
      mainallergens: ["fish", "pepper"],
    },
  ],
};
