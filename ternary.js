//4. Write a program to determine the greater of two numbers (between two numbers).
//  Use both the if/else statement and tenary operator.

// using if and else statement !

let num1 = 10;
let num2 = 7;  
let name = "Clement";
let lastName = "Raymond";
let fullName = name + " " + lastName;


if (num1 > num2) {
    console.log(fullName + " says " + num1 + " is greater than " + num2 + ".");
} else if (num2 > num1) {
    console.log(fullName + " says " + num2 + " is greater than " + num1 + ".");
} else {
    console.log(fullName + " says both numbers are equal.");
}

// Using Ternary Operator
// ternary operator (? :) to compare two numbers (num1 and num2) and
//  print a message indicating which number is greater or if they are equal.

// using ternary operator

let result = (num1 > num2) ? 
    fullName + " says " + num1 + " is greater than " + num2 + "." :
    (num2 > num1) ? 
    fullName + " says " + num2 + " is greater than " + num1 + "." :
    fullName + " says both numbers are equal.";
console.log(result);
