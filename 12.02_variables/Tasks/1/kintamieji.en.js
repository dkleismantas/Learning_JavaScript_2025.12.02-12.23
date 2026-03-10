// 1 Create a program that prints your name to the screen.

console.log("Dainius Kleismantas");

// 2 Create a program that prints out the following:

let a = "Hello world!";
let b = "(And all the people of the world)";

console.log(a + "\n" + b);

// 3 Create a program that prints the following:

console.log("    *    ");
console.log("   ***   ");
console.log("  *****  ");
console.log(" ******* ");
console.log("*********");
console.log("    *    ");

// 5 Create a program that counts how many seconds there are in a year. You can assume that a year consists of 365 days (therefore the year is not a leap year).

const a = 365;
const b = 24;
const c = 60;
const d = 60;
const e = a * b * c * d;

console.log("There are " + e + "seconds in a year.");

// 6 Create a program to calculate the sum of two numbers. At the beginning of the program two variables are introduced and those variables hold the numbers to be summed. Feel free to use other variables if you need to.

let a = 10;
let b = 15;
let sum = a + b;

console.log(a + " + " + b + " = " + sum);

// 7 Create a program similar to the previous one except that it multiplies the two numbers instead of adding them.

let a = 10;
let b = 15;
let c = a * b;

console.log(a + " * " + b + " = " + c);

// 8 Create a program that asks the user for two integers and then prints their sum.

let a = +prompt("Type a number");
let b = +prompt("Type another number");
let sum = a + b;

console.log("Sum of the numbers: " + sum);

// 9 Create a program that asks the user for two integers and prints their quotient.

let a = +prompt("Type a number");
let b = +prompt("Type another number");
let c = a / b;

console.log("Division: " + a + " / " + b + " = " + c);

// 10 The circumference of a circle is calculated using the formula 2 * pi * radius. Create a program that asks the user for the radius and then calculates the circumference using the given radius. Java already contains the value of pi in the Math.PI variable, which you can use in your calculation.

let r = +prompt("Enter the radius");
let c = 2 * Math.PI * r;

console.log("Circumference of the circle: " + c);

// 11 Create a program that asks the user for two integers and then prints the larger of the two.

let a = +prompt("Type a number:");
let b = +prompt("Type another number:");
let c = Math.max(a, b);

console.log("The bigger number of the two numbers given was: " + c);

// 12 Create a program that asks for the names and ages of two users. After that the program prints the sum of their ages.

let name = prompt("Type your name:");
let age = +prompt("Type your age:");
let name2 = prompt("Type your name:");
let age2 = +prompt("Type your age:");
let agesum = age + age2;

console.log(name + " and " + name2 + " are " + agesum + " years old in total.");
