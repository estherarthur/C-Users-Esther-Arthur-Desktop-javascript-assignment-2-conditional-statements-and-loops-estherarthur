[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/4BSkc1sm)
# JavaScript Conditional Statements and Loops

## 📅 Due Date

Click the icon above to view the assignment due date.

## 🎯 Objectives

The goal of this assignment is to demonstrate your understanding of basic JavaScript concepts such as conditional statements and loops.

## 👩‍💻 Getting Started

To get started with this assignment, you will need to clone this repository to your local machine and open the folder using VS Code:

```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
code .
```

## ✅ Tasks

Please **_do not edit any other file_** except those specified here.
The assignment tasks are as follows:

#### **1. FizzBuzz**

-   In the `fizzBuzz.js` file, write a JavaScript function that prints all the numbers from 1 to 100, with the following exceptions:

    -   For numbers divisible by 3 (and not 5), print "Fizz" instead of the number
    -   For numbers divisible by 5 (and not 3), print "Buzz" instead.
    -   For numbers that are divisible by both 3 and 5 "FizzBuzz".

-   The name of your function must be `fizzBuzz`.
-   Use `console.log()` to print the output.
-   Each number should be printed on a new line.
-   The function should have no arguments.
-   The function should `return` nothing.
-   **_Hint:_** Look up the [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).

#### **2. Looping a triangle**

-   In the `printTriangle.js` file, write a JavaScript functions that prints a right triangle of height `n`.
-   The name of your function must be `printTriangle`.
-   Use `console.log()` to print each line of the triangle on a new line.
-   Each line of the triangle consists of a string of `*` characters.
-   The function must take 1 argument corresponding to the height of the triangle: `n`.
-   The function must `return` nothing.
-   Here is an example of the expected output when `printTriangle(5)` is called:

```bash
*
**
***
****
*****
```

-   **_Hint:_** You can build the string by starting with an empty one (`""`) and repeatedly adding characters.
-   **_Hint:_** You can work on each row by making a loop that builds a string for that row. Then, use `console.log()` to print the row.

#### **3. Chessboard**

-   In the `chessboard.js` file, write a JavaScript functions that creates a string that represents a `m`x`n` grid, using newline characters to separate lines.
-   Once the string is created, the function then prints it to the console.
-   At each position of the grid there is either a space or a `#` character.
-   The characters should form a chessboard.
-   The name of your first function must be `chessboard`.
-   The functions must take two arguments corresponding to the size of the grid: `m` and `n`.
    -   `m` is the number of rows
    -   `n` is the number of columns
-   The function must `return` nothing.
-   Here is an example of the expected output when `chessboard(8, 6)` is called:

```bash
# # #
 # # #
# # #
 # # #
# # #
 # # #
# # #
 # # #
```

-   **_Hint:_** You can build the string by starting with an empty one (`""`) and repeatedly adding characters. A newline character is written `\n`.
-   **_Hint:_** You can work on each row by making a loop that builds a string for that row. Then, you can concatenate the rows together.

#### **4. Caesar Cipher**

-   In cryptography, a [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a shift of `3`, `A` would be replaced by `D`, `B` would become `E`, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
-   In the `caesarCipher.js` file, write a JavaScript functions that takes a string and an integer as arguments and prints a string with the letters shifted by the integer, preserving the case of each letter.
-   The name of your function must be `caesarCipher`.
-   Use `console.log()` to print the output.
-   The function must take 2 arguments:
    -   `str` is the string to be encrypted
    -   `shift` is the number of characters to shift
-   The function must `return` nothing.
-   Here is an example of the expected output when `caesarCipher("Hello, World!", 5)` is called:

```bash
Mjqqt, Btwqi!
```

-   **_Hint:_** Look up the [ASCII table](https://en.wikipedia.org/wiki/ASCII#Printable_characters) to get the decimal value of each character in the string.
-   **_Hint:_** You can use the [charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) method to get the ASCII value of a character. You can then use the [fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) method to convert the ASCII value back to a character.

### 🧪 Testing your code (Optional)

**_Note: You will need to have [Node](https://nodejs.org/en/download) installed on your PC for this to work_**

You can try to test your code before submitting by following the steps outlined below:

-   Run this command in your terminal to install the relevant packages

```bash
npm install
```

-   Run your tests on a specific file

```bash
./tests.sh fizzBuzz.js
```

-   Remember to type in the file name with the `.js` extension.

## ✍ Submitting Your Assignment

To submit your assignment, you will need to commit and push your changes to the original repository. The commit should include your changes and any additional files or documentation that you think are necessary.

## ☕ Resources

If you need help with any of the concepts covered in this assignment, here are some resources that you might find useful:

-   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [W3Schools](https://www.w3schools.com/js/)
-   [JavaScript.info](https://javascript.info/)

**_🍀Good luck!_**
