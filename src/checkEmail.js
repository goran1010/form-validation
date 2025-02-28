const email = document.querySelector(`#mail`);
email.addEventListener(`input`, checkEmail);

function hasEightCharsBeforeAt(email) {
  const parts = email.split("@");
  return parts[0].length >= 8;
}

function hasAtLeastOneChar(email) {
  const parts = email.split("@");
  return parts[1].length >= 1;
}

export default function checkEmail() {
  if (!hasEightCharsBeforeAt(email.value)) {
    email.setCustomValidity("Need at least 8 characters before @ sign");
  } else if (!email.value.includes("@")) {
    email.setCustomValidity("Need @ sign");
  } else if (!hasAtLeastOneChar(email.value)) {
    email.setCustomValidity("Need at least 1 character after @ sign");
  } else email.setCustomValidity("");

  email.reportValidity();
}
