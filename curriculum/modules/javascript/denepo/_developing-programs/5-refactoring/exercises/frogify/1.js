// #todo

'use strict';

/*
  refactor this program so it does not use `break` or `continue`
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

for (const character of toBeFrogged) {
  if (character === 'f') {
    frogged = frogged + 'frog';
  } else {
    if (character === 'F') {
      frogged = frogged + 'FROG';
    } else {
      frogged = frogged + character;
    }
  }
}

alert(frogged);
