// 1 Parašykite funkciją, kuri generuoja skaičių iš intervalo [0; 1) ir grąžiną jį suapvalintą iki šimtųjų (du skaičiai po kablelio).
// Kreipinys į funkciją: randomNumber();
// Parašykite programą, kuri paklaustų kiek tokių skaičių reikia sugeneruoti ir atspausdintų rezultatą.

let a = +prompt(`Kiek kartu kartoti?`);

function randomNumber() {
  let a = Math.random().toFixed(2);
  return a;
}

for (let i = 1; i <= a; i++) {
  console.log(randomNumber());
}

// antras variantas

function randomNumber2() {
  let b = +prompt(`Kiek kartu kartoti?`);
  let a;
  let c = ``;
  for (let i = 1; i <= b; i++) {
    a = Math.random().toFixed(2);
    c += a + `, `;
  }
  return c;
}
console.log(randomNumber2());

// trecias variantas

function randomNumber3() {
  let n = +prompt(`Kiek kartu kartoti?`);
  let a;
  for (let i = 1; i <= n; i++) {
    a = Math.random().toFixed(2);
    console.log(a);
  }
}

randomNumber3();

// 2 Parašykite funkciją, kuri generuoja skaičių iš intervalo [0; 1) ir grąžiną jį suapvalintą iki Jūsų nurodyto skyriaus n.
// Kreipinys į funkciją: randomNumber(n);
// Parašykite programą, kuri paklaustų kiek tokių skaičių reikia sugeneruoti ir iki kokio skyriaus suapvalinti, atspausdintų rezultatą.

let n = +prompt(`Kiek palikto po kablelio?`);

function randomNumber(n) {
  let a = ``;
  let b = +prompt(`Kiek kartu kartoti?`);
  let c;
  for (let i = 1; i <= b; i++) {
    c = Math.random().toFixed(n);
    if (i < b) {
      a += `${c}, `;
    } else {
      a += `${c}`;
    }
  }
  return a;
}
console.log(randomNumber(n));

// 3 Parašykite funkciją, kuri generuoja ir grąžina sveiką skaičių iš intervalo [1; 10].
// Kreipinys į funkciją: randomNumberFrom1to10();
// Parašykite programą, kuri paklaustų kiek tokių skaičių reikia sugeneruoti ir atspausdintų rezultatą.

let a = +prompt(`Kiek kartu kartoti?`);

function randomNumberFrom1to10() {
  let a = Math.trunc(Math.random() * 10);
  return a;
}

for (let i = 1; i <= a; i++) {
  console.log(randomNumberFrom1to10());
}

// 4 Parašykite funkciją, kuri generuoja ir grąžina sveiką skaičių iš Jūsų nurodyto intervalo [a; b].
// Kreipinys į funkciją: randomNumber(a, b);
// Parašykite programą, kuri paklaustų kiek ir iš kokio intervalo tokių skaičių reikia sugeneruoti, atspausdintų rezultatą.

let a = +prompt(``);
let b = +prompt(``);
let c = +prompt(``);

function randomNumber(a, b, c) {
  let n;
  let d = ``;
  for (let i = 1; i <= c; i++) {
    n = Math.trunc(Math.random() * (b - a + 1) + a);
    d += `${n}\n`;
  }
  return d;
}

console.log(randomNumber(a, b, c));

// 5 Parašykite funkciją, kuri patikrina ar skaičius a yra lyginis. Jeigu skaičius lyginis - grąžina reikšmę true.
// Kreipinys į funkciją: isEven(a);

let number = +prompt(`Enter number`)

function isEven(a) {
  if (a % 2 == 0) {
    a = true;
  } else {
    a = false;
  }
  return a;
}

console.log(isEven(number));

// Parašykite programą, kuri atspausdintų visus lyginius skaičius iš Jūsų nurodyto intervalo.

let a = +prompt(`Intervalo pradzia`);
let b = +prompt(`Intervalo pabaiga`);

function isEvenInt(a, b) {
  let n = ``;
  for (let i = a; i <= b; i++) {
    if (isEven(i) === true) {
      n += i + ` `;
    }
  }
  return n;
}

console.log(isEvenInt(a, b));