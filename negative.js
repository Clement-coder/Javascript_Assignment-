// 1. Write a program that determines whether a given number is positive or negative.

let num = -0;
let name = "Clement";
let lastName = "Raymond";
let fullName = name + " " + lastName;

if (num > 0) {
    console.log(fullName + num + " is a positive number");
} else if (num < 0) {
    console.log(fullName + num +" is a negative number");
} else {
    console.log(fullName + num + " the number is zero");
}