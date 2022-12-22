// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = lowercaseCharacters.toUpperCase();
  var Number ="0123456789";
  var specialCharacters = "!@#$%^&*()";
  // var randomFunc = {
  //   lower: getRandomLower,
  //   upper: getRandomUpper,
  //   number: getRandomNumber,
  //   symbol: getRandomSymbol,
  // };
  var selection = "";
  var passwordLength = prompt("What is the password length:at least 8 characters and no more than 128 characters");
  console.log(passwordLength);
  // Generate function
  var hasLower = confirm("Do you want lowercase letters ? Yes or No");
  console.log(hasLower);
  var hasUpper = confirm("Do you want upperCase letters ? Yes or No");
  console.log(hasUpper);
  var hasNumber = confirm ("0123456789");
  console.log(hasNumber);

  if (hasLower === true) {
    selection = selection + lowercaseCharacters;
  }
  if (hasUpper === true) {
    selection = selection + upperCaseCharacters;
  }
  console.log(selection);
return selection;
}

function getRandomLower() {
  return String.fromCharCode(math.floor(Math.random * 26) + 97);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
