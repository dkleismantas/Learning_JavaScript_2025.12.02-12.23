// 1 Martynas labai mėgsta saldainius. Mamos slėptuvėje berniukas rado m saldainių. Pirmą dieną jis suvalgė 1 saldainį, antrąją – 2, trečiąją 3. Kiekvieną kitą dieną jis suvalgydavo vienu saldainiu daugiau negu prieš tai buvusią. Per kelias dienas d Martynas suvalgys visus saldainius? Paskutinei dienai gali likti ir mažiau.

let m = +prompt(`Kiek saldainiu rado Martynas?`);
let n = m;
let d = 0;

while (m > 0) {
  d++;
  m -= d;
}

console.log(`Kai m = ${n} tai d = ${d}`);

// 2 Šeima išsirengė į kelionę automobiliu. Jie pripildė kuro baką, kurio talpa t litrų ir nusprendė važiuoti tol, kol bake bus degalų. Lyginėmis kelionės dienomis automobilis suvartos n litrų degalų, o nelyginėmis - 2n litrų. Parašykite programą, kuri surastų, kiek dienų truks šeimos kelionė.

let t = +prompt(`Įveskite kuro bako talpą:`);
let n = +prompt(`Įveskite kuro sąnaudas:`);
let d = 0;

console.log(`Kuro bako talpa: ${t}`);
console.log(`Automobilio sanaudos: ${n}`);

while (t > 0) {
  d++;
  if (d % 2 == 0) {
    t -= n;
  } else {
    t -= 2 * n;
  }
}

console.log(`Keliauti bus galima ${d} dienų/(as)/(ą).`);

// 3 Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.

let m = +prompt(`Įveskite knygos skyrių skaičių:`);
let n = m;
let d = 0;
let avg;

console.log(`Įvestas knygos skyrių skaičius: ${m}`);

while (m > 0) {
  d++;
  avg = n / d
  m -= d;
}

console.log(`Tadas visą knygą perskaitys per ${d} dienas (-ų).`);
console.log(`Tadas vidutiniškai per dieną perskaitė ${(avg).toFixed(2)} skyrius(-ų).`);

// 4 Danutė dirba buhaltere, todėl jai kartais reikia atlikti aritmetinius skaičiavimus su dideliais skaičių kiekiais. Ji skundžiasi, kad sunku ir nepatogu daug kartų spaudinėti skaičiuotuvo klavišus, todėl ji paprašė Jūsų, kad parašytumėte programą, kurios pradžioje pakaktų įvesti aritmetinio veiksmo simbolį, ir būtų galima įvedinėti skaičius, su kuriais bus atliekama ta operacija, operacijos pabaiga užfiksuojama įvedus nulį.
// Pavyzdžiui, Danutė išsirenka sumos skaičiavimo operaciją, tada įvedinėja skaičius, juos reikia sumuoti tol, kol įves nulį, tada baigti skaičiavimą ir pateikti rezultatą.
// Reikia sukurti skaičiuotuvą tokiems veiksmams atlikti: suma - 1, atimtis - 2, daugyba - 3, *didžiausia reikšmė sraute - 4, *mažiausia reikšmė sraute - 5.
// Danutė įves veiksmą reiškiantį skaičių, nepamirškite jos informuoti įjungus programą, koks skaičius kokį veiksmą reikš.

let act = prompt(`Enter action!`);
let num;
console.log(`Entered action: ${act}`);
if (act == 1) {
  let sum = 0;
  while (true) {
    num = +prompt(`Enter number`);
    console.log(`Entered number: ${num}`);
    if (num == 0) {
      break;
    }
    sum += num;
  }
  console.log(`sum: ${sum}`);
} else if (act == 2) {
  let sub = +prompt(`Enter first number`);
  console.log(`Entered number: ${sub}`);
  while (true) {
    num = +prompt(`Enter number`);
    console.log(`Entered number: ${num}`);
    if (num == 0) {
      break;
    }
    sub -= num;
  }
  console.log(`sub: ${sub}`);
} else if (act == 3) {
  let mult = 1;
  while (true) {
    num = +prompt(`Enter number`);
    console.log(`Entered number: ${num}`);
    if (num == 0) {
      break;
    }
    mult *= num;
  }
  console.log(`mult: ${mult}`);
} else if (act == 4) {
  let max = +prompt(`Enter number`);
  console.log(`Entered number: ${max}`);
  while (true) {
    num = +prompt(`Enter number`);
    console.log(`Entered number: ${num}`);
    if (num == 0) {
      break;
    }
    if (num > max) {
      max = num;
    }
  }
  console.log(`max: ${max}`);
} else if (act == 5) {
  let min = +prompt(`Enter number`);
  console.log(`Entered number: ${min}`);
  while (true) {
    num = +prompt(`Enter number`);
    console.log(`Entered number: ${num}`);
    if (num == 0) {
      break;
    }
    if (num < min) {
      min = num;
    }
  }
  console.log(`min: ${min}`);
} else {
  alert(`Action forbidden`);
}

