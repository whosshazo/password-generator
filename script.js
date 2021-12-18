
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz" 
var numbers = "1234567890"
var specials = "!@#$%^&*()?~"
var userSelection = "";

//DOM handles
var generateBtn = document.querySelector("#generate");


function generatePassword() {
 var password = "";
  
  var passwordLength = prompt("How many characters would you like 8-128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters. Please try again.");
    generatePassword();
  };

  var hasUppers = confirm("Would you like Upper Case letters?");
  var hasLowers = confirm("Would you like Lower Case letters?");
  var hasNumbers = confirm("Would you like Numbers?");
  var hasSpecials = confirm("Would you like Special Characters?");

  if (!hasUppers && !hasLowers && !hasNumbers && !hasSpecials) {
    alert("Please choose availible selections");
    return;
  };

  if (hasUppers) {
    userSelection += upper;
  };

  if (hasLowers) {
    userSelection += lower;
  };

  if (hasNumbers) {
    userSelection += numbers;
  };

  if (hasSpecials) {
    userSelection += specials;
  };

  for(var i = 0; i < passwordLength; i++) {
    password += userSelection.charAt(Math.floor(Math.random() * userSelection.length));
  };

  return password;

};


 

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


