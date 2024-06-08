function telephoneCheck(str) {
  let telRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?[\d]{3}[-\s]?[\d]{4}$/;
  return telRegex.test(str);
}

let button = document.querySelector("#check");
let input = document.querySelector("input");
let resultDiv = document.querySelector("#result");
let clearButton = document.querySelector("#clear");

button.addEventListener('click', function(e) {
  e.preventDefault(); 
  let num = input.value.trim();
  let result = telephoneCheck(num);
  resultDiv.textContent = result ? "This is a valid telephone number" : "This is not a valid telephone number";
});

clearButton.addEventListener('click', function(e) {
  e.preventDefault(); 
  input.value = ""; 
  resultDiv.textContent = ""; 
});
