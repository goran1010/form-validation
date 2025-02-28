const select = document.querySelector(`select`);
const zipCode = document.querySelector(`#zip-code`);

select.addEventListener(`input`, changeSelect);
let pattern = /^\d{5}$/;

function changeSelect() {
  if (select.value === "France") {
    pattern = /^\d{5}$/;
    zipCode.setAttribute(`placeholder`, "75008");
  } else if (select.value === "USA") {
    pattern = /^\d{5}(-\d{4})?$/;
    zipCode.setAttribute(`placeholder`, "12345 or 12345-6789");
  } else if (select.value === "UK") {
    pattern = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
    zipCode.setAttribute(`placeholder`, "EC1A 1BB or W1A 0AX");
  }
}

zipCode.addEventListener(`input`, checkZip);

export default function checkZip() {
  if (!pattern.test(zipCode.value)) {
    if (select.value === "France") {
      zipCode.setCustomValidity("Zip code must be 5 digits");
    } else if (select.value === "USA") {
      zipCode.setCustomValidity(
        "Zip code must be 5 digits,optionally followed by a hyphen and 4 extra digits"
      );
    } else if (select.value === "UK") {
      zipCode.setCustomValidity(
        "Zip code must be split into two parts, separated by space. First part contains 1 or 2 letters and 1 or 2 digits. Second part always contains 1 digit followed by 2 letters"
      );
    }
  } else zipCode.setCustomValidity("");
  zipCode.reportValidity();
}
