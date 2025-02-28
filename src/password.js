const password = document.querySelector(`#password`);
password.addEventListener(`input`, checkPassword);

export default function checkPassword() {
  password.setCustomValidity("");
  if (!password.checkValidity()) {
    password.setCustomValidity(
      "Password has to be at least 8 characters long and contain at least one letter and at least one number"
    );
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
}
