/**
 * Terry Dietrick
 * PWA 1 - Head First JS Ch 1 Exercises
 * 2/4/15.
 */

var word = "bottles";
var bottleCount = 99;
while (bottleCount > 0) {
    console.log(bottleCount + " " + word + " of beer on the wall");
    console.log(bottleCount + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    bottleCount = bottleCount - 1;
    if (bottleCount > 0) {
        console.log(bottleCount + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
}