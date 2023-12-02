// #todo

'use strict';

/* mirror

  a user can enter text and have it reflected my a mirror
  - given the user cancels, they are prompted again
  - given the user inputs anything, their input is reflected

  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'

  --- experiments ---

  1. FAILING:a
      EXPECT:a|a
      ACTUAL:|a|

    TRY:switching mirrored = mirrored + character + mirrored to mirrored = character + mirrored + character
    PREDICT: a|a
    IT DID: corrected the output 
    EXPLAIN: we needed the mirror in the center and the text in each side

  --- lessons learned ---
    we don't have to understand 100% the logic of a code in order to fix it


*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  mirrored = mirrored + character + mirrored;
}

alert(mirrored);
