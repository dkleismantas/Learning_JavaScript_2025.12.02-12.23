// 1 Žinoma, kad iš skaičiaus sk galima ištraukti kvadratinę šaknį jeigu skaičius yra neneigiamas (sk≥0). Parašykite programą, kuri ištraukia kvadratinę šaknį iš duotojo skaičiaus sk.

let sk = +prompt("Iveskite teigiama skaiciu");
console.log(`Ivesta: ${sk}`);
if (sk >= 0) {
  console.log(`Gauta: ${Math.sqrt(sk)}`);
} else {
  console.log(
    `Gauta: Šaknies ištraukti negalima, nes įvestas neigiamas skaičius`
  );
}

// 2 Parašyti programą, kuri nustatytų, ar iš n degtukų galima sudaryti kvadratą.

let sk = +prompt("Iveskite degtuku skaiciu");
console.log(`Ivesta: ${sk}`);
if (sk % 4 == 0) {
  console.log(`Gauta: Kvadratą sudaryti galima`);
} else {
  console.log(`Gauta: Kvadrato sudaryti negalima`);
}

// 3 Parduotuvėje vyksta akcija, jeigu bet kurios prekės perkama daugiau nei 3 vienetai, taikoma 20 % nuolaidą nuo bendros sumos.
// Turime prekės kainą k ir perkamus vienetus vnt.

let k = +prompt("Iveskite prekes kaina");
let vnt = +prompt("Iveskite perkama prekes kieki");
console.log(`Ivesta: k = ${k} ir vnt = ${vnt}`);
if (vnt > 3) {
  console.log(`Gauta: Suma su nuolaida: ${(k * vnt * 0.8).toFixed(2)}`);
} else {
  console.log(`Gauta: Suma (be nuolaidos): ${(k * vnt).toFixed(2)}`);
}

// 4 Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių. Į mašiną telpa m dėžių. Parašykite programą, kuri apskaičiuotų, kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę.

let n = +prompt("Iveskite deziu kieki");
let m = +prompt("Iveskite i masina telpanciu deziu kieki");
console.log(`Ivesta:  n = ${n}, m = ${m}`);
// let k = Math.ceil(n / m)
// console.log(`Gauta: k = ${k}`)
let k;
if (n % m === 0) {
  k = n / m;
} else {
  k = Math.ceil(n / m);
}
console.log(`Gauta: k = ${k}`);

// 5 Parašykite programą, kuri mokinio gautą įvertinimą pateiktu žodžiu. Puikiai – 10, Labai gerai – 9, Gerai – 8, Vidutiniškai – 7, Reikia daugiau pastangų – 6 ir mažiau.

let i = +prompt("Iveskite pazymi");
console.log(`Ivesta: ${i}`);

if (i >= 0 && i <= 6) {
  console.log(`Reikia daugiau pastangų`);
} else {
  switch (i) {
    case 7:
      console.log(`Vidutiniškai`);
      break;
    case 8:
      console.log(`Gerai`);
      break;
    case 9:
      console.log(`Labai gerai`);
      break;
    case 10:
      console.log(`Puikiai`);
      break;
    default:
      console.log(`Toks pazymys negalimas`);
  }
}

// 6 Parašykite programą, kuri patikrina koks yra įvestas skaičius: neigiamas, teigiamas ar nulis.

let x = +prompt("Iveskite skaiciu");
console.log(`Ivesta: ${x}`);
if (x > 0) {
  console.log(`Gauta: Teigiamas`);
} else if (x < 0) {
  console.log(`Gauta: Neigiamas`);
} else {
  console.log(`Gauta: Nulis`);
}

// 7 Parašykite programą, kuri nustatytų kampo rūšį. Jeigu kampas lygus 90o tai statusis, jeigu 180o – ištiestinis, jeigu 360o – tai pilnutinis.

let a = +prompt("Iveskite kampa");
console.log(`Ivesta: ${a}`);
if (a == 0) {
  console.log(`Gauta: Nulinis kampas`);
} else if (a > 0 && a < 90) {
  console.log(`Gauta: Smailusis kampas`);
} else if (a == 90) {
  console.log(`Gauta: Statusis kampas`);
} else if (a > 90 && a < 180) {
  console.log(`Gauta: Bukasis kampas`);
} else if (a == 180) {
  console.log(`Gauta: Ištiestinis kampas`);
} else if (a > 180 && a < 360) {
  console.log(`Gauta: Išvirkštinis kampas`);
} else if (a == 360) {
  console.log(`Gauta: Pilnutinis kampas`);
} else {
  console.log(`Tokio kampo nera`);
}

// 8 Parašykite programą, kuri patikrintų ar įvestas skaičius yra triženklis.

