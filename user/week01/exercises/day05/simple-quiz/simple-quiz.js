let helper = 0;

const choice = function (answer){
    
       if (answer === "A") {
    return "Correct! Not only did he create JS, the prototype of the language was ready in 10 days!"
    helper = 1;
} else if (answer === "B") {
    return "Nope. He lead the development of the Windows Operating System."
    helper = 1;
} else if (answer === "C") {
    return "Nope. He just came up with the idea for a social network idea."
    helper =1;

} else {
    return "Wrong Input"
    helper = 0;
} 
    

}
do {
let answer = prompt ("Question: Who created JavaScript?\nA) Breiman Eich\nB) Bill Gates\nC) Mark Zukerberg\nPlease select the correct option (A, B, or C)");
alert(choice(answer)) 
} while (helper = 0);