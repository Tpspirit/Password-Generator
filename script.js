const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChar = lowercase + uppercase + number + symbol;

const inputText = document.querySelector(".input");

const passwordGenerate = () => {
  let password = "";
  let max_length = 12;

  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < max_length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  inputText.value = password;
};

const generate = document.querySelector(".generate");

generate.addEventListener("click", passwordGenerate);

//copy to clipboard
const copyFunc = () => {
  navigator.clipboard.writeText(inputText.value);
  console.log("Copy to clipboard");
};

document.querySelector(".copy").addEventListener("click", copyFunc);
