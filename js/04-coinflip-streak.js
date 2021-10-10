/*eslint-env browser*/

var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (!coinFlip) {
        window.console.log("Heads<br>");
    } else {
        window.console.log("Tails");
    }
} while (!coinFlip);