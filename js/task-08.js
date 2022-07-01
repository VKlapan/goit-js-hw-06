const form = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();

  //   const {
  //     elements: { login, password },
  //   } = event.currentTarget;

  console.log(
    event.currentTarget.elements.email.value,
    event.currentTarget.elements.password.value
  );
};

form.addEventListener("submit", submitHandler);
