var randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var lowLetters = alphabet.split('');
var capLetters = alphabet.toUpperCase().split("");
var characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', ',', '.', '?', '\\', '|', '"', ';'];


var input;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;
var choices = [];


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var password = '';
  input = parseInt(window.prompt('how many characters do you want?'));

  if ((input > 8 && input < 128)){
    confirmNumber = window.confirm('select OK if you want to include numbers')
    confirmUppercase = window.confirm('select OK if you want to include uppercase');
    confirmLowercase = window.confirm('select OK if you want to include lowercase');
    confirmCharacter = window.confirm('select OK if you want to include special characters');
  } else {
    alert('enter valid number')
    generatePassword();
  }
  if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmCharacter) {
    alert('Nope! Try Again!');
    generatePassword();
  }
  if(confirmNumber) {
    choices = choices.concat(randomNumber)
  } else {
    choices;
  }
  if(confirmUppercase) {
    choices = choices.concat(capLetters)
  } else {
    choices;
  }
  if(confirmLowercase) {
    choices = choices.concat(lowLetters)
  } else {
    choices;
  }
  if(confirmCharacter) {
    choices = choices.concat(characters)
  } else {
    choices;
  }

  for(i = 0; i < input; i++){
    password += choices[(Math.floor(Math.random() * choices.length))];
  }
  return password;
}