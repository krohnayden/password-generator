// Assignment code here
var numbers =[0,1,2,3,4,5,6,7,8,9];
var symbols =["#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","_",];
var characterCodes = Array.from(Array(26)).map( (_, i)=> i+97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let pass = '';
  let str = numbers + symbols +lowercaseLetters +uppercaseLetters;
  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}

function passwordOptions() {
  if (numbers && symbols && lowercaseLetters && uppercaseLetters) {
    console.log(pass)
  } if (numbers && symbols && lowercaseLetters) {

  }
  }
console.log(writePassword());













// Write password to the #password input
// function writePassword() {
//   let pass = '';
//   let str = options;

//   for (let i =1; i <= 8; i++) {
//     let char = Math.floor(Math.random() * str.length +1);
//   }

//   return pass;
//   // var password = generatePassword();
//   // var passwordText = document.querySelector("#password");
//   // var index = Math.floor(Math.random() * options.length);
//   // options.value = password;
// }

// console.log(writePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
