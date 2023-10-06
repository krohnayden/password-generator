var numbersString = "1234456789";
var specialCharactersString = "!@#$%^&*()_+-=>~";
var lowercaseLettersString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
const value = document.querySelector("#value");
const input = document.querySelector("#passwordLength");
const passText = document.querySelector("#password");

var checkboxes = document.querySelectorAll("input");
let enabledSettings = []
checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('change', function(){
    Array.from(checkboxes)
    .filter(i => i.checked)
    .map(i => i.value)
  })
})

value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

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

  var passwordString = "";
  
  if (includeNumbers) {
    passwordString = passwordString + numbersString
  }
  if (includeSpecialCharacters) {
    passwordString += specialCharactersString
  }
  if (includelowercaseLetters) {
    passwordString += lowercaseLettersString
  }
  if (includeuppercaseLetter) {
    passwordString += uppercaseLettersString
  }

  for (let i = 0; i < passValue; i++) {
    let char = Math.floor(Math.random()
    * passwordString.length + 1);

    pass += passwordString.charAt(char)
  }
  console.log(pass);

  passText.value = pass;
}
