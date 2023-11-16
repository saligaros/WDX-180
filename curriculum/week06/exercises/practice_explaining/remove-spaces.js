'use strict';

/* Remove Spaces
removes spacing between words from a given text

  Data In:
  any given text

  Data Out:
  the given text and then the given text without spaces between words

  Test Cases:
  'Java Script' -> 'before: Java Script after: JavaScript'
  'zavara katra nemia' -> 'before: zavara katra nemia after: zavarakatranemia'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
