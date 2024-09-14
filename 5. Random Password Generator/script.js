const passBox = document.querySelector("#passBox");
const copyBtn = document.querySelector("#copyBtn");
const inputSlider = document.querySelector("#inputSlider");
const passIndicator = document.querySelector("#passIndicator");
const sliderValue = document.querySelector(".sliderValue");

const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");

const getBtn = document.querySelector("#getBtn");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersLetters = "0123456789";
const symbolsLetters = "!@#$%^&*()";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;

  generatePassword();
});

function generatePassword() {
  const lengthVar = inputSlider.value;
  let characters = "";
  let password = "";
  characters += lowercaseEl.checked ? lowercaseLetters : "";
  characters += uppercaseEl.checked ? uppercaseLetters : "";
  characters += numbersEl.checked ? numbersLetters : "";
  characters += symbolsEl.checked ? symbolsLetters : "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random * characters.length));
  }

  passBox.value = password;
  updatePasswordIndicator();
}

function updatePasswordIndicator() {
  const passwordStrength = getPasswordStrength(passBox.value);
  passIndicator.className = "pass-indicator " + passwordStrength;
}

function getPasswordStrength(password) {
  if (password.length <= 10) {
    return "weak";
  } else if (password.length <= 20) {
    return "medium";
  } else {
    return "strong";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updatePasswordIndicator();
});

copyBtn.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyBtn.innerText = "check";

    setTimeout(() => {
      copyBtn.innerHTML = "content_copy";
    }, 3000);
  }
});
