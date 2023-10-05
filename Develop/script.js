const value = document.querySelector("#value");
const input = document.querySelector("#passwordLength");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let pass = '';
  let str = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQQRSTUVWXYZ' + '!@#$%^&*_+=/?<>';
  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}

console.log(writePassword());