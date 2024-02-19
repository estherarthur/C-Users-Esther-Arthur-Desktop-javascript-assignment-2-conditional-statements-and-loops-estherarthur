#!/bin/bash

case $1 in
    "fizzBuzz.js")
        ./__tests__/__automate__.sh $1 "npm test -- fizzBuzz.test.js" fizzBuzz
    ;;
    "printTriangle.js")
        ./__tests__/__automate__.sh $1 "npm test -- printTriangle.test.js" printTriangle
    ;;
    "chessboard.js")
        ./__tests__/__automate__.sh $1 "npm test -- chessboard.test.js" chessboard
    ;;
    "caesarCipher.js")
        ./__tests__/__automate__.sh $1 "npm test -- caesarCipher.test.js" caesarCipher
    ;;
    *)
        echo "Usage: $0 file-name"
        exit 1
esac


# Path: tests.sh