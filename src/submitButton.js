import checkConfirm from "./confirmPassword";
import checkEmail from "./checkEmail";
import checkPassword from "./password";

const button = document.querySelector("button");
button.addEventListener(`click`, (e) => {
  e.preventDefault();
  document.querySelector("form").reportValidity();
});

export { button };
