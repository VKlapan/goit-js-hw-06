const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const handlerInputName = (event) => {
  nameOutputEl.textContent = event.currentTarget.value;
};

const handlerChangeName = (event) => {
  if (event.currentTarget.value === "") {
    nameOutputEl.textContent = "Anonymus";
  }
};

nameInputEl.addEventListener("input", handlerInputName);
nameInputEl.addEventListener("change", handlerChangeName);

// console.log(nameInputEl);
// console.log(nameOutputEl.textContent);
