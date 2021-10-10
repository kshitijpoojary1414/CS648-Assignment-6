/*eslint-env browser*/

var coinFlip;
var i;
for (i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random());
    window.console.log(coinFlip)
    if (!coinFlip) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}