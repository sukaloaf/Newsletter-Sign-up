const input = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");
const closeButton = document.getElementById("closeButton");
const container = document.querySelector(".container");
const success = document.querySelector(".successMessage");
const emailRequired = document.getElementById("validEmail");
const emailAddress = document.getElementById("emailAddress");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const inputValue = input.value;

    if (isValidEmail(inputValue)) {
      submit();
      emailAddress.innerText = `${input.value}`;
    } else {
      badEmail();
    }
  }
});

submitButton.addEventListener("click", () => {
  const inputValue = input.value;

  if (isValidEmail(inputValue)) {
    submit();
    emailAddress.innerText = `${input.value}`;
  } else {
    badEmail();
  }
});

closeButton.addEventListener("click", dismiss);

function dismiss() {
  success.style.display = "none";
  container.style.display = "flex";
}

function submit() {
  container.style.display = "none";
  success.style.display = "block";
}

function badEmail() {
  input.style.color = "#de7173";
  input.style.backgroundColor = "#ffe8e6";
  emailRequired.style.display = "inline";
}

function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}
