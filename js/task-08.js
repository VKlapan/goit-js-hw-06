const form = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();

  //   const {
  //     elements: { login, password },
  //   } = event.currentTarget;

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    window.alert("Bсі поля повинні бути заповнені");
  } else {
    console.log({
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    });

    form.reset();
  }
};

form.addEventListener("submit", submitHandler);
