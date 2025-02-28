const button = document.querySelector("button");
button.addEventListener(`click`, (e) => {
  e.preventDefault();
  document.querySelector("form").reportValidity();
});

export { button };
