const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const inrgadientesEl = document.querySelector("#ingredients");

const createIngradientsList = (inrgadientes) => {
  return ingredients.map((ingradient) => {
    const ingradientItemEl = document.createElement("li");
    ingradientItemEl.textContent = ingradient;
    ingradientItemEl.classList = "item";
    return ingradientItemEl;
  });
};

inrgadientesEl.append(...createIngradientsList(ingredients));
