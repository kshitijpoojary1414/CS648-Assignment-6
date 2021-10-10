/*eslint-env browser*/

var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails");

if (coinFlip) { //HEADS
    if (choice === "heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    } else if (choice == "tails") {
        window.alert("The flip was heads and you chose tails...you lose!");
    } else {
        window.alert("Please choose either heads or tails");
    }
} else { //TAILS
    if (choice === "heads") {
        window.alert("The flip was tails and you chose heads...you lose!");
    } else if (choice == "tails") {
        window.alert("The flip was heads and you chose tails...you lose!");
    } else {
        window.alert("Please choose either heads or tails");
    }
}