function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let divSize = 30;

const createBoxes = () => {
  const amount = inputEl.value;
  const divArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${divSize}px`;
    divEl.style.height = `${divSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divArray.push(divEl);
    divSize += i * 10;
  }
  boxesEl.append(...divArray);
  inputEl.value = "";
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  divSize = 30;
};

buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);

// console.log(inputEl);
// console.log(buttonCreateEl);
// console.log(buttonDestroyEl);
