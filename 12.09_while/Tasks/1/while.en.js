// 1 Create a program that prints the integers (whole numbers) from 1 to 100.

let number = 1;
while (number <= 100) {
  console.log(number);
  number++;
}

// 2 Create a program that prints the integers (whole numbers) from 100 to 1.

let number = 100;
while (number >= 1) {
  console.log(number);
  number--;
}

// 3 Create a program that prints all even numbers between 2 and 100.

let number = 1;
while (number <= 100) {
  if (number % 2 == 0) { console.log(number) }
  number++
}

// 4 Create a program that prints all whole numbers from 1 to the number the user enters.

let number = 1;
let number2 = +prompt(`Iveskite skaiciu`);
while (number <= number2) {
  console.log(number);
  number++;
}

// 5 Create a program that asks the user for the first number and the last number and then prints all numbers between those two.  

let number = +prompt(`Iveskite pirma skaiciu`);
let number2 = +prompt(`Iveskite antra skaiciu`);
while (number <= number2) {
  console.log(number);
  number++;
}

// 6 Create a program that calculates the sum 1+2+3+…+n where n is a number entered by the user.

let num = +prompt(`Enter number`);
let start = 1;
let sum = 0;
while (start <= num) {
  sum += start;
  start++;
}

console.log(sum);

// 7 Similar to the previous exercise, except that the program should ask for both the lower and upper bound. You can assume that the users first gives the smaller number and then the greater number.

let start = +prompt(`Enter first number`);
let num = +prompt(`Enter last number`);
let sum = 0;
if (start > num) {
  console.log(`Neteisinga salyga`);
} else {
  while (start <= num) {
    sum += start;
    start++;
  }
  console.log(sum);
}

// 8 Create a program that reads numbers from the user and prints their sum. The program should stop asking for numbers when user enters the number 0.

let sum = 0;
while (true) {
  let number = +prompt(`Enter a number`);
  if (number == 0 || !number) break;
  sum += number;
  console.log(`Enteredd: ${number} Sum now: ${sum}`);
}

console.log(`Sum in the end: ${sum}`);

// 9 Create a program that calculates the sum of 20+21+22+...+2n, where n is a number entered by the user.  The notation 2i means raising the number 2 to the power of i, for example 24 = 2*2*2*2 = 16. In Java  we cannot write abdirectly, but instead we can calculate the power with the command Math.pow(number, power). Note that the command returns a number of double type (i.e. floating point number). A double can be converted into the int type (i.e. whole number) as follows: int result = (int)Math.pow(2, 3). This assigns the value of (2*2*2) to variable result.

let start = 0;
let raise = +prompt(`Enter number`);
let sum = 0;
let numberToRaise = +prompt(`Enter number to rise`)
while (start <= raise) {
  sum += Math.pow(numberToRaise, start);
  start++;
}

console.log(sum);

// 10 Create a program that calculates the factorial of the number n. The factorial n! is calculated using the  formula 1*2*3*...*n. For example 4! = 1*2*3*4 = 24. Additionally, it is defined that 0! = 1.

let start = 1;
let num = +prompt(`Enter number`);
let fact = 1;
while (start <= num) {
  fact *= start;
  start++;
}

console.log(fact);

// 11 In this exercise we create a program that asks the user for a password. If the password is right, a secret  message is shown to the user.

let pswd;
while (true) {
  pswd = prompt(`Enter password!`);
  if (pswd == `carrot`) {
    alert(`Right!`);
    break;
  } alert(`Wrong! Try again.`);
}
console.log(`The secret is: jryy qbar!`);

// 12.1 Create a program that asks the user to input numbers (integers). The program prints "Type numbers”  until the user types the number -1. When the user types the number -1, the program prints "Thank you  and see you later!" and ends.
// 12.2 Develop your number reading program by adding the following feature: the program should print the sum of the numbers entered by the user (without the number -1).
// 12.3 Develop your number reading and summing program by adding the following feature: the program should print how many numbers the user typed (without the number -1).
// 12.4 Develop your number reading, summing and counting program by adding the following feature: the program should print the average of the numbers the user typed (without the number -1).
// 12.5 Develop your program by adding the following feature: the program should print the number of even and odd numbers that the user typed (without the number -1).

let i;
let sum = 0;
let count = 0;
let avg =;
let even = 0;
let odd = 0;

while (true) {
  i = +prompt(`Type numbers:`);
  if (i == -1) {
    console.log(`Thank you and see you later!`);
    break;
  }
  sum += i;
  count++;
  avg = sum / count
  if (i % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(`The sum is ${sum}`);
console.log(`How many numbers: ${count}`);
console.log(`Average: ${(avg).toFixed(2)}`);
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);