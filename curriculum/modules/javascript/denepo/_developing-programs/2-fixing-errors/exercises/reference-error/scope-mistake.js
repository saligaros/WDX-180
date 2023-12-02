// #todo

'use strict';

/*
  environment:chrome

  name:referenceError
  message: isValidUserName is not defined

  callstack:
    at <anonymous>:29:57
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: execution

  the mistake: isValidUserName must be defined outside the if

  the fix(es): defining isValidUserName as a boolean variable before the if 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true;
} else {
  const isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName); //error
