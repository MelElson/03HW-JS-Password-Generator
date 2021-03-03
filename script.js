


// Assignment Code
//var test = prompt("test")
var generateBtn = document.querySelector("#generate");
var special = ["!","#","$","%","&","*","+","-",".","/",":",";","<","=",">","?","@"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var password = ""
var options = []
var guarenteedOptions = []
var endPassword = []
// start
var generatePassword = function() {
  
 
 // prompt Length of password? answer number
 
 var length = Number(prompt("How many characters password?"))
  
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Choose between 8-128 characters. How many characters would you like your password to be?"));

  //do I want special characters
 var userChoiceSpecChar = window.confirm("Do you want special characters for your password?");
  if (userChoiceSpecChar == true) {
    options = options.concat(special) 
    guarenteedOptions.push(random(special))
  }

  //Do I want upppercase
  var userChoiceUpper = window.confirm("Do you want uppercase for your password?");
  if (userChoiceUpper == true) {
    options = options.concat(upper)
    guarenteedOptions.push(random(upper))
  }

  //Do I want lowercase

  var userChoicelower = window.confirm("Do you want lowercase for your password?");
  if (userChoicelower == true) {
    options = options.concat(lower)
    guarenteedOptions.push(random(lower))
  }
  //Do I want number 
  var userChoiceNumber = window.confirm("Do you want numbers for your password?");
  if (userChoiceNumber == true) {
    options = options.concat(number) 
    guarenteedOptions.push(random(number))
  }

  


for (i=0;i<length;i++){
  var randomChar = random(options)
  endPassword.push(randomChar)
}
 for (let i = 0; i < length; i += guarenteedOptions) {
 //for (i=0; i<guarenteedOptions.length; i++){ ///
   endPassword[i]=guarenteedOptions[i]
 } 

 //for loop instead of options look at arrays 
 
 return endPassword.join('')
};

function random(arr){
  //random index from array
  var index = Math.floor(Math.random() * arr.length);
  var passwordChoice = arr[index]; 
  return passwordChoice
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
