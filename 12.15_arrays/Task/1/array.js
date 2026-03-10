// 1 Sukurkite tuščią masyvą pavadinimu array. Priskirkite masyvo elementams, kurių indeksai 0, 1, 2, bet kokias 3 reikšmes ir jį atspausdinkite.

let array = [];
array[0] = `Labas`;
array[1] = `as`;
array[2] = `krabas`;

console.log(array.join(` `));

// 2 Sukurkite masyvą pavadinimu array. Reikšmes masyvo elementams suteikite iš karto – inicijuokite, pvz.: let array = [2, 5, 6…]. Masyvo ilgis - 6. Atspausdinkite pirmą ir paskutinį masyvo elementą.

let array = [5, 8, 16, 11, 41, 100];

console.log(array[0]);
console.log(array[5]);

// 3 Sukurkite masyvą pavadinimu array. Reikšmes masyvo elementams suteikite iš karto – inicijuokite, pvz.: let array = [99, 55, 77]. Atspausdinkite masyvo elementų reikšmes ir jų vietą masyve.

let array = [101, 1, 5];

array.forEach((item, index) => console.log(`${item} and ${index}`));

// 4 Sukurkite masyvą pavadinimu array. Reikšmes masyvo elementams suteikite iš karto – inicijuokite, pvz.: let array = [2, 5, 6…]. Masyvo ilgis - 10. Masyvo elementų reikšmes atspausdinkite naudodami:

let array = [
  `labas`,
  5,
  NaN,
  undefined,
  true,
  14,
  `Dainius`,
  false,
  3.14,
  `Ne tavo reikalas`,
];

// 1. ciklą for.

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 2. forEach().

array.forEach((item) => console.log(item));

// 5 Sukurkite masyvą pavadinimu array, kuris saugo šias reikšmes: 100, 1000. Masyvo ilgis - 2. Pridėkite dar dvi reikšmes į masyvą, kad atspausdinus masyvą, jo reikšmės būtų šios: “Hello”, true, 100, 1000.

let array = [100, 1000];

array.unshift(`Hello`, true);

console.log(array.join(`, `));

// 6 Sukurkite masyvą pavadinimu array, kuris saugo šias reikšmes: 1, 2. Pridėkite reikšmę true į dešimtą masyvo vietą. Koks bus masyvo ilgis? Atspausdinkite šį masyvą keliais būdais:

let array = [1, 2];

array[9] = true;

console.log(array.length);

// 1. for

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 2. for..in

for (let item in array) {
  console.log(array[item]);
}

// 3. for..of

for (let item of array) {
  console.log(item);
}

// 4. forEach()

array.forEach((item) => console.log(item));

// 7 Sukurkite masyvą pavadinimu array. Reikšmes masyvo elementams suteikite iš karto – inicijuokite, pvz.: let array = [1, 2, 3…]. Masyvo ilgis - 15. Prie kiekvienos masyvo elemento reikšmės pridėkite dydį x. Dydis x yra įvedamas vartotojo (prompt()).

let array = [10, 15, 20, 30, 45, 105, 11, 25, 0, 999, 502, 336, 835, 8, 21];
let size = +prompt(`Insert number to add`);
let array2 = [];

for (let i = 0; i < array.length; i++) {
  array2.push(array[i] + size);
}

for (let item of array) {
  array2.push(item + size);
}

array.forEach((item) => array2.push(item + size));

console.log(array2.join(`, `));

// 8 Sukurkite masyvą pavadinimu array. Masyvo ilgis - 7. Masyvo elementų reikšmes priskirkite cikle (įvedama vartotojo, prompt()). Atspausdinkite masyvą.

let array = [];
let length = 7;

for (let index = 0; index < length; index++) {
  let value = prompt(`Iveskite ${index + 1} reiksme`);
  array[index] = value;
}

console.log(array.join(`, `));

// 9 Sukurkite du masyvus, kurių pavadinimai arr1 ir arr2. Masyvo elementų reikšmes priskirkite cikle (įvedama vartotojo). Masyvų ilgiai - 10. Sudėkite tose pačiose masyvų vietose esančias elementų reikšmes ir jas atspausdinkite.

let arr1 = [];
let arr2 = [];
let length2 = 10;

for (let index = 0; index < length2; index++) {
  let value = +prompt(`Iveskite pirmo masyvo ${index + 1} skaiciu`);
  arr1.push(value);
}

for (let index = 0; index < length2; index++) {
  let value = +prompt(`Iveskite antro masyvo ${index + 1} skaiciu`);
  arr2.push(value);
}

console.log(arr1.join(`, `));
console.log(arr2.join(`, `));

for (let index = 0; index < length; index++) {
  console.log(arr2[index] + arr1[index]);
}

// 10 Sukurkite tris skaičių masyvus, kurių pavadinimai arr1, arr2, arr3. Masyvų arr1 ir arr2 elementų reikšmes priskirkite cikle  (įvedama vartotojo). Masyvų ilgiai - 7. Masyvo arr3 elementų reikšmės bus kitų dviejų masyvų atitinkamų  elementų reikšmių sandaugos: t.y. arr3[0] = arr1[0] * arr2[0].
// Atspausdinkite masyvo arr3 elementų reikšmes.

let arr1 = [];
let arr2 = [];
let arr3 = [];
let length3 = 7;

for (let index = 0; index < length3; index++) {
  let value = +prompt(`Iveskite pirmo masyvo ${index + 1} skaiciu`);
  arr1.push(value);
}

