function findMaxNumber(num1,num2){
  if (num1>num2) {
    return "The Max Number is " + num1;
  } else if (num1<num2) {
    return "The Max Number is " + num2
  } else if (num1=num2) {
      return "Number 1 and Number 2 are equal "
  } else {
    return "Non numbers given, please reload the page "
  }
}   // YOUR CODE HERE >>    
let num1 = prompt ("please provide a number");
let num2 = prompt ("please provide a second number");
console.log(findMaxNumber(num1, num2))
  // << YOUR CODE HERE
  

  // RUNNING & TESTING OUR findMaxNumber() FUNCTION:
  // Don't worry about the code below. It's just there to test your code above.
  const checkMax1 = findMaxNumber(10, 5);
  console.log('Max Number 1:',checkMax1);

  const checkMax2 = findMaxNumber(10, 15);
  console.log('Max Number 2:',checkMax2);

  const checkMax3 = findMaxNumber(100, 100);
  console.log('Max Number 3:',checkMax3);

  console.assert( checkMax1 === 10, "Ops, was expecting 10, got ", checkMax1);
  console.assert( checkMax2 === 15, "Ops, was expecting 15, got ", checkMax2);
  console.assert( checkMax3 === 100, "Ops, was expecting 100, got ", checkMax3);

  try {
    if ( global ){ global.findMaxNumber = findMaxNumber; }
  } catch(e){}