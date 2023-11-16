'use strict';

/* Flip Five 
This program reverses a 5 character input

  Data In:
  any text 5 character long

  Data Out:
  the 5 character long input, reversed

  Test Cases:
  'asdfg' -> 'gfdsa'
  '00001' -> '10000'
  '32'    -> 'nope, try again'

*/

/* --- gather user input --- */


let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);