const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSizeChanger = (event) => {
  textEl.setAttribute("style", `font-size: ${event.currentTarget.value}px`);
};

fontSizeControlEl.addEventListener("input", fontSizeChanger);
