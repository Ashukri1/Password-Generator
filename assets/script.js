// Assignment code here
// Get references to the #generate element
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var passwordLength;
function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = lowercaseCharacters.toUpperCase();
  var numberChar ="0123456789";
  var specialCharacters = "!@#$%^&*()";
  // var randomFunc = {
  //   lower: getRandomLower,
  //   upper: getRandomUpper,
  //   number: getRandomNumber,
  //   symbol: getRandomSymbol,
  // };
  var selection = "";
   passwordLength = parseInt(prompt("What is the password length:at least 8 characters and no more than 128 characters"));
  console.log(passwordLength);
  // Generate function
  var hasLower = confirm("Do you want lowercase letters ? click ok for yes ");
  console.log(hasLower);
  var hasUpper = confirm("Do you want upperCase letters ? Click ok for  yes");
  console.log(hasUpper);
  var hasNumber = confirm ("Do you want numbers in your password?");
  console.log(hasNumber);
  var hasSpecialCharacters = confirm("Do you want special Characters in your password?");
  console.log(hasSpecialCharacters);

  if (hasLower ) {
    selection = selection + lowercaseCharacters;
  }
  if (hasUpper ) {
    selection = selection + upperCaseCharacters;
  }
  if (hasNumber){
    selection = selection + numberChar;
  }
  if(hasSpecialCharacters){
    selection = selection + specialCharacters;
  }
  console.log(selection);
return selection;
}

function generateRandom(characters) {
var getRandom = "";
for (var i=0;i<passwordLength;i++){
  getRandom += characters[Math.floor(Math.random() * characters.length)];
  console.log(password);
}

 return getRandom;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  

  passwordText.value = generateRandom(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
