const passwordDisplay = document.getElementById("password-display");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const charTypes = [];

  if (uppercaseCheckbox.checked) {
    charTypes.push(getUppercase);
  }
  if (lowercaseCheckbox.checked) {
    charTypes.push(getLowercase);
  }
  if (numbersCheckbox.checked) {
    charTypes.push(getNumber);
  }
  if (symbolsCheckbox.checked) {
    charTypes.push(getSymbol);
  }

  if (charTypes.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomTypeIndex = Math.floor(Math.random() * charTypes.length);
    const randomTypeFunc = charTypes[randomTypeIndex];
    password += randomTypeFunc();
  }

  return password;
}

generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword();
  passwordDisplay.value = newPassword;
  localStorage.setItem("savedPassword", newPassword);
});

copyBtn.addEventListener("click", () => {
  const passwordToCopy = passwordDisplay.value;

  if (!passwordToCopy) {
    return;
  }

  navigator.clipboard
    .writeText(passwordToCopy)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy Password";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
      alert("Failed to copy password. Please try again.");
    });
});

function loadSavedPassword() {
  const savedPassword = localStorage.getItem("savedPassword");
  if (savedPassword) {
    passwordDisplay.value = savedPassword;
  }
}

loadSavedPassword();
