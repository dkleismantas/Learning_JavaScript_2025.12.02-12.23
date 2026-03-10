// 1 Parašykite programą, kuri atspausdintų visus vienaženklius skaičius.

for (let i = 0; i < 10; i++) {
  console.log(`${i}`);
}

// 2 Parašykite programą, kuri atspausdintų visus vienaženklius skaičius pakeltus kvadratu.  

for (let i = 0; i < 10; i++) {
  console.log(`${i} - ${Math.pow(i, 2)}`);
}

// 3 Parašykite programą, kuri atspausdintų visus dviženklius lyginius skaičius.

for (let i = 10; i < 100; i += 2) {
  console.log(`${i}`);
}

// 4 Parašykite programą, kuri atspausdintų tik tiek skaičių, pradedant nuo 1, iki Jūsų įvesto.

let a = +prompt("Iveskite skaiciu");

for (let i = 1; i <= a; i++) {
  console.log(`${i}`);
}

// 5 Parašykite programą, kuri atspausdintų skaičius iš jūsų nurodyto intervalo [a, b].

let a = +prompt("Iveskite pradini skaiciu");
let b = +prompt("Iveskite pabaigos skaiciu");

for (let i = a; i <= b; i++) {
  console.log(`${i}`);
}

// 6 Parašykite programą, kuri atspausdintų Jūsų vardo n kartų.

let v = prompt("Iveskite varda");
let n = +prompt("Iveskite skaiciu");

for (let i = 1; i <= n; i++) {
  console.log(`${v}`);
}

// 7 Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.

let n = +prompt("Iveskite skaiciu");

for (let i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}

// 8 Parašykite programą, skaičiuojančią funkcijos y = 7x2 + 5x – 3 reikšmes, kai x kinta [-10; 10].

let x = +prompt("Iveskite skaiciu");

for (let x = -10; x <= 10; x++) {
  console.log(`Kai x = ${x} tai y = ${7 * Math.pow(x, 2) + 5 * x - 3}`);
}

// 9 Restorano vadybininkas sugalvojo surengti konkursą lankytojams, kurio metu galima laimėti marškinėlius su restorano logotipu. Visi lankytojai kartu su sąskaita gauna po vieną kortelę, ant kurios parašytas sveikasis teigiamas skaičius iš intervalo [a;b] (a – intervalo pradžia, b – intervalo pabaiga). Laimi tie lankytojai, kurių kortelėse įrašytas skaičius dalijasi iš 6.
// Parašykite programą, kuri apskaičiuotų, kiek marškinėlių reikia užsakyti restorano vadybininkui.

let a = +prompt("iveskite pradini bilieto numeri");
let b = +prompt("iveskite paskutini numeri");
let kiekis = 0;
for (let i = a; i <= b; i++) {
  if (i % 6 == 0) {
    kiekis++;
  }
}

console.log(`Marskineliu kiekis: ${kiekis}`);

// 10 Prieš Kalėdas miško urėdijos prekiauja įvairaus aukščio eglutėmis. Į prekybos vietą atvežta n eglučių. Jų aukščiai yra e1, e2, …, en. Parašykite programą, skaičiuojančią vidutinį eglutės aukštį.

let n = +prompt("iveskite egluciu kieki");
let suma = 0;
let a;
let avg;
for (let i = 1; i <= n; i++) {
  a = +prompt(`Iveskite ${i} eglutes auksti`);
  console.log(`Ivestas ${i} eglutes aukstis ${a}`);
  suma += a;
  avg = (suma / i).toFixed(2);
}

console.log(`Egluiu auksio vidurkis: ${avg}`);

// ***11 Keturženklis skaičius x vadinamas laimingu, jei jo pirmųjų dviejų skaitmenų ir paskutiniųjųdviejų skaitmenų sumos kvadratas yra lygus x.
// Parašykite programą, kuri ekrane atspausdintų keturženklių skaičių iš intervalo [a; b] laimingus skaičius.

let a = +prompt(`Iveskite pirma keturzenkli skaiciu`)
let b = +prompt(`Iveskite antra keturzenkli skaiciu`);

for (let i = a; i < b; i++) {
  if (i == Math.pow(Math.trunc(i / 100) + (i % 100), 2)) {
    console.log(`Laimingi skaiciai: ${i}`);
  }
}
