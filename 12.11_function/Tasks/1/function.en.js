// 1 Write a function (return) to find the smallest number among three numbers.

function getMin(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < c && b < a) {
    return b;
  } else {
    return c;
  }
}

console.log(getMin(23, 2, 51));

// 2 Write a function (return) to compute the average of three numbers.

function getAvg(a, b, c) {
  return (a + b + c) / 3;
}

console.log(getAvg(25, 45, 65).toFixed(2));

// 3 Write a function (return) that takes an integer minutes and converts it to seconds.

function getSeconds(a) {
  return a * 60;
}

console.log(getSeconds(5));

// 4 Write a function (return) to compute the sum of the digits in an integer.

function getDigitsCount() {
  let a = +prompt(`Iveskite numeri`);
  let n;
  let s = 0;
  while (a > 0) {
    n = Math.trunc(a % 10);
    s += n;
    a = Math.trunc(a / 10);
  }
  return s;
}

console.log(getDigitsCount());

// 5 Write a function (return) to check whether a year entered by the user is a leap year or not.

function isitALeapY() {
  let a = +prompt(`Iveskite metus`);
  if (a % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isitALeapY());

// 6 Write a function (return) to calculate the area of a triangle.

function trikampioPerimetras(a, b, c) {
  let p = a + b + c;
  return p;
}

function trikampioPlotas(a, b, c) {
  let p = trikampioPerimetras(a, b, c) / 2;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return s;
}

console.log(trikampioPlotas(10, 15, 20).toFixed(2));

// 7 Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(text) {
  return `something ${text}`;
}

console.log(giveMeSomething(`Bob Jane`));

// 8 You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function pointsCounter(a, b) {
  let c = a * 2;
  let d = b * 3;
  return c + d;
}

console.log(pointsCounter(3, 5));

// 9 Write a function that returns true if and only if x is equal to 7.

function isSeven(a) {
  switch (a) {
    case 7:
      return true;
    default:
      return false;
  }
}

console.log(isSeven(9));

// 10 Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function getLength(a, b) {
  if (a.toString().length === b.toString().length) {
    return true;
  } else {
    return false;
  }
}

console.log(getLength(1990, `Labas`));

// 11 Create a function that returns true if a string is empty and false otherwise.

function isEmpty(a) {
    return a === ``
}

console.log(isEmpty(``));


// 12 Complete the function sayLouder such that it makes the text in uppercase.

function sayLouder(a) {
  return a.toUpperCase();
}

console.log(sayLouder(`laba diena`));

// Create a function printText() that prints the following string of characters: "In the beginning  there were the swamp, the hoe and JavaScript."

function printText() {
  return `In the beginning there were the swamp, the hoe and JavaScript.`;
}

console.log(printText());

// 1 Develop the program by adding the following feature: the main program should ask the user how many times the text should be printed (meaning how many times the function is called).

function printText() {
  console.log(`In the beginning there were the swamp, the hoe and JavaScript.`);
}

let a = +prompt(`Sk`);

for (let i = 1; i <= a; i++) {
  (printText());
}

// 13.1 Create a function printStars() that prints the given amount of stars.

let stars = +prompt(`Iveskite zvaigzdziu kieki`)

function printStars(s) {
  let a = ``;
  let b = `*`;
  for (let i = 1; i <= s; i++) {
    a += b;
  }
  return a;
}

console.log(printStars(stars));

// 13.2 Create a function printSquare(sideSize) that prints a square using our previous function printStars(). The function call printSquare(4), for example, prints the following:

function printSquare(sideSize) {
  let a = ``;
  for (let i = 1; i <= sideSize; i++) {
    a += `${printStars(sideSize)}\n`;
  }
  return a;
}

console.log(printSquare(stars));

// 13.3 Create a function printRectangle(width, height) that prints a rectangle using  the printStars() function. The call printRectangle(17,3), for example, has the following output:

let height = +prompt(`Iveskite auksti`);

function printRectangle(width, height) {
  let a = ``;
  for (let i = 1; i <= height; i++) {
    a += `${printStars(width)}\n`;
  }
  return a;
}

console.log(printRectangle(stars, height));

// 13.4 13. 4. Create the function printTriangle(size) that prints a triangle using the printStars() function. The function call printTriangle(4), for example, has the following output:

function printTriangle(size) {
  let a = ``;
  for (let i = 1; i <= size; i++) {
    a += printStars(i) + `\n`;
  }
  return a;
}

console.log(printTriangle(stars));