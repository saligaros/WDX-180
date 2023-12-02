// #todo

'use strict';

/*
  modify this program so it uses .toLowerCase to check for consonants

  you can do this by changing the name of one variable, one string, and a conditional check
    and of course the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const consonants = 'bcdfghjklmnpqrstvwxz';

let hasACons = false;
for (const char of characters) {
  if (consonants.includes(char.toLowerCase())) {
    hasACons = true;
    break;
  }
}

if (hasACons) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
