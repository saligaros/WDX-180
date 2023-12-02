// #todo

'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  --- experiments ---

  1. FAILING:'hi'
      EXPECT:'you entered "hi"'
      ACTUAL: the loop continues

    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  2. FAILING: null 
     EXPECT: the loop continues
     ACTUAL: the programm stops with an error 
     
    TRY: switching both === to !==
    PREDICT: fix both errors
    IT DID: fixed the flow of the 'if' but the message is wrong
    EXPLAIN: now the if applies and then breaks if we enter a text, in other cases (canceling or inputting nothing) the while loops  
    TRY: adding 'message' in line 39
    ID DID: fixed the message
    EXPLAIN: we need to include the previously assigned message inside the new message assignment     

  --- lessons learned ---


*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null && input.length === 0) {
    message = input + '"';
    break;
  }
}

alert(message);
