// Assignment Code

// Variables indicating what we need for the random generator
var generateBtn = document.querySelector("#generate");
var alphabetLowercase = "abcdefghijklmopqrstuvwxyz".split("");
var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "0123456789".split("");
var sym = "~@#$%*&[]{}()-+=_".split("");
var majorBank = "abcdefghijklmopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ~@#$%*&[]{}()-+=_".split(
  ""
);

// Function will pull variable from a higher placement
function generatePassword() {
  passwordLength = prompt("How long do you want your password to be?");
  if (passwordLength > 128 || passwordLength < 8) {
    alert(
      "Please choose a new number between 8 - 128 for your password length"
    );
    return generatePassword();
  }

  // placed confirm variables inside the function so there will be a refreshed password
  var passwordLength;
  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  var confirms = 0;

  // New password variable is an array that will be filled for the random chracaters for the password
  var newpassword = [];

  // These confimrs ask the user what characters they would like to use for their password
  numbers = confirm("Do you want numbers in your password?");
  console.log(numbers);
  symbols = confirm("Do you want symbols in your password?");
  console.log(symbols);
  caps = confirm("Do you want caps in your password");
  console.log(caps);
  lowercase = confirm("Do you want lowercase in your password");

  // counter of # of confirms, checks to see of variable numbers, symbols, caps, lowercase is true, and if it is true adds one to the counter of confirms.

  if (numbers) {
    confirms = confirms + 1;
  }
  if (symbols) {
    confirms = confirms + 1;
  }
  if (caps) {
    confirms = confirms + 1;
  }
  if (lowercase) {
    confirms = confirms + 1;
  }
  // If the user chooses yes to put in a symbol, then a random character from the array will be pushed to the end of the new password
  if (numbers) {
    newpassword.push(num[randomPull(num)]);
  }
  if (symbols) {
    newpassword.push(sym[randomPull(sym)]);
  }
  if (lowercase) {
    newpassword.push(alphabetLowercase[randomPull(alphabetLowercase)]);
  }
  if (caps) {
    newpassword.push(alphabetCaps[randomPull(alphabetCaps)]);
  }

  // major bank unshifts as well as how many characters can be placed within the password

  for (var i = 0; i < passwordLength - confirms; i++) {
    newpassword.unshift(majorBank[randomPull(majorBank)]);
  }
  // This will give an array fofor the new password
  newpassword = newpassword.join("");
  console.log(newpassword);

  // This will return the function as a new password
  return newpassword;
}

// function randompull will take in a string and pull a random index by multiplying by 0 - 1 * string length
function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
