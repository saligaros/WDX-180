'use strict';

/* Mirror
mirrors an input text

  Data In:
  any text

  Data Out:
  the text input, mirrored along with the initial text

  Test Cases:
  'my face is round' -> 'dnuor si ecaf ym | my face is round'
  'nipsonanomimatamimonanopsin' -> 'nisponanomimatamimonanospin | nipsonanomimatamimonanopsin'
*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
