/**
 * Write a JavaScript functions that creates a string
 * that represents a mxn grid,
 * using newline characters to separate lines.
 * Once the string is created,
 * the function then prints it to the console.
 * At each position of the grid there is
 * either a space or a # character.
 * The characters should form a chessboard.
 * The name of your first function must be chessboard.
 * The functions must take two arguments
 * corresponding to the size of the grid: m and n.
 * m is the number of rows
 * n is the number of columns
 * The function must return nothing.
 */

// Write your code here

// End of your code

// Do not modify code below this line
// --------------------------------

function chessboard(m, n) {
  // Check if m and n are positive integers
  if (!Number.isInteger(m) || !Number.isInteger(n) || m <= 0 || n <= 0) {
    console.log(
      "Invalid grid size. Please provide positive integers for both rows and columns."
    );
    return;
  }

  // Loop through each row
  for (let i = 0; i < m; i++) {
    let row = "";

    // Loop through each column
    for (let j = 0; j < n; j++) {
      // Alternate between '#' and ' ' based on the sum of row and column indices
      row += (i + j) % 2 === 0 ? "#" : " ";
    }

    // Print the current row
    console.log(row);
  }
}

chessboard(5, 8);
