// 14 Create a program that asks the user for a number and tells if the number is positive (i.e. greater than zero).

let a = +prompt("Type a number") > 0 ? "Positive" : "Is not positive";

console.log(a);

// 15 Create a program that asks for the user's age and tells whether the user has reached the age of majority (i.e. 18 years old or older).

let a =
  +prompt("How old are you?") >= 18
    ? "You have reached the age of majority!"
    : "You have not reached the age of majority yet!";

console.log(a);

// 16 Create a program that asks the user for a number and tells whether the number is even or odd.

let a = +prompt("Type a number:");
if (a % 2 === 0) {
  console.log(`Number ${a} is even.`);
} else {
  console.log(`Number ${a} is odd.`);
}

// 17 Create a program that asks the user for two numbers and prints the greater of those two. The program should also handle the case in which the two numbers are equal.

let a = +prompt("Type the first number:");
let b = +prompt("Type the second number:");
if (a > b) {
  console.log(`Greater number: ${a}`);
} else if (a < b) {
  console.log(`Greater number: ${b}`);
} else {
  console.log(`They are equal`);
}

// 18 Create a program that gives the course grade based on the following table.
// Points Grade
// 0–29 failed
// 30–34 1
// 35–39 2
// 40–44 3
// 45–49 4
// 50–60 5

let a = +prompt(`Type the points [0-60]:`);
if (a >= 0 && a < 30) {
  console.log(`failed`);
} else if (a >= 30 && a < 35) {
  console.log(`1`);
} else if (a >= 35 && a < 40) {
  console.log(`2`);
} else if (a >= 40 && a < 45) {
  console.log(`3`);
} else if (a >= 45 && a < 50) {
  console.log(`4`);
} else if (a >= 50 && a <= 60) {
  console.log(`5`);
} else {
  console.log(`Wrong number`);
}

// 19 Create a program that asks for the user's age and checks that it is reasonable (at least 0 and at most 120).

let a = +prompt(`How old are you?`);
if (a >= 0 && a <= 120) {
  console.log(`OK`);
} else {
  console.log(`Impossible!`);
}

// 20 Create a program that recognizes the following users:
// Username Password
// alex     mightyducks
// emily    cat
// The program should check for the username and password as follows:

let name = prompt(`Type your username:`);
let pass = prompt(`Type your password:`);
if (
  (name === "alex" && pass === "mightyducks") ||
  (name === "emily" && pass === "cat")
) {
  console.log(`You are now logged into the system!`);
} else {
  console.log(`Your username or password was invalid!`);
}

// ***21 A year is a leap year if it is divisible by 4. But if the year is divisible by 100, it is a leap year only when it is also divisible by 400.
// Create a program that checks whether the given year is a leap year.

let y = +prompt("Enter a year");
if ((y % 4 === 0 && y % 100 === 0 && y % 400 > 0) || y % 4 != 0) {
  console.log("The year is not a leap year.");
} else if (y % 4 === 0) {
  console.log("The year is a leap year.");
}
