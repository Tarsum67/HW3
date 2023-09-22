// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword(password) {
//   var password = PassGen();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   return "";

// }


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// var generateBtn = document.getElementById("generate");
// generateBtn.addEventListener("click",PassGen)

function PassGen(){
  var InputLenght = prompt("How many characters do you want the Password?");
  if((InputLenght <= 7) || (InputLenght >= 129)){
    alert("Password Must be 8 to 128 characters")
   return ;
  }
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var spchar = "!#$%&*()_-=+{}<>,.?/|^;:`~";
var password = "";
var Cha ="";

  var lowchoice = confirm("add Lowercase?")
  if(lowchoice){
    Cha += lowchoice

  }
  var uppercase = confirm("add Uppercase?")
  if(lowchoice){
    Cha += uppercase

  }
  var spcharChoice = confirm("add special")
  if(spcharChoice){
    Cha += spcharChoice
  }
  var NumChoice = confirm("add number")
  if(NumChoice)
  Cha += NumChoice
for(var i = 0; i < length; i++){
  var random= Math.floor(Math.random()*Cha.length);
  password += Cha.charAt(random);
  writePassword();
  return ;
}
function writePassword() {
  var password = PassGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;

}
// console.log(password);

}
generateBtn.addEventListener("click", PassGen);
