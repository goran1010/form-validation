const confirm = document.querySelector(`#confirm-password`);
const password = document.querySelector(`#password`);
confirm.addEventListener(`input`, checkConfirm);

export default function checkConfirm() {
  confirm.setCustomValidity("");
  if (confirm.value !== password.value) {
    confirm.setCustomValidity("Passwords need to match");
  } else confirm.setCustomValidity("");
  confirm.reportValidity();
}
