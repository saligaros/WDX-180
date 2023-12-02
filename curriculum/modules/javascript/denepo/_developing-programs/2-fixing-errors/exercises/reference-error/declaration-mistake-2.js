// #todo

'use strict';

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack:  
    at <anonymous>:24:19
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: execution error

  the mistake: isValidUserName is not initialized

  the fix(es):"let isValidUserName;" before first if 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true; //error
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
