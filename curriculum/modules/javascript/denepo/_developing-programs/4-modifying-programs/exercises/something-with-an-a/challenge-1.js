// #todo

'use strict';

/*
  modify the program so it searches for only an uppercase "A"

  you will need to change one condition
  the user's instructions
  and strings used to generate a reaction
*/

const userInput = prompt('please enter something with an "A" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.includes('A')) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "A" in it';
}

alert(reaction);