// 5 Matematikos mokytoja paprašė sukurti matematikos užduotį pirmos klasės mokiniams. Pirmokai mokosi sudėti du skaičius. Programa turėtų sugeneruoti du skaičius iš intervalo [0; 10] ir paprašyti įvesti atsakymą. Pirmokui suklydus, programa turėtų pasiūlyti atsakymą įvesti dar kartą.

let a = Math.round(Math.random() * 10);
let b = Math.round(Math.random() * 10);
let c;

while (true) {
  c = +prompt(`Calculate: ${a} + ${b}?`);
  if (a + b == c) {
    console.log(`Congrats! ${a} + ${b} = ${c}`);
    break;
  }
  alert(`Wrong answer. Try again`);
}

// 6 Parašykite programą, kuri atspausdintų įvesto skaičiaus s skaitmenis (nuo galo).

let s = +prompt(`Enter number`);
let n;

console.log(`Entered number: s = ${s}`);
console.log(`Digits:`);

while (s > 0) {
  n = Math.trunc(s % 10);
  console.log(n);
  s = Math.trunc(s / 10);
}

// Skaiciai is eiles (1):

// let x = +prompt(`Enter number`);
// let i = x.toString().length;
// let c;

// while (x >= 0 && i > 0) {
//   c = Math.trunc(x / Math.pow(10, i - 1));
//   console.log(c);
//   x -= c * Math.pow(10, i - 1);
//   i--;
// }

// Skaiciai is eiles (2):

// let x = +prompt(`Enter number`);
// let y = x;
// let n;
// let i = 0;
// let c;

// console.log(`Ivedastas skaicius: ${x}`);
// console.log(`Issivedam skaicius atvirksciai ir suskaiciuojam jų kieki`);

// while (x > 0) {
//   n = Math.trunc(x % 10);
//   console.log(n);
//   x = Math.trunc(x / 10);
//   i++;
// }

// console.log(`Pasitikrinam reiksmes`);
// console.log(`Kiekis, kuris veliau virs laipsniu i = ${i}`);
// console.log(`x = ${x}`);
// console.log(`x pradzioje issireiskiam y, kad nekistu`);
// console.log(`y = x: ${y}`);
// console.log(`Issivedam skaicius paeiliui`);

// while (y >= 0 && i > 0) {
//   c = Math.trunc(y / Math.pow(10, i - 1));
//   console.log(c);
//   y -= c * Math.pow(10, i - 1);
//   i--;
// }

// 7 Parašykite programą, kuri apskaičiuotų duotojo skaičiaus a skaitmenų sumą s.

let a = +prompt(`Enter number`);
let n;
let s = 0;

console.log(`Entered number: a = ${a}`);

while (a > 0) {
  n = Math.trunc(a % 10);
  a = Math.trunc(a / 10);
  s += n;
}

console.log(`Sum: ${s}`);

// 8 Parašykite programą, kuri apskaičiuotų duotojo skaičiaus a (nėra nulinių skaitmenų) skaitmenų sandaugą.

let a = +prompt(`Enter number`);
let n;
let s = 1;

console.log(`Entered number a = ${a}`);

while (a > 0) {
  n = Math.trunc(a % 10);
  a = Math.trunc(a / 10);
  if (n == 0) {
    continue;
  }
  s *= n;
}

console.log(`Sub: ${s}`);

// 9 Parašykite programą, kuri suskaičiuotų, kiek skaitmenų turi duotas skaičius a.

let a = +prompt(`Enter number`);
let s = 0;

console.log(`Entered number a = ${a}`);

while (a > 0) {
  a = Math.trunc(a / 10);
  s++;
}

console.log(`Count: ${s}`);

// 10 Parašykite programą, kuri suskaičiuotų, kiek duotas skaičius a turi lyginių ir nelyginių skaitmenų.

let a = +prompt(`Enter number`);
let n;
let even = 0;
let odd = 0;

console.log(`Entered number a = ${a}`);

while (a > 0) {
  n = Math.trunc(a % 10);
  a = Math.trunc(a / 10);
  if (n % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(`Even: ${even}, Odd: ${odd}`);