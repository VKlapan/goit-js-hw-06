const validationInputEl = document.querySelector("#validation-input");

const inputValidation = (event) => {
  event.currentTarget.value.length ===
  Number.parseInt(validationInputEl.getAttribute("data-length"))
    ? (validationInputEl.className = "valid")
    : (validationInputEl.className = "invalid");
};

validationInputEl.addEventListener("blur", inputValidation);

// console.log(validationInputEl);
