// Assignment code here
function generatePassword(numOfChar, shouldIncludeLowerCase, shouldIncludeUpperCase, shouldIncludeNumericChar, shouldIncludeSpecialChar) {
  var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericValues = "0123456789";
  var specialCharacters = "~!@#$%^&*()_+=-{}|:<>?[]\;,./";

  var possibilitiesList = [];
    if (shouldIncludeLowerCase) {
      possibilitiesList.push(lowerCaseAlphabet);
    }
    if (shouldIncludeUpperCase) {
      possibilitiesList.push(upperCaseAlphabet);
    }
    if (shouldIncludeNumericChar) {
      possibilitiesList.push(numericValues);
    }
    if (shouldIncludeSpecialChar) {
      possibilitiesList.push(specialCharacters);
    }
    console.log(possibilitiesList);

    var password = '';
    var possibilitiesIndex = 0;

    for ( var i = 0; i < numOfChar; i++) {
      password += randomChar(possibilitiesList[possibilitiesIndex]);
      possibilitiesIndex++;

      if (possibilitiesIndex >= possibilitiesList.length) {
        possibilitiesIndex = 0;
      }
    }
    return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //# of characters prompt
  var numOfChar = window.prompt("How many characters would you like?");
    if (numOfChar <= 7 || numOfChar > 128) {
      return window.alert("Character length must be at least 8 and less than 129");
    }
  
    var shouldIncludeLowerCase = window.confirm("Click OK to confirm including lowercase characters");
    console.log(shouldIncludeLowerCase);

    var shouldIncludeUpperCase = window.confirm("Click OK to confirm including uppercase characters");
    console.log(shouldIncludeUpperCase);

    var shouldIncludeNumericChar = window.confirm("Click OK to confirm including numeric characters");
    console.log(shouldIncludeNumericChar);

    var shouldIncludeSpecialChar = window.confirm("Click OK to confirm including special characters");
    console.log(shouldIncludeSpecialChar);

    if (shouldIncludeLowerCase === false && shouldIncludeUpperCase === false && shouldIncludeNumericChar === false && shouldIncludeSpecialChar === false) {
      return window.alert("Select at least 1 character type");
    }

    // generatePassword();

  var password = generatePassword(numOfChar, shouldIncludeLowerCase, shouldIncludeUpperCase, shouldIncludeNumericChar, shouldIncludeSpecialChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);