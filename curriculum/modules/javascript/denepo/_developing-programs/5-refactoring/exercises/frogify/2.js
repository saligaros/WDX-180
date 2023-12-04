// #todo

'use strict';

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';
let counter = 0;

while (counter < toBeFrogged.length) {
  const character = toBeFrogged[counter];
  if (character === 'f') {
    frogged = frogged + 'frog';
  } else if (character === 'F') {
    frogged = frogged + 'FROG';
  } else {
  frogged = frogged + character;
  }

  counter++;
}

alert(frogged);