let x = +prompt("Iveskite skaiciu");
console.log(`Ivesta: ${x}`);
if (
  (x == Math.trunc(x) && ((x > 99 && x < 1000) || (x > -1000 && x < -99))) ||
  (x == x.toFixed(1) && ((x >= 10 && x < 100) || (x > -100 && x <= -10))) ||
  (x == x.toFixed(2) && ((x >= 0 && x < 10) || (x > -10 && x < -0)))
) {
  console.log(`Gauta: Taip`);
} else {
  console.log(`Gauta: Ne`);
}

// 9 Parašykite programą, kuri nustatytų, ar iš duotų trijų atkarpų (įvedami jų ilgiai) galima sudaryti trikampį.

let a = +prompt("Iveskite pirma krastine");
let b = +prompt("Iveskite antra krastine");
let c = +prompt("Iveskite trecia krastine");
console.log(`Ivesta: ${a}, ${b}, ${c}`);
if (a + b > c && b + c > a && a + c > b) {
  console.log(`Gauta: Galima sudaryti trikampį`);
} else {
  console.log(`Gauta: Negalima sudaryti trikampio`);
}

// 10 Duoti trys skaičiai. Parašykite programą, kuri nustatytų, ar bent vienas iš jų yra lyginis.

let a = +prompt("Iveskite pirma skaiciu");
let b = +prompt("Iveskite antra skaiciu");
let c = +prompt("Iveskite trecia skaiciu");
console.log(`Ivesta: ${a}, ${b}, ${c}`);
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(`Gauta: Taip`);
} else {
  console.log(`Gauta: Ne`);
}

// 11 Duoti trys skaičiai. Parašykite programą, kuri nustatytų, ar tik vienas iš jų yra didesnis už 100.

let a = +prompt("Iveskite pirma skaiciu");
let b = +prompt("Iveskite antra skaiciu");
let c = +prompt("Iveskite trecia skaiciu");
console.log(`Ivesta: ${a}, ${b}, ${c}`);
if (
  (a >= 100 && a < 1000 && (b < 100 || b >= 1000) && (c < 100 || c >= 1000)) ||
  (b >= 100 && b < 1000 && (a < 100 || a >= 1000) && (c < 100 || c >= 1000)) ||
  (c >= 100 && c < 1000 && (b < 100 || b >= 1000) && (a < 100 || a >= 1000))
) {
  console.log(`Gauta: Tik vienas triženklis`);
} else if (
  (a < 100 || a >= 1000) &&
  (b < 100 || b >= 1000) &&
  (c < 100 || a >= 1000)
) {
  console.log(`Gauta: Mažiau nei vienas triženklis`);
} else {
  console.log(`Gauta: Daugiau nei vienas triženklis`);
}

// 12 Duomenys koduojami skaičiais. Saulėta – 1, lietinga – 2, vėjuota – 3, sniegas – 4. Parenkite programą, kuri įvedus kodą, atspausdintų jo reikšmę. Naudokite sakinį switch.

let x = +prompt("Iveskite oro koda");
console.log(`Ivesta: ${x}`);
switch (x) {
  case 1:
    console.log("Gauta: Saulėta");
    break;
  case 2:
    console.log("Gauta: Lietinga");
    break;
  case 3:
    console.log("Gauta: Vėjuota");
    break;
  case 4:
    console.log("Gauta: Sniegas");
    break;
  default:
    console.log("Gauta: Tokio kodo nėra");
}

// 13 Parenkite programą, kuri įvedus mėnesio numerį metuose, nustatytų koks tai metų laikas: vasara, ruduo, žiema, pavasaris.

let x = +prompt("Iveskite menesio skaiciu");
console.log(`Ivesta: ${x}`);
switch (x) {
  case 12:
  case 1:
  case 2:
    console.log("Gauta: Žiema");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Gauta: Pavasaris");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Gauta: Vasara");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Gauta: Ruduo");
    break;
  default:
    console.log("Gauta: Tokio mėnesio nėra");
}

// 14 Parenkite programą – skaičiuotuvas, kuri įvedus du skaičius ir operacijos simbolį, atlieką nurodytą veiksmą.

let x = +prompt("Iveskite pirma skaiciu");
let o = prompt("Iveskite norima atlikti veiksma");
let y = +prompt("Iveskite antra skaiciu");
let ats;
console.log(`Ivesta: ${x}, ${o}, ${y}`);
if (o === "+") {
  ats = x + y;
} else if (o === "-") {
  ats = x - y;
} else if (o === "*") {
  ats = x * y;
} else if (o === "/") {
  ats = x / y;
} else {
  console.log("Veiksmas negalimas");
}

if (ats !== undefined) {
  console.log(`Gauta: ${x} ${o} ${y} = ${ats}`);
}
