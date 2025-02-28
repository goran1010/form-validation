import checkConfirm from "./confirmPassword";

const password = document.querySelector(`#password`);
password.addEventListener(`input`, checkPassword);

export default function checkPassword() {
  checkConfirm();
  password.setCustomValidity("");
  if (!password.checkValidity()) {
    password.setCustomValidity(
      "Password has to be at least 8 characters long and contain at least one letter and at least one number"
    );
  } else {
    password.setCustomValidity("Check");
    password.reportValidity();
    password.setCustomValidity("");
  }
  password.reportValidity();
}
