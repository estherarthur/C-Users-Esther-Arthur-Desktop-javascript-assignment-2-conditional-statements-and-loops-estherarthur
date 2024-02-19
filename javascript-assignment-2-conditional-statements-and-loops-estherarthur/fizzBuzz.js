/**
 * Write a JavaScript function that print all the numbers from 1 to 100,
 * with the following exceptions:
 * - For numbers divisible by 3 (and not 5), print "Fizz" instead of the number
 * - For numbers divisible by 5 (and not 3), print "Buzz" instead.
 * - For numbers that are divisible by both 3 and 5 "FizzBuzz".
 * The name of your function must be fizzBuzz.
 * Use console.log() to print the output.
 * Each number should be printed on a new line.
 * The function should have no arguments.
 * The function should return nothing.
 */

// Write your code here

// End of your code

// Do not modify code below this line
// --------------------------------

// print for numbers from 1 to 100

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
