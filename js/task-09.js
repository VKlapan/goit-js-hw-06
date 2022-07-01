function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");

const backgroundColorChanger = () => {
  const bgrColor = getRandomHexColor();
  colorValueEl.textContent = bgrColor;
  document
    .querySelector("body")
    .setAttribute("style", `background-color: ${bgrColor}`);
};

buttonChangeColorEl.addEventListener("click", backgroundColorChanger);
