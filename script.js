const input = document.querySelector("input");

const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimCaseOutput = document.querySelector("#trimcase span");

// functions for CAMEL CASE
function capitalizeString(str) {
    if (!str) return str
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function camelCase(string) {
  const lowerCaseString = string.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join(" ");
}

// Functions for PASCAL CASE

function pascalCase(string) {
  const lowerCaseString = string.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    return capitalizeString(word); // capitalize function is declared in CAMELCASE FUNCTION
  });
  return finalArray.join("");
}

//  FUNCTION FOR SNAKE CASE

function snakeCase(string) {
  return string.replaceAll(' ','_')
}

// FUNCTION FOR  KEBAB CASE

function kebabCase(string) {
    return string.replaceAll(' ','-')

}

// FUNCTION FOR TRIM CASE
function trimCase(string) {
    return string.replaceAll(' ','')

}

// MAIN Function

function updateScreen() {
  lowerCaseOutput.innerText = input.value.trim().toLowerCase();
  upperCaseOutput.innerText = input.value.trim().toUpperCase();
  camelCaseOutput.innerText = camelCase(input.value.trim());
  pascalCaseOutput.innerText = pascalCase(input.value.trim());
  snakeCaseOutput.innerText = snakeCase(input.value.trim());
  kebabCaseOutput.innerText = kebabCase(input.value.trim());
  trimCaseOutput.innerText = trimCase(input.value.trim());
}

updateScreen();

input.addEventListener('input', updateScreen);
