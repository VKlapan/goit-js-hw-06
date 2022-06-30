const categoriesUlEl = document.querySelector("#categories");
const categoriesLiEl = categoriesUlEl.querySelectorAll("li.item");
const categoryItemsEl = categoriesLiEl[1].querySelectorAll("li");

console.log("Numbers of categories: ", categoriesLiEl.length);

categoriesLiEl.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements: ", item.querySelectorAll("li").length);
});

// const temp = itemsEl.forEach((item) => {
//   console.log(item.textContent);
// });
