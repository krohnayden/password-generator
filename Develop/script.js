var numbersString = "1234456789";
var specialCharactersString = "!@#$%^&*()_+-=>~";
var lowercaseLettersString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
const value = document.querySelector("#value");
const input = document.querySelector("#passwordLength");

var checkboxes = document.querySelectorAll("input");
let enabledSettings = []
checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('change', function(){
    Array.from(checkboxes)
    .filter(i => i.checked)
    .map(i => i.value)

  console.log(enabledSettings)
  })
})

value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});


// Get references to the #generate element
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var numbersEl = document.getElementById("numbers");
  var includeNumbers = numbersEl.checked;

  var specialCharactersEl = document.getElementById("specialCharacters");
  var includeSpecialCharacters = specialCharactersEl.checked;

  var lowercaseLettersEl = document.getElementById("lowercaseLetters");
  var includelowercaseLetters = lowercaseLettersEl.checked;

  var uppercaseLettersEL = document.getElementById("uppercaseLetters");
  var includeuppercaseLetter = uppercaseLettersEL.checked;

  var passwordLengthEl = document.getElementById("passwordLength");
  
  var passValue = passwordLengthEl.value;
  let pass = '';
  let str = '';
  var passwordString = "";
  
  if (includeNumbers) {
    passwordString.concat(numbersString)
  }
  if (includeSpecialCharacters) {
    passwordString.concat(specialCharactersString)
  }
  if (includelowercaseLetters) {
    passwordString.concat(lowercaseLettersString)
  }
  if (includeuppercaseLetter) {
    passwordString.concat(uppercaseLettersString)
  }

  for (let i = 1; i < passValue; i++) {
      if (includeNumbers && includeSpecialCharacters && includelowercaseLetters && includeuppercaseLetter) {
        passwordString.concat(numbersString + specialCharactersString + lowercaseLettersString + uppercaseLettersString)
        console.log(passwordString);
  } else (includeNumbers && includeSpecialCharacters && includelowercaseLetters &&! includeuppercaseLetter)
  }

  for (let i = 1; i <= passValue; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}
