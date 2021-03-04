


// Assignment Code

// When I click on Generate Password Button
var generateBtn = document.querySelector("#generate");

// Declare variables
var special = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password = ""
var options = []
var guarenteedOptions = []
var endPassword = []

// start
var generatePassword = function () {


  // prompt Length of password? answer number

  var length = Number(prompt("Choose between 8-128 characters. How many characters would you like your password to be?"))

  if (isNaN(length) || length < 8 || length > 128) {

    document.querySelector("#password");
    passwordText.value = password;
  }


  //do I want special characters
  var userChoiceSpecChar = window.confirm("Do you want SPECIAL CHARACTERS for your password? Ok for yes, Cancel for no ");
  if (userChoiceSpecChar == true || userChoiceSpecChar == null) {
    options = options.concat(special)
    guarenteedOptions.push(random(special))
    userChoiceSpecChar = "";
  }


  //Do I want upppercase
  var userChoiceUpper = window.confirm("Do you want UPPERCASE for your password? Ok for yes, Cancel for no ");
  if (userChoiceUpper == true || userChoiceUpper == null) {
    options = options.concat(upper)
    guarenteedOptions.push(random(upper))
    userChoiceUpper = "";
  }

  //Do I want lowercase

  var userChoicelower = window.confirm("Do you want LOWERCASE for your password? Ok for yes, Cancel for no ");
  if (userChoicelower == true || userChoicelower == null) {
    options = options.concat(lower)
    guarenteedOptions.push(random(lower))
    userChoicelower = "";
  }
  //Do I want number 
  var userChoiceNumber = window.confirm("Do you want NUMBERS for your password? Ok for yes, Cancel for no ");
  if (userChoiceNumber == true || userChoiceNumber == null) {
    options = options.concat(number)
    guarenteedOptions.push(random(number))
    userChoiceNumber = "";
  }



  //for statement for random options for password
  for (i = 0; i < length; i++) {
    var randomChar = random(options)
    endPassword.push(randomChar)
  }
  for (let i = 0; i < length; i += guarenteedOptions) {
    endPassword[i] = guarenteedOptions[i]
  }

  //for loop instead of options look at arrays 

  return endPassword.join('')
};

function random(arr) {
  //random index from array
  var index = Math.floor(Math.random() * arr.length);
  var passwordChoice = arr[index];
  return passwordChoice
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Display results in textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
