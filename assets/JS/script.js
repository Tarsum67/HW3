// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = PassGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var spchar = "!#$%&*()_-=+{}<>,.?/|^;:`~";
var Cha ="";

function PassGen(){
  var InputLenght = prompt("How many characters do you want the Password?");
  if((userInput <= 7) || (userInput >= 129)){
    alert("Password Must be 8 to 128 characters")
return PassGen();
  }
  var lowchoice = confirm("add Lowercase?")
  if(lowchoice){
    Cha += lowchoice

  }
  var uppercase = confirm("add Uppercase?")
  if(lowchoice){
    Cha += uppercase

  }


}