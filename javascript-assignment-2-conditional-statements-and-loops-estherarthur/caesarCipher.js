/**
 * Write a JavaScript functions that takes
 * a string and an integer as arguments and
 * prints a string with the letters shifted by the integer,
 * preserving the case of each letter.
 * The name of your function must be carCiphesaer.
 * Use console.log() to print the output.
 * The function must take 2 arguments:
 * str is the string to be encrypted
 * shift is the number of characters to shift
 * The function must return nothing.
 */

// Write your code here

// End of your code

// Do not modify code below this line
// --------------------------------

function carCiphesaer(str, shift) {
  // Check if shift is a positive integer
  if (!Number.isInteger(shift) || shift < 0) {
    console.log("Invalid shift value. Please provide a positive integer.");
    return;
  }

  // Helper function to shift a single character
  function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);

    // Check if the character is a letter
    if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
      const isUpperCase = char === char.toUpperCase();
      const baseCharCode = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const shiftedCharCode =
        ((((charCode - baseCharCode + shift) % 26) + 26) % 26) + baseCharCode;

      return String.fromCharCode(shiftedCharCode);
    }

    return char;
  }

  // Apply the shift to each character in the string
  const encryptedStr = Array.from(str, (char) => shiftChar(char, shift)).join(
    ""
  );

  // Print the encrypted string
  console.log(encryptedStr);
}

carCiphesaer("Hello, World!", 3);
