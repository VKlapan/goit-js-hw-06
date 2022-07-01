const buttonIncrementEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const buttonDecrementEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const counterEl = document.querySelector("#value");

let counterValue = 0;

// console.log(buttonIncrementEl);
// console.log(buttonDecrementEl);
// console.log(counterEl);

buttonIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

buttonDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