for (let index = 0; index < length3; index++) {
  let value = +prompt(`Iveskite antro masyvo ${index + 1} skaiciu`);
  arr2.push(value);
}

console.log(arr1.join(`, `));
console.log(arr2.join(`, `));

for (let index = 0; index < length3; index++) {
  arr3.push(arr1[index] * arr2[index]);
}

console.log(arr3.join(`, `));

// 11 Sukurkite funkciją random(a, b), kuri gauna dvi reikšmes: intervalo pradžią a ir pabaigą b ir grąžina sugeneruotą (random) skaičių iš duoto intervalo.

function random(a, b) {
  for (let i = a; i <= b; i++) {
    return Math.trunc(Math.random() * (b - a + 1) + a);
  }
}

// Sukurkite masyvą a[n], kur n yra įvedamas iš klaviatūros. Panaudokite funkciją random(a, b) masyvo elementų reikšmių generavimui.

let pradzia = +prompt(`Iveskite intervalo pradzia`);
let pabaiga = +prompt(`Iveskite intervalo pabaiga`);
let a = [];
let n = +prompt(`Iveskite, kiek kartu kartoti`);

for (let i = 0; i < n; i++) {
  a.push(random(pradzia, pabaiga));
}

console.log(a.join(`, `));

// *** Toliau spręsdami uždavinius naudokite sukurtą funkciją random(a, b).

// 12 Sukurkite skaičių masyvą arrA[n], kur n - masyvo ilgis, lygus 12. Suskaičiuokite, kiek masyve yra reikšmių, kurios lygios 0. Naudokite:

let arrA = [];
let n = 12;
let reiksme0 = 0;

// 1. for

for (let i = 0; i < n; i++) {
  arrA.push(random(pradzia, pabaiga));
  if (arrA[i] == 0) {
    reiksme0++;
  }
}

console.log(arrA.toString());

console.log(reiksme0);

// 2. filter()

let reiksme02 = 0;
let arrA2 = arrA.filter((number0) => {
  if (number0 == 0) {
    reiksme02++;
  }
});

console.log(reiksme02);

// 13 Duotas skaičių masyvas arrB[n] (n=20). Parašykite programą, kuri suskaičiuotų kiek masyve  yra skaičių, kurie dalinasi iš trijų bei apskaičiuotų masyvo elementų, kurie dalijasi iš 3 sumą. Naudokite:

let arrB = [];
let n = 20;
let divideBy3 = 0;
let divideBy3Sum = 0;

// 1. for

for (let i = 0; i < n; i++) {
  arrB.push(random(pradzia, pabaiga));
  if (arrB[i] % 3 == 0) {
    divideBy3++;
    divideBy3Sum += arrB[i];
  }
}

console.log(arrB.toString());

console.log(divideBy3);
console.log(divideBy3Sum);

// 2. filter()

let divideBy3v2 = 0;
let divideBy3Sumv2 = 0;

arrB.filter((number0) => {
  if (number0 % 3 == 0) {
    divideBy3v2++;
    divideBy3Sumv2 += number0;
  }
});

console.log(divideBy3v2);
console.log(divideBy3Sumv2);

// 14 Parašykite programą, kuri masyvo arrC[n] (n=30), k-tąją (įvedama vartotojo) elemento reikšmę pakeistų reikšme 100. Atspausdinkite šį pakeistą masyvą.

let arrC = [];
let k = +prompt(`Iveskite, kuria reiksme keisite`);
let n = 30;

for (let i = 0; i < n; i++) {
  arrC.push(random(pradzia, pabaiga));
  if (i == k - 1) {
    arrC[i] = 100;
  }
}

console.log(arrC.toString());
console.log(arrC2.toString());

// 15 Duotas skaičių masyvas arrD[n] (n=20). Parašykite programą, kuri šio masyvo teigiamas reikšmes surašytų į masyvą arrE[m]. Atspausdinkite masyvus.

let arrD = [];
let arrE = [];
let n = 30;

for (let i = 0; i < n; i++) {
  arrD.push(random(pradzia, pabaiga));
  if (arrD[i] > 0) {
    arrE.push(arrD[i]);
  }
}

console.log(arrD.toString());
console.log(arrE.toString());

// 21 Duotas skaičių masyvas arrZ[n] (n=70). Raskite didžiausią ir mažiausią reikšmes bei jų eilės (indeksą) numerius masyve. Masyve turi būti viena didžiausia ir viena mažiausia reikšmė.

let arrZ = [];
let n = 70;
let min;
let min2;
let max;
let max2;

for (let i = 0; i < n; i++) {
  arrZ.push(random(pradzia, pabaiga));
  min = Math.min(...arrZ);
  if (arrZ[i] == min) {
    min2 = i;
  }
  max = Math.max(...a);
  if (a[i] == max) {
    max2 = i;
  }
}

console.log(a.toString());
console.log(`${min} - ${min2}, ${max} - ${max2}`);

// v2

let min = Infinity;
let min2 = -1;
let max = -Infinity;
let max2 = -1;

for (let i = 0; i < n; i++) {
  arrZ.push(random(pradzia, pabaiga));
  if (arrZ[i] < min) {
    min = arrZ[i];
    min2 = i;
  }
  if (arrZ[i] > max) {
    max = arrZ[i];
    max2 = i;
  }
}

console.log(a.toString());
console.log(
  `Maziausias: ${min} su indeksu: ${min2}, Didziausias: ${max} su indeksu: ${max2}`
);
