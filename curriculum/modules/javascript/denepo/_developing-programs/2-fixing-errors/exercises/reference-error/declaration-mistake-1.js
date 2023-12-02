// #todo

'use strict';

/*
  environment: chrome

  name: ReferenceError
  message: welf is not defined

  callstack: 
    at <anonymous>:20:6
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49) 

  life cycle: execution

  the mistake: welf is not defined

  the fix(es): add "let" before welf so it is defined
*/

/* mistake */ welf = 'ingrad'; //error

console.log(welf);
