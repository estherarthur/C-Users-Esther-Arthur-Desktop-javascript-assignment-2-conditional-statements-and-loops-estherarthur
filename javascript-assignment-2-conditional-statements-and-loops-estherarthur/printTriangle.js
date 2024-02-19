/**
 * Write a JavaScript functions that prints a right triangle of height n.
 * The name of your function must be printTriangle.
 * Use console.log() to print each line of
 * the triangle on a new line.
 * Each line of the triangle consists of
 * a string of * characters.
 * The function must take 1 argument corresponding
 * to the height of the triangle: n.
 * The function should return nothing.
 */

// Write your code here

// End of your code

// Do not modify code below this line.
// --------------------------------

function printTriangle(n) {
  // Check if n is a positive integer
  if (!Number.isInteger(n) || n <= 0) {
    console.log("Invalid height value. Please provide a positive integer.");
    return;
  }

  // Loop through each row to print the triangle
  for (let i = 1; i <= n; i++) {
    // Create a string of '*' characters for the current row
    const row = "*".repeat(i);

    // Print the current row
    console.log(row);
  }
}

// Example usage:
printTriangle(5);
