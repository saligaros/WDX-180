'use strict';

/* Reverse
reverses a text

  Data In:
  any given text

  Data Out:
  the given text along with the reversed one


  Test Cases:
  'my face is round' -> 'my face is round -> dnuor si ecaf ym'
  'anna mana' -> 'anna mana -> anam anna'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
